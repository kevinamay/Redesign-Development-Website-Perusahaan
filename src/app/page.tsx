import React from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { aboutSnippet, productHighlights } from "@/data/homeData";
import {
  ShieldCheck,
  Cpu,
  Recycle,
  Clock,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Box,
} from "lucide-react";

// Icon mapping for about pillars
const iconMap = {
  ShieldCheck: ShieldCheck,
  Cpu: Cpu,
  Recycle: Recycle,
  Clock: Clock,
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-blue-600 selection:text-white">
      {/* Main Page Container */}
      <main className="flex-1 space-y-16 sm:space-y-24">
        {/* 1. Hero Section with Top Bar & Navbar Overlay */}
        <Hero />

        {/* 3. About Us Snippet Section */}
        <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 lg:p-16 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{aboutSnippet.tagline}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {aboutSnippet.heading}
                </h2>

                <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                  {aboutSnippet.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Key Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {aboutSnippet.keyPillars.map((pillar, idx) => {
                    const IconComponent = iconMap[pillar.icon] || ShieldCheck;
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-100 transition-colors"
                      >
                        <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h4 className="text-sm font-bold text-slate-900">{pillar.title}</h4>
                        <p className="text-xs text-slate-600 mt-1 leading-normal">
                          {pillar.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* About Visual Box / Placeholder */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl bg-gradient-to-tr from-slate-900 to-blue-900 p-8 text-white shadow-xl overflow-hidden min-h-[380px] flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-blue-300">
                      Keunggulan Manufaktur
                    </span>
                    <h3 className="text-2xl font-bold">Standardisasi Industri & Akurasi Cetak</h3>
                    <p className="text-xs text-slate-300 max-w-md">
                      Mulai dari konsultasi desain mold, pemilihan resin bijih plastik prima, hingga inspeksi akhir batch produksi massal.
                    </p>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-slate-700/60">
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Resin Original Bergaransi (Non-recycled atau Food Grade Bersertifikat)</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Dukungan Tim Engineering Moulding Berpengalaman</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Kapasitas Pasokan Skala Kontrak Jangka Panjang</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Products & Capabilities Highlights Section */}
        <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <Box className="w-3.5 h-3.5" />
              <span>Kapabilitas & Lini Produk</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Solusi Cetak Plastik Komprehensif
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Menghadirkan rangkaian produk presisi dan wadah industri dengan spesifikasi teknis sesuai kebutuhan bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productHighlights.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-blue-200 transition-all duration-200 group"
              >
                <div>
                  <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                    {product.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <a
                    href={product.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-all"
                  >
                    <span>Konsultasi Produk Ini</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 5. Corporate Footer */}
      <Footer />
    </div>
  );
}
