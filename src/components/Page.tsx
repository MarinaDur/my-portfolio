/** Page shell: same max width and side padding as the header, so content lines up with the logo. */
export function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-425 animate-fade-up px-3.5 pt-1 pb-7 lg:px-[clamp(24px,3.188vw,64px)] lg:pb-10">
      {children}
    </main>
  );
}
