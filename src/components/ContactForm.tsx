import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gold/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-turquoise/10 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto glass-morphism rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black mb-6">התחילו את המסע <br /><span className="text-gold">שלכם איתנו</span></h2>
            <p className="text-pearl/70 text-lg mb-12 leading-relaxed">
              המומחים שלנו כאן כדי לספק לכם את כל המידע הדרוש לתכנון ההפלגה המושלמת. השאירו פרטים ונחזור אליכם בהקדם.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center text-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-pearl/50">טלפון</p>
                  <p className="text-xl font-bold">1-800-CRUISE</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-turquoise/20 flex items-center justify-center text-turquoise">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-pearl/50">אימייל</p>
                  <p className="text-xl font-bold">info@cruiseforall.co.il</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-pearl">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-pearl/50">כתובת</p>
                  <p className="text-xl font-bold">מגדלי הים, תל אביב</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-8 bg-gold/10 rounded-3xl border border-gold/30"
              >
                <CheckCircle size={64} className="text-gold mb-6" />
                <h3 className="text-3xl font-black mb-4">תודה רבה!</h3>
                <p className="text-pearl/70 text-lg">ההודעה שלך התקבלה בהצלחה. אחד המומחים שלנו יחזור אליך בהקדם.</p>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-pearl/50 mr-2">שם מלא</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold transition-colors"
                      placeholder="ישראל ישראלי"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-pearl/50 mr-2">טלפון</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold transition-colors"
                      placeholder="050-0000000"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-pearl/50 mr-2">אימייל</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold transition-colors"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-pearl/50 mr-2">הודעה</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="איך נוכל לעזור?"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gold text-ocean-deep font-black py-5 rounded-2xl flex items-center justify-center gap-3 text-lg hover:bg-yellow-400 transition-colors"
                >
                  <span>שלח הודעה</span>
                  <Send size={20} />
                </motion.button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
