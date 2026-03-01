import { motion, useScroll, useTransform } from 'motion/react';
import { DestinationCard, ShipCard } from './components/Cards';
import { cruiseLines } from './data';
import { ArrowLeft, Calendar, User, ChevronDown, Search, Ship, HelpCircle, PlayCircle, ShieldCheck } from 'lucide-react';
import ContactForm from './components/ContactForm';
import SearchWidget from './components/SearchWidget';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useBlogData } from './useBlogData';
import { useHomepageData } from './useHomepageData';

const DEFAULT_LABELS = {
  heroTagline: 'החופשה המושלמת מתחילה כאן',
  heroParagraph: 'גלו את היעדים הקסומים ביותר בעולם על סיפון האוניות המפוארות ביותר. חוויה של פעם בחיים מחכה לכם במרחק לחיצה.',
  heroBtnDestinations: 'גלה יעדים',
  heroBtnFleet: 'הצי שלנו',
  scrollDown: 'גלול למטה',
  stats: [
    { value: '50K+', label: 'נוסעים מרוצים' },
    { value: '120+', label: 'יעדים בעולם' },
    { value: '21', label: 'אוניות בצי' },
    { value: '15', label: 'שנות ניסיון' },
  ],
  destinationsTitle: 'יעדים',
  destinationsHighlight: 'פופולריים',
  destinationsSubtitle: 'הנמלים המבוקשים ביותר בעולם, שנבחרו בקפידה כדי להעניק לכם חוויה תרבותית ונופית בלתי נשכחת.',
  fleetTitlePrefix: 'צי ה',
  fleetTitleHighlight: 'אוניות',
  fleetTitleSuffix: 'שלנו',
  fleetSubtitle: 'ממפלצות ים טכנולוגיות ועד ליאכטות בוטיק אינטימיות. כל אונייה היא יצירת אמנות של הנדסה ועיצוב.',
  fleetSearchPlaceholder: 'חפש אונייה בצי...',
  fleetNoResults: 'לא נמצאו אוניות התואמות את החיפוש שלך.',
  fleetViewAll: 'צפה בכל הצי המלא',
  cruiseLinesTitlePrefix: 'חברות ה',
  cruiseLinesTitleHighlight: 'ספנות',
  cruiseLinesTitleSuffix: 'שאנחנו עובדים איתן',
  cruiseLinesSubtitle: 'גלו את כל חברות הספנות המובילות בעולם במקום אחד.',
  hotelsTitle: 'מלונות',
  hotelsSubtitle: 'אנחנו עובדים עם כל המלונות בעולם. השאירו פרטים ונחזור אליכם עם הצעה מותאמת אישית.',
  hotelsButton: 'השאירו פרטים לקבלת הצעה',
  howItWorksTitle: 'איך זה',
  howItWorksHighlight: 'עובד?',
  howItWorksSubtitle: 'הדרך לחופשת החלומות שלכם פשוטה ומהירה. הנה השלבים בדרך אל הסיפון.',
  howItWorksSteps: [
    { title: 'בחירת יעד', desc: 'בחרו את היעד שבו תמיד חלמתם לבקר מתוך מאות אפשרויות.' },
    { title: 'בחירת אונייה', desc: 'מצאו את האונייה שמתאימה בדיוק לסגנון שלכם - ממשפחות ועד יוקרה.' },
    { title: 'ייעוץ אישי', desc: 'המומחים שלנו יחזרו אליכם כדי להתאים את החדר והמסלול המושלם.' },
    { title: 'יוצאים לדרך', desc: 'קבלו את כל המסמכים וצאו לחופשה שתזכרו לכל החיים.' },
  ],
  whyChooseTitle: 'למה לבחור',
  whyChooseHighlight: 'בנו?',
  whyChooseSubtitle: 'אנחנו לא רק מוכרים חופשות, אנחנו יוצרים זיכרונות לכל החיים עם דגש על שירות אישי ואיכות ללא פשרות.',
  whyChooseItems: [
    { title: 'מחיר מנצח', desc: 'התחייבות למחירים הטובים ביותר בשוק בזכות קשרים ישירים עם חברות הספנות.' },
    { title: 'שירות אישי 24/7', desc: 'ליווי צמוד מרגע ההזמנה ועד החזרה הביתה, כולל מענה לכל שאלה בזמן ההפלגה.' },
    { title: 'התאמה מושלמת', desc: 'אנחנו יודעים להתאים את האונייה והמסלול בדיוק לאופי שלכם - ממשפחות ועד זוגות.' },
  ],
  testimonialsTitle: 'מה הלקוחות',
  testimonialsHighlight: 'מספרים?',
  testimonialsIntro: 'אלפי ישראלים כבר בחרו בנו לחופשת החלומות שלהם. הנה חלק מהחוויות שלהם.',
  testimonials: [
    { name: 'משפחת לוי', text: 'הקרוז בים התיכון היה פשוט מושלם. הילדים נהנו מכל רגע והשירות של הצוות היה מעל ומעבר.', date: 'אוגוסט 2025' },
    { name: 'דני ומיכל', text: 'ירח הדבש שלנו באיים הקריביים היה חלומי. תודה על ההמלצה על האונייה, היא הייתה בדיוק מה שחיפשנו.', date: 'ינואר 2026' },
  ],
  ourStoryTitle: 'הסיפור',
  ourStoryHighlight: 'שלנו',
  ourStoryParagraph1: 'לפני למעלה מ-15 שנה, יצאנו לדרך עם חלום אחד פשוט: להנגיש את עולם הקרוזים היוקרתי לכל ישראלי.',
  ourStoryParagraph2: 'אנחנו מאמינים שחופשה היא לא רק זמן מנוחה, אלא הזדמנות ליצור זיכרונות שישארו איתכם לנצח.',
  ourStoryTeamLabel: 'צוות המומחים שלנו מחכה לכם',
  faqTitle: 'שאלות',
  faqHighlight: 'נפוצות',
  faqSubtitle: 'כל מה שרציתם לדעת על הזמנת קרוז ולא העזתם לשאול.',
  faqItems: [
    { q: 'האם המחיר כולל טיסות?', a: 'המחירים המוצגים באתר הם עבור הקרוז בלבד. המומחים שלנו ישמחו להציע לכם חבילות הכוללות טיסות והעברות בהתאמה אישית.' },
    { q: 'מה כולל המחיר של הקרוז?', a: 'המחיר כולל לינה בחדר שבחרתם, ארוחות מלאות (פנסיון מלא), שימוש במתקני האונייה (בריכות, חדר כושר) ומופעי בידור.' },
    { q: 'האם צריך ויזה להפלגה?', a: 'דרישות הוויזה משתנות בהתאם ליעד ההפלגה ולאזרחות שלכם. אנחנו ננחה אתכם בדיוק אילו מסמכים עליכם להכין לקראת הנסיעה.' },
    { q: 'האם יש רופא על האונייה?', a: 'כן, בכל אונייה יש מרכז רפואי מאובזר עם רופאים ואחיות הזמינים 24/7 למקרי חירום.' },
  ],
};

