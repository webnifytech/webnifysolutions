export const metadata = {
  title: "About Webnify Solutions | Digital Marketing & Web Development Agency Delhi, Noida",
  description:
    "Learn about Webnify Solutions — a results-driven digital marketing & web development agency based in Delhi NCR. We help businesses across India grow online with SEO, web design & social media marketing.",
  keywords: [
    "about Webnify Solutions",
    "digital marketing agency Delhi",
    "web development company Noida",
    "IT company Delhi NCR",
    "digital growth agency India",
    "best web agency Delhi",
  ],
  alternates: { canonical: "https://www.webnifysolutions.com/about-us" },
  openGraph: {
    title: "About Us | Webnify Solutions — Digital Agency Delhi, Noida",
    description: "Webnify Solutions is a results-driven web development & digital marketing agency in Delhi NCR, serving clients across India.",
    url: "https://www.webnifysolutions.com/about-us",
  },
};

export default function AboutLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Webnify Solutions",
            description: "Webnify Solutions is a leading web development and digital marketing agency in Delhi, Noida, and across India.",
            url: "https://www.webnifysolutions.com/about-us",
            mainEntity: {
              "@type": "Organization",
              name: "Webnify Solutions",
              foundingDate: "2023",
              areaServed: ["Delhi", "Noida", "India"],
              numberOfEmployees: { "@type": "QuantitativeValue", value: "10" },
            },
          }),
        }}
      />
      {children}
    </>
  );
}
