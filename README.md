# 🏢 CV. ASIA PLASTIK - Redesign & Development Website Perusahaan

[![Website](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://redesign-development-website-perusa.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

Website profil korporat resmi **CV. ASIA PLASTIK**, produsen manufaktur kemasan dan komponen plastik presisi tinggi (*Plastic Injection Molding* & *Blow Moulding*) sejak tahun 1985 yang telah mengantongi sertifikasi mutu internasional **ISO 9001:2015**.

---

## 🌐 Live Production URL

Website telah berhasil di-deploy ke Vercel dan dapat diakses publik melalui tautan berikut:

👉 **[https://redesign-development-website-perusa.vercel.app/](https://redesign-development-website-perusa.vercel.app/)**

---

## 🌟 Fitur Unggulan

### 1. 🌐 Sistem Multi-Bahasa Terintegrasi (ID, EN, ZH)
- Mendukung 3 bahasa secara instan tanpa reload halaman: **Bahasa Indonesia (ID)**, **English (EN)**, dan **中文/Mandarin (ZH)**.
- Seluruh teks halaman, hero metrics, showcase produk, sertifikasi ISO, visi-misi, hingga formulir kontak terjemahkan dengan tepat dan profesional.
- Preferensi bahasa otomatis tersimpan di `localStorage` dan tersinkronisasi dengan atribut `lang` dokumen HTML.

### 2. 🌓 Draggable & Sliding Dark/Light Mode Switcher
- Tombol *toggle switch* geser di bar atas: **Geser ke Kiri = Mode Gelap**, **Geser ke Kanan = Mode Terang**.
- Dilengkapi efek *haptic feedback* (pada perangkat mobile) dan *tooltip* penjelas.
- Aset visual dan foto produk menggunakan transparansi RGBA WebP sehingga latar belakang produk menyatu sempurna di kedua mode tanpa batas putih yang canggung.
- Dual-mode logo perusahaan: Menggunakan logo slate gelap beresolusi tinggi di *Light Mode* dan logo putih bersih di *Dark Mode*.

### 3. 📱 Glassmorphic Mobile Navigation Drawer
- Desain *slide-out drawer* modern dari sisi kanan dengan *backdrop-blur* gelap (`bg-slate-900/60 backdrop-blur-sm`).
- Navigasi dengan ikon tebal, animasi transisi hover bergeser, selektor tema terintegrasi, dan kartu kontak representatif serta tautan media sosial.

### 4. 🏢 Interactive Company Overview Showcase (`AboutPreview`)
- Tata letak *Two-Column Split Container* yang bersih dan modern.
- Kolom kiri menyediakan navigasi langkah interaktif (01 Tentang Kami, 02 Sertifikat ISO, 03 Visi & Nilai) dengan aksen aktif biru menyala.
- Kolom kanan menampilkan *dedicated showcase card* dinamis berisi deskripsi mendalam, kartu mikro keunggulan mutu, dan foto resolusi tinggi beraksen *dashboard badge*.

### 5. 🗺️ Peta Distribusi Global Interaktif (`GlobalDistribution`)
- Visualisasi peta dunia bergaya *dot-matrix* modern dengan pin lokasi berdenyut (*pulsating location pins*) menggunakan animasi denyut dinamis (`animate-ping`).
- Menampilkan titik distribusi utama mencakup Surabaya (Kantor Pusat & Fasilitas Produksi), kawasan Asia Pasifik, Australia, Timur Tengah, Eropa Barat, dan Amerika Utara.

### 6. 📦 Bento-Box Flagship Product Showcase (`NewProduct`)
- Menampilkan produk unggulan (Solid Foldable Industrial Basket) lengkap dengan spesifikasi teknis dimensi, bobot, sertifikasi, dan kapasitas.
- Galeri foto interaktif yang mendukung **drag mouse pada desktop** dan **swipe sentuh pada mobile**.

### 7. 📄 Halaman Khusus Profil Perusahaan (`/about`)
- Halaman komprehensif di rute `/about`:
  - **Parallax Hero Header** dengan latar belakang gambar tetap (`bg-fixed`).
  - **Section Produksi Kustom**: Penjelasan unit in-house tooling dengan komposisi foto bertumpuk (*overlapping*).
  - **Section Sertifikasi ISO 9001:2015**: Full-width break section dramatis dengan metrik audit mutu.
  - **Section Visi & Misi**: Kartu Bento 6 pilar komitmen mutu berkelanjutan.
  - **Section Mesin Produksi 500 Liter**: Uraian kapasitas mesin blow moulding ekstra besar dan toleransi presisi mikro.

### 8. 🛡️ Arsitektur Bebas Hydration Mismatch & Anti-FOUC
- Skrip inisialisasi tema dijalankan secara sinkron sebelum paint untuk mencegah *flash of unstyled content* (FOUC).
- Dioptimalkan dengan atribut `suppressHydrationWarning` untuk mencegah error hidrasi dari ekstensi browser pihak ketiga (seperti pemblokir pop-up/iklan).

---

## 🛠️ Tech Stack & Ekosistem

| Kategori | Teknologi | Deskripsi |
|---|---|---|
| **Framework** | Next.js 16.3.8 (App Router & Turbopack) | Server Components, SEO Metadata, Fast Refresh |
| **Library UI** | React 19.2.8 | Prerendered Static Architecture & Hooks |
| **Styling** | Tailwind CSS v4 & Vanilla CSS | Modern Utility Styling, Responsive Grid, Dark Mode |
| **Bahasa** | TypeScript 5 | Strict Type Safety & Static Typing |
| **Iconography** | Lucide React | Ikon vektor modern & ringan |
| **Deployment** | Vercel Edge Network | Global CDN, HTTPS, Instant CI/CD |

---

## 📂 Struktur Proyek

```text
CV.ASIA PLASTIK/
├── public/
│   └── images/
│       ├── assets/             # Aset gambar Tentang Kami, Peta Dunia, Mesin & Fasilitas
│       │   ├── about-1.png
│       │   ├── about-hero.jpg
│       │   ├── iso-bg.png
│       │   ├── visi.png
│       │   ├── warehouse.png
│       │   ├── forklift.png
│       │   ├── machinery-1.png
│       │   ├── machinery-2.png
│       │   └── world-map.png
│       ├── product/            # Foto produk transparan RGBA WebP (Light & Dark mode ready)
│       ├── logo.webp           # Logo putih untuk Dark Mode
│       └── logo-dark.webp      # Logo slate untuk Light Mode
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx        # Halaman lengkap Tentang Kami (/about)
│   │   ├── globals.css         # Styling global Tailwind CSS
│   │   ├── layout.tsx          # Root layout & inisialisasi tema
│   │   └── page.tsx            # Halaman utama (Hero, AboutPreview, GlobalDistribution, NewProduct, Footer)
│   ├── components/
│   │   ├── AboutPreview.tsx    # Showcase tab interaktif profil perusahaan
│   │   ├── Footer.tsx          # Footer korporat & legalitas
│   │   ├── GlobalDistribution.tsx # Visualisasi peta distribusi ekspor dunia
│   │   ├── Hero.tsx            # Top bar, navbar responsif, headline, & metrics
│   │   ├── MobileDrawer.tsx    # Sidebar menu mobile glassmorphism
│   │   ├── NewProduct.tsx      # Showcase produk bento-box dengan drag/swipe
│   │   └── ThemeToggle.tsx     # Draggable theme toggle switch (Kiri = Gelap, Kanan = Terang)
│   ├── data/
│   │   ├── homeData.ts         # Data mock & interface tipe data
│   │   └── translations.ts     # Sistem kamus bahasa ID, EN, ZH
│   └── lib/
│       └── utils.ts            # Utility helper clsx & tailwind-merge
├── package.json
└── README.md
```

---

## 💻 Panduan Menjalankan Proyek Secara Lokal

1. **Clone repository:**
   ```bash
   git clone https://github.com/kevinamay/Redesign-Development-Website-Perusahaan.git
   cd Redesign-Development-Website-Perusahaan
   ```

2. **Install seluruh dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```

4. **Buka di browser:**
   Akses `http://localhost:3000` di browser Anda.

5. **Build untuk production:**
   ```bash
   npm run build
   npm run start
   ```

---

## 📄 Hak Cipta & Kepemilikan

Seluruh materi, logo, dan konten merupakan hak cipta milik **CV. ASIA PLASTIK** © 1985 - 2026. Seluruh hak cipta dilindungi undang-undang.
