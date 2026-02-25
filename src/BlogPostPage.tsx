import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { blogPosts } from './data';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import ContactForm from './components/ContactForm';
import { useEffect } from 'react';

export default function BlogPostPage() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) return <div className="h-screen flex items-center justify-center">הפוסט לא נמצא</div>;

  return (
    <div className="pt-24 min-h-screen bg-ocean-deep">
      {/* Hero Image */}
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
          <Link to="/" className="inline-flex items-center gap-2 text-gold mb-6 hover:gap-4 transition-all">
            <ArrowRight size={20} />
            <span className="font-bold">חזרה לבלוג</span>
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
              <span>מערכת האתר</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-gold" />
              <span>8 דקות קריאה</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-morphism p-8 md:p-16 rounded-[40px] mb-16">
            <div className="markdown-body prose prose-invert prose-gold max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form at bottom as requested */}
      <div className="bg-linear-to-b from-ocean-deep to-[#001229]">
        <ContactForm />
      </div>
    </div>
  );
}
