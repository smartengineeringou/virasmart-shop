export function Header() {
  return (
    <header className="border-b border-border bg-surface sticky top-0 z-30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm font-mono">VS</span>
          </div>
          <div>
            <p className="font-semibold text-sm leading-tight">Virasmart</p>
            <p className="text-xs text-muted-foreground font-mono">shop.virasmart.eu</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">B2B Shopify Launch Plan</span>
          <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono px-2.5 py-1 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            Engineering Catalogue
          </span>
        </div>
      </div>
    </header>
  )
}
