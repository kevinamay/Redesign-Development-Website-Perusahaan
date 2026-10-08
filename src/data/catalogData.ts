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

export const botolPupukProducts = [
  {
    title: "BOTOL PUPUK PET 100 CC",
    dimensi: "DIAMETER 47,2 MM - TINGGI 96 MM",
    berat: "23 GR",
    deskripsi:
      "Botol kecil berbahan PET berkualitas untuk pupuk cair atau nutrisi tanaman dalam skala kecil. Desainnya yang ringkas sangat ideal untuk produk sampel atau kemasan ritel, dengan material yang memastikan keamanan dan keawetan cairan di dalamnya.",
    imagePath: "/images/product/Botol Pupuk/pupuk100.png",
  },
  {
    title: "BOTOL PUPUK PET 250 CC",
    dimensi: "DIAMETER 65,5 MM - TINGGI 133 MM",
    berat: "30 GR",
    deskripsi:
      "Dirancang untuk kebutuhan pertanian dalam kemasan sedang, botol ini ideal untuk produk pupuk cair. Material PET memberikan tingkat kejernihan dan ketahanan yang baik terhadap bahan kimia pertanian, menjaga kualitas produk Anda hingga ke tangan konsumen.",
    imagePath: "/images/product/Botol Pupuk/pupuk250.png",
  },
  {
    title: "BOTOL PUPUK PET 250 CC WITH LINING",
    dimensi: "DIAMETER 65,5 MM - TINGGI 133 MM",
    berat: "30 GR",
    deskripsi:
      "Alternatif bentuk botol 250 cc dengan desain bergaris (lining) untuk memberikan cengkeraman yang lebih baik dan tampilan estetika yang berbeda. Botol ini mempertahankan standar kualitas PET yang kuat dan aman untuk berbagai formulasi pupuk cair.",
    imagePath: "/images/product/Botol Pupuk/pupuk250w.png",
  },
  {
    title: "BOTOL PUPUK PET 500 CC NATURAL",
    dimensi: "DIAMETER 76 MM - TINGGI 167 MM",
    berat: "55 GR",
    deskripsi:
      "Botol pupuk setengah liter berbahan PET kokoh, cocok untuk pupuk cair dan produk pertanian. Warna naturalnya memudahkan pengguna untuk melihat sisa volume cairan, sementara ketebalannya menjamin keamanan selama proses distribusi.",
    imagePath: "/images/product/Botol Pupuk/pupuk500.png",
  },
  {
    title: "BOTOL PUPUK PET 1 LITER NATURAL",
    dimensi: "DIAMETER 95 MM - TINGGI 216 MM",
    berat: "55 GR",
    deskripsi:
      "Ukuran besar untuk kebutuhan distribusi pupuk cair dalam volume lebih banyak. Botol ini ringan namun sangat kuat, dirancang khusus untuk menahan tekanan dan benturan, menjadikannya kemasan andalan untuk produk pertanian komersial.",
    imagePath: "/images/product/Botol Pupuk/pupuk1l.png",
  },
];

export const kosmetikProducts = [
  {
    title: "BOTOL PET 100 CC WITH PUMP",
    dimensi: "DIAMETER 47,60 MM - TINGGI 104 MM",
    berat: "28 GR",
    deskripsi:
      "Botol Kosmetik PET 100 CC dari Asia Plastik dilengkapi dengan foam pump yang praktis dan higienis, ideal untuk produk perawatan wajah seperti facial wash atau sabun cair. Terbuat dari bahan PET berkualitas, botol ini ringan, kuat, dan tampil elegan dengan desain modern, cocok untuk brand kosmetik yang mengutamakan tampilan profesional dan kemudahan penggunaan.",
    imagePath: "/images/product/Kosmetik/kosmetik100.png",
  },
  {
    title: "BOTOL PET GOLD 300 CC WITH PUMP",
    dimensi: "DIAMETER 60 MM - TINGGI 138 MM",
    berat: "30 GR",
    deskripsi:
      "Botol PET 300 CC dengan tutup pump dari Asia Plastik cocok untuk berbagai produk cair, termasuk kosmetik seperti lotion, serum tubuh, atau toner. Terbuat dari bahan PET yang bening, ringan, dan tahan lama, botol ini tampil elegan dan profesional. Dilengkapi dengan pump yang praktis dan higienis, sangat ideal untuk kemasan produk skincare dan personal care.",
    imagePath: "/images/product/Kosmetik/kosmetik300.png",
  },
  {
    title: "BOTOL PET 500 ML WITH PUMP",
    dimensi: "DIAMETER 76 MM - TINGGI 167 MM",
    berat: "55 GR",
    deskripsi:
      "Botol PET 500 ml transparan dengan tutup pump dari Asia Plastik ideal untuk produk cair berukuran besar seperti sabun mandi, sampo, hand sanitizer, atau skincare tubuh. Terbuat dari bahan PET yang kuat dan jernih, botol ini menampilkan isi produk dengan menarik sekaligus menjaga kualitasnya. Dilengkapi pump yang praktis dan higienis, cocok untuk kebutuhan industri kosmetik, perawatan pribadi, maupun rumah tangga.",
    imagePath: "/images/product/Kosmetik/kosmetik500.png",
  },
];

