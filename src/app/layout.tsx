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
  title: "CV. ASIA PLASTIK - Solusi Manufaktur & Cetak Plastik Industri Presisi",
  description:
    "CV. Asia Plastik adalah produsen manufaktur produk plastik terkemuka: Injection Molding, Blow Molding, dan Kemasan Industri berkualitas tinggi & presisi.",
};

import FloatingActions from "@/components/FloatingActions";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 relative"
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
        {children}
        {/* Floating Quick Contact & AI Assistant Actions */}
        <FloatingActions />
      </body>
    </html>
  );
}
