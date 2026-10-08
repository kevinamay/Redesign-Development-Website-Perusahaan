"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { useLanguage } from "@/data/translations";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { lang } = useLanguage();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqDataByLang = {
    id: {
      eyebrow: "HUBUNGI KAMI UNTUK INFO LANJUTAN",
      heading: "Frequently Asked Questions",
      faqs: [
        {
          question: "APAKAH BISA CUSTOM DENGAN DESAIN KHUSUS?",
          answer:
            "Tentu bisa. Mulai dari tahap awal ide hingga produksi, kami siap membantu membuat kemasan unik sesuai visi Anda. Tim R&D kami siap memberi masukan teknis dan desain. Pemesanan custom memerlukan kesepakatan MOQ (Minimum Order Quantity) yang bisa didiskusikan lebih lanjut.",
        },
        {
          question: "APAKAH BISA ECERAN?",
          answer:
            "Ya, kami melayani pembelian eceran. Anda dapat menemukan dan membeli produk-produk berkualitas dari Asia Plastik melalui platform marketplace favorit Anda (Tokopedia dan Shopee).",
        },
        {
          question: "APAKAH ADA HARGA KHUSUS UNTUK PEMBELIAN JUMLAH BESAR ATAU GROSIR?",
          answer:
            "Tentu saja. Kami menawarkan harga yang lebih kompetitif dan ekonomis khusus untuk pelanggan yang melakukan pembelian produk kemasan dalam jumlah besar atau partai grosir.",
        },
        {
          question: "JIKA GROSIR, BERAPA MINIMAL ORDER UNTUK SELURUH PRODUK DI ASIA PLASTIK?",
          answer:
            "Untuk produk standar (bukan custom), pemesanan minimum adalah 2 sak. Sementara itu, untuk produk dengan desain custom, nilai MOQ (Minimum Order Quantity) akan ditentukan kemudian menyesuaikan dengan tingkat kerumitan desain.",
        },
        {
          question: "DIMANA SAYA BISA MENDAPATKAN INFORMASI LEBIH LENGKAP MENGENAI PRODUK ASIA PLASTIK?",
          answer:
            "Anda dapat menghubungi tim marketing kami untuk informasi mendetail melalui berbagai saluran komunikasi, seperti email, telepon, WhatsApp, maupun melalui akun resmi Instagram Asia Plastik.",
        },
        {
          question: "APAKAH PRODUK ASIA PLASTIK SUDAH TERSERTIFIKASI HALAL?",
          answer:
            "Ya, produk kemasan kami telah mengantongi sertifikasi Halal resmi (No. Sertifikat ID00410000251901021).",
        },
        {
          question: "APAKAH PRODUK ASIA PLASTIK AMAN UNTUK KEMASAN MAKANAN DAN MINUMAN?",
          answer:
            "Sangat terjamin keamanannya. Kami menggunakan material biji plastik berkualitas yang telah bersertifikat Food Grade, sehingga sangat aman diaplikasikan sebagai wadah makanan maupun minuman.",
        },
        {
          question: "APA SAJA JENIS PRODUK YANG DIJUAL OLEH ASIA PLASTIK?",
          answer:
            "Kami menyediakan beragam kemasan plastik untuk mendukung industri skala besar hingga UMKM. Kategori produk kami meliputi Botol PET, Jerigen HDPE, Toples, Keranjang, Pallet, serta peralatan kebutuhan kelautan seperti Float Ball, Clam Basket, dan perlengkapan Soft Shelled Crab.",
        },
        {
          question: "APAKAH ADA GARANSI JIKA ADA KERUSAKAN PADA PRODUK ASIA PLASTIK?",
          answer:
            "Pasti. Walaupun seluruh produk telah melalui proses Quality Control yang sangat ketat, kami siap menindaklanjuti dengan cepat jika Anda menerima produk yang tidak sesuai dengan standar kualitas kami.",
        },
      ],
    },
    en: {
      eyebrow: "CONTACT US FOR MORE DETAILS",
      heading: "Frequently Asked Questions",
      faqs: [
        {
          question: "CAN WE ORDER CUSTOM PRODUCTS WITH SPECIAL DESIGNS?",
          answer:
            "Certainly. From initial concept to mass production, our engineering and tooling teams are ready to help fabricate unique packaging matching your exact vision. Custom molds require an agreed MOQ (Minimum Order Quantity) which can be discussed further.",
        },
        {
          question: "IS RETAIL PURCHASE AVAILABLE?",
          answer:
            "Yes, we accommodate retail orders. You can conveniently find and purchase high-quality Asia Plastik products through your favorite marketplace platforms (Tokopedia and Shopee).",
        },
        {
          question: "ARE THERE SPECIAL DISCOUNTS FOR BULK OR WHOLESALE ORDERS?",
          answer:
            "Absolutely. We offer competitive and tiered wholesale pricing specifically for clients purchasing packaging containers in large volume quantities.",
        },
        {
          question: "FOR WHOLESALE, WHAT IS THE MINIMUM ORDER QUANTITY (MOQ) AT ASIA PLASTIK?",
          answer:
            "For standard catalog items (non-custom), the minimum order is 2 sacks. For custom-molded designs, the MOQ will be determined based on the technical complexity of the mold and product.",
        },
        {
          question: "WHERE CAN I GET DETAILED INFORMATION REGARDING ASIA PLASTIK PRODUCTS?",
          answer:
            "You can contact our sales and engineering team for comprehensive catalogs and quotes via Email, Phone, WhatsApp, or through our official Instagram account.",
        },
        {
          question: "ARE ASIA PLASTIK PRODUCTS CERTIFIED HALAL?",
          answer:
            "Yes, our plastic packaging products have obtained official Halal certification (Certificate No. ID00410000251901021).",
        },
        {
          question: "ARE ASIA PLASTIK CONTAINERS SAFE FOR FOOD AND BEVERAGES?",
          answer:
            "100% guaranteed safe. We strictly utilize high-grade virgin plastic polymers with verified Food Grade compliance, ensuring total safety for direct food and beverage packaging.",
        },
        {
          question: "WHAT TYPES OF PRODUCTS ARE MANUFACTURED BY ASIA PLASTIK?",
          answer:
            "We supply diverse industrial packaging for large enterprises down to MSMEs. Our catalog includes PET Bottles, HDPE Jerry Cans, Spice Jars, Industrial Baskets, Pallets, and marine aquaculture gear like Float Balls, Clam Baskets, and Soft Shelled Crab containers.",
        },
        {
          question: "IS THERE A WARRANTY OR GUARANTEE IF PRODUCTS ARE DAMAGED?",
          answer:
            "Definitely. While all production batches undergo stringent multi-stage Quality Control, we are committed to promptly resolving any quality discrepancy that does not meet our verified manufacturing standards.",
        },
      ],
    },
    zh: {
      eyebrow: "联系我们了解更多详情",
      heading: "常见问题解答 (FAQ)",
      faqs: [
        {
          question: "是否支持专属定制与开模设计？",
          answer:
            "当然可以。从前期产品构思、3D图纸设计到注塑吹塑量产，我们全程协助您打造专属品牌包装。定制开发需达到起订量 (MOQ) 约定，欢迎与我们的销售工程师深入沟通。",
        },
        {
          question: "是否支持小批量散装零售？",
          answer:
            "支持。我们提供小批量零售渠道，您可以通过主流电商平台（Tokopedia 及 Shopee）选购正品 Asia Plastik 现货包装产品。",
        },
        {
          question: "批量采购或大宗批发是否有专享优惠？",
          answer:
            "必然享有。针对大宗批量采购及长期供应链客户，我们提供极具竞争力的阶梯出厂批发特惠价格。",
        },
        {
          question: "批发采购时，ASIA PLASTIK 的最低起订量 (MOQ) 是多少？",
          answer:
            "对于现模标准产品，最低起订量通常为 2 大袋 (2 Sacks)。对于新开模定制产品，起订量将根据产品规格与模具工艺复杂度单独核算。",
        },
        {
          question: "在哪里可以获取 ASIA PLASTIK 产品的详细技术资料？",
          answer:
            "您可以通过电子邮件、服务电话、官方 WhatsApp 专线或关注 Asia Plastik 官方 Instagram 与我们的客服及技术团队取得联系。",
        },
        {
          question: "ASIA PLASTIK 的产品是否通过清真 (HALAL) 认证？",
          answer:
            "是的，我们的塑料容器均已通过印尼官方清真合规认证（证书编号：ID00410000251901021）。",
        },
        {
          question: "ASIA PLASTIK 产品用于食品与饮料包装是否安全？",
          answer:
            "安全可靠。我们严格采用通过食品级 (Food Grade) 安全检测的高纯净原生聚合物原料制造，完全适用于各类食品与饮品的直接接触包装。",
        },
        {
          question: "ASIA PLASTIK 主要生产与销售哪些品类的产品？",
          answer:
            "我们生产涵盖从大型企业到中小商户的全系列塑料制品：PET塑料瓶、HDPE手提桶、食品密封罐、周转筐、塑料托盘，以及深海养殖浮球、生蚝养殖网筐与软壳蟹公寓等。",
        },
        {
          question: "若收到瑕疵或破损产品，是否有售后质保？",
          answer:
            "绝对负责。尽管所有出厂批次均通过极严苛的品质检验 (QC)，若您收到任何不符标准的品质问题，我们承诺第一时间迅速跟进退换与售后保障。",
        },
      ],
    },
  };

  const currentContent = faqDataByLang[lang] || faqDataByLang.id;

  return (
    <section
      id="faq"
      className="bg-slate-50 dark:bg-slate-950/80 py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Ambient background decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* 1. SECTION HEADER (CENTER-ALIGNED) */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3 inline-flex items-center gap-2">
            <HelpCircle className="w-4 h-4 shrink-0" />
            <span>{currentContent.eyebrow}</span>
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {currentContent.heading}
          </h2>
        </div>

        {/* 2. ACCORDION LIST */}
        <div className="flex flex-col gap-4">
          {currentContent.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`bg-white dark:bg-slate-900 border rounded-2xl shadow-sm transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-blue-500/50 dark:border-blue-500/50 ring-2 ring-blue-500/10 shadow-md"
                    : "border-slate-100 dark:border-slate-800/80 hover:border-slate-200 dark:hover:border-slate-700"
                }`}
              >
                {/* Accordion Header Button */}
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

                {/* Buttery-Smooth CSS Grid Transition (grid-rows-[0fr] to grid-rows-[1fr]) */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
