import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import {
  Sparkles,
  ArrowRight,
  Award,
  CheckCircle2,
  Cpu,
  ChevronRight,
  Home,
  Check,
  Factory,
  Boxes,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami - CV. ASIA PLASTIK | Spesialis Injection & Blow Moulding Sejak 1985",
  description:
    "Profil lengkap CV. Asia Plastik: sejarah manufaktur plastik sejak 1985, sertifikasi ISO 9001:2015, visi misi, mesin blow moulding 500 liter, dan fasilitas produksi kustom.",
};

export default function AboutPage() {
  const customProducts = [
    "Palet Plastik Blow",
    "Keranjang Industri",
    "Botol Plastik",
    "Jerigen Beragam Ukuran",
    "Ember & Pail Industri",
    "Galon & Wadah Cairan",
    "Pelampung Jaring / Laut",
    "Kebutuhan Peternakan",
  ];

  const missionPoints = [
    "Mengembangkan sumber daya manusia yang kompeten, berintegritas, dan berdedikasi tinggi.",
    "Menerapkan teknologi terdepan dalam proses manufaktur injection dan blow molding.",
    "Meningkatkan efisiensi manajemen dan produktivitas rantai pasok secara berkelanjutan.",
    "Memberikan kualitas produk yang baik, presisi, dan konsisten sesuai spesifikasi klien.",
    "Menciptakan produk baru yang inovatif, fungsional, dan ramah lingkungan.",
    "Berjuang dalam perbaikan terus menerus (continuous improvement) di setiap lini operasional.",
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300 flex flex-col">
      {/* ========================================================================= */}
      {/* 1. COMPACT STICKY HEADER & NAVBAR                                          */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-all duration-300 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          {/* Logo CV Asia Plastik */}
          <Link
            href="/"
            className="inline-flex items-center focus:outline-hidden hover:opacity-90 transition-opacity"
            aria-label="Beranda CV. Asia Plastik"
          >
            <Image
              src="/images/logo-dark.webp"
              alt="Logo CV. Asia Plastik"
              width={271}
              height={92}
              priority
              className="h-9 sm:h-10 md:h-11 w-auto object-contain block dark:hidden"
            />
            <Image
              src="/images/logo.webp"
              alt="Logo CV. Asia Plastik"
              width={271}
              height={92}
              priority
              className="h-9 sm:h-10 md:h-11 w-auto object-contain hidden dark:block"
            />
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Beranda
            </Link>
            <Link
              href="/about"
              className="text-sm font-bold text-blue-600 dark:text-blue-400 transition-colors"
            >
              Tentang Kami
            </Link>
            <Link
              href="#produksi-kustom"
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Produksi Kustom
            </Link>
            <Link
              href="#iso-sertifikat"
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Sertifikat ISO
            </Link>
            <Link
              href="#visi-misi"
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Visi & Misi
            </Link>
            <Link
              href="#mesin-produksi"
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Mesin Produksi
            </Link>
          </nav>

          {/* Right: Theme Toggle & Contact CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle />
            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1e3a5f] hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-blue-900/20 cursor-pointer"
            >
              <span>Hubungi Kami</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. HERO SECTION (Parallax Header)                                         */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-[url('/images/assets/about-hero.jpg')] bg-cover bg-center bg-fixed overflow-hidden">
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/75 to-slate-950/90 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-xs">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>GAMBARAN PERUSAHAAN</span>
          </div>

          {/* Heading 1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-md">
            Tentang Kami
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto drop-shadow-sm font-normal">
            Asia Plastik adalah perusahaan manufaktur kemasan plastik yang mengkhususkan diri
            pada bidang injection dan blow molding sejak tahun 1985.
          </p>

          {/* Breadcrumb indicator */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-300">
            <Link href="/" className="hover:text-blue-400 transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Beranda</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-blue-400 font-semibold">Tentang Kami</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECTION 1: PRODUKSI KUSTOM (Split Layout)                              */}
      {/* ========================================================================= */}
      <section id="produksi-kustom" className="relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row gap-16 items-center">
          {/* Left Side (Text) */}
          <div className="w-full md:w-1/2 space-y-6">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold tracking-widest text-xs uppercase">
              <Factory className="w-4 h-4" />
              <span>In-House Tooling & Custom Fabrication</span>
            </div>

            {/* H2 */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1e3a5f] dark:text-blue-400 tracking-tight leading-tight">
              Produksi Kustom
            </h2>

            {/* Paragraph 1 */}
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Melalui proses pengembangan produk dan proses berkesinambungan, beberapa produk
              yang kami kembangkan antara lain palet plastik blow, keranjang industri, botol plastik,
              jerigen, ember, galon, pelampung, kebutuhan ternak.
            </p>

            {/* Paragraph 2 */}
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Dengan berkembangnya unit in-house, kami siap melayani produk-produk khusus sesuai
              kebutuhan pelanggan.
            </p>

            {/* Product Chips List */}
            <div className="pt-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Kategori Produk Unggulan Kustom:
              </p>
              <div className="flex flex-wrap gap-2">
                {customProducts.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-700 shadow-2xs"
                  >
                    <Boxes className="w-3.5 h-3.5 text-blue-500" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side (Images: Stacked/Overlapping composition) */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center">
            {/* Main Upper/Warehouse Image */}
            <div className="relative w-[85%] h-[380px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/assets/warehouse.png"
                alt="Fasilitas Pergudangan & Manufaktur Asia Plastik"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 text-white text-xs font-semibold bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                Kawasan Pergudangan Terintegrasi
              </div>
            </div>

            {/* Overlapping Secondary Image (Forklift / Operasional) */}
            <div className="absolute -bottom-8 -right-2 sm:-right-6 w-[55%] h-[240px] sm:h-[280px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-900 group">
              <Image
                src="/images/assets/forklift.png"
                alt="Operasional Logistik Forklift Pabrik"
                width={500}
                height={400}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-blue-600/90 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                Logistik Cepat & Aman
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION 2: SERTIFIKASI ISO (Full-Width Parallax Break)                 */}
      {/* ========================================================================= */}
      <section
        id="iso-sertifikat"
        className="relative w-full py-32 bg-[url('/images/assets/iso-bg.png')] bg-fixed bg-cover bg-center overflow-hidden shadow-2xl scroll-mt-20"
      >
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-[#1e3a5f]/85 backdrop-blur-xs pointer-events-none" />

        {/* Centered Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-400/20 border border-blue-300/30 text-blue-200 text-xs sm:text-sm font-bold tracking-widest uppercase">
            <Award className="w-4 h-4 text-blue-300" />
            <span>SERTIFIKAT</span>
          </div>

          {/* H2 */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Sertifikasi ISO 9001:2015
          </h2>

          {/* Paragraph */}
          <p className="text-blue-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Sejak tahun 2005 Asia Plastik berhasil meraih ISO 9001:2000 yang kini telah
            dikembangkan menjadi ISO 9001:2015.
          </p>

          {/* Trust Metric Badges */}
          <div className="pt-8 flex flex-wrap justify-center gap-6 sm:gap-10 border-t border-blue-400/20 max-w-2xl mx-auto">
            <div className="text-center">
              <span className="text-3xl font-extrabold text-white">2005</span>
              <p className="text-xs text-blue-200 uppercase tracking-wider mt-1">ISO 9001:2000 Pertama</p>
            </div>
            <div className="w-px h-12 bg-blue-400/30 hidden sm:block" />
            <div className="text-center">
              <span className="text-3xl font-extrabold text-white">2015</span>
              <p className="text-xs text-blue-200 uppercase tracking-wider mt-1">Upgrade ISO 9001:2015</p>
            </div>
            <div className="w-px h-12 bg-blue-400/30 hidden sm:block" />
            <div className="text-center">
              <span className="text-3xl font-extrabold text-white">100%</span>
              <p className="text-xs text-blue-200 uppercase tracking-wider mt-1">Quality Audit Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECTION 3: VISI & MISI (Bento Box / Card Grid)                         */}
      {/* ========================================================================= */}
      <section id="visi-misi" className="relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Header */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold tracking-widest text-xs uppercase mb-3">
              <Sparkles className="w-4 h-4" />
              <span>PRINSIP PERUSAHAAN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Asia Plastik Visi & Misi
            </h2>
          </div>

          {/* Content: Two Elegant Side-by-Side Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Card 1: Visi (5 cols on lg) */}
            <div className="lg:col-span-5 bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-6 shadow-md shadow-blue-500/20">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                  Visi Kami
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  Menjadi perusahaan manufaktur plastik terkemuka secara nasional dan internasional
                  dengan sumber daya manusia yang handal dan teknologi canggih yang mengutamakan
                  kepuasan pelanggan.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Target Nasional & Global
                </span>
                <span>Orientasi Klien</span>
              </div>
            </div>

            {/* Card 2: Misi (7 cols on lg) */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between relative overflow-hidden group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#1e3a5f] text-white flex items-center justify-center font-bold text-lg mb-6 shadow-md shadow-blue-900/20">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                  Misi Kami
                </h3>

                {/* List with custom checkmarks */}
                <ul className="space-y-4">
                  {missionPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 group/item">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200 dark:border-emerald-800/80">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  Total 6 Pilar Komitmen Mutu
                </span>
                <span>Standar Mutu Berkelanjutan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SECTION 4: MESIN PRODUKSI (Dark Section)                               */}
      {/* ========================================================================= */}
      <section id="mesin-produksi" className="bg-[#1e3a5f] w-full py-24 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-16 items-center">
          {/* Text Left */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-400/20 text-blue-200 text-xs font-bold tracking-widest uppercase border border-blue-400/30">
              <Cpu className="w-3.5 h-3.5" />
              <span>Kapasitas Ekstra Besar</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Blow Moulding 500 liter
            </h2>

            {/* Paragraph 1 */}
            <p className="text-blue-100 text-lg leading-relaxed font-normal">
              Kemampuan mesin Blow Moulding kami mampu memproduksi tangki dan wadah industri
              dengan kapasitas hingga 500 liter dalam satu siklus pembentukan yang homogen.
            </p>

            {/* Paragraph 2 */}
            <p className="text-blue-100 text-lg leading-relaxed font-normal">
              Dirancang untuk ketahanan struktural luar biasa, produk hasil cetakan memiliki
              ketebalan dinding yang merata, tahan terhadap benturan keras, serta aman untuk
              penyimpanan zat cair industri dan kimia.
            </p>

            {/* Paragraph 3 */}
            <p className="text-blue-100 text-lg leading-relaxed font-normal">
              Setiap unit diproduksi di bawah pengawasan ketat teknisi bersertifikasi dan parameter
              mesin otomatis berpresisi mikro, memastikan tidak ada cacat, kebocoran, atau deviasi
              ukuran demi kepuasan klien jangka panjang.
            </p>

            {/* Machinery Features Badges */}
            <div className="pt-4 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-blue-950/50 border border-blue-400/20">
                <span className="block text-xl font-bold text-white">500L</span>
                <span className="text-xs text-blue-200">Kapasitas Maksimal Wadah</span>
              </div>
              <div className="p-3 rounded-xl bg-blue-950/50 border border-blue-400/20">
                <span className="block text-xl font-bold text-white">±0.05 mm</span>
                <span className="text-xs text-blue-200">Toleransi Presisi Cetak</span>
              </div>
            </div>
          </div>

          {/* Images Right (Two horizontal images stacked) */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {/* Machinery Image 1 */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-blue-400/20 group">
              <Image
                src="/images/assets/machinery-1.png"
                alt="Mesin Heavy-Duty Blow Moulding 500L"
                width={800}
                height={450}
                className="w-full h-[220px] sm:h-[240px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 text-white text-xs font-semibold bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                Mesin Blow Moulding Otomasi Presisi
              </div>
            </div>

            {/* Machinery Image 2 */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-blue-400/20 group">
              <Image
                src="/images/assets/machinery-2.png"
                alt="Lini Perakitan & Tooling In-House Asia Plastik"
                width={800}
                height={450}
                className="w-full h-[220px] sm:h-[240px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 text-white text-xs font-semibold bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                Kontrol Kualitas & Parameter Termal Mikro
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CORPORATE FOOTER                                                       */}
      {/* ========================================================================= */}
      <Footer />
    </div>
  );
}
