import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asiaplastik.com"),
  title: "CV. ASIA PLASTIK - Solusi Manufaktur & Cetak Plastik Industri Presisi",
  description:
    "CV. Asia Plastik adalah produsen manufaktur produk plastik terkemuka sejak 1985: Injection Molding presisi tinggi, Blow Molding hingga 500 liter, dan Kemasan Industri berstandar ISO 9001:2015.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://asiaplastik.com",
    siteName: "CV. ASIA PLASTIK",
    title: "CV. ASIA PLASTIK - Solusi Manufaktur & Cetak Plastik Industri Presisi",
    description:
      "Produsen manufaktur kemasan plastik industri dan cetakan presisi sejak 1985. Sertifikasi ISO 9001:2015.",
    images: [
      {
        url: "/images/BG_CV ASIA.webp",
        width: 1200,
        height: 630,
        alt: "Pabrik Manufaktur CV. Asia Plastik Surabaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CV. ASIA PLASTIK - Solusi Manufaktur & Cetak Plastik Industri Presisi",
    description:
      "Produsen manufaktur kemasan plastik industri dan cetakan presisi sejak 1985. Sertifikasi ISO 9001:2015.",
    images: ["/images/BG_CV ASIA.webp"],
  },
};

import FloatingActions from "@/components/FloatingActionsClient";
import GlobalScrollEnhancer from "@/components/GlobalScrollEnhancer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased overflow-x-clip max-w-[100vw] w-full`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full w-full max-w-[100vw] overflow-x-clip flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 relative"
      >
        <script
          id="theme-initializer"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                  var savedLang = localStorage.getItem('language');
                  if (savedLang === 'zh') {
                    document.documentElement.lang = 'zh-CN';
                  } else if (savedLang === 'en') {
                    document.documentElement.lang = 'en';
                  } else if (savedLang === 'id') {
                    document.documentElement.lang = 'id';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* Universal Scroll Transitions & Reading Progress across ALL pages */}
        <GlobalScrollEnhancer />
        {children}
        {/* Floating Quick Contact & AI Assistant Actions */}
        <FloatingActions />
      </body>
    </html>
  );
}
