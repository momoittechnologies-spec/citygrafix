export interface PhotoItem {
  id: string; // e.g. "CGP-WED-01"
  title: string;
  category: "wedding" | "political" | "functions" | "commercial";
  categoryLabel: string;
  categoryTelugu: string;
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
  albumLimit: number; // Maximum photos for physical Karizma album (e.g. 80)
  description: string;
  photoIds: string[];
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
};

export const PHOTOMALL_CATEGORIES = [
  { key: "all", label: "All Works", telugu: "అన్ని ఈవెంట్స్", count: 24 },
  { key: "wedding", label: "Weddings & Receptions", telugu: "పెళ్లిళ్లు & రిసెప్షన్స్", count: 8 },
  { key: "political", label: "Political Campaigns & Rallies", telugu: "రాజకీయ సభలు & రోడ్‌షోలు", count: 6 },
  { key: "functions", label: "Traditional Ceremonies", telugu: "హాఫ్ శారీ & శుభకార్యాలు", count: 6 },
  { key: "commercial", label: "Store Openings & Commercial", telugu: "షాప్ ఓపెనింగ్స్ & కమర్షియల్", count: 4 },
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
    description: "Traditional Telugu Muhurtham, Talambralu, Kanyadanam, and grand evening reception coverage.",
    photoIds: ["CGP-WED-01", "CGP-WED-02", "CGP-WED-03", "CGP-WED-04", "CGP-WED-05", "CGP-WED-06", "CGP-WED-07", "CGP-WED-08"],
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
    description: "High-energy open vehicle roadshow, podium speech, public gathering, and press photo documentation.",
    photoIds: ["CGP-POL-01", "CGP-POL-02", "CGP-POL-03", "CGP-POL-04", "CGP-POL-05", "CGP-POL-06"],
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
    description: "Traditional South Indian half-saree celebration, kuthuvilakku lighting, and family candid moments.",
    photoIds: ["CGP-FUN-01", "CGP-FUN-02", "CGP-FUN-03", "CGP-FUN-04", "CGP-FUN-05", "CGP-FUN-06"],
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
    description: "Ribbon cutting, VIP lamp lighting, retail interior showcase, and outdoor hoardings display.",
    photoIds: ["CGP-COM-01", "CGP-COM-02", "CGP-COM-03", "CGP-COM-04"],
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
    title: "Talambralu Joy & Golden Showers",
    category: "wedding",
    categoryLabel: "Wedding Rituals",
    categoryTelugu: "తలంబ్రాల వేడుక",
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
    title: "Bride Fine-Art Gold Jewellery Silhouette",
    category: "wedding",
    categoryLabel: "Bridal Portrait",
    categoryTelugu: "పెళ్లికూతురు అలంకరణ",
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

  // 2. Political Campaigns & Public Rallies
  {
    id: "CGP-POL-01",
    title: "Massive Seven Roads Roadshow & Public Salute",
    category: "political",
    categoryLabel: "Political Campaign",
    categoryTelugu: "సెవెన్ రోడ్స్ సర్కిల్ రోడ్‌షో",
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
    title: "Keynote Address on Main Dais",
    category: "political",
    categoryLabel: "Dais Keynote",
    categoryTelugu: "ప్రసంగం & వేదిక దృశ్యాలు",
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

  // 3. Traditional Functions
  {
    id: "CGP-FUN-01",
    title: "Traditional Half-Saree Ceremony Pooja & Blessing",
    category: "functions",
    categoryLabel: "Half-Saree Function",
    categoryTelugu: "హాఫ్ శారీ వేడుక & ఆశీర్వచనం",
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
    title: "Golden Lamp Kuthuvilakku Lighting Ceremony",
    category: "functions",
    categoryLabel: "Auspicious Lighting",
    categoryTelugu: "దీపారాధన & శుభ ఘడియలు",
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

  // 4. Commercial & Store Openings
  {
    id: "CGP-COM-01",
    title: "Grand Storefront Launch & Roadside Hoarding Unveil",
    category: "commercial",
    categoryLabel: "Commercial Launch",
    categoryTelugu: "షోరూమ్ ప్రారంభోత్సవం & హోర్డింగ్",
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
    categoryLabel: "Outdoor Signage Photography",
    categoryTelugu: "పోల్ కియోస్క్ & నైట్ సైనేజ్ డిస్‌ప్లే",
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
