"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ─── Brand Colors ──────────────────────────────────────── */
// Primary: #016398  Secondary: #f97316 (orange accent)  Dark bg: #0b1526

/* ─── SVG Icons ─────────────────────────────────────────── */
const Icon = {
  Code: () => (
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
  ),
  Seo: () => (
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
  ),
  Marketing: () => (
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
  ),
  Mobile: () => (
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
  ),
  Design: () => (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
      <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
      <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
      <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
    </svg>
  ),
  Brand: () => (
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
  ),
  Check: () => (
    <svg
      className="w-3.5 h-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Arrow: () => (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  Rocket: () => (
    <svg
      className="w-7 h-7"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      viewBox="0 0 24 24"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  Target: () => (
    <svg
      className="w-7 h-7"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  Zap: () => (
    <svg
      className="w-7 h-7"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      viewBox="0 0 24 24"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Globe: () => (
    <svg
      className="w-7 h-7"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Star: () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  Quote: () => (
    <svg
      className="w-8 h-8"
      fill="currentColor"
      viewBox="0 0 24 24"
      opacity="0.15"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  ),
  Mail: () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  Phone: () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.58 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6.06 6.06l1.06-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
};

const services = [
  {
    icon: <Icon.Code />,
    title: "Web Development",
    href: "/services/website-development",
    desc: "Custom, high-performance websites & apps built with Next.js, React that scale with your business.",
    tags: ["React / Next.js", "Node.js", "Full Stack"],
    features: [
      "Custom CMS Integration",
      "SEO-Ready Architecture",
      "99.9% Uptime",
    ],
  },
  {
    icon: <Icon.Seo />,
    title: "SEO Optimization",
    href: "/services/seo-optimization",
    desc: "Data-driven SEO strategies that put you on page one and keep you there — sustainably.",
    tags: ["On-Page SEO", "Link Building", "Analytics"],
    features: ["Keyword Research", "Core Web Vitals", "Monthly Reports"],
    popular: true,
  },
  {
    icon: <Icon.Marketing />,
    title: "Social Media Marketing",
    href: "/services/social-media-marketing",
    desc: "Targeted campaigns across Meta, Instagram & LinkedIn that turn visitors into loyal customers.",
    tags: ["Meta Ads", "Content Strategy", "Growth"],
    features: ["Ad Creative Design", "A/B Testing", "ROI Tracking"],
  },
  {
    icon: <Icon.Mobile />,
    title: "Mobile App Development",
    href: "/services/mobile-app",
    desc: "Native and cross-platform mobile apps that deliver seamless experiences on iOS & Android.",
    tags: ["React Native", "Flutter", "iOS/Android"],
    features: ["UI/UX Design", "API Integration", "App Store Launch"],
  },
  {
    icon: <Icon.Design />,
    title: "UI/UX Design",
    href: "/services/ui-ux-design",
    desc: "Beautiful, conversion-focused designs that users love and businesses profit from.",
    tags: ["Figma", "Prototyping", "User Research"],
    features: ["Wireframing", "Design System", "Usability Testing"],
  },
  {
    icon: <Icon.Brand />,
    title: "Brand Identity",
    href: "/services/branding",
    desc: "Memorable brand identities that communicate your values and stand out in any market.",
    tags: ["Logo Design", "Style Guide", "Brand Strategy"],
    features: [
      "Logo & Visual Identity",
      "Brand Guidelines",
      "Marketing Assets",
    ],
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "40+", label: "Happy Clients" },
  { value: "24", label: "Support Available" },
];

const whyUs = [
  {
    icon: <Icon.Target />,
    title: "Result-Oriented",
    desc: "Every strategy is built to drive traffic, leads & measurable ROI.",
  },
  {
    icon: <Icon.Zap />,
    title: "Fast Turnaround",
    desc: "Agile execution without compromising quality or attention to detail.",
  },
  {
    icon: <Icon.Globe />,
    title: "Global Reach",
    desc: "We work with clients worldwide across diverse industries.",
  },
  {
    icon: <Icon.Rocket />,
    title: "Growth Partner",
    desc: "We scale with your business as a long-term digital partner.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "Deep-dive into your goals, audience, and competitive landscape to define a clear direction.",
    color: "from-[#016398] to-[#0284c7]",
  },
  {
    step: "02",
    title: "Strategy",
    desc: "Build a detailed roadmap with milestones, deliverables, and technology decisions.",
    color: "from-[#0369a1] to-[#016398]",
  },
  {
    step: "03",
    title: "Execution",
    desc: "Design, develop, and launch with precision — on time and on budget.",
    color: "from-[#016398] to-[#0c4a6e]",
  },
  {
    step: "04",
    title: "Growth",
    desc: "Continuously optimize, scale, and improve your digital presence post-launch.",
    color: "from-[#0c4a6e] to-[#016398]",
  },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, TechStart India",
    rating: 5,
    text: "Webnify transformed our online presence completely. Our leads increased by 3x within 2 months of launching the new website.",
  },
  {
    name: "Priya Mehta",
    role: "Marketing Head, EduLearn",
    rating: 5,
    text: "The SEO work they did is phenomenal. We went from page 5 to page 1 for our main keywords in just 90 days.",
  },
  {
    name: "Arjun Kapoor",
    role: "CEO, RetailNow",
    rating: 5,
    text: "Professional, transparent, and genuinely invested in our success. The best IT partner we have worked with.",
  },
];

const faqs = [
  {
    q: "How long does a project take?",
    a: "Most websites take 2–6 weeks depending on scope. We provide detailed timelines after discovery.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes — maintenance, SEO monitoring & marketing support are available post-launch.",
  },
  {
    q: "Can you work with international clients?",
    a: "Absolutely. We serve clients across India, US, UK, UAE and beyond.",
  },
  {
    q: "What makes Webnify different from other agencies?",
    a: "We don't just build — we grow businesses. Every decision is tied to your KPIs, not just aesthetics.",
  },
  {
    q: "Do you offer custom pricing?",
    a: "Yes. We tailor every proposal to your project size, goals, and budget.",
  },
];

/* ─── Animated Counter ───────────────────────────────────── */
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const num = parseInt(target);
    if (isNaN(num)) {
      setCount(target);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(num / 40);
          const timer = setInterval(() => {
            start += step;
            if (start >= num) {
              setCount(num);
              clearInterval(timer);
            } else setCount(start);
          }, 35);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─── FAQ Item ───────────────────────────────────────────── */
function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden"
      style={{
        borderColor: open ? "#016398" : "#e2e8f0",
        background: open ? "#f0f9ff" : "white",
      }}
    >
      <div className="flex items-center justify-between p-6">
        <h3 className="font-semibold text-slate-800 pr-4">{faq.q}</h3>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{
            background: open ? "#016398" : "#f1f5f9",
            color: open ? "white" : "#016398",
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
          <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={service.href} className="block h-full">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex flex-col h-full rounded-2xl p-7 border transition-all duration-300 overflow-hidden"
        style={{
          background: service.popular
            ? "linear-gradient(135deg, #016398 0%, #0284c7 100%)"
            : hovered
              ? "#f0f9ff"
              : "white",
          borderColor: service.popular
            ? "#016398"
            : hovered
              ? "#016398"
              : "#e2e8f0",
          transform: hovered ? "translateY(-6px)" : "none",
          boxShadow: hovered
            ? service.popular
              ? "0 20px 60px rgba(1,99,152,0.35)"
              : "0 20px 60px rgba(1,99,152,0.12)"
            : service.popular
              ? "0 8px 32px rgba(1,99,152,0.25)"
              : "0 1px 3px rgba(0,0,0,0.06)",
        }}
      >
        {service.popular && (
          <span
            className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase
            bg-white/20 text-white px-3 py-1 rounded-full border border-white/30"
          >
            Most Popular
          </span>
        )}

        {/* Icon Box */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300"
          style={{
            background: service.popular
              ? "rgba(255,255,255,0.2)"
              : hovered
                ? "#016398"
                : "#eff6ff",
            color: service.popular || hovered ? "white" : "#016398",
          }}
        >
          {service.icon}
        </div>

        <h3
          className={`text-[17px] font-bold mb-2.5 ${service.popular ? "text-white" : "text-slate-800"}`}
        >
          {service.title}
        </h3>
        <p
          className={`text-sm mb-5 flex-grow leading-relaxed ${service.popular ? "text-blue-100" : "text-slate-500"}`}
        >
          {service.desc}
        </p>

        <ul className="space-y-2 mb-5">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-[12.5px]">
              <span
                className="w-[18px] h-[18px] rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: service.popular
                    ? "rgba(255,255,255,0.2)"
                    : "#eff6ff",
                  color: service.popular ? "white" : "#016398",
                  border: service.popular
                    ? "1px solid rgba(255,255,255,0.3)"
                    : "1px solid #bfdbfe",
                }}
              >
                <Icon.Check />
              </span>
              <span
                className={service.popular ? "text-blue-100" : "text-slate-500"}
              >
                {f}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-5">
          {service.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-0.5 rounded-full"
              style={{
                background: service.popular
                  ? "rgba(255,255,255,0.15)"
                  : "#eff6ff",
                color: service.popular ? "white" : "#016398",
                border: service.popular
                  ? "1px solid rgba(255,255,255,0.25)"
                  : "1px solid #bfdbfe",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div
          className="flex items-center gap-2 text-sm font-semibold mt-auto"
          style={{ color: service.popular ? "white" : "#016398" }}
        >
          Learn More
          <span
            className={`transition-transform duration-300 ${hovered ? "translate-x-1" : ""}`}
          >
            <Icon.Arrow />
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ─── Main Page ──────────────────────────────────────────── */
export default function WebnifyLanding() {
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="font-sans overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}
    >
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0b1526 0%, #0f2040 50%, #0b1d35 100%)",
        }}
      >
        {/* Animated grid bg */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(1,99,152,1) 1px, transparent 1px), linear-gradient(90deg, rgba(1,99,152,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(1,99,152,0.2) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-8xl mx-auto px-2 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-8 text-xs font-semibold uppercase tracking-widest"
              style={{
                background: "rgba(1,99,152,0.2)",
                border: "1px solid rgba(1,99,152,0.4)",
                color: "#7dd3fc",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#016398" }}
              />
              Trusted Digital Agency
            </div>
            <h1 className="text-[clamp(28px,5.1vw,56px)] font-extrabold leading-[1.1] tracking-tight mb-6">
              <span className="text-white">Smart Tech Solutions</span>
              <br />
              <span className="text-white">Modern Businesses</span>
            </h1>

            <p
              className="text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Webnify Solutions helps startups and businesses launch, grow, and
              scale with cutting-edge websites, SEO, and digital marketing
              strategies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/services"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#016398",
                  color: "white",
                  boxShadow: "0 8px 32px rgba(1,99,152,0.4)",
                }}
              >
                Explore Solutions →
              </Link>
              <Link
                href="/contact-us"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "transparent",
                  color: "#f97316",
                  border: "1.5px solid #f97316",
                }}
              >
                Get Started →
              </Link>
            </div>

            {/* Trust Stats Strip */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#f97316" }}
              >
                Trusted by Innovators & Founders
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "50+ Startups Guided",
                  "99% Client Satisfaction",
                  "24×7 Founder Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 rounded-xl text-sm font-medium"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Visual Card */}
          <div className="hidden lg:block">
            <div
              className="relative rounded-3xl overflow-hidden p-8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,249,255,0.98) 100%)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
              }}
            >
              {/* Chart mockup */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-slate-700">
                    Growth Analytics
                  </span>
                  <span className="text-xs text-slate-400">Last 6 months</span>
                </div>
                <div className="flex items-end gap-2 h-28 mt-4">
                  {[40, 55, 45, 70, 85, 95].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-lg transition-all duration-500"
                      style={{
                        height: `${h}%`,
                        background:
                          i === 5
                            ? "#f97316"
                            : "linear-gradient(to top, #016398, #0284c7)",
                        opacity: i === 5 ? 1 : 0.7 + i * 0.05,
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
                    <span
                      key={m}
                      className="text-[10px] text-slate-400 flex-1 text-center"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metric badges */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  {
                    label: "Startup Consulted",
                    value: "200+",
                    color: "#016398",
                  },
                  {
                    label: "Client Satisfaction",
                    value: "99%",
                    color: "#016398",
                  },
                  { label: "24×7 Support", value: "Always", color: "#f97316" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl p-3 text-center"
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <div
                      className="text-xl font-extrabold"
                      style={{ color: m.color }}
                    >
                      {m.value}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-4" style={{ borderTop: "1px solid #e2e8f0" }}>
                <p
                  className="text-[10px] font-bold uppercase tracking-widest mb-3"
                  style={{ color: "#016398" }}
                >
                  Empowering Your Startup
                </p>
                <div className="flex gap-4 justify-center">
                  {[
                    { icon: "🚀", label: "Launch" },
                    { icon: "📈", label: "Grow" },
                    { icon: "⚙️", label: "Scale" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                        style={{ background: "#eff6ff" }}
                      >
                        {item.icon}
                      </div>
                      <span
                        className="text-[11px] font-semibold"
                        style={{ color: "#016398" }}
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="text-center py-6 rounded-2xl"
                style={{ background: "#f0f9ff", border: "1px solid #bae6fd" }}
              >
                <div
                  className="text-4xl font-extrabold mb-1"
                  style={{ color: "#016398" }}
                >
                  <Counter
                    target={s.value.replace(/[^0-9]/g, "")}
                    suffix={s.value.replace(/[0-9]/g, "")}
                  />
                </div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-widest">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual */}
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #0b1526 0%, #0f2040 100%)",
                }}
              >
                <div className="p-10">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { label: "Projects Done", value: "50+", icon: "✅" },
                      { label: "Happy Clients", value: "40+", icon: "😊" },
                      { label: "Years Active", value: "1+", icon: "📅" },
                      { label: "Support Hours", value: "24/7", icon: "🛟" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl p-4"
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        <div className="text-2xl mb-1">{item.icon}</div>
                        <div className="text-2xl font-extrabold text-white">
                          {item.value}
                        </div>
                        <div className="text-[11px] text-slate-400 uppercase tracking-wide">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    className="rounded-2xl p-5"
                    style={{
                      background: "rgba(1,99,152,0.2)",
                      border: "1px solid rgba(1,99,152,0.4)",
                    }}
                  >
                    <p className="text-white text-sm font-semibold mb-1">
                      Our Mission
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      To empower businesses of all sizes with smart digital
                      solutions that drive real, measurable growth.
                    </p>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-5 -right-5 rounded-2xl p-4 shadow-2xl"
                style={{ background: "white", border: "2px solid #016398" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "#016398" }}
                  >
                    <span className="text-white text-lg">⭐</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">
                      Top-Rated Agency
                    </div>
                    <div className="flex gap-0.5 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Icon.Star key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <span
                className="inline-block text-[11px] font-bold tracking-[3px] uppercase px-4 py-1.5 rounded-full mb-5"
                style={{
                  color: "#016398",
                  background: "#eff6ff",
                  border: "1px solid #bfdbfe",
                }}
              > 
                About Webnify Solutions
              </span>
              <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold text-slate-800 leading-tight mb-6">
                We Build Digital <br />
                <span style={{ color: "#016398" }}>
                  Experiences That Convert
                </span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Webnify Solutions is a full-service digital agency helping
                startups and SMBs build powerful online presences. From strategy
                to execution, we deliver solutions that grow businesses — not
                just pretty websites.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Our team of developers, designers, and marketers brings years of
                real-world expertise to every project. We believe in
                transparency, timelines, and results.
              </p>
              <div className="space-y-3 mb-10">
                {[
                  "100% Custom — No templates or shortcuts",
                  "SEO-first architecture from day one",
                  "Post-launch support & growth partnership",
                  "Transparent pricing & clear communication",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "#016398", color: "white" }}
                    >
                      <Icon.Check />
                    </div>
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#016398",
                  color: "white",
                  boxShadow: "0 8px 24px rgba(1,99,152,0.25)",
                }}
              >
                Learn More About Us <Icon.Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-14 relative"
        style={{
          background: "linear-gradient(180deg, #f8fafc 0%, white 100%)",
        }}
      >
        {/* Decorative top border accent */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background:
              "linear-gradient(90deg, transparent, #016398, transparent)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span
              className="inline-block text-[11px] font-bold tracking-[3px] uppercase px-4 py-1.5 rounded-full mb-5"
              style={{
                color: "#016398",
                background: "#eff6ff",
                border: "1px solid #bfdbfe",
              }}
            >
              What We Do
            </span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold text-slate-800 leading-tight mb-5">
              Powerful IT Solutions for{" "}
              <span style={{ color: "#016398" }}>Modern Businesses</span>
            </h2>
            <p className="text-slate-500 leading-relaxed">
              End-to-end digital solutions that help your brand grow, rank, and
              convert.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={i} service={s} />
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-14">
            <Link
              href="/services"
              className="px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "#016398",
                color: "white",
                boxShadow: "0 8px 24px rgba(1,99,152,0.25)",
              }}
            >
              View All Services
            </Link>
            <Link
              href="/contact-us"
              className="px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "white",
                color: "#016398",
                border: "1.5px solid #016398",
              }}
            >
              Book Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-14 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span
                className="inline-block text-[11px] font-bold tracking-[3px] uppercase px-4 py-1.5 rounded-full mb-5"
                style={{
                  color: "#016398",
                  background: "#eff6ff",
                  border: "1px solid #bfdbfe",
                }}
              >
                Why Webnify Solutions
              </span>
              <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold text-slate-800 leading-tight mb-6">
                Why Businesses Choose{" "}
                <span style={{ color: "#016398" }}>Webnify Solutions</span>
              </h2>
              <p className="text-slate-500 mb-10 leading-relaxed">
                We don't just deliver services — we deliver measurable,
                sustainable growth. Here's what sets us apart.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {whyUs.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#eff6ff", color: "#016398" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Industries */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-6">
                Industries We Serve
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Startups", icon: "🚀" },
                  { name: "IT Companies", icon: "💻" },
                  { name: "Healthcare", icon: "🏥" },
                  { name: "E-Commerce", icon: "🛒" },
                  { name: "Education", icon: "🎓" },
                  { name: "Real Estate", icon: "🏢" },
                ].map((industry) => (
                  <div
                    key={industry.name}
                    className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300 cursor-default hover:-translate-y-1"
                    style={{
                      background: "#f0f9ff",
                      border: "1px solid #bae6fd",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#016398";
                      e.currentTarget
                        .querySelectorAll("span")
                        .forEach((s) => (s.style.color = "white"));
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#f0f9ff";
                      e.currentTarget
                        .querySelectorAll("span")
                        .forEach((s) => (s.style.color = ""));
                    }}
                  >
                    <span className="text-xl">{industry.icon}</span>
                    <span
                      className="font-semibold text-sm"
                      style={{ color: "#016398" }}
                    >
                      {industry.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Who We Work With */}
              <div
                className="mt-8 rounded-2xl p-6"
                style={{
                  background: "linear-gradient(135deg, #0b1526, #0f2040)",
                }}
              >
                <h4 className="text-white font-bold mb-4">Who We Work With</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Startups & Founders",
                    "SMBs",
                    "Enterprises",
                    "Agencies",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      <span style={{ color: "#016398" }}>✓</span> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-14 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0b1526 0%, #0f2040 100%)",
        }}
      >
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="inline-block text-[11px] font-bold tracking-[3px] uppercase px-4 py-1.5 rounded-full mb-5"
              style={{
                color: "#7dd3fc",
                background: "rgba(1,99,152,0.2)",
                border: "1px solid rgba(1,99,152,0.4)",
              }}
            >
              Our Process
            </span>
            <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold text-white mb-4">
              How We Work
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Simple, transparent, and result-driven from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line (desktop) */}
            <div
              className="hidden lg:block absolute top-12 left-[13%] right-[13%] h-px"
              style={{ background: "rgba(1,99,152,0.3)" }}
            />

            {process.map((p, i) => (
              <div
                key={p.step}
                className="relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Step circle */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6 relative z-10"
                  style={{
                    background: "linear-gradient(135deg, #016398, #0284c7)",
                    color: "white",
                    fontWeight: 800,
                    boxShadow: "0 4px 20px rgba(1,99,152,0.5)",
                  }}
                >
                  {p.step}
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[clamp(24px,4vw,38px)] font-extrabold text-slate-800 mb-3">
              Technologies We Use
            </h2>
            <p className="text-slate-500">Modern stack for modern businesses</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4">
            {[
              { name: "Next.js", tag: "Frontend" },
              { name: "React", tag: "UI" },
              { name: "Node.js", tag: "Backend" },
              { name: "Tailwind CSS", tag: "Styling" },
              { name: "Firebase", tag: "Database" },
              { name: "MongoDB", tag: "Database" },
              { name: "Google Analytics", tag: "Analytics" },
              { name: "Meta Ads", tag: "Marketing" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="rounded-xl p-5 text-center transition-all duration-300 cursor-default group hover:-translate-y-1"
                style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#016398";
                  e.currentTarget.style.borderColor = "#016398";
                  e.currentTarget.style.boxShadow =
                    "0 12px 32px rgba(1,99,152,0.25)";
                  e.currentTarget
                    .querySelectorAll("[data-tech]")
                    .forEach((el) => (el.style.color = "white"));
                  e.currentTarget
                    .querySelectorAll("[data-tag]")
                    .forEach(
                      (el) => (el.style.color = "rgba(255,255,255,0.6)"),
                    );
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#f8fafc";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget
                    .querySelectorAll("[data-tech]")
                    .forEach((el) => (el.style.color = ""));
                  e.currentTarget
                    .querySelectorAll("[data-tag]")
                    .forEach((el) => (el.style.color = ""));
                }}
              >
                <div
                  data-tech
                  className="font-bold text-slate-800 mb-1"
                  style={{ color: "#016398" }}
                >
                  {tech.name}
                </div>
                <div
                  data-tag
                  className="text-[10px] text-slate-400 uppercase tracking-wider"
                >
                  {tech.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-14"
        style={{
          background: "linear-gradient(180deg, #f0f9ff 0%, white 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span
              className="inline-block text-[11px] font-bold tracking-[3px] uppercase px-4 py-1.5 rounded-full mb-5"
              style={{
                color: "#016398",
                background: "#eff6ff",
                border: "1px solid #bfdbfe",
              }}
            >
              Client Stories
            </span>
            <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold text-slate-800 mb-3">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  background: "white",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  className="absolute top-6 right-6 opacity-10"
                  style={{ color: "#016398" }}
                >
                  <Icon.Quote />
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <span key={j} style={{ color: "#f97316" }}>
                      <Icon.Star />
                    </span>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  "{t.text}"
                </p>
                <div
                  className="flex items-center gap-3 pt-4"
                  style={{ borderTop: "1px solid #f1f5f9" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm"
                    style={{
                      background: "linear-gradient(135deg, #016398, #0284c7)",
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[clamp(24px,4vw,38px)] font-extrabold text-slate-800 mb-3">
              Our Commitments to You
            </h2>
            <p className="text-slate-500">
              We hold ourselves accountable to these every single project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Quality Assured",
                desc: "Every pixel, every line of code is held to the highest standard.",
                icon: "✅",
                color: "#016398",
              },
              {
                title: "On-Time Delivery",
                desc: "We take timelines seriously. No surprises, no excuses.",
                icon: "⏱️",
                color: "#0284c7",
              },
              {
                title: "Ongoing Support",
                desc: "We're your long-term partner, not just a one-time vendor.",
                icon: "🤝",
                color: "#016398",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-50"
                style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 text-3xl"
                  style={{ background: "#eff6ff" }}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative py-14 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0b1526 0%, #0f2040 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(1,99,152,1) 1px, transparent 1px), linear-gradient(90deg, rgba(1,99,152,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(1,99,152,0.15) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span
            className="inline-block text-[11px] font-bold tracking-[3px] uppercase px-4 py-1.5 rounded-full mb-6"
            style={{
              color: "#7dd3fc",
              background: "rgba(1,99,152,0.2)",
              border: "1px solid rgba(1,99,152,0.4)",
            }}
          >
            Let's Build Together
          </span>
          <h2 className="text-[clamp(32px,5vw,52px)] font-extrabold text-white mb-6 leading-tight">
            Ready to Grow Your <br />
            <span style={{ color: "#f97316" }}>Business?</span>
          </h2>
          <p
            className="text-lg mb-12 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Let's build powerful digital solutions that bring real, measurable
            results for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href="/contact-us"
              className="flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-sm transition-all hover:-translate-y-1"
              style={{
                background: "#016398",
                color: "white",
                boxShadow: "0 12px 40px rgba(1,99,152,0.5)",
              }}
            >
              Get Free Consultation
            </a>
            <a
              href="/services"
              className="flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-sm transition-all hover:-translate-y-1"
              style={{
                background: "transparent",
                color: "white",
                border: "1.5px solid rgba(255,255,255,0.3)",
              }}
            >
              Explore Services →
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: <Icon.Mail />, label: "hello@webnify.in" },
              { icon: <Icon.Phone />, label: "+91 98765 43210" },
            ].map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-2"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                <span style={{ color: "#016398" }}>{c.icon}</span>
                <span className="text-sm">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: "#f8fafc" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span
              className="inline-block text-[11px] font-bold tracking-[3px] uppercase px-4 py-1.5 rounded-full mb-5"
              style={{
                color: "#016398",
                background: "#eff6ff",
                border: "1px solid #bfdbfe",
              }}
            >
              FAQ
            </span>
            <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold text-slate-800 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500">
              Everything you need to know before getting started.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} faq={faq} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
