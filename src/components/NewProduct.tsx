import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Scale,
  ShieldCheck,
  Layers,
  ChevronRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function NewProduct() {
  const specs = [
    {
      label: "Dimensi",
      value: "600 x 400 x 320 mm",
      icon: Box,
    },
    {
      label: "Berat",
      value: "2.6 Kg",
      icon: Scale,
    },
    {
      label: "Sertifikasi",
      value: "ISO 9001:2015",
      icon: ShieldCheck,
    },
    {
      label: "Kapasitas Beban",
      value: "40 Kg (Dinamis)",
      icon: Layers,
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Product Showcase Card */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100 grid grid-cols-1 lg:grid-cols-2">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: TYPOGRAPHY & PRODUCT DETAILS                                 */}
          {/* ========================================================================= */}
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
            <div>
              {/* Aesthetic Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>NEW PRODUCT</span>
              </div>

              {/* Product Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tight">
                Solid Foldable Industrial Basket
              </h2>

              {/* Subtitle / Product Narrative */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                Wadah krat industri lipat multifungsi dengan struktur kokoh dan material food-grade presisi. Dirancang untuk efisiensi ruang penyimpanan hingga 75% saat dilipat, ideal untuk distribusi logistik pergudangan modern dan rantai pasok industri.
              </p>

              {/* Product Specs (Bento-style 2x2 grid) */}
              <div className="grid grid-cols-2 gap-3.5 sm:gap-4 mb-8">
                {specs.map((spec, index) => {
                  const Icon = spec.icon;
                  return (
                    <div
                      key={index}
                      className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50/80 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-100/60 text-blue-600 flex items-center justify-center mb-2.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-500 block">
                        {spec.label}
                      </span>
                      <span className="font-semibold text-slate-900 text-xs sm:text-sm md:text-base block mt-0.5">
                        {spec.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions & Highlights */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Primary Sleek Button */}
              <Link
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-blue-200 inline-flex items-center justify-center gap-2 w-full sm:w-max hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Pelajari Lebih Lanjut</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              <span className="text-xs text-slate-500 flex items-center gap-1.5 justify-center sm:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Ready Stock & Kontrak B2B</span>
              </span>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: PRODUCT IMAGE FOCUS                                         */}
          {/* ========================================================================= */}
          <div className="bg-gradient-to-br from-blue-50/80 via-slate-50 to-slate-100 relative flex flex-col items-center justify-center p-8 sm:p-12 lg:p-16 min-h-[380px] lg:min-h-[540px] overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute w-72 h-72 bg-blue-200/35 rounded-full blur-3xl pointer-events-none -top-10 -right-10" />
            <div className="absolute w-60 h-60 bg-indigo-100/40 rounded-full blur-2xl pointer-events-none -bottom-10 -left-10" />

            {/* Top Right Floating Feature Tag */}
            <div className="absolute top-6 right-6 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/70 shadow-sm text-xs font-semibold text-slate-700">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Efisiensi Ruang 75%</span>
            </div>

            {/* Heroic Single Product Image */}
            <div className="relative z-10 w-full flex items-center justify-center py-4">
              <Image
                src="/images/product/basket.png"
                alt="Solid Foldable Industrial Basket"
                width={520}
                height={390}
                priority
                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 max-h-[340px] sm:max-h-[380px] w-auto select-none"
              />
            </div>

            {/* Floating Thumbnail Perspective Dots at Bottom Corner for Extra Aesthetic Flair */}
            <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/70 shadow-xs">
              <span className="text-[11px] font-semibold text-slate-500 mr-1 hidden xs:inline">
                Tampilan:
              </span>
              <button
                type="button"
                className="w-5 h-5 rounded-full bg-blue-600 border-2 border-white shadow-xs focus:outline-hidden"
                title="Tampak Depan"
              />
              <button
                type="button"
                className="w-5 h-5 rounded-full bg-slate-300 border-2 border-white hover:bg-slate-400 shadow-xs transition-colors focus:outline-hidden"
                title="Tampak Lipat"
              />
              <button
                type="button"
                className="w-5 h-5 rounded-full bg-slate-300 border-2 border-white hover:bg-slate-400 shadow-xs transition-colors focus:outline-hidden"
                title="Tampak Atas"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
