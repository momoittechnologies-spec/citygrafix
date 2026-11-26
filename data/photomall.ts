export interface PhotoItem {
  id: string; // e.g. "CGP-WED-01"
  title: string;
  category: "wedding" | "political" | "functions" | "commercial";
  categoryLabel: string;
  categoryTelugu: string;
  subEvent: string; // e.g. "Muhurtham", "Talambralu", "Reception", "Roadshow", "Keynote"
  eventTitle: string;
  location: string;
  date: string;
  src: string;
  previewSrc?: string;
  thumbSrc?: string;
  aspectRatio: "landscape" | "portrait" | "square";
  tags: string[];
  cameraExif: {
    camera: string;
    lens: string;
    focalLength: string;
    aperture: string;
    iso: string;
    shutter: string;
  };
  clientEventCode: string; // e.g. "2026", "7287"
  isPublicHighlight: boolean;
}

export interface ClientAlbum {
  id: string;
  accessCode: string; // 4-digit PIN
  clientName: string;
  eventTitle: string;
  eventType: "wedding" | "political" | "functions" | "commercial";
  eventDate: string;
  location: string;
  coverImage: string;
  totalPhotos: number;
  albumLimit: number; // Target selection limit for physical Karizma album (e.g. 80)
  subEvents: string[];
  description: string;
  photoIds: string[];
}

export interface AlbumPackage {
  id: string;
  name: string;
  size: string;
  sheets: string;
  finish: string;
  boxType: string;
  priceEstimate: string;
  popular?: boolean;
}

export const PHOTOMALL_META = {
  title: "City PhotoMall | Event Photography & Client Proofing Portal",
  subtitle: "Kadapa's Premier Wedding, Political & Event Photography Client Hub",
  teluguHeading: "కడప వెడ్డింగ్ & ఈవెంట్ ఫోటోగ్రఫీ క్లయింట్ పోర్టల్",
  description:
    "Private client photo proofing, event gallery, and album selection portal by City Grafix Kadapa. Browse wedding captures, political campaign coverage, and traditional family functions. Select photos for Karizma albums and order direct prints.",
  orderDeskPhone: "+91 72878 67584",
  photographyDeskPhone: "+91 99857 43730",
  whatsappNumber: "917287867584",
  address: "Opp. Tirumala Hospital, Beside New AF Automart Street, 7 Roads, Kadapa, AP",
};

export const PHOTOMALL_CATEGORIES = [
  { key: "all", label: "All Events", telugu: "అన్ని ఈవెంట్స్" },
  { key: "wedding", label: "Weddings & Receptions", telugu: "పెళ్లిళ్లు & రిసెప్షన్స్" },
  { key: "political", label: "Political Campaigns & Rallies", telugu: "రాజకీయ సభలు & రోడ్‌షోలు" },
  { key: "functions", label: "Traditional Ceremonies", telugu: "హాఫ్ శారీ & శుభకార్యాలు" },
  { key: "commercial", label: "Commercial & Store Launches", telugu: "షాప్ ఓపెనింగ్స్ & కమర్షియల్" },
];

export const ALBUM_PACKAGES: AlbumPackage[] = [
  {
    id: "pkg-karizma-classic",
    name: "Classic Karizma Album",
    size: "12 × 24 inches",
    sheets: "30 Sheets (60 Pages • ~120 Photos)",
    finish: "Silky Matte Anti-Scratch Lamination",
    boxType: "Padded Hardcover Box",
    priceEstimate: "₹8,500 – ₹11,000",
  },
  {
    id: "pkg-karizma-royal",
    name: "Royal 3D Acrylic Glass Album",
    size: "12 × 36 inches (Panoramic Spread)",
    sheets: "40 Sheets (80 Pages • ~180 Photos)",
    finish: "High-Gloss Metallic Laminated Sheets",
    boxType: "Beveled 3D Acrylic Cover & Leather Briefcase",
    priceEstimate: "₹14,500 – ₹18,500",
    popular: true,
  },
  {
    id: "pkg-velvet-luxury",
    name: "Imperial Velvet Touch Album",
    size: "12 × 30 inches",
    sheets: "50 Sheets (100 Pages • ~220 Photos)",
    finish: "Feather-Touch Non-Tearable Velvet Silk",
    boxType: "Handcrafted Wooden Box with Engraved Nameplate",
    priceEstimate: "₹19,000 – ₹24,000",
  },
];

