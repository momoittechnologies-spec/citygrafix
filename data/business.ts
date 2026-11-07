export interface BusinessInfo {
  name: string;
  shortName: string;
  tagline: string;
  mottos: string[];
  establishedYear: number;
  experienceYears: string;
  rating: number;
  reviewCount: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  landmarks: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  googleMapsUrl: string;
  hours: {
    weekdays: string;
    sunday: string;
    workshopHours: string;
    summary: string;
  };
  contacts: {
    primaryOrders: {
      number: string;
      displayNumber: string;
      type: string;
      purpose: string;
      whatsappUrl: string;
      callUrl: string;
    };
    signageStructural: {
      number: string;
      displayNumber: string;
      type: string;
      purpose: string;
      whatsappUrl: string;
      callUrl: string;
    };
    receptionDesk: {
      number: string;
      displayNumber: string;
      type: string;
      purpose: string;
      whatsappUrl: string;
      callUrl: null; // WhatsApp only
    };
    email: string;
  };
  turnaroundTimes: {
    jumboXerox: string;
    personalizedGifts: string;
    starFlex: string;
    autoPublicity: string;
    signage3d: string;
  };
  supportedFormats: string[];
  socialLinks: {
    instagram: string;
    youtube: string;
    googleReviews: string;
  };
  techPartner: {
    name: string;
    url: string;
  };
  website: string;
}

export const BUSINESS_DATA: BusinessInfo = {
  name: "City Grafix Kadapa",
  shortName: "City Grafix",
  tagline: "Complete Printing Solutions in Kadapa",
  mottos: [
    "Quality Printing",
    "Creative Designing",
    "Affordable Prices",
    "On-Time Delivery",
    "Direct Workshop Production (Zero Middlemen)",
  ],
  establishedYear: 2014,
  experienceYears: "10+ Years",
  rating: 5.0,
  reviewCount: "500+",
  address: {
    line1: "#21/135, Opp. Tirumala Hospital",
    line2: "Beside New AF Automart Street",
    city: "Kadapa",
    state: "Andhra Pradesh",
    pincode: "516001",
    full: "#21/135, Opp. Tirumala Hospital, Beside New AF Automart Street, Kadapa, Andhra Pradesh – 516001, India",
  },
  landmarks: [
    "Directly opposite Tirumala Hospital",
    "Beside New AF Automart Street",
    "Near Seven Roads Circle & Ganagapeta commercial corridor",
  ],
  coordinates: {
    lat: 14.4673,
    lng: 78.8242,
  },
  googleMapsUrl: "https://maps.google.com/?q=City+Grafix+Kadapa+Opp+Tirumala+Hospital",
  hours: {
    weekdays: "Monday to Saturday: 09:30 AM – 09:30 PM",
    sunday: "Sunday: 10:00 AM – 06:00 PM",
    workshopHours: "Workshop production active until 10:00 PM",
    summary: "Open 7 Days a Week",
  },
  contacts: {
    primaryOrders: {
      number: "+917287867584",
      displayNumber: "72878 67584",
      type: "Phone Calls & WhatsApp",
      purpose: "New Orders, Flex Printing, Urgent Same-Day Jobs & Artwork Drops",
      whatsappUrl: "https://wa.me/917287867584",
      callUrl: "tel:+917287867584",
    },
    signageStructural: {
      number: "+919581764937",
      displayNumber: "95817 64937",
      type: "Phone Calls & WhatsApp",
      purpose: "3D LED Glow Signboards, Acrylic Letters & Architectural Site Surveys",
      whatsappUrl: "https://wa.me/919581764937",
      callUrl: "tel:+919581764937",
    },
    receptionDesk: {
      number: "+917601043674",
      displayNumber: "76010 43674",
      type: "WhatsApp ONLY (No Phone Calls)",
      purpose: "General Reception, Order Status Updates & Digital File Receipts",
      whatsappUrl: "https://wa.me/917601043674",
      callUrl: null,
    },
    email: "citygrafix5@gmail.com",
  },
  turnaroundTimes: {
    jumboXerox: "15 to 30 Minutes (Instant while you wait)",
    personalizedGifts: "1 to 2 Hours (Same-day dispatch)",
    starFlex: "2 to 4 Hours (Express turnaround)",
    autoPublicity: "24 to 48 Hours",
    signage3d: "2 to 4 Days (Includes 48-hr electrical burn-in testing)",
  },
  supportedFormats: [
    "CorelDRAW (.cdr - any version)",
    "Adobe Photoshop (.psd)",
    "Adobe Acrobat PDF (.pdf)",
    "TIFF / TIF (.tiff)",
    "High-Resolution JPEG / JPG",
    "AutoCAD Drawing (.dwg / .dxf)",
  ],
  socialLinks: {
    instagram: "https://www.instagram.com/citygrafix1/",
    youtube: "https://www.youtube.com/@Citygrafix1",
    googleReviews: "https://www.reviewsmart.online/r/citygrafix",
  },
  techPartner: {
    name: "MOMO IT TECHNOLOGIES",
    url: "https://www.momoittechnologies.com",
  },
  website: "https://www.citygrafix.in",
};

export const getWhatsAppLink = (message: string, line: "orders" | "signage" | "reception" = "orders"): string => {
  const number = line === "signage" 
    ? "919581764937" 
    : line === "reception" 
    ? "917601043674" 
    : "917287867584";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};
