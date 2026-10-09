"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ChevronDown,
  HelpCircle,
  Search,
  MessageCircle,
  Mail,
  Phone,
  Home,
  ChevronRight,
  ShieldCheck,
  Package,
  Layers,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/data/translations";
import { footerData } from "@/data/homeData";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first item by default
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { lang } = useLanguage();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const pageContent = {
    id: {
      breadcrumbHome: "Beranda",
      breadcrumbCurrent: "FAQ",
      eyebrow: "PUSAT BANTUAN & INFORMASI RESMI",
      title: "Frequently Asked Questions",
      subtitle:
        "Temukan jawaban cepat seputar pemesanan grosir, spesifikasi teknis, sertifikasi Halal & Food Grade, hingga custom cetakan kemasan plastik di Asia Plastik.",
      searchPlaceholder: "Cari pertanyaan... (contoh: Halal, Grosir, MOQ, Custom)",
      categories: [
        { id: "all", label: "Semua Pertanyaan" },
        { id: "custom", label: "Custom & Desain" },
        { id: "order", label: "Pemesanan & Grosir" },
        { id: "quality", label: "Kualitas & Sertifikasi" },
        { id: "general", label: "Produk & Info Umum" },
      ],
      noResults: "Tidak ada pertanyaan yang sesuai dengan pencarian Anda.",
      resetSearch: "Reset Pencarian",
      supportBadge: "KONSULTASI LANGSUNG B2B",
      supportTitle: "Masih Memiliki Pertanyaan Lain?",
      supportDesc:
        "Tim representatif teknis dan sales kami siap membantu memberikan penawaran harga terbaik serta konsultasi spesifikasi kemasan Anda.",
      whatsappBtn: "Chat Sales via WhatsApp",
      emailBtn: "Kirim Email Resmi",
      hotlineBtn: "Hubungi Hotline Pabrik",
      faqs: [
        {
          category: "custom",
          question: "APAKAH BISA CUSTOM DENGAN DESAIN KHUSUS?",
          answer:
            "Tentu bisa. Mulai dari tahap awal ide hingga produksi, kami siap membantu membuat kemasan unik sesuai visi Anda. Tim R&D kami siap memberi masukan teknis dan desain. Pemesanan custom memerlukan kesepakatan MOQ (Minimum Order Quantity) yang bisa didiskusikan lebih lanjut.",
        },
        {
          category: "order",
          question: "APAKAH BISA ECERAN?",
          answer:
            "Ya, kami melayani pembelian eceran. Anda dapat menemukan dan membeli produk-produk berkualitas dari Asia Plastik melalui platform marketplace favorit Anda (Tokopedia dan Shopee).",
        },
        {
          category: "order",
          question: "APAKAH ADA HARGA KHUSUS UNTUK PEMBELIAN JUMLAH BESAR ATAU GROSIR?",
          answer:
            "Tentu saja. Kami menawarkan harga yang lebih kompetitif dan ekonomis khusus untuk pelanggan yang melakukan pembelian produk kemasan dalam jumlah besar atau partai grosir.",
        },
        {
          category: "order",
          question: "JIKA GROSIR, BERAPA MINIMAL ORDER UNTUK SELURUH PRODUK DI ASIA PLASTIK?",
          answer:
            "Untuk produk standar (bukan custom), pemesanan minimum adalah 2 sak. Sementara itu, untuk produk dengan desain custom, nilai MOQ (Minimum Order Quantity) akan ditentukan kemudian menyesuaikan dengan tingkat kerumitan desain.",
        },
        {
          category: "general",
          question: "DIMANA SAYA BISA MENDAPATKAN INFORMASI LEBIH LENGKAP MENGENAI PRODUK ASIA PLASTIK?",
          answer:
            "Anda dapat menghubungi tim marketing kami untuk informasi mendetail melalui berbagai saluran komunikasi, seperti email, telepon, WhatsApp, maupun melalui akun resmi Instagram Asia Plastik.",
        },
        {
          category: "quality",
          question: "APAKAH PRODUK ASIA PLASTIK SUDAH TERSERTIFIKASI HALAL?",
          answer:
            "Ya, produk kemasan kami telah mengantongi sertifikasi Halal resmi (No. Sertifikat ID00410000251901021).",
        },
        {
          category: "quality",
          question: "APAKAH PRODUK ASIA PLASTIK AMAN UNTUK KEMASAN MAKANAN DAN MINUMAN?",
          answer:
            "Sangat terjamin keamanannya. Kami menggunakan material biji plastik berkualitas yang telah bersertifikat Food Grade, sehingga sangat aman diaplikasikan sebagai wadah makanan maupun minuman.",
        },
        {
          category: "general",
          question: "APA SAJA JENIS PRODUK YANG DIJUAL OLEH ASIA PLASTIK?",
          answer:
            "Kami menyediakan beragam kemasan plastik untuk mendukung industri skala besar hingga UMKM. Kategori produk kami meliputi Botol PET, Jerigen HDPE, Toples, Keranjang, Pallet, serta peralatan kebutuhan kelautan seperti Float Ball, Clam Basket, dan perlengkapan Soft Shelled Crab.",
        },
        {
          category: "quality",
          question: "APAKAH ADA GARANSI JIKA ADA KERUSAKAN PADA PRODUK ASIA PLASTIK?",
          answer:
            "Pasti. Walaupun seluruh produk telah melalui proses Quality Control yang sangat ketat, kami siap menindaklanjuti dengan cepat jika Anda menerima produk yang tidak sesuai dengan standar kualitas kami.",
        },
      ],
    },
    en: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "FAQ",
      eyebrow: "HELP CENTER & OFFICIAL INFORMATION",
      title: "Frequently Asked Questions",
      subtitle:
        "Find quick answers regarding wholesale orders, technical specifications, Halal & Food Grade certifications, and custom packaging mold fabrication at Asia Plastik.",
      searchPlaceholder: "Search questions... (e.g., Halal, Wholesale, MOQ, Custom)",
      categories: [
        { id: "all", label: "All Questions" },
        { id: "custom", label: "Custom & Tooling" },
        { id: "order", label: "Orders & Wholesale" },
        { id: "quality", label: "Quality & Compliance" },
        { id: "general", label: "Products & General" },
      ],
      noResults: "No questions match your current search query.",
      resetSearch: "Reset Filter",
      supportBadge: "B2B DIRECT CONSULTATION",
      supportTitle: "Still Have Questions?",
      supportDesc:
        "Our engineering and sales representatives are ready to assist with quotations, mold feasibility, and technical consultations.",
      whatsappBtn: "Chat Sales via WhatsApp",
      emailBtn: "Send Official Email",
      hotlineBtn: "Call Factory Hotline",
      faqs: [
        {
          category: "custom",
          question: "CAN WE ORDER CUSTOM PRODUCTS WITH SPECIAL DESIGNS?",
          answer:
            "Certainly. From initial concept to mass production, our engineering and tooling teams are ready to help fabricate unique packaging matching your exact vision. Custom molds require an agreed MOQ (Minimum Order Quantity) which can be discussed further.",
        },
        {
          category: "order",
          question: "IS RETAIL PURCHASE AVAILABLE?",
          answer:
            "Yes, we accommodate retail orders. You can conveniently find and purchase high-quality Asia Plastik products through your favorite marketplace platforms (Tokopedia and Shopee).",
        },
        {
          category: "order",
          question: "ARE THERE SPECIAL DISCOUNTS FOR BULK OR WHOLESALE ORDERS?",
          answer:
            "Absolutely. We offer competitive and tiered wholesale pricing specifically for clients purchasing packaging containers in large volume quantities.",
        },
        {
          category: "order",
          question: "FOR WHOLESALE, WHAT IS THE MINIMUM ORDER QUANTITY (MOQ) AT ASIA PLASTIK?",
          answer:
            "For standard catalog items (non-custom), the minimum order is 2 sacks. For custom-molded designs, the MOQ will be determined based on the technical complexity of the mold and product.",
        },
        {
          category: "general",
          question: "WHERE CAN I GET DETAILED INFORMATION REGARDING ASIA PLASTIK PRODUCTS?",
          answer:
            "You can contact our sales and engineering team for comprehensive catalogs and quotes via Email, Phone, WhatsApp, or through our official Instagram account.",
        },
        {
          category: "quality",
          question: "ARE ASIA PLASTIK PRODUCTS CERTIFIED HALAL?",
          answer:
            "Yes, our plastic packaging products have obtained official Halal certification (Certificate No. ID00410000251901021).",
        },
        {
          category: "quality",
          question: "ARE ASIA PLASTIK CONTAINERS SAFE FOR FOOD AND BEVERAGES?",
          answer:
            "100% guaranteed safe. We strictly utilize high-grade virgin plastic polymers with verified Food Grade compliance, ensuring total safety for direct food and beverage packaging.",
        },
        {
          category: "general",
          question: "WHAT TYPES OF PRODUCTS ARE MANUFACTURED BY ASIA PLASTIK?",
          answer:
            "We supply diverse industrial packaging for large enterprises down to MSMEs. Our catalog includes PET Bottles, HDPE Jerry Cans, Spice Jars, Industrial Baskets, Pallets, and marine aquaculture gear like Float Balls, Clam Baskets, and Soft Shelled Crab containers.",
        },
        {
          category: "quality",
          question: "IS THERE A WARRANTY OR GUARANTEE IF PRODUCTS ARE DAMAGED?",
          answer:
            "Definitely. While all production batches undergo stringent multi-stage Quality Control, we are committed to promptly resolving any quality discrepancy that does not meet our verified manufacturing standards.",
        },
      ],
    },
    zh: {
      breadcrumbHome: "首页",
      breadcrumbCurrent: "常见问题",
      eyebrow: "帮助中心与官方指引",
      title: "常见问题解答 (FAQ)",
      subtitle:
        "快速查询关于批量批发采购、起订量 (MOQ)、清真与食品级合规资质，以及定制模具开发的技术说明。",
      searchPlaceholder: "输入关键字搜索... (例如：清真、批发、起订量、定制)",
      categories: [
        { id: "all", label: "全部问题" },
        { id: "custom", label: "开模与定制" },
        { id: "order", label: "订单与批发" },
        { id: "quality", label: "质量与认证" },
        { id: "general", label: "产品与概况" },
      ],
      noResults: "未找到与您的搜索条件匹配的问题。",
      resetSearch: "重置筛选条件",
      supportBadge: "B2B 专属商业与技术咨询",
      supportTitle: "还有其他疑问需要咨询？",
      supportDesc:
        "我们的技术工程师与销售代表随时为您提供详尽的技术参数咨询、开模可行性评估及最优惠的批发采购报价。",
      whatsappBtn: "WhatsApp 在线咨询",
      emailBtn: "发送官方采购邮件",
      hotlineBtn: "拨打工厂服务热线",
      faqs: [
        {
          category: "custom",
          question: "是否支持专属定制与开模设计？",
          answer:
            "当然可以。从前期产品构思、3D图纸设计到注塑吹塑量产，我们全程协助您打造专属品牌包装。定制开发需达到起订量 (MOQ) 约定，欢迎与我们的销售工程师深入沟通。",
        },
        {
          category: "order",
          question: "是否支持小批量散装零售？",
          answer:
            "支持。我们提供小批量零售渠道，您可以通过主流电商平台（Tokopedia 及 Shopee）选购正品 Asia Plastik 现货包装产品。",
        },
        {
          category: "order",
          question: "批量采购或大宗批发是否有专享优惠？",
          answer:
            "必然享有。针对大宗批量采购及长期供应链客户，我们提供极具竞争力的阶梯出厂批发特惠价格。",
        },
        {
          category: "order",
          question: "批发采购时，亚洲塑料的最低起订量 (MOQ) 是多少？",
          answer:
            "对于现模标准产品，最低起订量通常为 2 大袋 (2 Sacks)。对于新开模定制产品，起订量将根据产品规格与模具工艺复杂度单独核算。",
        },
        {
          category: "general",
          question: "在哪里可以获取亚洲塑料产品的详细技术资料？",
          answer:
            "您可以通过电子邮件、服务电话、官方 WhatsApp 专线或关注亚洲塑料官方 Instagram 与我们的客服及技术团队取得联系。",
        },
        {
          category: "quality",
          question: "亚洲塑料的产品是否通过清真 (HALAL) 认证？",
          answer:
            "是的，我们的塑料容器均已通过印尼官方清真合规认证（证书编号：ID00410000251901021）。",
        },
        {
          category: "quality",
          question: "亚洲塑料产品用于食品与饮料包装是否安全？",
          answer:
            "安全可靠。我们严格采用通过食品级 (Food Grade) 安全检测的高纯净原生聚合物原料制造，完全适用于各类食品与饮品的直接接触包装。",
        },
        {
          category: "general",
          question: "亚洲塑料主要生产与销售哪些品类的产品？",
          answer:
            "我们生产涵盖从大型企业到中小商户的全系列塑料制品：PET塑料瓶、HDPE手提桶、食品密封罐、周转筐、塑料托盘，以及深海养殖浮球、生蚝养殖网筐与软壳蟹公寓等。",
        },
        {
          category: "quality",
          question: "若收到瑕疵或破损产品，是否有售后质保？",
          answer:
            "绝对负责。尽管所有出厂批次均通过极严苛的品质检验 (QC)，若您收到任何不符标准的品质问题，我们承诺第一时间迅速跟进退换与售后保障。",
        },
      ],
    },
  };

  const current = pageContent[lang] || pageContent.id;

  // Filter FAQs based on search and category
  const filteredFaqs = useMemo(() => {
    return current.faqs.filter((faq) => {
      const matchesCategory =
        selectedCategory === "all" || faq.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [current.faqs, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300">
      {/* 1. TOP NAVBAR */}
      <Navbar />

      {/* MAIN CONTAINER */}
      <main className="flex-1 w-full pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Trail */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>{current.breadcrumbHome}</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-blue-600 dark:text-blue-400 font-bold">
              {current.breadcrumbCurrent}
            </span>
          </nav>

          {/* PAGE HERO HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
              <HelpCircle className="w-4 h-4 shrink-0" />
              <span>{current.eyebrow}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
              {current.title}
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              {current.subtitle}
            </p>
          </div>

          {/* SEARCH & CATEGORY FILTER CONTROLS */}
          <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl mb-12 flex flex-col gap-5">
            {/* Live Search Input */}
            <div className="relative w-full">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={current.searchPlaceholder}
                className="w-full bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder:text-slate-400 pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-sm sm:text-base transition-all"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100 dark:border-slate-800/80">
              {current.categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACCORDION FAQ CARDS */}
          {filteredFaqs.length > 0 ? (
            <div className="flex flex-col gap-4">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <article
                    key={index}
                    className={`bg-white dark:bg-slate-900 border rounded-2xl shadow-sm transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-blue-500/50 dark:border-blue-500/50 ring-2 ring-blue-500/10 shadow-md"
                        : "border-slate-100 dark:border-slate-800/80 hover:border-slate-200 dark:hover:border-slate-700"
                    }`}
                  >
                    {/* Header Button */}
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer select-none group"
                    >
                      <span
                        className={`text-base sm:text-lg font-bold uppercase tracking-tight transition-colors ${
                          isOpen
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400"
                        }`}
                      >
                        {faq.question}
                      </span>

                      <span
                        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rotate-180"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 group-hover:text-slate-600 dark:group-hover:text-slate-200"
                        }`}
                      >
                        <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                      </span>
                    </button>

                    {/* Buttery-Smooth CSS Grid Transition */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-1 border-t border-slate-100 dark:border-slate-800/60">
                          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed text-justify mt-4">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            /* Empty State */
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-800 shadow-xl flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <HelpCircle className="w-8 h-8" />
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-medium mb-4">
                {current.noResults}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20"
              >
                {current.resetSearch}
              </button>
            </div>
          )}

          {/* DEDICATED SUPPORT CTA BANNER */}
          <div className="mt-20 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{current.supportBadge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
                {current.supportTitle}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {current.supportDesc}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/${footerData.contact.whatsapp.replace(
                    /[^0-9]/g,
                    ""
                  )}?text=${encodeURIComponent(
                    "Halo CV. Asia Plastik, saya ingin menanyakan informasi lebih lanjut mengenai produk dan pemesanan."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-600/20 transition-all inline-flex items-center gap-2.5 text-sm"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>{current.whatsappBtn}</span>
                </a>

                <a
                  href={`mailto:${footerData.contact.email}`}
                  className="bg-blue-600 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20 transition-all inline-flex items-center gap-2.5 text-sm"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>{current.emailBtn}</span>
                </a>

                <a
                  href={`tel:${footerData.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="bg-slate-800 text-slate-200 font-semibold px-6 py-3.5 rounded-xl hover:bg-slate-700 transition-all inline-flex items-center gap-2.5 text-sm"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>{footerData.contact.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
