export interface Destination {
  id: string;
  type: 'destination';
  name: string;
  description: string;
  image: string;
  mapUrl: string;
  weather: string;
  pointsOfInterest: string[];
}

export interface Ship {
  id: string;
  type: 'ship';
  name: string;
  cruiseLine: string;
  description: string;
  image: string;
  specs: {
    length: string;
    speed: string;
    capacity: string;
    tonnage: string;
  };
  features: string[];
}

export const destinations: Destination[] = [
  {
    id: 'norway-fjords',
    type: 'destination',
    name: 'הפיורדים של נורווגיה',
    description: 'מסע בין צוקים אדירים, מפלים שוצפים וכפרים ציוריים השוכנים לחופי הפיורדים העמוקים בעולם.',
    image: 'https://picsum.photos/seed/fjords/1200/800',
    mapUrl: 'https://picsum.photos/seed/map1/800/600',
    weather: 'קיץ: 12°C - 18°C | חורף: -2°C - 4°C',
    pointsOfInterest: ['גייראנגרפיורד', 'ברגן העתיקה', 'מפלי שבע האחיות', 'קרחון בריקסדאל']
  },
  {
    id: 'mediterranean',
    type: 'destination',
    name: 'הים התיכון הקלאסי',
    description: 'ערש התרבות המערבית. מהחופים הלבנים של יוון ועד לנמלים ההיסטוריים של איטליה וצרפת.',
    image: 'https://picsum.photos/seed/med/1200/800',
    mapUrl: 'https://picsum.photos/seed/map2/800/600',
    weather: 'קיץ: 25°C - 32°C | חורף: 10°C - 16°C',
    pointsOfInterest: ['סנטוריני', 'חוף אמלפי', 'ברצלונה', 'הריביירה הצרפתית']
  },
  {
    id: 'caribbean',
    type: 'destination',
    name: 'האיים הקריביים',
    description: 'גן עדן טרופי של מים בצבע טורקיז, חולות לבנים וקצב חיים רגוע תחת עצי הקוקוס.',
    image: 'https://picsum.photos/seed/carib/1200/800',
    mapUrl: 'https://picsum.photos/seed/map3/800/600',
    weather: 'כל השנה: 24°C - 30°C',
    pointsOfInterest: ['איי בהאמה', 'ג׳מייקה', 'סנט לוסיה', 'קוזומל']
  },
  {
    id: 'alaska',
    type: 'destination',
    name: 'אלסקה הפראית',
    description: 'מפגש מרגש עם קרחונים מתנפצים, לווייתנים גדולי-סנפיר וטבע בתולי שאין שני לו.',
    image: 'https://picsum.photos/seed/alaska/1200/800',
    mapUrl: 'https://picsum.photos/seed/map4/800/600',
    weather: 'מאי-ספטמבר: 10°C - 18°C',
    pointsOfInterest: ['מפרץ הקרחונים', 'ג׳ונו', 'מעבר הפנים', 'קרחון מנדנהול']
  },
  {
    id: 'antarctica',
    type: 'destination',
    name: 'אנטארקטיקה - היבשת הלבנה',
    description: 'המסע האולטימטיבי לקצה העולם. ממלכה של קרח, פינגווינים ושקט אינסופי.',
    image: 'https://picsum.photos/seed/antarctica/1200/800',
    mapUrl: 'https://picsum.photos/seed/map5/800/600',
    weather: 'נובמבר-מרץ: -5°C - 2°C',
    pointsOfInterest: ['תעלת למייר', 'אי פיטרמן', 'מפרץ התקווה', 'דרום שטלנד']
  },
  {
    id: 'japan',
    type: 'destination',
    name: 'יפן והמזרח הרחוק',
    description: 'שילוב מרתק בין מסורת עתיקה לטכנולוגיה עתידנית, מקדשים שלווים וערים תוססות.',
    image: 'https://picsum.photos/seed/japan/1200/800',
    mapUrl: 'https://picsum.photos/seed/map6/800/600',
    weather: 'אביב: 15°C - 22°C | סתיו: 14°C - 20°C',
    pointsOfInterest: ['טוקיו', 'קיוטו', 'הר פוג׳י', 'אוסקה']
  },
  {
    id: 'baltic',
    type: 'destination',
    name: 'הים הבלטי',
    description: 'בירות צפוניות מפוארות, ארכיטקטורה מלכותית והיסטוריה עשירה של ערי הנמל.',
    image: 'https://picsum.photos/seed/baltic/1200/800',
    mapUrl: 'https://picsum.photos/seed/map7/800/600',
    weather: 'קיץ: 18°C - 24°C',
    pointsOfInterest: ['שטוקהולם', 'קופנהגן', 'טאלין', 'הלסינקי']
  },
  {
    id: 'south-pacific',
    type: 'destination',
    name: 'דרום האוקיינוס השקט',
    description: 'האיים המרוחקים והיפים בעולם. לגונות כחולות, שוניות אלמוגים ותרבות פולינזית עשירה.',
    image: 'https://picsum.photos/seed/pacific/1200/800',
    mapUrl: 'https://picsum.photos/seed/map8/800/600',
    weather: 'כל השנה: 25°C - 29°C',
    pointsOfInterest: ['בורה בורה', 'טהיטי', 'פיג׳י', 'איי קוק']
  },
  {
    id: 'dubai-emirates',
    type: 'destination',
    name: 'דובאי והאמירויות',
    description: 'פאר מודרני בלב המדבר. גורדי שחקים עתידניים, שווקים מסורתיים וחופים זהובים.',
    image: 'https://picsum.photos/seed/dubai/1200/800',
    mapUrl: 'https://picsum.photos/seed/map9/800/600',
    weather: 'חורף: 20°C - 28°C | קיץ: 35°C+',
    pointsOfInterest: ['בורג׳ חליפה', 'מסגד השייח׳ זאיד', 'דובאי מרינה', 'אי התמרים']
  },
  {
    id: 'south-america',
    type: 'destination',
    name: 'דרום אמריקה וברזיל',
    description: 'קצב הסמבה, יערות האמזונס והקרחונים של פטגוניה. יבשת של ניגודים מרהיבים.',
    image: 'https://picsum.photos/seed/brazil/1200/800',
    mapUrl: 'https://picsum.photos/seed/map10/800/600',
    weather: 'משתנה לפי האזור',
    pointsOfInterest: ['ריו דה ז׳נרו', 'בואנוס איירס', 'מפלי האיגואסו', 'מיצר מגלן']
  }
];