export const CLIENT_ALBUMS: ClientAlbum[] = [
  {
    id: "album-ramesh-sneha-wedding",
    accessCode: "2026",
    clientName: "Ramesh & Sneha Family",
    eventTitle: "Grand Wedding Ceremony & Reception",
    eventType: "wedding",
    eventDate: "November 2026",
    location: "Srinivasa Kalyana Mandapam, Kadapa",
    coverImage: "/images/photomall/photomall_wedding_ceremony_kadapa.webp",
    totalPhotos: 120,
    albumLimit: 80,
    subEvents: ["All", "Muhurtham", "Talambralu", "Reception", "Bridal Portraits"],
    description: "Traditional Telugu Muhurtham, Talambralu, Kanyadanam, and grand evening reception coverage.",
    photoIds: ["CGP-WED-01", "CGP-WED-02", "CGP-WED-03", "CGP-WED-04", "CGP-WED-05", "CGP-WED-06"],
  },
  {
    id: "album-kadapa-political-rally",
    accessCode: "7287",
    clientName: "Kadapa Constituency Campaign Committee",
    eventTitle: "Mega Public Assembly & Roadshow",
    eventType: "political",
    eventDate: "October 2026",
    location: "Seven Roads Circle to Municipal Grounds, Kadapa",
    coverImage: "/images/photomall/photomall_political_campaign_kadapa.webp",
    totalPhotos: 85,
    albumLimit: 40,
    subEvents: ["All", "Roadshow", "Podium Keynote", "Crowd Documentation"],
    description: "High-energy open vehicle roadshow, podium speech, public gathering, and press photo documentation.",
    photoIds: ["CGP-POL-01", "CGP-POL-02", "CGP-POL-03", "CGP-POL-04"],
  },
  {
    id: "album-sahithi-half-saree",
    accessCode: "1111",
    clientName: "Venkatesh & Sunitha Family",
    eventTitle: "Sahithi Langa Voni Ceremony",
    eventType: "functions",
    eventDate: "September 2026",
    location: "Proddatur Function Hall, Kadapa Dist.",
    coverImage: "/images/photomall/photomall_traditional_function_kadapa.webp",
    totalPhotos: 64,
    albumLimit: 50,
    subEvents: ["All", "Pooja & Blessings", "Kuthuvilakku Lighting", "Family Portraits"],
    description: "Traditional South Indian half-saree celebration, kuthuvilakku lighting, and family candid moments.",
    photoIds: ["CGP-FUN-01", "CGP-FUN-02", "CGP-FUN-03"],
  },
  {
    id: "album-balaji-jewellery-launch",
    accessCode: "9999",
    clientName: "Sri Balaji Jewellery Works",
    eventTitle: "Grand Showroom Launch & Inauguration",
    eventType: "commercial",
    eventDate: "August 2026",
    location: "Main Bazaar Road, Kadapa",
    coverImage: "/images/roadside-jewellery-hoarding-proddatur.webp",
    totalPhotos: 42,
    albumLimit: 30,
    subEvents: ["All", "Ribbon Cutting", "Showroom Displays", "Outdoor Hoardings"],
    description: "Ribbon cutting, VIP lamp lighting, retail interior showcase, and outdoor hoardings display.",
    photoIds: ["CGP-COM-01", "CGP-COM-02"],
  },
];