export const minyakGorengProducts = [
  {
    title: "BOTOL MINYAK GORENG PET 2 LITER ULIR",
    dimensi: "320 X 102 X 102 MM",
    berat: "38 GR",
    deskripsi:
      "Botol PET Minyak Goreng 2 Liter kemasan volume tinggi untuk pasar grosir dan distribusi luas. Struktur kokoh, tahan tekanan, dan hemat ruang penyimpanan.",
    imagePath: "/images/product/minyak goreng/2liter.png",
  },
  {
    title: "BOTOL MINYAK GORENG PET 1,5 LITER",
    dimensi: "255 X 98 X 82 MM",
    berat: "32 GR",
    deskripsi:
      "Botol PET Minyak Goreng 1,5 Liter kapasitas lebih besar untuk meningkatkan efisiensi distribusi. Cocok untuk pengisian otomatis dan penggunaan skala industri.",
    imagePath: "/images/product/minyak goreng/1.5liter.png",
  },
  {
    title: "BOTOL MINYAK GORENG PET 1 LITER A",
    dimensi: "261,5 X 72,2 X 72,2 MM",
    berat: "28 GR",
    deskripsi:
      "Botol PET Minyak Goreng 1 Liter standar industri untuk distribusi minyak goreng. Tersedia dalam desain ergonomis dan siap memenuhi kebutuhan produksi massal.",
    imagePath: "/images/product/minyak goreng/1literA.png",
  },
  {
    title: "BOTOL MINYAK GORENG PET 900 ML",
    dimensi: "257 X 70 X 70 MM",
    berat: "28 GR",
    deskripsi:
      "Botol PET Minyak Goreng 900 ml hampir setara 1 liter, ideal untuk efisiensi logistik dan distribusi retail. Kuat, aman, dan memiliki tampilan yang profesional di rak penjualan.",
    imagePath: "/images/product/minyak goreng/900ml.png",
  },
  {
    title: "BOTOL MINYAK GORENG PET 800 ML",
    dimensi: "255 X 66 X 66 MM",
    berat: "28 GR",
    deskripsi:
      "Botol PET Minyak Goreng 800 ml cocok untuk kebutuhan pengemasan skala menengah. Stabil secara struktur dan kompatibel dengan berbagai jenis tutup dan mesin filling.",
    imagePath: "/images/product/minyak goreng/800ml.png",
  },
  {
    title: "BOTOL MINYAK GORENG PET 620 ML",
    dimensi: "250 X 65 X 65 MM",
    berat: "28 GR",
    deskripsi:
      "Botol PET Minyak Goreng 620 ml, ukuran menengah yang ideal untuk pasar retail modern. Desain ergonomis dan material PET berkualitas tinggi menjamin keamanan produk selama pengiriman.",
    imagePath: "/images/product/minyak goreng/620ml.png",
  },
  {
    title: "BOTOL MINYAK GORENG PET 250 ML",
    dimensi: "152 X 47 X 47 MM",
    berat: "11,5 GR",
    deskripsi:
      "Botol PET Minyak Goreng 250 ml solusi efisien untuk sampel produk atau kemasan retail kecil. Ringan, kuat, dan mudah didistribusikan dalam jumlah besar.",
    imagePath: "/images/product/minyak goreng/250ml.png",
  },
];

export const kemasanPETProducts = [
  {
    title: "GALON PET 19 LITER",
    dimensi: "DIAMETER 270 MM - TINGGI 490 MM",
    berat: "650 GR",
    deskripsi:
      "Galon PET 19 Liter (5 Gallon) standar industri air minum dalam kemasan (AMDK) dan depot air minum isi ulang. Diproduksi dari material Virgin PET murni berstandar Food Grade, bebas BPA, dengan kejernihan kristal tinggi serta dinding ribbed kokoh yang tahan benturan dan tahan tumpuk untuk distribusi logistik skala besar.",
    imagePath: "/images/product/kemasan PET/galon19.png",
  },
  {
    title: "GALON PET 15 LITER WITH HANDLE",
    dimensi: "DIAMETER 250 MM - TINGGI 410 MM",
    berat: "450 GR",
    deskripsi:
      "Galon PET 15 Liter dengan tutup pegangan (handle) ergonomis yang memudahkan pengangkatan dan mobilitas distribusi. Sangat ideal untuk kebutuhan air minum keluarga, perkantoran, maupun depot isi ulang modern dengan bahan PET food grade higienis dan tidak berbau.",
    imagePath: "/images/product/kemasan PET/galon15.png",
  },
  {
    title: "GALON PET KOTAK 5 LITER WITH HANDLE",
    dimensi: "160 X 160 X 330 MM",
    berat: "140 GR",
    deskripsi:
      "Galon PET 5 Liter desain kotak hemat ruang (space-saving) dengan pegangan jinjing kokoh dan tutup ulir anti-bocor. Cocok untuk kemasan air minum higienis, minyak kelapa, sabun isi ulang, maupun produk cairan industri retail.",
    imagePath: "/images/product/kemasan PET/galon5.png",
  },
  {
    title: "BOTOL PET MINUMAN BULAT 350 ML / 500 ML",
    dimensi: "DIAMETER 65 MM - TINGGI 180 MM",
    berat: "28 GR",
    deskripsi:
      "Botol kemasan minuman PET silinder bulat dengan tutup ulir segel tamper-evident hitam. Didesain dengan kejernihan premium untuk memperlihatkan warna alami produk minuman segar seperti jus buah, kopi susu cold brew, teh tarik, susu kedelai, dan minuman kekinian.",
    imagePath: "/images/product/kemasan PET/minuman.png",
  },
  {
    title: "BOTOL PET SABUN CAIR 450 ML (PUSH PULL CAP)",
    dimensi: "75 X 50 X 195 MM",
    berat: "32 GR",
    deskripsi:
      "Botol PET ergonomis dengan grip samping anti-slip dan tutup push-pull praktis yang presisi dalam mengatur aliran cairan. Sangat sesuai untuk kemasan produk pembersih rumah tangga, sabun cuci piring, sabun tangan cair, deterjen, dan pembersih higienis.",
    imagePath: "/images/product/kemasan PET/sabun.png",
  },
  {
    title: "BOTOL PET AIR ZAM-ZAM 250 ML",
    dimensi: "DIAMETER 55 MM - TINGGI 135 MM",
    berat: "22 GR",
    deskripsi:
      "Botol PET 250 ml model ringkas dengan tutup ulir bersegel rapat dan leher kuat. Pilihan utama untuk kemasan air zam-zam oleh-oleh haji dan umroh, madu cair, jamu herbal, minyak habbatussauda, dan sirup konsentrat berkualitas.",
    imagePath: "/images/product/kemasan PET/zamzam.png",
  },
  {
    title: "TOPLES PET BUMBU 200 ML DENGAN FLIP-TOP SHAKER",
    dimensi: "DIAMETER 50 MM - TINGGI 115 MM",
    berat: "24 GR",
    deskripsi:
      "Toples silinder berbahan PET food grade jernih dilengkapi tutup shaker dwifungsi (lubang tabur bumbu halus dan bukaan tuang takar). Sangat cocok untuk mengemas garam dapur, lada bubuk, bumbu tabur instan, penyedap rasa, dan rempah-rempah kuliner.",
    imagePath: "/images/product/kemasan PET/bumbu.png",
  },
];