export const ships: Ship[] = [
  {
    id: 'symphony-of-the-seas',
    type: 'ship',
    name: 'Symphony of the Seas',
    cruiseLine: 'Royal Caribbean',
    description: 'אוניית הנוסעים הגדולה בעולם בעת השקתה (2018). פארק שעשועים, זירת החלקה על הקרח, טיילת Boardwalk ואזור Central Park פנימי עם צמחייה אמיתית.',
    image: 'https://picsum.photos/seed/symphony/1200/800',
    specs: {
      length: '362 מטר',
      speed: '22 קשר',
      capacity: '6,680 נוסעים',
      tonnage: '228,081 טון'
    },
    features: ['זירת החלקה על הקרח', 'פארק שעשועים', 'אזור Central Park פנימי', 'מסעדות שף רבות']
  },
  {
    id: 'odyssey-of-the-seas',
    type: 'ship',
    name: 'Odyssey of the Seas',
    cruiseLine: 'Royal Caribbean',
    description: 'אוניית Quantum Ultra Class הפועלת מאירופה והקריביים. סימולטור צניחה חופשית, מצלמת תצפית בגובה 90 מטר ומופעים מהשורה הראשונה.',
    image: 'https://picsum.photos/seed/odyssey/1200/800',
    specs: {
      length: '347 מטר',
      speed: '22 קשר',
      capacity: '4,198 נוסעים',
      tonnage: '167,704 טון'
    },
    features: ['North Star – מצלמת תצפית מעל הים', 'RipCord – סימולטור צניחה', 'SeaPlex – מגרש ספורט מתקדם', 'Two70 – מופעים חדשניים']
  },
  {
    id: 'ms-roald-amundsen',
    type: 'ship',
    name: 'MS Roald Amundsen',
    cruiseLine: 'Hurtigruten',
    description: 'ספינת משלחות היברידית ראשונה בעולם, פועלת באלסקה, אנטארקטיקה ואיים מרוחקים. עיצוב נורדי, מסעדות גורמה ומרפסות תצפית פנורמיות.',
    image: 'https://picsum.photos/seed/roaldamundsen/1200/800',
    specs: {
      length: '140 מטר',
      speed: '15 קשר',
      capacity: '530 נוסעים',
      tonnage: '20,889 טון'
    },
    features: ['מנוע היברידי', 'מרפסות תצפית 360°', 'סאונה וחלונות זכוכית', 'מסעדות גורמה סקנדינביות']
  },
  {
    id: 'scenic-eclipse',
    type: 'ship',
    name: 'Scenic Eclipse',
    cruiseLine: 'Scenic Luxury Cruises',
    description: 'יאכטת משלחות "6 כוכבים" עם הצוללת והמסוק האישיים שלה. 10 מסעדות, ספא יוקרתי ושירות אישי לכל אורח.',
    image: 'https://picsum.photos/seed/sceniceclipse/1200/800',
    specs: {
      length: '168 מטר',
      speed: '17 קשר',
      capacity: '228 נוסעים',
      tonnage: '17,545 טון'
    },
    features: ['צוללת מחקר', 'מסוק תצפית', 'ספא 550 מ"ר', 'מסעדות גורמה']
  },
  {
    id: 'star-flyer',
    type: 'ship',
    name: 'Star Flyer',
    cruiseLine: 'Star Clippers',
    description: 'ספינת מפרשים קלאסית עם 4 תרנים ו-36 מפרשים. חוויית שיט אותנטית בים התיכון והקריביים.',
    image: 'https://picsum.photos/seed/starflyer/1200/800',
    specs: {
      length: '115 מטר',
      speed: '17 קשר (מפרשים)',
      capacity: '170 נוסעים',
      tonnage: '2,298 טון'
    },
    features: ['מפרשים מסורתיים', 'סיפון עץ טיק', 'בר תורן', 'שחייה ישירות מהים']
  },
  {
    id: 'msc-seashore',
    type: 'ship',
    name: 'MSC Seashore',
    cruiseLine: 'MSC Cruises',
    description: 'אוניית Seaside EVO Class המונעת ב-LNG. טיילת ים-תיכונית ארוכה, מגלשות מים ואזור Yacht Club אקסקלוסיבי.',
    image: 'https://picsum.photos/seed/mscseashore/1200/800',
    specs: {
      length: '339 מטר',
      speed: '22 קשר',
      capacity: '5,632 נוסעים',
      tonnage: '169,380 טון'
    },
    features: ['טיילת ים-תיכונית פתוחה', 'מגלשות מים', 'Yacht Club פרטי', 'בריכות Infinity']
  },
  {
    id: 'norwegian-encore',
    type: 'ship',
    name: 'Norwegian Encore',
    cruiseLine: 'Norwegian Cruise Line',
    description: 'אוניית Breakaway Plus עם מסלול גו-קרטינג רב-קומתי, פארק שעשועים ומופעי Broadway מהשורה הראשונה.',
    image: 'https://picsum.photos/seed/norwegianencore/1200/800',
    specs: {
      length: '333 מטר',
      speed: '22 קשר',
      capacity: '3,998 נוסעים',
      tonnage: '169,116 טון'
    },
    features: ['מסלול גו-קרטינג', 'קיר טיפוס', 'מופעי Broadway', 'Freestyle Dining']
  },
  {
    id: 'queen-mary-2',
    type: 'ship',
    name: 'Queen Mary 2',
    cruiseLine: 'Cunard Line',
    description: 'אוניית האוקיינוס היחידה בעולם עדיין בשירות פעיל. חציית אוקיינוס קלאסית, עיצוב ארט-דקו, תה מנחה ומופעי נשפים.',
    image: 'https://picsum.photos/seed/queenmary2/1200/800',
    specs: {
      length: '345 מטר',
      speed: '30 קשר',
      capacity: '2,691 נוסעים',
      tonnage: '148,528 טון'
    },
    features: ['חציית אוקיינוס', 'תה מנחה מסורתי', 'פלנטריום', 'אולם נשפים']
  },
  {
    id: 'silver-spirit',
    type: 'ship',
    name: 'Silver Spirit',
    cruiseLine: 'Silversea Cruises',
    description: 'ספינה המשלבת אלגנטיות אירופאית עם שירות ללא פשרות. חוויה קולינרית יוצאת דופן.',
    image: 'https://picsum.photos/seed/ship8/1200/800',
    specs: {
      length: '210 מטר',
      speed: '19 קשר',
      capacity: '600 נוסעים',
      tonnage: '36,000 טון'
    },
    features: ['מסעדת גורמה', 'ספריית מוזיקה', 'מרכז בריאות', 'סיפון תצפית']
  },
  {
    id: 'icon-of-the-seas',
    type: 'ship',
    name: 'Icon of the Seas',
    cruiseLine: 'Royal Caribbean',
    description: 'אחת מאוניות הנוסעים הגדולות והחדשות בעולם, פארק מים עצום, רובע משפחות ואזורי יוקרה שקטים למבוגרים בלבד.',
    image: 'https://picsum.photos/seed/iconoftheseas/1200/800',
    specs: {
      length: '365 מטר',
      speed: '22 קשר',
      capacity: '7,600 נוסעים',
      tonnage: '250,800 טון'
    },
    features: ['פארק מים מהגדולים בים', 'שכונות נושא שונות על הסיפון', 'קיר טיפוס ענק', 'בריכה אינסופית עליונה']
  },
  {
    id: 'wonder-of-the-seas',
    type: 'ship',
    name: 'Wonder of the Seas',
    cruiseLine: 'Royal Caribbean',
    description: '“עיר צפה” עם שכונות, טיילת פתוחה, זירת החלקה על הקרח ומופעי מים מרהיבים בחלק האחורי של האונייה.',
    image: 'https://picsum.photos/seed/wonderoftheseas/1200/800',
    specs: {
      length: '362 מטר',
      speed: '22 קשר',
      capacity: '6,988 נוסעים',
      tonnage: '236,857 טון'
    },
    features: ['אמפיתיאטרון מים פתוח', 'אומגה בין הסיפונים', 'מסלולי מיני גולף', 'שדרת חנויות ומסעדות']
  },
  {
    id: 'msc-world-europa',
    type: 'ship',
    name: 'MSC World Europa',
    cruiseLine: 'MSC Cruises',
    description: 'אוניית דגל חדשנית המונעת ב-LNG, עם טיילת פתוחה מרהיבה, מגלשות ענק ומרחבי קונספט למשפחות וזוגות.',
    image: 'https://picsum.photos/seed/mscworldeuropa/1200/800',
    specs: {
      length: '333 מטר',
      speed: '22 קשר',
      capacity: '6,762 נוסעים',
      tonnage: '215,863 טון'
    },
    features: ['מגלשת ספירלה בגובה עשרות מטרים', 'אזור שקט למבוגרים בלבד', 'בריכת אינסוף מאחור', 'טיילת פנימית עם כיפת לדים']
  },
  {
    id: 'norwegian-prima',
    type: 'ship',
    name: 'Norwegian Prima',
    cruiseLine: 'Norwegian Cruise Line',
    description: 'דגש על מרחבים פתוחים, שירות פרימיום וחוויית “Freestyle Cruising” עם גמישות מלאה בבחירת הארוחות והפעילויות.',
    image: 'https://picsum.photos/seed/norwegianprima/1200/800',
    specs: {
      length: '294 מטר',
      speed: '23 קשר',
      capacity: '3,215 נוסעים',
      tonnage: '142,500 טון'
    },
    features: ['מסלול קארטינג רב-קומתי', 'אזור ספא מפנק', 'מסעדות שף בסגנון פתוח', 'מופעי בידור מקוריים']
  },
  {
    id: 'sun-princess',
    type: 'ship',
    name: 'Sun Princess',
    cruiseLine: 'Princess Cruises',
    description: 'דור חדש של אוניות פרינסס עם כיפת זכוכית עצומה, לאונג׳ים פתוחים לים וחוויה קולינרית עשירה.',
    image: 'https://picsum.photos/seed/sunprincess/1200/800',
    specs: {
      length: '345 מטר',
      speed: '22 קשר',
      capacity: '4,300 נוסעים',
      tonnage: '175,500 טון'
    },
    features: ['אטריום זכוכית מרהיב', 'בריכות מרובות בשלושה מפלסים', 'סוויטות מרווחות עם מרפסות ענק', 'חוויית MedallionClass מתקדמת']
  },
  {
    id: 'disney-wish',
    type: 'ship',
    name: 'Disney Wish',
    cruiseLine: 'Disney Cruise Line',
    description: 'חלום למשפחות עם ילדים – דמויות דיסני בכל פינה, מופעים, מגלשות מים סביב הסיפון וחדרים בעיצוב קסום.',
    image: 'https://picsum.photos/seed/disneywish/1200/800',
    specs: {
      length: '341 מטר',
      speed: '19 קשר',
      capacity: '4,000 נוסעים',
      tonnage: '144,000 טון'
    },
    features: ['מגלשת מים סביב האונייה', 'ארוחות חווייתיות עם דמויות', 'אזורי מבוגרים שקטים', 'מועדוני ילדים לכל הגילאים']
  },
  {
    id: 'disney-treasure',
    type: 'ship',
    name: 'Disney Treasure',
    cruiseLine: 'Disney Cruise Line',
    description: 'אוניית דיסני החדשה ביותר (2024). עיצוב בהשראת הרפתקאות, מסעדות חווייתיות ומתקנים מתקדמים למשפחות.',
    image: 'https://picsum.photos/seed/disneytreasure/1200/800',
    specs: {
      length: '344 מטר',
      speed: '21 קשר',
      capacity: '4,000 נוסעים',
      tonnage: '144,000 טון'
    },
    features: ['מסעדה בהשראת "אלאדין"', 'בר Lounges בסגנון הרפתקאות', 'מגלשות מים', 'מועדוני ילדים מודרניים']
  },
  {
    id: 'norwegian-viva',
    type: 'ship',
    name: 'Norwegian Viva',
    cruiseLine: 'Norwegian Cruise Line',
    description: 'אחותה של Norwegian Prima. עיצוב סקנדינבי מודרני, מסלול גו-קרטינג ו-Freestyle Cruising מלא.',
    image: 'https://picsum.photos/seed/norwegianviva/1200/800',
    specs: {
      length: '294 מטר',
      speed: '23 קשר',
      capacity: '3,099 נוסעים',
      tonnage: '142,500 טון'
    },
    features: ['מסלול גו-קרטינג', 'Indulge Food Hall', 'ספא מפנק', 'מופעי בידור']
  },
  {
    id: 'celebrity-beyond',
    type: 'ship',
    name: 'Celebrity Beyond',
    cruiseLine: 'Celebrity Cruises',
    description: 'אוניית Edge Class המשודרגת. Magic Carpet – פלטפורמה צפה, מסעדות מישלן וסגנון "Modern Luxury".',
    image: 'https://picsum.photos/seed/celebritybeyond/1200/800',
    specs: {
      length: '327 מטר',
      speed: '22 קשר',
      capacity: '3,260 נוסעים',
      tonnage: '140,600 טון'
    },
    features: ['Magic Carpet – פלטפורמה צפה', 'מסעדות Le Petit Chef', 'ריאות ירוקות', 'ספא Canyon Ranch']
  },
  {
    id: 'carnival-mardi-gras',
    type: 'ship',
    name: 'Carnival Mardi Gras',
    cruiseLine: 'Carnival Cruise Line',
    description: 'אוניית "הכיף" הגדולה של קרניבל. מסלול גו-קרטינג Bolt, אזור French Quarter ומגוון מסעדות.',
    image: 'https://picsum.photos/seed/carnivalmardigras/1200/800',
    specs: {
      length: '344 מטר',
      speed: '23 קשר',
      capacity: '6,465 נוסעים',
      tonnage: '180,800 טון'
    },
    features: ['מסלול Bolt – גו-קרטינג אלקטרוני', 'French Quarter פנימי', 'מגלשות מים', 'מסעדות Guy Fieri']
  },
  {
    id: 'costa-smeralda',
    type: 'ship',
    name: 'Costa Smeralda',
    cruiseLine: 'Costa Cruises',
    description: 'אוניית LNG הראשונה של קוסטה. עיצוב איטלקי עכשווי, טיילת Colosseo פתוחה ומסעדות איטלקיות אותנטיות.',
    image: 'https://picsum.photos/seed/costasmeralda/1200/800',
    specs: {
      length: '337 מטר',
      speed: '22 קשר',
      capacity: '6,554 נוסעים',
      tonnage: '185,010 טון'
    },
    features: ['מונעת ב-LNG', 'טיילת Colosseo', 'מסעדות איטלקיות', 'ספא Samsara']
  },
  {
    id: 'silver-nova',
    type: 'ship',
    name: 'Silver Nova',
    cruiseLine: 'Silversea Cruises',
    description: 'אוניית היוקרה החדשה של סילברסיאה עם אסימטריה ייחודית, מסעדות גורמה וצוללת משלחות.',
    image: 'https://picsum.photos/seed/silveranova/1200/800',
    specs: {
      length: '244 מטר',
      speed: '19 קשר',
      capacity: '728 נוסעים',
      tonnage: '54,700 טון'
    },
    features: ['עיצוב אסימטרי ייחודי', 'מסעדות גורמה', 'צוללת משלחות', 'שירות כל-כלול']
  }
];

