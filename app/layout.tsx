/**
 * Root Layout Component
 *
 * This is the root layout file for the Next.js App Router. It wraps all pages
 * and defines global configurations including:
 * - SEO metadata (title, description, Open Graph, Twitter Cards)
 * - Google Fonts optimization using next/font
 * - Global styles via globals.css
 * - Common layout structure (Header, Footer)
 */

import type { Metadata } from "next";
import "./globals.css";

// Google Fonts Configuration
// next/font automatically optimizes fonts by self-hosting them, reducing layout shift
// and improving performance. Fonts are converted to CSS variables for easy use.
import { Cormorant_Upright, Open_Sans } from "next/font/google";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Primary font: Cormorant Upright (elegant serif for headings)
// Used for titles and headings throughout the site
const cormorant_upright = Cormorant_Upright({
  subsets: ["latin"], // Only load Latin character subset for performance
  weight: ["300", "400", "500", "600", "700"], // Available font weights
  variable: "--font-cormorant_upright", // CSS variable name for Tailwind
});

// Secondary font: Open Sans (clean sans-serif for body text)
// Used for body text, descriptions, and UI elements
const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // Extended weight range
  variable: "--font-open_sans", // CSS variable name for Tailwind
});

/**
 * SEO Metadata Configuration
 *
 * Comprehensive metadata setup for search engine optimization (SEO) and
 * social media sharing. This includes:
 * - Page titles with template support for dynamic pages
 * - Meta descriptions for search results
 * - Open Graph tags for Facebook/LinkedIn sharing
 * - Twitter Card tags for Twitter sharing
 * - Keywords for SEO
 * - Author information
 * - Robots directives for search engine crawling
 */
export const metadata: Metadata = {
  // Title configuration with template support
  // Template allows child pages to set their own title with site name appended
  title: {
    default: "Sciascia Caffè 1919 | Premium Coffee Shop Experience",
    template: "%s | Sciascia Caffè 1919", // %s will be replaced with page-specific title
  },
  description:
    "Experience the tradition of exceptional coffee at Sciascia Caffè 1919. We craft every cup with warmth and care, offering rich espresso blends, classic drip coffee, smooth cold brews, and flavorful latte varieties.",
  keywords: [
    "coffee shop",
    "coffee",
    "cafe",
    "Sciascia Caffè",
    "espresso",
    "latte",
    "cappuccino",
    "cold brew",
    "coffee bar",
    "premium coffee",
    "artisan coffee",
    "specialty coffee",
    "coffee roaster",
    "coffee experience",
    "sustainable coffee",
    "coffee menu",
    "coffee house",
    "coffee culture",
    "barista",
    "coffee beans",
  ],
  authors: [
    {
      name: "Yunus Emre Gurlek",
    },
  ],
  creator: "Yunus Emre Gurlek",
  publisher: "Yunus Emre Gurlek",
  metadataBase: new URL("https://coffeeshop-ui-1.vercel.app"),
  alternates: {
    canonical: "/",
  },
  // Open Graph metadata for social media sharing (Facebook, LinkedIn, etc.)
  // These tags control how the site appears when shared on social platforms
  openGraph: {
    type: "website",
    locale: "en_US", // Language and region
    url: "https://coffeeshop-ui-1.vercel.app", // Production URL (see README Live Demo)
    siteName: "Sciascia Caffè 1919",
    title: "Sciascia Caffè 1919 | Premium Coffee Shop Experience",
    description:
      "Experience the tradition of exceptional coffee at Sciascia Caffè 1919. We craft every cup with warmth and care.",
    images: [
      {
        url: "/assets/logo.svg", // Social sharing image (ideal: 1200x630px)
        width: 1200,
        height: 630,
        alt: "Sciascia Caffè 1919 Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sciascia Caffè 1919 | Premium Coffee Shop Experience",
    description:
      "Experience the tradition of exceptional coffee at Sciascia Caffè 1919. We craft every cup with warmth and care.",
    images: ["/assets/logo.svg"],
    creator: "@yunusemregurlek",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [{ url: "/favicon.ico", sizes: "180x180", type: "image/x-icon" }],
  },
  // Robots meta tags - Controls search engine crawling and indexing
  robots: {
    index: true, // Allow search engines to index this page
    follow: true, // Allow search engines to follow links on this page
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1, // Unlimited video preview length
      "max-image-preview": "large", // Large image previews in search results
      "max-snippet": -1, // Unlimited text snippet length
    },
  },
  verification: {
    // Add your verification codes here if needed
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "Food & Beverage",
  applicationName: "Sciascia Caffè 1919",
  // Contact for site/author (SEO and discovery)
  other: {
    contact: "Yunus Emre Gurlek",
  },
};

/**
 * RootLayout Component
 *
 * The root layout component that wraps all pages in the application.
 * This component:
 * - Provides the HTML structure (<html>, <body>)
 * - Applies font CSS variables to the body element for global font usage
 * - Renders the Header and Footer components that appear on every page
 * - Renders page-specific content via the {children} prop
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Page content from individual route files
}>) {
  return (
    <html lang="en">
      {/* Font variables are applied to body so they're available throughout the app */}
      <body className={`${cormorant_upright.variable} ${open_sans.variable}`}>
        <Header />
        {/* {children} renders the page component (e.g., page.tsx content) */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
