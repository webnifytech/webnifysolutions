export const metadata = {
  title: "Contact Webnify Solutions | Web Development & SEO Agency Delhi, Noida",
  description:
    "Contact Webnify Solutions for web development, SEO & digital marketing services in Delhi, Noida & across India. Call +91 9151108805 or email webnifysolutions@gmail.com. Free consultation!",
  keywords: [
    "contact Webnify Solutions",
    "web development agency contact Delhi",
    "hire SEO company Noida",
    "digital marketing agency contact India",
    "get free website quote Delhi",
    "free SEO consultation Delhi",
  ],
  alternates: { canonical: "https://www.webnifysolutions.com/contact-us" },
  openGraph: {
    title: "Contact Us | Webnify Solutions — Delhi & Noida Digital Agency",
    description: "Get in touch with Webnify Solutions for web development, SEO, and digital marketing services. Free consultation available.",
    url: "https://www.webnifysolutions.com/contact-us",
  },
};

export default function ContactLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Webnify Solutions",
            url: "https://www.webnifysolutions.com/contact-us",
            mainEntity: {
              "@type": "Organization",
              name: "Webnify Solutions",
              telephone: "+91-9151108805",
              email: "webnifysolutions@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Delhi",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9151108805",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
            },
          }),
        }}
      />
      {children}
    </>
  );
}
