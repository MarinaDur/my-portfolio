import Link from "next/link";
import { Arrow } from "./Arrow";

type CtaTileProps = {
  title: string;
  /** Small line above the title. */
  label?: string;
  /** Grid placement, e.g. "col-span-2 lg:col-span-4". */
  className?: string;
};

/** Orange "get in touch" tile that links to the contact page. */
export function CtaTile({ title, label, className = "" }: CtaTileProps) {
  return (
    <Link href="/contact" className={`tile justify-between gap-4 bg-clay text-light ${className}`}>
      {label && <p className="label">{label}</p>}
      <div className="flex items-center justify-between gap-3">
        <b className="display text-[24px] leading-[1.05] lg:text-[clamp(24px,1.875vw,38px)]">{title}</b>
        <Arrow />
      </div>
    </Link>
  );
}
