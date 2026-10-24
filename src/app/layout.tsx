import type { Metadata } from "next";
import { ViewTransition } from "react";
import { Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/data/site";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TiltEffect } from "@/components/TiltEffect";
import { WinToast } from "@/components/bug-hunt/WinToast";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  // Optical size: large headings switch to the tighter display cut, as in the design.
  axes: ["opsz"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Web developer & QA engineer`,
    template: `%s · ${site.name}`,
  },
  description:
    "I build websites that look good and work even better — WordPress & WooCommerce, React sites and apps, and QA & test automation.",
  openGraph: {
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${plexMono.variable}`}>
      <body>
        <Header />
        {/* Crossfades page content on navigation (browsers without View Transitions just switch) */}
        <ViewTransition>{children}</ViewTransition>
        <Footer />
        <WinToast />
        <TiltEffect />
      </body>
    </html>
  );
}
