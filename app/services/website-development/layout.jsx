// SEO Metadata for Website Development Service Page
export const metadata = {
  title: "Website Development Company in Delhi, Noida | Custom Web Design India",
  description:
    "Webnify Solutions — Professional website development company in Delhi & Noida. We build SEO-friendly, fast, mobile-first websites for businesses across India. Get a free quote today!",
  keywords: [
    "website development company Delhi",
    "web design company Noida",
    "custom website development India",
    "affordable website design Delhi NCR",
    "business website development Delhi",
    "e-commerce website development Noida",
    "responsive web design Delhi",
    "Next.js development company India",
    "React website development Delhi",
  ],
  alternates: { canonical: "https://www.webnifysolutions.com/services/website-development" },
  openGraph: {
    title: "Website Development Company in Delhi, Noida | Webnify Solutions",
    description: "Custom, SEO-friendly website development for businesses in Delhi, Noida & across India. Fast, mobile-first, high-converting websites.",
    url: "https://www.webnifysolutions.com/services/website-development",
  },
};

export default function WebDevLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Website Development",
            provider: { "@type": "Organization", name: "Webnify Solutions", url: "https://www.webnifysolutions.com" },
            areaServed: ["Delhi", "Noida", "Gurgaon", "India"],
            description: "Custom website development services in Delhi and Noida. SEO-friendly, responsive, and high-performance websites.",
            offers: { "@type": "Offer", priceCurrency: "INR", price: "8000", description: "Starting price for website development" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much does website development cost in Delhi?",
                acceptedAnswer: { "@type": "Answer", text: "Website development in Delhi starts from ₹8,000 for basic sites to ₹1,50,000+ for advanced web apps. Webnify Solutions offers affordable custom packages." },
              },
              {
                "@type": "Question",
                name: "How long does it take to build a website?",
                acceptedAnswer: { "@type": "Answer", text: "A standard business website takes 7-21 days. Complex e-commerce or web apps may take 30-60 days depending on requirements." },
              },
              {
                "@type": "Question",
                name: "Do you build SEO-friendly websites?",
                acceptedAnswer: { "@type": "Answer", text: "Yes! All websites built by Webnify Solutions are SEO-optimized with proper meta tags, schema markup, fast loading speed, and mobile-first design." },
              },
              {
                "@type": "Question",
                name: "Do you provide website development services in Noida?",
                acceptedAnswer: { "@type": "Answer", text: "Yes, we serve clients in Noida, Delhi, Gurgaon, Faridabad, and all across India with our website development services." },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
