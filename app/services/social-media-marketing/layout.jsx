// SEO Metadata for Social Media Marketing Service Page
export const metadata = {
  title: "Social Media Marketing Agency Delhi, Noida | SMM Services India | Webnify Solutions",
  description:
    "Webnify Solutions — Top social media marketing agency in Delhi & Noida. Expert Instagram, Facebook & LinkedIn marketing, paid ads & lead generation for businesses across India. Free consultation!",
  keywords: [
    "social media marketing agency Delhi",
    "social media marketing company Noida",
    "Instagram marketing Delhi",
    "Facebook ads agency Delhi NCR",
    "LinkedIn marketing services India",
    "paid social media ads Delhi",
    "social media management Delhi",
    "SMM services Noida",
    "lead generation social media Delhi",
    "social media marketing India",
  ],
  alternates: { canonical: "https://www.webnifysolutions.com/services/social-media-marketing" },
  openGraph: {
    title: "Social Media Marketing Agency Delhi & Noida | Webnify Solutions",
    description: "Expert social media marketing services in Delhi, Noida & India. Instagram, Facebook, LinkedIn ads and content strategy to grow your brand.",
    url: "https://www.webnifysolutions.com/services/social-media-marketing",
  },
};

export default function SmmLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Social Media Marketing",
            provider: { "@type": "Organization", name: "Webnify Solutions", url: "https://www.webnifysolutions.com" },
            areaServed: ["Delhi", "Noida", "Gurgaon", "India"],
            description: "Social media marketing services including Instagram, Facebook, and LinkedIn marketing for businesses in Delhi, Noida, and across India.",
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
                name: "Which social media platforms do you manage for Delhi businesses?",
                acceptedAnswer: { "@type": "Answer", text: "We manage Instagram, Facebook, LinkedIn, Twitter/X, and YouTube for businesses in Delhi, Noida, and across India." },
              },
              {
                "@type": "Question",
                name: "How much does social media marketing cost in India?",
                acceptedAnswer: { "@type": "Answer", text: "Social media marketing packages in India start from ₹5,000/month for basic management. Custom packages are available based on your business goals." },
              },
              {
                "@type": "Question",
                name: "Can social media marketing generate leads for my business?",
                acceptedAnswer: { "@type": "Answer", text: "Yes! Our paid social media ad campaigns and organic content strategies are designed to generate quality leads and increase sales for businesses in Delhi and Noida." },
              },
              {
                "@type": "Question",
                name: "Do you create content for social media?",
                acceptedAnswer: { "@type": "Answer", text: "Yes, Webnify Solutions creates professional graphics, videos, reels, and captions for all social media platforms as part of our SMM packages." },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
