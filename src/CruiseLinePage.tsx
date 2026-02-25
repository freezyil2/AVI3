import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { cruiseLines } from './data';
import { ArrowRight, Ship as ShipIcon, CheckCircle2, Info } from 'lucide-react';
import ContactForm from './components/ContactForm';
import { useEffect } from 'react';

export default function CruiseLinePage() {
  const { id } = useParams();
  const line = cruiseLines.find(l => l.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!line) return <div className="h-screen flex items-center justify-center">החברה לא נמצאה</div>;

  return (
    <div className="pt-24 min-h-screen bg-ocean-deep">
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={line.image} 
          alt={line.name}
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
            {line.name}
          </motion.h1>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3">
            <div className="glass-morphism p-8 md:p-12 rounded-[40px] mb-12">
              <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                <Info className="text-gold" />
                <span>על החברה</span>
              </h2>
              <p className="text-xl text-pearl/80 leading-relaxed mb-8">
                {line.description}
              </p>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <ShipIcon className="text-turquoise" />
                  <span>האוניות המובילות של {line.name}</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {line.ships.map((ship, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <CheckCircle2 className="text-gold" size={20} />
                      <span className="font-medium">{ship}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-gold p-8 rounded-[32px] text-ocean-deep">
              <h3 className="text-xl font-black mb-4">מעוניינים להפליג עם {line.name}?</h3>
              <p className="font-medium mb-6 opacity-80">המומחים שלנו מכירים כל פינה באוניות של {line.name} וישמחו לעזור לכם למצוא את החדר המושלם.</p>
              <a href="#contact" className="inline-block bg-ocean-deep text-pearl px-8 py-3 rounded-full font-bold hover:bg-black transition-colors">
                השאירו פרטים
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
