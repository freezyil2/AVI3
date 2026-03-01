import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowRight, MapPin, Cloud, Info, Ship as ShipIcon, Ruler, Zap, Users, CheckCircle2, Images } from 'lucide-react';
import ContactForm from './components/ContactForm';
import { useEffect } from 'react';
import { useHomepageData } from './useHomepageData';

export default function DetailPage() {
  const { type, id } = useParams();
  const { destinations, ships, hp } = useHomepageData();
  const [galleryIndex, setGalleryIndex] = useState(0);
  const L = hp.detailPageLabels ?? {};
  
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
            <span className="font-bold">{L.backToHome ?? 'חזרה לדף הבית'}</span>
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
                <span>{L.aboutTitle ?? 'אודות'}</span>
              </h2>
              <p className="text-xl text-pearl/80 leading-relaxed mb-8">
                {item.description || L.noDescriptionFallback || 'אין תיאור זמין.'}
              </p>
              
              {type === 'destination' ? (
                <div className="space-y-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <MapPin className="text-turquoise" />
                      <span>נקודות עניין מרכזיות</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {(item as any).pointsOfInterest.map((poi: string, i: number) => (
                        <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                          <CheckCircle2 className="text-gold" size={20} />
                          <span className="font-medium">{poi}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-12">
                  {Array.isArray((item as any).features) && (item as any).features.length > 0 && (
                    <div>
                      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <ShipIcon className="text-turquoise" />
                        <span>{L.featuresTitle ?? 'מאפיינים ומתקנים'}</span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {(item as any).features.map((feature: string, i: number) => (
                          <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                            <CheckCircle2 className="text-gold" size={20} />
                            <span className="font-medium">{feature}</span>
                          </div>
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
                  <h3 className="text-xl font-black mb-8 border-b border-white/10 pb-4">{L.specsTitle ?? 'מפרט טכני'}</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-pearl/60">
                        <Ruler size={18} />
                        <span>{L.specsLength ?? 'אורך'}</span>
                      </div>
                      <span className="font-bold">{(item as any).specs?.length || L.noSpecsFallback || '—'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-pearl/60">
                        <Zap size={18} />
                        <span>{L.specsSpeed ?? 'מהירות'}</span>
                      </div>
                      <span className="font-bold">{(item as any).specs?.speed || '—'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-pearl/60">
                        <Users size={18} />
                        <span>{L.specsCapacity ?? 'קיבולת'}</span>
                      </div>
                      <span className="font-bold">{(item as any).specs?.capacity || '—'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-pearl/60">
                        <ShipIcon size={18} />
                        <span>{L.specsTonnage ?? 'תפוסה'}</span>
                      </div>
                      <span className="font-bold">{(item as any).specs?.tonnage || '—'}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gold p-8 rounded-[32px] text-ocean-deep">
                  <h3 className="text-xl font-black mb-4">{L.contactCtaTitle ?? 'מעוניינים במידע נוסף?'}</h3>
                  <p className="font-medium mb-6 opacity-80">
                    {(L.contactCtaParagraph ?? 'המומחים שלנו ישמחו לספר לכם עוד על {{name}} ועל מסלולי ההפלגה שלה.').replace('{{name}}', (item as any).name)}
                  </p>
                  <a href="#contact" className="inline-block bg-ocean-deep text-pearl px-8 py-3 rounded-full font-bold hover:bg-black transition-colors">
                    {L.contactCtaButton ?? 'צור קשר'}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {type === 'ship' && (item as any).gallery && (item as any).gallery.length > 0 && (
        <section className="py-20 container mx-auto px-6">
          <h2 className="text-3xl font-black mb-12 flex items-center gap-3">
            <Images className="text-gold" />
            <span>{L.galleryTitle ?? 'גלריית תמונות'}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {(item as any).gallery.map((src: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => setGalleryIndex(i)}
              >
                <img
                  src={src}
                  alt={`${item.name} - תמונה ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ocean-deep/0 group-hover:bg-ocean-deep/20 transition-colors" />
              </motion.div>
            ))}
          </div>
          {(item as any).gallery.length > 1 && (
            <div className="mt-8 flex justify-center gap-2 flex-wrap">
              {(item as any).gallery.map((_: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setGalleryIndex(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${i === galleryIndex ? 'bg-gold' : 'bg-white/30 hover:bg-white/50'}`}
                  aria-label={`תמונה ${i + 1}`}
                />
              ))}
            </div>
          )}
          {(item as any).gallery.length > 1 && (
            <div className="mt-8 relative max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden">
              <img
                src={(item as any).gallery[galleryIndex]}
                alt={`${item.name} - תמונה נבחרת`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          )}
        </section>
      )}

      <ContactForm />
    </div>
  );
}
