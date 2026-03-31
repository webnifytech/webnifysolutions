"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#060e1a", borderTop: "1px solid rgba(1,99,152,0.15)" }}>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "#016398" }}
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="text-[20px] font-extrabold text-white tracking-tight">
                Webnify<span style={{ color: "#016398" }}>Solutions</span>
              </div>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              Scalable digital solutions — websites, SEO, social media marketing,
              and UI/UX design for modern businesses.
            </p>

            {/* Newsletter */}
            <div
              className="rounded-xl p-4 mb-6"
              style={{ background: "rgba(1,99,152,0.08)", border: "1px solid rgba(1,99,152,0.2)" }}
            >
              <p className="text-xs text-slate-400 font-medium mb-3">
                📬 Get updates in your inbox
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 rounded-lg px-3 py-2 text-xs text-slate-300 placeholder-slate-600 outline-none transition-colors"
                  style={{
                    background: "#060e1a",
                    border: "1px solid rgba(1,99,152,0.25)",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "rgba(1,99,152,0.6)"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(1,99,152,0.25)"}
                />
                <button
                  className="text-white text-xs font-semibold px-3 py-2 rounded-lg transition-all hover:-translate-y-0.5"
                  style={{ background: "#016398" }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#0284c7"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "#016398"}
                >
                  Join
                </button>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {[
                { label: "F", title: "Facebook" },
                { label: "In", title: "Instagram" },
                { label: "Li", title: "LinkedIn" },
                { label: "Tw", title: "Twitter" },
                { label: "Yt", title: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  title={s.title}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-xs font-bold transition-all duration-200"
                  style={{
                    background: "rgba(1,99,152,0.08)",
                    border: "1px solid rgba(1,99,152,0.18)",
                    color: "rgba(255,255,255,0.4)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#016398";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = "#016398";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(1,99,152,0.08)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                    e.currentTarget.style.borderColor = "rgba(1,99,152,0.18)";
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4
              className="text-[11px] font-bold tracking-[2.5px] uppercase mb-5 pb-3"
              style={{ color: "#7dd3fc", borderBottom: "2px solid rgba(1,99,152,0.5)" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Web Development", href: "/services/website-development" },
                { label: "UI/UX Design", href: "/services/ui-ux-design" },
                { label: "SEO Optimization", href: "/services/seo-optimization" },
                { label: "Social Media Marketing", href: "/services/social-media-marketing" },
                { label: "All Services", href: "/services" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm flex items-center gap-2.5 group transition-all duration-200"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#7dd3fc";
                      e.currentTarget.querySelector("span").style.background = "#016398";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                      e.currentTarget.querySelector("span").style.background = "rgba(1,99,152,0.3)";
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors"
                      style={{ background: "rgba(1,99,152,0.3)" }}
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4
              className="text-[11px] font-bold tracking-[2.5px] uppercase mb-5 pb-3"
              style={{ color: "#7dd3fc", borderBottom: "2px solid rgba(1,99,152,0.5)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about-us" },
                { label: "Contact Us", href: "/contact-us" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms-conditions" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm flex items-center gap-2.5 transition-all duration-200"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#7dd3fc";
                      e.currentTarget.querySelector("span").style.background = "#016398";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                      e.currentTarget.querySelector("span").style.background = "rgba(1,99,152,0.3)";
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors"
                      style={{ background: "rgba(1,99,152,0.3)" }}
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4
              className="text-[11px] font-bold tracking-[2.5px] uppercase mb-5 pb-3"
              style={{ color: "#7dd3fc", borderBottom: "2px solid rgba(1,99,152,0.5)" }}
            >
              Contact
            </h4>

            <div className="space-y-4">
              {[
                { icon: "📞", label: "Phone", value: "+91 91511 08805" },
                { icon: "✉️", label: "Email", value: "webnifysolutions@gmail.com" },
                { icon: "📍", label: "Location", value: "India" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded-xl flex-shrink-0"
                    style={{ background: "rgba(1,99,152,0.12)", border: "1px solid rgba(1,99,152,0.2)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase mb-0.5" style={{ color: "rgba(255,255,255,0.25)" }}>
                      {item.label}
                    </p>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/contact-us"
              className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "rgba(1,99,152,0.12)",
                border: "1px solid rgba(1,99,152,0.3)",
                color: "#7dd3fc",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#016398";
                e.currentTarget.style.borderColor = "#016398";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(1,99,152,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(1,99,152,0.12)";
                e.currentTarget.style.borderColor = "rgba(1,99,152,0.3)";
                e.currentTarget.style.color = "#7dd3fc";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Get a Free Quote →
            </Link>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(1,99,152,0.12)" }}
        >
          <p className="text-xs text-center sm:text-left" style={{ color: "rgba(255,255,255,0.25)" }}>
            © 2026{" "}
            <span className="font-semibold" style={{ color: "#016398" }}>Webnify Solutions</span>
            . All Rights Reserved.
          </p>

          <div className="flex gap-5">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-conditions" },
              { label: "Sitemap", href: "/sitemap.xml" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-xs transition-colors"
                style={{ color: "rgba(255,255,255,0.25)" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#7dd3fc"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.25)"}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}