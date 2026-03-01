import { useState, useEffect } from 'react';
import { useTina } from 'tinacms/dist/react';
import { client } from './tinaClient';
import { HomepageDocument } from '../tina/__generated__/types';
import { destinations as dataDestinations, ships as allShips } from './data';
import type { Destination, Ship } from './data';

const HOMEPAGE_RELATIVE_PATH = 'index.json';
const variables = { relativePath: HOMEPAGE_RELATIVE_PATH };

function resolveImage(img: string | { src?: string } | null | undefined): string {
  if (!img) return '';
  return typeof img === 'string' ? img : (img?.src ?? '');
}

const fallbackHomepage = {
  heroTitle: 'קרוז לכול',
  heroSubtitle: 'הפלגות נופש ברחבי העולם',
  detailPageLabels: {
    backToHome: 'חזרה לדף הבית',
    aboutTitle: 'אודות',
    noDescriptionFallback: 'אין תיאור זמין.',
    pointsOfInterestTitle: 'נקודות עניין מרכזיות',
    weatherTitle: 'מזג אוויר ממוצע',
    mapTitle: 'מפת הנתיב',
    featuresTitle: 'מאפיינים ומתקנים',
    specsTitle: 'מפרט טכני',
    specsLength: 'אורך',
    specsSpeed: 'מהירות',
    specsCapacity: 'קיבולת',
    specsTonnage: 'תפוסה',
    noSpecsFallback: 'אין מפרט טכני זמין.',
    contactCtaTitle: 'מעוניינים במידע נוסף?',
    contactCtaParagraph: 'המומחים שלנו ישמחו לספר לכם עוד על {{name}} ועל מסלולי ההפלגה שלה.',
    contactCtaButton: 'צור קשר',
    galleryTitle: 'גלריית תמונות',
  },
  homepageLabels: {
    heroTagline: 'החופשה המושלמת מתחילה כאן',
    heroParagraph: 'גלו את היעדים הקסומים ביותר בעולם על סיפון האוניות המפוארות ביותר.\nחוויה של פעם בחיים מחכה לכם במרחק לחיצה.',
    heroBtnDestinations: 'גלה יעדים',
    heroBtnFleet: 'הצי שלנו',
    scrollDown: 'גלול למטה',
    loadingText: 'טוען...',
    stats: [
      { value: '50K+', label: 'נוסעים מרוצים' },
      { value: '120+', label: 'יעדים בעולם' },
      { value: '21', label: 'אוניות בצי' },
      { value: '15', label: 'שנות ניסיון' },
    ],
    destinationsTitle: 'יעדים',
    destinationsHighlight: 'פופולריים',
    destinationsSubtitle: 'הנמלים המבוקשים ביותר בעולם, שנבחרו בקפידה כדי להעניק לכם חוויה תרבותית ונופית בלתי נשכחת.',
    fleetTitlePrefix: 'צי ה',
    fleetTitleHighlight: 'אוניות',
    fleetTitleSuffix: 'שלנו',
    fleetSubtitle: 'ממפלצות ים טכנולוגיות ועד ליאכטות בוטיק אינטימיות. כל אונייה היא יצירת אמנות של הנדסה ועיצוב.',
    fleetSearchPlaceholder: 'חפש אונייה בצי...',
    fleetNoResults: 'לא נמצאו אוניות התואמות את החיפוש שלך.',
    fleetViewAll: 'צפה בכל הצי המלא',
    cruiseLinesTitlePrefix: 'חברות ה',
    cruiseLinesTitleHighlight: 'ספנות',
    cruiseLinesTitleSuffix: 'שאנחנו עובדים איתן',
    cruiseLinesSubtitle: 'גלו את כל חברות הספנות המובילות בעולם במקום אחד.',
    hotelsTitle: 'מלונות',
    hotelsSubtitle: 'אנחנו עובדים עם כל המלונות בעולם. השאירו פרטים ונחזור אליכם עם הצעה מותאמת אישית.',
    hotelsButton: 'השאירו פרטים לקבלת הצעה',
    howItWorksTitle: 'איך זה',
    howItWorksHighlight: 'עובד?',
    howItWorksSubtitle: 'הדרך לחופשת החלומות שלכם פשוטה ומהירה. הנה השלבים בדרך אל הסיפון.',
    howItWorksSteps: [
      { title: 'בחירת יעד', desc: 'בחרו את היעד שבו תמיד חלמתם לבקר מתוך מאות אפשרויות.' },
      { title: 'בחירת אונייה', desc: 'מצאו את האונייה שמתאימה בדיוק לסגנון שלכם - ממשפחות ועד יוקרה.' },
      { title: 'ייעוץ אישי', desc: 'המומחים שלנו יחזרו אליכם כדי להתאים את החדר והמסלול המושלם.' },
      { title: 'יוצאים לדרך', desc: 'קבלו את כל המסמכים וצאו לחופשה שתזכרו לכל החיים.' },
    ],
    whyChooseTitle: 'למה לבחור',
    whyChooseHighlight: 'בנו?',
    whyChooseSubtitle: 'אנחנו לא רק מוכרים חופשות, אנחנו יוצרים זיכרונות לכל החיים עם דגש על שירות אישי ואיכות ללא פשרות.',
    whyChooseItems: [
      { title: 'מחיר מנצח', desc: 'התחייבות למחירים הטובים ביותר בשוק בזכות קשרים ישירים עם חברות הספנות.' },
      { title: 'שירות אישי 24/7', desc: 'ליווי צמוד מרגע ההזמנה ועד החזרה הביתה, כולל מענה לכל שאלה בזמן ההפלגה.' },
      { title: 'התאמה מושלמת', desc: 'אנחנו יודעים להתאים את האונייה והמסלול בדיוק לאופי שלכם - ממשפחות ועד זוגות.' },
    ],
    testimonialsTitle: 'מה הלקוחות',
    testimonialsHighlight: 'מספרים?',
    testimonialsIntro: 'אלפי ישראלים כבר בחרו בנו לחופשת החלומות שלהם. הנה חלק מהחוויות שלהם.',
    testimonials: [
      { name: 'משפחת לוי', text: 'הקרוז בים התיכון היה פשוט מושלם. הילדים נהנו מכל רגע והשירות של הצוות היה מעל ומעבר.', date: 'אוגוסט 2025' },
      { name: 'דני ומיכל', text: 'ירח הדבש שלנו באיים הקריביים היה חלומי. תודה על ההמלצה על האונייה, היא הייתה בדיוק מה שחיפשנו.', date: 'ינואר 2026' },
    ],
    blogTitle: 'בלוג',
    blogHighlight: 'מסעות',
    blogAllPosts: 'כל הכתבות',
    blogAuthorLabel: 'מערכת האתר',
    blogReadMore: 'קרא עוד',
    ourStoryTitle: 'הסיפור',
    ourStoryHighlight: 'שלנו',
    ourStoryParagraph1: 'לפני למעלה מ-15 שנה, יצאנו לדרך עם חלום אחד פשוט: להנגיש את עולם הקרוזים היוקרתי לכל ישראלי. מה שהתחיל כסוכנות בוטיק קטנה, הפך עם השנים למובילה בתחום השייט בישראל.',
    ourStoryParagraph2: 'אנחנו מאמינים שחופשה היא לא רק זמן מנוחה, אלא הזדמנות ליצור זיכרונות שישארו איתכם לנצח. לכן, אנחנו לא מתפשרים על איכות השירות, על מקצועיות המומחים שלנו ועל הקשרים האישיים שיצרנו עם חברות הספנות הטובות בעולם.',
    ourStoryTeamLabel: 'צוות המומחים שלנו מחכה לכם',
    faqTitle: 'שאלות',
    faqHighlight: 'נפוצות',
    faqSubtitle: 'כל מה שרציתם לדעת על הזמנת קרוז ולא העזתם לשאול.',
    footerBrand: 'קרוז',
    footerBrandHighlight: 'לכול',
    footerCopyright: '© 2026 קרוז לכל - חוויה לכל המשפחה. כל הזכויות שמורות.',
    contactTitle: 'התחילו את המסע',
    contactTitleHighlight: 'שלכם איתנו',
    contactDescription: 'המומחים שלנו כאן כדי לספק לכם את כל המידע הדרוש לתכנון ההפלגה המושלמת. השאירו פרטים ונחזור אליכם בהקדם.',
    contactLabelName: 'שם מלא',
    contactLabelPhone: 'טלפון',
    contactLabelEmail: 'אימייל',
    contactLabelMessage: 'הודעה',
    contactPlaceholderName: 'ישראל ישראלי',
    contactPlaceholderPhone: '050-0000000',
    contactPlaceholderEmail: 'name@example.com',
    contactPlaceholderMessage: 'איך נוכל לעזור?',
    contactButtonSend: 'שלח הודעה',
    contactButtonSending: 'שולח...',
    contactSuccessMessage: 'ההודעה נשלחה בהצלחה! נחזור אליכם בהקדם.',
    contactErrorMessage: 'אירעה שגיאה בשליחה. אנא נסו שוב או צרו קשר בטלפון.',
    contactPhoneValue: '1-800-CRUISE',
    contactEmailValue: 'liortr0000@gmail.com',
    contactAddressValue: 'מגדלי הים, תל אביב',
  },
  fleetPageLabels: {
    backToHome: 'חזרה לדף הבית',
    titlePrefix: 'צי ה',
    titleHighlight: 'אוניות',
    subtitle: 'גלו את כל אוניות הנוסעים הגדולות והמובילות בעולם. ממפלצות ים טכנולוגיות ועד ליאכטות בוטיק אינטימיות.',
    searchPlaceholder: 'חפש אונייה או חברת ספנות...',
    noResults: 'לא נמצאו אוניות התואמות את החיפוש שלך.',
    clearSearch: 'נקה חיפוש',
    shipsCountLabel: 'אוניות מוצגות',
    categoryLabel: 'צי האוניות',
    speedLabel: 'מהירות',
    capacityLabel: 'קיבולת',
    fullSpecsLink: 'מפרט טכני מלא',
  },
  homepageShipIds: [],
  destinations: [
    { id: 'norway-fjords', title: 'הפיורדים של נורווגיה', description: 'מסע בין צוקים אדירים ומפלים שוצפים.', image: 'https://picsum.photos/seed/fjords/1200/800' },
    { id: 'mediterranean', title: 'הים התיכון הקלאסי', description: 'ערש התרבות המערבית.', image: 'https://picsum.photos/seed/med/1200/800' },
    { id: 'caribbean', title: 'האיים הקריביים', description: 'גן עדן טרופי של מים בצבע טורקיז.', image: 'https://picsum.photos/seed/carib/1200/800' },
    { id: 'alaska', title: 'אלסקה הפראית', description: 'מפגש מרגש עם קרחונים וטבע בתולי.', image: 'https://picsum.photos/seed/alaska/1200/800' },
  ],
  ships: [
    { id: 'symphony-of-the-seas', name: 'Symphony of the Seas', cruiseLine: 'Royal Caribbean', description: 'אוניית הנוסעים הגדולה בעולם בעת השקתה.', speed: '22 קשר', capacity: '6,680 נוסעים', image: 'https://picsum.photos/seed/symphony/1200/800' },
    { id: 'odyssey-of-the-seas', name: 'Odyssey of the Seas', cruiseLine: 'Royal Caribbean', description: 'אוניית Quantum Ultra Class.', speed: '22 קשר', capacity: '4,198 נוסעים', image: 'https://picsum.photos/seed/odyssey/1200/800' },
    { id: 'ms-roald-amundsen', name: 'MS Roald Amundsen', cruiseLine: 'Hurtigruten', description: 'ספינת משלחות היברידית ראשונה בעולם.', speed: '15 קשר', capacity: '530 נוסעים', image: 'https://picsum.photos/seed/roaldamundsen/1200/800' },
    { id: 'scenic-eclipse', name: 'Scenic Eclipse', cruiseLine: 'Scenic Luxury Cruises', description: 'יאכטת משלחות "6 כוכבים" עם הצוללת והמסוק האישיים שלה.', speed: '17 קשר', capacity: '228 נוסעים', image: 'https://picsum.photos/seed/sceniceclipse/1200/800' },
    { id: 'star-flyer', name: 'Star Flyer', cruiseLine: 'Star Clippers', description: 'ספינת מפרשים קלאסית.', speed: '17 קשר (מפרשים)', capacity: '170 נוסעים', image: 'https://picsum.photos/seed/starflyer/1200/800' },
  ],
  faq: [
    { question: 'האם המחיר כולל טיסות?', answer: 'המחירים המוצגים באתר הם עבור הקרוז בלבד. המומחים שלנו ישמחו להציע לכם חבילות הכוללות טיסות והעברות בהתאמה אישית.' },
    { question: 'מה כולל המחיר של הקרוז?', answer: 'המחיר כולל לינה בחדר שבחרתם, ארוחות מלאות (פנסיון מלא), שימוש במתקני האונייה (בריכות, חדר כושר) ומופעי בידור.' },
    { question: 'האם צריך ויזה להפלגה?', answer: 'דרישות הוויזה משתנות בהתאם ליעד ההפלגה ולאזרחות שלכם. אנחנו ננחה אתכם בדיוק אילו מסמכים עליכם להכין לקראת הנסיעה.' },
    { question: 'האם יש רופא על האונייה?', answer: 'כן, בכל אונייה יש מרכז רפואי מאובזר עם רופאים ואחיות הזמינים 24/7 למקרי חירום.' },
  ],
  blogPosts: [],
};

