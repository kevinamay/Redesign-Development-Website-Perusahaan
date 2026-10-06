export interface ProductSpec {
  icon: "Ruler" | "Weight" | "Box" | "Layers" | "Shield";
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  name: string;
  badge?: string;
  image: string;
  specs: ProductSpec[];
  description: string;
  features?: string[];
  capacity?: string;
  material?: string;
  loadStatic?: string;
  loadDynamic?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  displayName: string;
  subtitle: string;
  description: string;
  products: ProductItem[];
}

export const catalogCategories: ProductCategory[] = [
  {
    id: "pallet-industri",
    name: "Pallet Industri",
    displayName: "PALLET INDUSTRI",
    subtitle: "Solusi Palet Plastik Standar Logistik, Higienis & Pergudangan Otomasi",
    description:
      "Didesain presisi untuk daya dukung beban berat, kompatibel dengan hand pallet & forklift 4-arah, tahan kelembapan, bebas rayap, serta memenuhi standar ekspor internasional.",
    products: [
      {
        id: "pallet-p-series",
        name: "PALLET P SERIES",
        badge: "Flagship B2B Choice",
        image: "/images/product/Pallet/pallet1.png",
        specs: [
          {
            icon: "Ruler",
            label: "Dimensi",
            value: "1200 x 1165 x 140 MM",
          },
          {
            icon: "Weight",
            label: "Berat",
            value: "12 KG",
          },
        ],
        description:
          "Palet plastik dari Asia Plastik dirancang khusus untuk memenuhi kebutuhan industri dan logistik modern. Dibuat dari material berkualitas tinggi, Palet Plastik ini menawarkan ketahanan luar biasa terhadap beban berat, benturan, serta kondisi lingkungan ekstrem. Tidak seperti palet kayu, Palet Plastik bebas dari serpihan, tidak menyerap air, dan lebih tahan terhadap serangan hama.",
        features: [
          "Beban Dinamis: 1.500 KG / Beban Statis: 4.000 KG",
          "Akses 4-Arah (Forklift & Hand Pallet)",
          "Bahan Virgin HDPE / Recycled Grade Berkualitas",
          "Bebas Jamur & Memenuhi Regulasi Higienis ISPM 15",
        ],
        material: "High Density Polyethylene (HDPE)",
        loadStatic: "4.000 KG",
        loadDynamic: "1.500 KG",
      },
      {
        id: "pallet-heavy-duty-m",
        name: "PALLET HEAVY DUTY M SERIES",
        badge: "Heavy Duty Racking",
        image: "/images/product/Pallet/pallet2.jpg",
        specs: [
          {
            icon: "Ruler",
            label: "Dimensi",
            value: "1200 x 1000 x 150 MM",
          },
          {
            icon: "Weight",
            label: "Berat",
            value: "14.5 KG",
          },
        ],
        description:
          "Palet plastik heavy duty tipe M dirancang khusus untuk sistem racking pergudangan bertingkat dan muatan statis ekstrim hingga 5 ton. Dilengkapi strip anti-slip dan struktur grid bertulang untuk kekakuan optimal saat menopang muatan tumpukan.",
        features: [
          "Beban Statis hingga 5.000 KG",
          "Dirancang untuk Racking System Gudang Modern",
          "Permukaan Non-Slip dengan Pengunci Gesekan",
          "Tahan Terhadap Minyak, Asam, & Suhu Dingin",
        ],
        material: "HDPE Ultra-Tough Resin",
        loadStatic: "5.000 KG",
        loadDynamic: "1.800 KG",
      },
    ],
  },
  {
    id: "keranjang-industri",
    name: "Keranjang Industri",
    displayName: "KERANJANG INDUSTRI",
    subtitle: "Wadah Distribusi & Penyimpanan Logistik Industri Kuat & Tahan Banting",
    description:
      "Keranjang plastik industri berperforasi atau tertutup dengan ketahanan impak tinggi, ideal untuk distribusi hortikultura, komponen otomotif, tekstil, dan industri pengolahan makanan.",
    products: [
      {
        id: "keranjang-t38",
        name: "KERANJANG INDUSTRI T-38",
        badge: "Paling Populer",
        image: "/images/product/Keranjang/keranjangIndustriT-38.jpg",
        specs: [
          {
            icon: "Ruler",
            label: "Dimensi",
            value: "620 x 430 x 380 MM",
          },
          {
            icon: "Weight",
            label: "Berat",
            value: "2.4 KG",
          },
        ],
        description:
          "Keranjang industri berpori tipe T-38 memiliki sirkulasi udara optimal dan daya tahan tumpukan hingga belasan tingkat. Dibuat dengan material Polypropylene murni untuk mencegah pecah getas saat mengalami benturan keras.",
        features: [
          "Dapat Ditumpuk Bertingkat (Interlocking Stacking)",
          "Sirkulasi Udara Merata untuk Hasil Bumi / Komoditas",
          "Pegangan Ergonomis Nyaman Dipindahkan",
        ],
      },
      {
        id: "keranjang-besar",
        name: "KERANJANG INDUSTRI BESAR",
        badge: "Kapasitas Ekstra",
        image: "/images/product/Keranjang/keranjangindustriBesar.jpg",
        specs: [
          {
            icon: "Ruler",
            label: "Dimensi",
            value: "615 x 425 x 315 MM",
          },
          {
            icon: "Weight",
            label: "Berat",
            value: "2.1 KG",
          },
        ],
        description:
          "Keranjang plastik kapasitas besar serbaguna untuk kebutuhan perakitan pabrik, pergudangan ritel modern, dan penampungan komponen industri dengan durabilitas prima.",
        features: [
          "Dinding Tebal Bertulang di Setiap Sudut",
          "Tersedia Pilihan Warna Identifikasi Logistik",
          "Material Food Grade Ramah Produk Segar",
        ],
      },
      {
        id: "keranjang-tertutup",
        name: "KERANJANG TERTUTUP SOLID",
        badge: "Higienis & Anti Bocor",
        image: "/images/product/Keranjang/keranjangtertutup.jpg",
        specs: [
          {
            icon: "Ruler",
            label: "Dimensi",
            value: "530 x 365 x 320 MM",
          },
          {
            icon: "Weight",
            label: "Berat",
            value: "1.8 KG",
          },
        ],
        description:
          "Wadah plastik industri solid tanpa lubang untuk melindungi barang dari kontaminasi debu eksternal serta mencegah rembesan cairan pada proses penanganan bahan kimiawi atau bahan baku basah.",
        features: [
          "Dinding Padat Tertutup Rapat",
          "Mudah Dibersihkan & Disterilisasi",
          "Ketahanan Kimia & Oli Tinggi",
        ],
      },
      {
        id: "keranjang-chiken-box",
        name: "CHICKEN CRATE / BOX PETERNAKAN",
        badge: "Standar Peternakan",
        image: "/images/product/Keranjang/chikenbox.jpg",
        specs: [
          {
            icon: "Ruler",
            label: "Dimensi",
            value: "750 x 550 x 270 MM",
          },
          {
            icon: "Weight",
            label: "Berat",
            value: "5.5 KG",
          },
        ],
        description:
          "Krat pengangkutan unggas dan ternak berstandar keamanan tinggi dengan pintu geser atas halus untuk meminimalkan risiko cidera hewan selama perjalanan logistik antar daerah.",
        features: [
          "Pintu Geser Ergonomis Cepat Dibuka",
          "Ventilasi Luas Menjaga Suhu Tetap Sejuk",
          "Ketahanan Cuaca & Paparan Sinar UV Teruji",
        ],
      },
    ],
  },
  {
    id: "box-lipat",
    name: "Box Lipat",
    displayName: "BOX LIPAT (FOLDABLE CONTAINER)",
    subtitle: "Kontainer Lipat Pintar Hemat Ruang untuk Efisiensi Logistik Sirkular",
    description:
      "Menghemat volume ruang pergudangan dan biaya armada transportasi balik hingga 75%. Sistem mekanisme lipatan kokoh yang cepat dirakit dan diratakan kembali.",
    products: [
      {
        id: "box-lipat-solid",
        name: "FOLDABLE CONTAINER BOX SOLID",
        badge: "Smart Returnable Logistics",
        image: "/images/product/Box Lipat/boxlipat.jpg",
        specs: [
          {
            icon: "Ruler",
            label: "Dimensi",
            value: "600 x 400 x 300 MM",
          },
          {
            icon: "Weight",
            label: "Berat",
            value: "2.8 KG",
          },
        ],
        description:
          "Solusi kemasan bolak-balik (returnable packaging) revolusioner. Box ini dapat dilipat rata dalam hitungan detik saat tidak digunakan, memangkas biaya truk muatan kosong secara signifikan.",
        features: [
          "Rasio Lipatan 1:4 (Hemat Ruang 75%)",
          "Mekanisme Kunci Pin Presisi & Tahan Lama",
          "Kompatibel dengan Konveyor & Sistem Otomasi",
        ],
      },
      {
        id: "box-lipat-ventilasi",
        name: "VENTILATED FOLDABLE CRATE",
        badge: "Agro & Fresh Produce",
        image: "/images/product/Box Lipat/boxlipatlubang.jpg",
        specs: [
          {
            icon: "Ruler",
            label: "Dimensi",
            value: "600 x 400 x 280 MM",
          },
          {
            icon: "Weight",
            label: "Berat",
            value: "2.5 KG",
          },
        ],
        description:
          "Crate lipat berpori untuk rantai dingin (cold chain) sayur, buah, dan produk segar. Memastikan sirkulasi udara dingin mengalir bebas ke seluruh isi kemasan.",
        features: [
          "Aliran Udara Dingin 360 Derajat",
          "Bahan PP Food Contact Bersertifikasi Aman",
          "Daya Tumpuk Aman Mencapai 5 Tingkat",
        ],
      },
    ],
  },
  {
    id: "blok-lalu-lintas",
    name: "Blok Lalu Lintas",
    displayName: "BLOK LALU LINTAS & ROAD SAFETY",
    subtitle: "Pembatas Jalan & Alat Keselamatan Rekayasa Lalu Lintas Standar Dishub",
    description:
      "Perlengkapan pembatas jalan (road barrier) dan traffic cone berbahan plastik elastis tahan benturan kendaraan dan cuaca tropis ekstrem.",
    products: [
      {
        id: "road-barrier-100",
        name: "ROAD BARRIER / TRAFFIC BLOCK 1000",
        badge: "Standar Keselamatan Jalan",
        image: "/images/product/Lalu Lintas/trafficblock1.jpg",
        specs: [
          {
            icon: "Ruler",
            label: "Dimensi",
            value: "1000 x 500 x 800 MM",
          },
          {
            icon: "Weight",
            label: "Berat",
            value: "14 KG",
          },
        ],
        description:
          "Pembatas jalan plastik rotomoulding/blow berkapasitas isi air atau pasir hingga 100 liter. Tahan terhadap tabrakan kendaraan untuk meredam impak energi secara maksimal.",
        features: [
          "Kapasitas Isi Air / Pasir s/d 100 Liter",
          "Warna Jingga Cerah dengan Stiker Reflektif",
          "Sistem Interlock Sambungan Kokoh Antar Blok",
        ],
      },
      {
        id: "traffic-cone-70",
        name: "SAFETY TRAFFIC CONE 70 CM",
        badge: "High Visibility",
        image: "/images/product/Lalu Lintas/cone1.jpg",
        specs: [
          {
            icon: "Ruler",
            label: "Dimensi",
            value: "360 x 360 x 700 MM",
          },
          {
            icon: "Weight",
            label: "Berat",
            value: "2.5 KG",
          },
        ],
        description:
          "Kerucut keselamatan lalu lintas dengan pita reflektif berpendar tinggi untuk rekayasa jalan, proyek perbaikan aspal, serta area parkir gedung komersial.",
        features: [
          "Dasar Persegi Berat Anti Tumbang Tiupan Angin",
          "Reflective Sheet Standard Kelas Internasional",
          "Fleksibel & Kembali ke Bentuk Semula Usai Terlindas",
        ],
      },
    ],
  },
  {
    id: "botol-pupuk-pet",
    name: "Botol Pupuk PET",
    displayName: "BOTOL PUPUK PET & AGROKIMIA",
    subtitle: "Kemasan Botol Presisi Kedap Udara untuk Kimia Pertanian & Cairan Industri",
    description:
      "Botol plastik dengan formulasi resin tahan pelarut kimia, formula pupuk cair, pestisida, dan nutrisi hidroponik, dilengkapi penutup induksi anti bocor.",
    products: [
      {
        id: "botol-pupuk-1l",
        name: "BOTOL AGRO PUPUK 1 LITER",
        badge: "Bahan Tebal Anti Bocor",
        image: "/images/product/Botol Pupuk/pupuk1l.jpg",
        specs: [
          {
            icon: "Ruler",
            label: "Dimensi",
            value: "Volume 1.000 ML (1L)",
          },
          {
            icon: "Weight",
            label: "Berat",
            value: "55 GR",
          },
        ],
        description:
          "Kemasan botol agrokimia 1000ml berdinding kokoh dengan leher presisi untuk mesin capping otomatis. Menjamin keamanan distribusi bahan kimia cair ke pelosok perkebunan.",
        features: [
          "Tutup Segel Ulir + Kompatibel Alumunium Foil Seal",
          "Tahan Terhadap Reaksi Kimia & Asam Ringan",
          "Area Cetak Label / Stiker Luas & Rata",
        ],
      },
      {
        id: "botol-pupuk-500ml",
        name: "BOTOL PUPUK CAIR 500 ML",
        badge: "Ukuran Standar Ritel",
        image: "/images/product/Botol Pupuk/pupuk500.jpg",
        specs: [
          {
            icon: "Ruler",
            label: "Dimensi",
            value: "Volume 500 ML",
          },
          {
            icon: "Weight",
            label: "Berat",
            value: "35 GR",
          },
        ],
        description:
          "Botol kemasan nutrisi tanaman 500ml dengan bodi ergonomis dan dinding tebal merata hasil cetakan blow moulding presisi CV. Asia Plastik.",
        features: [
          "Bahan PET / HDPE Pilihan Kualitas Prima",
          "Garis Takaran Bening untuk Pemantauan Isi",
          "Tahan Benturan Saat Pengiriman Ekspedisi",
        ],
      },
    ],
  },
  {
    id: "kemasan-pet",
    name: "Kemasan PET & Galon",
    displayName: "KEMASAN PET & GALON AIR",
    subtitle: "Galon Air Minum & Wadah Higienis Food Grade Bebas BPA",
    description:
      "Diproduksi di lingkungan higienis dengan material virgin resin PET yang jernih, kuat, dan ramah lingkungan.",
    products: [
      {
        id: "galon-pet-19l",
        name: "GALON AIR PET 19 LITER",
        badge: "BPA Free Food Grade",
        image: "/images/product/kemasan PET/galon19.jpg",
        specs: [
          {
            icon: "Ruler",
            label: "Dimensi",
            value: "Volume 19 LITER",
          },
          {
            icon: "Weight",
            label: "Berat",
            value: "750 GR",
          },
        ],
        description:
          "Galon air minum 19 liter berbahan PET murni bening transparan. Bebas BPA, tidak berbau, kuat menahan beban tumpukan di depo air minum, dan ramah daur ulang.",
        features: [
          "100% Virgin PET Food Contact Approved",
          "Transparan Bening Menampilkan Kejernihan Air",
          "Kekuatan Benturan Tinggi Tahan Jatuh",
        ],
      },
      {
        id: "toples-bumbu-pet",
        name: "TOPLES BUMBU & MAKANAN PET",
        badge: "Aroma Lock Seal",
        image: "/images/product/kemasan PET/bumbu.jpg",
        specs: [
          {
            icon: "Ruler",
            label: "Dimensi",
            value: "Volume 1.000 ML",
          },
          {
            icon: "Weight",
            label: "Berat",
            value: "42 GR",
          },
        ],
        description:
          "Wadah toples bumbu kedap udara dengan tutup ulir rapat untuk mengunci kesegaran bumbu dapur, sambal, kerupuk, dan rempah kering.",
        features: [
          "Transparansi Kristal Seperti Kaca",
          "Ringan dan Tidak Mudah Pecah",
          "Sertifikasi Standar Keamanan Pangan Nasional",
        ],
      },
    ],
  },
  {
    id: "jerigen-hdpe",
    name: "Jerigen Industri HDPE",
    displayName: "JERIGEN INDUSTRI HDPE",
    subtitle: "Wadah Jerigen Blow Moulding Anti Bocor untuk Kimia, Sabun & Minyak",
    description:
      "Jerigen plastik tebal dengan sistem tutup anti-rembes untuk kebutuhan penampungan dan pengangkutan cairan industri berkapasitas 5L hingga 25L.",
    products: [
      {
        id: "jerigen-20l",
        name: "JERIGEN INDUSTRI 20 LITER",
        badge: "Tutup Segel Ganda",
        image: "/images/product/jerigen HDPE/20l.jpg",
        specs: [
          {
            icon: "Ruler",
            label: "Dimensi",
            value: "Volume 20 LITER",
          },
          {
            icon: "Weight",
            label: "Berat",
            value: "1.200 GR",
          },
        ],
        description:
          "Jerigen blow moulding HDPE dengan formula kimia stabil. Sangat cocok untuk minyak pelumas, disinfektan, bahan kimia cair, dan cairan pembersih.",
        features: [
          "Tutup Segel Kunci (Tamper Evident Cap)",
          "Gagang Atas Ergonomis Kokoh untuk Diangkat",
          "Alur Dasar Tumpukan Pengunci Antar Jerigen",
        ],
      },
      {
        id: "jerigen-5l",
        name: "JERIGEN KONSUMEN & RETAIL 5 LITER",
        badge: "Serbaguna",
        image: "/images/product/jerigen HDPE/5l.jpg",
        specs: [
          {
            icon: "Ruler",
            label: "Dimensi",
            value: "Volume 5 LITER",
          },
          {
            icon: "Weight",
            label: "Berat",
            value: "300 GR",
          },
        ],
        description:
          "Jerigen ukuran 5 liter untuk sabun cuci tangan, deterjen cair, minyak goreng, dan sirup konsentrat dengan tuangan presisi tanpa tumpah.",
        features: [
          "Bodi Ramping Menghemat Rak Pajang",
          "Dinding Anti-Penyok Tahan Tekanan Vakum",
          "Pilihan Warna Custom Sesuai Brand Klien",
        ],
      },
    ],
  },
  {
    id: "kaleng-pail",
    name: "Kaleng & Pail Industri",
    displayName: "KALENG & PAIL INDUSTRI",
    subtitle: "Ember Pail Cat, Tinta, Gemuk & Resin Industri Berkapasitas Besar",
    description:
      "Pail cetak injeksi presisi dengan ketahanan impak superior dan tutup kedap udara kedap air untuk mencegah pengeringan isi produk.",
    products: [
      {
        id: "pail-25kg",
        name: "PAIL EMBER INDUSTRI 25 KG",
        badge: "Heavy Duty Pail",
        image: "/images/product/kaleng&pail/25kg.jpg",
        specs: [
          {
            icon: "Ruler",
            label: "Dimensi",
            value: "Kapasitas 20L / 25 KG",
          },
          {
            icon: "Weight",
            label: "Berat",
            value: "1.100 GR",
          },
        ],
        description:
          "Pail industri berkapasitas 25 kilogram dilengkapi pegangan kawat besi tebal dan grip pegangan plastik. Ideal untuk produsen cat tembok, pelapis anti-bocor, dan adhesive.",
        features: [
          "Tutup Snap Ring Kedap Tekanan Udara",
          "Pegangan Kawat Galvanis Anti Karat",
          "Dapat Ditumpuk 4-5 Tingkat dengan Aman",
        ],
      },
    ],
  },
  {
    id: "perikanan",
    name: "Produk Perikanan",
    displayName: "PRODUK PERIKANAN & KELAUTAN",
    subtitle: "Pelampung Jaring Tangkap Ikan & Perangkat Budidaya Bahari Tahan Karang",
    description:
      "Peralatan plastik khusus nelayan dan armada maritim nasional yang tahan terhadap salinitas tinggi air laut dan sinar matahari terik.",
    products: [
      {
        id: "pelampung-36",
        name: "PELAMPUNG JARING LAUT 36 CM",
        badge: "Daya Apung Tinggi",
        image: "/images/product/perikanan/36cm.jpg",
        specs: [
          {
            icon: "Ruler",
            label: "Dimensi",
            value: "Diameter 360 MM",
          },
          {
            icon: "Weight",
            label: "Berat",
            value: "Beban Apung 25 KG",
          },
        ],
        description:
          "Pelampung jaring laut bulat cetak tebal dengan lubang tali tembus yang diperkuat. Menjaga jaring tetap mengembang optimal di laut dalam tanpa risiko kempis.",
        features: [
          "Tahan Tekanan Air Laut Kedalaman Ekstrem",
          "Material Khusus Anti Getas Akibat Garam Laut",
          "Warna Cerah Memudahkan Pemantauan Dari Jauh",
        ],
      },
    ],
  },
];
