"use client";

import React, { useEffect, useState, useRef } from "react";

interface AnimatedMetricProps {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  className?: string;
}

export default function AnimatedMetric({
  target,
  suffix = "",
  prefix = "",
  label,
  duration = 1400,
  className = "",
}: AnimatedMetricProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const stepTime = 25;
          const steps = Math.max(10, duration / stepTime);
          const increment = target / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, hasAnimated, duration]);

  return (
    <div ref={ref} className={`text-center group ${className}`}>
      <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 tracking-tight">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
        {label}
      </div>
    </div>
  );
}
