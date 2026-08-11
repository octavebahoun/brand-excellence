import type { Metadata } from "next";
import { Fira_Code, Outfit } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeScript } from "@/components/layout/ThemeScript";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${outfit.variable} ${firaCode.variable}`}>
      <head>
        <ThemeScript />
      </head>
      <body className="bg-bg-light font-sans text-text-dark antialiased dark:bg-bg-dark dark:text-text-light">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
