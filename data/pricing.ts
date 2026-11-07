export interface PricingRow {
  item: string;
  teluguItem?: string;
  rate: string;
  unit: string;
  minOrder?: string;
  recommendedFor?: string;
  category: "flex-boards" | "finishing" | "xerox-cad" | "offset-commercial" | "gifts";
}

export interface CalculatorMaterial {
  id: string;
  name: string;
  teluguName: string;
  ratePerSqFt: number;
  minCharge: number;
  description: string;
  isPopular?: boolean;
}

export interface CalculatorAddon {
  id: string;
  name: string;
  rate: number;
  type: "flat" | "per_sqft";
  description: string;
}

export const CALCULATOR_MATERIALS: CalculatorMaterial[] = [
  {
    id: "star-flex",
    name: "Star Flex Banner (340+ GSM High-Gloss)",
    teluguName: "స్టార్ ఫ్లెక్స్ బ్యానర్ (హై-గ్లాస్)",
    ratePerSqFt: 18,
    minCharge: 100,
    description: "Flagship heavy-duty outdoor flex with UV Japanese ink. Recommended for shop fronts and long-lasting banners.",
    isPopular: true,
  },
  {
    id: "normal-flex",
    name: "Normal Flex Banner (Standard Event Grade)",
    teluguName: "నార్మల్ ఫ్లెక్స్ బ్యానర్ (ఈవెంట్ గ్రేడ్)",
    ratePerSqFt: 12,
    minCharge: 70,
    description: "Economical banner material for temporary announcements, birthday parties, and short-term displays.",
    isPopular: true,
  },
  {
    id: "backlit-flex",
    name: "Backlit Flex (For Lighted Sign Boxes)",
    teluguName: "బ్యాక్‌లిట్ ఫ్లెక్స్ (లైటింగ్ బాక్స్)",
    ratePerSqFt: 35,
    minCharge: 200,
    description: "Engineered for internal lighting glow sign boxes with uniform illumination and translucent vivid colors.",
  },
  {
    id: "arch-flex",
    name: "Arch Flex & Grand Welcome Arches",
    teluguName: "ఆర్చ్ ఫ్లెక్స్ (స్వాగత తోరణాలు)",
    ratePerSqFt: 22,
    minCharge: 800,
    description: "Grand entrance arch banners for road spans, wedding venues, temple festivals, and political rallies.",
  },
  {
    id: "hoarding-flex",
    name: "Hoarding Flex (Highway / Wind Resistant)",
    teluguName: "హోర్డింగ్ ఫ్లెక్స్ (హైవే బిల్ బోర్డ్)",
    ratePerSqFt: 20,
    minCharge: 500,
    description: "Heavy industrial wind-resistant outdoor flex for rooftop and national highway billboards.",
  },
  {
    id: "sunboard",
    name: "Sunboard / PVC Foam Board (3mm / 5mm Rigid)",
    teluguName: "సన్‌బోర్డ్ / పీవీసీ ఫోమ్ బోర్డ్",
    ratePerSqFt: 65,
    minCharge: 150,
    description: "Smooth rigid plastic sheet display for retail wall menus, indoor branding, and clinic boards.",
  },
  {
    id: "vinyl-sticker",
    name: "Vinyl Sticker & Product Labels (Self-Adhesive)",
    teluguName: "వినైల్ స్టిక్కర్ & ప్రొడక్ట్ లేబుల్స్",
    ratePerSqFt: 38,
    minCharge: 120,
    description: "Waterproof adhesive vinyl for product labeling, machine branding, and vehicle decals.",
  },
  {
    id: "one-way-vision",
    name: "One-Way Vision Glass Film (Micro-Perforated)",
    teluguName: "వన్-వే విజన్ గ్లాస్ ఫిల్మ్",
    ratePerSqFt: 65,
    minCharge: 250,
    description: "Micro-perforated film for glass facades: vibrant outward branding while maintaining inward visibility.",
  },
  {
    id: "led-glow-board",
    name: "Complete LED Glow Sign Board (Box + Print)",
    teluguName: "కంప్లీట్ ఎల్ఈడీ గ్లో సైన్ బోర్డ్",
    ratePerSqFt: 220,
    minCharge: 1200,
    description: "Full unit: Steel enclosure + internal IP67 LED modules + waterproof transformer + backlit print.",
  },
];

