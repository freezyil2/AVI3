import { motion } from 'motion/react';
import { Megaphone } from 'lucide-react';

const newsItems = [
  "מבצע בלעדי: 30% הנחה על הפלגות לים התיכון בקיץ הקרוב!",
  "אוניית Icon of the Seas החדשה הצטרפה לצי שלנו - הזמינו עכשיו!",
  "חדש: מסלולי הפלגה ייחודיים לאנטארקטיקה ויפן.",
  "הצטרפו למועדון הלקוחות שלנו וקבלו הטבות VIP בכל הפלגה.",
  "חבילות הכל כלול במחירים מיוחדים למשפחות בחודשי יולי-אוגוסט.",
];

export default function NewsTicker() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gold text-ocean-deep py-2 overflow-hidden border-t border-white/10 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
      <div className="container mx-auto px-6 flex items-center">
        <div className="flex items-center gap-2 font-black text-xs uppercase tracking-widest border-l border-ocean-deep/20 pl-4 ml-4 shrink-0">
          <Megaphone size={16} className="animate-bounce" />
          <span>מבזקים</span>
        </div>
        
        <div className="relative flex-grow overflow-hidden h-6">
          <motion.div
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              duration: 90,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute whitespace-nowrap flex gap-12 items-center"
          >
            {newsItems.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="font-bold text-sm">{item}</span>
                <div className="w-1.5 h-1.5 bg-ocean-deep rounded-full opacity-30" />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {newsItems.map((item, i) => (
              <div key={`dup-${i}`} className="flex items-center gap-4">
                <span className="font-bold text-sm">{item}</span>
                <div className="w-1.5 h-1.5 bg-ocean-deep rounded-full opacity-30" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