export const jerigenHdpeProducts = [
  {
    title: "JERIGEN 27 LITER",
    dimensi: "291 X 232 X 497 MM",
    berat: "1200 GR",
    deskripsi:
      "Jerigen 27 liter merupakan pilihan terbaik untuk kebutuhan penyimpanan cairan dalam jumlah besar. Terbuat dari plastik berkualitas tinggi yang tebal dan kuat, jerigen ini dirancang untuk menampung cairan industri, bahan kimia, maupun kebutuhan distribusi air dan minyak dalam skala besar. Dengan kapasitas maksimal, jerigen ini cocok digunakan oleh industri, pabrik, maupun usaha distribusi.",
    imagePath: "/images/product/jerigen HDPE/27l.png",
  },
  {
    title: "JERIGEN 22 LITER",
    dimensi: "290 X 232 X 419,5 MM",
    berat: "1200 GR",
    deskripsi:
      "Ukuran 22 liter memberikan keseimbangan antara daya tampung besar dan kemudahan mobilitas. Jerigen ini praktis digunakan untuk usaha menengah, seperti penyimpanan air minum isi ulang, cairan pembersih, maupun kebutuhan pertanian. Bahan plastiknya tahan lama dan tidak mudah bocor, sehingga aman digunakan berulang kali.",
    imagePath: "/images/product/jerigen HDPE/22l.png",
  },
  {
    title: "JERIGEN 20 LITER",
    dimensi: "288 X 225 X 398,5 MM",
    berat: "870 GR",
    deskripsi:
      "Jerigen 20 liter adalah ukuran paling populer yang serbaguna untuk berbagai kebutuhan. Cocok untuk usaha depot air, industri makanan dan minuman, hingga penyimpanan cairan rumah tangga. Dengan desain ergonomis, jerigen ini mudah dibawa dan dipindahkan, meski berisi penuh.",
    imagePath: "/images/product/jerigen HDPE/20l.png",
  },
  {
    title: "JERIGEN 20 LITER MGE",
    dimensi: "260 X 230 X 400 MM",
    berat: "1000 GR",
    deskripsi:
      "Varian MGE hadir dengan desain dan kekuatan ekstra untuk kebutuhan khusus. Jerigen ini dirancang lebih kokoh, sehingga sangat cocok digunakan dalam industri minyak goreng atau cairan yang membutuhkan keamanan lebih. Kapasitas besar dengan perlindungan ekstra membuatnya menjadi pilihan tepat untuk sektor profesional.",
    imagePath: "/images/product/jerigen HDPE/20lMGE.png",
  },
  {
    title: "JERIGEN 18 LITER",
    dimensi: "135 X 85 X 232 MM",
    berat: "860 GR",
    deskripsi:
      "Jerigen 18 liter adalah solusi praktis untuk kebutuhan penyimpanan cairan dalam kapasitas cukup besar, tetapi tetap hemat ruang. Cocok untuk usaha rumah tangga, pertanian, maupun keperluan sehari-hari. Dengan bahan plastik tebal, jerigen ini awet digunakan dalam jangka panjang.",
    imagePath: "/images/product/jerigen HDPE/18L.png",
  },
  {
    title: "JERIGEN 5 LITER LEBAR",
    dimensi: "240 X 100 X 273 MM",
    berat: "340 GR",
    deskripsi:
      "Jerigen 5 liter lebar memiliki bentuk khusus yang lebih stabil dan mudah ditata. Kapasitas sedang membuatnya ideal untuk penyimpanan air, minyak, atau cairan pembersih dalam skala rumah tangga maupun usaha kecil. Desain lebar juga memudahkan penempatan dan penyimpanan.",
    imagePath: "/images/product/jerigen HDPE/5llebar.png",
  },
  {
    title: "JERIGEN 5 LITER",
    dimensi: "181 X 126 X 327 MM",
    berat: "180 GR",
    deskripsi:
      "Jerigen serbaguna dengan ukuran sedang ini menjadi pilihan favorit untuk pemakaian sehari-hari. Ringan, mudah dibawa, dan praktis digunakan untuk kebutuhan rumah tangga maupun usaha kecil, seperti kuliner, pertanian, atau perbengkelan.",
    imagePath: "/images/product/jerigen HDPE/5l.png",
  },
  {
    title: "JERIGEN 4,5 LITER",
    dimensi: "180 X 120 X 320 MM",
    berat: "180 GR",
    deskripsi:
      "Dengan kapasitas hampir sama dengan jerigen 5 liter, jerigen 4,5 liter hadir dengan desain ringkas yang membuatnya lebih mudah disimpan. Cocok untuk cairan rumah tangga, kebutuhan traveling, maupun untuk usaha yang memerlukan kemasan sedang.",
    imagePath: "/images/product/jerigen HDPE/4.5l.png",
  },
  {
    title: "JERIGEN 4 LITER",
    dimensi: "193 X 123 X 291 MM",
    berat: "170 GR",
    deskripsi:
      "Jerigen 4 liter dirancang dengan kapasitas pas untuk kebutuhan industri dan rumah tangga, seperti menyimpan air, minyak, maupun cairan pembersih. Ukurannya yang tidak terlalu besar membuatnya mudah dibawa dan digunakan siapa saja.",
    imagePath: "/images/product/jerigen HDPE/4l.png",
  },
  {
    title: "JERIGEN 2 LITER",
    dimensi: "135 X 85 X 232 MM",
    berat: "99,6 GR",
    deskripsi:
      "Jerigen ukuran 2 liter adalah pilihan praktis untuk penyimpanan cairan dalam jumlah kecil hingga sedang. Mudah dibawa bepergian, cocok untuk pemakaian pribadi, usaha kecil, atau kebutuhan harian.",
    imagePath: "/images/product/jerigen HDPE/2l.png",
  },
  {
    title: "JERIGEN 1,8 LITER",
    dimensi: "142 X 86 X 236 MM",
    berat: "90 GR",
    deskripsi:
      "Dengan kapasitas yang sedikit lebih kecil dari 2 liter, jerigen ini sangat praktis untuk penggunaan ringan. Cocok digunakan untuk cairan konsumsi maupun non-konsumsi, baik di rumah maupun untuk usaha sampel produk.",
    imagePath: "/images/product/jerigen HDPE/1.8l.png",
  },
  {
    title: "JERIGEN 1 LITER TINGGI",
    dimensi: "89 X 64 X 225 MM",
    berat: "72 GR",
    deskripsi:
      "Desain ramping dan tinggi membuat jerigen ini lebih mudah disimpan dalam rak atau ruang terbatas. Cocok untuk cairan kemasan seperti minyak, gula cair, pembersih, atau cairan konsumsi dalam jumlah kecil.",
    imagePath: "/images/product/jerigen HDPE/1l.png",
  },
  {
    title: "JERIGEN 1 LITER LEBAR",
    dimensi: "128 X 71 X 178 MM",
    berat: "65 GR",
    deskripsi:
      "Berbeda dengan versi tinggi, jerigen 1 liter lebar memiliki bentuk lebih pendek dan stabil. Ideal untuk penggunaan sehari-hari, dengan kemudahan menuang cairan tanpa khawatir tumpah.",
    imagePath: "/images/product/jerigen HDPE/1llebar.png",
  },
  {
    title: "JERIGEN 500 ML",
    dimensi: "90 X 64,5 X 129,6 MM",
    berat: "40 GR",
    deskripsi:
      "Jerigen 500 ml adalah ukuran paling kecil dan sangat praktis untuk kebutuhan pribadi maupun produk sampel. Cocok digunakan untuk cairan rumah tangga, kosmetik cair, atau produk kemasan usaha kecil. Ringkas, ringan, dan mudah dibawa ke mana saja.",
    imagePath: "/images/product/jerigen HDPE/500ml.png",
  },
];

