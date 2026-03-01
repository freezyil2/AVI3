import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Users, MapPin, Send, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HotelsPage() {
  const [formData, setFormData] = useState({
    desiredDate: '',
    travelersCount: '',
    destination: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    comments: '',
    'bot-field': '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    const payload = new URLSearchParams({
      'form-name': 'hotels',
      desiredDate: formData.desiredDate,
      travelersCount: formData.travelersCount,
      destination: formData.destination,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      comments: formData.comments,
    });
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({
          desiredDate: '',
          travelersCount: '',
          destination: '',
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          comments: '',
          'bot-field': '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-ocean-deep">
      <section className="py-16 container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-gold mb-8 hover:gap-4 transition-all">
          <ArrowRight size={20} />
          <span className="font-bold">חזרה לדף הבית</span>
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-4">מלונות</h1>
          <p className="text-pearl/60 text-lg max-w-2xl mx-auto mb-8">
            אנחנו עובדים עם כל המלונות בעולם – ממלונות בוטיק ועד רשתות בינלאומיות. השאירו פרטים ונחזור אליכם בהקדם עם הצעה מותאמת אישית.
          </p>
        </div>

        {/* Content section */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-pearl/80 text-lg leading-relaxed mb-6">
            בין אם אתם מחפשים חופשה רומנטית בפריז, טיול משפחתי באיים הקריביים או סמינר עסקי בדובאי – 
            המומחים שלנו ימצאו עבורכם את המלון המושלם במחיר הטוב ביותר.
          </p>
          <p className="text-pearl/60 leading-relaxed">
            מלאו את הטופס ונחזור אליכם תוך 24 שעות עם מגוון אפשרויות להשוואה.
          </p>
        </div>

        {/* Blue box with form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-turquoise/30 via-[#2d67b1]/40 to-ocean-deep border border-turquoise/30"
        >
          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-turquoise/10 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-32 h-32 bg-gold/5 rounded-full blur-xl" />
          
          <div className="relative z-10 p-8 md:p-16 flex flex-col lg:flex-row gap-12">
            {/* Left side - CTA text */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-pearl leading-tight">
                הירשמו וקבלו הצעה
              </h2>
              <p className="text-xl md:text-2xl font-bold text-pearl/90 mb-4">
                $50 מתנה על ההזמנה הראשונה שלכם
              </p>
              <p className="text-pearl/70 text-lg leading-relaxed">
                השאירו פרטים ונחזור אליכם בהקדם עם הצעה מותאמת. המומחים שלנו יספקו לכם את ההצעה הטובה ביותר עבור המלון והיעד שבחרתם.
              </p>
            </div>

            {/* Right side - Form */}
            <div className="lg:w-1/2">
              <form onSubmit={handleSubmit} className="bg-white/95 rounded-3xl p-6 md:p-8 shadow-2xl">
                <input type="hidden" name="form-name" value="hotels" />
                <p className="hidden">
                  <label>אל תמלאו שדה זה: <input name="bot-field" value={formData['bot-field']} onChange={(e) => setFormData({ ...formData, 'bot-field': e.target.value })} /></label>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-ocean-deep/70 flex items-center gap-2">
                      <Calendar size={14} />
                      תאריך רצוי *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.desiredDate}
                      onChange={(e) => setFormData({ ...formData, desiredDate: e.target.value })}
                      className="w-full bg-white border border-ocean-deep/20 rounded-xl py-3 px-4 text-ocean-deep focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-ocean-deep/70 flex items-center gap-2">
                      <Users size={14} />
                      כמות נוסעים
                    </label>
                    <input
                      type="number"
                      min="1"
                      placeholder="מספר נוסעים"
                      value={formData.travelersCount}
                      onChange={(e) => setFormData({ ...formData, travelersCount: e.target.value })}
                      className="w-full bg-white border border-ocean-deep/20 rounded-xl py-3 px-4 text-ocean-deep focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <label className="text-xs font-bold text-ocean-deep/70 flex items-center gap-2">
                    <MapPin size={14} />
                    יעד
                  </label>
                  <input
                    type="text"
                    placeholder="ארץ או עיר"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full bg-white border border-ocean-deep/20 rounded-xl py-3 px-4 text-ocean-deep focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="border-t border-ocean-deep/10 pt-4 mt-4">
                  <p className="text-sm font-bold text-ocean-deep/70 mb-4">יצירת קשר</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-ocean-deep/70">שם פרטי *</label>
                      <input
                        type="text"
                        required
                        placeholder="שם פרטי"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-white border border-ocean-deep/20 rounded-xl py-3 px-4 text-ocean-deep focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-ocean-deep/70">שם משפחה</label>
                      <input
                        type="text"
                        placeholder="שם משפחה"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-white border border-ocean-deep/20 rounded-xl py-3 px-4 text-ocean-deep focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-ocean-deep/70">טלפון *</label>
                      <input
                        type="tel"
                        required
                        placeholder="050-0000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-ocean-deep/20 rounded-xl py-3 px-4 text-ocean-deep focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-ocean-deep/70">אימייל</label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-ocean-deep/20 rounded-xl py-3 px-4 text-ocean-deep focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <label className="text-xs font-bold text-ocean-deep/70">הערות</label>
                    <textarea
                      rows={3}
                      placeholder="מעדפים נוספים, סוג חדר..."
                      value={formData.comments}
                      onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                      className="w-full bg-white border border-ocean-deep/20 rounded-xl py-3 px-4 text-ocean-deep focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>
                  {status === 'success' && (
                    <div className="flex items-center gap-3 p-4 bg-green-500/30 border border-green-600/50 rounded-xl text-green-800 mb-6">
                      <CheckCircle size={24} />
                      <span>הפרטים נשלחו בהצלחה! נחזור אליכם בהקדם עם הצעה מותאמת.</span>
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="p-4 bg-red-500/20 border border-red-500/40 rounded-xl text-red-700 mb-6">
                      אירעה שגיאה בשליחה. אנא נסו שוב או צרו קשר בטלפון.
                    </div>
                  )}
                  <motion.button
                    type="submit"
                    disabled={status === 'submitting'}
                    whileHover={status !== 'submitting' ? { scale: 1.02 } : undefined}
                    whileTap={status !== 'submitting' ? { scale: 0.98 } : undefined}
                    className="w-full bg-gold text-ocean-deep font-black py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-yellow-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <span>שולח...</span>
                    ) : (
                      <>
                        <span>שליחה</span>
                        <Send size={20} />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
