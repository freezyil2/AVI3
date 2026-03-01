import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, Anchor } from 'lucide-react';
import { useHomepageData } from '../useHomepageData';

const DEFAULT_FOOTER = {
  footerBrand: 'קרוז',
  footerBrandHighlight: 'לכול',
  footerCopyright: '© 2026 קרוז לכל - חוויה לכל המשפחה. כל הזכויות שמורות.',
};

export default function Footer() {
  const { hp } = useHomepageData();
  const L = hp?.homepageLabels as typeof DEFAULT_FOOTER | undefined;
  const brand = L?.footerBrand ?? DEFAULT_FOOTER.footerBrand;
  const brandHighlight = L?.footerBrandHighlight ?? DEFAULT_FOOTER.footerBrandHighlight;
  const copyright = L?.footerCopyright ?? DEFAULT_FOOTER.footerCopyright;

  return (
    <footer className="border-t border-white/5 bg-ocean-deep">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Anchor className="text-ocean-deep" size={18} />
          </div>
          <span className="text-xl font-black tracking-tighter text-pearl">
            {brand} <span className="text-gold">{brandHighlight}</span>
          </span>
        </Link>

        <p className="text-pearl/40 text-sm">
          {copyright}
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
