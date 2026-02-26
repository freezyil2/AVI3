import { useEffect } from 'react';

export default function SearchWidget() {
  const OdySearchForm = 'ody-search-form' as any;

  useEffect(() => {
    // The script is loaded in index.html
  }, []);

  return (
    <div className="w-full py-8 px-4 glass-morphism rounded-3xl shadow-2xl border-gold/20">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-black text-gold mb-2">חיפוש הפלגות מתקדם</h3>
        <p className="text-pearl/60 text-sm">מצאו את הקרוז הבא שלכם מתוך אלפי אפשרויות</p>
      </div>
      <div className="ody-search-container overflow-hidden rounded-xl bg-white/5 p-4">
        <OdySearchForm search-form-settings="OVExplore"></OdySearchForm>
      </div>
      <style>{`
        /* Custom styling to match the theme if the widget allows it */
        ody-search-form {
          display: block;
          width: 100%;
          color: #000;
        }
        .ody-search-container select, 
        .ody-search-container input {
          border-radius: 8px !important;
        }
      `}</style>
    </div>
  );
}