export const SAMPLE_PHOTOS: PhotoItem[] = [
  // 1. Weddings
  {
    id: "CGP-WED-01",
    title: "Sacred Jeelakarra Bellam & Mangalasutram",
    category: "wedding",
    categoryLabel: "Wedding Ceremony",
    categoryTelugu: "ముహూర్తం & మంగళసూత్రధారణ",
    subEvent: "Muhurtham",
    eventTitle: "Ramesh & Sneha Grand Wedding",
    location: "Kadapa",
    date: "14 Nov 2026",
    src: "/images/photomall/photomall_wedding_ceremony_kadapa.webp",
    previewSrc: "/images/photomall/photomall_wedding_ceremony_kadapa.webp",
    thumbSrc: "/images/photomall/photomall_wedding_ceremony_kadapa.webp",
    aspectRatio: "landscape",
    tags: ["Muhurtham", "Bride", "Groom", "Traditional", "Temple Jewelry"],
    cameraExif: {
      camera: "Sony Alpha 7 IV",
      lens: "FE 24-70mm F2.8 GM II",
      focalLength: "50mm",
      aperture: "f/2.8",
      iso: "800",
      shutter: "1/250s",
    },
    clientEventCode: "2026",
    isPublicHighlight: true,
  },
  {
    id: "CGP-WED-02",
    title: "Talambralu Joy & Auspicious Turmeric Rice Shower",
    category: "wedding",
    categoryLabel: "Wedding Rituals",
    categoryTelugu: "తలంబ్రాల వేడుక",
    subEvent: "Talambralu",
    eventTitle: "Ramesh & Sneha Grand Wedding",
    location: "Kadapa",
    date: "14 Nov 2026",
    src: "/images/photomall/photomall_wedding_ceremony_kadapa.webp",
    previewSrc: "/images/photomall/photomall_wedding_ceremony_kadapa.webp",
    thumbSrc: "/images/photomall/photomall_wedding_ceremony_kadapa.webp",
    aspectRatio: "landscape",
    tags: ["Talambralu", "Candid", "Joyful", "Mandap Decor"],
    cameraExif: {
      camera: "Sony Alpha 7 IV",
      lens: "FE 85mm F1.4 GM",
      focalLength: "85mm",
      aperture: "f/1.8",
      iso: "640",
      shutter: "1/400s",
    },
    clientEventCode: "2026",
    isPublicHighlight: true,
  },
  {
    id: "CGP-WED-03",
    title: "Evening Grand Reception Stage Portrait",
    category: "wedding",
    categoryLabel: "Reception Stage",
    categoryTelugu: "రిసెప్షన్ వేడుక",
    subEvent: "Reception",
    eventTitle: "Ramesh & Sneha Grand Wedding",
    location: "Srinivasa Kalyana Mandapam, Kadapa",
    date: "14 Nov 2026",
    src: "/images/photomall/photomall_wedding_ceremony_kadapa.webp",
    previewSrc: "/images/photomall/photomall_wedding_ceremony_kadapa.webp",
    thumbSrc: "/images/photomall/photomall_wedding_ceremony_kadapa.webp",
    aspectRatio: "landscape",
    tags: ["Reception", "Couple", "Floral Backdrop", "Evening Lights"],
    cameraExif: {
      camera: "Canon EOS R5",
      lens: "RF 28-70mm F2L USM",
      focalLength: "45mm",
      aperture: "f/2.2",
      iso: "1000",
      shutter: "1/200s",
    },
    clientEventCode: "2026",
    isPublicHighlight: true,
  },
  {
    id: "CGP-WED-04",
    title: "Bride Fine-Art Gold Jewellery & Kanjeevaram Detail",
    category: "wedding",
    categoryLabel: "Bridal Portrait",
    categoryTelugu: "పెళ్లికూతురు అలంకరణ",
    subEvent: "Bridal Portraits",
    eventTitle: "Ramesh & Sneha Grand Wedding",
    location: "Kadapa",
    date: "14 Nov 2026",
    src: "/images/photomall/photomall_wedding_ceremony_kadapa.webp",
    previewSrc: "/images/photomall/photomall_wedding_ceremony_kadapa.webp",
    thumbSrc: "/images/photomall/photomall_wedding_ceremony_kadapa.webp",
    aspectRatio: "landscape",
    tags: ["Bride", "Jewelry", "Pattu Saree", "Macro Detail"],
    cameraExif: {
      camera: "Sony Alpha 7 IV",
      lens: "FE 90mm F2.8 Macro G OSS",
      focalLength: "90mm",
      aperture: "f/2.8",
      iso: "400",
      shutter: "1/320s",
    },
    clientEventCode: "2026",
    isPublicHighlight: true,
  },
  {
    id: "CGP-WED-05",
    title: "Kanyadanam Emotional Moment with Parents",
    category: "wedding",
    categoryLabel: "Sacred Rituals",
    categoryTelugu: "కన్యాదానం ఘట్టం",
    subEvent: "Muhurtham",
    eventTitle: "Ramesh & Sneha Grand Wedding",
    location: "Kadapa",
    date: "14 Nov 2026",
    src: "/images/photomall/photomall_wedding_ceremony_kadapa.webp",
    previewSrc: "/images/photomall/photomall_wedding_ceremony_kadapa.webp",
    thumbSrc: "/images/photomall/photomall_wedding_ceremony_kadapa.webp",
    aspectRatio: "landscape",
    tags: ["Kanyadanam", "Emotion", "Family", "Parents Blessing"],
    cameraExif: {
      camera: "Canon EOS R5",
      lens: "RF 50mm F1.2L USM",
      focalLength: "50mm",
      aperture: "f/1.4",
      iso: "800",
      shutter: "1/320s",
    },
    clientEventCode: "2026",
    isPublicHighlight: true,
  },
  {
    id: "CGP-WED-06",
    title: "Groom Royal Entry with Nadaswaram & Melam",
    category: "wedding",
    categoryLabel: "Wedding Procession",
    categoryTelugu: "వరుడి ఆగమనం & మంగళవాయిద్యాలు",
    subEvent: "Muhurtham",
    eventTitle: "Ramesh & Sneha Grand Wedding",
    location: "Kadapa",
    date: "14 Nov 2026",
    src: "/images/photomall/photomall_wedding_ceremony_kadapa.webp",
    previewSrc: "/images/photomall/photomall_wedding_ceremony_kadapa.webp",
    thumbSrc: "/images/photomall/photomall_wedding_ceremony_kadapa.webp",
    aspectRatio: "landscape",
    tags: ["Groom Entry", "Nadaswaram", "Tradition", "Celebration"],
    cameraExif: {
      camera: "Sony Alpha 7 IV",
      lens: "FE 24-70mm F2.8 GM II",
      focalLength: "35mm",
      aperture: "f/2.8",
      iso: "500",
      shutter: "1/500s",
    },
    clientEventCode: "2026",
    isPublicHighlight: true,
  },

  // 2. Political Campaigns & Public Rallies
  {
    id: "CGP-POL-01",
    title: "Massive Seven Roads Roadshow & Public Salute",
    category: "political",
    categoryLabel: "Campaign Roadshow",
    categoryTelugu: "సెవెన్ రోడ్స్ సర్కిల్ రోడ్‌షో",
    subEvent: "Roadshow",
    eventTitle: "Kadapa Mega Assembly Constituency Rally",
    location: "Seven Roads, Kadapa",
    date: "28 Oct 2026",
    src: "/images/photomall/photomall_political_campaign_kadapa.webp",
    previewSrc: "/images/photomall/photomall_political_campaign_kadapa.webp",
    thumbSrc: "/images/photomall/photomall_political_campaign_kadapa.webp",
    aspectRatio: "landscape",
    tags: ["Roadshow", "Public Rally", "Crowd", "Campaign Vehicle"],
    cameraExif: {
      camera: "Canon EOS R5",
      lens: "RF 70-200mm F2.8L IS USM",
      focalLength: "135mm",
      aperture: "f/4.0",
      iso: "200",
      shutter: "1/1000s",
    },
    clientEventCode: "7287",
    isPublicHighlight: true,
  },
  {
    id: "CGP-POL-02",
    title: "Keynote Address on Main Dais & Public Gathering",
    category: "political",
    categoryLabel: "Dais Keynote",
    categoryTelugu: "ప్రసంగం & వేదిక దృశ్యాలు",
    subEvent: "Podium Keynote",
    eventTitle: "Kadapa Mega Assembly Constituency Rally",
    location: "Municipal Grounds, Kadapa",
    date: "28 Oct 2026",
    src: "/images/photomall/photomall_political_campaign_kadapa.webp",
    previewSrc: "/images/photomall/photomall_political_campaign_kadapa.webp",
    thumbSrc: "/images/photomall/photomall_political_campaign_kadapa.webp",
    aspectRatio: "landscape",
    tags: ["Speech", "Podium", "Leader", "Flags"],
    cameraExif: {
      camera: "Sony Alpha 7 IV",
      lens: "FE 24-70mm F2.8 GM II",
      focalLength: "70mm",
      aperture: "f/3.2",
      iso: "250",
      shutter: "1/800s",
    },
    clientEventCode: "7287",
    isPublicHighlight: true,
  },
  {
    id: "CGP-POL-03",
    title: "Energetic Crowd & Fluttering Flags Wide Angle",
    category: "political",
    categoryLabel: "Crowd Documentation",
    categoryTelugu: "జనసంద్రం & ప్రచార జెండాలు",
    subEvent: "Crowd Documentation",
    eventTitle: "Kadapa Mega Assembly Constituency Rally",
    location: "Kadapa Town",
    date: "28 Oct 2026",
    src: "/images/photomall/photomall_political_campaign_kadapa.webp",
    previewSrc: "/images/photomall/photomall_political_campaign_kadapa.webp",
    thumbSrc: "/images/photomall/photomall_political_campaign_kadapa.webp",
    aspectRatio: "landscape",
    tags: ["Crowd", "Wide Angle", "Atmosphere", "Rayalaseema"],
    cameraExif: {
      camera: "Canon EOS R5",
      lens: "RF 15-35mm F2.8L IS USM",
      focalLength: "18mm",
      aperture: "f/5.6",
      iso: "160",
      shutter: "1/640s",
    },
    clientEventCode: "7287",
    isPublicHighlight: true,
  },
  {
    id: "CGP-POL-04",
    title: "Drone Aerial View of Kadapa Public Ground Rally",
    category: "political",
    categoryLabel: "Aerial Cinematography",
    categoryTelugu: "డ్రోన్ ఏరియల్ వ్యూ",
    subEvent: "Crowd Documentation",
    eventTitle: "Kadapa Mega Assembly Constituency Rally",
    location: "Kadapa Municipal Stadium",
    date: "28 Oct 2026",
    src: "/images/photomall/photomall_political_campaign_kadapa.webp",
    previewSrc: "/images/photomall/photomall_political_campaign_kadapa.webp",
    thumbSrc: "/images/photomall/photomall_political_campaign_kadapa.webp",
    aspectRatio: "landscape",
    tags: ["Drone", "Aerial", "Public Stadium", "Assembly"],
    cameraExif: {
      camera: "DJI Mavic 3 Pro",
      lens: "24mm Hasselblad F2.8",
      focalLength: "24mm",
      aperture: "f/4.0",
      iso: "100",
      shutter: "1/1250s",
    },
    clientEventCode: "7287",
    isPublicHighlight: true,
  },

  // 3. Traditional Functions
  {
    id: "CGP-FUN-01",
    title: "Traditional Half-Saree Ceremony Pooja & Blessing",
    category: "functions",
    categoryLabel: "Half-Saree Function",
    categoryTelugu: "హాఫ్ శారీ వేడుక & ఆశీర్వచనం",
    subEvent: "Pooja & Blessings",
    eventTitle: "Sahithi Langa Voni Ceremony",
    location: "Proddatur, Kadapa",
    date: "18 Sep 2026",
    src: "/images/photomall/photomall_traditional_function_kadapa.webp",
    previewSrc: "/images/photomall/photomall_traditional_function_kadapa.webp",
    thumbSrc: "/images/photomall/photomall_traditional_function_kadapa.webp",
    aspectRatio: "landscape",
    tags: ["Langa Voni", "Traditional", "Brass Lamps", "Family"],
    cameraExif: {
      camera: "Sony Alpha 7 IV",
      lens: "FE 50mm F1.2 GM",
      focalLength: "50mm",
      aperture: "f/1.6",
      iso: "500",
      shutter: "1/250s",
    },
    clientEventCode: "1111",
    isPublicHighlight: true,
  },
  {
    id: "CGP-FUN-02",
    title: "Golden Lamp Kuthuvilakku Auspicious Lighting",
    category: "functions",
    categoryLabel: "Auspicious Lighting",
    categoryTelugu: "దీపారాధన & శుభ ఘడియలు",
    subEvent: "Kuthuvilakku Lighting",
    eventTitle: "Sahithi Langa Voni Ceremony",
    location: "Proddatur, Kadapa",
    date: "18 Sep 2026",
    src: "/images/photomall/photomall_traditional_function_kadapa.webp",
    previewSrc: "/images/photomall/photomall_traditional_function_kadapa.webp",
    thumbSrc: "/images/photomall/photomall_traditional_function_kadapa.webp",
    aspectRatio: "landscape",
    tags: ["Kuthuvilakku", "Ritual", "Warm Light", "Culture"],
    cameraExif: {
      camera: "Sony Alpha 7 IV",
      lens: "FE 24-70mm F2.8 GM II",
      focalLength: "35mm",
      aperture: "f/2.2",
      iso: "640",
      shutter: "1/200s",
    },
    clientEventCode: "1111",
    isPublicHighlight: true,
  },
  {
    id: "CGP-FUN-03",
    title: "Family Candid Joy & Elders Blessing Portrait",
    category: "functions",
    categoryLabel: "Family Portrait",
    categoryTelugu: "కుటుంబ సభ్యుల ఆశీస్సులు",
    subEvent: "Family Portraits",
    eventTitle: "Sahithi Langa Voni Ceremony",
    location: "Proddatur, Kadapa",
    date: "18 Sep 2026",
    src: "/images/photomall/photomall_traditional_function_kadapa.webp",
    previewSrc: "/images/photomall/photomall_traditional_function_kadapa.webp",
    thumbSrc: "/images/photomall/photomall_traditional_function_kadapa.webp",
    aspectRatio: "landscape",
    tags: ["Family", "Grandparents", "Blessings", "Laughter"],
    cameraExif: {
      camera: "Canon EOS R5",
      lens: "RF 85mm F1.4L IS USM",
      focalLength: "85mm",
      aperture: "f/2.0",
      iso: "400",
      shutter: "1/320s",
    },
    clientEventCode: "1111",
    isPublicHighlight: true,
  },

  // 4. Commercial & Store Openings
  {
    id: "CGP-COM-01",
    title: "Grand Storefront Launch & Roadside Hoarding Unveil",
    category: "commercial",
    categoryLabel: "Commercial Launch",
    categoryTelugu: "షోరూమ్ ప్రారంభోత్సవం & హోర్డింగ్",
    subEvent: "Outdoor Hoardings",
    eventTitle: "Sri Balaji Jewellery Grand Showroom Launch",
    location: "Kadapa Main Bazaar",
    date: "14 Aug 2026",
    src: "/images/roadside-jewellery-hoarding-proddatur.webp",
    previewSrc: "/images/roadside-jewellery-hoarding-proddatur.webp",
    thumbSrc: "/images/roadside-jewellery-hoarding-proddatur.webp",
    aspectRatio: "landscape",
    tags: ["Inauguration", "Jewellery", "Store Opening", "Commercial"],
    cameraExif: {
      camera: "Canon EOS R5",
      lens: "RF 24-70mm F2.8L IS USM",
      focalLength: "28mm",
      aperture: "f/5.6",
      iso: "100",
      shutter: "1/500s",
    },
    clientEventCode: "9999",
    isPublicHighlight: true,
  },
  {
    id: "CGP-COM-02",
    title: "Urban Pole Kiosks & Road Median Night Display",
    category: "commercial",
    categoryLabel: "Outdoor Signage",
    categoryTelugu: "పోల్ కియోస్క్ & నైట్ సైనేజ్ డిస్‌ప్లే",
    subEvent: "Outdoor Hoardings",
    eventTitle: "Kadapa City Outdoor Signage Documentation",
    location: "RIMS Road, Kadapa",
    date: "12 Aug 2026",
    src: "/images/pole-kiosk-median-advertising-night.webp",
    previewSrc: "/images/pole-kiosk-median-advertising-night.webp",
    thumbSrc: "/images/pole-kiosk-median-advertising-night.webp",
    aspectRatio: "landscape",
    tags: ["Night Photography", "Long Exposure", "Pole Kiosk", "Median"],
    cameraExif: {
      camera: "Sony Alpha 7 IV",
      lens: "FE 16-35mm F2.8 GM",
      focalLength: "24mm",
      aperture: "f/8.0",
      iso: "100",
      shutter: "4.0s",
    },
    clientEventCode: "9999",
    isPublicHighlight: true,
  },
];

