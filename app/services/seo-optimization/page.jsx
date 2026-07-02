"use client";
import { useState } from "react";
import Link from "next/link";
import PopupTrigger from "@/components/PopupTrigger";

/* ── Icons ─────────────────────────────────────────── */
const SearchIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <path d="M11 8v3l2 2" />
  </svg>
);
const TrendIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);
const MapIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ── FAQ Component ───────────────────────────────────────── */
function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden mb-4"
      style={{
        borderColor: open ? "#3b82f6" : "rgba(59,130,246,0.2)",
        background: open ? "rgba(37,99,235,0.1)" : "rgba(13,20,36,0.8)",
      }}
    >
      <div className="flex items-center justify-between p-6">
        <h3 className="font-semibold text-slate-200 pr-4">{faq.q}</h3>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{
            background: open ? "#3b82f6" : "rgba(59,130,246,0.1)",
            color: open ? "white" : "#60a5fa",
          }}
        >
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </div>
      {open && (
        <div className="px-6 pb-6">
          <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

const faqs = [
  { q: "How long does it take for SEO services to show results?", a: "Typically, you can start seeing improvements in rankings within 3 to 6 months. SEO is a long-term strategy, and to rank on Google's first page consistently requires ongoing effort." },
  { q: "Do you provide Local SEO in Delhi and Noida?", a: "Yes, we specialize in local SEO in Delhi Noida. We optimize your Google My Business profile and build local citations to ensure you dominate regional searches." },
  { q: "What is AI Search Optimization?", a: "AI Search Optimization ensures your brand appears in AI search lists like Google AI Overviews and ChatGPT. We structure your content so AI models cite your business as a trusted source." },
  { q: "Do you guarantee a #1 ranking on Google?", a: "No ethical SEO agency can guarantee a #1 ranking due to Google's dynamic algorithm. However, we have a proven track record of helping businesses all over India reach the first page." },
  { q: "What does an SEO audit include?", a: "Our comprehensive audit covers technical SEO, site speed, core web vitals, backlink profile analysis, keyword gap analysis, and content quality." },
  { q: "How is SEO different from Social Media Marketing?", a: "SEO focuses on capturing intent-driven traffic from search engines, whereas social media marketing focuses on building brand identity and engaging audiences on platforms like Instagram and LinkedIn." },
  { q: "Are backlinks still important for SEO?", a: "Yes. High-quality, relevant backlinks are a crucial ranking factor. We focus on ethical, white-hat link-building strategies to build your site's authority." },
  { q: "Will I get monthly SEO reports?", a: "Absolutely. We provide transparent, detailed monthly reports showing traffic growth, keyword rankings, and the work completed during the month." },
  { q: "Can you optimize my existing website development?", a: "Yes, our SEO services seamlessly integrate with your existing website development. We fix technical errors and optimize existing pages without needing a full rebuild." }
];

export default function SeoOptimizationPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="bg-[#080c18] text-slate-100 font-sans selection:bg-blue-500/30">

        {/* ── HERO ─────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-28 pb-20">
          <div className="absolute inset-0 bg-blue-700/[0.05] blur-3xl rounded-full w-[900px] h-[500px] top-[-220px] left-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-6 text-center">
            <span className="inline-flex items-center gap-2 text-[11px] tracking-[3px] uppercase text-blue-400 bg-blue-900/20 border border-blue-700/30 px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              SEO Services
            </span>

            <h1 className="text-[clamp(32px,5.5vw,64px)] font-extrabold leading-[1.1] mb-6 tracking-tight">
              Dominate Search & <br />
              <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">Rank on Google First Page</span>
            </h1>

            <p className="max-w-3xl mx-auto text-slate-400 text-lg leading-relaxed mb-10">
              We deploy advanced SEO services and AI search optimization to catapult your visibility. From local SEO in Delhi and Noida to dominating markets all over India, we secure the top spots that drive revenue.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <PopupTrigger className="px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 rounded-xl font-bold text-[15px] transition-all shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:-translate-y-0.5">
                Get a Free SEO Audit
              </PopupTrigger>
            </div>
          </div>
        </section>

        {/* ── CORE SERVICES ─────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-20 border-t border-blue-900/20">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">Comprehensive SEO Strategies</h2>
          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-16">
            Our multi-dimensional approach ensures you don't just appear in searches, but you dominate them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <SearchIcon />,
                title: "Technical & On-Page SEO",
                desc: "We optimize your website's architecture and content, targeting high-intent keywords to secure your spot on Google's first page.",
                points: ["Keyword Optimization", "Site Speed Fixes", "Schema Markup"]
              },
              {
                icon: <TrendIcon />,
                title: "AI Search Optimization",
                desc: "Future-proof your brand. We optimize your content to appear in AI search lists, ChatGPT, and Google's Generative AI overviews.",
                points: ["Entity Optimization", "Authority Building", "Semantic SEO"]
              },
              {
                icon: <MapIcon />,
                title: "Local SEO Mastery",
                desc: "Capture your local market. We provide the best local SEO in Delhi, Noida, and other major hubs to drive foot traffic and local leads.",
                points: ["Google My Business", "Local Citations", "Review Management"]
              }
            ].map((s, i) => (
              <div key={i} className="group rounded-3xl p-8 bg-[#0d1424]/90 border border-blue-900/30 hover:border-blue-700/50 hover:bg-blue-900/10 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-400 flex items-center justify-center mb-6 border border-blue-600/20 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-[15px] text-slate-400 mb-6 leading-relaxed">{s.desc}</p>
                <ul className="space-y-3">
                  {s.points.map(p => (
                    <li key={p} className="flex items-center gap-3 text-[14px] text-slate-300">
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-900/30 border border-blue-700/30 text-blue-400 flex-shrink-0">
                        <CheckIcon />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-bold tracking-[3px] uppercase px-4 py-1.5 rounded-full mb-5 text-blue-400 bg-blue-900/20 border border-blue-700/30">
              FAQ
            </span>
            <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold text-white mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400">
              Common questions about our SEO process and timelines.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} faq={faq} />
            ))}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 pb-24 text-center mt-12">
          <div className="bg-gradient-to-b from-blue-900/20 to-transparent border border-blue-900/30 rounded-3xl p-12 md:p-20">
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold mb-6 text-white">
              Ready to Outrank Your Competitors?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
              Partner with the top SEO agency delivering measurable digital marketing success all over India.
            </p>
            <PopupTrigger className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-lg transition-all shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:-translate-y-1">
              Start Your SEO Journey
            </PopupTrigger>
          </div>
        </section>

      </div>
    </>
  );
}
