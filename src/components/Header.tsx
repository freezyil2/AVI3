import { useState, useEffect } from 'react';
import { Search, Menu, X, Anchor } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { destinations, ships, cruiseLines } from '../data';
import logoImg from './logoW.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchQuery.length > 1) {
      const dResults = destinations.filter(d => d.name.includes(searchQuery));
      const sResults = ships.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
      const lResults = cruiseLines.filter(l => l.name.toLowerCase().includes(searchQuery.toLowerCase())).map(l => ({...l, type: 'cruise-line'}));
      setSearchResults([...dResults, ...sResults, ...lResults]);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-ocean-deep/90 backdrop-blur-lg py-3 shadow-2xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo - organized in a clean container */}
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className="flex items-center justify-center h-14 w-auto max-h-14">
            <img 
              src={logoImg} 
              alt="קרוז לכול" 
              className="h-full w-auto max-h-14 object-contain object-center transition-transform duration-300 group-hover:scale-105" 
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className="hover:text-gold transition-colors font-medium">בית</Link>
          <Link to="/#destinations" onClick={(e) => handleNavClick(e, '#destinations')} className="hover:text-gold transition-colors font-medium">יעדים</Link>
          <Link to="/fleet" className="hover:text-gold transition-colors font-medium">צי האוניות</Link>
          <Link to="/hotels" className="hover:text-gold transition-colors font-medium">מלונות</Link>
          <Link to="/blog" className="hover:text-gold transition-colors font-medium">בלוג וכתבות</Link>
          <Link to="/#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-gold transition-colors font-medium">צור קשר</Link>
        </nav>

        {/* Search & Actions */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="חפש יעד או אונייה..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-full py-2 px-10 focus:outline-none focus:border-gold w-64 transition-all"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50" size={18} />
            
            {/* Search Results Dropdown */}
            <AnimatePresence>
              {searchResults.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 w-full bg-ocean-deep border border-gold/30 rounded-xl overflow-hidden shadow-2xl"
                >
                  {searchResults.map(item => (
                    <button
                      key={item.id}
                      onClick={() => {
                        navigate(`/${item.type}/${item.id}`);
                        setSearchQuery('');
                      }}
                      className="w-full text-right p-3 hover:bg-gold/10 transition-colors border-b border-white/5 last:border-none flex items-center justify-between"
                    >
                      <span>{item.name}</span>
                      <span className="text-[10px] text-gold uppercase tracking-widest">
                        {item.type === 'destination' ? 'יעד' : item.type === 'ship' ? 'אונייה' : 'חברת ספנות'}
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button 
            className="lg:hidden text-pearl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-ocean-deep border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold">בית</Link>
              <Link to="/#destinations" onClick={(e) => handleNavClick(e, '#destinations')} className="text-xl font-bold">יעדים</Link>
              <Link to="/fleet" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold">צי האוניות</Link>
              <Link to="/hotels" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold">מלונות</Link>
              <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold">בלוג וכתבות</Link>
              <Link to="/#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-xl font-bold">צור קשר</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
