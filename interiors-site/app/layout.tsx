import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "PM Interiors",
  description: "Premium interior design studio for residential and commercial spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-bg" aria-hidden="true" />
        <SiteHeader />

        <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">{children}</main>

        <footer className="footer-shell mx-auto mb-10 mt-14 w-full max-w-7xl px-6 py-10 sm:px-8">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="footer-title">PM Interiors</p>
              <p className="mt-3 max-w-xl text-sm text-[var(--muted)]">
                Bespoke interior design, material curation, and turnkey execution for high-comfort living and hospitality spaces.
              </p>
            </div>
            <div className="flex items-center gap-3 md:justify-end">
              <Link href="/projects" className="cta cta-secondary">Portfolio</Link>
              <Link href="/contact" className="cta cta-primary">Start Project</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
