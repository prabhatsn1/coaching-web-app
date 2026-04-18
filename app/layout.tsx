import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Apex Academy",
    default: "Apex Academy — Shaping Tomorrow's Leaders Today",
  },
  description:
    "Apex Academy is a premier coaching institute for JEE, NEET, CBSE Boards, and Olympiad preparation. Join 15,000+ successful students.",
  keywords: [
    "JEE coaching",
    "NEET coaching",
    "Apex Academy",
    "competitive exam preparation",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Apex Academy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
