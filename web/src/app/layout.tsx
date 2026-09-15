import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "WASL AI Marketplace",
    template: "%s — WASL AI Marketplace",
  },
  description: "Discover AI tools, agents and automations evaluated for WASL.",
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mx-auto min-h-[60vh] max-w-6xl px-4 sm:px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
