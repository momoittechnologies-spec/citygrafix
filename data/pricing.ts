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
  photoFrames: {
    title: "A. Custom Wall Photo Frames (A4 to 24×36)",
    rows: [
      { item: "Custom Photo Frame (A4 / 8 × 12 inches)", teluguItem: "కస్టమ్ ఫోటో ఫ్రేమ్ A4 (8x12)", rate: "₹600", unit: "per frame", minOrder: "1 frame", recommendedFor: "Glossy or Matty Sheet finish. Flat 10% off with IG follow", category: "gifts" },
      { item: "Custom Photo Frame (12 × 18 inches)", teluguItem: "కస్టమ్ ఫోటో ఫ్రేమ్ (12x18)", rate: "₹1,200", unit: "per frame", minOrder: "1 frame", recommendedFor: "Standard wall portrait. Glossy/Matty sheet included", category: "gifts" },
      { item: "Custom Photo Frame (16 × 24 inches)", teluguItem: "కస్టమ్ ఫోటో ఫ్రేమ్ (16x24)", rate: "₹2,000", unit: "per frame", minOrder: "1 frame", recommendedFor: "Medium wall frame for couple/family portraits", category: "gifts" },
      { item: "Custom Photo Frame (18 × 24 inches)", teluguItem: "కస్టమ్ ఫోటో ఫ్రేమ్ (18x24)", rate: "₹2,300", unit: "per frame", minOrder: "1 frame", recommendedFor: "Grand wall showcase framing with sturdy back support", category: "gifts" },
      { item: "Custom Photo Frame (12 × 36 inches Panorama)", teluguItem: "కస్టమ్ ఫోటో ఫ్రేమ్ (12x36)", rate: "₹3,000", unit: "per frame", minOrder: "1 frame", recommendedFor: "Panoramic wide family collage & milestone montage", category: "gifts" },
      { item: "Custom Photo Frame (24 × 36 inches Mega Wall)", teluguItem: "కస్టమ్ ఫోటో ఫ్రేమ్ (24x36)", rate: "₹4,500", unit: "per frame", minOrder: "1 frame", recommendedFor: "Living room mega centerpiece wall portrait", category: "gifts" },
      { item: "Glitter Sheet Finish Upgrade (Photo Frames)", teluguItem: "గ్లిట్టర్ షీట్ ఫినిష్", rate: "+₹50", unit: "extra per frame", minOrder: "Optional", recommendedFor: "Sparkling & eye-catching luxury finish (₹50 extra only)", category: "gifts" },
      { item: "Instagram Special: Flat 10% Off Photo Frames", teluguItem: "ఇన్‌స్టాగ్రామ్ ఫాలోవర్స్ 10% డిస్కౌంట్", rate: "10% OFF", unit: "special discount", minOrder: "All sizes", recommendedFor: "Follow @citygrafix1 on Instagram to claim instant 10% off", category: "gifts" },
    ],
  },
  ceramicMugs: {
    title: "B. Ceramic, Inner Colour & Magic Heat Reveal Mugs",
    rows: [
      { item: "Plain Ceramic Photo Cup (White AAA Grade)", teluguItem: "ప్లెయిన్ వైట్ సిరామిక్ కప్", rate: "₹350", unit: "per cup", minOrder: "1 piece", recommendedFor: "High-gloss crisp sublimation print. Ready in 1–2 hours", category: "gifts" },
      { item: "Inner Colour Ceramic Coffee Cup (9 Colours)", teluguItem: "ఇన్నర్ కలర్ కాఫీ కప్", rate: "₹450", unit: "per cup", minOrder: "1 piece", recommendedFor: "White exterior with vibrant red/blue/black/yellow/green/pink interior", category: "gifts" },
      { item: "Heart Handle Couple Coffee Cup (Multi-Colour)", teluguItem: "హార్ట్ హ్యాండిల్ కపుల్ కప్", rate: "₹500", unit: "per cup", minOrder: "1 piece", recommendedFor: "Romantic sculpted red/black/blue/yellow heart handle for anniversaries", category: "gifts" },
      { item: "Magic Heat Reveal Photo Mug (Thermosensitive)", teluguItem: "మ్యాజిక్ హీట్ రివీల్ కప్", rate: "₹550", unit: "per cup", minOrder: "1 piece", recommendedFor: "Pitch black when cold; hot beverage magically reveals full HD photo", category: "gifts" },
      { item: "Gift Wrapping Service (Mugs & Pillows)", teluguItem: "గిఫ్ట్ ప్యాకింగ్ సర్వీస్", rate: "+₹50", unit: "extra per gift", minOrder: "Optional", recommendedFor: "Decorative festive box packaging with satin ribbon", category: "gifts" },
    ],
  },
  roundBadges: {
    title: "C. Custom Round Badges (Pin & Magnetic Clasps)",
    rows: [
      { item: "Round Pin Badge (44 mm / 4.4 cm)", teluguItem: "రౌండ్ పిన్ బ్యాడ్జ్ (44mm)", rate: "₹25", unit: "per badge", minOrder: "1 piece", recommendedFor: "Schools, colleges, election campaigns, and bulk event identification", category: "gifts" },
      { item: "Round Pin Badge (58 mm / 5.8 cm)", teluguItem: "రౌండ్ పిన్ బ్యాడ్జ్ (58mm)", rate: "₹30", unit: "per badge", minOrder: "1 piece", recommendedFor: "Standard round badge size for brands, clubs, studios & conferences", category: "gifts" },
      { item: "Round Magnetic Badge (44 mm / 4.4 cm)", teluguItem: "రౌండ్ మాగ్నెటిక్ బ్యాడ్జ్ (44mm)", rate: "₹55", unit: "per badge", minOrder: "1 piece", recommendedFor: "No pin piercing; powerful dual neodymium magnet clasp for fine fabrics", category: "gifts" },
      { item: "Round Magnetic Badge (58 mm / 5.8 cm)", teluguItem: "రౌండ్ మాగ్నెటిక్ బ్యాడ్జ్ (58mm)", rate: "₹65", unit: "per badge", minOrder: "1 piece", recommendedFor: "Executive office uniforms, hospital staff, doctors & VIP delegates", category: "gifts" },
    ],
  },
  photoPillows: {
    title: "D. Beautiful Photo Pillows & Cushions",
    rows: [
      { item: "Heart or Square Personalized Photo Pillow", teluguItem: "హార్ట్ లేదా స్క్వేర్ ఫోటో పిల్లో", rate: "₹500", unit: "per pillow", minOrder: "1 piece", recommendedFor: "Plush soft red fur cushion with custom photo print", category: "gifts" },
      { item: "Heart or Square Fancy Photo Pillow", teluguItem: "హార్ట్ లేదా స్క్వేర్ ఫ్యాన్సీ పిల్లో", rate: "₹600", unit: "per pillow", minOrder: "1 piece", recommendedFor: "Rose petal texture / satin ruffled luxury border", category: "gifts" },
      { item: "Heart or Square Magic Sequins Pillow", teluguItem: "మ్యాజిక్ సీక్విన్స్ పిల్లో", rate: "₹750", unit: "per pillow", minOrder: "1 piece", recommendedFor: "Reversible two-way sequins swipe to reveal hidden photo", category: "gifts" },
      { item: "Heart or Square Glowing L.E.D. Pillow", teluguItem: "ఎల్ఈడీ గ్లోయింగ్ ఫోటో పిల్లో", rate: "₹800", unit: "per pillow", minOrder: "1 piece", recommendedFor: "Built-in multi-color glowing fairy LED lights with switch", category: "gifts" },
    ],
  },
  customApparel: {
    title: "E. Custom DTF T-Shirts & Caps",
    rows: [
      { item: "DTF Heat Print Only (Customer's Own T-Shirt)", teluguItem: "డీటీఎఫ్ హీట్ ప్రింట్ ఓన్లీ", rate: "₹200", unit: "each print", minOrder: "1 piece", recommendedFor: "Bring your own T-shirt or fabric; 100% washproof DTF print", category: "gifts" },
      { item: "Sublimation Without Collar T-Shirt (S, M, L)", teluguItem: "సబ్లిమేషన్ రౌండ్ నెక్ టీ-షర్ట్", rate: "₹400", unit: "per t-shirt", minOrder: "1 piece", recommendedFor: "Dry-fit sports fabric, vibrant multi-color full prints", category: "gifts" },
      { item: "DTF Print + Without Collar T-Shirt (S, M, L)", teluguItem: "డీటీఎఫ్ రౌండ్ నెక్ టీ-షర్ట్", rate: "₹400", unit: "per t-shirt", minOrder: "1 piece", recommendedFor: "Combed cotton round neck with 100% washproof DTF print", category: "gifts" },
      { item: "DTF Print + Collar Polo T-Shirt (S, M, L)", teluguItem: "డీటీఎఫ్ కాలర్ పోలో టీ-షర్ట్", rate: "₹500", unit: "per t-shirt", minOrder: "1 piece", recommendedFor: "Executive collar polo with chest/back high-density DTF logo", category: "gifts" },
      { item: "Custom Cap + DTF Print", teluguItem: "కస్టమ్ క్యాప్ + ప్రింట్", rate: "₹300", unit: "per cap", minOrder: "1 piece", recommendedFor: "Structured trucker / baseball cap with custom logo or photo", category: "gifts" },
      { item: "T-Shirt Size Add-on: XL & XXL", teluguItem: "XL & XXL సైజుల చార్జీ", rate: "+₹50", unit: "extra per t-shirt", minOrder: "Apparel add-on", recommendedFor: "Applies to all collar and round neck T-shirt models", category: "gifts" },
      { item: "T-Shirt Size Add-on: XXXL & Jumbo", teluguItem: "XXXL & జంబో సైజుల చార్జీ", rate: "+₹100", unit: "extra per t-shirt", minOrder: "Apparel add-on", recommendedFor: "Applies to all collar and round neck T-shirt models", category: "gifts" },
    ],
  },
};
