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
    id: 'ocean-majesty',
    type: 'ship',
    name: 'Ocean Majesty',
    cruiseLine: 'Royal Caribbean',
    description: 'ספינת הדגל של הצי שלנו. פאר מודרני המשלב נוחות מקסימלית עם טכנולוגיה ירוקה.',
    image: 'https://picsum.photos/seed/ship1/1200/800',
    specs: {
      length: '362 מטר',
      speed: '22 קשר',
      capacity: '6,780 נוסעים',
      tonnage: '228,000 טון'
    },
    features: ['בריכת אינסוף', 'תיאטרון תלת-ממד', 'ספא יוקרתי', 'מסעדות שף']
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
    features: ['צוללת מחקר', 'מסוק תצפית', 'מעבדה ימית', 'מרפסות פנורמיות']
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
    features: ['שירות באטלר אישי', 'מרתף יינות', 'סיפון שיזוף פרטי', 'ציוד ספורט מים']
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
    features: ['מפרשים אוטומטיים', 'סיפון עץ טיק', 'ספרייה ימית', 'שיעורי ניווט']
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
    features: ['גינה הידרופונית', 'מיחזור מים מתקדם', 'פאנלים סולאריים', 'אוכל אורגני']
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
    features: ['קיר טיפוס', 'סימולטור גלישה', 'מסלול ריצה היקפי', 'מרכז כושר']
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
    features: ['אולם נשפים', 'קזינו מפואר', 'תה מנחה מסורתי', 'סוויטות מלכותיות']
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
