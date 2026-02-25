import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Wind, Users, Ship as ShipIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Destination, Ship } from '../data';

interface CardProps {
  item: Destination | Ship;
}

export function DestinationCard({ item }: { item: Destination }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
    >
      <Link to={`/destination/${item.id}`}>
        <img 
          src={item.image} 
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ocean-deep via-ocean-deep/20 to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-2 text-gold mb-2">
            <MapPin size={16} />
            <span className="text-xs font-bold tracking-widest uppercase">יעד מבוקש</span>
          </div>
          <h3 className="text-2xl font-black mb-2">{item.name}</h3>
          <p className="text-sm text-pearl/70 line-clamp-2 mb-4">{item.description}</p>
          <div className="flex items-center gap-2 text-gold font-bold text-sm group-hover:gap-4 transition-all">
            <span>גלה עוד</span>
            <ArrowLeft size={16} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ShipCard({ item }: { item: Ship }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-morphism rounded-3xl overflow-hidden flex flex-col md:flex-row"
    >
      <div className="md:w-2/5 relative h-64 md:h-auto">
        <img 
          src={item.image} 
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="md:w-3/5 p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-turquoise">
              <ShipIcon size={20} />
              <span className="text-xs font-bold tracking-widest uppercase">צי האוניות</span>
            </div>
            <span className="text-xs font-bold text-gold/80 bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
              {item.cruiseLine}
            </span>
          </div>
          <h3 className="text-3xl font-black mb-4">{item.name}</h3>
          <p className="text-pearl/70 mb-6 leading-relaxed">{item.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold">
                <Wind size={18} />
              </div>
              <div>
                <p className="text-[10px] text-pearl/50 uppercase">מהירות</p>
                <p className="font-bold">{item.specs.speed}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold">
                <Users size={18} />
              </div>
              <div>
                <p className="text-[10px] text-pearl/50 uppercase">קיבולת</p>
                <p className="font-bold">{item.specs.capacity}</p>
              </div>
            </div>
          </div>
        </div>
        
        <Link 
          to={`/ship/${item.id}`}
          className="inline-flex items-center gap-2 text-gold font-bold hover:gap-4 transition-all"
        >
          <span>מפרט טכני מלא</span>
          <ArrowLeft size={20} />
        </Link>
      </div>
    </motion.div>
  );
}
