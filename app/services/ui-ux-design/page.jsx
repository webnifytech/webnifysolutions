"use client";
import { useState } from "react";
import Link from "next/link";
import PopupTrigger from "@/components/PopupTrigger";

/* ── Icons ─────────────────────────────────────────── */
const PenIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);
const LayoutIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>
);
const EyeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
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
  { q: "What is the difference between UI and UX?", a: "UX (User Experience) focuses on how a product works, the logic, and the user journey. UI (User Interface) focuses on how it looks—the colors, typography, and brand identity." },
  { q: "Do you offer UI/UX design services independently of website development?", a: "Yes. We can design the UI/UX in Figma and hand over the assets to your internal development team, or we can handle both design and website development in-house." },
  { q: "Why is UI/UX design important for SEO?", a: "Google heavily factors user behavior (like bounce rate and time on site) into rankings. A great UX keeps users engaged, which signals to Google that your site is valuable, aiding your ability to rank on Google's first page." },
  { q: "How long does a UI/UX design project take?", a: "A standard website design takes about 2 to 3 weeks for research, wireframing, and high-fidelity prototyping. Complex SaaS applications may take 4 to 8 weeks." },
  { q: "Do you create Brand Identity as well?", a: "Yes, our UI/UX design services seamlessly integrate with brand identity creation. We design logos, color palettes, and typography guidelines to ensure your brand stands out all over India." },
  { q: "What tools do you use for UI/UX Design?", a: "We primarily use Figma for wireframing, high-fidelity UI design, and interactive prototyping. It allows for seamless collaboration with our clients." },
  { q: "Do you redesign existing websites?", a: "Absolutely. We often take outdated platforms and conduct a complete UX audit and UI overhaul to improve conversions and modernize the brand identity." },
  { q: "Is mobile UI design included?", a: "Yes, every project we undertake is designed with a mobile-first approach. Mobile responsiveness is critical for user satisfaction and for local SEO in Delhi Noida." }
];

export default function UiUxDesignPage() {
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
              Design Services
            </span>

            <h1 className="text-[clamp(32px,5.5vw,64px)] font-extrabold leading-[1.1] mb-6 tracking-tight">
              Intuitive <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">UI/UX Design</span><br />
              & Digital Experiences
            </h1>

            <p className="max-w-3xl mx-auto text-slate-400 text-lg leading-relaxed mb-10">
              We craft visually stunning, user-centric interfaces that establish a powerful brand identity. From startups in Delhi Noida to enterprises all over India, our designs convert visitors into loyal customers.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <PopupTrigger className="px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 rounded-xl font-bold text-[15px] transition-all shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:-translate-y-0.5">
                Discuss Your Design Needs
              </PopupTrigger>
            </div>
          </div>
        </section>

        {/* ── CORE SERVICES ─────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-20 border-t border-blue-900/20">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">Our UI/UX Methodology</h2>
          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-16">
            Great design is more than just aesthetics. It's about psychology, usability, and seamless user journeys.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <PenIcon />,
                title: "UX Research & Wireframing",
                desc: "We analyze your audience and build wireframes that map out the perfect user journey, ensuring logical flow before aesthetics are applied.",
                points: ["User Personas", "Information Architecture", "Low-Fi Wireframes"]
              },
              {
                icon: <LayoutIcon />,
                title: "High-Fidelity UI Design",
                desc: "We bring wireframes to life with stunning visuals, typography, and a brand identity that resonates with your target market.",
                points: ["Figma Prototyping", "Design Systems", "Brand Identity"]
              },
              {
                icon: <EyeIcon />,
                title: "Usability Testing",
                desc: "We validate our designs through testing to ensure the final product is intuitive, accessible, and optimized for maximum conversion.",
                points: ["A/B Testing", "Accessibility Audits", "Handoff to Devs"]
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
              Learn more about our UI/UX design process and deliverables.
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
              Ready to Design a World-Class Experience?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
              Your digital product's design is the first impression you make. Let's make it unforgettable with our premium UI/UX design services.
            </p>
            <PopupTrigger className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-lg transition-all shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:-translate-y-1">
              Start Your Design Project
            </PopupTrigger>
          </div>
        </section>

      </div>
    </>
  );
}
