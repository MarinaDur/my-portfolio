"use client";

import Link from "next/link";
import { dismissWin, useBugHunt } from "@/lib/bug-hunt";

// Confetti pieces: where each flies to, and its color.
const confetti = [
  { x: "-150px", y: "-90px", r: "160deg", color: "bg-clay" },
  { x: "-95px", y: "-140px", r: "-120deg", color: "bg-mustard" },
  { x: "-30px", y: "-165px", r: "90deg", color: "bg-pink-b" },
  { x: "35px", y: "-155px", r: "-200deg", color: "bg-sage" },
  { x: "100px", y: "-130px", r: "140deg", color: "bg-mint" },
  { x: "155px", y: "-80px", r: "-90deg", color: "bg-peach" },
  { x: "-185px", y: "-30px", r: "70deg", color: "bg-pink" },
  { x: "185px", y: "-25px", r: "-160deg", color: "bg-mustard" },
  { x: "-60px", y: "-115px", r: "220deg", color: "bg-leaf" },
  { x: "65px", y: "-185px", r: "-60deg", color: "bg-clay" },
];

export function WinToast() {
  const { showWin, total } = useBugHunt();
  if (!showWin) return null;

  return (
    <div
      role="status"
      className="fixed right-3 bottom-4 left-3 z-30 mx-auto flex max-w-[440px] animate-fade-up flex-col gap-1 rounded-3xl bg-ink px-5 py-[18px] text-light shadow-[0_24px_48px_-12px_rgba(0,0,0,0.45)] lg:right-6 lg:bottom-6 lg:left-auto lg:m-0"
    >
      <div aria-hidden="true" className="pointer-events-none absolute top-6 left-1/2">
        {confetti.map(({ x, y, r, color }, i) => (
          <i
            key={i}
            className={`absolute block size-2.5 animate-burst ${color} ${i % 2 ? "rounded-full" : "rounded-sm"}`}
            style={{ "--x": x, "--y": y, "--r": r, animationDelay: `${(i % 3) * 0.06}s` } as React.CSSProperties}
          />
        ))}
      </div>
      <b className="display text-[22px] text-pink-b">All {total} bugs caught!</b>
      <span>That’s exactly how I’ll test your website.</span>
      <div className="mt-2.5 flex flex-wrap items-center gap-3">
        <Link href="/contact" onClick={dismissWin} className="pill bg-pink-b text-ink">
          Let’s talk
        </Link>
        <button type="button" onClick={dismissWin} className="pill border-current bg-transparent text-light">
          Close
        </button>
      </div>
    </div>
  );
}
