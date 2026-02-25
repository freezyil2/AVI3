import { useState, useEffect } from 'react';
import { ChevronUp, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              href="https://wa.me/123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={32} />
            </motion.a>
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className="w-14 h-14 bg-gold text-ocean-deep rounded-full shadow-2xl flex items-center justify-center hover:bg-yellow-400 transition-colors"
              aria-label="Back to top"
            >
              <ChevronUp size={32} />
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
