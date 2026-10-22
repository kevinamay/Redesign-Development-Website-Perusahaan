"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MapPin,
  Phone,
  Printer,
  Mail,
  Globe,
  Send,
  Home,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Building2,
  Clock,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "@/data/translations";
import { companyConfig } from "@/data/companyConfig";

export interface LocationConfig {
  id: string;
  badge: string;
  title: string;
  desc: string;
  mapEmbedSrc: string;
  mapsUrl: string;
  badgeColorClass: string;
}

export default function KontakClientContent() {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({
    nama: "",
    telepon: "",
    email: "",
    pesan: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Localized copy with single source of truth from companyConfig
  const content = {
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
      ] as LocationConfig[],
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
      ] as LocationConfig[],
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
      ] as LocationConfig[],
    },
  }[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ nama: "", telepon: "", email: "", pesan: "" });
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300">
      {/* 1. Global Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400"
            >
              <Link
                href="/"
                className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1.5 transition-colors"
              >
                <Home className="w-3.5 h-3.5" />
                <span>{content.breadcrumbHome}</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                {content.breadcrumbCurrent}
              </span>
            </nav>
          </div>
        </div>

        {/* 2. SPLIT-SCREEN PAGE HEADER & CONTACT INFO + FORM SECTION */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* LEFT SIDE: Deep Dark Professional Container Matching Footer (#1e3a5f) */}
              <div className="lg:col-span-5 bg-[#1e3a5f] text-white p-8 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col justify-between border border-blue-900/60">
                {/* Subtle Ambient Decorative Glows */}
                <div
                  className="absolute -top-24 -left-24 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-24 -right-24 w-72 h-72 bg-sky-400/15 rounded-full blur-3xl pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Eyebrow */}
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-blue-300" />
                    <span className="text-blue-300 font-bold tracking-widest text-sm uppercase">
                      {content.eyebrow}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl lg:text-5xl font-extrabold mb-10 tracking-tight text-white">
                    {content.title}
                  </h1>

                  {/* Contact List */}
                  <div className="space-y-8">
                    {/* ALAMAT KANTOR */}
                    <div className="flex items-start gap-4 group">
                      <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-1.5">
                          {content.officeAddressLabel}
                        </h2>
                        <p className="text-blue-100 leading-relaxed font-normal text-sm sm:text-base">
                          {content.officeAddress}
                        </p>
                      </div>
                    </div>

                    {/* INFORMASI KONTAK */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-blue-200">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-3">
                          {content.contactInfoLabel}
                        </h2>

                        <div className="space-y-3.5">
                          {/* Phone */}
                          <div className="flex items-start gap-3 text-blue-100 group">
                            <Phone className="w-4 h-4 text-blue-300 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                            <div className="text-sm sm:text-base">
                              <span className="text-xs text-blue-200/80 block mb-0.5">Telepon Kantor</span>
                              <a
                                href={`tel:${companyConfig.contact.phone.replace(/\s+/g, "")}`}
                                className="hover:text-white hover:underline transition-colors block font-medium"
                              >
                                {content.phone}
                              </a>
                            </div>
                          </div>

                          {/* Fax */}
                          <div className="flex items-start gap-3 text-blue-100">
                            <Printer className="w-4 h-4 text-blue-300 shrink-0 mt-1" />
                            <div className="text-sm sm:text-base">
                              <span className="text-xs text-blue-200/80 block mb-0.5">Fax</span>
                              <span className="font-medium text-white">{content.fax}</span>
                            </div>
                          </div>

                          {/* Email */}
                          <div className="flex items-start gap-3 text-blue-100 group">
                            <Mail className="w-4 h-4 text-blue-300 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                            <div className="text-sm sm:text-base">
                              <span className="text-xs text-blue-200/80 block mb-0.5">Email Pemasaran</span>
                              <a
                                href={`mailto:${content.email}`}
                                className="hover:text-white hover:underline transition-colors block font-medium text-blue-200 hover:text-white"
                              >
                                {content.email}
                              </a>
                            </div>
                          </div>

                          {/* Website */}
                          <div className="flex items-start gap-3 text-blue-100 group">
                            <Globe className="w-4 h-4 text-blue-300 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                            <div className="text-sm sm:text-base">
                              <span className="text-xs text-blue-200/80 block mb-0.5">Situs Web Resmi</span>
                              <a
                                href={companyConfig.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white hover:underline transition-colors inline-flex items-center gap-1.5 font-medium"
                              >
                                <span>{content.website}</span>
                                <ExternalLink className="w-3.5 h-3.5 text-blue-300" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* JAM OPERASIONAL BADGE */}
                    <div className="pt-4 border-t border-blue-900/60 flex items-center gap-3 text-xs text-blue-200">
                      <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>
                        <strong className="text-white mr-1">{content.operatingHoursLabel}:</strong>
                        {content.operatingHours}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Callout Bottom Banner */}
                <div className="relative z-10 mt-10 pt-6 border-t border-blue-900/60">
                  <a
                    href={companyConfig.contact.whatsapp.getChatUrl(
                      "sales",
                      "Halo Asia Plastik, saya ingin berkonsultasi mengenai produk dan pemesanan plastik"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-[#142944] hover:bg-[#0f2138] border border-blue-800/60 hover:border-emerald-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <p className="text-xs text-blue-200/80">Butuh respon cepat?</p>
                        <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                          WhatsApp Sales ({companyConfig.contact.whatsapp.salesDisplay})
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-blue-300 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </a>
                </div>
              </div>

              {/* RIGHT SIDE: Contact Form in Clean White Card */}
              <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col justify-between transition-colors">
                <div>
                  {/* Header */}
                  <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">
                    {content.formHeader}
                  </h2>

                  {/* Subtitle */}
                  <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-sm sm:text-base">
                    {content.formSubtitle}
                  </p>

                  {isSubmitted ? (
                    <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-8 text-center my-6 animate-in fade-in zoom-in-95 duration-300">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {content.successTitle}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto mb-6">
                        {content.successDesc}
                      </p>
                      <button
                        onClick={handleReset}
                        className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold px-6 py-3 rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-all text-sm cursor-pointer"
                      >
                        {content.resetButton}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Nama Anda */}
                      <div>
                        <label
                          htmlFor="nama"
                          className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2"
                        >
                          {content.fieldName} <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="nama"
                          type="text"
                          required
                          value={formData.nama}
                          onChange={(e) =>
                            setFormData({ ...formData, nama: e.target.value })
                          }
                          placeholder={content.placeholderName}
                          className="w-full bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 text-sm sm:text-base"
                        />
                      </div>

                      {/* 2-Column row for Phone & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* No Telepon */}
                        <div>
                          <label
                            htmlFor="telepon"
                            className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2"
                          >
                            {content.fieldPhone} <span className="text-rose-500">*</span>
                          </label>
                          <input
                            id="telepon"
                            type="tel"
                            required
                            value={formData.telepon}
                            onChange={(e) =>
                              setFormData({ ...formData, telepon: e.target.value })
                            }
                            placeholder={content.placeholderPhone}
                            className="w-full bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 text-sm sm:text-base"
                          />
                        </div>

                        {/* Alamat Email */}
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2"
                          >
                            {content.fieldEmail} <span className="text-rose-500">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            placeholder={content.placeholderEmail}
                            className="w-full bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 text-sm sm:text-base"
                          />
                        </div>
                      </div>

                      {/* Masukkan Pesan Anda */}
                      <div>
                        <label
                          htmlFor="pesan"
                          className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2"
                        >
                          {content.fieldMessage} <span className="text-rose-500">*</span>
                        </label>
                        <textarea
                          id="pesan"
                          required
                          rows={4}
                          value={formData.pesan}
                          onChange={(e) =>
                            setFormData({ ...formData, pesan: e.target.value })
                          }
                          placeholder={content.placeholderMessage}
                          className="w-full bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 text-sm sm:text-base resize-y"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 active:scale-[0.99] cursor-pointer"
                        >
                          <span>{content.submitButton}</span>
                          <Send className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                  <span>Kerahasiaan data dan spesifikasi industri Anda 100% terlindungi.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. MAPS & LOCATION SECTION */}
        <section className="bg-slate-100/70 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 py-16 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
                {content.locationsSectionTitle}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                {content.locationsSectionSubtitle}
              </p>
            </div>

            {/* 2-Column Grid for Map Locations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.locations.map((location) => (
                <div
                  key={location.id}
                  className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 flex flex-col gap-4 hover:shadow-xl transition-all duration-300"
                >
                  {/* Location Badge & Info */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${location.badgeColorClass} text-xs font-semibold mb-2`}
                      >
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{location.badge}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {location.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 flex items-start gap-1.5">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span>{location.desc}</span>
                      </p>
                    </div>
                  </div>

                  {/* Google Map Embedded Iframe */}
                  <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-inner">
                    <iframe
                      title={`Peta ${location.title}`}
                      src={location.mapEmbedSrc}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-80 rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  {/* Primary CTA Button */}
                  <a
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 dark:bg-slate-800 dark:hover:bg-blue-600 text-white font-semibold py-3.5 px-6 rounded-2xl transition-all duration-300 text-sm shadow-sm hover:shadow-md cursor-pointer group"
                  >
                    <MapPin className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" />
                    <span>{content.mapOpenButton}</span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 4. Global Footer */}
      <Footer />
    </div>
  );
}
