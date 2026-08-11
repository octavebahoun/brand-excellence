export function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 border-b-2 border-orange-accent pb-1 font-mono text-xs font-semibold uppercase tracking-widest text-orange-accent">
      <span aria-hidden="true">{"//"}</span>
      {children}
    </span>
  );
}
