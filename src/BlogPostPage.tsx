import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import ContactForm from './components/ContactForm';
import { client } from './tinaClient';
import { blogPosts } from './data';
import { useBlogData } from './useBlogData';

const TINA_TIMEOUT = 10000;

function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    p,
    new Promise<T>((_, rej) => setTimeout(() => rej(new Error('timeout')), ms)),
  ]);
}

export default function BlogPostPage() {
  const { id } = useParams();
  const { blogPageLabels: L, allPosts, loading: blogLoading } = useBlogData();
  const [post, setPost] = useState<{
    title: string;
    excerpt: string;
    date: string;
    image: string;
    content: string;
    author?: string;
    readTime?: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      if (!id) {
        setPost(null);
        setLoading(false);
        return;
      }

      try {
        const res = await withTimeout(
          client.queries.post({ relativePath: id + '.md' }),
          TINA_TIMEOUT
        );
        const n = res?.data?.post;

        if (cancelled) return;

        if (n) {
          const img = n.image;
          const image = typeof img === 'string' ? img : (img as { src?: string })?.src ?? '';
          const body = n.body;
          const content = typeof body === 'string' ? body : '';
          const node = n as { author?: string; readTime?: string };

          setPost({
            title: n.title ?? '',
            excerpt: n.excerpt ?? '',
            date: n.date ?? '',
            image,
            content,
            author: node.author,
            readTime: node.readTime,
          });
          setLoading(false);
          return;
        }
      } catch {
        // Tina post not found
      }

      if (!cancelled) {
        const fromAll = allPosts.find((p) => p.id === id);
        if (fromAll) {
          setPost({
            title: fromAll.title,
            excerpt: fromAll.excerpt,
            date: fromAll.date,
            image: fromAll.image,
            content: fromAll.content ?? '',
            author: fromAll.author,
            readTime: fromAll.readTime,
          });
        } else {
          const dataPost = blogPosts.find((p) => p.id === id);
          if (dataPost) {
            setPost({
              title: dataPost.title,
              excerpt: dataPost.excerpt,
              date: dataPost.date,
              image: dataPost.image,
              content: (dataPost as { content?: string }).content ?? '',
            });
          } else {
            setPost(null);
          }
        }
      }
      setLoading(false);
    };

    setLoading(true);
    load();
    return () => { cancelled = true; };
  }, [id, blogLoading]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-pearl/50">
        טוען...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-pearl/50">הפוסט לא נמצא</p>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-ocean-deep">
      <section className="relative h-[70vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ocean-deep via-ocean-deep/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12 container mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gold mb-6 hover:gap-4 transition-all"
          >
            <ArrowRight size={20} />
            <span className="font-bold">{L.backToBlog}</span>
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black max-w-4xl leading-tight"
          >
            {post.title}
          </motion.h1>

          <div className="flex flex-wrap items-center gap-6 mt-8 text-pearl/60">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-gold" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={18} className="text-gold" />
              <span>{post.author ?? L.authorLabel}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-gold" />
              <span>{post.readTime ?? L.readTimeLabel}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
            <div className="glass-morphism p-8 md:p-16 rounded-[40px] mb-16">
            <div className="markdown-body prose prose-invert prose-gold max-w-none">
              {post.content ? (
                <ReactMarkdown>{post.content}</ReactMarkdown>
              ) : (
                <p className="text-pearl/70">{post.excerpt || 'אין תוכן זמין.'}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-linear-to-b from-ocean-deep to-[#001229]">
        <ContactForm />
      </div>
    </div>
  );
}
