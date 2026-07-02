"use client";
import { useState } from "react";
import Link from "next/link";
import PopupTrigger from "@/components/PopupTrigger";

/* ── Icons ─────────────────────────────────────────── */
const ShareIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);
const MegaphoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
  </svg>
);
const ChartIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
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
  { q: "Which social media platforms are best for my business?", a: "It depends on your audience. B2B businesses thrive on LinkedIn, while B2C retail and lifestyle brands perform better on Instagram and Facebook. We create custom strategies tailored to your brand identity." },
  { q: "How much should I spend on paid social media advertising?", a: "Your budget depends on your specific goals (brand awareness vs. lead generation). We work with budgets ranging from ₹10,000/month to large enterprise ad spends all over India." },
  { q: "Do you create the content and creatives?", a: "Yes, our team handles end-to-end digital marketing. We produce graphics, video content, write compelling copy, and manage community interactions." },
  { q: "How do you measure Social Media Marketing success?", a: "We track metrics that matter: lead generation, conversion rates, cost-per-acquisition (CPA), and engagement. We provide detailed monthly ROI reports." },
  { q: "Can social media help with local SEO in Delhi Noida?", a: "Yes! Active social profiles and local engagement send positive trust signals to Google, which indirectly boosts your local SEO and helps you rank on Google's first page." },
  { q: "How long does it take to see results from social media marketing?", a: "Paid ads can generate leads immediately (within 24-48 hours). Organic brand building and community growth generally take 3 to 6 months to see significant momentum." },
  { q: "Do you provide influencer marketing?", a: "Yes, as part of our digital marketing packages, we help connect your brand with relevant micro and macro influencers to amplify your brand identity." },
  { q: "What is the difference between organic and paid social media?", a: "Organic social media involves non-paid posts to build community and trust over time. Paid social media involves spending money on ads to target specific audiences for immediate lead generation and sales." }
];

export default function SocialMediaMarketingPage() {
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
              Digital Marketing
            </span>

            <h1 className="text-[clamp(32px,5.5vw,64px)] font-extrabold leading-[1.1] mb-6 tracking-tight">
              Impactful <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">Social Media Marketing</span><br />
              & Brand Identity
            </h1>

            <p className="max-w-3xl mx-auto text-slate-400 text-lg leading-relaxed mb-10">
              We create compelling social narratives and high-converting ad campaigns. Enhance your brand identity, generate qualified leads, and connect with audiences in Delhi, Noida, and all over India.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <PopupTrigger className="px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 rounded-xl font-bold text-[15px] transition-all shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:-translate-y-0.5">
                Start Your Campaign
              </PopupTrigger>
            </div>
          </div>
        </section>

        {/* ── CORE SERVICES ─────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-20 border-t border-blue-900/20">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">Our Marketing Solutions</h2>
          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-16">
            We don't just post content; we engineer campaigns designed to drive measurable ROI.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShareIcon />,
                title: "Content & Community",
                desc: "We build strong brand identity through engaging organic content, community management, and creative storytelling across all major platforms.",
                points: ["Creative Strategy", "Community Management", "Brand Identity"]
              },
              {
                icon: <MegaphoneIcon />,
                title: "Paid Advertising (PPC)",
                desc: "High-ROI paid campaigns on Meta (Facebook/Instagram), LinkedIn, and Google Ads designed for immediate lead generation and sales.",
                points: ["Meta Ads", "LinkedIn B2B Ads", "Retargeting"]
              },
              {
                icon: <ChartIcon />,
                title: "Data-Driven Strategy",
                desc: "Every post and penny spent is tracked. We use advanced analytics to pivot strategies and ensure maximum digital marketing efficiency.",
                points: ["A/B Testing", "Conversion Tracking", "Monthly Reporting"]
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
        <section className="max-w-4xl mx-auto px-6 py-24 border-t border-blue-900/20">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-bold tracking-[3px] uppercase px-4 py-1.5 rounded-full mb-5 text-blue-400 bg-blue-900/20 border border-blue-700/30">
              FAQ
            </span>
            <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold text-white mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400">
              Everything you need to know about scaling with Social Media Marketing.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} faq={faq} />
            ))}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 pb-24 text-center">
          <div className="bg-gradient-to-b from-blue-900/20 to-transparent border border-blue-900/30 rounded-3xl p-12 md:p-20">
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold mb-6 text-white">
              Ready to Build Your Brand Identity?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
              Stop guessing with your digital marketing. Let us build campaigns that drive awareness, engagement, and most importantly, sales.
            </p>
            <PopupTrigger className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-lg transition-all shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:-translate-y-1">
              Talk to Our Experts
            </PopupTrigger>
          </div>
        </section>

      </div>
    </>
  );
}
