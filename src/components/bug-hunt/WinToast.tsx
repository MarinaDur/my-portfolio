"use client";

import Link from "next/link";
import { dismissWin, useBugHunt } from "@/lib/bug-hunt";

export function WinToast() {
  const { showWin, total } = useBugHunt();
  if (!showWin) return null;

  return (
    <div
      role="status"
      className="fixed right-3 bottom-4 left-3 z-30 mx-auto flex max-w-[440px] animate-fade-up flex-col gap-1 rounded-3xl bg-ink px-5 py-[18px] text-light shadow-[0_24px_48px_-12px_rgba(0,0,0,0.45)] lg:right-6 lg:bottom-6 lg:left-auto lg:m-0"
    >
      <b className="display text-[22px] text-pink-b">All {total} bugs caught!</b>
      <span>That’s exactly how I’ll test your website.</span>
      <div className="mt-2.5 flex items-center gap-3">
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
