"use client";

import React, { useEffect, useState, useRef, useCallback, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "@/data/translations";

interface ThemeToggleProps {
  className?: string;
  showLabels?: boolean;
}

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

function subscribeTheme(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("theme-change", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("theme-change", callback);
    window.removeEventListener("storage", callback);
  };
}

function getThemeSnapshot(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getServerSnapshot(): "light" | "dark" {
  return "light";
}

export default function ThemeToggle({ className = "", showLabels = false }: ThemeToggleProps) {
  const mounted = useMounted();
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerSnapshot);
  const { t } = useLanguage();

  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState<number | null>(null);

  const trackRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number>(0);
  const initialPosRef = useRef<number>(0);
  const hasMovedRef = useRef<boolean>(false);

  // Dimensions (in pixels)
  // Track width = 74px, knob = 26px, padding = 4px
  // Left pos (Dark) = 0px (relative to padding)
  // Right pos (Light) = 40px (relative to padding)
  const MAX_TRAVEL = 40;
  const MIDPOINT = 20;

  const applyTheme = useCallback((newTheme: "light" | "dark") => {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      try {
        navigator.vibrate?.(10);
      } catch {
        // Safe ignore
      }
    }

    window.dispatchEvent(new CustomEvent("theme-change", { detail: newTheme }));
  }, []);

  // Synchronize DOM class on initial mount
  useEffect(() => {
    const current = getThemeSnapshot();
    if (current === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Pointer Drag Handlers (Supports both Mouse & Touch seamlessly)
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    const target = e.currentTarget as HTMLElement;
    target.setPointerCapture(e.pointerId);

    startXRef.current = e.clientX;
    initialPosRef.current = theme === "dark" ? 0 : MAX_TRAVEL;
    hasMovedRef.current = false;
    setIsDragging(true);
    setDragOffset(initialPosRef.current);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startXRef.current;
    if (Math.abs(deltaX) > 3) {
      hasMovedRef.current = true;
    }
    const nextPos = Math.max(0, Math.min(MAX_TRAVEL, initialPosRef.current + deltaX));
    setDragOffset(nextPos);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    try {
      const target = e.currentTarget as HTMLElement;
      target.releasePointerCapture(e.pointerId);
    } catch {
      // safe fallback
    }

    setIsDragging(false);

    if (hasMovedRef.current && dragOffset !== null) {
      // User slid / dragged:
      // If position is past the midpoint to the right -> Light Mode (Kanan = Terang)
      // If position is to the left of the midpoint -> Dark Mode (Kiri = Gelap)
      if (dragOffset >= MIDPOINT) {
        applyTheme("light");
      } else {
        applyTheme("dark");
      }
    } else {
      // Simple click/tap without dragging:
      // Check whether clicked on left or right half
      if (trackRef.current) {
        const rect = trackRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        if (clickX < rect.width / 2) {
          applyTheme("dark"); // Left half = Dark
        } else {
          applyTheme("light"); // Right half = Light
        }
      } else {
        applyTheme(theme === "dark" ? "light" : "dark");
      }
    }

    setDragOffset(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      applyTheme("dark"); // Geser ke kiri = Gelap
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      applyTheme("light"); // Geser ke kanan = Terang
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      applyTheme(theme === "dark" ? "light" : "dark");
    }
  };

  if (!mounted) {
    return (
      <div
        className={`w-[74px] h-[34px] rounded-full bg-slate-800/80 border border-slate-700/60 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  // Calculate Knob X Position
  let currentKnobX = isDark ? 0 : MAX_TRAVEL;
  if (isDragging && dragOffset !== null) {
    currentKnobX = dragOffset;
  }

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {showLabels && (
        <span
          className={`text-[11px] font-semibold tracking-wider uppercase transition-colors duration-200 ${
            isDark ? "text-blue-400 font-bold" : "text-slate-400"
          }`}
        >
          {t.common.darkMode}
        </span>
      )}

      {/* Interactive Drag & Slide Track */}
      <div
        ref={trackRef}
        role="switch"
        tabIndex={0}
        aria-checked={!isDark}
        aria-label={`${t.common.darkMode} / ${t.common.lightMode}`}
        title={isDark ? t.common.themeTooltipDark : t.common.themeTooltipLight}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
        style={{ touchAction: "none" }}
        className={`relative w-[74px] h-[34px] rounded-full p-[4px] cursor-grab active:cursor-grabbing focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-colors duration-300 shadow-inner flex items-center ${
          isDark
            ? "bg-slate-950 border border-slate-800 shadow-black/60"
            : "bg-slate-200 border border-slate-300/80 shadow-slate-300/50"
        }`}
      >
        {/* Left Fixed Icon: Crescent Moon (KIRI = MODE GELAP) */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            applyTheme("dark");
          }}
          className={`absolute left-[9px] top-1/2 -translate-y-1/2 flex items-center justify-center transition-opacity duration-200 pointer-events-auto ${
            isDark ? "opacity-20 text-blue-400" : "opacity-70 text-slate-600 hover:opacity-100"
          }`}
          title={t.common.themeTooltipLight}
        >
          <Moon className="w-3.5 h-3.5" />
        </div>

        {/* Right Fixed Icon: Golden Sun (KANAN = MODE TERANG) */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            applyTheme("light");
          }}
          className={`absolute right-[9px] top-1/2 -translate-y-1/2 flex items-center justify-center transition-opacity duration-200 pointer-events-auto ${
            !isDark ? "opacity-20 text-amber-500" : "opacity-70 text-slate-400 hover:opacity-100"
          }`}
          title={t.common.themeTooltipDark}
        >
          <Sun className="w-3.5 h-3.5" />
        </div>

        {/* Sliding & Draggable Knob
            - KIRI (x = 0): Mode Gelap (Dark Mode)
            - KANAN (x = 40): Mode Terang (Light Mode)
        */}
        <div
          style={{
            transform: `translateX(${currentKnobX}px)`,
            transition: isDragging
              ? "none"
              : "transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.28s ease, box-shadow 0.28s ease",
          }}
          className={`relative z-10 w-[26px] h-[26px] rounded-full flex items-center justify-center shadow-md pointer-events-none select-none ${
            isDark
              ? "bg-gradient-to-tr from-blue-700 to-indigo-500 text-white shadow-blue-900/60 ring-1 ring-blue-400/30"
              : "bg-gradient-to-tr from-amber-400 to-amber-300 text-slate-900 shadow-amber-500/40 ring-1 ring-amber-300/60"
          }`}
        >
          {isDark ? (
            <Moon className="w-3.5 h-3.5 fill-current animate-fade-in-up" />
          ) : (
            <Sun className="w-3.5 h-3.5 fill-current animate-fade-in-up" />
          )}
        </div>
      </div>

      {showLabels && (
        <span
          className={`text-[11px] font-semibold tracking-wider uppercase transition-colors duration-200 ${
            !isDark ? "text-amber-600 font-bold" : "text-slate-400"
          }`}
        >
          {t.common.lightMode}
        </span>
      )}
    </div>
  );
}