export type HomepageData = typeof fallbackHomepage;

export type UseHomepageDataReturn = {
  loading: boolean;
  hp: HomepageData;
  destinations: Destination[];
  ships: Ship[];
  homepageShips: Ship[];
  faq: { question: string; answer: string }[];
  blogPosts: { id: string; title: string; excerpt: string; date: string; image?: string }[];
};

const TINA_TIMEOUT_MS = 10000;

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error('Tina timeout')), ms)
    ),
  ]);
}

/** Merged destinations: from Tina, or full from data when id matches; fallback when empty */
function mergeDestinations(hp: HomepageData): Destination[] {
  const list = (hp.destinations && hp.destinations.length > 0) ? hp.destinations : (fallbackHomepage.destinations ?? []);
  return list.filter(Boolean).map((d) => {
    const fromData = dataDestinations.find((x) => x.id === d.id);
    if (fromData) return fromData;
    const tinaDest = d as {
      weather?: string;
      mapImage?: string | { src?: string };
      mapUrl?: string;
      pointsOfInterest?: string[];
    };
    return {
      id: d.id,
      type: 'destination' as const,
      name: d.title,
      description: d.description ?? '',
      image: resolveImage(d.image as string | { src?: string }),
      mapUrl: tinaDest.mapUrl || resolveImage(tinaDest.mapImage),
      weather: tinaDest.weather ?? '',
      pointsOfInterest: Array.isArray(tinaDest.pointsOfInterest) ? tinaDest.pointsOfInterest.filter(Boolean) : [],
    };
  });
}

