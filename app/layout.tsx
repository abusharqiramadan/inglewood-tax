import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Inglewood Tax | Fast Tax Returns in Edmonton, Alberta',
  description: 'Get your maximum tax refund in days. Certified tax experts in Edmonton. CRA compliant, secure, and transparent pricing starting at $49/year.',
  keywords: 'tax services Edmonton, tax preparation Edmonton, CPA Edmonton, tax return preparation, Alberta taxes',
  openGraph: {
    title: 'Inglewood Tax | Fast Tax Returns in Edmonton, Alberta',
    description: 'Get your maximum tax refund in days with our certified Edmonton tax experts.',
    url: 'https://inglewoodtax.ca',
    type: 'website',
    images: [
      {
        url: 'https://inglewoodtax.ca/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Inglewood Tax - Tax Services Edmonton',
      },
    ],
  },
  canonical: 'https://inglewoodtax.ca',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Inglewood Tax | Fast Tax Returns in Edmonton, Alberta</title>
        <meta name="description" content="Get your maximum tax refund in days. Certified tax experts in Edmonton. CRA compliant, secure, and transparent pricing starting at $49/year." />
        <meta name="keywords" content="tax services Edmonton, tax preparation Edmonton, CPA Edmonton, tax return preparation, Alberta taxes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://inglewoodtax.ca" />

        <meta property="og:title" content="Inglewood Tax | Fast Tax Returns in Edmonton, Alberta" />
        <meta property="og:description" content="Get your maximum tax refund in days with our certified Edmonton tax experts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://inglewoodtax.ca" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}