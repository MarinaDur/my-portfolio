type ArrowProps = {
  /** "↗" for links that leave the site. */
  glyph?: "→" | "↗";
  className?: string;
};

/** Round arrow badge on tiles; turns when its link is hovered (see `.arrow` in globals.css). */
export function Arrow({ glyph = "→", className = "" }: ArrowProps) {
  return (
    <span aria-hidden="true" className={`arrow ${className}`}>
      {glyph}
    </span>
  );
}
