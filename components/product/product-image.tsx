import Image from "next/image";
import type { Product } from "@/lib/shopify/types";

interface ProductImageProps {
  product: Product;
  sizes: string;
  priority?: boolean;
  className?: string;
}

// A product either has a real image or gets a branded, engineering-style
// placeholder built from its SKU + vendor. No generic grey "no image" tiles.
export function ProductImage({ product, sizes, priority, className }: ProductImageProps) {
  const image = product.images[0];
  if (image && !isStubImage(image.url)) {
    return (
      <Image
        src={image.url}
        alt={image.altText ?? product.title}
        fill
        sizes={sizes}
        priority={priority}
        className={className}
      />
    );
  }

  return <BrandedPlaceholder sku={product.sku} vendor={product.vendor} />;
}

const STUB_IMAGE_PATHS = ["/placeholder.jpg", "/placeholder.svg"];
function isStubImage(url: string) {
  return STUB_IMAGE_PATHS.some((p) => url.endsWith(p));
}

function BrandedPlaceholder({ sku, vendor }: { sku: string; vendor: string }) {
  return (
    <div
      aria-label={`${vendor} ${sku} — image pending`}
      role="img"
      className="absolute inset-0 bg-surface overflow-hidden"
    >
      <svg
        viewBox="0 0 120 90"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full text-border"
        aria-hidden
      >
        <defs>
          <pattern id="grid" width="6" height="6" patternUnits="userSpaceOnUse">
            <path d="M6 0H0V6" fill="none" stroke="currentColor" strokeWidth="0.25" />
          </pattern>
        </defs>
        <rect width="120" height="90" fill="url(#grid)" />
        <line x1="0" y1="45" x2="120" y2="45" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 2" />
        <line x1="60" y1="0" x2="60" y2="90" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 2" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 text-center px-4">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-brand bg-brand/10 border border-brand/20 rounded px-2 py-0.5">
          <span className="w-1 h-1 rounded-full bg-brand" />
          {vendor}
        </span>
        <p className="text-xs font-mono font-semibold text-foreground break-all">{sku}</p>
        <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          technical image pending
        </p>
      </div>
    </div>
  );
}
