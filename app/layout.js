import { Geist } from "next/font/google";
import "./globals.css";
import "./visual-refresh.css";
import "./prelaunch.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CookieConsent from "@/components/cookie-consent";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const siteDescription = "I design, build and deploy ecommerce stores and service platforms for businesses across Nepal — from planning to deployment.";

export const metadata = { metadataBase: new URL("https://prayagnepal.vercel.app"), title: "Prayag Nepal — Web Developer, Kathmandu", description: siteDescription, keywords: ["web developer nepal", "freelance web developer kathmandu", "ecommerce nepal", "nextjs developer nepal"], authors: [{ name: "Prayag Nepal" }], creator: "Prayag Nepal", openGraph: { title: "Prayag Nepal — Web Developer, Kathmandu", description: siteDescription, type: "website", url: "https://prayagnepal.vercel.app", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Prayag Nepal — Web Developer, Kathmandu" }] }, twitter: { card: "summary_large_image", title: "Prayag Nepal — Web Developer, Kathmandu", description: siteDescription, images: ["/og-image.png"] } };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={geist.variable} data-scroll-behavior="smooth">
      <body suppressHydrationWarning>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
