type PageHeaderProps = {
  /** Heading; the part in `accent` is shown in clay. */
  title: string;
  accent: string;
  intro?: string;
  /** Extra content after the heading text (e.g. a hidden bug). */
  children?: React.ReactNode;
};

export function PageHeader({ title, accent, intro, children }: PageHeaderProps) {
  return (
    <div className="px-0.5 pt-1.5 pb-4 lg:flex lg:flex-wrap lg:items-end lg:justify-between lg:gap-6 lg:px-0 lg:pt-[clamp(8px,0.9375vw,20px)] lg:pb-[clamp(20px,1.875vw,36px)]">
      <h1 className="display mt-2 mb-2 text-[42px] leading-[0.95] lg:mt-0 lg:mb-0 lg:text-[clamp(56px,5.625vw,116px)]">
        {title} <span className="text-clay">{accent}</span>
        {children}
      </h1>
      {intro && <p className="m-0 max-w-[30em] text-ink-2 lg:text-[clamp(17px,1.219vw,22px)]">{intro}</p>}
    </div>
  );
}

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-[1700px] animate-fade-up px-3.5 pt-1 pb-7 lg:px-[clamp(24px,3.188vw,64px)] lg:pb-10">
      {children}
    </main>
  );
}
