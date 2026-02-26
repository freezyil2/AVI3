import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { destinations, ships, ShipFeature, PointOfInterest, Destination } from './data';
import { ArrowRight, MapPin, Cloud, Info, Ship as ShipIcon, Ruler, Zap, Users, CheckCircle2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import ContactForm from './components/ContactForm';
import { useEffect, useState } from 'react';

export default function DetailPage() {
  const { type, id } = useParams();
  const [selectedFeature, setSelectedFeature] = useState<ShipFeature | null>(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const item = type === 'destination' 
    ? destinations.find(d => d.id === id)
    : ships.find(s => s.id === id);

  if (!item) return <div className="h-screen flex items-center justify-center">לא נמצא</div>;

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ocean-deep via-ocean-deep/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12 container mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-gold mb-6 hover:gap-4 transition-all">
            <ArrowRight size={20} />
            <span className="font-bold">חזרה לדף הבית</span>
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black"
          >
            {item.name}
          </motion.h1>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Content */}
          <div className="lg:w-2/3">
            <div className="glass-morphism p-8 md:p-12 rounded-[40px] mb-12">
              <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                <Info className="text-gold" />
                <span>אודות</span>
              </h2>
              <p className="text-xl text-pearl/80 leading-relaxed mb-8">
                {type === 'ship' && (item as any).longDescription ? (item as any).longDescription : item.description}
              </p>
              
              {type === 'destination' ? (
                <div className="space-y-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <MapPin className="text-turquoise" />
                      <span>מה מחכה לכם ב{item.name}</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {(item as any).pointsOfInterest.map((poi: PointOfInterest, i: number) => (
                        <div key={i} className="group relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                          <img 
                            src={poi.image} 
                            alt={poi.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-ocean-deep via-ocean-deep/20 to-transparent opacity-90" />
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-xl font-black text-gold mb-2">{poi.name}</h3>
                            <p className="text-sm text-pearl/70 line-clamp-2">{poi.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-12">
                   <div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <ShipIcon className="text-turquoise" />
                      <span>מאפיינים ומתקנים</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {(item as any).features.map((feature: ShipFeature, i: number) => (
                        <motion.button 
                          key={i} 
                          whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setSelectedFeature(feature);
                            setCurrentImageIndex(0);
                          }}
                          className="flex items-center justify-between gap-3 bg-white/5 p-4 rounded-2xl border border-white/5 text-right w-full group"
                        >
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-gold" size={20} />
                            <span className="font-medium">{feature.name}</span>
                          </div>
                          <span className="text-[10px] text-gold/40 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">צפה בתמונות</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Gallery Section */}
                  {(item as any).gallery && (item as any).gallery.length > 0 && (
                    <div>
                      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Zap className="text-gold" />
                        <span>גלריית תמונות</span>
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {(item as any).gallery.map((img: string, i: number) => (
                          <motion.div 
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => {
                              setSelectedGalleryImage(img);
                              setCurrentImageIndex(i);
                            }}
                            className="aspect-video rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                          >
                            <img 
                              src={img} 
                              alt={`${item.name} gallery ${i}`} 
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar / Specs */}
          <div className="lg:w-1/3">
            {type === 'destination' ? (
              <div className="space-y-8">
                <div className="glass-morphism p-8 rounded-[32px] border-turquoise/20">
                  <h3 className="text-xl font-black mb-6 flex items-center gap-3">
                    <Cloud className="text-turquoise" />
                    <span>מזג אוויר ממוצע</span>
                  </h3>
                  <p className="text-2xl font-bold text-turquoise">{(item as any).weather}</p>
                </div>
                
                <div className="glass-morphism p-4 rounded-[32px] overflow-hidden">
                  <p className="text-xs font-bold uppercase tracking-widest text-pearl/40 mb-4 mr-4">מפת הנתיב</p>
                  <img 
                    src={(item as any).mapUrl} 
                    alt="Route Map"
                    className="w-full rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="glass-morphism p-8 rounded-[32px] border-gold/20">
                  <h3 className="text-xl font-black mb-8 border-b border-white/10 pb-4">מפרט טכני</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-pearl/60">
                        <Ruler size={18} />
                        <span>אורך</span>
                      </div>
                      <span className="font-bold">{(item as any).specs.length}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-pearl/60">
                        <Zap size={18} />
                        <span>מהירות</span>
                      </div>
                      <span className="font-bold">{(item as any).specs.speed}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-pearl/60">
                        <Users size={18} />
                        <span>קיבולת</span>
                      </div>
                      <span className="font-bold">{(item as any).specs.capacity}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-pearl/60">
                        <ShipIcon size={18} />
                        <span>תפוסה</span>
                      </div>
                      <span className="font-bold">{(item as any).specs.tonnage}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gold p-8 rounded-[32px] text-ocean-deep">
                  <h3 className="text-xl font-black mb-4">מעוניינים במידע נוסף?</h3>
                  <p className="font-medium mb-6 opacity-80">המומחים שלנו ישמחו לספר לכם עוד על ה-{(item as any).name} ועל מסלולי ההפלגה שלה.</p>
                  <a href="#contact" className="inline-block bg-ocean-deep text-pearl px-8 py-3 rounded-full font-bold hover:bg-black transition-colors">
                    צור קשר
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <ContactForm />

      {/* Feature Gallery Modal */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            <div 
              className="absolute inset-0 bg-black/95 backdrop-blur-sm" 
              onClick={() => setSelectedFeature(null)}
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video bg-ocean-deep rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button 
                onClick={() => setSelectedFeature(null)}
                className="absolute top-6 right-6 z-10 p-3 bg-black/50 hover:bg-gold text-white hover:text-ocean-deep rounded-full transition-all"
              >
                <X size={24} />
              </button>

              <div className="absolute bottom-10 left-10 z-10 bg-black/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-md">
                <h3 className="text-2xl font-black text-gold mb-2">{selectedFeature.name}</h3>
                <p className="text-pearl/60 text-sm">תמונה {currentImageIndex + 1} מתוך {selectedFeature.images.length}</p>
              </div>

              <div className="relative h-full w-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    src={selectedFeature.images[currentImageIndex]} 
                    alt={selectedFeature.name}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                {selectedFeature.images.length > 1 && (
                  <>
                    <button 
                      onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? selectedFeature.images.length - 1 : prev - 1))}
                      className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-black/50 hover:bg-gold text-white hover:text-ocean-deep rounded-full transition-all"
                    >
                      <ChevronRight size={32} />
                    </button>
                    <button 
                      onClick={() => setCurrentImageIndex((prev) => (prev === selectedFeature.images.length - 1 ? 0 : prev + 1))}
                      className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-black/50 hover:bg-gold text-white hover:text-ocean-deep rounded-full transition-all"
                    >
                      <ChevronLeft size={32} />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Gallery Modal */}
      <AnimatePresence>
        {selectedGalleryImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            <div 
              className="absolute inset-0 bg-black/95 backdrop-blur-sm" 
              onClick={() => setSelectedGalleryImage(null)}
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video bg-ocean-deep rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button 
                onClick={() => setSelectedGalleryImage(null)}
                className="absolute top-6 right-6 z-10 p-3 bg-black/50 hover:bg-gold text-white hover:text-ocean-deep rounded-full transition-all"
              >
                <X size={24} />
              </button>

              <div className="absolute bottom-10 left-10 z-10 bg-black/50 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-black text-gold mb-2">{item.name}</h3>
                <p className="text-pearl/60 text-sm">תמונה {currentImageIndex + 1} מתוך {(item as any).gallery.length}</p>
              </div>

              <div className="relative h-full w-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    src={(item as any).gallery[currentImageIndex]} 
                    alt={`${item.name} gallery`}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                {(item as any).gallery.length > 1 && (
                  <>
                    <button 
                      onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? (item as any).gallery.length - 1 : prev - 1))}
                      className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-black/50 hover:bg-gold text-white hover:text-ocean-deep rounded-full transition-all"
                    >
                      <ChevronRight size={32} />
                    </button>
                    <button 
                      onClick={() => setCurrentImageIndex((prev) => (prev === (item as any).gallery.length - 1 ? 0 : prev + 1))}
                      className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-black/50 hover:bg-gold text-white hover:text-ocean-deep rounded-full transition-all"
                    >
                      <ChevronLeft size={32} />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