export const PHOTOGRAPHY_SERVICES = [
  {
    id: "srv-wedding",
    title: "Wedding & Reception Cinematography",
    teluguTitle: "వెడ్డింగ్ & రిసెప్షన్ సినిమాటోగ్రఫీ",
    description: "Candid photography, traditional rituals coverage, cinematic 4K video teaser, live LED drone feed, and handcrafted Karizma albums.",
    highlights: ["2 Full-Frame Camera Setup", "Cinematic Drone Aerial Shots", "Traditional & Candid Team", "Fast 48-Hour Instagram Teaser"],
    icon: "Heart",
    startingRate: "Starting ₹25,000",
  },
  {
    id: "srv-political",
    title: "Political Campaign & Rally Coverage",
    teluguTitle: "రాజకీయ ప్రచారాలు, సభలు & రోడ్‌షోలు",
    description: "Fast-turnaround high-impact photography for public rallies, open-top vehicle roadshows, constituency meetings, and social media reels.",
    highlights: ["Same-Day Social Media Delivery", "Ultra-Wide Crowd Coverage", "Drone Video Aerials", "Press Release Ready High-Res JPEGs"],
    icon: "Megaphone",
    startingRate: "Day Package from ₹15,000",
  },
  {
    id: "srv-functions",
    title: "Traditional Ceremonies & Birthdays",
    teluguTitle: "హాఫ్ శారీ, గృహప్రవేశం, పుట్టినరోజులు",
    description: "Complete photo and video documentation for half-saree functions, cradle ceremonies, housewarmings, and milestone family celebrations.",
    highlights: ["Pooja & Ritual Closeups", "Family Portraits with Elders", "Festive Atmosphere Lighting", "Custom Table-top Photo Frames"],
    icon: "Sparkles",
    startingRate: "Starting ₹10,000",
  },
  {
    id: "srv-commercial",
    title: "Store Openings & Commercial Photography",
    teluguTitle: "షాప్ ఓపెనింగ్స్ & కమర్షియల్ ఫోటోగ్రఫీ",
    description: "High-definition architectural, retail showroom, hoarding billboard documentation, and product catalog photography.",
    highlights: ["Day & Night Long-Exposures", "Architectural Perspective Correction", "Social Media & Hoarding Ready", "Printed Portfolio Booklets"],
    icon: "Building",
    startingRate: "Starting ₹8,000",
  },
];

