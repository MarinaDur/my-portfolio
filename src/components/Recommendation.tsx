import { recommendation } from "@/data/testimonials";

type RecommendationProps = {
  /** Short pull quote (contact page) instead of the full excerpt. */
  short?: boolean;
  className?: string;
};

export function Recommendation({ short = false, className = "" }: RecommendationProps) {
  return (
    <figure className={`tile m-0 justify-between gap-5 ${className}`}>
      <span aria-hidden="true" className="display -mb-6 text-[64px] leading-none text-clay lg:text-[clamp(64px,5vw,96px)]">
        “
      </span>
      <blockquote
        className={`display m-0 leading-[1.15] ${
          short ? "text-[20px] lg:text-[clamp(20px,1.5vw,28px)]" : "text-[21px] lg:text-[clamp(22px,1.75vw,34px)]"
        }`}
      >
        {short ? recommendation.short : recommendation.quote}
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-extrabold text-cream"
        >
          {recommendation.initials}
        </span>
        <span className="text-sm leading-tight">
          <b className="block">{recommendation.name}</b>
          <span className="text-ink-2">{recommendation.role}</span>
          {" · "}
          <a
            href={recommendation.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-clay underline-offset-2 hover:underline"
          >
            on LinkedIn ↗<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </span>
      </figcaption>
    </figure>
  );
}
