import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://market.genesisconnectstudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Genesis Market | Offers, Purchases and Subscriptions",
    template: "%s | Genesis Market",
  },
  description:
    "Genesis Market is a dedicated commerce website for premium offers, web subscriptions, purchases and structured buying journeys.",
  keywords: [
    "Genesis Market",
    "web subscription",
    "digital offers",
    "online purchase",
    "premium ecommerce",
    "subscription website",
  ],
  openGraph: {
    type: "website",
    siteName: "Genesis Market",
    url: siteUrl,
    title: "Genesis Market | Offers, Purchases and Subscriptions",
    description:
      "A dedicated website built for purchases, subscriptions, clear pricing and focused SEO around digital offers and sales intent.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genesis Market | Offers, Purchases and Subscriptions",
    description:
      "A focused sales platform for subscriptions, digital offers and premium buying journeys.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
