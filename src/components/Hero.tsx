"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { heroData } from "@/data/homeData";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Factory,
  Layers,
  Sparkles,
  Phone,
} from "lucide-react";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Decorative ambient gradient blur */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 -z-10 w-80 h-80 bg-indigo-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span>{heroData.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {heroData.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600">
                {heroData.highlightedTitle}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {heroData.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href={heroData.ctaPrimary.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-base shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>{heroData.ctaPrimary.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={heroData.ctaSecondary.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-semibold text-base shadow-xs hover:bg-slate-50 hover:border-slate-300 hover:text-blue-600 transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>{heroData.ctaSecondary.label}</span>
              </Link>
            </div>

            {/* Trust bullet points */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bahan Baku Food-Grade & Recyclable</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Kapasitas Produksi Skala Pabrik</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Toleransi Presisi Tinggi (QC 100%)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image / Visual Showcase with Fallback Placeholder */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative background glow behind image frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition duration-1000" />

              {/* Main Container Card */}
              <div className="relative rounded-2xl border border-slate-200/80 bg-white p-2 sm:p-3 shadow-2xl overflow-hidden">
                <div className="relative h-80 sm:h-96 md:h-[420px] w-full rounded-xl overflow-hidden bg-slate-900">
                  
                  {/* Actual Photo (displayed when user puts file in public/images/hero.jpg) */}
                  {!imageError ? (
                    <Image
                      src={heroData.image}
                      alt="CV. Asia Plastik Production Facility"
                      fill
                      priority
                      className="object-cover object-center"
                      onError={() => setImageError(true)}
                    />
                  ) : null}

                  {/* High-Tech Industrial Fallback Placeholder if hero.jpg is not found yet */}
                  {imageError && (
                    <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white">
                      
                      {/* Top Header inside Placeholder */}
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2.5 bg-blue-500/10 border border-blue-400/30 px-3 py-1.5 rounded-lg backdrop-blur-md">
                          <Factory className="w-4 h-4 text-blue-400" />
                          <span className="text-xs font-semibold tracking-wider text-blue-200 uppercase">
                            Modern Production Plant
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-1 rounded">
                          CV. ASIA PLASTIK
                        </span>
                      </div>

                      {/* Center Graphical Elements */}
                      <div className="space-y-4 my-auto">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/30 mx-auto">
                          <Layers className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-center space-y-1">
                          <h2 className="text-xl font-bold tracking-tight text-white">
                            Precision Injection & Blow Molding
                          </h2>
                          <p className="text-xs text-slate-300 max-w-xs mx-auto">
                            Placeholder foto aktif. Letakkan file foto asli di{" "}
                            <code className="text-blue-300 bg-slate-800/80 px-1 py-0.5 rounded">
                              public/images/hero.jpg
                            </code>
                          </p>
                        </div>
                      </div>

                      {/* Bottom Metrics Pill inside Visual */}
                      <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-700/60">
                        <div className="bg-slate-800/60 rounded-lg p-2.5 border border-slate-700/50">
                          <div className="text-xs text-slate-400">Teknologi Mesin</div>
                          <div className="text-sm font-semibold text-white">High-Speed Hydraulic & Servo</div>
                        </div>
                        <div className="bg-slate-800/60 rounded-lg p-2.5 border border-slate-700/50">
                          <div className="text-xs text-slate-400">Jaminan Mutu</div>
                          <div className="text-sm font-semibold text-emerald-400">ISO 9001:2015</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Overlay badge on top of image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md border border-slate-700/60 rounded-xl p-3.5 text-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-600/80 flex items-center justify-center text-white shrink-0">
                        <ShieldCheck className="w-5 h-5 text-blue-200" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold leading-tight">Fasilitas Standar Industri</div>
                        <div className="text-[11px] text-slate-300">Clean & Precision Manufacturing</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-medium text-blue-300 bg-blue-950/70 border border-blue-500/30 px-2 py-1 rounded">
                      QC PASSED
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating decorative badge */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 backdrop-blur-md border border-slate-100 rounded-xl px-4 py-2.5 shadow-xl items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900">100% Custom Molding</div>
                  <div className="text-[10px] text-slate-500">CAD / 3D Prototyping</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Performance Statistics Counter Bar */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {heroData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/70 shadow-xs hover:border-blue-200 hover:shadow-md transition-all duration-200"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-700 tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-sm sm:text-base font-bold text-slate-900">
                  {stat.label}
                </div>
                {stat.sublabel && (
                  <div className="mt-1 text-xs text-slate-500">
                    {stat.sublabel}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
