import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./visual-refresh.css";
import "./prelaunch.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CookieConsent from "@/components/cookie-consent";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const siteDescription = "I build ecommerce stores, service websites and digital platforms for businesses across Nepal. From planning to deployment, everything handled at an affordable price.";
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Prayag Nepal",
  url: "https://prayagnepal.com.np",
  jobTitle: "Freelance Web Developer",
  worksFor: {
    "@type": "Organization",
    name: "Self-employed"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "NP"
  },
  email: "nepalprayag880@gmail.com",
  sameAs: []
};
const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Prayag Nepal — Web Developer",
  url: "https://prayagnepal.com.np",
  telephone: "+9779863768725",
  email: "nepalprayag880@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressRegion: "Bagmati",
    addressCountry: "NP"
  },
  areaServed: "Nepal",
  priceRange: "$$",
  description: "Freelance web developer based in Kathmandu, Nepal. Building ecommerce websites, service platforms and digital presence for Nepali businesses at affordable rates.",
  knowsAbout: ["Web Development", "Ecommerce", "Next.js", "React", "Digital Presence", "Nepal"]
};

export const metadata = {
  metadataBase: new URL("https://prayagnepal.com.np"),
  title: "Prayag Nepal — Freelance Web Developer in Kathmandu, Nepal",
  description: siteDescription,
  keywords: ["web developer Nepal", "web designer Kathmandu", "ecommerce website Nepal", "cheap website Nepal", "freelance web developer Nepal", "ecommerce for small business Nepal", "website design Nepal", "Nepal web developer"],
  authors: [{ name: "Prayag Nepal" }],
  creator: "Prayag Nepal",
  robots: "index, follow",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Prayag Nepal — Freelance Web Developer in Kathmandu, Nepal",
    description: siteDescription,
    type: "website",
    url: "https://prayagnepal.com.np",
    siteName: "Prayag Nepal",
    images: [{ url: "https://prayagnepal.com.np/og-image.png", width: 1200, height: 630, alt: "Prayag Nepal — Freelance Web Developer in Kathmandu, Nepal" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayag Nepal — Freelance Web Developer in Kathmandu, Nepal",
    description: siteDescription,
    images: ["https://prayagnepal.com.np/og-image.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={geist.variable} data-scroll-behavior="smooth">
      <body suppressHydrationWarning>
        <Script id="person-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <Script id="professional-service-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
        <Script id="tawk-to-widget" strategy="afterInteractive">
          {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6abf53ba3925273442f486c8/1k3tlu4ul';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`}
        </Script>
      </body>
    </html>
  );
}
