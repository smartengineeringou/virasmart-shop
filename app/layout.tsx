import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { QuotationProvider } from "@/lib/quotation/quotation-context";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://shop.virasmart.eu"),
  title: {
    default: "Virasmart — B2B Engineering Catalogue",
    template: "%s | Virasmart B2B",
  },
  description:
    "B2B engineering catalogue for KNX, tablet mounting, and industrial thermal equipment. Ekinex, Displine and Thermofin — priced per project.",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <QuotationProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </QuotationProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
