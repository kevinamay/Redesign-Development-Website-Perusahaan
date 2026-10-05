"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  Box,
  Scale,
  ShieldCheck,
  Layers,
  CheckCircle2,
} from "lucide-react";

export default function NewProduct() {
  const productImages = [
    '/images/product/product1.webp',
    '/images/product/product2.webp',
    '/images/product/product3.webp',
    '/images/product/product4.webp',
    '/images/product/product5.webp',
    '/images/product/product6.webp',
    '/images/product/basket.png'
  ];

  // Mouse drag support for desktop horizontal scrolling
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    isDownRef.current = true;
    setIsDragging(true);
    startXRef.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDownRef.current = false;
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    isDownRef.current = false;
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDownRef.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

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
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-16 sm:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Product Showcase Card */}
        <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl overflow-hidden border border-slate-100 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-2 transition-colors duration-300">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: TYPOGRAPHY & PRODUCT DETAILS                                 */}
          {/* ========================================================================= */}
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
            <div>
              {/* Aesthetic Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
                <span>NEW PRODUCT</span>
              </div>

              {/* Product Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4 tracking-tight">
                Solid Foldable Industrial Basket
              </h2>

              {/* Subtitle / Product Narrative */}
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Wadah krat industri lipat multifungsi dengan struktur kokoh dan material food-grade presisi. Dirancang untuk efisiensi ruang penyimpanan hingga 75% saat dilipat, ideal untuk distribusi logistik pergudangan modern dan rantai pasok industri.
              </p>

              {/* Product Specs (Bento-style 2x2 grid) */}
              <div className="grid grid-cols-2 gap-3.5 sm:gap-4 mb-8">
                {specs.map((spec, index) => {
                  const Icon = spec.icon;
                  return (
                    <div
                      key={index}
                      className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-100 dark:border-slate-700/60 hover:border-blue-200 dark:hover:border-blue-500/40 hover:bg-slate-50/80 dark:hover:bg-slate-800 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-100/60 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 block">
                        {spec.label}
                      </span>
                      <span className="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm md:text-base block mt-0.5">
                        {spec.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Highlights */}
            <div className="pt-2 flex items-center">
              <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Ready Stock & Kontrak B2B</span>
              </span>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: NATIVE SMOOTH SWIPE CAROUSEL (CSS SCROLL SNAP)               */}
          {/* ========================================================================= */}
          <div className="bg-slate-100 dark:bg-slate-800/50 relative flex items-center justify-center p-4 sm:p-8 lg:p-10 overflow-hidden transition-colors duration-300">
            {/* Scroll Container with CSS Scroll Snap & Mouse Drag */}
            <div
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className={`flex w-full h-[400px] lg:h-[500px] overflow-x-auto snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${
                isDragging ? "cursor-grabbing select-none" : ""
              }`}
            >
              {productImages.map((src, index) => (
                <div
                  key={index}
                  className="min-w-full h-full flex-shrink-0 snap-center relative flex items-center justify-center p-4"
                >
                  <Image
                    src={src}
                    alt={`Solid Foldable Industrial Basket - Tampilan ${index + 1}`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    draggable={false}
                    className="object-contain hover:scale-105 transition-transform duration-500 select-none"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
