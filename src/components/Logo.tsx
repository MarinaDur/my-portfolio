import Link from "next/link";

export function Logo({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link
      href="/"
      onNavigate={onNavigate}
      className="display mr-auto text-2xl lg:text-[clamp(26px,1.875vw,34px)]"
    >
      marina<span className="text-clay">.</span>
    </Link>
  );
}
