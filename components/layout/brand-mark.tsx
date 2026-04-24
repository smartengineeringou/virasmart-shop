import Link from "next/link";

export function BrandMark() {
  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label="Virasmart home">
      <div className="w-8 h-8 bg-brand rounded flex items-center justify-center">
        <span className="text-white font-bold text-sm font-mono">VS</span>
      </div>
      <div className="leading-tight">
        <p className="font-semibold text-sm group-hover:text-brand transition-colors">Virasmart</p>
        <p className="text-xs text-muted-foreground font-mono">shop.virasmart.eu</p>
      </div>
    </Link>
  );
}
