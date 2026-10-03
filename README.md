# Redesign-Development-Website-Perusahaan

Website Korporat **CV. ASIA PLASTIK** - Produsen Manufaktur & Cetak Plastik Presisi Tinggi (Injection Molding, Blow Molding, dan Kemasan Industri).

Dibangun menggunakan teknologi modern:
- **Next.js 15+ (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React Icons**

---

## 🚀 Fitur Utama (Phase 1)

1. **Sticky & Responsive Navbar**: Navigasi responsif dengan dukungan menu desktop & mobile drawer menu.
2. **Modern Industrial Hero Section**: Headline korporat, CTA ganda, indikator sertifikasi ISO 9001:2015, counter performa perusahaan, serta fallback card visual cerdas.
3. **About & Quality Pillars**: Highlight profil singkat pabrik, komitmen mutu (QC), mesin otomasi servo, dan bahan baku ramah lingkungan / *food-grade*.
4. **Products & Capabilities Grid**: Ringkasan produk cetak plastik (Injection, Blow Molding, Mold Maker, Wadah Industri).
5. **Corporate Footer**: Alamat pabrik lengkap, jam operasional, kontak WhatsApp & telepon, navigasi cepat, dan hak cipta.
6. **Local Database / Data Mocking**: Seluruh data teks dan tautan gambar tersentralisasi di `src/data/homeData.ts` dengan interface TypeScript yang kuat.

---

## 📂 Struktur Direktori

```text
src/
├── app/
│   ├── layout.tsx       # Root layout & Metadata
│   ├── page.tsx         # Halaman Utama (Assembly Navbar, Hero, About, Products, Footer)
│   └── globals.css      # Konfigurasi Tailwind CSS
├── components/
│   ├── Navbar.tsx       # Komponen Navigation Bar responsif
│   ├── Hero.tsx         # Komponen Hero section & visual placeholder
│   └── Footer.tsx       # Komponen Footer korporat
├── data/
│   └── homeData.ts      # Local mock database & tipe data TypeScript
└── lib/
    └── utils.ts         # Helper utility clsx & tailwind-merge
public/
└── images/              # Folder untuk meletakkan aset gambar asli
```

---

## 🛠️ Menjalankan Proyek Secara Lokal

1. **Install dependensi:**
   ```bash
   npm install
   ```

2. **Jalankan development server:**
   ```bash
   npm run dev
   ```

3. Buka browser di [http://localhost:3000](http://localhost:3000).

---

## 📷 Menambahkan Gambar Asli Website

Untuk mengganti placeholder dengan foto asli dari `asiaplastik.com`:
Letakkan file foto ke dalam folder `public/images/`:
- `hero.jpg` - Foto utama pabrik / fasilitas produksi
- `about.jpg` - Foto tim / fasilitas QC
- `product-injection.jpg` - Foto produk injection molding
- `product-blow.jpg` - Foto produk botol / jerigen
- `product-mold.jpg` - Foto perkakas cetakan mold
- `product-industrial.jpg` - Foto kemasan krat / wadah logistik
- `logo.png` - Logo resmi perusahaan