export const jerigenChemicalProducts = [
  {
    title: "JERIGEN 32,5 LITER CHEMICAL BIRU",
    dimensi: "345 X 272 X 443 MM",
    berat: "1500 GR",
    deskripsi:
      "Jerigen 32,5 liter didesain khusus untuk kebutuhan industri dengan kapasitas besar. Terbuat dari plastik HDPE berkualitas tinggi yang tahan terhadap bahan kimia agresif, jerigen ini ideal digunakan untuk penyimpanan maupun distribusi cairan kimia, bahan baku industri, atau cairan berbahaya. Dengan konstruksi tebal dan tutup yang rapat, produk ini menjamin keamanan isi dari kebocoran maupun kontaminasi.",
    imagePath: "/images/product/jerigen chemical/32.5l.png",
  },
  {
    title: "JERIGEN 30 KG CHEMICAL BIRU",
    dimensi: "298 X 290 X 516 MM",
    berat: "1400 GR",
    deskripsi:
      "Jerigen 30 kg Chemical Blue merupakan pilihan utama untuk industri yang memerlukan wadah tangguh dalam menyimpan cairan kimia. Warna biru berfungsi sebagai identifikasi khusus untuk produk chemical dan membantu melindungi isi dari paparan cahaya. Dengan material yang kuat dan tahan lama, jerigen ini memastikan keamanan dalam transportasi maupun penyimpanan jangka panjang.",
    imagePath: "/images/product/jerigen chemical/30kg.png",
  },
  {
    title: "JERIGEN 25 KG CHEMICAL BIRU",
    dimensi: "295 X 290 X 455 MM",
    berat: "1200 GR",
    deskripsi:
      "Dengan kapasitas 25 kg, jerigen Chemical Blue ini praktis digunakan untuk kebutuhan distribusi dan penyimpanan bahan kimia dalam skala menengah. Terbuat dari plastik berkualitas tinggi, jerigen ini tahan terhadap berbagai jenis zat kimia, serta dilengkapi tutup rapat untuk mencegah kebocoran. Cocok untuk industri kimia, farmasi, hingga pertanian.",
    imagePath: "/images/product/jerigen chemical/25kg.png",
  },
  {
    title: "JERIGEN 20 KG CHEMICAL",
    dimensi: "287 X 287 X 381 MM",
    berat: "900 GR",
    deskripsi:
      "Jerigen 20 kg Chemical dirancang sebagai solusi wadah serbaguna untuk cairan kimia dengan kapasitas sedang. Desain ergonomis memudahkan pengangkutan, sementara material HDPE yang digunakan memberikan ketahanan optimal terhadap reaksi kimia. Aman digunakan untuk penyimpanan cairan pembersih, bahan industri, maupun produk berbasis kimia lainnya.",
    imagePath: "/images/product/jerigen chemical/20kg.png",
  },
];

