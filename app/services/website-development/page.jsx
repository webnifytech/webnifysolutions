import Link from "next/link";
import PopupTrigger from "@/components/PopupTrigger";

export const metadata = {
  title: "Website Development Company in Delhi, Noida | Webnify Solutions",
  description: "Looking for the best website development company in Delhi or Noida? Webnify Solutions builds SEO-friendly, fast, responsive websites for businesses across India. Get a free quote today.",
  alternates: { canonical: "https://www.webnifysolutions.com/services/website-development" },
};

/* ── Icons ─────────────────────────────────────────── */
const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const allSchemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.webnifysolutions.com/#organization",
      "name": "Webnify Solutions",
      "url": "https://www.webnifysolutions.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.webnifysolutions.com/logo.png"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.webnifysolutions.com/#localbusiness",
      "name": "Webnify Solutions",
      "description": "Top Website Development Company in Delhi, Noida & India.",
      "telephone": "+91-9151108805",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "New Delhi",
        "addressLocality": "Delhi",
        "addressRegion": "DL",
        "addressCountry": "IN"
      },
      "areaServed": ["Delhi", "Noida", "Gurgaon", "India"]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.webnifysolutions.com/services/website-development/#webpage",
      "url": "https://www.webnifysolutions.com/services/website-development",
      "name": "Website Development Company in Delhi, Noida | Webnify Solutions",
      "isPartOf": { "@id": "https://www.webnifysolutions.com/#website" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.webnifysolutions.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.webnifysolutions.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Website Development", "item": "https://www.webnifysolutions.com/services/website-development" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which is the best web development company in Delhi?",
          "acceptedAnswer": { "@type": "Answer", "text": "Webnify Solutions is a leading website development company in Delhi offering custom website development services for startups and enterprises." }
        },
        {
          "@type": "Question",
          "name": "How much does website development cost in Delhi?",
          "acceptedAnswer": { "@type": "Answer", "text": "Website development cost in Delhi depends on requirements, starting from Basic to Enterprise packages. Our affordable website development Delhi ensures high ROI." }
        },
        {
          "@type": "Question",
          "name": "Do you provide SEO friendly website development?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, we specialize in SEO friendly website development with optimized Core Web Vitals to rank on Google's first page." }
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Website Development Services",
      "provider": { "@id": "https://www.webnifysolutions.com/#organization" },
      "areaServed": ["Delhi", "Noida", "India"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Website Development Packages",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Basic Corporate Website" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business E-Commerce Website" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Web Application" } }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "125"
      }
    }
  ]
};

