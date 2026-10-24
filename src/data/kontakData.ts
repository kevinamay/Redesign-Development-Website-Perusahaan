import { companyConfig } from "@/data/companyConfig";
import { Language } from "@/data/translations";

export interface LocationConfig {
  id: string;
  badge: string;
  title: string;
  desc: string;
  mapEmbedSrc: string;
  mapsUrl: string;
  badgeColorClass: string;
}

export interface KontakContent {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  eyebrow: string;
  title: string;
  officeAddressLabel: string;
  officeAddress: string;
  contactInfoLabel: string;
  phone: string;
  fax: string;
  email: string;
  website: string;
  operatingHoursLabel: string;
  operatingHours: string;
  formHeader: string;
  formSubtitle: string;
  fieldName: string;
  fieldPhone: string;
  fieldEmail: string;
  fieldMessage: string;
  placeholderName: string;
  placeholderPhone: string;
  placeholderEmail: string;
  placeholderMessage: string;
  submitButton: string;
  successTitle: string;
  successDesc: string;
  resetButton: string;
  locationsSectionTitle: string;
  locationsSectionSubtitle: string;
  mapOpenButton: string;
  locations: LocationConfig[];
}

export const kontakData: Record<Language, KontakContent> = {
  id: {
    breadcrumbHome: "Beranda",
    breadcrumbCurrent: "Kontak",
    eyebrow: "HUBUNGI KAMI",
    title: "Kontak",
    officeAddressLabel: "ALAMAT KANTOR",
    officeAddress: companyConfig.address.formatted.id,
    contactInfoLabel: "INFORMASI KONTAK",
    phone: companyConfig.contact.phoneFormattedFull,
    fax: companyConfig.contact.fax,
    email: companyConfig.contact.email,
    website: companyConfig.websiteUrl.replace(/^https?:\/\//, ""),
    operatingHoursLabel: "JAM OPERASIONAL",
    operatingHours: companyConfig.contact.operatingHours.id,
    formHeader: "Form Kontak",
    formSubtitle:
      "Mohon isi form dibawah ini untuk menghubungi kami. Kami berusaha menjawab secepatnya.",
    fieldName: "Nama Anda",
    fieldPhone: "No Telepon",
    fieldEmail: "Alamat Email",
    fieldMessage: "Masukkan Pesan Anda",
    placeholderName: "Contoh: Budi Santoso / PT. Makmur Jaya",
    placeholderPhone: "Contoh: 081234567890",
    placeholderEmail: "Contoh: email@perusahaan.com",
    placeholderMessage:
      "Tuliskan spesifikasi produk plastik, jumlah pesanan, atau kebutuhan kerjasama Anda di sini...",
    submitButton: "KIRIM DATA",
    successTitle: "Pesan Anda Berhasil Terkirim!",
    successDesc:
      "Terima kasih telah menghubungi Asia Plastik. Tim representatif kami akan segera meninjau dan merespons pesan Anda.",
    resetButton: "Kirim Pesan Lain",
    locationsSectionTitle: "Kunjungi Lokasi Kami",
    locationsSectionSubtitle:
      "Fasilitas produksi modern dan kantor operasional kami di Kawasan Industri Rungkut Surabaya siap menyambut Anda.",
    mapOpenButton: "Buka di Google Maps",
    locations: [
      {
        id: "lokasi-1",
        badge: "Kantor & Pabrik Utama",
        title: `Kantor & Pabrik Utama (${companyConfig.legalName})`,
        desc: companyConfig.address.formatted.id,
        mapEmbedSrc: companyConfig.address.googleMapsEmbedUrl,
        mapsUrl: companyConfig.address.googleMapsUrl,
        badgeColorClass:
          "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      },
      {
        id: "lokasi-2",
        badge: "Kantor, Pabrik dan Retail",
        title: "Kantor, Pabrik dan Retail (PT. Asia Plastik)",
        desc: "Kawasan Industri Rungkut, Surabaya - Jawa Timur, Indonesia",
        mapEmbedSrc:
          "https://maps.google.com/maps?q=-7.3361184,112.7611569+(PT.+Asia+Plastik)&z=16&output=embed",
        mapsUrl: "https://maps.app.goo.gl/Fmfe9x2CxzNP7FJTA",
        badgeColorClass:
          "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
      },
    ],
  },
  en: {
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Contact",
    eyebrow: "CONTACT US",
    title: "Contact",
    officeAddressLabel: "OFFICE ADDRESS",
    officeAddress: companyConfig.address.formatted.en,
    contactInfoLabel: "CONTACT INFORMATION",
    phone: companyConfig.contact.phoneFormattedFull,
    fax: companyConfig.contact.fax,
    email: companyConfig.contact.email,
    website: companyConfig.websiteUrl.replace(/^https?:\/\//, ""),
    operatingHoursLabel: "OPERATING HOURS",
    operatingHours: companyConfig.contact.operatingHours.en,
    formHeader: "Contact Form",
    formSubtitle:
      "Please fill out the form below to reach us. We will get back to you as soon as possible.",
    fieldName: "Your Name",
    fieldPhone: "Phone Number",
    fieldEmail: "Email Address",
    fieldMessage: "Enter Your Message",
    placeholderName: "e.g. John Doe / Global Packaging Ltd.",
    placeholderPhone: "e.g. +62 812 3456 7890",
    placeholderEmail: "e.g. contact@company.com",
    placeholderMessage:
      "Describe your product specifications, volume requirements, or business collaboration inquiry...",
    submitButton: "SUBMIT MESSAGE",
    successTitle: "Your Message Has Been Sent!",
    successDesc:
      "Thank you for reaching out to Asia Plastik. Our sales and engineering team will respond promptly.",
    resetButton: "Send Another Message",
    locationsSectionTitle: "Visit Our Locations",
    locationsSectionSubtitle:
      "Our state-of-the-art manufacturing facilities and corporate offices in SIER Industrial Estate Surabaya.",
    mapOpenButton: "Open in Google Maps",
    locations: [
      {
        id: "location-1",
        badge: "Head Office & Main Plant",
        title: `Head Office & Main Plant (${companyConfig.legalName})`,
        desc: companyConfig.address.formatted.en,
        mapEmbedSrc: companyConfig.address.googleMapsEmbedUrl,
        mapsUrl: companyConfig.address.googleMapsUrl,
        badgeColorClass:
          "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      },
      {
        id: "location-2",
        badge: "Office, Factory & Retail",
        title: "Office, Factory & Retail (PT. Asia Plastik)",
        desc: "Rungkut Industrial Estate, Surabaya - East Java, Indonesia",
        mapEmbedSrc:
          "https://maps.google.com/maps?q=-7.3361184,112.7611569+(PT.+Asia+Plastik)&z=16&output=embed",
        mapsUrl: "https://maps.app.goo.gl/Fmfe9x2CxzNP7FJTA",
        badgeColorClass:
          "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
      },
    ],
  },
  zh: {
    breadcrumbHome: "首页",
    breadcrumbCurrent: "联系我们",
    eyebrow: "联系我们",
    title: "联系方式",
    officeAddressLabel: "总部工厂地址",
    officeAddress: companyConfig.address.formatted.zh,
    contactInfoLabel: "联络方式",
    phone: companyConfig.contact.phoneFormattedFull,
    fax: companyConfig.contact.fax,
    email: companyConfig.contact.email,
    website: companyConfig.websiteUrl.replace(/^https?:\/\//, ""),
    operatingHoursLabel: "工作时间",
    operatingHours: companyConfig.contact.operatingHours.zh,
    formHeader: "在线咨询留言",
    formSubtitle:
      "请填写以下表格与我们取得联系，我们将尽快回复您的需求。",
    fieldName: "您的姓名",
    fieldPhone: "联系电话",
    fieldEmail: "电子邮箱",
    fieldMessage: "请输入您的留言与需求",
    placeholderName: "例如：陈先生 / 某某贸易企业",
    placeholderPhone: "例如：+62 812 3456 7890",
    placeholderEmail: "例如：business@company.com",
    placeholderMessage:
      "请详述您的塑料制品规格需求、预计订购量或战略合作意向...",
    submitButton: "提交信息",
    successTitle: "您的咨询已成功提交！",
    successDesc:
      "感谢您联络亚洲塑料。我们的大客户专员将尽快与您沟通对接。",
    resetButton: "再次留言",
    locationsSectionTitle: "参观我们的厂区基地",
    locationsSectionSubtitle:
      "欢迎莅临我们位于泗水隆库特工业园区的现代化模具与注塑吹塑制造基地。",
    mapOpenButton: "在谷歌地图中打开",
    locations: [
      {
        id: "location-1",
        badge: "总部办公与主厂区",
        title: `总部办公大楼及一号制造基地 (${companyConfig.legalName})`,
        desc: companyConfig.address.formatted.zh,
        mapEmbedSrc: companyConfig.address.googleMapsEmbedUrl,
        mapsUrl: companyConfig.address.googleMapsUrl,
        badgeColorClass:
          "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      },
      {
        id: "location-2",
        badge: "办公、工厂与零售展厅",
        title: "办公室、工厂与零售部 (PT. Asia Plastik)",
        desc: "Kawasan Industri Rungkut, Surabaya - Jawa Timur, Indonesia",
        mapEmbedSrc:
          "https://maps.google.com/maps?q=-7.3361184,112.7611569+(PT.+Asia+Plastik)&z=16&output=embed",
        mapsUrl: "https://maps.app.goo.gl/Fmfe9x2CxzNP7FJTA",
        badgeColorClass:
          "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
      },
    ],
  },
};
