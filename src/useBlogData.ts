import { useState, useEffect } from 'react';
import { client } from './tinaClient';
import { blogPosts as dataBlogPosts } from './data';

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  content?: string;
  author?: string;
  readTime?: string;
};

const DEFAULT_BLOG_LABELS = {
  backToBlog: 'חזרה לבלוג',
  titlePrefix: 'בלוג',
  titleHighlight: 'הפלגות',
  subtitle: 'כל מה שצריך לדעת על עולם הקרוזים: טיפים, המלצות, וסיפורי מסע מהיעדים היפים בעולם.',
  searchPlaceholder: 'חפש בכתבות...',
  featuredBadge: 'מומלץ',
  readFullArticle: 'קרא את הכתבה המלאה',
  readMore: 'קרא עוד',
  authorLabel: 'מערכת האתר',
  readTimeLabel: '8 דקות',
  allPostsLink: 'כל הכתבות',
  homepageTitlePrefix: 'בלוג',
  homepageTitleHighlight: 'מסעות',
};

export type BlogPageLabels = typeof DEFAULT_BLOG_LABELS;

const TINA_TIMEOUT_MS = 10000;

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error('Tina timeout')), ms)
    ),
  ]);
}

function resolveImage(img: string | { src?: string } | null | undefined): string {
  if (!img) return '';
  return typeof img === 'string' ? img : (img?.src ?? '');
}

export function useBlogData() {
  const [posts, setPosts] = useState<BlogPost[] | null>(null);
  const [hp, setHp] = useState<{
    blogPageLabels?: Partial<BlogPageLabels>;
    homepageBlogPostIds?: string[];
  } | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const [postRes, homeRes] = await withTimeout(
          Promise.all([
            client.queries.postConnection({ first: 100 }),
            client.queries.homepage({ relativePath: 'index.json' }),
          ]),
          TINA_TIMEOUT_MS
        );

        if (cancelled) return;

        const edges = postRes?.data?.postConnection?.edges ?? [];
        const postFromFiles: BlogPost[] = edges
          .filter((e): e is NonNullable<typeof e> => Boolean(e?.node))
          .map((e) => {
            const n = e!.node!;
            const id = n._sys?.basename ?? n.id;
            const node = n as { author?: string; readTime?: string };
            return {
              id,
              title: n.title ?? '',
              excerpt: n.excerpt ?? '',
              date: n.date ?? '',
              image: resolveImage(n.image as string | { src?: string }),
              content: typeof n.body === 'string' ? n.body : undefined,
              author: node.author,
              readTime: node.readTime,
            };
          });

        const hpData = homeRes?.data?.homepage as { blogPosts?: Array<{ id: string; title?: string; excerpt?: string; date?: string; image?: string | { src?: string }; author?: string; readTime?: string; body?: string }> } | undefined;
        const hpPostsList = hpData?.blogPosts ?? [];
        const postsFromHomepage: BlogPost[] = hpPostsList
          .filter((p) => p?.id)
          .map((p) => ({
            id: p.id,
            title: p.title ?? '',
            excerpt: p.excerpt ?? '',
            date: p.date ?? '',
            image: resolveImage(p.image),
            author: p.author,
            readTime: p.readTime,
            content: p.body,
          }));

        const merged: BlogPost[] = [...postFromFiles];
        postsFromHomepage.forEach((p) => {
          if (!merged.some((x) => x.id === p.id)) merged.push(p);
        });

        setPosts(merged.length > 0 ? merged : dataBlogPosts.map((p) => ({
          id: p.id,
          title: p.title,
          excerpt: p.excerpt,
          date: p.date,
          image: p.image,
          content: (p as { content?: string }).content,
        })));

        const home = homeRes?.data?.homepage as typeof hp | undefined;
        setHp({
          blogPageLabels: home?.blogPageLabels as Partial<BlogPageLabels> | undefined,
          homepageBlogPostIds: Array.isArray(home?.homepageBlogPostIds)
            ? (home.homepageBlogPostIds as string[]).filter((x): x is string => typeof x === 'string')
            : [],
        });
      } catch {
        if (!cancelled) {
          setPosts(dataBlogPosts.map((p) => ({
            id: p.id,
            title: p.title,
            excerpt: p.excerpt,
            date: p.date,
            image: p.image,
            content: (p as { content?: string }).content,
          })));
          setHp(null);
        }
      }
    };

    load();
    return () => { cancelled = true; };
  }, []);

  const allPosts = posts ?? dataBlogPosts.map((p) => ({
    id: p.id,
    title: p.title,
    excerpt: p.excerpt,
    date: p.date,
    image: p.image,
    content: (p as { content?: string }).content,
  }));

  const ids = hp?.homepageBlogPostIds ?? [];
  const homepagePosts: BlogPost[] =
    ids.length > 0
      ? ids
          .map((id) => allPosts.find((p) => p.id === id))
          .filter((p): p is BlogPost => Boolean(p))
      : allPosts;

  const blogLabels: BlogPageLabels = { ...DEFAULT_BLOG_LABELS, ...hp?.blogPageLabels };

  return {
    loading: posts === null && hp === null,
    allPosts,
    homepagePosts,
    blogPageLabels: blogLabels,
  };
}
