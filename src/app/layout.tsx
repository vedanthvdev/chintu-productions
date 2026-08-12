import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { site } from "@/content";
import { buildStructuredData } from "@/lib/structuredData";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: `${site.brand.name} · ${site.brand.tagline}`,
  description: site.brand.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.brand.name} · ${site.brand.tagline}`,
    description: site.brand.description,
    url: "/",
    siteName: site.brand.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.brand.name,
    description: site.brand.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-svh flex-col bg-canvas">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildStructuredData()),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-heading focus:px-5 focus:py-3 focus:text-sm focus:text-canvas"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
