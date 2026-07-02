import Hero from "@/components/Hero";

export const metadata = {
  title: "Web Development, SEO & Digital Marketing Agency in Delhi, Noida | Webnify Solutions",
  description:
    "Webnify Solutions — Top-rated web development, SEO, social media marketing & digital marketing agency in Delhi, Noida & all over India. Get a free consultation today! ✅ 50+ Projects Delivered.",
  keywords: [
    "web development company Delhi",
    "best website design company Noida",
    "SEO company Delhi",
    "digital marketing agency Delhi Noida",
    "social media marketing company India",
    "affordable web development India",
    "local SEO Delhi NCR",
    "brand identity design Delhi",
  ],
  alternates: { canonical: "https://www.webnifysolutions.com" },
  openGraph: {
    title: "Webnify Solutions | #1 Web Development & Digital Marketing Agency Delhi",
    description: "Top-rated digital agency in Delhi, Noida. Expert SEO, social media marketing, web development & brand identity across India.",
    url: "https://www.webnifysolutions.com",
  },
};

export default function Home() {
  return (
    <>
      {/* Home Page FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Which is the best web development company in Delhi?",
                acceptedAnswer: { "@type": "Answer", text: "Webnify Solutions is one of the top web development companies in Delhi and Noida, specializing in SEO-friendly, high-performance websites for businesses." },
              },
              {
                "@type": "Question",
                name: "How much does website development cost in Delhi?",
                acceptedAnswer: { "@type": "Answer", text: "Website development cost in Delhi starts from ₹8,000 to ₹1,50,000+ depending on complexity. Contact Webnify Solutions for a free custom quote." },
              },
              {
                "@type": "Question",
                name: "Do you provide SEO services in Noida and Delhi?",
                acceptedAnswer: { "@type": "Answer", text: "Yes! Webnify Solutions provides complete SEO services in Delhi, Noida, Gurgaon, and across India — including local SEO, on-page SEO, and link building." },
              },
              {
                "@type": "Question",
                name: "What digital marketing services do you offer?",
                acceptedAnswer: { "@type": "Answer", text: "We offer website development, SEO, social media marketing, Google Ads, UI/UX design, and brand identity design for businesses across India." },
              },
            ],
          }),
        }}
      />
      <Hero />
    </>
  );
}
