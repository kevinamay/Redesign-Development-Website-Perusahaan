export interface ProductSpec {
  icon: "Ruler" | "Weight";
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  name: string;
  image: string;
  specs: ProductSpec[];
  description: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  displayName: string;
  subtitle: string;
  products: ProductItem[];
}

export const palletPSeries: ProductItem = {
  id: "pallet-p-series",
  name: "PALLET P SERIES",
  image: "/images/product/Pallet/pallet-floating.png",
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
};

export const keranjangProducts = [
  {
    title: "KERANJANG INDUSTRI KECIL",
    dimensi: "620 X 430 X 150 MM",
    berat: "1,5 KG",
    deskripsi: "Keranjang Industri T-15 dirancang khusus untuk kebutuhan industri yang menuntut ketahanan dan keamanan dalam penyimpanan maupun distribusi. Terbuat dari material plastik berkualitas tinggi yang kuat, tahan lama, dan bersertifikasi food grade, keranjang ini ideal digunakan di industri makanan, manufaktur, pertanian, hingga logistik.",
    imagePath: "/images/product/Keranjang/keranjang-kecil.png",
  },
  {
    title: "KERANJANG INDUSTRI T-25",
    dimensi: "620 X 430 X 250 MM",
    berat: "1,82 KG",
    deskripsi: "Keranjang Plastik Industri T-25 dari Asia Plastik adalah solusi ideal untuk kebutuhan penyimpanan dan distribusi dalam berbagai sektor industri. Terbuat dari bahan plastik berkualitas tinggi, keranjang ini kokoh, tahan lama, dan mampu menahan beban berat. Didesain dengan ventilasi optimal untuk menjaga sirkulasi udara, T-25 sangat cocok digunakan di pabrik, gudang, maupun pasar tradisional. Ukurannya yang efisien memudahkan penumpukan dan pengangkutan, menjadikannya pilihan praktis dan ekonomis bagi bisnis Anda.",
    imagePath: "/images/product/Keranjang/keranjang-t25.png",
  },
  {
    title: "KERANJANG INDUSTRI BESAR",
    dimensi: "620 X 430 X 320 MM",
    berat: "2,25 KG",
    deskripsi: "Keranjang Plastik Industri Besar (Tinggi 32 cm) dari Asia Plastik dirancang untuk memenuhi kebutuhan penyimpanan dan distribusi dalam skala besar. Terbuat dari material plastik berkualitas tinggi yang kuat dan tahan lama, keranjang ini ideal untuk penggunaan di lingkungan industri, pertanian, maupun logistik. Dengan tinggi 32 cm, kapasitasnya besar namun tetap mudah ditata dan ditumpuk, menjadikannya solusi efisien untuk pengelolaan barang dalam jumlah banyak.",
    imagePath: "/images/product/Keranjang/keranjang-besar.png",
  },
  {
    title: "KERANJANG TERTUTUP",
    dimensi: "430 X 620 X 320 MM",
    berat: "2,5 KG",
    deskripsi: "Keranjang Plastik Industri Besar Tertutup dari Asia Plastik merupakan pilihan tepat untuk kebutuhan penyimpanan yang aman dan terlindungi. Dengan desain sisi-sisi tertutup, keranjang ini menjaga isi tetap terlindungi dari debu dan kotoran, cocok untuk menyimpan barang kecil maupun bahan sensitif. Terbuat dari plastik berkualitas tinggi yang kokoh dan tahan lama, keranjang ini ideal digunakan di industri manufaktur, pergudangan, hingga distribusi logistik. Desain ergonomisnya juga memudahkan penataan dan pengangkutan.",
    imagePath: "/images/product/Keranjang/keranjang-tertutup.png",
  },
  {
    title: "KERANJANG INDUSTRI T-38",
    dimensi: "620 X 430 X 380 MM",
    berat: "2,3 KG",
    deskripsi: "Keranjang Industri Plastik T-38 adalah varian terbesar dari lini keranjang industri Asia Plastik, dirancang khusus untuk memenuhi kebutuhan penyimpanan dan distribusi dalam volume besar. Terbuat dari bahan plastik berkualitas tinggi yang kuat dan tahan lama, T-38 ideal digunakan di sektor industri, pergudangan, dan logistik. Kapasitas ekstra besar dan konstruksi yang kokoh menjadikannya solusi efisien untuk mengangkut barang berat maupun dalam jumlah banyak, dengan tetap mengutamakan kemudahan dalam penataan dan pemindahan.",
    imagePath: "/images/product/Keranjang/keranjang-t38.png",
  },
  {
    title: "DAYS OLD CHICKEN BOX",
    dimensi: "668 X 495 X 145 MM",
    berat: "2,07 KG",
    deskripsi: "Days Old Chicken Box dari Asia Plastik adalah keranjang khusus yang dirancang untuk transportasi ayam (DOC) dengan aman dan nyaman. Terbuat dari bahan plastik yang kuat, higienis, dan mudah dibersihkan, keranjang ini memiliki ventilasi optimal untuk menjaga sirkulasi udara dan kesehatan ayam selama pengiriman. Desainnya yang ergonomis dan kokoh menjadikannya pilihan ideal bagi peternak dan distributor unggas profesional.",
    imagePath: "/images/product/Keranjang/doc-box.png",
  },
];

