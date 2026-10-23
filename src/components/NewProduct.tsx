"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/data/translations";
import {
  Box,
  Scale,
  ShieldCheck,
  Layers,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function NewProduct() {
  const { t } = useLanguage();

  const productImages = [
    "/images/product/product1.webp",
    "/images/product/product2.webp",
    "/images/product/product3.webp",
    "/images/product/product4.webp",
    "/images/product/product5.webp",
    "/images/product/product6.webp",
    "/images/product/basket.png",
  ];

  // Carousel State for Auto-Swapping
  const [currentIndex, setCurrentIndex] = useState(0);
  const [withTransition, setWithTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-swap interval every 3.5 seconds
  const nextSlide = useCallback(() => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    if (currentIndex === 0) {
      setWithTransition(false);
      setCurrentIndex(productImages.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true);
          setCurrentIndex(productImages.length - 1);
        });
      });
    } else {
      setWithTransition(true);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex, productImages.length]);

  const goToSlide = (index: number) => {
    setWithTransition(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 2800);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const handleTransitionEnd = () => {
    if (currentIndex >= productImages.length) {
      setWithTransition(false);
      setCurrentIndex(0);
    } else if (currentIndex < 0) {
      setWithTransition(false);
      setCurrentIndex(productImages.length - 1);
    }
  };

  // Touch & Swipe gestures
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setIsPaused(false);
  };

  const specs = [
    {
      label: t.newProduct.specs.dimensions,
      value: t.newProduct.specs.dimensionsVal,
      icon: Box,
    },
    {
      label: t.newProduct.specs.weight,
      value: t.newProduct.specs.weightVal,
      icon: Scale,
    },
    {
      label: t.newProduct.specs.certification,
      value: t.newProduct.specs.certificationVal,
      icon: ShieldCheck,
    },
    {
      label: t.newProduct.specs.capacity,
      value: t.newProduct.specs.capacityVal,
      icon: Layers,
    },
  ];

  return (
    <section id="products" className="w-full max-w-[100vw] overflow-hidden bg-slate-50 dark:bg-slate-950 py-16 sm:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Product Showcase Card with Parallax Depth */}
        <div
          data-parallax="bento"
          data-parallax-speed="0.08"
          className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl overflow-hidden border border-slate-100 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-2 transition-colors duration-300 will-change-transform"
        >
          {/* ========================================================================= */}
          {/* LEFT COLUMN: TYPOGRAPHY & PRODUCT DETAILS                                 */}
          {/* ========================================================================= */}
          <div className="p-5 sm:p-10 lg:p-16 flex flex-col justify-between">
            <div>
              {/* Aesthetic Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
                <span>{t.newProduct.badge}</span>
              </div>

              {/* Product Title */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6 sm:mb-8 tracking-tight">
                {t.newProduct.title}
              </h2>

              {/* Product Specs (Bento-style 2x2 grid) */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {specs.map((spec, index) => {
                  const Icon = spec.icon;
                  return (
                    <div
                      key={index}
                      className="bg-slate-50 dark:bg-slate-800/60 p-3 sm:p-4 rounded-xl border border-slate-100 dark:border-slate-700/60 hover:border-blue-200 dark:hover:border-blue-500/40 hover:bg-slate-50/80 dark:hover:bg-slate-800 transition-colors"
                    >
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-100/60 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 block">
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

            {/* Bottom Highlights & CTA Navigation */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100 dark:border-slate-800/80">
              <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{t.newProduct.highlights}</span>
              </span>

              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 lg:px-8 lg:py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm lg:text-base rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-600/20 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer w-full sm:w-auto"
              >
                <span>{t.newProduct.ctaButton}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 shrink-0" />
              </Link>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: AUTO-SWAPPING PRODUCT IMAGE CAROUSEL                         */}
          {/* ========================================================================= */}
          <div
            className="bg-slate-100 dark:bg-slate-950 relative flex flex-col items-center justify-center p-4 sm:p-8 lg:p-10 overflow-hidden transition-colors duration-300 border-t lg:border-t-0 lg:border-l border-slate-200/60 dark:border-slate-800/80 group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Ambient Studio Lighting (Dark Mode Subtle Glow) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)] pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500" />

            {/* Slider Viewport */}
            <div className="relative z-10 w-full h-[280px] sm:h-[400px] lg:h-[480px] overflow-hidden rounded-2xl">
              {/* Sliding Track */}
              <div
                onTransitionEnd={handleTransitionEnd}
                className={`flex h-full w-full ${
                  withTransition ? "transition-transform duration-700 ease-in-out" : "transition-none"
                }`}
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {/* 7 original images + 1 clone of image 0 for seamless infinite looping */}
                {[...productImages, productImages[0]].map((src, index) => (
                  <div
                    key={index}
                    className="min-w-full w-full h-full flex-shrink-0 relative flex items-center justify-center p-4 sm:p-6"
                  >
                    <Image
                      src={src}
                      alt={`${t.newProduct.carouselAlt} ${(index % productImages.length) + 1}`}
                      fill
                      priority={index < 2}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      draggable={false}
                      className="object-contain select-none hover:scale-105 transition-transform duration-500 dark:drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
                    />
                  </div>
                ))}
              </div>

              {/* Prev / Next Navigation Arrows */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous product image"
                className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/85 dark:bg-slate-800/85 backdrop-blur-md shadow-md flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 hover:scale-110 active:scale-95 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next product image"
                className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/85 dark:bg-slate-800/85 backdrop-blur-md shadow-md flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 hover:scale-110 active:scale-95 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Slide Indicators: Interactive Dots */}
            <div className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
              {productImages.map((_, i) => {
                const isActive = (currentIndex % productImages.length) === i;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goToSlide(i)}
                    aria-label={`Tampilan produk ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "w-7 sm:w-8 bg-blue-600 dark:bg-blue-500 shadow-xs shadow-blue-500/50"
                        : "w-2 sm:w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