export const CALCULATOR_ADDONS: CalculatorAddon[] = [
  {
    id: "brass-eyelets",
    name: "Metal Brass Eyelets / Rings (రింగులు)",
    rate: 20,
    type: "flat",
    description: "Heavy-duty brass rings punched around corners and borders for easy rope tying.",
  },
  {
    id: "wooden-beeding",
    name: "Wooden Beeding Border (కొయ్య బీడింగ్)",
    rate: 6,
    type: "per_sqft",
    description: "Solid wooden strip support framing along banner borders for rigidity.",
  },
  {
    id: "ms-iron-frame",
    name: "MS Iron Square Pipe Frame (ఐరన్ ఫ్రేమ్ వెల్డింగ్)",
    rate: 35,
    type: "per_sqft",
    description: "Welded heavy mild-steel rectangular pipe structure with anti-rust primer.",
  },
  {
    id: "gloss-matte-lamination",
    name: "Protective Gloss / Matte Lamination",
    rate: 10,
    type: "per_sqft",
    description: "Protective film that guards against scratches, direct water, and scuffing.",
  },
];

export const POPULAR_SIZE_PRESETS = [
  { name: "Event Banner", width: 6, height: 4, purpose: "Birthdays & Local Events" },
  { name: "Shop Fascia", width: 8, height: 3, purpose: "Shopfront Sign Board" },
  { name: "Hoarding / Arch", width: 10, height: 5, purpose: "Medium Roadside Display" },
  { name: "Stage Backdrop", width: 12, height: 8, purpose: "Stage & Convention Banner" },
  { name: "Grand Welcome Arch", width: 20, height: 10, purpose: "Road Span & Wedding Arch" },
];

