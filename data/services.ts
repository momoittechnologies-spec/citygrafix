export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  teluguTitle: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  fullDescription: string;
  targetAudience: string[];
  specs: string[];
  turnaround: string;
  startingPrice: string;
  pricingDetails: string;
  supportedSizes: string[];
  image: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
  whatsappMessage: string;
  recommendedLine: "orders" | "signage" | "reception";
  isFeatured?: boolean;
  galleryImages?: string[];
}

export interface ServiceCategory {
  id: string;
  slug: string;
  title: string;
  teluguTitle: string;
  description: string;
  iconName: string;
  image: string;
  keyServices: string[];
  turnaroundSummary: string;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "jumbo-xerox-cad",
    slug: "jumbo-xerox-cad",
    title: "Jumbo Xerox & CAD Printing",
    teluguTitle: "జంబో జిరాక్స్ & ఇంజనీరింగ్ ప్లాన్స్",
    description: "High-speed large-format A0, A1, A2, A3, and A4 color and black & white plotting, scanning, tracing paper, and village map printing.",
    iconName: "FileSpreadsheet",
    image: "/images/cad-blueprint-plotter.jpg",
    keyServices: [
      "A0 to A4 Colour & B/W Xerox",
      "AutoCAD Engineering Blueprints",
      "Municipal Layouts & Village Maps",
      "Tracing Paper & Drafting Cloth",
      "600 DPI Large Format Scanning",
    ],
    turnaroundSummary: "15 to 30 Minutes (Instant while-you-wait)",
  },
  {
    id: "flex-outdoor-advertising",
    slug: "flex-outdoor-advertising",
    title: "Flex Printing & Outdoor Advertising",
    teluguTitle: "ఫ్లెక్స్ ప్రింటింగ్ & ఔట్‌డోర్ ప్రచారం",
    description: "Heavy-duty 340+ GSM Star Flex, Frontlit & Backlit flex, grand entrance arches, roadside hoardings, and highway billboards.",
    iconName: "Layers",
    image: "/images/flex-printing-machine.jpg",
    keyServices: [
      "Star Flex (340+ GSM High-Gloss)",
      "Standard Event Flex Banners",
      "Backlit Flex for Glow Boxes",
      "Grand Welcome Arches (తోరణాలు)",
      "Highway Hoardings & Mega Spans",
    ],
    turnaroundSummary: "Same-Day (2 to 4 Hours express)",
  },
  {
    id: "3d-led-signage",
    slug: "3d-led-signage",
    title: "Architectural 3D Signage & LED Boards",
    teluguTitle: "3D అక్రిలిక్ ఎల్ఈడీ బోర్డ్స్ & సైనేజ్",
    description: "Laser-cut 3D acrylic channel letters, halo backlit signage, Samsung/Osram IP67 waterproof LED modules, and anti-rust MS frameworks.",
    iconName: "Sparkles",
    image: "/images/3d-led-signage-storefront.jpg",
    keyServices: [
      "3D Acrylic LED Channel Letters",
      "Front-Lit & Halo Backlit Letters",
      "Complete LED Glow Sign Boards",
      "Waterproof IP67 LED Power Supply",
      "48-Hour Continuous Electrical Testing",
    ],
    turnaroundSummary: "2 to 4 Days (Includes 48-hr burn-in test)",
  },
  {
    id: "personalized-gifts",
    slug: "personalized-gifts",
    title: "Personalized Gifts Studio",
    teluguTitle: "పర్సనలైజ్డ్ గిఫ్ట్స్ & సబ్లిమేషన్",
    description: "Custom photo mugs, magic reveal mugs, dry-fit and combed cotton photo T-shirts, synthetic wooden photo frames, and LED glow pillows.",
    iconName: "Gift",
    image: "/images/personalized-gifts-collection.jpg",
    keyServices: [
      "Ceramic Coffee Mugs (White & Magic Reveal)",
      "Custom Photo T-Shirts (Sublimation & DTF)",
      "Synthetic Wooden Photo Frames & Collages",
      "Ambient LED Glow Backlit Wall Art",
      "Heart & Square Microfiber Photo Pillows",
    ],
    turnaroundSummary: "1 to 2 Hours (Ready for same-day gifting)",
  },
  {
    id: "stickers-boards-commercial",
    slug: "stickers-boards-commercial",
    title: "Stickers, Boards & Commercial Offset",
    teluguTitle: "స్టిక్కర్లు, బోర్డులు & కమర్షియల్ ప్రింటింగ్",
    description: "Vinyl stickers, Sunboard rigid displays, one-way vision glass films, 350 GSM visiting cards, NCR carbonless bill books, and pamphlets.",
    iconName: "Printer",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1200&q=80",
    keyServices: [
      "Waterproof Vinyl Stickers & Decals",
      "3mm & 5mm Sunboard / PVC Displays",
      "One-Way Vision Glass Facades",
      "350 GSM Velvet Spot UV Visiting Cards",
      "Duplicate & Triplicate NCR Bill Books",
    ],
    turnaroundSummary: "24 to 48 Hours",
  },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "jumbo-xerox-kadapa",
    slug: "jumbo-xerox-kadapa",
    title: "Jumbo Xerox Services (A0, A1, A2, A3, A4)",
    teluguTitle: "జంబో జిరాక్స్ సర్వీసెస్ (కలర్ & B/W)",
    category: "Jumbo Xerox & Large Format Plans",
    categorySlug: "jumbo-xerox-cad",
    shortDescription: "High-speed large-format color and black & white photocopying and digital printing from standard A4/A3 up to massive A2, A1, and continuous A0 roll sizes.",
    fullDescription: "City Grafix Kadapa operates high-precision wide-format digital plotters capable of scanning and printing from standard office documents up to massive A0 engineering sheets. With 1200 DPI vector clarity, razor-sharp line reproduction, and heavy-duty 75–90 GSM bond paper, we provide while-you-wait large-format copying for Kadapa's engineers, contractors, architects, and government officers.",
    targetAudience: ["Civil Engineers", "Building Contractors", "Land Surveyors", "Architects", "Polytechnic & Engineering Students"],
    specs: [
      "Ultra-sharp 1200 DPI vector line reproduction",
      "Full dimension range: A0 (841×1189mm), A1 (594×841mm), A2 (420×594mm), A3 & A4",
      "75 GSM & 90 GSM high-opacity imported bond paper",
      "Instant while-you-wait bulk photocopying capabilities",
      "Smudge-proof, UV-stable digital toner adhesion",
    ],
    turnaround: "15 to 30 Minutes (Instant while-you-wait)",
    startingPrice: "₹25 / sheet",
    pricingDetails: "A3 Colour: ₹25 | A2 B/W: ₹40 | A2 Colour: ₹90 | A1 B/W: ₹60 | A1 Colour: ₹140 | A0 B/W: ₹90 | A0 Colour: ₹220",
    supportedSizes: ["A0 (841 x 1189 mm)", "A1 (594 x 841 mm)", "A2 (420 x 594 mm)", "A3 (297 x 420 mm)", "A4 (210 x 297 mm)", "Continuous roll up to 36 inches wide"],
    image: "/images/cad-blueprint-plotter.jpg",
    benefits: [
      "Zero scaling distortion — 100% true to CAD measurements",
      "While-you-wait instant delivery for urgent municipality submissions",
      "Direct in-house high-speed plotters with wholesale bulk discounts",
      "Clean edge trimming and optional standard A4 accordion folding",
    ],
    faqs: [
      {
        question: "Can I bring my CAD drawing on a Pen Drive or WhatsApp?",
        answer: "Yes, you can bring your files on a USB drive or simply send them to our WhatsApp at 72878 67584 or 76010 43674. We accept PDF, DWG, DXF, TIFF, and CorelDRAW files.",
      },
      {
        question: "How fast can I get 10 sets of A0 drawings?",
        answer: "With our multi-roll digital plotters, 10 sets of A0 architectural blueprints are typically printed, folded, and handed over within 20 to 30 minutes.",
      },
      {
        question: "Do you offer folding to standard file size?",
        answer: "Yes! We provide precision accordion folding with Title Block on top for easy filing and government office submissions.",
      },
    ],
    whatsappMessage: "Hello City Grafix, I need Jumbo Xerox / CAD Drawing printing in Kadapa. Please let me know the pricing and time required.",
    recommendedLine: "orders",
    isFeatured: true,
  },
  {
    id: "cad-engineering-printing-kadapa",
    slug: "cad-engineering-printing-kadapa",
    title: "Engineering & Architectural Drawing Printing",
    teluguTitle: "ఇంజనీరింగ్ & ఆర్కిటెక్చరల్ డ్రాయింగ్స్",
    category: "Jumbo Xerox & Large Format Plans",
    categorySlug: "jumbo-xerox-cad",
    shortDescription: "Millimeter-accurate AutoCAD drawings, structural blueprints, column layouts, elevation plans, electrical schematics, and plumbing designs.",
    fullDescription: "CAD drafting requires flawless vector line precision where even a fraction of a millimeter discrepancy affects on-site construction. At City Grafix, we calibrate our wide-format printers to maintain strict 1:100, 1:50, and 1:200 architectural scales. From foundation grids and column layout markings to multi-story MEP electrical and plumbing schematics, we provide the crispest prints in Kadapa.",
    targetAudience: ["Structural Engineers", "Architectural Firms", "MEP Consultants", "Town Planning Experts", "Infrastructure Contractors"],
    specs: [
      "Strict architectural scale adherence: 1:1, 1:50, 1:100, 1:200",
      "Moisture-resistant, high-contrast dark black toner",
      "Fine line weight differentiation from 0.05mm to 1.5mm lines",
      "Color-coded layers for plumbing, electrical, and structural reinforcement",
      "Automatic folding to standard A4 filing size with title block visible",
    ],
    turnaround: "15 to 30 Minutes",
    startingPrice: "₹40 / sheet",
    pricingDetails: "A2 B/W: ₹40 | A2 Colour: ₹90 | A1 B/W: ₹60 | A1 Colour: ₹140 | A0 B/W: ₹90 | A0 Colour: ₹220",
    supportedSizes: ["A0", "A1", "A2", "Custom CAD Plot Widths up to 36 inches"],
    image: "/images/cad-blueprint-plotter.jpg",
    benefits: [
      "Zero line blur even on dense multi-layered structural plans",
      "Fast batch plotting from merged PDF portfolios or DWG sheets",
      "Durable bond stock that withstands rough handling on active construction sites",
      "Direct technical staff capable of pre-flighting CAD layouts before printing",
    ],
    faqs: [
      {
        question: "Do you support AutoCAD .dwg files directly?",
        answer: "Yes, we support native .dwg, .dxf, as well as plot-ready vector PDFs.",
      },
      {
        question: "Are color-coded lines printed clearly?",
        answer: "Our plotters reproduce full CMYK color channels, making red plumbing lines, blue electrical circuits, and green gas lines easily distinguishable.",
      },
    ],
    whatsappMessage: "Hello City Grafix, I have AutoCAD / Engineering Drawings to print. Please let me know how soon I can collect them.",
    recommendedLine: "orders",
    isFeatured: true,
  },
  {
    id: "layout-map-printing-kadapa",
    slug: "layout-map-printing-kadapa",
    title: "Municipal Layout & Village Map Printing",
    teluguTitle: "మున్సిపల్ లేఅవుట్స్ & విలేజ్ మ్యాప్స్",
    category: "Jumbo Xerox & Large Format Plans",
    categorySlug: "jumbo-xerox-cad",
    shortDescription: "Large-size map reproduction for town planning master plans, real estate venture layouts, revenue village maps (FMB sketches), and municipal building sanctions.",
    fullDescription: "Real estate ventures and land legalities require clear, high-contrast plot layouts. City Grafix prints high-definition municipal layout plans, DTCP / KUDA approved venture layouts, and survey village maps with distinct plot numbering, boundary coloring, and road demarcation up to 44-inch continuous length.",
    targetAudience: ["Real Estate Developers", "Land Surveyors", "Revenue Advocates", "Civil Engineers", "Property Buyers"],
    specs: [
      "High-definition line clarity up to 44-inch continuous roll length",
      "Accurate boundary coloring for individual plots and survey survey numbers",
      "Archival paper stock accepted by government sanction authorities",
      "Lamination option available for long-lasting field and office display",
    ],
    turnaround: "Express (Same Day)",
    startingPrice: "₹90 / sheet",
    pricingDetails: "A2 Colour: ₹90 | A1 Colour: ₹140 | A0 Colour: ₹220 | Lamination: ₹10/sq.ft",
    supportedSizes: ["A2", "A1", "A0", "Custom Roll Lengths up to 10+ feet"],
    image: "/images/municipal-layout-village-map.jpg",
    benefits: [
      "Vibrant plot demarcation colors (yellow, green, pink boundaries)",
      "High readability of tiny survey numbers and road width dimensions",
      "Accepted by DTCP, KUDA, and municipal offices across Kadapa district",
    ],
    faqs: [
      {
        question: "Can you print approved venture layouts with plot grid numbers?",
        answer: "Yes, we specialize in high-resolution printing of real estate venture layouts where every single plot number and square yard measurement is crisply readable.",
      },
      {
        question: "Can I get the layout map laminated or mounted on sunboard?",
        answer: "Yes! We offer roll gloss/matte lamination and 3mm/5mm rigid sunboard mounting so you can hang the layout in your real estate office.",
      },
    ],
    whatsappMessage: "Hello City Grafix, I want to print a Municipal Layout / Real Estate Venture Map in Kadapa. Please share quotation.",
    recommendedLine: "orders",
    isFeatured: true,
  },
  {
    id: "tracing-paper-printing-kadapa",
    slug: "tracing-paper-printing-kadapa",
    title: "Tracing Paper & Tracing Cloth Printing",
    teluguTitle: "ట్రేసింగ్ పేపర్ & ట్రేసింగ్ క్లాత్ ప్రింటింగ్",
    category: "Jumbo Xerox & Large Format Plans",
    categorySlug: "jumbo-xerox-cad",
    shortDescription: "Specialized printing onto imported translucent tracing paper (90–110 GSM) and heavy-duty archival drafting tracing cloth required for permanent legal records.",
    fullDescription: "Municipal corporation sanctions, town planning blueprints, and archival land records demand imported translucent tracing paper or tear-proof drafting tracing cloth. City Grafix provides specialized high-temperature toner bonding onto 90–110 GSM Gateway tracing sheets and heavy archival cloth, ensuring ink that will never smudge, crack, or peel over decades.",
    targetAudience: ["Licensed Building Surveyors", "Consulting Architects", "Government Town Planning Departments", "Revenue Record Offices"],
    specs: [
      "High-translucency imported 90–110 GSM Gateway tracing paper",
      "Tear-resistant architectural drafting cloth (ట్రేసింగ్ క్లాత్)",
      "Heat-stable toner adhesion that will not flake or smudge under ammonia copying",
      "Standard A0, A1, A2 sheet formats and continuous rolls",
    ],
    turnaround: "30 to 60 Minutes",
    startingPrice: "₹320 / sheet",
    pricingDetails: "A0 Tracing Paper / Drafting Cloth Plot: ₹320 per sheet | A1 Tracing: ₹220 | A2 Tracing: ₹150",
    supportedSizes: ["A0", "A1", "A2", "Custom Roll Widths"],
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "100% compliant with Kadapa Municipal Corporation (KMC) sanction standards",
      "High transparency for flawless blue-print reproduction and light table tracing",
      "Decades of archival durability without paper yellowing or ink degradation",
    ],
    faqs: [
      {
        question: "Is this suitable for Municipal building plan sanction?",
        answer: "Yes, our Gateway tracing paper and tracing cloth prints are fully accepted by Kadapa Municipal Corporation and local town planning authorities.",
      },
    ],
    whatsappMessage: "Hello City Grafix, I need Tracing Paper / Tracing Cloth printing for municipal sanction. Please assist.",
    recommendedLine: "orders",
  },
  {
    id: "large-format-scanning-kadapa",
    slug: "large-format-scanning-kadapa",
    title: "Large Format Document & Map Scanning",
    teluguTitle: "లార్జ్ సైజ్ మ్యాప్ & డాక్యుమెంట్ స్కానింగ్",
    category: "Jumbo Xerox & Large Format Plans",
    categorySlug: "jumbo-xerox-cad",
    shortDescription: "Optical scanning of fragile blueprints, old revenue cloth maps, and oversized documents up to A0 width into crisp digital PDF, TIFF, or high-res JPEG files.",
    fullDescription: "Do you have aged paper blueprints, legacy village maps, or fragile land deeds that need digital preservation? City Grafix houses large-format optical roll scanners capable of digitizing oversized documents up to 44 inches wide at true 600 DPI optical resolution. Our gentle feed mechanism protects antique paper and cloth.",
    targetAudience: ["Property Owners", "Revenue Surveyors", "Legal Advocates", "Civil Contractors", "Government Archives"],
    specs: [
      "True 600 DPI optical scanning resolution",
      "Gentle roll-feed mechanism safe for aged, delicate blueprints and cloth maps",
      "Color, Grayscale, and High-Contrast Monochrome scanning modes",
      "Direct digital export to USB Pen Drive, Email, or WhatsApp as PDF, TIFF, or JPG",
    ],
    turnaround: "Instant while you wait",
    startingPrice: "₹80 / document",
    pricingDetails: "Large Document Scanning (A0 / A1): ₹80 per document | A2 / A3 Scanning: ₹40 per document",
    supportedSizes: ["A0, A1, A2, A3, and continuous map lengths up to 10+ feet"],
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Permanent digital backup of invaluable legacy property documents",
      "Contrast enhancement to make faded handwritten notes readable",
      "Immediate handover on your USB flash drive or direct WhatsApp send",
    ],
    faqs: [
      {
        question: "Can old, torn or fragile maps be scanned safely?",
        answer: "Yes, our large format scanner uses gentle motorized rubber rollers with adjustable tension to prevent paper stress on vintage documents.",
      },
    ],
    whatsappMessage: "Hello City Grafix, I have large maps / blueprints to scan to digital PDF. Please share details.",
    recommendedLine: "orders",
  },
  {
    id: "flex-banner-printing-kadapa",
    slug: "flex-banner-printing-kadapa",
    title: "Star Flex Banner Printing",
    teluguTitle: "స్టార్ ఫ్లెక్స్ బ్యానర్ ప్రింటింగ్",
    category: "Flex & Outdoor Signage",
    categorySlug: "flex-outdoor-advertising",
    shortDescription: "Flagship outdoor advertising flex. Heavy-duty 340+ GSM high-gloss substrate printed with fade-resistant Japanese eco-solvent outdoor UV inks.",
    fullDescription: "Kadapa's intense summer sun and monsoon rains require outdoor banners that retain vivid colors without fading, cracking, or tearing. City Grafix uses premium 340+ GSM Star Flex printed on high-speed Japanese eco-solvent plotters at 1440 DPI. Whether for shop inaugurations, festive greetings, political rallies, or commercial marketing, our Star Flex delivers unmatched gloss and durability.",
    targetAudience: ["Retail Shop Owners", "Event Organizers", "Political Campaigners", "Wedding Families", "Commercial Brands"],
    specs: [
      "High-gloss 340+ GSM thick outdoor substrate",
      "Fade-resistant Japanese eco-solvent UV outdoor inks",
      "1440 DPI photographic print resolution",
      "Custom spans from 2 ft up to 100+ continuous feet",
      "Brass metal eyelets (రింగులు) and border folding included/optional",
    ],
    turnaround: "Same-Day (2 to 4 Hours express)",
    startingPrice: "₹18 / sq. ft.",
    pricingDetails: "Star Flex: ₹18/sq.ft (Min. ₹100) | Normal Flex: ₹12/sq.ft (Min. ₹70) | Brass Rings: ₹20/banner | Wooden Beeding: ₹6/sq.ft",
    supportedSizes: ["6x4 ft (Event)", "8x3 ft (Shop)", "10x5 ft (Hoarding)", "12x8 ft (Stage)", "Custom spans up to 100 ft"],
    image: "/images/flex-printing-machine.jpg",
    benefits: [
      "Direct workshop printing with zero agent markups — lowest rates in Kadapa",
      "2 to 4 hours express delivery for urgent same-day requirements",
      "Superior tear resistance under strong winds and heavy rainfall",
      "Vivid color vibrancy that stands out day and night",
    ],
    faqs: [
      {
        question: "What is the difference between Normal Flex and Star Flex?",
        answer: "Normal Flex (₹12/sq.ft) is standard event grade, best suited for short-term announcements. Star Flex (₹18/sq.ft) is 340+ GSM heavy-duty with high gloss, UV protection, and deep color saturation that lasts months outdoors.",
      },
      {
        question: "How fast can I get a 10x5 ft banner printed?",
        answer: "If you provide a print-ready file, we can print, punch brass eyelets, and have it ready for collection in just 2 hours!",
      },
    ],
    whatsappMessage: "Hello City Grafix, I need Star Flex Banner printing in Kadapa. Please calculate quote for my dimensions.",
    recommendedLine: "orders",
    isFeatured: true,
  },
  {
    id: "arch-flex-printing-kadapa",
    slug: "arch-flex-printing-kadapa",
    title: "Arch Flex & Grand Welcome Arches",
    teluguTitle: "ఆర్చ్ ఫ్లెక్స్ ప్రింటింగ్ (స్వాగత తోరణాలు)",
    category: "Flex & Outdoor Signage",
    categorySlug: "flex-outdoor-advertising",
    shortDescription: "Grand entrance welcome arch banners custom fabricated for road crossings, wedding hall gates, and festive venues across Kadapa district.",
    fullDescription: "Make a monumental entrance for weddings, temple Brahmotsavams, political rallies, and showroom inaugurations. City Grafix prints high-gloss, ultra-wide Arch Flex banners reinforced with heavy-duty wooden beeding and MS tubular iron frameworks. Designed to span across roads and venue gates with Telugu cultural typography and vivid artwork.",
    targetAudience: ["Wedding Planners & Families", "Temple Committee Organizers", "Political Leaders", "Showroom Inauguration Teams"],
    specs: [
      "Standard spans: 20ft × 10ft, 30ft × 15ft, up to 50ft mega arches",
      "Heavy welded MS tubular framework and wooden beeding borders",
      "High-gloss Star Flex substrate with tear-resistant tension hems",
      "On-site framing and erection assistance available across Kadapa",
    ],
    turnaround: "Same-Day Express Dispatch",
    startingPrice: "₹22 / sq. ft.",
    pricingDetails: "Arch Flex: ₹22/sq.ft (Min. Order ₹800) | Wooden Beeding: ₹6/sq.ft | MS Square Pipe Frame: ₹35/sq.ft",
    supportedSizes: ["20 x 10 ft", "25 x 12 ft", "30 x 15 ft", "Custom road spans"],
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Stunning grand entrance that commands immediate attention",
      "Engineered tension hems that prevent mid-road sagging under wind",
      "Rich Telugu cultural typography and high-definition photo reproduction",
    ],
    faqs: [
      {
        question: "Do you supply the iron frame or just the printed flex?",
        answer: "We offer both! You can order just the custom-cut printed arch flex, or opt for our complete package including wooden beeding or heavy MS iron square pipe frame.",
      },
    ],
    whatsappMessage: "Hello City Grafix, I need Arch Flex / Grand Welcome Arch banner in Kadapa. Please share size options and pricing.",
    recommendedLine: "orders",
  },
  {
    id: "hoarding-printing-kadapa",
    slug: "hoarding-printing-kadapa",
    title: "Hoarding Flex & Highway Billboards",
    teluguTitle: "హోర్డింగ్ ఫ్లెక్స్ & హైవే బిల్ బోర్డ్స్",
    category: "Flex & Outdoor Signage",
    categorySlug: "flex-outdoor-advertising",
    shortDescription: "Massive roadside hoardings and national highway advertising billboards. Frontlit and backlit industrial flex engineered to withstand high wind velocity.",
    fullDescription: "Command the skyline across Kadapa's busiest transit corridors—from Seven Roads Circle and Rims Road to the Kadapa-Tirupati Highway. City Grafix fabricates industrial-grade outdoor hoarding flex with heavy wind-resistant GSM, reinforced perimeter borders, brass eyelets, and multi-month UV sunlight protection.",
    targetAudience: ["Corporate Brands", "Colleges & Universities", "Multi-Speciality Hospitals", "Cinema Theatres", "Real Estate Developers"],
    specs: [
      "Heavy industrial wind-resistant GSM outdoor flex",
      "Heavy brass eyelets (రింగులు) and high-tensile nylon rope ties",
      "Multi-month color retention under intense Rayalaseema heat",
      "Frontlit and Backlit flex variants available",
    ],
    turnaround: "2 to 4 Hours Fast Dispatch",
    startingPrice: "₹20 / sq. ft.",
    pricingDetails: "Hoarding Flex: ₹20/sq.ft (Min. Order ₹500) | Backlit Flex: ₹35/sq.ft (Min. ₹200)",
    supportedSizes: ["20x10 ft", "30x15 ft", "40x20 ft", "60x30 ft", "Custom Highway Billboard Spans"],
    image: "/images/highway-hoarding-billboard.jpg",
    benefits: [
      "High wind resistance with reinforced double-seamed edges",
      "Fast 2 to 4 hours workshop turnaround for rapid campaign rollouts",
      "Consistent color fidelity across massive multi-panel billboard joins",
    ],
    faqs: [
      {
        question: "Can you print seamless billboards?",
        answer: "Yes, we produce massive continuous spans, and for giant billboard structures, our heat-welded joints are invisible from the road.",
      },
    ],
    whatsappMessage: "Hello City Grafix, I need Hoarding Flex / Highway Billboard printing in Kadapa. Please send a quotation.",
    recommendedLine: "orders",
  },
  {
    id: "3d-led-sign-boards-kadapa",
    slug: "3d-led-sign-boards-kadapa",
    title: "3D Acrylic LED Letters & Glow Sign Boards",
    teluguTitle: "3D అక్రిలిక్ ఎల్ఈడీ బోర్డ్స్ & లైటింగ్ సైన్ బోర్డులు",
    category: "Architectural Signage",
    categorySlug: "3d-led-signage",
    shortDescription: "Elite architectural storefront signage. Custom CNC laser-cut cast acrylic channel letters, aluminum returns, Samsung/Osram IP67 waterproof LED modules.",
    fullDescription: "Transform your storefront into a landmark. City Grafix is Kadapa's dedicated fabricator of custom 3D acrylic LED channel letters and illuminated commercial signage. Built with CNC laser precision, imported cast acrylic faces, anti-rust MS tubular steel frameworks, and IP67 waterproof LED modules, every board undergoes a rigorous 48-hour electrical burn-in test before installation.",
    targetAudience: ["Doctors & Clinics", "Pharmacies", "Retail & Fashion Showrooms", "Jewellery Stores", "Corporate Offices & Restaurants"],
    specs: [
      "Custom CNC laser-cut cast acrylic letters (3mm / 5mm face)",
      "Solid aluminum / acrylic returns in front-lit, halo back-lit, or neon styles",
      "Energy-efficient Samsung/Osram IP67 waterproof LED modules",
      "Anti-rust powder coated MS tubular steel framework",
      "48-hour continuous electrical burn-in testing before mounting",
      "3-Year structural & lighting durability guarantee",
    ],
    turnaround: "2 to 4 Days (Includes 48-hr electrical testing)",
    startingPrice: "₹45 / inch letter height",
    pricingDetails: "3D Letters: ₹45/inch height/letter (Min. ₹1,500) | Complete LED Glow Sign Board: ₹220/sq.ft (Min. ₹1,200)",
    supportedSizes: ["6-inch to 48-inch letter heights", "Shopfront signboards from 8x3 ft up to 40x8 ft"],
    image: "/images/3d-led-signage-storefront.jpg",
    benefits: [
      "Direct Kadapa fabrication workshop — save 30–40% compared to third-party agency middlemen",
      "Complete site survey, structural calculation, and professional electrical mounting",
      "High energy efficiency with 12V DC waterproof transformers",
      "Elite modern appearance that instantly elevates customer brand perception",
    ],
    faqs: [
      {
        question: "How is the price calculated for 3D acrylic letters?",
        answer: "Price is calculated per inch of letter height at ₹45/inch. For example, a 12-inch high letter costs ₹540. A standard 10-letter board with 12-inch letters costs ₹5,400 plus frame.",
      },
      {
        question: "Do you come to our shop in Kadapa for site measurement?",
        answer: "Yes! Our signage structural specialist (Line 2: 95817 64937) conducts on-site surveys, checks electrical points, and provides 3D design mockups before fabrication.",
      },
      {
        question: "What is the warranty on LED modules?",
        answer: "We use IP67 waterproof Samsung/Osram LED modules backed by a 3-year structural and lighting durability assurance.",
      },
    ],
    whatsappMessage: "Hello City Grafix, I want a 3D Acrylic LED Glow Signboard for my business in Kadapa. Please schedule a consultation.",
    recommendedLine: "signage",
    isFeatured: true,
  },
  {
    id: "vehicle-advertising-kadapa",
    slug: "vehicle-advertising-kadapa",
    title: "Auto Publicity & Mobile Rickshaw Advertising",
    teluguTitle: "ఆటో పబ్లిసిటీ & మొబైల్ ప్రచారం",
    category: "Commercial Publicity & Offset",
    categorySlug: "stickers-boards-commercial",
    shortDescription: "Take your brand to every street in Kadapa. Complete 3-sided auto rickshaw flex branding, DTS high-power sound system, mic announcements, and 10-minute live WhatsApp route tracking updates.",
    fullDescription: "City Grafix is Kadapa's premier auto publicity provider. Take your brand directly into every residential street, busy market, commercial circle, and rural mandal. We provide complete 3-sided high-definition flex framing, crystal-clear DTS sound systems, professional mic announcements, door-to-door pamphlet distribution, and verified proof of promotion with live route map photos sent to your WhatsApp every 10 minutes.",
    targetAudience: ["Bakeries & Sweet Shops", "Schools & Colleges", "Hospitals & Diagnostics", "Theatres & Movie Promoters", "Retail Showroom Inaugurations"],
    specs: [
      "3-Sided Big Flex Framing: Sides W6 × H5 ft (2 pcs), Rear W4 × H5 ft (1 pc), Top Header W4 × H1 ft (1 pc)",
      "High-power crystal-clear DTS Sound System with Loudspeaker megaphone & live Mic",
      "Hand-to-hand pamphlet and flyer distribution during transit and key stops",
      "50 Km guaranteed daily route coverage across Kadapa town gallis and circles",
      "Live Route Tracking & Route Map Photos sent via WhatsApp every 10 minutes (Proof of Promotion)",
      "Dedicated booking helpline numbers: +91 99857 43730 | +91 72878 67584",
    ],
    turnaround: "Same Day / 24 Hours",
    startingPrice: "₹450 / auto",
    pricingDetails: "Single Auto (Front Hood + Rear Board): ₹450 | Full 3-Sided Auto with DTS Sound & Pamphlet Distribution: Custom Packages | 5 Autos Fleet: ₹2,100 | 10 Autos Mega Campaign: ₹3,900",
    supportedSizes: ["Sides: W6 x H5 ft (2 panels)", "Rear Panel: W4 x H5 ft (1 panel)", "Top Header: W4 x H1 ft (1 panel)", "Front Hood Flex Cover"],
    image: "/images/auto-publicity-branding.jpg",
    galleryImages: [
      "/images/auto-publicity-branding.jpg",
      "/images/auto-publicity-route-tracking.jpg",
    ],
    benefits: [
      "Penetrate every corner, street, and colony of Kadapa that traditional billboards cannot reach",
      "100% transparent tracking — receive photo proof with timestamp on WhatsApp every 10 minutes",
      "High audio clarity with DTS speaker so your business message is heard loud and clear",
      "Direct turnkey execution by City Grafix — we handle flex printing, vehicle mounting, audio, and distribution",
    ],
    faqs: [
      {
        question: "How do I know the auto is covering the planned route?",
        answer: "We provide complete transparency! You will receive live WhatsApp updates with GPS-tagged route map photos of the auto in action every 10 minutes throughout the campaign.",
      },
      {
        question: "Do you also record and play audio announcements?",
        answer: "Yes, our autos come equipped with a high-fidelity DTS sound system and mic amplifier. We can play your pre-recorded audio spot or assist with audio setup.",
      },
      {
        question: "What are the standard auto flex sizes?",
        answer: "Our full auto promotion package includes 4 high-definition flex panels: 2 Side panels (Width 6 ft × Height 5 ft), 1 Rear panel (Width 4 ft × Height 5 ft), and 1 Top header strip (Width 4 ft × Height 1 ft).",
      },
      {
        question: "Who should I contact to book an auto promotion campaign?",
        answer: "You can book directly via WhatsApp or phone call at +91 99857 43730 or +91 72878 67584.",
      },
    ],
    whatsappMessage: "Hello City Grafix, I want to book an Auto Publicity campaign in Kadapa with DTS sound and route map updates. Please share package details.",
    recommendedLine: "orders",
  },
  {
    id: "visiting-cards-bill-books-pamphlets-kadapa",
    slug: "visiting-cards-bill-books-pamphlets-kadapa",
    title: "Visiting Cards, Bill Books & Pamphlets",
    teluguTitle: "విజిటింగ్ కార్డ్స్, బిల్ బుక్స్ & పాంప్లెట్లు",
    category: "Commercial Publicity & Offset",
    categorySlug: "stickers-boards-commercial",
    shortDescription: "High-speed commercial offset printing for everyday business operations: 350 GSM Velvet Spot UV visiting cards, duplicate/triplicate NCR bill books, flyers.",
    fullDescription: "Professional stationery defines your brand reputation. City Grafix prints commercial business cards with velvet soft touch and raised Spot UV gloss, carbonless duplicate (1+1) and triplicate (1+2) NCR tax invoice books with sequential numbering, and full-color promotional flyers on 70–130 GSM art paper.",
    targetAudience: ["New Business Owners", "Doctors & Clinics", "Wholesale Merchants", "Supermarkets", "Educational Institutes"],
    specs: [
      "350 GSM Velvet Visiting Cards with Spot UV gloss embossing",
      "Carbonless NCR Bill Books (Duplicate 1+1 and Triplicate 1+2) with custom numbering",
      "Multi-Colour Promotional Pamphlets on 70–130 GSM art paper",
      "Standard A5 and A4 single/double-sided flyer formats",
    ],
    turnaround: "24 to 48 Hours",
    startingPrice: "₹750 / 1000 cards",
    pricingDetails: "1000 Visiting Cards (Matte): ₹750 | 350 GSM Gloss: ₹950 | Spot UV Velvet: ₹1,650 | Duplicate Bill Books (5 pack): ₹850 | A5 Flyers (1000): ₹950",
    supportedSizes: ["Standard Business Card (3.5 x 2 in)", "A5 Flyer (148 x 210 mm)", "A4 Flyer (210 x 297 mm)", "Standard Bill Book Dimensions"],
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Crisp offset printing with rich saturated inks and sharp typography",
      "High-grade carbonless paper that produces sharp duplicates without messy carbon sheets",
      "Wholesale pack pricing with fast 24 to 48 hours delivery",
    ],
    faqs: [
      {
        question: "What is the minimum order for visiting cards?",
        answer: "Our standard wholesale pack is 1000 cards starting at ₹750 for matte finish.",
      },
      {
        question: "Can you include my GST number and sequential serial numbers on bill books?",
        answer: "Yes, all bill books are custom printed with your firm name, GSTIN, bank details, and consecutive numbering (e.g., 001 to 500).",
      },
    ],
    whatsappMessage: "Hello City Grafix, I need Visiting Cards / Bill Books / Pamphlets printing in Kadapa. Please share design guidelines and rate.",
    recommendedLine: "orders",
    isFeatured: true,
  },
];

