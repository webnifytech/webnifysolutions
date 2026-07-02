// SEO Metadata for SEO Optimization Service Page
export const metadata = {
  title: "SEO Services in Delhi, Noida | Best SEO Company India | Webnify Solutions",
  description:
    "Webnify Solutions offers professional SEO services in Delhi, Noida & across India. Local SEO, technical SEO, on-page optimization & link building to rank on Google page 1. Free SEO audit!",
  keywords: [
    "SEO services Delhi",
    "SEO company Noida",
    "best SEO agency Delhi NCR",
    "local SEO Delhi",
    "local SEO Noida",
    "Google ranking services India",
    "technical SEO company Delhi",
    "on-page SEO services India",
    "link building services Delhi",
    "affordable SEO services India",
    "SEO expert Delhi",
    "rank on Google first page Delhi",
  ],
  alternates: { canonical: "https://www.webnifysolutions.com/services/seo-optimization" },
  openGraph: {
    title: "SEO Services in Delhi & Noida | Local SEO Experts | Webnify Solutions",
    description: "Professional SEO services in Delhi, Noida & India. Local SEO, technical SEO & link building. Rank on Google page 1 with Webnify Solutions.",
    url: "https://www.webnifysolutions.com/services/seo-optimization",
  },
};

export default function SeoLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "SEO Optimization",
            provider: { "@type": "Organization", name: "Webnify Solutions", url: "https://www.webnifysolutions.com" },
            areaServed: ["Delhi", "Noida", "Gurgaon", "Faridabad", "India"],
            description: "Professional SEO services including local SEO, technical SEO, and link building for businesses in Delhi, Noida, and across India.",
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
                name: "What is local SEO and how does it help my Delhi business?",
                acceptedAnswer: { "@type": "Answer", text: "Local SEO helps your business appear in Google searches for location-based queries like 'web development company in Delhi' or 'SEO agency near me', driving local customers to your business." },
              },
              {
                "@type": "Question",
                name: "How long does SEO take to show results?",
                acceptedAnswer: { "@type": "Answer", text: "SEO typically shows results in 3-6 months. However, local SEO for Delhi and Noida businesses can show improvements within 4-8 weeks with the right strategy." },
              },
              {
                "@type": "Question",
                name: "Do you provide SEO services for small businesses in Noida?",
                acceptedAnswer: { "@type": "Answer", text: "Yes! Webnify Solutions provides affordable SEO packages for small and medium businesses in Noida, Delhi, and across India." },
              },
              {
                "@type": "Question",
                name: "What SEO services do you offer?",
                acceptedAnswer: { "@type": "Answer", text: "We offer technical SEO, on-page SEO, off-page SEO, local SEO, Google Business Profile optimization, keyword research, competitor analysis, and monthly reporting." },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