export const jerigenOliProducts = [
  {
    title: "JERIGEN OLI 5 LITER",
    dimensi: "209 X 101 X 324,5 MM",
    berat: "360 GR",
    deskripsi:
      "Jerigen oli 5 liter dirancang khusus untuk kebutuhan industri pelumas maupun otomotif. Terbuat dari plastik berkualitas tinggi yang tahan terhadap cairan berminyak dan tidak mudah rusak, jerigen ini dilengkapi desain ergonomis dengan pegangan kokoh untuk memudahkan pemindahan. Kapasitas 5 liter sangat ideal untuk kemasan oli kendaraan pribadi hingga usaha bengkel.",
    imagePath: "/images/product/jerigen Oli/5l.png",
  },
  {
    title: "JERIGEN OLI 4,5 LITER",
    dimensi: "207,3 X 101,4 X 305,4 MM",
    berat: "240 GR",
    deskripsi:
      "Dengan kapasitas 4,5 liter, jerigen oli ini menawarkan ukuran yang lebih ringkas namun tetap cukup untuk kebutuhan distribusi dan penjualan oli. Bentuknya dirancang praktis dengan mulut jerigen yang pas untuk tuangan, sehingga memudahkan saat digunakan oleh konsumen maupun teknisi bengkel.",
    imagePath: "/images/product/jerigen Oli/4.5l.png",
  },
  {
    title: "JERIGEN OLI 4 LITER",
    dimensi: "209 X 101 X 287 MM",
    berat: "240 GR",
    deskripsi:
      "Jerigen oli 4 liter merupakan pilihan kemasan standar yang banyak digunakan untuk berbagai merek oli kendaraan. Ukurannya pas untuk sekali penggantian oli mobil, sementara bahan plastiknya tahan terhadap sifat pelumas dan menjaga kualitas isi tetap terjamin. Desain kokoh dengan tampilan profesional menjadikan jerigen ini cocok untuk produk oli kemasan premium.",
    imagePath: "/images/product/jerigen Oli/4l.png",
  },
];

export const jerigenLipatProducts = [
  {
    title: "JERIGEN LIPAT 5 LITER",
    dimensi: "205 X 181 X 181 MM",
    berat: "140 GR",
    deskripsi:
      "Jerigen lipat 5 liter ini terbuat dari bahan plastik LDPE (Low Density Polyethylene) yang fleksibel namun tetap kuat. Desain lipatnya membuat jerigen mudah disimpan saat tidak digunakan, sehingga sangat praktis untuk kebutuhan rumah tangga, perjalanan, camping, hingga darurat air.",
    imagePath: "/images/product/jerikan Lipat/5l.png",
  },
];

