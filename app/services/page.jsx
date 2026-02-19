"use client";
import Link from "next/link";

/* ─── Icons ───────────────────────────────────────── */
const ServiceIcon = ({ children }) => (
  <div className="w-14 h-14 rounded-xl bg-blue-600/20 text-blue-400
    flex items-center justify-center border border-blue-700/30 mb-5">
    {children}
  </div>
);

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

/* ─── Services Data ───────────────────────────────── */
const services = [
  {
    title: "Website Development",
    desc: "High-performance, scalable, and SEO-friendly websites built with modern technologies.",
    points: ["Business Websites", "E-Commerce", "Web Applications"],
    url: "/services/website-development",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "SEO Optimization",
    desc: "Data-driven SEO strategies to rank higher on Google and generate organic leads.",
    points: ["Technical SEO", "On-Page SEO", "Link Building"],
    url: "/services/seo-optimization",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Social Media Marketing",
    desc: "Grow your brand, engagement, and leads across Instagram, Facebook & LinkedIn.",
    points: ["Content Strategy", "Paid Ads", "Lead Generation"],
    url: "/services/social-media-marketing",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: "UI / UX Design",
    desc: "User-centric UI/UX designs that enhance usability, engagement & conversions.",
    points: ["Wireframing", "Prototyping", "Design Systems"],
    url: "/services/ui-ux-design",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path d="M12 2l3.5 7 7.5 1-5.5 5.3 1.3 7.7L12 19l-6.8 4 1.3-7.7L1 10l7.5-1L12 2z" />
      </svg>
    ),
  },
];

/* ─── Component ───────────────────────────────────── */
export default function ServicesPage() {
  return (
    <div className="bg-[#080c18] text-slate-100 font-sans">

      {/* ── HERO ───────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-700/[0.05] blur-3xl
          w-[900px] h-[500px] rounded-full top-[-200px] left-1/2 -translate-x-1/2" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <span className="inline-block text-[11px] tracking-[3px] uppercase text-blue-400
            bg-blue-900/20 border border-blue-700/30 px-4 py-1.5 rounded-full mb-6">
            Our Services
          </span>

          <h1 className="text-[clamp(34px,5vw,58px)] font-extrabold mb-6">
            Complete Digital Solutions for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-sky-400
              bg-clip-text text-transparent">
              Business Growth
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-500 text-[16px] leading-relaxed">
            From website development to SEO, social media marketing, and UI/UX design —
            we offer end-to-end digital services to help your business grow online.
          </p>
        </div>
      </section>

      {/* ── SERVICES GRID ─────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(service => (
            <div
              key={service.title}
              className="rounded-2xl p-8 bg-[#0d1424]/90 border border-blue-900/30
                hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/25 transition"
            >
              <ServiceIcon>{service.icon}</ServiceIcon>

              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-500 mb-5">{service.desc}</p>

              <ul className="flex flex-wrap gap-3 mb-6">
                {service.points.map(p => (
                  <li
                    key={p}
                    className="text-xs text-blue-400 bg-blue-900/20
                      border border-blue-700/30 px-3 py-1 rounded-full"
                  >
                    {p}
                  </li>
                ))}
              </ul>

              <Link
                href={service.url}
                className="inline-flex items-center gap-2 text-blue-400
                  font-semibold hover:text-blue-300 transition"
              >
                View Service Details
                <ArrowIcon />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-extrabold mb-5">
          Not Sure Which Service You Need?
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto mb-8">
          Talk to our experts and get a free consultation for your business.
        </p>
        <Link
          href="/contact-us"
          className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-500
            rounded-xl font-semibold text-lg transition"
        >
          Book Free Consultation
        </Link>
      </section>

    </div>
  );
}