export const boxLipatProducts = [
  {
    title: "BOX LIPAT",
    dimensi: "400 X 600 X 320 MM",
    berat: "2,6 KG",
    deskripsi:
      "Box Lipat Plastik dari Asia Plastik adalah solusi penyimpanan inovatif yang mengutamakan efisiensi dan kepraktisan. Dirancang dengan sistem lipat yang mudah digunakan, keranjang ini dapat dilipat saat tidak digunakan untuk menghemat ruang penyimpanan. Terbuat dari bahan plastik berkualitas tinggi yang kokoh dan tahan lama, box ini cocok untuk kebutuhan industri, logistik, maupun penggunaan sehari-hari. Desain modern dan fungsional menjadikannya pilihan tepat untuk penyimpanan cerdas di era praktis dan dinamis.",
    imagePath: "/images/product/Box Lipat/box-lipat.png",
  },
  {
    title: "BOX LIPAT LUBANG",
    dimensi: "400 X 600 X 320 MM",
    berat: "2,6 KG",
    deskripsi:
      "Box Lipat Plastik Berlubang Samping dari Asia Plastik adalah keranjang serbaguna dengan desain inovatif yang dapat dilipat untuk menghemat ruang penyimpanan. Dilengkapi lubang di sisi kanan dan kiri untuk sirkulasi udara serta kemudahan saat diangkat, box ini ideal untuk kebutuhan distribusi, penyimpanan, maupun display produk. Terbuat dari plastik berkualitas tinggi yang kokoh dan tahan lama, produk ini menawarkan solusi praktis dan modern untuk berbagai keperluan industri maupun sehari-hari.",
    imagePath: "/images/product/Box Lipat/box-lipat-lubang.png",
  },
];

export const laluLintasProducts = [
  {
    title: "KERUCUT LALU LINTAS 50 CM",
    dimensi: "300 X 300 X 500 MM",
    berat: "1,8 KG",
    deskripsi:
      "Kerucut Lalu Lintas 50 cm (Traffic Cone 50 cm) dari Asia Plastik dirancang khusus untuk manajemen lalu lintas jalan, pembatas zonasi area proyek, serta pengamanan area parkir. Dibuat dari material komposit plastik dan karet berkualitas tinggi yang fleksibel, tahan benturan, serta tidak mudah pecah saat tertabrak kendaraan. Dilengkapi dengan dua lapis stiker reflektif prismatik berdaya pantul tinggi untuk visibilitas maksimal di malam hari dan kondisi cuaca ekstrem. Alas dasar persegi yang stabil memberikan daya tahan terhadap hembusan angin jalan raya.",
    imagePath: "/images/product/Lalu Lintas/cone50.png",
  },
  {
    title: "ROAD BARRIER / TRAFFIC BLOCK",
    dimensi: "1180 X 495 X 780 MM",
    berat: "16 - 17 KG",
    deskripsi:
      "Traffic Block / Road Barrier Plastik dari Asia Plastik adalah pembatas jalan portabel berstandar industri yang dirancang untuk rekayasa lalu lintas, pembatas jalur jalan raya, serta pengamanan zona konstruksi. Diproduksi dari bahan HDPE (High Density Polyethylene) murni yang tahan cuaca tropis, radiasi UV, dan benturan keras kendaraan. Dilengkapi lubang pengisian (inlet) untuk air atau pasir guna memberikan bobot serta stabilitas kokoh saat dipasang di lapangan, pengait interkoneksi antar-blok, dan stiker reflektif panah pengarah chevron untuk visibilitas optimal.",
    imagePath: "/images/product/Lalu Lintas/trafficblock1.png",
  },
  {
    title: "KERUCUT LALU LINTAS STANDAR (RING TOP)",
    dimensi: "500 X 500 X 750 MM",
    berat: "3,0 KG",
    deskripsi:
      "Kerucut Lalu Lintas Standar Ring Top dari Asia Plastik merupakan traffic cone spesifikasi berat (heavy duty) dengan alas lebar 500 x 500 mm untuk stabilitas maksimal di area jalan bertrafik tinggi dan berangin kencang. Terbuat dari material karet (rubber) sintetis berkualitas yang lentur, tahan tekanan, dan anti penyok saat terlindas. Dilengkapi lubang cincin (ring top) pada bagian ujung atas yang memudahkan pemasangan rantai pembatas, tali barikade, atau lampu peringatan (warning light), serta dua garis pita reflektif sarang lebah untuk visibilitas optimal.",
    imagePath: "/images/product/Lalu Lintas/cone1.png",
  },
];

