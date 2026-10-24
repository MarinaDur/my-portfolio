"use client";

import { useEffect } from "react";

/** Sets --rx/--ry on the hovered `.tilt` tile so it leans toward the cursor. */
export function TiltEffect() {
  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    let last: HTMLElement | null = null;
    const reset = (el: HTMLElement | null) => {
      el?.style.setProperty("--rx", "0deg");
      el?.style.setProperty("--ry", "0deg");
    };

    const onMove = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>(".tilt") ?? null;
      if (last && last !== el) reset(last);
      last = el;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--ry", `${(x * 7).toFixed(2)}deg`);
      el.style.setProperty("--rx", `${(-y * 7).toFixed(2)}deg`);
    };
    const onLeave = () => {
      reset(last);
      last = null;
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return null;
}
