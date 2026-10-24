/** The tile grid: 2 columns on phones, 12 on desktop. Children fade in one after another (`.stagger`). */
export function Bento({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`stagger grid grid-cols-2 gap-2.5 lg:grid-cols-12 lg:gap-[clamp(12px,0.9375vw,18px)] ${className}`}>
      {children}
    </div>
  );
}
