"use client";

/* ─── Icons ─────────────────────────────────────────── */
const CheckIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ValuesIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12l2 2 4-4" />
  </svg>
);

/* ─── Component ─────────────────────────────────────── */
export default function AboutPage() {
  return (
    <div className="bg-[#080c18] text-slate-100 font-sans">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-blue-700/[0.05] blur-3xl
          w-[900px] h-[500px] rounded-full top-[-200px] left-1/2 -translate-x-1/2"
        />
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <span
            className="inline-block text-[11px] tracking-[3px] uppercase text-blue-400
            bg-blue-900/20 border border-blue-700/30 px-4 py-1.5 rounded-full mb-6"
          >
            About Us
          </span>

          <h1 className="text-[clamp(34px,5vw,58px)] font-extrabold mb-6">
            Building Digital Solutions That{" "}
            <span
              className="bg-gradient-to-r from-blue-400 to-sky-400
              bg-clip-text text-transparent"
            >
              Drive Growth
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-500 text-[16px] leading-relaxed">
            We are a results-driven IT & digital marketing company helping businesses
            grow online with powerful websites, SEO, social media marketing, and
            user-centric design.
          </p>
        </div>
      </section>

      {/* ── WHO WE ARE ───────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-extrabold mb-5">
            Who We Are
          </h2>
          <p className="text-slate-500 mb-4 leading-relaxed">
            Webnify Solutions is a modern IT solutions and digital growth company
            focused on delivering high-quality, scalable, and performance-driven
            digital products.
          </p>
          <p className="text-slate-500 leading-relaxed">
            From startups to established businesses, we partner with brands to
            create impactful digital experiences that generate leads, increase
            visibility, and drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            "Web Development",
            "SEO Optimization",
            "Social Media Marketing",
            "UI / UX Design",
          ].map(item => (
            <div
              key={item}
              className="rounded-xl bg-[#0d1424]/90 border border-blue-900/30
              p-5 text-center text-blue-400 font-semibold"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────────── */}
      <section className="bg-blue-900/[0.04] border-y border-blue-900/20">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
          <div className="bg-[#0d1424]/90 border border-blue-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-slate-500 leading-relaxed">
              Our mission is to help businesses succeed online by delivering
              innovative, reliable, and ROI-focused digital solutions that
              drive long-term growth.
            </p>
          </div>

          <div className="bg-[#0d1424]/90 border border-blue-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-500 leading-relaxed">
              To become a trusted digital growth partner for businesses worldwide,
              known for quality, transparency, and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          Why Choose Webnify Solutions?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Results-Driven Approach",
              desc: "We focus on strategies that deliver measurable growth and ROI.",
            },
            {
              title: "Experienced Team",
              desc: "Skilled developers, designers, and marketers with real-world expertise.",
            },
            {
              title: "Transparent Communication",
              desc: "Clear timelines, honest pricing, and regular progress updates.",
            },
            {
              title: "Custom Solutions",
              desc: "Every project is tailored to your business goals and audience.",
            },
            {
              title: "Latest Technologies",
              desc: "Modern tech stack, SEO best practices, and scalable architecture.",
            },
            {
              title: "Long-Term Partnership",
              desc: "We don’t just deliver projects — we build lasting relationships.",
            },
          ].map(item => (
            <div
              key={item.title}
              className="rounded-2xl p-6 bg-[#0d1424]/90 border border-blue-900/30
              hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/20 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400
                flex items-center justify-center mb-4 border border-blue-700/30">
                <ValuesIcon />
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CORE VALUES ─────────────────────────────── */}
      <section className="bg-blue-900/[0.04] border-y border-blue-900/20">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-extrabold text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Client-first mindset",
              "Quality & performance",
              "Innovation & learning",
              "Honesty & transparency",
              "Accountability & ownership",
              "Continuous improvement",
            ].map(value => (
              <div
                key={value}
                className="flex items-center gap-3 bg-[#0d1424]/90
                border border-blue-900/30 rounded-xl p-4 text-slate-400"
              >
                <span className="w-5 h-5 rounded-full bg-blue-600/20
                  text-blue-400 flex items-center justify-center">
                  <CheckIcon />
                </span>
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-extrabold mb-5">
          Let’s Build Something Great Together
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto mb-8">
          Whether you’re launching a new project or scaling your business,
          we’re here to help you succeed.
        </p>
        <a
          href="/contact"
          className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-500
          rounded-xl font-semibold text-lg transition"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
}
