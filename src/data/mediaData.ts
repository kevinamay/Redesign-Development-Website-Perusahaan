export interface VideoMediaItem {
  id: string;
  youtubeId: string;
  title: string;
  category: "profil" | "event" | "karyawan" | "csr";
  categoryLabel: string;
  duration: string;
  thumbnail: string;
  publishedAt: string;
  views: string;
  description: string;
  isShort?: boolean;
}

export const OFFICIAL_ASIA_PLASTIK_VIDEOS: VideoMediaItem[] = [
  {
    id: "yt-cp",
    youtubeId: "-_eDTyWDRB0",
    title: "Asia Plastik | Official Company Profile",
    category: "profil",
    categoryLabel: "Company Profile",
    duration: "8:24",
    thumbnail: "https://i.ytimg.com/vi/-_eDTyWDRB0/hq720.jpg",
    publishedAt: "2 tahun lalu",
    views: "891",
    description:
      "Profil lengkap resmi CV. Asia Plastik: fasilitas pabrik manufaktur, teknologi cetak injeksi & tiup presisi tinggi, ragam botol, toples, jerigen, dan komitmen mutu sejak 1985.",
  },
  {
    id: "yt-1",
    youtubeId: "hxsAZcoyUYE",
    title: "ASIAGUSTUSAN! Seru-seruan, Senam, Lomba Seluruh Karyawan Asia Plastik",
    category: "karyawan",
    categoryLabel: "Kegiatan Karyawan",
    duration: "3:58",
    thumbnail: "https://i.ytimg.com/vi/hxsAZcoyUYE/hq720.jpg",
    publishedAt: "2 bulan lalu",
    views: "101",
    description:
      "Keseruan perayaan kemerdekaan RI bersama seluruh staf produksi, operator mesin, dan jajaran manajemen Asia Plastik.",
  },
  {
    id: "yt-2",
    youtubeId: "HnBvolH7_fQ",
    title: "Open Booth Sponsorship Mini Soccer MS GLOW Yogyakarta, Masak Bareng King Abdi",
    category: "event",
    categoryLabel: "Event & Sponsorship",
    duration: "1:26",
    thumbnail: "https://i.ytimg.com/vi/HnBvolH7_fQ/hq720.jpg",
    publishedAt: "3 bulan lalu",
    views: "47",
    description:
      "Dukungan kemitraan dan booth sponsorship Asia Plastik dalam acara olahraga dan temu komunitas bersama King Abdi.",
  },
  {
    id: "yt-3",
    youtubeId: "uzd5Mi-njGI",
    title: "Berbagi Kebaikan untuk Sesama di Yayasan Cinta Kasih Ibu Teresa",
    category: "csr",
    categoryLabel: "CSR & Sosial",
    duration: "2:52",
    thumbnail: "https://i.ytimg.com/vi/uzd5Mi-njGI/hq720.jpg",
    publishedAt: "3 bulan lalu",
    views: "86",
    description:
      "Aksi kepedulian sosial perusahaan berbagi kasih dan bantuan langsung kepada anak-anak di Yayasan Cinta Kasih Ibu Teresa.",
  },
  {
    id: "yt-4",
    youtubeId: "zINmaVLHb5o",
    title: "Medical Check Up Asia Plastik 2026 bersama Dinas Kesehatan Kota Surabaya",
    category: "karyawan",
    categoryLabel: "Kesehatan & K3",
    duration: "1:51",
    thumbnail: "https://i.ytimg.com/vi/zINmaVLHb5o/hq720.jpg",
    publishedAt: "3 bulan lalu",
    views: "52",
    description:
      "Pemeriksaan kesehatan berkala bagi seluruh pekerja pabrik bekerja sama dengan Dinkes Surabaya demi standar K3 prima.",
  },
  {
    id: "yt-5",
    youtubeId: "8JpFgRJfdxU",
    title: "Ramadan Harmoni – Buka Bersama Keluarga Besar Asia Plastik",
    category: "karyawan",
    categoryLabel: "Kegiatan Karyawan",
    duration: "1:35",
    thumbnail: "https://i.ytimg.com/vi/8JpFgRJfdxU/hq720.jpg",
    publishedAt: "7 bulan lalu",
    views: "85",
    description:
      "Momen kehangatan silaturahmi dan buka puasa bersama antardivisi manufaktur, logistik, dan kantor CV. Asia Plastik.",
  },
  {
    id: "yt-6",
    youtubeId: "KQQ3VS1_oFM",
    title: "Berbagi Kebaikan, Bantuan Kursi untuk Gereja Baptis Indonesia Ngatup Kediri",
    category: "csr",
    categoryLabel: "CSR & Sosial",
    duration: "2:09",
    thumbnail: "https://i.ytimg.com/vi/KQQ3VS1_oFM/hq720.jpg",
    publishedAt: "7 bulan lalu",
    views: "77",
    description:
      "Penyaluran bantuan fasilitas kursi dan perlengkapan sarana ibadah masyarakat di Kediri, Jawa Timur.",
  },
  {
    id: "yt-7",
    youtubeId: "HSztFu6_svw",
    title: "Ucapan Syukur & Peresmian Kantor Baru Asia Plastik",
    category: "profil",
    categoryLabel: "Fasilitas Kantor",
    duration: "1:45",
    thumbnail: "https://i.ytimg.com/vi/HSztFu6_svw/hq720.jpg",
    publishedAt: "1 tahun lalu",
    views: "169",
    description:
      "Peresmian gedung kantor representatif baru CV. Asia Plastik sebagai pusat operasional dan layanan pelanggan industri.",
  },
  {
    id: "yt-8",
    youtubeId: "O-9USFLDIhw",
    title: "Job Fair Asia Plastik: Berburu SDM Unggul di Kampus STESIA Surabaya",
    category: "event",
    categoryLabel: "Rekrutmen & Kampus",
    duration: "1:18",
    thumbnail: "https://i.ytimg.com/vi/O-9USFLDIhw/hq720.jpg",
    publishedAt: "1 tahun lalu",
    views: "78",
    description:
      "Partisipasi Asia Plastik dalam perekrutan talenta muda profesional terbaik untuk memperkuat lini operasional dan manajerial.",
  },
  {
    id: "yt-9",
    youtubeId: "r36s6vmBSTc",
    title: "Jalan Sehat & Lomba Pencarian Bakat A Factor | HUT RI ke-80",
    category: "karyawan",
    categoryLabel: "Kegiatan Karyawan",
    duration: "3:15",
    thumbnail: "https://i.ytimg.com/vi/r36s6vmBSTc/hq720.jpg",
    publishedAt: "1 tahun lalu",
    views: "315",
    description:
      "Jalan sehat keluarga dan panggung pencarian bakat internal A-Factor untuk mempererat kekeluargaan dan semangat sportivitas.",
  },
  {
    id: "yt-10",
    youtubeId: "JAeLtKaHPTo",
    title: "Serunya Kebersamaan Bareng Anak-Anak Panti Asuhan Bukti Kasih",
    category: "csr",
    categoryLabel: "CSR & Sosial",
    duration: "3:57",
    thumbnail: "https://i.ytimg.com/vi/JAeLtKaHPTo/hq720.jpg",
    publishedAt: "1 tahun lalu",
    views: "148",
    description:
      "Kunjungan bakti sosial dan donasi bingkisan ceria bersama adik-adik panti asuhan di Surabaya.",
  },
  {
    id: "yt-11",
    youtubeId: "PgTUCAfBw_8",
    title: "Syukuran Pembangunan Kantor Baru Asia Plastik",
    category: "profil",
    categoryLabel: "Fasilitas Pabrik",
    duration: "3:04",
    thumbnail: "https://i.ytimg.com/vi/PgTUCAfBw_8/hq720.jpg",
    publishedAt: "2 tahun lalu",
    views: "254",
    description:
      "Doa bersama dan syukuran peletakan batu pertama perluasan area kantor dan fasilitas pergudangan terpadu.",
  },
  {
    id: "yt-12",
    youtubeId: "0fP_pBTkMaY",
    title: "Perayaan Natal Asia Group 2025 | God of Every Season",
    category: "karyawan",
    categoryLabel: "Kegiatan Karyawan",
    duration: "4:33",
    thumbnail: "https://i.ytimg.com/vi/0fP_pBTkMaY/hq720.jpg",
    publishedAt: "10 bulan lalu",
    views: "141",
    description:
      "Ibadah dan perayaan natal bersama seluruh jajaran komisaris, direksi, dan karyawan Asia Group.",
  },
];

// Fallback alias for compatibility
export const FALLBACK_MEDIA_VIDEOS = OFFICIAL_ASIA_PLASTIK_VIDEOS;
