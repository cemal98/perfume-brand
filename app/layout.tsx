import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pugarlov - Luxury Perfume Brand",
  description: "Timeless fragrance for the modern connoisseur. Discover our curated selection of luxury perfumes.",
  keywords: ["perfume", "luxury", "fragrance", "pugarlov", "premium"],
  authors: [{ name: "Pugarlov" }],
  openGraph: {
    title: "Pugarlov - Luxury Perfume Brand",
    description: "Timeless fragrance for the modern connoisseur.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pugarlov - Luxury Perfume Brand",
    description: "Timeless fragrance for the modern connoisseur.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