export const blogPosts = [
  {
    id: 'mediterranean-routes',
    title: '5 מסלולים מומלצים בים התיכון',
    excerpt: 'הים התיכון מציע שילוב מושלם של היסטוריה, קולינריה וחופים מרהיבים. הנה המסלולים שאסור לכם לפספס.',
    date: '20.02.2026',
    image: 'https://picsum.photos/seed/med-blog/1920/1080',
    content: `
### 1. הריביירה הצרפתית והאיטלקית
מסלול המתחיל בניס או בקאן וממשיך לאורך החוף האיטלקי עד לפורטופינו וצ׳ינקווה טרה. זהו מסלול של יוקרה, אופנה ונופים עוצרי נשימה.

### 2. איי יוון והים האגאי
הפלגה בין הבתים הלבנים של סנטוריני, החופים התוססים של מיקונוס וההיסטוריה העתיקה של כרתים. חוויה של כחול ולבן אינסופי.

### 3. מערב הים התיכון: ספרד ומרוקו
שילוב מרתק בין התרבות הספרדית התוססת בברצלונה ומאלגה לבין הקסם האקזוטי של קזבלנקה וטנג׳יר.

### 4. הים האדריאטי: קרואטיה ומונטנגרו
גילוי הפנינים של הים האדריאטי - דוברובניק המוקפת חומה, מפרץ קוטור המרהיב והאיים הירוקים של קרואטיה.

### 5. מזרח הים התיכון: קפריסין וישראל
מסלול המשלב את חופי קפריסין הזהובים עם ביקור באתרים הקדושים וההיסטוריים של ישראל, דרך נמלי חיפה ואשדוד.
    `
  },
  {
    id: 'alaska-packing',
    title: '5 טיפים לאריזה נכונה לקרוז באלסקה',
    excerpt: 'אלסקה מציעה נופים מרהיבים אך מזג האוויר יכול להיות הפכפך. הנה מה שבאמת צריך לקחת.',
    date: '15.02.2026',
    image: 'https://picsum.photos/seed/alaska-blog/1200/800',
    content: 'תוכן הפוסט על אלסקה...'
  },
  {
    id: 'hidden-ports',
    title: 'הסודות של הים התיכון: נמלים נסתרים',
    excerpt: 'מעבר לברצלונה ורומא, ישנם נמלים קטנים ומדהימים שרק ספינות קטנות יכולות להגיע אליהם.',
    date: '10.02.2026',
    image: 'https://picsum.photos/seed/hidden-blog/1200/800',
    content: 'תוכן הפוסט על נמלים נסתרים...'
  }
];

