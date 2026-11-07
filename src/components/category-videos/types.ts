import { CategoryVideoData } from "@/data/categoryVideos";

export type CategoryVideoVariantKey =
  | "1"
  | "2"
  | "3"
  | "3-rev"
  | "4"
  | "4-rev"
  | "5";

export interface CategoryVideoVariantMeta {
  key: CategoryVideoVariantKey;
  num: number | string;
  badge: string;
  buttonLabel: string;
  name: string;
  tag: string;
  description: string;
  highlights: string[];
}

export const CATEGORY_VIDEO_VARIANTS_META: CategoryVideoVariantMeta[] = [
  {
    key: "1",
    num: 1,
    badge: "Desain 1",
    buttonLabel: "1",
    name: "Modern Triple-Card (Refleksi Gambar 1)",
    tag: "Langsung Mirip Gambar 1",
    description:
      "Mengadopsi langsung tata letak 3 video berdampingan dari web asli seperti di Gambar 1, namun ditingkatkan dengan styling modern: kartu rounded glass, video duration chip, status player, dan kontrol HTML5 responsif.",
    highlights: [
      "Persis seperti layout 3 video sejajar pada Gambar 1 referensi Anda",
      "Player video HTML5 langsung siap putar dengan kontrol audio & layar penuh",
      "Bingkai kartu modern dengan hover shadow lembut khas Asia Plastik",
    ],
  },
  {
    key: "2",
    num: 2,
    badge: "Desain 2",
    buttonLabel: "2",
    name: "Spotlight Cinema & Playlist Reel",
    tag: "Bioskop Utama + Playlist",
    description:
      "Menampilkan 1 panggung video utama berukuran sinematik di bagian atas, disertai daftar thumbnail video pengujian di bawahnya yang bisa diklik untuk berganti video seketika.",
    highlights: [
      "Panggung video utama 16:9 yang megah dan sangat jelas untuk demonstrasi produk",
      "Playlist thumbnail interaktif dengan badge durasi dan judul uji coba",
      "Pengalaman menonton premium tanpa perlu scroll panjang",
    ],
  },
  {
    key: "3",
    num: 3,
    badge: "Desain 3 (Asli)",
    buttonLabel: "3",
    name: "Horizontal Reel Carousel (Original)",
    tag: "Carousel Geser Modern",
    description:
      "Format strip carousel geser modern dengan navigasi panah kiri/kanan. Rapi di layar hp maupun desktop, menampilkan video pengujian dengan badge spesifikasi dan durasi.",
    highlights: [
      "Navigasi panah geser kiri-kanan dengan scroll snap yang halus",
      "Badge uji durabilitas pabrik dan judul pengujian di atas kartu video",
      "Efek hover elevasi yang interaktif dan hidup",
    ],
  },
  {
    key: "3-rev",
    num: "3R",
    badge: "Desain 3 (Revisi)",
    buttonLabel: "3-Rev",
    name: "Mini Reel Carousel (Revisi Video Lebih Kecil)",
    tag: "Kompak & Hemat Tempat",
    description:
      "Revisi khusus dari Desain 3: ukuran video dan kartu diperkecil secara proporsional sehingga jauh lebih ringkas, hemat ruang vertikal halaman, dan tetap mempertahankan navigasi geser reel yang mulus.",
    highlights: [
      "Ukuran kartu video jauh lebih kompak (w-56) sehingga tidak mendominasi tinggi layar",
      "Navigasi panah geser kiri-kanan tetap lincah dan responsif",
      "Metadata diringkas elegan untuk nuansa feed reels yang modern",
    ],
  },
  {
    key: "4",
    num: 4,
    badge: "Desain 4 (Asli)",
    buttonLabel: "4",
    name: "Industrial QC Proof Cards (Original)",
    tag: "Format Sertifikasi Lab",
    description:
      "Setiap video dibingkai sebagai bukti uji mutu pabrik (Quality Assurance) dengan stensil TEST REF di bagian atas serta lembar spesifikasi pengujian dan status PASSED di bagian bawah.",
    highlights: [
      "Header stensil uji teknis (TEST REF: AP-V01, Kategori Uji)",
      "Kartu lembar spesifikasi durasi dan status QC PASSED di bagian bawah",
      "Tampilan sertifikasi pabrik yang sangat mendetail",
    ],
  },
  {
    key: "4-rev",
    num: "4R",
    badge: "Desain 4 (Revisi)",
    buttonLabel: "4-Rev",
    name: "Industrial Clean Player (Revisi Minimalis)",
    tag: "Hanya Layar Video Murni",
    description:
      "Revisi khusus dari Desain 4: menghapus header stensil (Gambar 4) dan menghapus lembar teks deskripsi bawah (Gambar 3). Menghasilkan 3 layar monitor video uji mutu yang murni, bersih, dan berfokus 100% pada pemutaran video.",
    highlights: [
      "Header stensil (Gambar 4) berhasil dihapus sesuai permintaan",
      "Teks deskripsi & badge status bawah (Gambar 3) berhasil dihapus",
      "Fokus 100% pada video frame industrial yang tajam, modern, dan tidak berantakan",
    ],
  },
  {
    key: "5",
    num: 5,
    badge: "Desain 5",
    buttonLabel: "5",
    name: "Bento Media Pods (Grid Asimetris)",
    tag: "Modular Bento Modern",
    description:
      "Gaya Apple / Linear Bento Grid modern: 1 video utama menempati kompartemen besar di kiri, didampingi 2 kartu video sekunder bertumpuk rapi di sisi kanan dengan badge spesifikasi terpadu.",
    highlights: [
      "Komposisi visual asimetris yang dinamis dan sangat modern",
      "Hierarki visual jelas antara video pengujian utama dan video pendukung",
      "Tampilan B2B kelas dunia yang elegan di perangkat seluler dan desktop",
    ],
  },
];

export function resolveVideoVariantKey(
  param: string | null | undefined
): CategoryVideoVariantKey {
  if (param === "2") return "2";
  if (param === "3") return "3";
  if (param === "3-rev" || param === "3r" || param === "6") return "3-rev";
  if (param === "4") return "4";
  if (param === "4-rev" || param === "4r" || param === "7") return "4-rev";
  if (param === "5") return "5";
  return "1";
}

export interface VideoVariantProps {
  data: CategoryVideoData;
}
