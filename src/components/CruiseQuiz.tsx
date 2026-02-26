import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Users, Heart, Ship, ArrowLeft, RefreshCcw, Sparkles } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: 'עם מי אתם מתכננים להפליג?',
    options: [
      { text: 'כל המשפחה (כולל ילדים)', icon: <Users size={24} />, type: 'family' },
      { text: 'זוגי ורומנטי', icon: <Heart size={24} />, type: 'romantic' },
      { text: 'לבד או עם חברים', icon: <Compass size={24} />, type: 'adventure' },
    ]
  },
  {
    id: 2,
    question: 'מה הכי חשוב לכם באונייה?',
    options: [
      { text: 'מגלשות מים ואטרקציות', icon: <Sparkles size={24} />, type: 'family' },
      { text: 'קולינריה וספא ברמה גבוהה', icon: <Ship size={24} />, type: 'romantic' },
      { text: 'יעדים מיוחדים וסיורי חוף', icon: <Compass size={24} />, type: 'adventure' },
    ]
  },
  {
    id: 3,
    question: 'איזה סוג של אווירה אתם מחפשים?',
    options: [
      { text: 'אנרגטית ותוססת', icon: <Sparkles size={24} />, type: 'family' },
      { text: 'שקטה ויוקרתית', icon: <Ship size={24} />, type: 'romantic' },
      { text: 'חוקרת ומעשירה', icon: <Compass size={24} />, type: 'adventure' },
    ]
  }
];

const results = {
  family: {
    title: 'קרוז משפחתי מושלם',
    desc: 'האוניות של Royal Caribbean או MSC הן הבחירה המושלמת עבורכם. עם פארקי מים, מועדוני ילדים והופעות בסגנון ברודווי, אף אחד לא ישתעמם לרגע.',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800'
  },
  romantic: {
    title: 'חופשה רומנטית ויוקרתית',
    desc: 'אנחנו ממליצים לכם על חברות כמו Celebrity Cruises או Oceania. אווירה אינטימית, שירות אישי וקולינריה משובחת מחכים לכם בלב ים.',
    image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=800'
  },
  adventure: {
    title: 'קרוז הרפתקני וחוקר',
    desc: 'הפלגות ליעדים כמו אלסקה, נורווגיה או יפן הן בדיוק בשבילכם. אוניות קטנות יותר שיכולות להיכנס לנמלים ייחודיים ולהעניק חוויה תרבותית עמוקה.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800'
  }
};

export default function CruiseQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (type: string) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  const getResultType = () => {
    const counts: Record<string, number> = {};
    answers.forEach(a => counts[a] = (counts[a] || 0) + 1);
    return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
  };

  const result = showResult ? results[getResultType() as keyof typeof results] : null;

  return (
    <section className="py-24 bg-linear-to-b from-[#000a1a] to-ocean-deep relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-turquoise/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {!showResult ? (
            <>
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <span className="text-gold font-bold text-sm uppercase tracking-[0.3em] mb-4 block">
                  שלב {step + 1} מתוך {questions.length}
                </span>
                <h2 className="text-4xl md:text-5xl font-black mb-12">{questions[step].question}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {questions[step].options.map((option, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ y: -10, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(option.type)}
                      className="glass-morphism p-8 rounded-[32px] border-white/10 hover:border-gold/30 transition-all flex flex-col items-center gap-6 group"
                    >
                      <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-ocean-deep transition-all duration-500">
                        {option.icon}
                      </div>
                      <span className="text-xl font-bold">{option.text}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-morphism p-8 md:p-16 rounded-[48px] border-white/10 shadow-2xl overflow-hidden relative"
            >
              <div className="flex flex-col lg:flex-row gap-12 items-center text-right">
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 text-gold mb-6">
                    <Sparkles size={24} />
                    <span className="font-black uppercase tracking-widest">מצאנו לכם התאמה!</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">{result?.title}</h2>
                  <p className="text-xl text-pearl/70 leading-relaxed mb-10">
                    {result?.desc}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => window.location.href = '#fleet'}
                      className="bg-gold text-ocean-deep px-10 py-4 rounded-full font-black text-lg hover:bg-yellow-400 transition-all shadow-xl shadow-gold/20"
                    >
                      צפו באונייה המתאימה
                    </button>
                    <button 
                      onClick={resetQuiz}
                      className="glass-morphism px-10 py-4 rounded-full font-black text-lg border border-white/20 flex items-center gap-2 hover:bg-white/10 transition-all"
                    >
                      <RefreshCcw size={20} />
                      <span>נסו שוב</span>
                    </button>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full aspect-square rounded-[40px] overflow-hidden shadow-2xl">
                  <img 
                    src={result?.image} 
                    alt={result?.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
