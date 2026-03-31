"use client";
import Link from "next/link";

const DesignIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path d="M12 2l3.5 7 7.5 1-5.5 5.3 1.3 7.7L12 19l-6.8 4 1.3-7.7L1 10l7.5-1L12 2z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const services = [
  {
    title: "UI Design",
    desc: "Visually compelling interfaces aligned with your brand identity.",
    points: ["Modern UI", "Brand Consistency", "Conversion-Focused Design"],
  },
  {
    title: "UX Research",
    desc: "User-first research to design intuitive and frictionless experiences.",
    points: ["User Research", "User Journeys", "Wireframes"],
  },
  {
    title: "Product Design",
    desc: "End-to-end product design for scalable digital products.",
    points: ["Design Systems", "Prototyping", "Scalable Layouts"],
  },
];

/* ─── DESIGN PROCESS ───────────────────────────────── */
const process = [
  { step: "01", title: "Discovery", desc: "Understand users, goals & competitors." },
  { step: "02", title: "Wireframing", desc: "Structure layouts & user flows." },
  { step: "03", title: "Visual Design", desc: "High-fidelity UI & branding." },
  { step: "04", title: "Testing & Handoff", desc: "Usability testing & dev-ready files." },
];

/* ─── Component ─────────────────────────────────────── */
export default function UiUxDesignPage() {
  return (
    <div className="bg-[#080c18] text-slate-100 font-sans">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-700/[0.05] blur-3xl
          w-[900px] h-[500px] rounded-full top-[-220px] left-1/2 -translate-x-1/2" />

        <div className="relative max-w-6xl mx-auto px-6 py-16 text-center">
          <span className="inline-block text-[11px] tracking-[3px] uppercase
            text-blue-400 bg-blue-900/20 border border-blue-700/30
            px-4 py-1.5 rounded-full mb-5">
            UI / UX Design
          </span>

          <h1 className="text-[clamp(30px,5vw,54px)] font-extrabold leading-tight mb-4">
            Design Experiences Users{" "}
            <span className="bg-gradient-to-r from-blue-400 to-sky-400
              bg-clip-text text-transparent">
              Love & Trust
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-500 text-[15.5px] leading-relaxed">
            We design intuitive, user-centered interfaces that boost engagement,
            usability, and conversions across web & mobile products.
          </p>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <Link
              href="/contact-us"
              className="px-7 py-3 bg-blue-600 hover:bg-blue-500
                rounded-xl font-semibold transition"
            >
              Get Free Design Consultation
            </Link>

            <Link
              href="/services"
              className="px-7 py-3 border border-blue-900/40 rounded-xl
                text-slate-400 hover:text-blue-300 transition"
            >
              View Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 bg-[#0d1424]/90 border border-blue-900/30
                hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/25 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-600/20 text-blue-400
                flex items-center justify-center mb-4 border border-blue-700/30">
                <DesignIcon />
              </div>

              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500 mb-4">{s.desc}</p>

              <ul className="space-y-2">
                {s.points.map(p => (
                  <li key={p} className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full
                      bg-blue-900/30 border border-blue-700/30 text-blue-400">
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

      {/* ── PROCESS ─────────────────────────────────── */}
      <section className="bg-blue-900/[0.04] border-y border-blue-900/20">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-3xl font-extrabold text-center mb-10">
            Our UI / UX Design Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map(p => (
              <div
                key={p.step}
                className="rounded-2xl p-5 bg-[#0d1424]/90 border border-blue-900/30"
              >
                <div className="text-blue-400 text-2xl font-extrabold mb-2">
                  {p.step}
                </div>
                <h3 className="font-bold mb-1">{p.title}</h3>
                <p className="text-sm text-slate-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES ────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-extrabold text-center mb-8">
          What You Get with Our UI / UX Design
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {[
            "User Research & Personas",
            "Wireframes & User Flows",
            "High-Fidelity UI Screens",
            "Interactive Prototypes (Figma)",
            "Design System & Style Guide",
            "Developer-Ready Handoff",
          ].map(item => (
            <div
              key={item}
              className="flex items-center gap-3 bg-[#0d1424]/90
                border border-blue-900/30 rounded-xl p-4 text-slate-400"
            >
              <span className="w-5 h-5 rounded-full bg-blue-600/20
                text-blue-400 flex items-center justify-center">
                <CheckIcon />
              </span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-[clamp(28px,5vw,44px)] font-extrabold mb-4">
          Ready to Design a Better User Experience?
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto mb-6">
          Let’s design intuitive experiences that users love and businesses trust.
        </p>

        <Link
          href="/contact-us"
          className="inline-block px-9 py-3.5 bg-blue-600 hover:bg-blue-500
            rounded-xl font-semibold text-lg transition
            hover:shadow-lg hover:shadow-blue-700/40"
        >
          Start Your Design Project
        </Link>
      </section>

    </div>
  );
}
