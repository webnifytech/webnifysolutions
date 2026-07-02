export const metadata = {
  title: "Digital Marketing & Web Development Services in Delhi, Noida, India | Webnify Solutions",
  description:
    "Complete digital services by Webnify Solutions — Website Development, SEO, Social Media Marketing, UI/UX Design & Brand Identity in Delhi, Noida & all over India. Get free consultation!",
  keywords: [
    "digital marketing services Delhi",
    "web development services Noida",
    "SEO services India",
    "social media marketing Delhi",
    "UI UX design services",
    "brand identity services Delhi",
    "complete digital agency India",
    "best digital marketing company Delhi NCR",
  ],
  alternates: { canonical: "https://www.webnifysolutions.com/services" },
  openGraph: {
    title: "Services | Webnify Solutions — Digital Marketing & Web Development Delhi",
    description: "Website development, SEO, social media marketing, UI/UX design & brand identity services in Delhi, Noida & across India.",
    url: "https://www.webnifysolutions.com/services",
  },
};

export default function ServicesLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What services does Webnify Solutions offer?",
                acceptedAnswer: { "@type": "Answer", text: "Webnify Solutions offers Website Development, SEO Optimization, Social Media Marketing, UI/UX Design, and Brand Identity services for businesses in Delhi, Noida, and across India." },
              },
              {
                "@type": "Question",
                name: "Do you serve clients outside Delhi and Noida?",
                acceptedAnswer: { "@type": "Answer", text: "Yes! While we are based in Delhi NCR, we serve clients across India — Mumbai, Bangalore, Chennai, Hyderabad, Pune, and more — with our remote digital services." },
              },
              {
                "@type": "Question",
                name: "How do I get started with Webnify Solutions?",
                acceptedAnswer: { "@type": "Answer", text: "Simply contact us through our Contact page, WhatsApp at +91 9151108805, or email us at webnifysolutions@gmail.com. We'll schedule a free consultation call." },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