export default function WebDevelopmentServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(allSchemas) }} />

      <div className="bg-[#080c18] text-slate-100 font-sans selection:bg-blue-500/30">

        {/* ── 1. HERO SECTION ─────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-blue-700/[0.05] blur-3xl rounded-full w-[900px] h-[500px] top-[-220px] left-1/2 -translate-x-1/2 pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-6 text-center">
            <span className="inline-flex items-center gap-2 text-[11px] tracking-[3px] uppercase text-blue-400 bg-blue-900/20 border border-blue-700/30 px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              #1 Web Development Agency
            </span>

            <h1 className="text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.1] mb-6 tracking-tight">
              Website Development Company in <br />
              <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">Delhi, Noida & India</span>
            </h1>

            <p className="max-w-3xl mx-auto text-slate-400 text-lg leading-relaxed mb-10">
              Webnify Solutions is a premier website development company in Delhi and Noida, building custom, high-speed, and SEO-friendly websites that drive traffic, leads, and sales for businesses across India.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <PopupTrigger className="px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 rounded-xl font-bold text-[15px] transition-all shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:-translate-y-0.5">
                Book Free Consultation
              </PopupTrigger>
            </div>
          </div>
        </section>

        {/* ── 2. COMPANY INTRODUCTION (SEO Pillar) ───────────────────────── */}
        <section className="max-w-5xl mx-auto px-6 py-20 border-t border-blue-900/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Professional Website Development Services</h2>
          <div className="prose prose-invert prose-lg max-w-none text-slate-400 leading-relaxed space-y-6">
            <p>
              Webnify Solutions is a leading <strong>website development company in Delhi</strong> offering custom website development services for startups, SMEs, and enterprises. Our experienced website developers in Delhi build SEO-friendly, responsive, and high-performance websites that help businesses grow online.
            </p>
            <p>
              Whether you need business website development, ecommerce website development, or a custom web application, our team delivers scalable solutions using React, Next.js, Node.js, and modern web technologies. We don't just write code; we architect digital experiences that perfectly align with your brand identity and business objectives.
            </p>
            <p>
              As the top <strong>website development company Noida</strong> and a trusted web development company India, we understand that your website is the foundation of your digital marketing strategy. A slow, poorly designed website will hurt your ability to rank on Google's first page. That's why our custom website design services prioritize Core Web Vitals, mobile-first indexing, and robust technical SEO from day one.
            </p>
            <p>
              Are you searching for an affordable website development Delhi agency? Look no further. From corporate website development to landing page design and complex CRM development, Webnify Solutions provides end-to-end website design services tailored for lead generation and maximum ROI.
            </p>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-6 pb-20 text-center">
             <PopupTrigger className="px-10 py-4 bg-blue-900/30 border border-blue-500/50 hover:bg-blue-800/40 rounded-xl font-bold text-lg transition-all text-blue-300">
                Talk to Experts
             </PopupTrigger>
        </section>

        {/* ── 3. WHY CHOOSE WEBNIFY ───────────────────────────────── */}
        <section className="bg-[#0b101d] py-20 border-y border-blue-900/20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Why Choose Webnify Solutions for Website Development?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { t: "100% Custom Development", d: "No cookie-cutter templates. Complete custom website design." },
                { t: "SEO Friendly", d: "Built with on-page SEO, optimized tags, and semantic structure." },
                { t: "Google Core Web Vitals", d: "Lightning-fast speed optimization passing all Google metrics." },
                { t: "Mobile First", d: "Flawless responsive website development for all mobile devices." },
                { t: "Fast Delivery", d: "Agile sprints ensuring on-time deployment without compromises." },
                { t: "Affordable Pricing", d: "Website development cost Delhi that fits startup and enterprise budgets." }
              ].map(w => (
                <div key={w.t} className="p-6 rounded-2xl bg-[#080c18] border border-blue-900/30 flex items-start gap-4">
                  <div className="mt-1 text-blue-400"><CheckIcon /></div>
                  <div>
                    <h3 className="font-bold text-white mb-2">{w.t}</h3>
                    <p className="text-sm text-slate-400">{w.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. TYPES OF WEBSITES ───────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Website Development Services We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Corporate Website Development",
              "Business Website Development",
              "Ecommerce Website Development",
              "Portfolio Website Development",
              "Real Estate Website",
              "School Website",
              "Doctor Website",
              "Hospital Website",
              "Law Firm Website",
              "Restaurant Website",
              "Travel Website",
              "Hotel Website",
              "NGO Website",
              "Landing Page Development",
              "Custom CRM Development"
            ].map(type => (
              <div key={type} className="p-6 rounded-2xl bg-blue-900/10 border border-blue-800/30 hover:bg-blue-800/20 transition-colors">
                <h3 className="font-bold text-blue-300 mb-2">{type}</h3>
                <p className="text-xs text-slate-400">Professional, high-performance {type.toLowerCase()} tailored for your specific industry needs.</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-6 pb-20 text-center">
             <PopupTrigger className="px-10 py-4 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 rounded-xl font-bold text-[15px] transition-all shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:-translate-y-0.5">
                Start Your Project
             </PopupTrigger>
        </section>

        {/* ── 5. PROCESS ───────────────────────────────── */}
        <section className="bg-[#0b101d] py-20 border-y border-blue-900/20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Website Development Process</h2>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
              {[
                "Discovery", "Planning", "UI Design", "Development", "Testing", "SEO", "Launch", "Support"
              ].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-4 lg:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-blue-900/50 border border-blue-500 flex items-center justify-center font-bold text-blue-300 text-lg">
                      {i + 1}
                    </div>
                    <span className="mt-3 font-semibold text-slate-300">{step}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="hidden lg:block w-12 h-px bg-blue-700" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. TECHNOLOGIES & 7. INDUSTRIES ───────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">Technologies We Use</h2>
            <p className="text-slate-400 mb-6">As a premium Next.js Development Company and React Development Company, we use the best modern stacks.</p>
            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "Node.js", "Laravel", "PHP", "WordPress", "Shopify", "WooCommerce", "MongoDB", "MySQL", "Tailwind CSS", "Google Cloud", "Vercel", "AWS"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-blue-900/20 border border-blue-800/50 rounded-full text-sm text-blue-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Industries We Serve</h2>
            <p className="text-slate-400 mb-6">We provide website design services across diverse sectors in India.</p>
            <div className="flex flex-wrap gap-3">
              {["Healthcare", "Education", "Real Estate", "Travel", "Finance", "Restaurants", "Law", "Manufacturing", "Startups", "NGOs", "Construction", "Hotels", "Jewellery"].map(ind => (
                <span key={ind} className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full text-sm text-slate-300">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. LOCAL SEO & 9. SEO FRIENDLY MATTER ────────────────────── */}
        <section className="bg-[#0b101d] py-20 border-y border-blue-900/20">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Website Development Company in Delhi NCR</h2>
              <div className="prose prose-invert text-slate-400 text-sm leading-relaxed">
                <p>
                  Local presence matters. We are the most trusted website agency Delhi NCR, extending our robust website development services across all major hubs. Whether you are searching for a website designer Delhi or a comprehensive digital partner, we've got you covered.
                </p>
                <p>
                  We actively serve clients in: <strong>Delhi, Noida, Greater Noida, Ghaziabad, Faridabad, Gurgaon, Rohini, Dwarka, Janakpuri, Laxmi Nagar, Nehru Place, Connaught Place, South Delhi, North Delhi, East Delhi, West Delhi, and Central Delhi</strong>. By understanding the local market dynamics, our Delhi website developers ensure your business website design deeply connects with your target demographic.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Why SEO Friendly Website Development is Important?</h2>
              <div className="prose prose-invert text-slate-400 text-sm leading-relaxed">
                <p>
                  Building a visually appealing site is only half the battle. If your target audience cannot find you, the website serves no purpose. That’s why <strong>SEO friendly website development</strong> is critical. Google wants educational content, semantic HTML, fast loading speeds (Core Web Vitals), and mobile-first architecture. 
                </p>
                <p>
                  A Google friendly website structured with proper H1, H2, and H3 tags ensures search engine crawlers can easily index your pages. Furthermore, integrating <Link href="/services/seo-optimization" className="text-blue-400 underline">SEO Services</Link> during the development phase reduces the website development cost Delhi in the long run because you avoid expensive post-launch website redesign and website speed optimization fixes. It turns your site into a permanent lead generation website.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-6 py-14 text-center">
             <PopupTrigger className="px-10 py-4 bg-blue-900/30 border border-blue-500/50 hover:bg-blue-800/40 rounded-xl font-bold text-lg transition-all text-blue-300">
                Request Free Quote
             </PopupTrigger>
        </section>

        {/* ── 10. PRICING PACKAGES ───────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Website Development Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "Basic", desc: "For small startups", price: "Contact Us" },
              { name: "Business", desc: "For growing companies", price: "Contact Us" },
              { name: "Professional", desc: "Advanced features & SEO", price: "Contact Us", popular: true },
              { name: "Enterprise", desc: "Custom web applications", price: "Contact Us" }
            ].map(pkg => (
              <div key={pkg.name} className={`p-8 rounded-2xl border ${pkg.popular ? 'border-blue-500 bg-blue-900/20' : 'border-slate-800 bg-slate-900/50'} text-center relative`}>
                {pkg.popular && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>}
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-xs text-slate-400 mb-6">{pkg.desc}</p>
                <div className="text-2xl font-black text-blue-400 mb-8">{pkg.price}</div>
                <PopupTrigger className={`w-full py-3 rounded-lg font-bold text-sm ${pkg.popular ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'}`}>
                  Choose Plan
                </PopupTrigger>
              </div>
            ))}
          </div>
        </section>

        {/* ── 11. TESTIMONIALS & 12. CASE STUDIES ───────────────── */}
        <section className="bg-[#0b101d] py-20 border-y border-blue-900/20">
          <div className="max-w-6xl mx-auto px-6 mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Gajendra Singh", role: "Founder, Koop India", review: "Webnify transformed our online presence. Their custom website development Noida team delivered a flawless platform." },
                { name: "Neha Sharma", role: "Marketing Manager", review: "The best website development company Delhi! Our SEO friendly website ranks perfectly on Google." },
                { name: "Anubhav", role: "Creator, AI Expense Tracker", review: "Outstanding React development company. The web application is lightning fast and highly responsive." }
              ].map(t => (
                <div key={t.name} className="p-6 rounded-2xl bg-[#080c18] border border-blue-900/30">
                  <div className="flex text-orange-400 mb-4">★★★★★</div>
                  <p className="text-sm text-slate-400 mb-6 italic">"{t.review}"</p>
                  <div className="font-bold text-blue-300">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Recent Website Development Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Koop India", tag: "Business Consulting", url: "https://www.koopindia.com" },
                { title: "Rishikesh Herbs Natural", tag: "E-Commerce Development", url: "https://rishikeshherbsnatural.com" },
                { title: "AI Expense Tracker", tag: "Custom Web Application", url: "https://expensetrackeranu.vercel.app/" }
              ].map(p => (
                <a key={p.title} href={p.url} target="_blank" rel="noreferrer" className="block p-6 rounded-2xl bg-[#080c18] border border-blue-900/30 hover:border-blue-500 transition-colors">
                  <div className="text-xs font-bold text-blue-500 mb-2">{p.tag}</div>
                  <h3 className="font-bold text-white text-lg">{p.title}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 13. INTERNAL LINKING & FOOTER CTA ───────────────────── */}
        <section className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-2xl font-bold mb-6">Explore More Digital Marketing Services</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link href="/services/seo-optimization" className="text-slate-400 hover:text-blue-400 underline">SEO Service</Link>
            <Link href="/services/social-media-marketing" className="text-slate-400 hover:text-blue-400 underline">Social Media Marketing</Link>
            <Link href="/services/ui-ux-design" className="text-slate-400 hover:text-blue-400 underline">Website UI UX Design</Link>
            <span className="text-slate-400 cursor-not-allowed">Google Ads</span>
            <span className="text-slate-400 cursor-not-allowed">Digital Marketing</span>
            <span className="text-slate-400 cursor-not-allowed">Graphic Design</span>
            <span className="text-slate-400 cursor-not-allowed">Logo Design</span>
            <span className="text-slate-400 cursor-not-allowed">App Development</span>
            <span className="text-slate-400 cursor-not-allowed">Software Development</span>
          </div>

          <div className="bg-gradient-to-b from-blue-900/20 to-transparent border border-blue-900/30 rounded-3xl p-12 md:p-20">
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold mb-6 text-white">
              Ready to Upgrade Your Digital Presence?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
              Partner with the top website development company in Delhi and India. Get a custom, fast, and SEO-optimized website today.
            </p>
            <PopupTrigger className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-lg transition-all shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:-translate-y-1">
              Start Your Project Today
            </PopupTrigger>
          </div>
        </section>

      </div>
    </>
  );
}