export const cruiseLines = [
  {
    id: 'royal-caribbean',
    name: 'Royal Caribbean',
    description: 'רויאל קריביאן (Royal Caribbean International) היא חלוצה בעולם הקרוזים, הידועה באוניות הגדולות והחדשניות ביותר בעולם. החברה מציעה חוויות פורצות דרך כמו סימולטורים של צניחה חופשית, קירות טיפוס, פארקי מים ענקיים והופעות ברמה של ברודוויי. עם דגש על משפחות והרפתקאות, רויאל קריביאן הופכת כל הפלגה לעיר צפה של תענוגות.',
    ships: ['Icon of the Seas', 'Wonder of the Seas', 'Symphony of the Seas', 'Odyssey of the Seas'],
    image: 'https://picsum.photos/seed/royal/1200/800'
  },
  {
    id: 'msc-cruises',
    name: 'MSC Cruises',
    description: 'MSC Cruises היא חברת השייט הפרטית הגדולה בעולם, המביאה את האלגנטיות והאירוח האירופאי לכל פינה בגלובוס. החברה ידועה בעיצוב מודרני, קולינריה משובחת ודגש חזק על קיימות. האוניות של MSC מציעות חוויה יוקרתית במחירים נגישים, עם מועדון ה-Yacht Club האקסקלוסיבי למי שרוצה פינוק מקסימלי.',
    ships: ['MSC World Europa', 'MSC Seashore', 'MSC Virtuosa', 'MSC Grandiosa'],
    image: 'https://picsum.photos/seed/msc/1200/800'
  },
  {
    id: 'norwegian-cruise-line',
    name: 'Norwegian Cruise Line',
    description: 'NCL חוללה מהפכה בענף עם קונספט ה-"Freestyle Cruising" - חופש מוחלט ללא לוחות זמנים קשיחים לארוחות או קודי לבוש מחייבים. האוניות של נורוויג׳ן מצוידות במסלולי קארטינג, פארקי מים ומופעי בידור מהשורה הראשונה, מה שהופך אותן לבחירה מושלמת לצעירים ומשפחות.',
    ships: ['Norwegian Prima', 'Norwegian Viva', 'Norwegian Encore', 'Norwegian Bliss'],
    image: 'https://picsum.photos/seed/ncl/1200/800'
  },
  {
    id: 'celebrity-cruises',
    name: 'Celebrity Cruises',
    description: 'סלבריטי קרוזס מציעה חווית "Modern Luxury" המשלבת עיצוב עכשווי, שירות אישי וקולינריה ברמה של מסעדות מישלן. האוניות מסדרת ה-Edge ידועות ב-"Magic Carpet" - פלטפורמה צפה המציעה נופים מרהיבים. זוהי הבחירה האידיאלית לזוגות ומטיילים המחפשים תחכום ורוגע.',
    ships: ['Celebrity Beyond', 'Celebrity Apex', 'Celebrity Edge', 'Celebrity Silhouette'],
    image: 'https://picsum.photos/seed/celebrity/1200/800'
  },
  {
    id: 'princess-cruises',
    name: 'Princess Cruises',
    description: 'פרינסס קרוזס, המפורסמת מהסדרה "ספינת האהבה", ידועה בשירות ה-MedallionClass המהפכני שלה, המאפשר חוויה מותאמת אישית וטכנולוגית. החברה מתמחה במסלולים ארוכים ומרתקים, כולל הפלגות עומק באלסקה ובאירופה, עם דגש על העשרה תרבותית ונוחות קלאסית.',
    ships: ['Sun Princess', 'Discovery Princess', 'Enchanted Princess', 'Sky Princess'],
    image: 'https://picsum.photos/seed/princess/1200/800'
  },
  {
    id: 'carnival-cruise-line',
    name: 'Carnival Cruise Line',
    description: 'קרניבל היא "ספינת הכיף" (The Fun Ships) האולטימטיבית. עם אווירה תוססת, מסיבות סיפון, פארקי מים ומגוון עצום של אפשרויות אוכל לא פורמליות, קרניבל מציעה את התמורה הטובה ביותר לכסף עבור משפחות וקבוצות חברים שרוצים לחגוג בלב ים.',
    ships: ['Mardi Gras', 'Carnival Celebration', 'Carnival Jubilee', 'Carnival Horizon'],
    image: 'https://picsum.photos/seed/carnival/1200/800'
  },
  {
    id: 'disney-cruise-line',
    name: 'Disney Cruise Line',
    description: 'דיסני קרוז ליין מביאה את הקסם של דיסני ללב ים. עם שירות ללא פשרות, מועדוני ילדים מדהימים, הופעות חיות של הדמויות האהובות ואזורים ייעודיים למבוגרים בלבד, זוהי חוויה משפחתית של פעם בחיים שאין לה מתחרים.',
    ships: ['Disney Wish', 'Disney Fantasy', 'Disney Dream', 'Disney Treasure'],
    image: 'https://picsum.photos/seed/disney/1200/800'
  },
  {
    id: 'costa-cruises',
    name: 'Costa Cruises',
    description: 'קוסטה קרוזס מביאה את ה-"Italy\'s Finest" לים. עם דגש על סגנון חיים איטלקי, פסטה טרייה, גלידה איכותית ואווירה ים-תיכונית חמה, קוסטה מציעה הפלגות מהנות וצבעוניות בעיקר באירופה ובדרום אמריקה.',
    ships: ['Costa Toscana', 'Costa Smeralda', 'Costa Firenze', 'Costa Diadema'],
    image: 'https://picsum.photos/seed/costa/1200/800'
  }
];
