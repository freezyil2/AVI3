import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { destinations } from '../data';

export default function InteractiveMap() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const navigate = useNavigate();

  // Approximate coordinates for the markers on a 1000x500 SVG map
  const markers = [
    { id: 'norway-fjords', x: 510, y: 120 },
    { id: 'mediterranean', x: 520, y: 220 },
    { id: 'caribbean', x: 280, y: 280 },
    { id: 'alaska', x: 100, y: 120 },
    { id: 'antarctica', x: 500, y: 480 },
    { id: 'japan', x: 850, y: 220 },
    { id: 'baltic', x: 540, y: 130 },
    { id: 'south-pacific', x: 150, y: 350 },
    { id: 'dubai-emirates', x: 620, y: 250 },
    { id: 'south-america', x: 350, y: 400 },
  ];

  return (
    <div className="w-full relative aspect-[2/1] glass-morphism rounded-[40px] p-4 overflow-hidden border-gold/20 shadow-2xl">
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-full opacity-40"
        fill="currentColor"
      >
        {/* Simplified World Map Path */}
        <path
          d="M150,150 L200,100 L300,120 L400,80 L500,100 L600,80 L700,120 L800,100 L900,150 L950,250 L900,350 L800,400 L700,380 L600,420 L500,450 L400,420 L300,450 L200,420 L100,350 L50,250 Z"
          className="text-gold/20"
        />
        {/* Real world map would be a complex path, using a placeholder shape for the vibe */}
        <rect width="1000" height="500" fill="transparent" />
        
        {/* Grid lines for tech feel */}
        <g className="text-white/5">
          {[...Array(10)].map((_, i) => (
            <line key={`v-${i}`} x1={i * 100} y1="0" x2={i * 100} y2="500" stroke="currentColor" strokeWidth="0.5" />
          ))}
          {[...Array(5)].map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 100} x2="1000" y2={i * 100} stroke="currentColor" strokeWidth="0.5" />
          ))}
        </g>
      </svg>

      {/* Interactive Markers */}
      {markers.map((marker) => {
        const dest = destinations.find(d => d.id === marker.id);
        if (!dest) return null;

        return (
          <div
            key={marker.id}
            className="absolute"
            style={{ left: `${(marker.x / 1000) * 100}%`, top: `${(marker.y / 500) * 100}%` }}
          >
            <motion.button
              onHoverStart={() => setHoveredId(marker.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => navigate(`/destination/${marker.id}`)}
              whileHover={{ scale: 1.2 }}
              className="relative -translate-x-1/2 -translate-y-1/2 group"
            >
              <div className="absolute inset-0 bg-gold/40 blur-md rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-4 h-4 bg-gold rounded-full border-2 border-ocean-deep shadow-lg relative z-10" />
              
              <AnimatePresence>
                {hoveredId === marker.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, x: '-50%' }}
                    animate={{ opacity: 1, y: -10, x: '-50%' }}
                    exit={{ opacity: 0, y: 10, x: '-50%' }}
                    className="absolute bottom-full left-1/2 mb-2 z-20"
                  >
                    <div className="bg-ocean-deep/95 backdrop-blur-xl border border-gold/50 rounded-xl p-3 shadow-2xl whitespace-nowrap min-w-[150px]">
                      <p className="text-gold font-black text-sm mb-1">{dest.name}</p>
                      <p className="text-pearl/60 text-[10px] leading-tight">{dest.weather}</p>
                      <div className="mt-2 flex items-center gap-1 text-turquoise text-[10px] font-bold">
                        <span>לחץ לפרטים</span>
                        <MapPin size={10} />
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-ocean-deep border-r border-b border-gold/50 rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        );
      })}

      {/* Map Legend */}
      <div className="absolute bottom-6 right-6 flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-pearl/40">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-gold rounded-full" />
          <span>יעדי הפלגה</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-[1px] bg-white/20" />
          <span>נתיבי שיט</span>
        </div>
      </div>
    </div>
  );
}
