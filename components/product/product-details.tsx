import Link from "next/link";
import type { Product } from "@/lib/shopify/types";
import { ProductCta } from "@/components/product/product-cta";
import { ProductDatasheets } from "@/components/product/product-datasheets";
import { ProductImage } from "@/components/product/product-image";
import { ProductSpecs } from "@/components/product/product-specs";

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="space-y-10">
      <nav aria-label="Breadcrumb" className="text-xs font-mono text-muted-foreground">
        <Link href="/" className="hover:text-brand">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/collections" className="hover:text-brand">Collections</Link>
        {product.collectionHandles[0] && (
          <>
            <span className="mx-2">/</span>
            <Link
              href={`/collections/${product.collectionHandles[0]}`}
              className="hover:text-brand"
            >
              {product.collectionHandles[0]}
            </Link>
          </>
        )}
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.sku}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <div className="aspect-[4/3] border border-border rounded-lg overflow-hidden bg-surface relative">
            <ProductImage
              product={product}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono bg-brand/10 text-brand px-2 py-0.5 rounded">
                {product.vendor}
              </span>
              <span className="text-xs font-mono text-muted-foreground">{product.productType}</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground leading-tight">{product.title}</h1>
            <p className="text-xs font-mono text-muted-foreground mt-2">SKU: {product.sku}</p>
          </div>

          <p className="text-sm text-foreground leading-relaxed">{product.shortDescription}</p>

          <dl className="space-y-2 border-t border-border pt-4">
            <div className="grid grid-cols-[minmax(0,120px)_minmax(0,1fr)] gap-3 items-baseline">
              <dt className="text-xs font-mono text-muted-foreground">Application</dt>
              <dd className="text-sm text-foreground">{product.application}</dd>
            </div>
            <div className="grid grid-cols-[minmax(0,120px)_minmax(0,1fr)] gap-3 items-baseline">
              <dt className="text-xs font-mono text-muted-foreground">Certification</dt>
              <dd className="text-sm text-foreground">{product.certifications}</dd>
            </div>
            <div className="grid grid-cols-[minmax(0,120px)_minmax(0,1fr)] gap-3 items-baseline">
              <dt className="text-xs font-mono text-muted-foreground">Lead time</dt>
              <dd className="text-sm text-foreground">{product.leadTime}</dd>
            </div>
          </dl>

          <ProductCta product={product} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <ProductSpecs specs={product.specs} />
        <ProductDatasheets datasheets={product.datasheets} sku={product.sku} />
      </div>

      <div className="prose prose-sm max-w-none text-foreground">
        <h2 className="text-base font-semibold">Description</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
      </div>
    </div>
  );
}
