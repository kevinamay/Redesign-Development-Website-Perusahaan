"use client";

import { useEffect } from "react";

/**
 * Mendeteksi apakah perangkat saat ini berada dalam mode HP / Smartphone.
 * Mode HP diidentifikasi berdasarkan lebar viewport < 640px (breakpoint standard 'sm' Tailwind),
 * yang memisahkan smartphone (<640px) dari tablet (iPad/Tab >= 768px atau >= 640px) dan desktop/laptop.
 */
export function isMobileScreen(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 640;
}

/**
 * Sinkronisasi tema:
 * - Mode HP (< 640px): 100% Otomatis mengikuti tema bawaan HP (Dark / Light) via prefers-color-scheme.
 * - Mode Tablet / Laptop / Desktop (>= 640px): Mengikuti pilihan manual pengguna (switch) yang tersimpan di localStorage.
 */
export function applyAdaptiveTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";

  const isMobile = window.innerWidth < 640;
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let effectiveTheme: "light" | "dark" = "light";

  if (isMobile) {
    // Mode HP: Otomatis mengikuti tema HP
    effectiveTheme = systemPrefersDark ? "dark" : "light";
  } else {
    // Mode Desktop / Laptop / Tab / Tablet: Menghormati pilihan manual dari switch (localStorage)
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      effectiveTheme = stored;
    } else {
      effectiveTheme = systemPrefersDark ? "dark" : "light";
    }
  }

  // Terapkan class .dark pada elemen <html>
  if (effectiveTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Notifikasi seluruh komponen (seperti ThemeToggle dan icon/asset reaktif)
  window.dispatchEvent(new CustomEvent("theme-change", { detail: effectiveTheme }));

  return effectiveTheme;
}

export default function ThemeSyncEngine() {
  useEffect(() => {
    // Terapkan tema saat inisialisasi client
    applyAdaptiveTheme();

    // 1. Pantau perubahan tema sistem HP / OS secara realtime
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      // Jika di mode HP, langsung sinkronkan tema sistem HP yang baru
      // Jika di desktop/tablet tanpa preferensi tersimpan, juga ikut beradaptasi
      const isMobile = window.innerWidth < 640;
      const stored = localStorage.getItem("theme");
      if (isMobile || !stored) {
        applyAdaptiveTheme();
      }
    };

    try {
      mediaQuery.addEventListener("change", handleSystemThemeChange);
    } catch {
      mediaQuery.addListener?.(handleSystemThemeChange);
    }

    // 2. Pantau perubahan ukuran layar (Resize / Rotasi Layar)
    // Beradaptasi secara mulus saat beralih antara mode HP (<640px) dan Tablet/Desktop (>=640px)
    let lastWasMobile = window.innerWidth < 640;
    const handleResize = () => {
      const isMobileNow = window.innerWidth < 640;
      if (isMobileNow !== lastWasMobile) {
        lastWasMobile = isMobileNow;
        applyAdaptiveTheme();
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      try {
        mediaQuery.removeEventListener("change", handleSystemThemeChange);
      } catch {
        mediaQuery.removeListener?.(handleSystemThemeChange);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
}
