/**
 * Single Authoritative Source of Truth for CV. Asia Plastik Corporate Information.
 * Consolidates contact numbers, addresses, social channels, and operating hours
 * across all web components, pages, and API routes.
 */

export interface CompanySocialLink {
  platform: "Facebook" | "Instagram" | "YouTube" | "TikTok" | "LinkedIn" | "WhatsApp";
  name: string;
  href: string;
  isExternal: boolean;
}

export const companyConfig = {
  name: "Asia Plastik",
  legalName: "CV. ASIA PLASTIK",
  websiteUrl: "https://asiaplastik.com",
  establishedYear: 1985,
  isoCertification: "ISO 9001:2015",

  tagline: {
    id: "Solusi Manufaktur & Cetak Plastik Industri Presisi Tinggi",
    en: "Precision High-Grade Plastic Injection & Blow Moulding Manufacturing",
    zh: "高精度工业塑料注塑成型与中空吹塑制造解决方案",
  },

  description: {
    id: "Produsen manufaktur kemasan plastik terkemuka: Injection Molding, Blow Molding hingga 500 liter, dan Cetakan Kustom sejak 1985 berstandar ISO 9001:2015.",
    en: "Pioneering plastic manufacturing company: High-precision Injection Molding, Blow Molding up to 500 liters, and In-house Tooling since 1985.",
    zh: "自1985年以来的专业工业塑料制品制造商：高精度注塑、最大500升中空吹塑及模具自主研发，符合ISO 9001:2015标准。",
  },

  address: {
    street: "Jalan Rungkut Industri III/27A",
    city: "Surabaya",
    province: "Jawa Timur",
    country: "Indonesia",
    postalCode: "60293",
    formatted: {
      id: "Jalan Rungkut Industri III/27A, Surabaya - Indonesia, Kode Pos 60293",
      en: "Jalan Rungkut Industri III/27A, Surabaya - Indonesia, Postal Code 60293",
      zh: "Jalan Rungkut Industri III/27A, 泗水 - 印度尼西亚, 邮编 60293",
    },
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=-7.3352907,112.7565049+(CV+Asia+Plastik)&z=16&output=embed",
    googleMapsUrl: "https://maps.app.goo.gl/TUfEKgp7Mpuw8ntN8",
  },

  contact: {
    // Primary Office Lines
    phone: "+6231 8433078",
    phoneDisplay: "+6231 8433078",
    phoneAdditional: ["+6231 8439998", "+6231 8439145"],
    phoneFormattedFull: "+6231 8433078 - 8439998 - 8439145",
    fax: "+6231 8492989",
    email: "marketing@asiaplastik.com",

    // WhatsApp Contact Points
    whatsapp: {
      // Primary Corporate & Consultation Number (Footer & General Inquiry)
      primaryNumber: "628113229988",
      primaryDisplay: "+62 811-322-9988",

      // Fast-Response Sales Admin Number (Live Chat & Floating Quick Action)
      salesNumber: "6285142000027",
      salesDisplay: "+62 851-4200-0027",

      // Helper function to build WhatsApp chat link
      getChatUrl(
        numberType: "primary" | "sales" = "primary",
        message?: string
      ): string {
        const num =
          numberType === "sales"
            ? companyConfig.contact.whatsapp.salesNumber
            : companyConfig.contact.whatsapp.primaryNumber;
        const defaultMsg =
          "Halo Asia Plastik, saya ingin berkonsultasi mengenai produk dan pemesanan kemasan plastik.";
        return `https://wa.me/${num}?text=${encodeURIComponent(message || defaultMsg)}`;
      },
    },

    operatingHours: {
      id: "Senin - Sabtu: 08.00 - 16.30 WIB",
      en: "Monday - Saturday: 08:00 AM - 04:30 PM (WIB)",
      zh: "周一至周六：08:00 - 16:30 (印尼西部时间 WIB)",
    },
  },

  socialMedia: {
    facebook: "https://www.facebook.com/asiaplastik/?locale=id_ID",
    instagram: "https://www.instagram.com/asia_plastik?igsh=ZWpjNG5zcm9rbW42",
    youtube: "https://www.youtube.com/@AsiaPlastik",
    tiktok: "https://www.tiktok.com/@asiaplastik",
    linkedin:
      "https://www.linkedin.com/company/asia-plastik-plastic-packaging-manufacturing/?originalSubdomain=id",
  },

  certifications: [
    "ISO 9001:2015 Quality Management System",
    "Food Grade Safety Compliance",
    "Eco-Friendly Recyclable Resins",
  ],
} as const;
