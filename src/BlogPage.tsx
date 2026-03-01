import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useBlogData } from './useBlogData';
import { Calendar, ArrowLeft, Clock, Search } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function BlogPage() {
  const [filter, setFilter] = useState('');
  const { allPosts, blogPageLabels: L } = useBlogData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = allPosts.filter(
    (post) =>
      post.title.includes(filter) || post.excerpt.includes(filter)
  );

  const featuredPost = allPosts[0];
  const remainingPosts = filteredPosts.filter((p) => p.id !== featuredPost?.id);

  if (!featuredPost) {
    return (
      <div className="pt-32 min-h-screen bg-ocean-deep flex items-center justify-center">
        <p className="text-pearl/50">אין כתבות להצגה</p>
      </div>
    );
  }

  return (
    <div className="pt-32 min-h-screen bg-ocean-deep">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black mb-6"
          >
            {L.titlePrefix} <span className="text-gold">{L.titleHighlight}</span>
          </motion.h1>
          <p className="text-pearl/60 text-xl max-w-2xl mx-auto mb-10">
            {L.subtitle}
          </p>

          <div className="max-w-md mx-auto relative mb-20">
            <input
              type="text"
              placeholder={L.searchPlaceholder}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-12 focus:outline-none focus:border-turquoise transition-all text-center"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-turquoise/50" size={20} />
          </div>
        </div>

        {/* Featured Post */}
        {!filter && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-20"
          >
            <Link
              to={`/blog/${featuredPost.id}`}
              className="group relative block h-[500px] rounded-[48px] overflow-hidden shadow-2xl"
            >
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ocean-deep via-ocean-deep/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-12 md:p-20">
                <div className="flex items-center gap-4 text-gold text-sm font-bold mb-6 uppercase tracking-widest">
                  <span className="bg-gold text-ocean-deep px-3 py-1 rounded-full text-[10px]">
                    {L.featuredBadge}
                  </span>
                  <span>{featuredPost.date}</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-6 max-w-3xl leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-pearl/70 text-lg max-w-2xl line-clamp-2 mb-8">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-2 text-gold font-black text-lg">
                  <span>{L.readFullArticle}</span>
                  <ArrowLeft size={24} className="group-hover:-translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {(filter ? filteredPosts : remainingPosts).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-morphism group overflow-hidden rounded-[32px] border-white/5 hover:border-gold/30 transition-all"
            >
              <Link to={`/blog/${post.id}`}>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ocean-deep via-transparent to-transparent" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-pearl/40 text-[10px] mb-4 uppercase tracking-widest font-bold">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="text-gold" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} className="text-gold" />
                      <span>{post.readTime ?? L.readTimeLabel}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-gold transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-pearl/60 mb-6 line-clamp-2 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-gold font-bold text-sm">
                    <span>{L.readMore}</span>
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
