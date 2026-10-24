"use client";

import { useBugHunt } from "@/lib/bug-hunt";
import { Ladybug } from "./Ladybug";

export function BugCounter() {
  const { count, total } = useBugHunt();

  return (
    <span
      aria-live="polite"
      title="Bugs found"
      className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-cream pr-3 pl-2 text-sm font-bold tabular-nums"
    >
      <Ladybug size={20} />
      <span className="sr-only">Bugs found:</span>
      {count}/{total}
    </span>
  );
}
