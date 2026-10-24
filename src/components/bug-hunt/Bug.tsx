"use client";

import { catchBug, useBugHunt, type BugId } from "@/lib/bug-hunt";
import { Ladybug } from "./Ladybug";

type BugProps = {
  id: BugId;
  /** Positioning classes — most bugs sit absolutely inside a tile. */
  className?: string;
  size?: number;
  spots?: boolean;
};

export function Bug({ id, className = "absolute", size = 24, spots }: BugProps) {
  const { found } = useBugHunt();
  const caught = found.includes(id);

  return (
    <button
      type="button"
      aria-label={caught ? "Bug caught" : "A hidden bug — catch it"}
      disabled={caught}
      onClick={() => catchBug(id)}
      className={`z-4 inline-flex size-10 cursor-pointer items-center justify-center border-0 bg-transparent p-0 opacity-90 transition duration-250 hover:scale-112 hover:opacity-100 disabled:cursor-default disabled:hover:scale-100 ${className}`}
    >
      {caught ? (
        <span
          aria-hidden="true"
          className="flex size-7 animate-pop items-center justify-center rounded-full bg-leaf text-sm font-extrabold text-white"
        >
          ✓
        </span>
      ) : (
        // Staggered so the bugs on a page don't all wiggle at the same moment
        <span className="block animate-wiggle" style={{ animationDelay: `${id * 0.6}s` }}>
          <Ladybug size={size} spots={spots} />
        </span>
      )}
    </button>
  );
}
