"use client";

import dynamic from "next/dynamic";

/**
 * Client wrapper for FloatingActions using next/dynamic with { ssr: false }
 * Deferring loading of the interactive chat assistant & widget to run
 * asynchronously strictly on client after main page hydration is complete.
 */
const FloatingActions = dynamic(() => import("@/components/FloatingActions"), {
  ssr: false,
});

export default function FloatingActionsClient() {
  return <FloatingActions />;
}
