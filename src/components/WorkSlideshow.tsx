"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";

const slides = projects.flatMap((p) => (p.kind === "image" ? [{ src: p.image }] : []));

/** Crossfades through project screenshots on the home page "Selected work" tile. */
export function WorkSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), 3500);
    return () => clearInterval(timer);
  }, []);

  return slides.map((slide, i) => (
    <Image
      key={slide.src}
      src={slide.src}
      // The link around the tile already says "Selected work"; the screenshots are decorative.
      alt=""
      quality={90}
      fill
      sizes="(min-width: 900px) 33vw, 100vw"
      className={`object-cover object-top transition-[opacity,scale] duration-1000 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-105 ${
        i === index ? "opacity-100" : "opacity-0"
      }`}
    />
  ));
}