export const catalogCategories: ProductCategory[] = [
  {
    id: "pallet-industri",
    name: "Pallet Industri",
    displayName: "PALLET INDUSTRI",
    subtitle: "Solusi Palet Plastik Standar Logistik, Higienis & Pergudangan Otomasi",
    products: [palletPSeries],
  },
  {
    id: "keranjang-industri",
    name: "Keranjang Industri",
    displayName: "KERANJANG INDUSTRI",
    subtitle: "Wadah Distribusi & Penyimpanan Logistik Industri",
    products: keranjangProducts.map((p, idx) => ({
      id: `keranjang-${idx + 1}`,
      name: p.title,
      image: p.imagePath,
      specs: [
        { icon: "Ruler", label: "Dimensi", value: p.dimensi },
        { icon: "Weight", label: "Berat", value: p.berat },
      ],
      description: p.deskripsi,
    })),
  },
  {
    id: "box-lipat",
    name: "Box Lipat",
    displayName: "BOX LIPAT",
    subtitle: "Kontainer Lipat Pintar Hemat Ruang Pergudangan",
    products: boxLipatProducts.map((p, idx) => ({
      id: `box-lipat-${idx + 1}`,
      name: p.title,
      image: p.imagePath,
      specs: [
        { icon: "Ruler", label: "Dimensi", value: p.dimensi },
        { icon: "Weight", label: "Berat", value: p.berat },
      ],
      description: p.deskripsi,
    })),
  },
  {
    id: "blok-lalu-lintas",
    name: "Blok Lalu Lintas & Kerucut",
    displayName: "BLOK LALU LINTAS & KERUCUT LALU LINTAS",
    subtitle: "Road Barrier Pembatas Jalan & Kerucut Pengaman Rekayasa Lalu Lintas",
    products: laluLintasProducts.map((p, idx) => ({
      id: `lalu-lintas-${idx + 1}`,
      name: p.title,
      image: p.imagePath,
      specs: [
        { icon: "Ruler", label: "Dimensi", value: p.dimensi },
        { icon: "Weight", label: "Berat", value: p.berat },
      ],
      description: p.deskripsi,
    })),
  },
  {
    id: "botol-pupuk-pet",
    name: "Botol Pupuk PET",
    displayName: "BOTOL PUPUK PET",
    subtitle: "Kemasan Botol Kedap Udara Agrokimia & Cairan Kimia",
    products: [],
  },
  {
    id: "kemasan-pet",
    name: "Kemasan PET",
    displayName: "KEMASAN PET",
    subtitle: "Galon Air Minum & Wadah Higienis Food Grade",
    products: [],
  },
  {
    id: "jerigen-hdpe",
    name: "Jerigen HDPE",
    displayName: "JERIGEN HDPE",
    subtitle: "Wadah Jerigen Blow Moulding Anti Bocor",
    products: [],
  },
];
