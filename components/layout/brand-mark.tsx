import Link from "next/link";
import Image from "next/image";

export function BrandMark() {
  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label="Virasmart — product catalogue">
      <Image
        src="/images/logos/Virasmart/Png/Virasmart-logo-textSmart_no_V_color.png"
        alt="Virasmart"
        width={140}
        height={18}
        priority
        className="h-5 w-auto shrink-0"
      />
      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase tracking-widest text-brand bg-brand/10 border border-brand/20 rounded px-2 py-0.5">
        <span className="w-1 h-1 rounded-full bg-brand" />
        Catalogue
      </span>
    </Link>
  );
}