export const botolHdpeProducts = [
  {
    title: "BOTOL M 1 LITER PANJANG",
    dimensi: "DIAMETER 85 MM - TINGGI 230 MM",
    berat: "80 GR",
    deskripsi:
      "Botol HDPE 1 liter panjang hadir dengan desain ramping sehingga mudah disimpan dan ditangani. Cocok digunakan untuk cairan industri, pembersih rumah tangga, hingga kebutuhan laboratorium. Material HDPE membuat botol ini tahan terhadap bahan kimia ringan dan menjaga isi tetap aman.",
    imagePath: "/images/product/botol HDPE/1l.png",
  },
  {
    title: "BOTOL M 1000 MK TUTUP TAKAR",
    dimensi: "205 X 181 X 181 MM",
    berat: "140 GR",
    deskripsi:
      "Botol M1000 MK dilengkapi dengan tutup takar yang memudahkan pengguna dalam mengukur cairan sesuai kebutuhan. Ideal untuk produk kimia cair, deterjen, pembersih, maupun pupuk cair. Terbuat dari HDPE berkualitas tinggi yang kuat, tahan bocor, dan praktis digunakan.",
    imagePath: "/images/product/botol HDPE/1000mk.png",
  },
  {
    title: "BOTOL M 1000",
    dimensi: "DIAMETER 98,5 MM - TINGGI 216 MM",
    berat: "80 GR",
    deskripsi:
      "Botol M1000 adalah pilihan serbaguna untuk berbagai aplikasi. Dengan kapasitas 1 liter, botol ini cocok untuk cairan pembersih, produk kimia, maupun kebutuhan industri lainnya. Desain ergonomis dan tutup rapat menjaga isi tetap aman saat penyimpanan maupun distribusi.",
    imagePath: "/images/product/botol HDPE/1000m.png",
  },
  {
    title: "BOTOL KOTAK 0,5 KG",
    dimensi: "72,5 X 72,5 X 130 MM",
    berat: "35 GR",
    deskripsi:
      "Botol HDPE berbentuk kotak dengan kapasitas 0,5 kg ini praktis untuk produk cair maupun semi-cair. Desain kotak memudahkan penyusunan di rak atau gudang, serta efisien dalam distribusi. Cocok untuk kemasan kecil produk industri, farmasi, maupun rumah tangga.",
    imagePath: "/images/product/botol HDPE/0.5kg.png",
  },
  {
    title: "BOTOL KOTAK 1 KG",
    dimensi: "89 X 89 X 161 MM",
    berat: "75 GR",
    deskripsi:
      "Dengan kapasitas lebih besar, botol kotak 1 kg memberikan fleksibilitas lebih untuk berbagai kebutuhan. Bentuk kotak menjadikannya mudah ditata, hemat ruang, dan efisien untuk pengiriman maupun penyimpanan berskala besar.",
    imagePath: "/images/product/botol HDPE/1kg.png",
  },
  {
    title: "BOTOL BIOCLIN",
    dimensi: "DIAMETER 87,5 MM - TINGGI 244 MM",
    berat: "65 GR",
    deskripsi:
      "Botol Bioclin didesain khusus untuk produk cairan pembersih dan desinfektan. Bentuknya ergonomis dengan leher botol yang memudahkan pemasangan tutup flip top atau trigger sprayer. HDPE yang digunakan menjamin ketahanan terhadap bahan kimia pembersih.",
    imagePath: "/images/product/botol HDPE/bioclin.png",
  },
  {
    title: "BOTOL LYSOL 1 LITER",
    dimensi: "DIAMETER 97,2 MM - TINGGI 200 MM",
    berat: "110 GR",
    deskripsi:
      "Botol ini cocok untuk kemasan cairan pembersih dan disinfektan rumah tangga maupun industri. Dengan kapasitas 1 liter, botol Lysol dibuat dari HDPE yang kuat, tahan benturan, dan aman untuk penyimpanan cairan berbasis kimia.",
    imagePath: "/images/product/botol HDPE/lysol.png",
  },
  {
    title: "BOTOL HYDRO",
    dimensi: "DIAMETER 82 MM - TINGGI 147 MM",
    berat: "57,2 GR",
    deskripsi:
      "Botol Hydro dirancang untuk produk cair seperti pupuk cair, nutrisi tanaman, maupun bahan kimia pertanian lainnya. Kapasitas ideal dan desain praktis menjadikan botol ini mudah dibawa, disimpan, dan digunakan.",
    imagePath: "/images/product/botol HDPE/hydro.png",
  },
  {
    title: "BOTOL 500 CC NECK 24 MM WITH PUMP",
    dimensi: "DIAMETER 65,5 MM - TINGGI 133 MM",
    berat: "53,4 GR",
    deskripsi:
      "Botol HDPE kapasitas 500 cc ini dilengkapi dengan pump berleher 24 mm, ideal untuk cairan pembersih, sabun cair, sanitizer, atau produk kosmetik. Desainnya praktis, higienis, dan memudahkan pengeluaran isi secara terukur.",
    imagePath: "/images/product/botol HDPE/24mm.png",
  },
  {
    title: "BOTOL 500 CC NECK 28 MM WITH PUMP",
    dimensi: "DIAMETER 74 MM - TINGGI 169 MM",
    berat: "58,4 GR",
    deskripsi:
      "Mirip dengan versi 24 mm, botol 500 cc ini menggunakan pump berleher 28 mm untuk cairan dengan viskositas lebih tinggi. Cocok untuk lotion, cairan pembersih, hingga produk kesehatan. Material HDPE membuatnya tahan lama dan aman digunakan.",
    imagePath: "/images/product/botol HDPE/28mm.png",
  },
  {
    title: "BOTOL OLI 900 ML",
    dimensi: "129,5 X 81,3 X 215,5 MM",
    berat: "80 GR",
    deskripsi:
      "Botol oli 900 ml hadir dengan desain khusus untuk cairan pelumas otomotif. Bentuk ergonomis memudahkan menuang, sementara HDPE yang digunakan menjamin ketahanan terhadap sifat kimia oli. Kapasitasnya pas untuk kebutuhan servis kendaraan roda dua maupun empat.",
    imagePath: "/images/product/botol HDPE/oli.png",
  },
  {
    title: "BOTOL M 50-500 ML",
    dimensi: "DIAMETER 36,5 S/D 70 MM - TINGGI 68,8 SD 181 MM",
    berat: "9 - 40 GR",
    deskripsi:
      "Botol plastik Seri M tersedia dalam berbagai ukuran mulai dari 50 ml, 100 ml, 250 ml, hingga 500 ml, sehingga fleksibel digunakan sesuai kebutuhan. Terbuat dari bahan plastik berkualitas tinggi yang aman, kuat, dan tahan lama.",
    imagePath: "/images/product/botol HDPE/500ml.png",
  },
];

