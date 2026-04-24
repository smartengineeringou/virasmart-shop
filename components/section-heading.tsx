interface SectionHeadingProps {
  index: string
  title: string
  subtitle?: string
}

export function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="flex gap-5 items-start border-b border-border pb-5">
      <span className="font-mono text-4xl font-bold text-brand/30 leading-none select-none shrink-0">{index}</span>
      <div>
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        {subtitle && <p className="text-sm text-muted-foreground mt-1 max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  )
}