/** Merged ships: from Tina, full from data when id matches; fallback when empty */
function mergeShips(hp: HomepageData): (Ship & { gallery?: string[] })[] {
  const list = (hp.ships && hp.ships.length > 0) ? hp.ships : (fallbackHomepage.ships ?? []);
  return list.filter(Boolean).map((s) => {
    const full = allShips.find((x) => x.id === s.id);
    const tinaShip = s as {
      description?: string;
      speed?: string;
      capacity?: string;
      length?: string;
      tonnage?: string;
      features?: string[];
      gallery?: (string | { src?: string })[];
    };
    if (full) {
      return {
        ...full,
        description: tinaShip.description ?? full.description,
        specs: {
          length: tinaShip.length ?? full.specs.length,
          speed: tinaShip.speed ?? full.specs.speed,
          capacity: tinaShip.capacity ?? full.specs.capacity,
          tonnage: tinaShip.tonnage ?? full.specs.tonnage,
        },
        features: Array.isArray(tinaShip.features) && tinaShip.features.length > 0
          ? tinaShip.features.filter(Boolean)
          : full.features,
        gallery: Array.isArray(tinaShip.gallery)
          ? tinaShip.gallery.map((img) => resolveImage(img)).filter(Boolean)
          : undefined,
      };
    }
    return {
      id: s.id,
      type: 'ship' as const,
      name: s.name,
      cruiseLine: s.cruiseLine ?? '',
      description: tinaShip.description ?? '',
      image: resolveImage(s.image as string | { src?: string }),
      specs: {
        length: tinaShip.length ?? '',
        speed: tinaShip.speed ?? '',
        capacity: tinaShip.capacity ?? '',
        tonnage: tinaShip.tonnage ?? '',
      },
      features: Array.isArray(tinaShip.features) ? tinaShip.features.filter(Boolean) : [],
      gallery: Array.isArray(tinaShip.gallery)
        ? tinaShip.gallery.map((img) => resolveImage(img)).filter(Boolean)
        : undefined,
    };
  });
}