export const kalengPailProducts = [
  {
    title: "KALENG PLASTIK 0,75 KG",
    dimensi: "DIAMETER 114 MM - TINGGI 108,5 MM",
    berat: "55 GR",
    deskripsi:
      "Kaleng plastik 0,75 kg dirancang khusus sebagai wadah kemasan untuk industri cat dinding, plamir, wood polish, dan produk sejenisnya. Terbuat dari plastik berkualitas tinggi yang kuat dan tahan lama, kaleng ini menjaga isi tetap aman, tidak mudah bocor, serta memiliki tutup rapat untuk mencegah penguapan.",
    imagePath: "/images/product/kaleng&pail/0.75kg.png",
  },
  {
    title: "KALENG PLASTIK 1 KG",
    dimensi: "DIAMETER 114 MM - TINGGI 132 MM",
    berat: "58 GR",
    deskripsi:
      "Ukuran Kaleng Plastik 1 kg sangat ideal untuk penjualan ritel hingga skala proyek kecil, dengan tutup rapat yang menjaga kualitas isi tetap konsisten hingga digunakan. Kaleng ini juga mudah dilabeli untuk branding produk sesuai kebutuhan industri.",
    imagePath: "/images/product/kaleng&pail/1kg.png",
  },
  {
    title: "PAIL 1 KG MB2 NATURAL",
    dimensi: "DIAMETER 132,2 MM - TINGGI 121,4 MM",
    berat: "55 GR",
    deskripsi:
      "Pail plastik 1 kg food grade dirancang aman untuk kemasan makanan seperti snack, kurma, bumbu, dan produk pangan lainnya. Terbuat dari plastik berkualitas tinggi yang tidak berbau, bebas racun, dan sudah memenuhi standar keamanan pangan.",
    imagePath: "/images/product/kaleng&pail/1kgmb2.png",
  },
  {
    title: "PAIL 1 KG MB2 PUTIH SUSU",
    dimensi: "DIAMETER 114 MM - TINGGI 108,5 MM",
    berat: "55 GR",
    deskripsi:
      "Dengan ukuran praktis 1 kg, pail ini sangat cocok untuk kemasan ritel, menjaga produk tetap higienis, segar, dan terlindung dari kontaminasi. Tutup rapatnya memastikan isi tidak mudah tumpah dan tetap terjaga kualitasnya.",
    imagePath: "/images/product/kaleng&pail/1kgmb2Ssusu.png",
  },
  {
    title: "PAIL 5 KG PANJANG",
    dimensi: "DIAMETER 167 MM - TINGGI 199 MM",
    berat: "200 GR",
    deskripsi:
      "Pail plastik 5 kg adalah kemasan serbaguna yang bisa digunakan baik untuk industri makanan (seperti margarin, saus, atau adonan) maupun produk non-pangan seperti cat, lem, atau bahan kimia. Dengan kapasitas sedang, pail ini mudah diangkut dan disimpan, serta dilengkapi tutup rapat agar isi tetap aman dari kebocoran dan kontaminasi.",
    imagePath: "/images/product/kaleng&pail/5kg.png",
  },
  {
    title: "PAIL 10 KG MB2",
    dimensi: "DIAMETER 322 MM - TINGGI 263,5 MM",
    berat: "365 GR",
    deskripsi:
      "Pail plastik 10 kg sangat cocok untuk kebutuhan industri skala menengah. Kapasitasnya cukup besar untuk menyimpan cat, bahan bangunan, margarin, hingga produk kimia cair maupun padat. Terbuat dari plastik tebal yang kuat, pail ini tahan terhadap benturan, mudah ditumpuk, serta aman untuk transportasi jarak jauh.",
    imagePath: "/images/product/kaleng&pail/10kg.png",
  },
  {
    title: "PAIL 25 KG MB5",
    dimensi: "DIAMETER 322 MM - TINGGI 370 MM",
    berat: "760 GR",
    deskripsi:
      "Pail plastik 25 kg dirancang untuk kebutuhan industri berskala besar. Kapasitas besar ini ideal digunakan untuk penyimpanan cat, bahan kimia, bahan baku makanan, atau produk pabrikan lainnya. Dengan material plastik berkualitas tinggi, pail ini memiliki kekuatan ekstra, tidak mudah pecah, dan mampu melindungi isi dari kebocoran. Desainnya memungkinkan penyimpanan efisien di gudang maupun kontainer, menjadikannya solusi ideal untuk distribusi massal.",
    imagePath: "/images/product/kaleng&pail/25kg.png",
  },
];

