"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import PopupTrigger from "@/components/PopupTrigger";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { icon: "💻", label: "Web Development", href: "/services/website-development", desc: "Custom websites & web apps" },
      { icon: "🎨", label: "UI/UX Design", href: "/services/ui-ux-design", desc: "Beautiful, user-first design" },
      { icon: "📈", label: "SEO Optimization", href: "/services/seo-optimization", desc: "Rank higher on Google" },
      { icon: "📣", label: "Social Media Marketing", href: "/services/social-media-marketing", desc: "Grow your brand online" },
    ],
  },
  { label: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* HEADER */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.98)",
          backdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid #e2e8f0" : "1px solid rgba(226,232,240,0.7)",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.07)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between h-[68px]">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#016398" }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-lg font-extrabold tracking-tight" style={{ color: "#0f172a" }}>
                Webnify<span style={{ color: "#016398" }}>Solutions</span>
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                    style={{ color: "#475569" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#016398";
                      e.currentTarget.style.background = "#f0f9ff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#475569";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {link.label}
                    {link.dropdown && (
                      <svg
                        className="w-3.5 h-3.5 transition-transform duration-200"
                        fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                        style={{ transform: activeDropdown === link.label ? "rotate(180deg)" : "rotate(0deg)" }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown */}
                  {link.dropdown && activeDropdown === link.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[560px]">
                      <div
                        className="rounded-2xl overflow-hidden p-4 grid grid-cols-2 gap-1.5"
                        style={{
                          background: "white",
                          border: "1px solid #e2e8f0",
                          boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(1,99,152,0.06)",
                        }}
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="flex gap-3 p-3 rounded-xl transition-all duration-200"
                            style={{ background: "transparent" }}
                            onMouseEnter={(e) => e.currentTarget.style.background = "#f0f9ff"}
                            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                          >
                            <div
                              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-base"
                              style={{ background: "#eff6ff", border: "1px solid #bfdbfe" }}
                            >
                              {item.icon}
                            </div>
                            <div>
                              <p className="text-sm font-semibold" style={{ color: "#0f172a" }}>{item.label}</p>
                              <p className="text-[11px] mt-0.5" style={{ color: "#94a3b8" }}>{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                        <div
                          className="col-span-2 mt-1 pt-3 flex items-center justify-between"
                          style={{ borderTop: "1px solid #f1f5f9" }}
                        >
                          <span className="text-xs" style={{ color: "#94a3b8" }}>Need a custom solution?</span>
                          <Link
                            href="/contact-us"
                            className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-all"
                            style={{ background: "#016398", color: "white" }}
                            onMouseEnter={(e) => e.currentTarget.style.background = "#0284c7"}
                            onMouseLeave={(e) => e.currentTarget.style.background = "#016398"}
                          >
                            Talk to us →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* DESKTOP CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <PopupTrigger
                className="px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                style={{ background: "#016398", color: "white", boxShadow: "0 4px 16px rgba(1,99,152,0.3)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#0284c7";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(1,99,152,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#016398";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(1,99,152,0.3)";
                }}
              >
                Get Free Quote
              </PopupTrigger>
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden flex flex-col items-center justify-center gap-[5px] w-10 h-10 rounded-xl"
              style={{ background: "#f0f9ff", border: "1px solid #bfdbfe" }}
              aria-label="Open menu"
            >
              <span className="w-5 h-0.5 rounded-full" style={{ background: "#016398" }} />
              <span className="w-5 h-0.5 rounded-full" style={{ background: "#016398" }} />
              <span className="w-3.5 h-0.5 rounded-full self-start ml-[5px]" style={{ background: "#016398" }} />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className="fixed inset-0 z-[60] lg:hidden transition-all duration-300"
        style={{
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(4px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      />

      {/* Mobile Menu */}
      <div
        className="fixed top-0 left-0 bottom-0 z-[70] lg:hidden flex flex-col"
        style={{
          width: "300px",
          background: "white",
          transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.32s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: menuOpen ? "4px 0 40px rgba(0,0,0,0.4)" : "none",
        }}
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between px-5 py-4 flex-shrink-0" style={{ borderBottom: "1px solid #f1f5f9" }}>
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#016398" }}>
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="font-extrabold text-slate-800 text-[16px] tracking-tight">
              Webnify<span style={{ color: "#016398" }}>Solutions</span>
            </span>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-full transition-all"
            style={{ background: "#f1f5f9", color: "#64748b" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "#e2e8f0"}
            onMouseLeave={(e) => e.currentTarget.style.background = "#f1f5f9"}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto px-3 py-3">
          {navLinks.map((link) => (
            <div key={link.label}>
              {!link.dropdown ? (
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all"
                  style={{ color: "#334155" }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#f8fafc"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                >
                  {link.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" style={{ color: "#94a3b8" }}>
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              ) : (
                <div>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                    className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all"
                    style={{ color: "#334155", background: mobileExpanded === link.label ? "#f0f9ff" : "transparent" }}
                    onMouseEnter={(e) => { if (mobileExpanded !== link.label) e.currentTarget.style.background = "#f8fafc"; }}
                    onMouseLeave={(e) => { if (mobileExpanded !== link.label) e.currentTarget.style.background = "transparent"; }}
                  >
                    <span style={{ color: mobileExpanded === link.label ? "#016398" : "#334155" }}>{link.label}</span>
                    <svg
                      className="w-4 h-4"
                      fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                      style={{
                        color: mobileExpanded === link.label ? "#016398" : "#94a3b8",
                        transform: mobileExpanded === link.label ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s",
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  <div style={{ maxHeight: mobileExpanded === link.label ? "600px" : "0", overflow: "hidden", transition: "max-height 0.3s ease" }}>
                    <div className="mx-2 mb-2 rounded-xl overflow-hidden" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                      {link.dropdown.map((item, idx) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 text-sm transition-all"
                          style={{ color: "#475569", borderBottom: idx < link.dropdown.length - 1 ? "1px solid #f1f5f9" : "none" }}
                          onMouseEnter={(e) => e.currentTarget.style.background = "#eff6ff"}
                          onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                        >
                          <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0" style={{ background: "rgba(1,99,152,0.1)" }}>
                            {item.icon}
                          </span>
                          <div>
                            <p className="font-medium text-slate-700 text-[13px]">{item.label}</p>
                            <p className="text-[11px]" style={{ color: "#94a3b8" }}>{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Panel Footer */}
        <div className="flex-shrink-0 px-4 py-5" style={{ borderTop: "1px solid #f1f5f9" }}>
          <Link
            href="/contact-us"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold text-white transition-all"
            style={{ background: "#016398", boxShadow: "0 4px 20px rgba(1,99,152,0.35)" }}
          >
            Get Free Quote →
          </Link>
          <p className="text-center text-[11px] mt-4" style={{ color: "#94a3b8" }}>© 2026 Webnify Solutions</p>
        </div>
      </div>
    </>
  );
}