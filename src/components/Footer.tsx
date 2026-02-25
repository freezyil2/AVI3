import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, Anchor } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-ocean-deep">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Anchor className="text-ocean-deep" size={18} />
          </div>
          <span className="text-xl font-black tracking-tighter text-pearl">
            קרוז <span className="text-gold">לכול</span>
          </span>
        </Link>
        
        <p className="text-pearl/40 text-sm">
          © 2026 קרוז לכל - חוויה לכל המשפחה. כל הזכויות שמורות.
        </p>
        
        <div className="flex gap-5">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-pearl/60 hover:bg-gold hover:text-ocean-deep transition-all duration-300" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-pearl/60 hover:bg-gold hover:text-ocean-deep transition-all duration-300" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-pearl/60 hover:bg-gold hover:text-ocean-deep transition-all duration-300" aria-label="Youtube">
            <Youtube size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-pearl/60 hover:bg-gold hover:text-ocean-deep transition-all duration-300" aria-label="Twitter">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
