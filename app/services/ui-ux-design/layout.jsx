// SEO Metadata for UI/UX Design Service Page
export const metadata = {
  title: "UI/UX Design Company in Delhi, Noida | Best App & Web Design India | Webnify Solutions",
  description:
    "Webnify Solutions — Professional UI/UX design company in Delhi & Noida. We create beautiful, user-centric app and web designs that boost conversions. Wireframing, prototyping & design systems. Free consultation!",
  keywords: [
    "UI UX design company Delhi",
    "UX design agency Noida",
    "app design company Delhi NCR",
    "web design company Delhi",
    "user interface design India",
    "best UI UX designers Delhi",
    "mobile app UI design Noida",
    "wireframing services Delhi",
    "prototyping agency India",
    "design system company Delhi",
  ],
  alternates: { canonical: "https://www.webnifysolutions.com/services/ui-ux-design" },
  openGraph: {
    title: "UI/UX Design Company in Delhi & Noida | Webnify Solutions",
    description: "User-centric UI/UX design services in Delhi, Noida & India. Beautiful, conversion-focused app & web design from Webnify Solutions.",
    url: "https://www.webnifysolutions.com/services/ui-ux-design",
  },
};

export default function UiUxLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "UI/UX Design",
            provider: { "@type": "Organization", name: "Webnify Solutions", url: "https://www.webnifysolutions.com" },
            areaServed: ["Delhi", "Noida", "India"],
            description: "Professional UI/UX design services for websites and mobile apps in Delhi, Noida, and across India.",
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
                name: "What is UI/UX design and why is it important?",
                acceptedAnswer: { "@type": "Answer", text: "UI (User Interface) design focuses on visual elements like buttons, colors, and layout. UX (User Experience) design focuses on how easy and enjoyable it is to use a product. Together, they help increase user engagement and conversions." },
              },
              {
                "@type": "Question",
                name: "Do you provide UI/UX design services in Noida?",
                acceptedAnswer: { "@type": "Answer", text: "Yes, Webnify Solutions provides professional UI/UX design services in Noida, Delhi, and across India for websites, mobile apps, and SaaS products." },
              },
              {
                "@type": "Question",
                name: "How much does UI/UX design cost in Delhi?",
                acceptedAnswer: { "@type": "Answer", text: "UI/UX design costs in Delhi start from ₹10,000 for simple pages to ₹1,00,000+ for complete app design projects. Contact us for a custom quote." },
              },
              {
                "@type": "Question",
                name: "Do you create design systems?",
                acceptedAnswer: { "@type": "Answer", text: "Yes! We create scalable design systems including component libraries, style guides, and brand guidelines for businesses across India." },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
