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
    title: "E. Personalized Gifts & Framing Official Rate Card",
    rows: [
      // 1. Photo Frames (Official Flyer Rate Card)
      { item: "Custom Photo Frame (A4 / 8 × 12 inches)", teluguItem: "కస్టమ్ ఫోటో ఫ్రేమ్ A4 (8x12)", rate: "₹600", unit: "per frame", recommendedFor: "Glossy or Matty Sheet finish. Flat 10% off with IG follow", category: "gifts" },
      { item: "Custom Photo Frame (12 × 18 inches)", teluguItem: "కస్టమ్ ఫోటో ఫ్రేమ్ (12x18)", rate: "₹1,200", unit: "per frame", recommendedFor: "Standard wall portrait. Glossy/Matty sheet included", category: "gifts" },
      { item: "Custom Photo Frame (16 × 24 inches)", teluguItem: "కస్టమ్ ఫోటో ఫ్రేమ్ (16x24)", rate: "₹2,000", unit: "per frame", recommendedFor: "Medium wall frame for couple/family portraits", category: "gifts" },
      { item: "Custom Photo Frame (18 × 24 inches)", teluguItem: "కస్టమ్ ఫోటో ఫ్రేమ్ (18x24)", rate: "₹2,300", unit: "per frame", recommendedFor: "Grand wall showcase framing with sturdy back support", category: "gifts" },
      { item: "Custom Photo Frame (12 × 36 inches Panorama)", teluguItem: "కస్టమ్ ఫోటో ఫ్రేమ్ (12x36)", rate: "₹3,000", unit: "per frame", recommendedFor: "Panoramic wide family collage & milestone montage", category: "gifts" },
      { item: "Custom Photo Frame (24 × 36 inches Mega Wall)", teluguItem: "కస్టమ్ ఫోటో ఫ్రేమ్ (24x36)", rate: "₹4,500", unit: "per frame", recommendedFor: "Living room mega centerpiece wall portrait", category: "gifts" },
      { item: "Glitter Sheet Finish Upgrade (Photo Frames)", teluguItem: "గ్లిట్టర్ షీట్ ఫినిష్", rate: "+₹50", unit: "extra per frame", recommendedFor: "Sparkling & eye-catching luxury finish (₹50 extra only)", category: "gifts" },
      { item: "Instagram Special: Flat 10% Off Photo Frames", teluguItem: "ఇన్‌స్టాగ్రామ్ ఫాలోవర్స్ 10% డిస్కౌంట్", rate: "10% OFF", unit: "special discount", recommendedFor: "Follow @citygrafix1 on Instagram to claim instant 10% off", category: "gifts" },

      // 2. Custom Photo Mugs (Official Flyer Rate Card)
      { item: "Plain Ceramic Photo Cup (White AAA Grade)", teluguItem: "ప్లెయిన్ వైట్ సిరామిక్ కప్", rate: "₹350", unit: "per cup", recommendedFor: "High-gloss crisp sublimation print. Ready in 1–2 hours", category: "gifts" },
      { item: "Inner Colour Ceramic Coffee Cup", teluguItem: "ఇన్నర్ కలర్ కాఫీ కప్", rate: "₹450", unit: "per cup", recommendedFor: "White exterior with vibrant red/blue/black/yellow interior", category: "gifts" },
      { item: "Heart Handle Couple Coffee Cup", teluguItem: "హార్ట్ హ్యాండిల్ కపుల్ కప్", rate: "₹500", unit: "per cup", recommendedFor: "Romantic sculpted red heart handle for anniversaries", category: "gifts" },
      { item: "Magic Heat Reveal Photo Mug", teluguItem: "మ్యాజిక్ హీట్ రివీల్ కప్", rate: "₹550", unit: "per cup", recommendedFor: "Pitch black when cool; hot beverage magically reveals photo", category: "gifts" },
      { item: "Gift Wrapping Service (Mugs & Pillows)", teluguItem: "గిఫ్ట్ ప్యాకింగ్ సర్వీస్", rate: "+₹50", unit: "extra per gift", recommendedFor: "Decorative festive box packaging with satin ribbon", category: "gifts" },

      // 3. Beautiful Photo Pillows (Official Flyer Rate Card)
      { item: "Heart or Square Personalized Photo Pillow", teluguItem: "హార్ట్ లేదా స్క్వేర్ ఫోటో పిల్లో", rate: "₹500", unit: "per pillow", recommendedFor: "Plush soft red fur cushion with custom photo print", category: "gifts" },
      { item: "Heart or Square Fancy Photo Pillow", teluguItem: "హార్ట్ లేదా స్క్వేర్ ఫ్యాన్సీ పిల్లో", rate: "₹600", unit: "per pillow", recommendedFor: "Rose petal texture / satin ruffled luxury border", category: "gifts" },
      { item: "Heart or Square Magic Sequins Pillow", teluguItem: "మ్యాజిక్ సీక్విన్స్ పిల్లో", rate: "₹750", unit: "per pillow", recommendedFor: "Reversible two-way sequins swipe to reveal hidden photo", category: "gifts" },
      { item: "Heart or Square Glowing L.E.D. Pillow", teluguItem: "ఎల్ఈడీ గ్లోయింగ్ ఫోటో పిల్లో", rate: "₹800", unit: "per pillow", recommendedFor: "Built-in multi-color glowing fairy LED lights with switch", category: "gifts" },

      // 4. Custom T-Shirts & DTF Printing (Official Flyer Rate Card)
      { item: "DTF Heat Print Only (Customer's Own T-Shirt)", teluguItem: "డీటీఎఫ్ హీట్ ప్రింట్ ఓన్లీ", rate: "₹200", unit: "each print", recommendedFor: "Bring your own T-shirt or fabric; 100% washproof DTF print", category: "gifts" },
      { item: "Sublimation Without Collar T-Shirt (S, M, L)", teluguItem: "సబ్లిమేషన్ రౌండ్ నెక్ టీ-షర్ట్", rate: "₹400", unit: "per t-shirt", recommendedFor: "Dry-fit sports fabric, vibrant multi-color full prints", category: "gifts" },
      { item: "DTF Print + Without Collar T-Shirt (S, M, L)", teluguItem: "డీటీఎఫ్ రౌండ్ నెక్ టీ-షర్ట్", rate: "₹400", unit: "per t-shirt", recommendedFor: "Combed cotton round neck with 100% washproof DTF print", category: "gifts" },
      { item: "DTF Print + Collar Polo T-Shirt (S, M, L)", teluguItem: "డీటీఎఫ్ కాలర్ పోలో టీ-షర్ట్", rate: "₹500", unit: "per t-shirt", recommendedFor: "Executive collar polo with chest/back high-density DTF logo", category: "gifts" },
      { item: "Custom Cap + DTF Print", teluguItem: "కస్టమ్ క్యాప్ + ప్రింట్", rate: "₹300", unit: "per cap", recommendedFor: "Structured trucker / baseball cap with custom logo or photo", category: "gifts" },
      { item: "T-Shirt Size Add-on: XL & XXL", teluguItem: "XL & XXL సైజుల చార్జీ", rate: "+₹50", unit: "extra per t-shirt", recommendedFor: "Applies to all collar and round neck T-shirt models", category: "gifts" },
      { item: "T-Shirt Size Add-on: XXXL & Jumbo", teluguItem: "XXXL & జంబో సైజుల చార్జీ", rate: "+₹100", unit: "extra per t-shirt", recommendedFor: "Applies to all collar and round neck T-shirt models", category: "gifts" },
    ],
  },
};
