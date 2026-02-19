"use client";
import Link from "next/link";

/* ─── Icons ───────────────────────────────────── */
const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export default function SocialMediaMarketingPage() {
  return (
    <div className="bg-[#080c18] text-slate-100 font-sans">

      {/* ── HERO ───────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]
          bg-blue-700/[0.05] rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <span className="inline-block text-[11px] tracking-[3px] uppercase
            text-blue-400 bg-blue-900/20 border border-blue-700/30
            px-4 py-1.5 rounded-full mb-6">
            Social Media Marketing
          </span>

          <h1 className="text-[clamp(32px,5vw,56px)] font-extrabold mb-6">
            Grow Your Brand & Leads with{" "}
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              Powerful Social Media Marketing
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-500 text-[16px] leading-relaxed mb-10">
            We help businesses build authority, engage audiences, and generate
            high-quality leads through result-driven social media strategies.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500
              text-white font-semibold rounded-xl transition-all
              hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-700/40"
            >
              Get Free Strategy Call
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border border-blue-900/35
              text-slate-400 hover:text-blue-300 rounded-xl transition"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ─────────────────────────── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-[clamp(26px,4vw,42px)]
            font-extrabold mb-12">
            What We Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Content Strategy",
                desc: "Platform-specific content that attracts, engages, and converts."
              },
              {
                title: "Paid Social Ads",
                desc: "High-ROI ad campaigns optimized for leads & sales."
              },
              {
                title: "Community Growth",
                desc: "Build trust, engagement & long-term brand loyalty."
              },
            ].map(item => (
              <div
                key={item.title}
                className="rounded-2xl p-7 bg-[#0d1424]/85
                border border-blue-900/30 hover:-translate-y-1
                hover:shadow-xl hover:shadow-blue-900/25 transition"
              >
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ──────────────────────────── */}
      <section className="py-20 bg-blue-900/[0.04] border-y border-blue-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-[clamp(26px,4vw,42px)]
            font-extrabold mb-12">
            Platforms We Manage
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Instagram",
              "Facebook",
              "LinkedIn",
              "YouTube",
              "Twitter / X",
            ].map(platform => (
              <div
                key={platform}
                className="rounded-xl bg-[#0d1424]/85 border border-blue-900/30
                py-4 text-center font-semibold text-blue-400
                hover:bg-blue-900/20 transition"
              >
                {platform}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ───────────────────────── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-[clamp(26px,4vw,42px)]
            font-extrabold mb-12">
            Our Social Media Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Research", desc: "Audience & competitor analysis" },
              { step: "02", title: "Strategy", desc: "Content & ad planning" },
              { step: "03", title: "Execution", desc: "Posting, ads & engagement" },
              { step: "04", title: "Optimization", desc: "Tracking & scaling results" },
            ].map(p => (
              <div
                key={p.step}
                className="rounded-2xl p-6 bg-[#0d1424]/85
                border border-blue-900/30"
              >
                <div className="text-blue-400 text-2xl font-extrabold mb-3">
                  {p.step}
                </div>
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-slate-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ───────────────────────────── */}
      <section className="py-20 bg-blue-900/[0.04] border-y border-blue-900/20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-[clamp(26px,4vw,42px)]
            font-extrabold mb-12">
            Why Choose Our Social Media Marketing?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              "Consistent brand visibility",
              "Higher engagement & reach",
              "Qualified leads & inquiries",
              "Data-driven growth strategy",
              "Transparent reporting",
              "Dedicated account management",
            ].map(b => (
              <div
                key={b}
                className="flex items-center gap-3 rounded-xl
                bg-[#0d1424]/85 border border-blue-900/30 p-4 text-slate-400"
              >
                <span className="w-6 h-6 rounded-full bg-blue-900/25
                  border border-blue-700/30 flex items-center justify-center text-blue-400">
                  <CheckIcon />
                </span>
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────── */}
      <section className="py-24 text-center">
        <h2 className="text-[clamp(30px,5vw,46px)]
          font-extrabold mb-5">
          Ready to Scale Your Social Media?
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto mb-10">
          Let’s create campaigns that attract, engage, and convert your audience.
        </p>

        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 px-10 py-4
          bg-blue-600 hover:bg-blue-500 text-white font-semibold
          rounded-xl transition hover:shadow-xl hover:shadow-blue-700/40"
        >
          Start Now
          <ArrowIcon />
        </Link>
      </section>

    </div>
  );
}
