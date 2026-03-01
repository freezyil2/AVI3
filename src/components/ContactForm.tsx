import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '', 'bot-field': '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    const payload = new URLSearchParams({
      'form-name': 'contact',
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    });
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '', 'bot-field': '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
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
                  <p className="text-xl font-bold">liortr0000@gmail.com</p>
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>אל תמלאו שדה זה: <input name="bot-field" value={formData['bot-field']} onChange={(e) => setFormData({ ...formData, 'bot-field': e.target.value })} /></label>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-pearl/50 mr-2">שם מלא</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold transition-colors"
                    placeholder="ישראל ישראלי"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-pearl/50 mr-2">טלפון</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold transition-colors"
                    placeholder="050-0000000"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-pearl/50 mr-2">אימייל</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold transition-colors"
                  placeholder="name@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-pearl/50 mr-2">הודעה</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="איך נוכל לעזור?"
                />
              </div>
              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/40 rounded-2xl text-green-300">
                  <CheckCircle size={24} />
                  <span>ההודעה נשלחה בהצלחה! נחזור אליכם בהקדם.</span>
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/40 rounded-2xl text-red-300">
                  אירעה שגיאה בשליחה. אנא נסו שוב או צרו קשר בטלפון.
                </div>
              )}
              <motion.button
                type="submit"
                disabled={status === 'submitting'}
                whileHover={status !== 'submitting' ? { scale: 1.02 } : undefined}
                whileTap={status !== 'submitting' ? { scale: 0.98 } : undefined}
                className="w-full bg-gold text-ocean-deep font-black py-5 rounded-2xl flex items-center justify-center gap-3 text-lg hover:bg-yellow-400 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <span>שולח...</span>
                ) : (
                  <>
                    <span>שלח הודעה</span>
                    <Send size={20} />
                  </>
                )}
              </motion.button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
