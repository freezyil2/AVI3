import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { ShipCard } from './components/Cards';
import { useState, useEffect } from 'react';
import { useHomepageData } from './useHomepageData';

export default function FleetPage() {
  const { ships: allShips, hp } = useHomepageData();
  const [shipFilter, setShipFilter] = useState('');
  const L = hp.fleetPageLabels ?? {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredShips = allShips.filter(ship =>
    ship.name.toLowerCase().includes(shipFilter.toLowerCase()) ||
    ship.cruiseLine.toLowerCase().includes(shipFilter.toLowerCase())
  );

  return (
    <div className="pt-24 min-h-screen bg-ocean-deep">
      <section className="py-16 container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-gold mb-8 hover:gap-4 transition-all">
          <ArrowRight size={20} />
          <span className="font-bold">{L.backToHome ?? 'חזרה לדף הבית'}</span>
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-4">{L.titlePrefix ?? 'צי ה'}<span className="text-turquoise">{L.titleHighlight ?? 'אוניות'}</span>{L.titleSuffix ?? ''}</h1>
          <p className="text-pearl/60 text-lg max-w-2xl mx-auto mb-10">
            {L.subtitle ?? 'גלו את כל אוניות הנוסעים הגדולות והמובילות בעולם. ממפלצות ים טכנולוגיות ועד ליאכטות בוטיק אינטימיות.'}
          </p>

          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder={L.searchPlaceholder ?? 'חפש אונייה או חברת ספנות...'}
              value={shipFilter}
              onChange={(e) => setShipFilter(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-12 focus:outline-none focus:border-turquoise transition-all text-center"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-turquoise/50" size={20} />
          </div>
        </div>

        <div className="space-y-12">
          {filteredShips.length > 0 ? (
            filteredShips.map((ship) => (
              <ShipCard
                key={ship.id}
                item={ship}
                labels={{
                  categoryLabel: L.categoryLabel,
                  speedLabel: L.speedLabel,
                  capacityLabel: L.capacityLabel,
                  fullSpecsLink: L.fullSpecsLink,
                }}
              />
            ))
          ) : (
            <div className="text-center py-20 glass-morphism rounded-3xl">
              <p className="text-xl text-pearl/50">{L.noResults ?? 'לא נמצאו אוניות התואמות את החיפוש שלך.'}</p>
              <button
                onClick={() => setShipFilter('')}
                className="mt-4 text-gold font-bold hover:underline"
              >
                {L.clearSearch ?? 'נקה חיפוש'}
              </button>
            </div>
          )}
        </div>

        <p className="text-center text-pearl/40 text-sm mt-12">
          {filteredShips.length} {(L.shipsCountLabel ?? 'אוניות מוצגות')}
        </p>
      </section>
    </div>
  );
}