export const perikananProducts = [
  {
    title: "FLOAT BALL 30 CM",
    dimensi: "DIAMETER 300 MM",
    berat: "1300 GR",
    deskripsi:
      "Pelampung plastik berdiameter 30 cm yang kuat dan tahan cuaca, cocok untuk kebutuhan perikanan, tambak, dan aplikasi perairan ringan.",
    imagePath: "/images/product/perikanan/30cm.png",
  },
  {
    title: "FLOAT BALL 36 CM",
    dimensi: "DIAMETER 360 MM",
    berat: "2000 GR",
    deskripsi:
      "Pelampung 36 cm dengan daya apung stabil, dirancang untuk penggunaan outdoor dan area perairan jangka panjang.",
    imagePath: "/images/product/perikanan/36cm.png",
  },
  {
    title: "FLOAT BALL 40 CM",
    dimensi: "DIAMETER 400 MM",
    berat: "2300 GR",
    deskripsi:
      "Pelampung besar 40 cm yang memberikan daya apung maksimal, ideal untuk tambak, keramba, atau kebutuhan industri perairan.",
    imagePath: "/images/product/perikanan/40cm.png",
  },
  {
    title: "CONTAINER SOFT SHELLED CRAB",
    dimensi: "260 X 207 X 105 MM",
    berat: "232 GR",
    deskripsi:
      "Wadah khusus untuk penyimpanan dan transportasi kepiting lunak menggunakan material plastik berkualitas, aman, kuat, dan mudah dibersihkan.",
    imagePath: "/images/product/perikanan/crab.png",
  },
  {
    title: "CLAM BASKET TYPE 01",
    dimensi: "700 X 200 X 200 MM",
    berat: "1,41 KG",
    deskripsi:
      "Keranjang kerang berdimensi 700x200x200 mm dengan ventilasi optimal untuk sortir, panen, dan penyimpanan hasil laut.",
    imagePath: "/images/product/perikanan/type1.png",
  },
  {
    title: "CLAM BASKET TYPE 02",
    dimensi: "850 X 150 X 150 MM",
    berat: "1,2 KG",
    deskripsi:
      "Keranjang kerang ukuran 850x150x150 mm yang ramping dan ringan, cocok untuk budidaya serta penanganan hasil panen di area perairan.",
    imagePath: "/images/product/perikanan/type2.png",
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
    name: "Blok Lalu Lintas dan Kerucut Lalu Lintas",
    displayName: "BLOK LALU LINTAS DAN KERUCUT LALU LINTAS",
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
    products: botolPupukProducts.map((p, idx) => ({
      id: `botol-pupuk-${idx + 1}`,
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
    id: "kosmetik",
    name: "Kosmetik",
    displayName: "KOSMETIK",
    subtitle: "Kemasan Botol & Pot Kosmetik, Skincare, dan Personal Care Higienis",
    products: kosmetikProducts.map((p, idx) => ({
      id: `kosmetik-${idx + 1}`,
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
    id: "botol-minyak-goreng",
    name: "Botol Minyak Goreng",
    displayName: "BOTOL MINYAK GORENG",
    subtitle: "Botol Plastik PET Food Grade Higienis untuk Minyak Goreng & Minyak Nabati",
    products: minyakGorengProducts.map((p, idx) => ({
      id: `minyak-goreng-${idx + 1}`,
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
    id: "beragam-kemasan-pet",
    name: "Beragam Kemasan PET",
    displayName: "BERAGAM KEMASAN PET",
    subtitle: "Galon Air Minum, Toples Bumbu, & Beragam Wadah Higienis Food Grade",
    products: kemasanPETProducts.map((p, idx) => ({
      id: `kemasan-pet-${idx + 1}`,
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
    id: "jerigen-hdpe",
    name: "Jerigen HDPE",
    displayName: "JERIGEN HDPE",
    subtitle: "Wadah Jerigen Blow Moulding Anti Bocor",
    products: jerigenHdpeProducts.map((p, idx) => ({
      id: `jerigen-hdpe-${idx + 1}`,
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
    id: "jerigen-chemical-hdpe",
    name: "Jerigen Chemical HDPE",
    displayName: "JERIGEN CHEMICAL HDPE",
    subtitle: "Jerigen Khusus Bahan Kimia Industri Standar Heavy Duty",
    products: jerigenChemicalProducts.map((p, idx) => ({
      id: `jerigen-chemical-${idx + 1}`,
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
    id: "jerigen-oli",
    name: "Jerigen Oli",
    displayName: "JERIGEN OLI",
    subtitle: "Kemasan Jerigen Pelumas, Oli Mesin, & Cairan Otomotif",
    products: jerigenOliProducts.map((p, idx) => ({
      id: `jerigen-oli-${idx + 1}`,
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
    id: "jerigen-lipat",
    name: "Jerigen Lipat",
    displayName: "JERIGEN LIPAT",
    subtitle: "Jerigen Lipat Praktis Fleksibel untuk Air & Kebutuhan Darurat",
    products: jerigenLipatProducts.map((p, idx) => ({
      id: `jerigen-lipat-${idx + 1}`,
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
    id: "botol-hdpe",
    name: "Botol HDPE",
    displayName: "BOTOL HDPE",
    subtitle: "Botol Plastik High-Density Polyethylene untuk Industri, Farmasi & Kimia",
    products: botolHdpeProducts.map((p, idx) => ({
      id: `botol-hdpe-${idx + 1}`,
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
    id: "kaleng-pail-plastik",
    name: "Kaleng & Pail Plastik",
    displayName: "KALENG & PAIL PLASTIK",
    subtitle: "Pail & Ember Industri Bersegel Rapat untuk Cat, Bahan Kimia, & Pasta",
    products: kalengPailProducts.map((p, idx) => ({
      id: `kaleng-pail-${idx + 1}`,
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
    id: "perikanan-dan-kelautan",
    name: "Perikanan dan Kelautan",
    displayName: "PERIKANAN DAN KELAUTAN",
    subtitle: "Pelampung Jaring Nelayan, Pelampung Keramba, & Wadah Hasil Laut",
    products: perikananProducts.map((p, idx) => ({
      id: `perikanan-${idx + 1}`,
      name: p.title,
      image: p.imagePath,
      specs: [
        { icon: "Ruler", label: "Dimensi", value: p.dimensi },
        { icon: "Weight", label: "Berat", value: p.berat },
      ],
      description: p.deskripsi,
    })),
  },
];