export const PERSONALIZED_GIFTS_ITEMS = [
  {
    id: "photo-mugs",
    title: "Custom Ceramic Photo Mugs & Gift Collection",
    teluguTitle: "ఫోటో మగ్స్ (ప్లెయిన్ & మ్యాజిక్)",
    price: "₹350",
    turnaround: "1 to 2 Hours",
    image: "/images/personalized-gifts-collection.jpg",
    description: "AAA grade glossy ceramic mugs. Available in pure white, inner color (red, blue, black, yellow), heart handle couple edition, and magic heat-reveal mug (turns from pitch black to photo when hot liquid is poured).",
    options: ["Sparkling White (₹350)", "Inner Colour (₹450)", "Heart Handle (₹500)", "Magic Heat Reveal (₹550)"],
  },
  {
    id: "photo-tshirts",
    title: "Custom Photo T-Shirts",
    teluguTitle: "కస్టమ్ ఫోటో టీ-షర్ట్స్ (DTF & సబ్లిమేషన్)",
    price: "₹300",
    turnaround: "Same-Day",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    description: "Combed cotton and sports dry-fit T-shirts with sublimation and 100% wash-proof DTF prints. Sizes from S to XXL in Solid Black, Pure White, Navy Blue, and Royal Blue.",
    options: ["Sublimation Round Neck (₹300)", "DTF Round Neck (₹400)", "DTF Collar Polo (₹500)"],
  },
  {
    id: "photo-frames",
    title: "Custom Photo Frames & LED Wall Art",
    teluguTitle: "ఫోటో ఫ్రేమ్స్ & ఎల్ఈడీ వాల్ ఆర్ట్",
    price: "₹250",
    turnaround: "Same-Day",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    description: "Synthetic wooden moldings with crystal glass/acrylic cover. Desktop stands (6x8 in), classic A4 wall frames, family collage frames (12x18 in), and ambient warm LED glow backlit frames.",
    options: ["Desktop Stand 6x8 (₹250)", "Classic Wall A4 (₹350)", "Collage 12x18 (₹650)", "LED Backlit Frame (₹1,250)"],
  },
  {
    id: "photo-pillows",
    title: "Photo Pillows & Cushions",
    teluguTitle: "ఫోటో పిల్లోస్ & కుషన్స్",
    price: "₹450",
    turnaround: "Same-Day",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
    description: "Hypoallergenic microfiber-filled heart and square cushions. Choose from soft satin, luxury fur border, magic reversible sequins (swipe to reveal), and internal warm LED fairy-light pillows.",
    options: ["Standard Heart/Square (₹450)", "Fur Border Pillow (₹600)", "Magic Sequins (₹800)", "Internal LED Glow (₹850)"],
  },
  {
    id: "custom-caps",
    title: "Custom Caps & Corporate Merch",
    teluguTitle: "కస్టమ్ క్యాప్స్ & మర్చండైజ్",
    price: "₹300",
    turnaround: "1 to 2 Hours",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
    description: "Structured premium baseball and trucker caps with vibrant DTF logo or personalized photo print. Ideal for college fests, corporate events, and personal gifts.",
    options: ["Structured Cap with DTF Print (₹300)"],
  },
];
