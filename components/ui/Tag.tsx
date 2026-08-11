export function Tag({ children }: { children: string }) {
  return (
    <span className="inline-block rounded-btn border border-orange-accent/40 bg-orange-accent/10 px-3 py-1 font-mono text-xs tracking-wide text-orange-accent">
      {children}
    </span>
  );
}