export const ALL_PRICING_TABLES: Record<string, { title: string; rows: PricingRow[] }> = {
  flexBoards: {
    title: "A. Flex, Boards & Signage Rates",
    rows: [
      { item: "Star Flex Banner (High-Gloss 340+ GSM)", teluguItem: "స్టార్ ఫ్లెక్స్ బ్యానర్", rate: "₹18", unit: "per sq. ft.", minOrder: "₹100", recommendedFor: "Shop fronts, wedding flex, political banners", category: "flex-boards" },
      { item: "Normal Flex Banner (Standard Event Grade)", teluguItem: "నార్మల్ ఫ్లెక్స్ బ్యానర్", rate: "₹12", unit: "per sq. ft.", minOrder: "₹70", recommendedFor: "Short-term announcements, temporary notices", category: "flex-boards" },
      { item: "Backlit Flex (For Lighted Sign Boxes)", teluguItem: "బ్యాక్‌లిట్ ఫ్లెక్స్", rate: "₹35", unit: "per sq. ft.", minOrder: "₹200", recommendedFor: "Internal lighted glow boxes", category: "flex-boards" },
      { item: "Arch Flex & Grand Welcome Arches", teluguItem: "ఆర్చ్ ఫ్లెక్స్ (తోరణాలు)", rate: "₹22", unit: "per sq. ft.", minOrder: "₹800", recommendedFor: "Road spans, wedding gate arches", category: "flex-boards" },
      { item: "Hoarding Flex (Highway / Wind Resistant)", teluguItem: "హోర్డింగ్ ఫ్లెక్స్", rate: "₹20", unit: "per sq. ft.", minOrder: "₹500", recommendedFor: "Highways & commercial billboard structures", category: "flex-boards" },
      { item: "Sunboard & PVC Foam Board (3mm / 5mm Rigid)", teluguItem: "సన్‌బోర్డ్ / పీవీసీ బోర్డ్", rate: "₹65", unit: "per sq. ft.", minOrder: "₹150", recommendedFor: "Indoor retail displays, menu boards, clinic signs", category: "flex-boards" },
      { item: "Vinyl Sticker & Product Labels (Self-Adhesive)", teluguItem: "వినైల్ స్టిక్కర్ లేబుల్స్", rate: "₹38", unit: "per sq. ft.", minOrder: "₹120", recommendedFor: "Waterproof branding, product stickers", category: "flex-boards" },
      { item: "One-Way Vision Glass Film", teluguItem: "వన్-వే విజన్ గ్లాస్ ఫిల్మ్", rate: "₹65", unit: "per sq. ft.", minOrder: "₹250", recommendedFor: "Storefront glass facade branding", category: "flex-boards" },
      { item: "Complete LED Glow Sign Board (Full Box)", teluguItem: "కంప్లీట్ ఎల్ఈడీ గ్లో బోర్డ్", rate: "₹220", unit: "per sq. ft.", minOrder: "₹1,200", recommendedFor: "Steel box + waterproof LED + backlit flex", category: "flex-boards" },
      { item: "3D Acrylic LED Channel Letters", teluguItem: "3D అక్రిలిక్ ఎల్ఈడీ లెటర్స్", rate: "₹45", unit: "per inch height / letter", minOrder: "₹1,500", recommendedFor: "Elite architectural front-lit / halo signages", category: "flex-boards" },
    ],
  },
  finishing: {
    title: "B. Finishing & Add-on Charges",
    rows: [
      { item: "Metal Brass Eyelets / Rings (రింగులు వేయడం)", rate: "₹20", unit: "flat per banner", recommendedFor: "Strong rope tying for outdoor flex", category: "finishing" },
      { item: "Wooden Beeding Border (కొయ్య బీడింగ్)", rate: "₹6", unit: "per sq. ft.", recommendedFor: "Rigid perimeter support for event banners", category: "finishing" },
      { item: "Heavy MS Iron Square Pipe Frame (ఐరన్ ఫ్రేమ్ వెల్డింగ్)", rate: "₹35", unit: "per sq. ft.", recommendedFor: "Permanent outdoor welded shop board frame", category: "finishing" },
      { item: "Protective Gloss / Matte Lamination", rate: "₹10", unit: "per sq. ft.", recommendedFor: "Scratch & water protection for posters/layouts", category: "finishing" },
      { item: "Rigid Foam Board Mounting", rate: "₹45", unit: "per sq. ft.", recommendedFor: "Self-standing wall display mounting", category: "finishing" },
      { item: "Magic Heat Reveal Mug Upgrade", rate: "₹90", unit: "per piece", recommendedFor: "Photo appears on pouring hot tea/coffee", category: "finishing" },
    ],
  },
  xeroxCad: {
    title: "C. Jumbo Xerox & CAD Engineering Rates",
    rows: [
      { item: "A0 Colour Plan / Village Map (841 × 1189 mm)", rate: "₹220", unit: "per sheet", recommendedFor: "Full-scale master layout & elevation drawings", category: "xerox-cad" },
      { item: "A0 Black & White Plan / Jumbo Xerox", rate: "₹90", unit: "per sheet", recommendedFor: "High-speed construction site structural drawings", category: "xerox-cad" },
      { item: "A1 Colour Engineering Drawing (594 × 841 mm)", rate: "₹140", unit: "per sheet", recommendedFor: "Architectural & MEP electrical schematics", category: "xerox-cad" },
      { item: "A1 Black & White Architectural Plan", rate: "₹60", unit: "per sheet", recommendedFor: "Standard municipal submission drawings", category: "xerox-cad" },
      { item: "A2 Colour Layout Plan (420 × 594 mm)", rate: "₹90", unit: "per sheet", recommendedFor: "Real estate layouts & floor designs", category: "xerox-cad" },
      { item: "A2 Black & White Plan", rate: "₹40", unit: "per sheet", recommendedFor: "Working detail sheets & section cuts", category: "xerox-cad" },
      { item: "A3 High-Speed Colour Xerox", rate: "₹25", unit: "per sheet", recommendedFor: "Project reports, proposals & presentation sheets", category: "xerox-cad" },
      { item: "A0 Tracing Paper / Drafting Cloth Plot", rate: "₹320", unit: "per sheet", recommendedFor: "Gateway tracing paper & permanent cloth sanction", category: "xerox-cad" },
      { item: "Large Document Scanning to PDF (A0 / A1)", rate: "₹80", unit: "per document", recommendedFor: "600 DPI optical scanning of old maps & deeds", category: "xerox-cad" },
    ],
  },
  offsetCommercial: {
    title: "D. Commercial Offset Stationery & Publicity",
    rows: [
      { item: "Visiting Cards (1000 Cards - Normal Matte Finish)", rate: "₹750", unit: "per 1000 cards", recommendedFor: "Everyday business introduction cards", category: "offset-commercial" },
      { item: "Visiting Cards (1000 Cards - 350 GSM Gloss)", rate: "₹950", unit: "per 1000 cards", recommendedFor: "Durable high-gloss finish business cards", category: "offset-commercial" },
      { item: "Visiting Cards (1000 Cards - 350 GSM Velvet + Spot UV)", rate: "₹1,650", unit: "per 1000 cards", recommendedFor: "Premium luxury soft touch with raised gloss", category: "offset-commercial" },
      { item: "Carbonless NCR Bill Books (Duplicate 1+1 - 5 Books)", rate: "₹850", unit: "5 books pack", recommendedFor: "50 sets/book, custom serial numbering & GST", category: "offset-commercial" },
      { item: "Carbonless NCR Bill Books (Duplicate 1+1 - 10 Books)", rate: "₹1,550", unit: "10 books wholesale", recommendedFor: "Wholesale retail tax invoices with duplicates", category: "offset-commercial" },
      { item: "Carbonless NCR Bill Books (Triplicate 1+2 - 5 Books)", rate: "₹1,250", unit: "5 books pack", recommendedFor: "Triplicate copies for office, customer & accounting", category: "offset-commercial" },
      { item: "Multi-Colour Pamphlets (A5 Single Side - 1000 Copies)", rate: "₹950", unit: "1000 copies", recommendedFor: "Local retail shop announcements & flyer drops", category: "offset-commercial" },
      { item: "Multi-Colour Pamphlets (A5 Double Side - 1000 Copies)", rate: "₹1,650", unit: "1000 copies", recommendedFor: "Product catalogs & school admission flyers", category: "offset-commercial" },
      { item: "Newspaper Insert Pamphlets Bulk (5000 Copies)", rate: "₹3,800", unit: "5000 copies pack", recommendedFor: "Mass town-wide newspaper distribution", category: "offset-commercial" },
      { item: "Single Auto Rickshaw (Front Hood + Rear Board)", rate: "₹450", unit: "per auto", recommendedFor: "Local city publicity across Kadapa gallis", category: "offset-commercial" },
      { item: "5 Autos Fleet Branding Campaign Package", rate: "₹2,100", unit: "5 autos package", recommendedFor: "Targeted movie / admission / hospital campaigns", category: "offset-commercial" },
      { item: "10 Autos Mega Campaign Package", rate: "₹3,900", unit: "10 autos package", recommendedFor: "Comprehensive high-impact town coverage", category: "offset-commercial" },
    ],
  },
  gifts: {
    title: "E. Personalized Gifts Rate Card",
    rows: [
      { item: "Plain Sparkling White Ceramic Mug (AAA Grade)", rate: "₹350", unit: "per piece", recommendedFor: "Includes protective gift box. Ready in 1–2 hours", category: "gifts" },
      { item: "Inner Colour Coffee Mug (Red/Blue/Black/Yellow)", rate: "₹450", unit: "per piece", recommendedFor: "Vibrant interior color ceramic coffee mug", category: "gifts" },
      { item: "Heart Handle Couple Coffee Mug", rate: "₹500", unit: "per piece", recommendedFor: "Sculpted romantic heart handle for couples", category: "gifts" },
      { item: "Magic Heat Reveal Photo Mug", rate: "₹550", unit: "per piece", recommendedFor: "Black when cold, reveals photo on hot liquid", category: "gifts" },
      { item: "Custom Photo T-Shirt (Sublimation Round Neck)", rate: "₹300", unit: "per piece (S, M, L)", recommendedFor: "Dry-fit sports fabric, vibrant color prints", category: "gifts" },
      { item: "Custom Photo T-Shirt (DTF Print - 100% Washproof)", rate: "₹400", unit: "per piece (S, M, L)", recommendedFor: "Combed cotton, lifetime washproof finish", category: "gifts" },
      { item: "Desktop Photo Stand Frame (6 × 8 inches)", rate: "₹250", unit: "per frame", recommendedFor: "Includes fold-out desktop easel & wall hook", category: "gifts" },
      { item: "Classic Wall Photo Frame (8 × 12 inches / A4)", rate: "₹350", unit: "per frame", recommendedFor: "Synthetic wooden molding with crystal clear face", category: "gifts" },
      { item: "Family Collage Wall Frame (12 × 18 inches)", rate: "₹650", unit: "per frame", recommendedFor: "Fits 4 to 8 family photographs", category: "gifts" },
      { item: "Ambient LED Glow Backlit Wall Frame (12 × 18 in)", rate: "₹1,250", unit: "per frame", recommendedFor: "Internal warm night light glow with power adapter", category: "gifts" },
      { item: "Standard Heart or Square Photo Pillow", rate: "₹450", unit: "per pillow", recommendedFor: "Hypoallergenic microfiber stuffed cushion", category: "gifts" },
      { item: "Magic Reversible Sequins Pillow (Swipe to reveal)", rate: "₹800", unit: "per pillow", recommendedFor: "Shiny sequins swipe to reveal hidden photo", category: "gifts" },
      { item: "Structured Cap with DTF Logo / Photo Print", rate: "₹300", unit: "per cap", recommendedFor: "Baseball trucker caps in Black, White, Red, Navy", category: "gifts" },
    ],
  },
};