export const PHOTOMALL_FAQS = [
  {
    q: "How does online photo selection work for our wedding album?",
    a: "It's simple and fast! Enter your private 4-digit Event PIN to unlock your event. Tap the '❤️ Select for Album' button on your favorite shots. Once you reach your target (e.g. 80 photos), tap 'Send to WhatsApp'. Your selected photo numbers will be sent directly to our workshop desk, and we start designing your album immediately.",
  },
  {
    q: "How long does City Grafix take to deliver the printed Karizma album?",
    a: "Because we print and bind albums in our own Kadapa workshop without outsourcing to third-party labs in Hyderabad or Chennai, standard delivery is just 5 to 7 working days after you approve the digital layout.",
  },
  {
    q: "Can we order individual Acrylic Wall Frames or Canvas Prints of specific photos?",
    a: "Yes! In City PhotoMall, click on any photo to open the fullscreen view and tap 'Order Print / Frame'. You can order 12×18, 16×24, 20×30, or custom size 3D acrylic wall mounts fabricated directly at our workshop.",
  },
  {
    q: "How soon do we receive political campaign and rally photos?",
    a: "For political rallies, press meets, and roadshows, we provide an expedited same-day batch within 2 to 4 hours of the event ending for your social media team, press releases, and WhatsApp broadcasts.",
  },
];
