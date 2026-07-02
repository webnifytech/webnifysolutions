import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PopupForm from "@/components/PopupForm";
import FloatingContact from "@/components/FloatingContact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.webnifysolutions.com"),
  title: {
    default: "Webnify Solutions | Web Development, SEO & Digital Marketing Agency in Delhi, Noida",
    template: "%s | Webnify Solutions",
  },
  description:
    "Webnify Solutions is a top digital marketing & web development agency in Delhi, Noida & across India. We offer SEO, social media marketing, website development, UI/UX design & brand identity services. Get a free consultation today!",
  keywords: [
    "web development company Delhi",
    "web development company Noida",
    "website design company Delhi NCR",
    "SEO services Delhi",
    "SEO company Noida",
    "digital marketing agency Delhi",
    "digital marketing company Noida",
    "social media marketing Delhi",
    "social media marketing agency India",
    "brand identity design Delhi",
    "UI UX design company Delhi",
    "best web development company India",
    "affordable website development Delhi",
    "local SEO Delhi",
    "local SEO Noida",
    "Google ranking services India",
    "website development company India",
    "digital agency Delhi NCR",
    "Webnify Solutions",
  ],
  authors: [{ name: "Webnify Solutions", url: "https://www.webnifysolutions.com" }],
  creator: "Webnify Solutions",
  publisher: "Webnify Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.webnifysolutions.com",
    siteName: "Webnify Solutions",
    title: "Webnify Solutions | Web Development, SEO & Digital Marketing Agency in Delhi, Noida",
    description:
      "Top digital marketing & web development agency in Delhi & Noida. Expert SEO, social media marketing, website design, and brand identity services across India.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Webnify Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webnify Solutions | Web Development & Digital Marketing Delhi",
    description: "Top web development and digital marketing agency in Delhi, Noida & across India.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.webnifysolutions.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Webnify Solutions",
              url: "https://www.webnifysolutions.com",
              logo: "https://www.webnifysolutions.com/logo.png",
              description:
                "Webnify Solutions is a leading web development and digital marketing agency based in Delhi and Noida, India.",
              telephone: "+91-9151108805",
              email: "webnifysolutions@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Delhi",
                addressRegion: "Delhi",
                addressCountry: "IN",
              },
              areaServed: ["Delhi", "Noida", "Gurgaon", "Faridabad", "India"],
              sameAs: [
                "https://www.instagram.com/webnifysolutions",
                "https://www.facebook.com/webnifysolutions",
                "https://www.linkedin.com/company/webnifysolutions",
              ],
              serviceType: [
                "Web Development",
                "SEO Services",
                "Digital Marketing",
                "Social Media Marketing",
                "UI/UX Design",
                "Brand Identity",
              ],
            }),
          }}
        />
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Webnify Solutions",
              image: "https://www.webnifysolutions.com/logo.png",
              "@id": "https://www.webnifysolutions.com",
              url: "https://www.webnifysolutions.com",
              telephone: "+91-9151108805",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Delhi NCR",
                addressLocality: "Delhi",
                postalCode: "110001",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 28.6139,
                longitude: 77.2090,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "19:00",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Digital Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Optimization" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Marketing" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Identity" } },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
        <PopupForm />
        <FloatingContact />
      </body>
    </html>
  );
}
