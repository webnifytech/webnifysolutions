"use client";
import { useState } from "react";
import Link from "next/link";

const CodeIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const MobileIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);
const DesignIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const SeoIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);
const MarketingIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);
const BrandIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);
const CheckIcon = () => (
  <svg
    className="w-3 h-3"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const ArrowIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    viewBox="0 0 24 24"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const services = [
  {
    icon: <CodeIcon />,
    title: "Web Development",
    href: "/services/website-development",
    desc: "Custom, high-performance websites & apps built with modern tech...",
    tags: ["React / Next.js", "Node.js", "Full Stack"],
    features: [
      "Custom CMS Integration",
      "SEO-Ready Architecture",
      "99.9% Uptime",
    ],
    highlight: false,
  },
  {
    icon: <SeoIcon />,
    title: "SEO Optimization",
    href: "/services/seo-optimization",
    desc: "Data-driven SEO that puts you on page one...",
    tags: ["On-Page SEO", "Link Building", "Analytics"],
    features: ["Keyword Research", "Core Web Vitals", "Monthly Reports"],
    highlight: false,
  },
  {
    icon: <MarketingIcon />,
    title: "Social Media Marketing",
    href: "/services/social-media-marketing",
    desc: "Targeted campaigns across Meta, Instagram & LinkedIn...",
    tags: ["Meta Ads", "Content Strategy", "Growth"],
    features: ["Ad Creative Design", "A/B Testing", "ROI Tracking"],
    highlight: false,
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "1+", label: "Years Experience" },
  { value: "40+", label: "Happy Clients" },
];

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={service.href} className="block">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`
          relative flex flex-col rounded-2xl p-7 cursor-pointer overflow-hidden
          transition-all duration-300 border
          ${
            service.highlight
              ? "bg-gradient-to-br from-blue-900/30 to-slate-900/90 border-blue-500/40 shadow-lg shadow-blue-900/20"
              : "bg-[#0d1424]/85 border-blue-950/30"
          }
          ${
            hovered
              ? "-translate-y-2 shadow-2xl shadow-blue-900/25 border-blue-500/40"
              : ""
          }
        `}
      >
        {service.highlight && (
          <span
            className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase
            bg-blue-600 text-white px-3 py-1 rounded-full"
          >
            Popular
          </span>
        )}

        {/* Glow */}
        <div
          className={`absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br
            from-blue-600/5 to-transparent transition-opacity duration-300
            ${hovered ? "opacity-100" : "opacity-0"}`}
        />

        {/* Icon */}
        <div
          className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-5
            transition-all duration-300 border
            ${
              hovered || service.highlight
                ? "bg-blue-600/25 border-blue-500/40 text-blue-300"
                : "bg-blue-900/15 border-blue-900/25 text-blue-500"
            }`}
        >
          {service.icon}
        </div>

        <h3 className="text-[17px] font-bold text-slate-100 mb-2.5">
          {service.title}
        </h3>

        <p className="text-sm text-slate-500 mb-5 flex-grow">{service.desc}</p>

        {/* Features */}
        <ul className="space-y-2 mb-5">
          {service.features.map((f) => (
            <li
              key={f}
              className="flex items-center gap-2.5 text-[12.5px] text-slate-400"
            >
              <span
                className="w-[18px] h-[18px] rounded-full bg-blue-900/25
                border border-blue-700/30 flex items-center justify-center text-blue-400"
              >
                <CheckIcon />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {service.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] text-blue-400
              bg-blue-900/15 border border-blue-900/25 px-2.5 py-0.5 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`flex items-center gap-2 text-sm font-semibold
          ${hovered ? "text-blue-300" : "text-blue-500"}`}
        >
          Learn More
          <span
            className={`transition-transform duration-300
            ${hovered ? "translate-x-1 -translate-y-1" : ""}`}
          >
            <ArrowIcon />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ServicesSection() {
  return (
    <div className="font-sans bg-[#080c18]">
      {/* Stats Bar */}
      <div className="border-b border-blue-900/20 bg-blue-900/[0.04]">
        <div className="max-w-6xl mx-auto px-6 py-7 flex flex-wrap justify-around gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl font-extrabold bg-gradient-to-r from-blue-400
                to-sky-300 bg-clip-text text-transparent"
              >
                {s.value}
              </div>
              <div
                className="text-[11px] text-slate-500 mt-1 font-semibold
                uppercase tracking-widest"
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Services Section */}
      <section className="relative overflow-hidden">
        {/* BG glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px]
          bg-blue-700/[0.04] rounded-full blur-3xl pointer-events-none"
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.022] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,1) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,1) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-14">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span
              className="inline-block text-[11px] font-bold tracking-[3px] uppercase
              text-blue-400 bg-blue-900/20 border border-blue-700/30 px-4 py-1.5
              rounded-full mb-5"
            >
              What We Do
            </span>
            <h2
              className="text-[clamp(26px,4vw,44px)] font-extrabold text-slate-100
              leading-tight mb-5 tracking-tight"
            >
              Powerful IT Solutions for{" "}
              <span
                className="bg-gradient-to-r from-blue-400 via-blue-300 to-sky-400
                bg-clip-text text-transparent"
              >
                Modern Businesses
              </span>
            </h2>
            <p className="text-[15.5px] text-slate-500 leading-relaxed">
              From scalable websites to ROI-driven marketing — end-to-end
              digital solutions that help your brand grow, rank, and convert.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ServiceCard key={i} service={s} />
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center mt-14">
            <Link
              href="/services"
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white
  text-sm font-semibold rounded-xl transition-all duration-300
  hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-700/40"
            >
              View All Services
            </Link>

            <Link
              href="/contact-us"
              className="px-8 py-3.5 bg-transparent border border-blue-900/35
  hover:border-blue-500/50 text-slate-500 hover:text-blue-300
  text-sm font-semibold rounded-xl transition-all duration-300
  hover:-translate-y-0.5"
            >
              Book a Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-12 bg-[#080c18]">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,1) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,1) 1px,transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold text-slate-100 mb-4">
              Why Businesses Choose{" "}
              <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                Webnify Solutions
              </span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We don’t just deliver services — we deliver measurable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Result-Oriented Approach",
                desc: "Every strategy is designed to generate traffic, leads & ROI.",
              },
              {
                title: "Experienced Team",
                desc: "Developers, designers & marketers with real-world expertise.",
              },
              {
                title: "Transparent Process",
                desc: "Clear communication, timelines & honest pricing.",
              },
              {
                title: "Modern Tech Stack",
                desc: "Next.js, React, SEO-first architecture & scalable systems.",
              },
              {
                title: "Client-Centric",
                desc: "Your business goals always come first.",
              },
              {
                title: "Long-Term Partnership",
                desc: "We grow with you, not just deliver projects.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 bg-[#0d1424]/85 border border-blue-900/30
          hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/25 transition-all"
              >
                <h3 className="font-bold text-slate-100 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-[#080c18] border-t border-blue-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span
              className="inline-block text-[11px] font-bold tracking-[3px] uppercase
        text-blue-400 bg-blue-900/20 border border-blue-700/30 px-4 py-1.5
        rounded-full mb-5"
            >
              Our Process
            </span>
            <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold text-slate-100">
              Simple, Transparent & Result-Driven
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Understand goals, audience & competitors.",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "Plan the right solution & roadmap.",
              },
              {
                step: "03",
                title: "Execution",
                desc: "Design, develop & launch with precision.",
              },
              {
                step: "04",
                title: "Growth",
                desc: "Optimize, scale & improve performance.",
              },
            ].map((p) => (
              <div
                key={p.step}
                className="rounded-2xl p-6 bg-[#0d1424]/85 border border-blue-900/30"
              >
                <div className="text-blue-400 text-2xl font-extrabold mb-3">
                  {p.step}
                </div>
                <h3 className="font-semibold text-slate-100 mb-1">{p.title}</h3>
                <p className="text-sm text-slate-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 bg-[#080c18]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-[clamp(26px,4vw,42px)] font-extrabold text-slate-100 mb-12">
            Industries We Work With
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Startups",
              "IT Companies",
              "Healthcare",
              "E-Commerce",
              "Education",
              "Real Estate",
            ].map((industry) => (
              <div
                key={industry}
                className="rounded-xl bg-[#0d1424]/85 border border-blue-900/30
          py-4 text-center text-sm font-semibold text-blue-400
          hover:bg-blue-900/20 transition"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-[#080c18] border-t border-blue-900/20">
        <div className="absolute inset-0 bg-blue-700/[0.04] blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[clamp(30px,5vw,46px)] font-extrabold text-slate-100 mb-5">
            Ready to Grow Your Business?
          </h2>
          <p className="text-slate-500 mb-10">
            Let’s build powerful digital solutions that bring real results.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact-us"
              className="px-9 p-4 bg-blue-700 hover:bg-blue-600 text-white
        font-semibold rounded-xl transition-all hover:shadow-xl hover:shadow-blue-700/20"
            >
              Get Free Consultation
            </a>
            <a
              href="/services"
              className="px-9 py-4 border border-blue-900/35 text-slate-100
        hover:text-blue-600 rounded-xl transition-all"
            >
              Explore Services →
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#080c18] border-t border-blue-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold text-slate-100">
              What Makes Us{" "}
              <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                Different
              </span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto mt-3">
              Not just another IT company — we focus on impact, quality &
              growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Business-First Thinking",
                desc: "We align technology with your business goals, not just design & code.",
              },
              {
                title: "Performance Obsessed",
                desc: "Speed, SEO, UX & conversions are built-in from day one.",
              },
              {
                title: "Custom Solutions Only",
                desc: "No templates. No shortcuts. Every solution is tailor-made.",
              },
              {
                title: "Growth Partnership",
                desc: "We work like an extension of your internal team.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-7 bg-[#0d1424]/85 border border-blue-900/30
          hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/25 transition-all"
              >
                <h3 className="text-lg font-bold text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-18 bg-[#080c18]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-[clamp(26px,4vw,42px)] font-extrabold text-slate-100 mb-16">
            Technologies We Use
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {[
              "Next.js",
              "React",
              "Node.js",
              "Tailwind CSS",
              "Firebase",
              "MongoDB",
              "Google Analytics",
              "Meta Ads",
            ].map((tech) => (
              <div
                key={tech}
                className="rounded-xl bg-[#0d1424]/85 border border-blue-900/30
          py-5 text-center text-sm font-semibold text-blue-400
          hover:bg-blue-900/20 transition"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#080c18] border-t border-blue-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-[clamp(26px,4vw,42px)] font-extrabold text-slate-100 mb-12">
            Who We Work With
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Startups & Founders",
              "Small & Medium Businesses",
              "Enterprises",
              "Agencies & Consultants",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl p-6 bg-[#0d1424]/85 border border-blue-900/30
          text-center text-slate-400 hover:text-blue-300 transition"
              >
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#080c18]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-[clamp(26px,4vw,42px)] font-extrabold text-slate-100 mb-12">
            Our Commitments to You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Quality Assured",
                desc: "High standards in design, development & marketing.",
              },
              {
                title: "On-Time Delivery",
                desc: "We respect timelines and deadlines seriously.",
              },
              {
                title: "Ongoing Support",
                desc: "We don’t disappear after project delivery.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-7 bg-[#0d1424]/85 border border-blue-900/30
          hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/25 transition-all"
              >
                <h3 className="font-bold text-slate-100 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#080c18] border-t border-blue-900/20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-[clamp(26px,4vw,42px)] font-extrabold text-slate-100 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "How long does a project take?",
                a: "Project timelines depend on scope, but most websites take 2–6 weeks.",
              },
              {
                q: "Do you provide ongoing support?",
                a: "Yes, we offer maintenance, SEO & marketing support after launch.",
              },
              {
                q: "Can you work with international clients?",
                a: "Absolutely. We work with clients worldwide.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl p-6 bg-[#0d1424]/85 border border-blue-900/30"
              >
                <h3 className="font-semibold text-slate-100 mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