export function useHomepageData(): UseHomepageDataReturn {
  const [tinaPayload, setTinaPayload] = useState<{
    data: { homepage: HomepageData };
    query: string;
    variables: typeof variables;
  } | null>(null);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const res = await withTimeout(client.queries.homepage(variables), TINA_TIMEOUT_MS);
        if (!cancelled && res?.data?.homepage) {
          setTinaPayload({
            data: res.data as { homepage: HomepageData },
            query: res.query,
            variables: res.variables as typeof variables,
          });
          return;
        }
      } catch {
        // Tina server not available
      }
      if (!cancelled) {
        setTinaPayload({
          data: { homepage: fallbackHomepage },
          query: HomepageDocument.toString(),
          variables,
        });
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const { data } = useTina({
    data: tinaPayload?.data,
    query: tinaPayload?.query,
    variables: tinaPayload?.variables,
  });

  let hp: HomepageData = (data?.homepage ?? fallbackHomepage) as HomepageData;
  hp = {
    ...hp,
    homepageLabels: { ...fallbackHomepage.homepageLabels, ...hp.homepageLabels },
  } as HomepageData;
  const allMergedShips = mergeShips(hp);
  const ids = hp.homepageShipIds;
  const homepageShips: Ship[] =
    Array.isArray(ids) && ids.length > 0
      ? ids
          .filter((id): id is string => typeof id === 'string')
          .map((id) => allMergedShips.find((s) => s.id === id))
          .filter((s): s is Ship => Boolean(s))
      : allMergedShips;

  return {
    loading: tinaPayload === null,
    hp,
    destinations: mergeDestinations(hp),
    ships: allMergedShips,
    homepageShips,
    faq: hp.faq ?? [],
    blogPosts: hp.blogPosts ?? [],
  };
}

export { fallbackHomepage, resolveImage, variables, HOMEPAGE_RELATIVE_PATH };
