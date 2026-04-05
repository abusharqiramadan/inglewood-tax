import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ─── Structured Data (JSON-LD) ───────────────────────────────────────────────
// Tells Google exactly what your business is, where it is, and what it offers.
// This is what powers Knowledge Panels, Maps rich results, and local packs.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Inglewood Tax",
  "description": "Professional tax preparation services in Edmonton, Alberta. Fast EFILE submissions, maximum refunds, transparent flat-rate pricing. Serving individuals, self-employed, and small businesses.",
  "url": "https://inglewoodtax.ca",
  "logo": "https://inglewoodtax.ca/logo.png",
  "image": "https://inglewoodtax.ca/og-image.jpg",
  "email": "inglewoodtax@gmail.com",
  "telephone": "+1-780-616-9824",
  "priceRange": "$$",
  "currenciesAccepted": "CAD",
  "paymentAccepted": "Cash, Credit Card, E-Transfer",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Edmonton",
    "addressRegion": "AB",
    "addressCountry": "CA",
    "postalCode": "T5H 0A1"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "53.5461",
    "longitude": "-113.4938"
  },
  "areaServed": [
    { "@type": "City", "name": "Edmonton" },
    { "@type": "City", "name": "St. Albert" },
    { "@type": "City", "name": "Sherwood Park" },
    { "@type": "City", "name": "Leduc" },
    { "@type": "City", "name": "Spruce Grove" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "21:00"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Tax Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Basic Tax Return",
          "description": "Simple T4 income and standard deductions. Includes EFILE submission."
        },
        "price": "49",
        "priceCurrency": "CAD"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Full Tax Return",
          "description": "Multiple income sources, investment income, rental properties, and full deduction review."
        },
        "price": "199",
        "priceCurrency": "CAD"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Tax Return",
          "description": "Self-employed and small business returns with GST/HST guidance and year-round support."
        },
        "price": "399",
        "priceCurrency": "CAD"
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/inglewoodtax",
    "https://www.instagram.com/inglewoodtax"
  ]
};

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // metadataBase is critical — without it, relative image URLs break
  metadataBase: new URL("https://inglewoodtax.ca"),

  // title.template automatically appends your brand to every page's title
  // e.g. the Pricing page becomes: "Pricing | Inglewood Tax"
  title: {
    default: "Inglewood Tax | Fast Tax Returns in Edmonton, Alberta",
    template: "%s | Inglewood Tax",
  },

  description:
    "Professional tax preparation in Edmonton, AB. Get your maximum refund filed within 48 hours. Flat-rate pricing from $49 — no hidden fees, ever. CRA compliant and EFILE certified.",

  keywords: [
    "tax preparation Edmonton",
    "tax return Edmonton",
    "Edmonton tax services",
    "CRA EFILE Edmonton",
    "tax preparer Edmonton Alberta",
    "self employed tax return Edmonton",
    "small business tax Edmonton",
    "income tax Edmonton",
    "Alberta tax preparation",
    "tax refund Edmonton",
  ],

  authors: [{ name: "Inglewood Tax", url: "https://inglewoodtax.ca" }],
  creator: "Inglewood Tax",
  publisher: "Inglewood Tax",

  // Canonical URL — prevents duplicate content penalties
  alternates: {
    canonical: "https://inglewoodtax.ca",
  },

  // Robots — tell Google to fully index and follow all links
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Open Graph — controls previews on Facebook, LinkedIn, iMessage, Slack etc.
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://inglewoodtax.ca",
    siteName: "Inglewood Tax",
    title: "Inglewood Tax | Fast Tax Returns in Edmonton, Alberta",
    description:
      "Professional tax preparation in Edmonton, AB. Maximum refund, filed within 48 hours. From $49. No hidden fees.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Inglewood Tax — Professional Tax Services in Edmonton, Alberta",
      },
    ],
  },

  // Twitter/X card — controls how your link looks when shared on X
  twitter: {
    card: "summary_large_image",
    title: "Inglewood Tax | Fast Tax Returns in Edmonton, Alberta",
    description:
      "Professional tax preparation in Edmonton, AB. Maximum refund, filed within 48 hours. From $49.",
    images: ["/og-image.jpg"],
  },

  // Favicon and app icons — Next.js picks these up automatically
  // if you place them in /app as icon.png, apple-icon.png etc.
  // but you can also declare them explicitly here:
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  // Prevents phone number auto-detection formatting issues on mobile
  formatDetection: {
    telephone: false,
  },
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* JSON-LD Structured Data injected server-side */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}