export default function HomePage() {
  const { hp, destinations: displayDestinations, homepageShips, faq: faqList } = useHomepageData();
  const { homepagePosts, blogPageLabels: blogL } = useBlogData();
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const [shipFilter, setShipFilter] = useState('');

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        const element = document.querySelector(anchor.hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    // Scroll to hash on mount
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }

    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const L = hp.homepageLabels ?? DEFAULT_LABELS;
  const filteredShips = homepageShips.filter(ship =>
    ship.name.toLowerCase().includes(shipFilter.toLowerCase()) ||
    ship.cruiseLine.toLowerCase().includes(shipFilter.toLowerCase())
  );
  const faqItems = (faqList?.length ?? 0) > 0
    ? faqList.map((x: { question?: string; answer?: string }) => ({ q: x.question ?? '', a: x.answer ?? '' }))
    : DEFAULT_LABELS.faqItems;

  return (
    <main className="relative">
      {/* Hero Section - image extends to top, not cropped */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.15, opacity: 0, filter: 'blur(20px)' }}
          animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Cruise Ship"
            className="w-full h-full object-cover object-top"
            style={{ objectPosition: 'top center' }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-b from-ocean-deep/30 via-ocean-deep/50 to-ocean-deep" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          {/* Decorative Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-20 -left-20 w-64 h-64 bg-gold/10 blur-3xl rounded-full hidden lg:block"
          />
          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-turquoise/10 blur-3xl rounded-full hidden lg:block"
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "0.8em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ duration: 2, delay: 1.5 }}
              className="text-gold font-bold text-sm uppercase mb-8 block"
            >
              {(L as any).heroTagline ?? DEFAULT_LABELS.heroTagline}
            </motion.span>
            <h1 className="text-6xl md:text-9xl font-black mb-10 leading-tight tracking-tighter">
              {hp.heroTitle ?? 'קרוז לכול'}
              {hp.heroSubtitle ? (
                <>
                  <br />
                  <span className="text-gradient-gold">{hp.heroSubtitle}</span>
                </>
              ) : null}
            </h1>
            <p className="text-xl md:text-2xl text-pearl/80 mb-14 max-w-3xl mx-auto leading-relaxed font-light">
              {(L as any).heroParagraph ?? DEFAULT_LABELS.heroParagraph}
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="flex flex-wrap justify-center gap-10 md:gap-16 mt-12"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#destinations" 
                className="bg-gold text-ocean-deep px-12 py-5 rounded-full font-black text-xl hover:bg-yellow-400 transition-all shadow-2xl shadow-gold/30"
              >
                {(L as any).heroBtnDestinations ?? DEFAULT_LABELS.heroBtnDestinations}
              </motion.a>
              <Link to="/fleet">
                <motion.span
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block glass-morphism px-12 py-5 rounded-full font-black text-xl border border-white/20 transition-all"
                >
                  {(L as any).heroBtnFleet ?? DEFAULT_LABELS.heroBtnFleet}
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-50">{(L as any).scrollDown ?? DEFAULT_LABELS.scrollDown}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* Search Widget Section */}
      <section className="relative z-20 -mt-12 md:-mt-16 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <SearchWidget />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-ocean-deep border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {((L as any).stats ?? DEFAULT_LABELS.stats).map((stat: { value: string; label: string }, i: number) => (
              <div key={i}>
                <div className="text-3xl md:text-5xl font-black text-gold mb-2">{stat.value}</div>
                <div className="text-pearl/40 text-xs md:text-sm uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-24 bg-ocean-deep">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-4">{(L as any).destinationsTitle ?? DEFAULT_LABELS.destinationsTitle} <span className="text-gold">{(L as any).destinationsHighlight ?? DEFAULT_LABELS.destinationsHighlight}</span></h2>
              <p className="text-pearl/60 text-lg max-w-xl">{(L as any).destinationsSubtitle ?? DEFAULT_LABELS.destinationsSubtitle}</p>
            </div>
            <div className="flex gap-4">
              {/* Navigation buttons could go here */}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayDestinations.map((dest) => (
              <DestinationCard key={dest.id} item={dest} />
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-24 bg-linear-to-b from-ocean-deep to-[#001229]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4">{(L as any).fleetTitlePrefix ?? DEFAULT_LABELS.fleetTitlePrefix}<span className="text-turquoise">{(L as any).fleetTitleHighlight ?? DEFAULT_LABELS.fleetTitleHighlight}</span>{(L as any).fleetTitleSuffix ?? DEFAULT_LABELS.fleetTitleSuffix}</h2>
            <p className="text-pearl/60 text-lg max-w-2xl mx-auto mb-10">{(L as any).fleetSubtitle ?? DEFAULT_LABELS.fleetSubtitle}</p>
            
            {/* Ship Filter Bar */}
            <div className="max-w-md mx-auto relative">
              <input 
                type="text" 
                placeholder={(L as any).fleetSearchPlaceholder ?? DEFAULT_LABELS.fleetSearchPlaceholder}
                value={shipFilter}
                onChange={(e) => setShipFilter(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-12 focus:outline-none focus:border-turquoise transition-all text-center"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-turquoise/50" size={20} />
            </div>
          </div>

          <div className="space-y-12">
            {filteredShips.length > 0 ? (
              filteredShips.slice(0, 5).map((ship) => (
                <ShipCard key={ship.id} item={ship} />
              ))
            ) : (
              <div className="text-center py-20 glass-morphism rounded-3xl">
                <p className="text-xl text-pearl/50">{(L as any).fleetNoResults ?? DEFAULT_LABELS.fleetNoResults}</p>
              </div>
            )}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/fleet">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-morphism px-12 py-4 rounded-full font-black text-lg hover:bg-white/20 transition-all"
              >
                {(L as any).fleetViewAll ?? DEFAULT_LABELS.fleetViewAll}
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cruise Lines Section */}
      <section className="py-24 bg-ocean-deep overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">{(L as any).cruiseLinesTitlePrefix ?? DEFAULT_LABELS.cruiseLinesTitlePrefix}<span className="text-gold">{(L as any).cruiseLinesTitleHighlight ?? DEFAULT_LABELS.cruiseLinesTitleHighlight}</span>{(L as any).cruiseLinesTitleSuffix ?? DEFAULT_LABELS.cruiseLinesTitleSuffix}</h2>
            <p className="text-pearl/60 text-lg">{(L as any).cruiseLinesSubtitle ?? DEFAULT_LABELS.cruiseLinesSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {cruiseLines.map((line) => (
              <Link key={line.id} to={`/cruise-line/${line.id}`} className="flex flex-col items-center gap-4 group">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-all duration-500 group-hover:scale-110">
                  <Ship className="text-gold" size={32} />
                </div>
                <span className="text-pearl/80 text-sm font-bold group-hover:text-gold transition-colors text-center">{line.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hotels Section */}
      <section id="hotels" className="py-24 bg-[#000a1a] overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">{(L as any).hotelsTitle ?? DEFAULT_LABELS.hotelsTitle}</h2>
          <p className="text-pearl/60 text-lg max-w-2xl mx-auto mb-8">
            {(L as any).hotelsSubtitle ?? DEFAULT_LABELS.hotelsSubtitle}
          </p>
          <Link to="/hotels">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-ocean-deep px-12 py-4 rounded-full font-black text-lg hover:bg-yellow-400 transition-colors"
            >
              {(L as any).hotelsButton ?? DEFAULT_LABELS.hotelsButton}
            </motion.button>
          </Link>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">{(L as any).howItWorksTitle ?? DEFAULT_LABELS.howItWorksTitle} <span className="text-gold">{(L as any).howItWorksHighlight ?? DEFAULT_LABELS.howItWorksHighlight}</span></h2>
            <p className="text-pearl/60 text-lg max-w-2xl mx-auto">{(L as any).howItWorksSubtitle ?? DEFAULT_LABELS.howItWorksSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gold/10 -translate-y-1/2 z-0" />
            
            {((L as any).howItWorksSteps ?? DEFAULT_LABELS.howItWorksSteps).map((step: { title: string; desc: string }, i: number) => {
              const icons = [<Search key="s" size={32} />, <Ship key="sh" size={32} />, <HelpCircle key="h" size={32} />, <ShieldCheck key="sc" size={32} />];
              return (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-ocean-deep border-2 border-gold/30 rounded-full flex items-center justify-center text-gold mb-6 shadow-xl shadow-gold/5">
                  {icons[i]}
                </div>
                <h3 className="text-xl font-black mb-4">{step.title}</h3>
                <p className="text-pearl/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">{(L as any).whyChooseTitle ?? DEFAULT_LABELS.whyChooseTitle} <span className="text-gold">{(L as any).whyChooseHighlight ?? DEFAULT_LABELS.whyChooseHighlight}</span></h2>
            <p className="text-pearl/60 text-lg max-w-2xl mx-auto">{(L as any).whyChooseSubtitle ?? DEFAULT_LABELS.whyChooseSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {((L as any).whyChooseItems ?? DEFAULT_LABELS.whyChooseItems).map((item: { title: string; desc: string }, i: number) => {
              const icons = ['💰', '⚓', '✨'];
              return (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass-morphism p-10 rounded-[40px] text-center border-white/5 hover:border-gold/20 transition-all"
              >
                <div className="text-5xl mb-6">{icons[i]}</div>
                <h3 className="text-2xl font-black mb-4 text-gold">{item.title}</h3>
                <p className="text-pearl/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#000a1a]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/3">
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">{(L as any).testimonialsTitle ?? DEFAULT_LABELS.testimonialsTitle} <br /><span className="text-gold">{(L as any).testimonialsHighlight ?? DEFAULT_LABELS.testimonialsHighlight}</span></h2>
              <p className="text-pearl/60 text-lg mb-8">{(L as any).testimonialsIntro ?? DEFAULT_LABELS.testimonialsIntro}</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-gold text-2xl">★</span>)}
              </div>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {((L as any).testimonials ?? DEFAULT_LABELS.testimonials).map((t: { name: string; text: string; date: string }, i: number) => (
                <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 italic relative">
                  <div className="text-gold text-4xl absolute -top-4 -right-2 opacity-20">"</div>
                  <p className="text-pearl/80 mb-6 leading-relaxed">"{t.text}"</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gold">{t.name}</span>
                    <span className="text-xs text-pearl/40">{t.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-[#001229]">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-black">
              {blogL.homepageTitlePrefix ?? blogL.titlePrefix} <span className="text-gold">{blogL.homepageTitleHighlight ?? blogL.titleHighlight}</span>
            </h2>
            <Link to="/blog" className="text-gold font-bold flex items-center gap-2 hover:gap-4 transition-all">
              <span>{blogL.allPostsLink}</span>
              <ArrowLeft size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homepagePosts.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ y: -5 }}
                className="glass-morphism p-8 rounded-3xl border-white/5 hover:border-gold/30 transition-colors"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="flex items-center gap-4 text-pearl/40 text-xs mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author ?? blogL.authorLabel}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 leading-tight hover:text-gold transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-pearl/60 mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="text-turquoise font-bold text-sm flex items-center gap-2 group">
                    <span>{blogL.readMore}</span>
                    <ArrowLeft size={16} className="group-hover:translate-x-[-4px] transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-linear-to-b from-ocean-deep to-[#000a1a]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-[48px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/20 blur-3xl rounded-full -z-10" />
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-turquoise/20 blur-3xl rounded-full -z-10" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-black mb-8">{(L as any).ourStoryTitle ?? DEFAULT_LABELS.ourStoryTitle} <span className="text-gold">{(L as any).ourStoryHighlight ?? DEFAULT_LABELS.ourStoryHighlight}</span></h2>
              <p className="text-xl text-pearl/70 leading-relaxed mb-8">
                {((L as any).ourStoryParagraph1 || DEFAULT_LABELS.ourStoryParagraph1)}
              </p>
              <p className="text-lg text-pearl/50 leading-relaxed mb-10">
                {((L as any).ourStoryParagraph2 || DEFAULT_LABELS.ourStoryParagraph2)}
              </p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-4 rtl:space-x-reverse">
                  {[1, 2, 3, 4].map(i => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/150?u=${i}`} 
                      alt="Team Member" 
                      className="w-12 h-12 rounded-full border-2 border-ocean-deep"
                    />
                  ))}
                </div>
                <span className="text-pearl/60 font-medium">{(L as any).ourStoryTeamLabel ?? DEFAULT_LABELS.ourStoryTeamLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-ocean-deep">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">{(L as any).faqTitle ?? DEFAULT_LABELS.faqTitle} <span className="text-gold">{(L as any).faqHighlight ?? DEFAULT_LABELS.faqHighlight}</span></h2>
              <p className="text-pearl/60">{(L as any).faqSubtitle ?? DEFAULT_LABELS.faqSubtitle}</p>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq: { q: string; a: string }, i: number) => (
                <details key={i} className="group glass-morphism rounded-2xl border border-white/5 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="text-lg font-bold text-pearl group-open:text-gold transition-colors">{faq.q || (faq as any).question}</span>
                    <ChevronDown className="text-gold group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="p-6 pt-0 text-pearl/60 leading-relaxed border-t border-white/5">
                    {faq.a || (faq as any).answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </main>
  );
}
