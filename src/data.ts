export interface PointOfInterest {
  name: string;
  description: string;
  image: string;
  coordinates: { x: number; y: number }; // Percentage 0-100
}

export interface Destination {
  id: string;
  type: 'destination';
  name: string;
  description: string;
  image: string;
  mapUrl: string;
  weather: string;
  pointsOfInterest: PointOfInterest[];
}

export interface ShipFeature {
  name: string;
  images: string[];
}

export interface Ship {
  id: string;
  type: 'ship';
  name: string;
  cruiseLine: string;
  description: string;
  longDescription?: string;
  image: string;
  gallery?: string[];
  specs: {
    length: string;
    speed: string;
    capacity: string;
    tonnage: string;
  };
  features: ShipFeature[];
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
    pointsOfInterest: [
      { name: 'גייראנגרפיורד', description: 'הפיורד המפורסם ביותר בנורווגיה, אתר מורשת עולמית של אונסק"ו.', image: 'https://images.unsplash.com/photo-1589197331516-4d84593e04e7?auto=format&fit=crop&q=80&w=400', coordinates: { x: 45, y: 35 } },
      { name: 'ברגן העתיקה', description: 'רובע בריגן ההיסטורי עם בתי העץ הצבעוניים.', image: 'https://images.unsplash.com/photo-1555990548-648410b93251?auto=format&fit=crop&q=80&w=400', coordinates: { x: 35, y: 55 } },
      { name: 'מפלי שבע האחיות', description: 'שבעה מפלים שוצפים היורדים מגובה רב אל תוך הפיורד.', image: 'https://images.unsplash.com/photo-1518495122814-7c7af928643d?auto=format&fit=crop&q=80&w=400', coordinates: { x: 55, y: 25 } },
      { name: 'קרחון בריקסדאל', description: 'זרוע מרהיבה של קרחון יוסטדאלסבריין הגדול.', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400', coordinates: { x: 50, y: 45 } }
    ]
  },
  {
    id: 'mediterranean',
    type: 'destination',
    name: 'הים התיכון הקלאסי',
    description: 'ערש התרבות המערבית. מהחופים הלבנים של יוון ועד לנמלים ההיסטוריים של איטליה וצרפת.',
    image: 'https://picsum.photos/seed/med/1200/800',
    mapUrl: 'https://picsum.photos/seed/map2/800/600',
    weather: 'קיץ: 25°C - 32°C | חורף: 10°C - 16°C',
    pointsOfInterest: [
      { name: 'סנטוריני', description: 'האי היווני המפורסם עם הבתים הלבנים והכיפות הכחולות.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=400', coordinates: { x: 75, y: 65 } },
      { name: 'חוף אמלפי', description: 'אחד מקווי החוף היפים בעולם עם עיירות תלויות על צוקים.', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=400', coordinates: { x: 55, y: 55 } },
      { name: 'ברצלונה', description: 'בירת קטלוניה התוססת עם האדריכלות המרהיבה של גאודי.', image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&q=80&w=400', coordinates: { x: 25, y: 45 } },
      { name: 'הריביירה הצרפתית', description: 'חוף התכלת היוקרתי עם עיירות כמו ניס וקאן.', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=400', coordinates: { x: 40, y: 40 } }
    ]
  },
  {
    id: 'caribbean',
    type: 'destination',
    name: 'האיים הקריביים',
    description: 'גן עדן טרופי של מים בצבע טורקיז, חולות לבנים וקצב חיים רגוע תחת עצי הקוקוס.',
    image: 'https://picsum.photos/seed/carib/1200/800',
    mapUrl: 'https://picsum.photos/seed/map3/800/600',
    weather: 'כל השנה: 24°C - 30°C',
    pointsOfInterest: [
      { name: 'איי בהאמה', description: 'מאות איים עם מים צלולים וחולות ורודים.', image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=400', coordinates: { x: 60, y: 30 } },
      { name: 'ג׳מייקה', description: 'אי הרגאיי עם מפלים מרהיבים וחופים זהובים.', image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80&w=400', coordinates: { x: 45, y: 60 } },
      { name: 'סנט לוסיה', description: 'אי וולקני עם הרי הפיטונס המפורסמים.', image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=400', coordinates: { x: 80, y: 70 } },
      { name: 'קוזומל', description: 'אי מקסיקני הידוע בשוניות האלמוגים המדהימות שלו.', image: 'https://images.unsplash.com/photo-1518495122814-7c7af928643d?auto=format&fit=crop&q=80&w=400', coordinates: { x: 20, y: 50 } }
    ]
  },
  {
    id: 'alaska',
    type: 'destination',
    name: 'אלסקה הפראית',
    description: 'מפגש מרגש עם קרחונים מתנפצים, לווייתנים גדולי-סנפיר וטבע בתולי שאין שני לו.',
    image: 'https://picsum.photos/seed/alaska/1200/800',
    mapUrl: 'https://picsum.photos/seed/map4/800/600',
    weather: 'מאי-ספטמבר: 10°C - 18°C',
    pointsOfInterest: [
      { name: 'מפרץ הקרחונים', description: 'פארק לאומי מרהיב עם קרחונים פעילים.', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=400', coordinates: { x: 50, y: 40 } },
      { name: 'ג׳ונו', description: 'בירת אלסקה הנגישה רק בים או באוויר.', image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=400', coordinates: { x: 60, y: 50 } }
    ]
  },
  {
    id: 'antarctica',
    type: 'destination',
    name: 'אנטארקטיקה - היבשת הלבנה',
    description: 'המסע האולטימטיבי לקצה העולם. ממלכה של קרח, פינגווינים ושקט אינסופי.',
    image: 'https://picsum.photos/seed/antarctica/1200/800',
    mapUrl: 'https://picsum.photos/seed/map5/800/600',
    weather: 'נובמבר-מרץ: -5°C - 2°C',
    pointsOfInterest: [
      { name: 'תעלת למייר', description: 'אחד המעברים היפים בעולם בין הרים מושלגים.', image: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&q=80&w=400', coordinates: { x: 40, y: 60 } },
      { name: 'אי פיטרמן', description: 'מושבה גדולה של פינגווינים וכלבי ים.', image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=400', coordinates: { x: 50, y: 70 } }
    ]
  },
  {
    id: 'japan',
    type: 'destination',
    name: 'יפן והמזרח הרחוק',
    description: 'שילוב מרתק בין מסורת עתיקה לטכנולוגיה עתידנית, מקדשים שלווים וערים תוססות.',
    image: 'https://picsum.photos/seed/japan/1200/800',
    mapUrl: 'https://picsum.photos/seed/map6/800/600',
    weather: 'אביב: 15°C - 22°C | סתיו: 14°C - 20°C',
    pointsOfInterest: [
      { name: 'קיוטו', description: 'העיר של אלף המקדשים והגנים המסורתיים.', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=400', coordinates: { x: 60, y: 50 } },
      { name: 'הר פוג׳י', description: 'ההר הגבוה והקדוש ביותר ביפן.', image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&q=80&w=400', coordinates: { x: 50, y: 40 } }
    ]
  },
  {
    id: 'baltic',
    type: 'destination',
    name: 'הים הבלטי',
    description: 'בירות צפוניות מפוארות, ארכיטקטורה מלכותית והיסטוריה עשירה של ערי הנמל.',
    image: 'https://picsum.photos/seed/baltic/1200/800',
    mapUrl: 'https://picsum.photos/seed/map7/800/600',
    weather: 'קיץ: 18°C - 24°C',
    pointsOfInterest: [
      { name: 'שטוקהולם', description: 'ונציה של הצפון הבנויה על 14 איים.', image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&q=80&w=400', coordinates: { x: 40, y: 40 } },
      { name: 'טאלין', description: 'עיר עתיקה מימי הביניים מהיפות באירופה.', image: 'https://images.unsplash.com/photo-1517733944472-11244472-11244472-11244472?auto=format&fit=crop&q=80&w=400', coordinates: { x: 60, y: 30 } }
    ]
  },
  {
    id: 'south-pacific',
    type: 'destination',
    name: 'דרום האוקיינוס השקט',
    description: 'האיים המרוחקים והיפים בעולם. לגונות כחולות, שוניות אלמוגים ותרבות פולינזית עשירה.',
    image: 'https://picsum.photos/seed/pacific/1200/800',
    mapUrl: 'https://picsum.photos/seed/map8/800/600',
    weather: 'כל השנה: 25°C - 29°C',
    pointsOfInterest: [
      { name: 'בורה בורה', description: 'הלגונה היפה בעולם עם בתי מלון על המים.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400', coordinates: { x: 50, y: 50 } },
      { name: 'פיג׳י', description: 'ארכיפלג של מעל 300 איים טרופיים.', image: 'https://images.unsplash.com/photo-1540202404-a2f29016bb5d?auto=format&fit=crop&q=80&w=400', coordinates: { x: 70, y: 60 } }
    ]
  },
  {
    id: 'dubai-emirates',
    type: 'destination',
    name: 'דובאי והאמירויות',
    description: 'פאר מודרני בלב המדבר. גורדי שחקים עתידניים, שווקים מסורתיים וחופים זהובים.',
    image: 'https://picsum.photos/seed/dubai/1200/800',
    mapUrl: 'https://picsum.photos/seed/map9/800/600',
    weather: 'חורף: 20°C - 28°C | קיץ: 35°C+',
    pointsOfInterest: [
      { name: 'בורג׳ חליפה', description: 'הבניין הגבוה ביותר בעולם.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=400', coordinates: { x: 50, y: 40 } },
      { name: 'מסגד שייח׳ זאיד', description: 'יצירת מופת אדריכלית באבו דאבי.', image: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=400', coordinates: { x: 40, y: 60 } }
    ]
  },
  {
    id: 'south-america',
    type: 'destination',
    name: 'דרום אמריקה וברזיל',
    description: 'קצב הסמבה, יערות האמזונס והקרחונים של פטגוניה. יבשת של ניגודים מרהיבים.',
    image: 'https://picsum.photos/seed/brazil/1200/800',
    mapUrl: 'https://picsum.photos/seed/map10/800/600',
    weather: 'משתנה לפי האזור',
    pointsOfInterest: [
      { name: 'ריו דה ז׳נרו', description: 'עיר החופים והסמבה עם פסל ישו הגואל.', image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80&w=400', coordinates: { x: 70, y: 50 } },
      { name: 'בואנוס איירס', description: 'פריז של דרום אמריקה עם תרבות טנגו עשירה.', image: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&q=80&w=400', coordinates: { x: 60, y: 80 } }
    ]
  }
];

export const ships: Ship[] = [
  {
    id: 'ocean-majesty',
    type: 'ship',
    name: 'Ocean Majesty',
    cruiseLine: 'Royal Caribbean',
    description: 'ספינת הדגל של הצי שלנו. פאר מודרני המשלב נוחות מקסימלית עם טכנולוגיה ירוקה.',
    longDescription: 'אושן מג׳סטי היא אחת האוניות המפוארות והמתקדמות ביותר בעולם. היא מציעה חוויה ייחודית המשלבת בין יוקרה קלאסית לחדשנות טכנולוגית. האונייה כוללת מגוון רחב של מסעדות שף, מתחמי ספא מפנקים, ואטרקציות לכל המשפחה. עם דגש על קיימות, האונייה מצוידת במערכות לטיהור מים וניצול אנרגיה סולארית.',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&q=80&w=800'
    ],
    specs: {
      length: '362 מטר',
      speed: '22 קשר',
      capacity: '6,780 נוסעים',
      tonnage: '228,000 טון'
    },
    features: [
      { name: 'בריכת אינסוף', images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800'] },
      { name: 'תיאטרון תלת-ממד', images: ['https://images.unsplash.com/photo-151760444937-f6397edcbbcd?auto=format&fit=crop&q=80&w=800'] },
      { name: 'ספא יוקרתי', images: ['https://images.unsplash.com/photo-1544161515-450ce418465b?auto=format&fit=crop&q=80&w=800'] },
      { name: 'מסעדות שף', images: ['https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800'] },
      { name: 'קזינו מפואר', images: ['https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=800'] },
      { name: 'מועדון ילדים', images: ['https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&q=80&w=800'] }
    ]
  },
  {
    id: 'icon-of-the-seas',
    type: 'ship',
    name: 'Icon of the Seas',
    cruiseLine: 'Royal Caribbean',
    description: 'האונייה הגדולה בעולם. עיר צפה של חוויות, פארקי מים וחדשנות ללא גבולות.',
    longDescription: 'אייקון אוף דה סיז היא לא רק אונייה, היא יעד בפני עצמו. עם פארק המים הגדול ביותר בים, שבע בריכות שחייה ומעל 40 מסעדות וברים, היא מציעה חופשה בלתי נשכחת לכל הגילאים. האונייה מחולקת לשמונה "שכונות" שונות, כל אחת עם אופי וחוויות ייחודיות.',
    image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800'
    ],
    specs: {
      length: '365 מטר',
      speed: '22 קשר',
      capacity: '7,600 נוסעים',
      tonnage: '250,800 טון'
    },
    features: [
      { name: 'פארק מים ענק', images: ['https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=800'] },
      { name: 'אקווה-דום', images: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800'] },
      { name: 'סרף-סייד', images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800'] },
      { name: 'סנטרל פארק', images: ['https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800'] },
      { name: 'מתחם סוויטות', images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800'] },
      { name: 'קזינו', images: ['https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=800'] }
    ]
  },
  {
    id: 'msc-world-europa',
    type: 'ship',
    name: 'MSC World Europa',
    cruiseLine: 'MSC Cruises',
    description: 'עתיד הקרוזים כבר כאן. עיצוב עתידני, הנעה בגז טבעי וחוויות אירופאיות משובחות.',
    longDescription: 'MSC World Europa היא האונייה הראשונה בסדרת ה-World Class של MSC. היא מציעה עיצוב פורץ דרך עם טיילת חיצונית באורך 104 מטרים ומגלשת ה-Venom Drop - המגלשה היבשה הארוכה ביותר בים. האונייה מונעת ב-LNG, מה שהופך אותה לאחת האוניות הנקיות ביותר בעולם.',
    image: 'https://images.unsplash.com/photo-1540759786422-c60d5ecd57d8?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800'
    ],
    specs: {
      length: '333 מטר',
      speed: '21 קשר',
      capacity: '6,762 נוסעים',
      tonnage: '215,863 טון'
    },
    features: [
      { name: 'טיילת עתידנית', images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'] },
      { name: 'מגלשת ענק', images: ['https://images.unsplash.com/photo-1533628635777-112b2239b1c7?auto=format&fit=crop&q=80&w=800'] },
      { name: 'מתחם יאכט קלאב', images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'] },
      { name: 'מסעדות בינלאומיות', images: ['https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800'] },
      { name: 'מופעי תיאטרון', images: ['https://images.unsplash.com/photo-151760444937-f6397edcbbcd?auto=format&fit=crop&q=80&w=800'] },
      { name: 'ספא', images: ['https://images.unsplash.com/photo-1544161515-450ce418465b?auto=format&fit=crop&q=80&w=800'] }
    ]
  },
  {
    id: 'norwegian-prima',
    type: 'ship',
    name: 'Norwegian Prima',
    cruiseLine: 'Norwegian Cruise Line',
    description: 'רמה חדשה של חופש. מרחבים פתוחים, מסלול קארטינג תלת-קומתי ועיצוב מרהיב.',
    longDescription: 'נורוויג׳ן פרימה היא הראשונה מסדרת ה-Prima Class החדשה. היא מציעה את מרחבי הסיפון הפתוחים הגדולים ביותר בים, כולל ה-Ocean Boulevard המקיף את כל האונייה. האונייה כוללת מסלול קארטינג ענק, בריכות אינסוף ומתחם אוכל יוקרתי.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551882547-ff43c59fe4c2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800'
    ],
    specs: {
      length: '294 מטר',
      speed: '22 קשר',
      capacity: '3,100 נוסעים',
      tonnage: '143,535 טון'
    },
    features: [
      { name: 'מסלול קארטינג', images: ['https://images.unsplash.com/photo-1530906358829-ee4b9e9c7b6d?auto=format&fit=crop&q=80&w=800'] },
      { name: 'אושן בולווארד', images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800'] },
      { name: 'בריכות אינסוף', images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'] },
      { name: 'תיאטרון תלת-קומתי', images: ['https://images.unsplash.com/photo-151760444937-f6397edcbbcd?auto=format&fit=crop&q=80&w=800'] },
      { name: 'מתחם ה-Haven', images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800'] },
      { name: 'ספא', images: ['https://images.unsplash.com/photo-1544161515-450ce418465b?auto=format&fit=crop&q=80&w=800'] }
    ]
  },
  {
    id: 'celebrity-beyond',
    type: 'ship',
    name: 'Celebrity Beyond',
    cruiseLine: 'Celebrity Cruises',
    description: 'יוקרה מודרנית במיטבה. עיצוב ע״י מעצבי על, קולינריה משובחת וה-Magic Carpet המפורסם.',
    longDescription: 'סלבריטי ביונד היא האונייה הגדולה והמפוארת ביותר בסדרת ה-Edge. היא מציעה חוויה של יוקרה מודרנית עם דגש על עיצוב, אמנות וקולינריה. האונייה כוללת את ה-Magic Carpet - פלטפורמה צפה המשתנה בהתאם לשעה ביום, ומתחם Retreat אקסקלוסיבי.',
    image: 'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800'
    ],
    specs: {
      length: '327 מטר',
      speed: '22 קשר',
      capacity: '3,260 נוסעים',
      tonnage: '140,600 טון'
    },
    features: [
      { name: 'Magic Carpet', images: ['https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&q=80&w=800'] },
      { name: 'Rooftop Garden', images: ['https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800'] },
      { name: 'מתחם Retreat', images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800'] },
      { name: 'מסעדות שף', images: ['https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800'] },
      { name: 'ספא יוקרתי', images: ['https://images.unsplash.com/photo-1544161515-450ce418465b?auto=format&fit=crop&q=80&w=800'] },
      { name: 'גלריית אמנות', images: ['https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800'] }
    ]
  },
  {
    id: 'arctic-explorer',
    type: 'ship',
    name: 'Arctic Explorer',
    cruiseLine: 'Hurtigruten',
    description: 'ספינת מחקר משוכללת המיועדת להפלגות באזורי הקוטב. עמידה בקרח ומצוידת בציוד תצפית מתקדם.',
    image: 'https://picsum.photos/seed/ship2/1200/800',
    specs: {
      length: '150 מטר',
      speed: '16 קשר',
      capacity: '200 נוסעים',
      tonnage: '12,000 טון'
    },
    features: [
      { name: 'צוללת מחקר', images: ['https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=800'] },
      { name: 'מסוק תצפית', images: ['https://images.unsplash.com/photo-1509130298739-651801c76e96?auto=format&fit=crop&q=80&w=800'] },
      { name: 'מעבדה ימית', images: ['https://images.unsplash.com/photo-1532187863486-abf8581ad7cd?auto=format&fit=crop&q=80&w=800'] },
      { name: 'מרפסות פנורמיות', images: ['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800'] }
    ]
  },
  {
    id: 'golden-yacht',
    type: 'ship',
    name: 'Golden Yacht',
    cruiseLine: 'Scenic Luxury Cruises',
    description: 'חווית בוטיק אקסקלוסיבית. יאכטה פרטית המציעה שירות אישי וגישה לנמלים הקטנים והנסתרים ביותר.',
    image: 'https://picsum.photos/seed/ship3/1200/800',
    specs: {
      length: '110 מטר',
      speed: '18 קשר',
      capacity: '100 נוסעים',
      tonnage: '5,000 טון'
    },
    features: [
      { name: 'שירות באטלר אישי', images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'] },
      { name: 'מרתף יינות', images: ['https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800'] },
      { name: 'סיפון שיזוף פרטי', images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800'] },
      { name: 'ציוד ספורט מים', images: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800'] }
    ]
  },
  {
    id: 'sky-sailor',
    type: 'ship',
    name: 'Sky Sailor',
    cruiseLine: 'Star Clippers',
    description: 'ספינת מפרש מודרנית המשלבת את הקסם של פעם עם הנדסה עתידנית.',
    image: 'https://picsum.photos/seed/ship4/1200/800',
    specs: {
      length: '160 מטר',
      speed: '14 קשר (מפרשים)',
      capacity: '300 נוסעים',
      tonnage: '8,000 טון'
    },
    features: [
      { name: 'מפרשים אוטומטיים', images: ['https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800'] },
      { name: 'סיפון עץ טיק', images: ['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800'] },
      { name: 'ספרייה ימית', images: ['https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800'] },
      { name: 'שיעורי ניווט', images: ['https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800'] }
    ]
  },
  {
    id: 'emerald-star',
    type: 'ship',
    name: 'Emerald Star',
    cruiseLine: 'MSC Cruises',
    description: 'ספינה ידידותית לסביבה המונעת בגז טבעי נוזלי (LNG), המציעה חופשה בת קיימא.',
    image: 'https://picsum.photos/seed/ship5/1200/800',
    specs: {
      length: '330 מטר',
      speed: '21 קשר',
      capacity: '5,200 נוסעים',
      tonnage: '180,000 טון'
    },
    features: [
      { name: 'גינה הידרופונית', images: ['https://images.unsplash.com/photo-1530836361253-efad5cb2fcc2?auto=format&fit=crop&q=80&w=800'] },
      { name: 'מיחזור מים מתקדם', images: ['https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'] },
      { name: 'פאנלים סולאריים', images: ['https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800'] },
      { name: 'אוכל אורגני', images: ['https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800'] }
    ]
  },
  {
    id: 'voyager-pro',
    type: 'ship',
    name: 'Voyager Pro',
    cruiseLine: 'Norwegian Cruise Line',
    description: 'ספינה המיועדת לחובבי הרפתקאות, עם דגש על פעילויות חוץ וספורט אתגרי.',
    image: 'https://picsum.photos/seed/ship6/1200/800',
    specs: {
      length: '290 מטר',
      speed: '24 קשר',
      capacity: '2,500 נוסעים',
      tonnage: '90,000 טון'
    },
    features: [
      { name: 'קיר טיפוס', images: ['https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80&w=800'] },
      { name: 'סימולטור גלישה', images: ['https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=800'] },
      { name: 'מסלול ריצה היקפי', images: ['https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800'] },
      { name: 'מרכז כושר', images: ['https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'] }
    ]
  },
  {
    id: 'royal-pearl',
    type: 'ship',
    name: 'Royal Pearl',
    cruiseLine: 'Cunard Line',
    description: 'הגדרה מחדש של יוקרה קלאסית. עיצוב פנים עשיר בשיש וזהב, ושירות ברמה של 7 כוכבים.',
    image: 'https://picsum.photos/seed/ship7/1200/800',
    specs: {
      length: '270 מטר',
      speed: '20 קשר',
      capacity: '1,200 נוסעים',
      tonnage: '70,000 טון'
    },
    features: [
      { name: 'אולם נשפים', images: ['https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800'] },
      { name: 'קזינו מפואר', images: ['https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=800'] },
      { name: 'תה מנחה מסורתי', images: ['https://images.unsplash.com/photo-1544739313-6fad02872377?auto=format&fit=crop&q=80&w=800'] },
      { name: 'סוויטות מלכותיות', images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800'] }
    ]
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
    features: [
      { name: 'מסעדת גורמה', images: ['https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800'] },
      { name: 'ספריית מוזיקה', images: ['https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800'] },
      { name: 'מרכז בריאות', images: ['https://images.unsplash.com/photo-1544161515-450ce418465b?auto=format&fit=crop&q=80&w=800'] },
      { name: 'סיפון תצפית', images: ['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800'] }
    ]
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
