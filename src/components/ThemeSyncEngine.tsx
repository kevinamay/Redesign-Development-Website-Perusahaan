"use client";

import { useEffect } from "react";

/**
 * Sinkronisasi tema:
 * - Default: Mode Terang (Light Mode).
 * - Menghormati pilihan pengguna jika tersimpan di localStorage ('dark' atau 'light').
 */
export function applyAdaptiveTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";

  const stored = localStorage.getItem("theme");
  const effectiveTheme: "light" | "dark" = stored === "dark" ? "dark" : "light";

  if (effectiveTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Notifikasi seluruh komponen reaktif (misalnya ThemeToggle)
  window.dispatchEvent(new CustomEvent("theme-change", { detail: effectiveTheme }));

  return effectiveTheme;
}

export default function ThemeSyncEngine() {
  useEffect(() => {
    // Terapkan tema saat client mount
    applyAdaptiveTheme();

    // Pantau perubahan localStorage antar tab / window
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "theme") {
        applyAdaptiveTheme();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return null;
}
