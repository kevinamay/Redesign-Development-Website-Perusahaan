export interface CategoryVideoItem {
  id: string;
  title: string;
  videoUrl: string;
  duration?: string;
  tag?: string;
  description?: string;
}

export interface CategoryVideoData {
  categoryId: string;
  categoryName: string;
  heading: string;
  subheading: string;
  videos: CategoryVideoItem[];
}

/**
 * Data video resmi hasil scraping dari asiaplastik.com
 * Dipetakan 1-to-1 dengan 15 kategori produk katalog Asia Plastik
 */
export const CATEGORY_VIDEOS: Record<string, CategoryVideoData> = {
  "pallet-industri": {
    categoryId: "pallet-industri",
    categoryName: "Pallet Industri",
    heading: "Video Uji Ketahanan & Demonstrasi Palet Plastik",
    subheading:
      "Rekaman pengujian beban gudang, racking otomatis, dan ketahanan impak resmi dari pabrik Asia Plastik.",
    videos: [
      {
        id: "pallet-vid-1",
        title: "Uji Stacking & Distribusi Pergudangan Pallet",
        videoUrl: "https://asiaplastik.com/data/product_video/2-20240622035506.mp4",
        duration: "0:16",
        tag: "Uji Beban Gudang",
        description: "Simulasi penumpukan beban vertikal pallet plastik heavy duty.",
      },
      {
        id: "pallet-vid-2",
        title: "Pengujian Durabilitas Palet P Series",
        videoUrl: "https://asiaplastik.com/data/product_video/49-20240830073515.mp4",
        duration: "0:34",
        tag: "Ketahanan Impak",
        description: "Pengujian drop test dan kekuatan struktur kisi-kisi palet.",
      },
      {
        id: "pallet-vid-3",
        title: "Manuver Forklift & Racking Otomatis",
        videoUrl: "https://asiaplastik.com/data/product_video/50-20240830073544.mp4",
        duration: "0:08",
        tag: "Aplikasi Logistik",
        description: "Pengujian stabilitas palet saat diangkat oleh forklift pergudangan.",
      },
    ],
  },

  "keranjang-industri": {
    categoryId: "keranjang-industri",
    categoryName: "Keranjang Industri",
    heading: "Video Uji Beban & Fleksibilitas Keranjang Industri",
    subheading:
      "Demonstrasi kekuatan penumpukan, ketahanan banting, dan daya tampung keranjang industri berpori.",
    videos: [
      {
        id: "keranjang-vid-1",
        title: "Demonstrasi Keranjang Industri T-25",
        videoUrl: "https://asiaplastik.com/data/product_video/3-20240622035530.mp4",
        duration: "0:25",
        tag: "Kekuatan Banting",
        description: "Pengujian ketangguhan material food-grade terhadap benturan.",
      },
      {
        id: "keranjang-vid-2",
        title: "Uji Penumpukan Beban Keranjang Multiguna",
        videoUrl: "https://asiaplastik.com/data/product_video/47-20240830073044.mp4",
        duration: "0:30",
        tag: "Stacking Test",
        description: "Uji susun bertingkat untuk pergudangan pangan dan logistik.",
      },
      {
        id: "keranjang-vid-3",
        title: "Daya Angkut dan Stabilitas Keranjang",
        videoUrl: "https://asiaplastik.com/data/product_video/48-20240830073113.mp4",
        duration: "0:31",
        tag: "Daya Tahan",
        description: "Pengujian beban dinamis saat pemindahan bahan baku.",
      },
    ],
  },

  "box-lipat": {
    categoryId: "box-lipat",
    categoryName: "Box Lipat",
    heading: "Video Mekanisme Lipat & Hemat Ruang 75%",
    subheading:
      "Lihat kemudahan pelipatan presisi dan kekokohan engsel box lipat saat diisi muatan penuh.",
    videos: [
      {
        id: "box-lipat-vid-1",
        title: "Mekanisme Buka-Tutup & Penguncian Box Lipat",
        videoUrl: "https://asiaplastik.com/data/product_video/4-20240622035629.mp4",
        duration: "0:20",
        tag: "Hemat Ruang",
        description: "Demonstrasi engsel lipat yang efisien menghemat ruang hingga 75%.",
      },
    ],
  },

  "blok-lalu-lintas": {
    categoryId: "blok-lalu-lintas",
    categoryName: "Blok Lalu Lintas dan Kerucut",
    heading: "Video Ketahanan Road Barrier & Traffic Cone",
    subheading:
      "Pengujian stabilitas angin, pengisian air/pasir pemberat, dan elastisitas benturan kendaraan.",
    videos: [
      {
        id: "traffic-vid-1",
        title: "Road Barrier Heavy-Duty: Uji Stabilitas Air",
        videoUrl: "https://asiaplastik.com/data/product_video/5-20240622035642.mp4",
        duration: "0:14",
        tag: "Road Barrier",
        description: "Pengisian ballast air dan stabilitas pembatas jalan raya.",
      },
      {
        id: "traffic-vid-2",
        title: "Elastisitas Traffic Cone Anti-Pecah",
        videoUrl: "https://asiaplastik.com/data/product_video/6-20240622035656.mp4",
        duration: "0:14",
        tag: "Traffic Cone",
        description: "Ketahanan cone lentur saat terlindas kendaraan tanpa pecah.",
      },
      {
        id: "traffic-vid-3",
        title: "Pemasangan Interlock Road Barrier Jalan Tol",
        videoUrl: "https://asiaplastik.com/data/product_video/51-20250610062348.mp4",
        duration: "0:25",
        tag: "Konektor Interlock",
        description: "Sistem penguncian antar modul pembatas jalan cepat dan kokoh.",
      },
    ],
  },

  "botol-pupuk-pet": {
    categoryId: "botol-pupuk-pet",
    categoryName: "Botol Pupuk PET",
    heading: "Video Kemasan Cairan Kimia Pertanian & Pupuk",
    subheading:
      "Pengujian ketahanan dinding botol PET terhadap tekanan gas pupuk dan segel anti-bocor.",
    videos: [
      {
        id: "pupuk-vid-1",
        title: "Uji Tekanan & Kekedapan Botol Pupuk",
        videoUrl: "https://asiaplastik.com/data/product_video/45-20240830072718.mp4",
        duration: "0:37",
        tag: "Chemical Grade",
        description: "Segel induksi anti rembes untuk formula agrokimia cair.",
      },
      {
        id: "pupuk-vid-2",
        title: "Ketahanan Jatuh Botol Agrokimia PET",
        videoUrl: "https://asiaplastik.com/data/product_video/46-20240830072755.mp4",
        duration: "0:37",
        tag: "Drop Test",
        description: "Uji banting botol terisi cairan tanpa mengalami kebocoran.",
      },
    ],
  },

  "kosmetik": {
    categoryId: "kosmetik",
    categoryName: "Kosmetik",
    heading: "Video Kemasan Kosmetik & Skincare Presisi",
    subheading:
      "Kejernihan botol estetik, kelembutan ulir tutup, dan ketahanan higienis standar farmasi.",
    videos: [
      {
        id: "kosmetik-vid-1",
        title: "Finishing Glossy Botol Skincare & Toner",
        videoUrl: "https://asiaplastik.com/data/product_video/16-20240704075904.mp4",
        duration: "0:15",
        tag: "Estetika & Kilau",
        description: "Permukaan bening kristal dengan presisi ulir pump kosmetik.",
      },
      {
        id: "kosmetik-vid-2",
        title: "Uji Pompa Pump & Spray Kosmetik",
        videoUrl: "https://asiaplastik.com/data/product_video/42-20240830072037.mp4",
        duration: "0:34",
        tag: "Presisi Dispenser",
        description: "Pengujian kelancaran keluaran cairan kental serum dan lotion.",
      },
      {
        id: "kosmetik-vid-3",
        title: "Varian Bentuk Jar & Pot Cream",
        videoUrl: "https://asiaplastik.com/data/product_video/43-20240830072111.mp4",
        duration: "0:47",
        tag: "Pot & Jar",
        description: "Kemasan jar kedap udara untuk melindungi formula krim wajah.",
      },
      {
        id: "kosmetik-vid-4",
        title: "Ketahanan Segel Tutup Kosmetik",
        videoUrl: "https://asiaplastik.com/data/product_video/44-20240830072158.mp4",
        duration: "0:44",
        tag: "Anti Bocor",
        description: "Uji getaran pengiriman produk kosmetik.",
      },
    ],
  },

  "botol-minyak-goreng": {
    categoryId: "botol-minyak-goreng",
    categoryName: "Botol Minyak Goreng",
    heading: "Video Botol Minyak Goreng Food Grade PET",
    subheading:
      "Kekuatan pegangan handle, kejernihan botol pangan, dan kestabilan tuang minyak.",
    videos: [
      {
        id: "minyak-vid-1",
        title: "Ketangguhan Botol Minyak 1L & 2L",
        videoUrl: "https://asiaplastik.com/data/product_video/7-20240622035837.mp4",
        duration: "0:17",
        tag: "100% Food Grade",
        description: "Pengujian kekuatan genggam dan leher botol saat pengisian otomatis.",
      },
      {
        id: "minyak-vid-2",
        title: "Uji Stacking Karton Botol Minyak",
        videoUrl: "https://asiaplastik.com/data/product_video/40-20240830071657.mp4",
        duration: "0:27",
        tag: "Stacking Kardus",
        description: "Distribusi aman tanpa resiko botol penyok saat ditumpuk tinggi.",
      },
      {
        id: "minyak-vid-3",
        title: "Tutup Anti Tetes & Segel Putar",
        videoUrl: "https://asiaplastik.com/data/product_video/41-20240830071724.mp4",
        duration: "0:27",
        tag: "Tutup Segel",
        description: "Desain tutup mulut botol yang menuangkan minyak secara halus.",
      },
    ],
  },

  "beragam-kemasan-pet": {
    categoryId: "beragam-kemasan-pet",
    categoryName: "Beragam Kemasan PET",
    heading: "Video Kemasan Minuman, Saus, & Cairan Konsumsi",
    subheading:
      "Ragam ukuran toples dan botol PET serbaguna dengan kejernihan maksimal dan bebas BPA.",
    videos: [
      {
        id: "pet-vid-1",
        title: "Produksi High-Speed Botol Minuman PET",
        videoUrl: "https://asiaplastik.com/data/product_video/8-20240622035854.mp4",
        duration: "0:40",
        tag: "Blow Moulding",
        description: "Proses peniupan botol presisi dengan kecepatan tinggi.",
      },
      {
        id: "pet-vid-2",
        title: "Kekedapan Toples Selai & Bumbu",
        videoUrl: "https://asiaplastik.com/data/product_video/9-20240622040014.mp4",
        duration: "0:14",
        tag: "Toples Makanan",
        description: "Segel tutup ulir rapat menjaga kerenyahan makanan.",
      },
      {
        id: "pet-vid-3",
        title: "Uji Ketahanan Jatuh Botol PET",
        videoUrl: "https://asiaplastik.com/data/product_video/36-20240830071219.mp4",
        duration: "0:38",
        tag: "Uji Banting",
        description: "Daya tahan tinggi material PET saat mengalami benturan tak sengaja.",
      },
    ],
  },

  "jerigen-hdpe": {
    categoryId: "jerigen-hdpe",
    categoryName: "Jerigen HDPE",
    heading: "Video Durabilitas Jerigen Industri HDPE",
    subheading:
      "Pengujian ketebalan dinding jerigen, kekuatan handle angkat, dan segel ulir anti rembes.",
    videos: [
      {
        id: "jerigen-vid-1",
        title: "Uji Beban Vertikal Jerigen HDPE 5L & 20L",
        videoUrl: "https://asiaplastik.com/data/product_video/18-20240704092602.mp4",
        duration: "0:20",
        tag: "Beban Susun",
        description: "Kekuatan tumpukan jerigen di atas palet pergudangan.",
      },
      {
        id: "jerigen-vid-2",
        title: "Kekuatan Handle Pegangan Jerigen",
        videoUrl: "https://asiaplastik.com/data/product_video/19-20240704094206.mp4",
        duration: "0:25",
        tag: "Handle Kuat",
        description: "Handle ergonomis tidak retak saat diisi muatan penuh.",
      },
      {
        id: "jerigen-vid-3",
        title: "Segel Tutup Induksi Anti Bocor",
        videoUrl: "https://asiaplastik.com/data/product_video/20-20240704094455.mp4",
        duration: "0:30",
        tag: "Segel Induksi",
        description: "Keamanan pengiriman cairan jarak jauh bebas rembesan.",
      },
      {
        id: "jerigen-vid-4",
        title: "Uji Tahan Suhu Ekstrem Jerigen",
        videoUrl: "https://asiaplastik.com/data/product_video/35-20240830070541.mp4",
        duration: "0:40",
        tag: "Suhu Stabil",
        description: "Ketahanan material virgin HDPE terhadap panas terik matahari.",
      },
    ],
  },

  "jerigen-chemical-hdpe": {
    categoryId: "jerigen-chemical-hdpe",
    categoryName: "Jerigen Chemical HDPE",
    heading: "Video Kemasan Khusus Zat Kimia Korosif",
    subheading:
      "Material HDPE tebal tahan senyawa asam, alkali, dan bahan kimia industri berat berstandar UN.",
    videos: [
      {
        id: "chemical-vid-1",
        title: "Uji Ketahanan Bahan Kimia Berbahaya",
        videoUrl: "https://asiaplastik.com/data/product_video/34-20240830065932.mp4",
        duration: "0:35",
        tag: "UN Certified",
        description: "Pengujian dinding tebal jerigen terhadap zat kimia reaktif.",
      },
    ],
  },

  "jerigen-oli": {
    categoryId: "jerigen-oli",
    categoryName: "Jerigen Oli",
    heading: "Video Kemasan Pelumas & Oli Otomotif",
    subheading:
      "Desain moncong tuang presisi, garis strip indikator volume, dan segel keamanan oli.",
    videos: [
      {
        id: "oli-vid-1",
        title: "Uji Kebocoran & Tuang Oli Bebas Cipratan",
        videoUrl: "https://asiaplastik.com/data/product_video/17-20240704092205.mp4",
        duration: "0:22",
        tag: "Moncong Presisi",
        description: "Aliran cairan pelumas lancar tanpa menetes ke badan jerigen.",
      },
    ],
  },

  "jerigen-lipat": {
    categoryId: "jerigen-lipat",
    categoryName: "Jerigen Lipat",
    heading: "Video Fleksibilitas & Penghematan Ruang Jerigen Lipat",
    subheading:
      "Solusi praktis tanggap darurat dan ekspedisi: mengembang saat diisi, kempis saat kosong.",
    videos: [
      {
        id: "lipat-vid-1",
        title: "Mekanisme Pemadatan Jerigen Lipat",
        videoUrl: "https://asiaplastik.com/data/product_video/11-20240622040302.mp4",
        duration: "0:18",
        tag: "Hemat Ruang",
        description: "Bahan polimer fleksibel yang tahan lipatan berulang ribuan kali.",
      },
    ],
  },

  "botol-hdpe": {
    categoryId: "botol-hdpe",
    categoryName: "Botol HDPE",
    heading: "Video Botol HDPE Farmasi & Kebersihan Rumah Tangga",
    subheading:
      "Tahan bahan pemutih, deterjen, dan cairan sanitasi dengan penutup ulir presisi tinggi.",
    videos: [
      {
        id: "botol-hdpe-vid-1",
        title: "Uji Ketahanan Bahan Kimia Rumah Tangga",
        videoUrl: "https://asiaplastik.com/data/product_video/12-20240622040329.mp4",
        duration: "0:20",
        tag: "Deterjen & Cairan Pembersih",
        description: "Botol tidak kembung atau melengkung saat kontak cairan desinfektan.",
      },
      {
        id: "botol-hdpe-vid-2",
        title: "Presisi Tutup Ulir & Trigger Spray",
        videoUrl: "https://asiaplastik.com/data/product_video/13-20240622040349.mp4",
        duration: "0:20",
        tag: "Trigger Spray",
        description: "Kecocokan leher botol standar industri untuk berbagai tipe sprayer.",
      },
      {
        id: "botol-hdpe-vid-3",
        title: "Ketahanan Dinding Botol Terhadap Benturan",
        videoUrl: "https://asiaplastik.com/data/product_video/31-20240830065428.mp4",
        duration: "0:35",
        tag: "Anti Pecah",
        description: "Material polietilen densitas tinggi yang elastis dan tangguh.",
      },
    ],
  },

  "kaleng-pail-plastik": {
    categoryId: "kaleng-pail-plastik",
    categoryName: "Kaleng & Pail Plastik",
    heading: "Video Pail Cat & Kimia Heavy-Duty 20L",
    subheading:
      "Tutup segel kedap udara anti tumpah, pegangan kawat galvanis kokoh, dan ketahanan susun tinggi.",
    videos: [
      {
        id: "pail-vid-1",
        title: "Uji Beban Susun Pail 20 Liter",
        videoUrl: "https://asiaplastik.com/data/product_video/24-20240830064258.mp4",
        duration: "0:45",
        tag: "Beban Pail 20L",
        description: "Mampu menopang hingga 5 tingkat susun pail cat industri penuh.",
      },
      {
        id: "pail-vid-2",
        title: "Kekuatan Handle Besi Galvanis",
        videoUrl: "https://asiaplastik.com/data/product_video/25-20240830064424.mp4",
        duration: "0:50",
        tag: "Grip Kawat",
        description: "Telinga pail dan kawat tebal tidak lepas saat diangkat beban 25 KG.",
      },
      {
        id: "pail-vid-3",
        title: "Segel Tutup Snap-On Anti Tumpah",
        videoUrl: "https://asiaplastik.com/data/product_video/26-20240830064530.mp4",
        duration: "0:35",
        tag: "Tutup Kedap",
        description: "Kunci ring pengaman menjaga kualitas cairan cat dan adukan kimia.",
      },
    ],
  },

  "perikanan-dan-kelautan": {
    categoryId: "perikanan-dan-kelautan",
    categoryName: "Perikanan dan Kelautan",
    heading: "Video Wadah Hasil Laut & Coolbox Tahan Air Garam",
    subheading:
      "Ketahanan terhadap korosi air asin, isolasi suhu dingin, dan higienitas hasil tangkapan laut.",
    videos: [
      {
        id: "ikan-vid-1",
        title: "Uji Higienitas & Ketahanan Air Asin",
        videoUrl: "https://asiaplastik.com/data/product_video/22-20240830042806.mp4",
        duration: "0:30",
        tag: "Marine Grade",
        description: "Material tidak berlumut dan mudah dibersihkan setelah kontak air laut.",
      },
      {
        id: "ikan-vid-2",
        title: "Kapasitas & Ketahanan Banting Keranjang Ikan",
        videoUrl: "https://asiaplastik.com/data/product_video/23-20240830062925.mp4",
        duration: "0:45",
        tag: "Daya Tahan Pelabuhan",
        description: "Tangguh terhadap gesekan dek kapal dan lantai beton dermaga.",
      },
    ],
  },
};

/**
 * Helper untuk mendapatkan data video kategori dengan fallback yang aman
 */
export function getCategoryVideos(categoryId: string): CategoryVideoData {
  if (CATEGORY_VIDEOS[categoryId]) {
    return CATEGORY_VIDEOS[categoryId];
  }
  // Fallback default
  return CATEGORY_VIDEOS["pallet-industri"];
}

