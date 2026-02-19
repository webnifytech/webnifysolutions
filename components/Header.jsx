"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { icon: "💻", label: "Web Development", href: "/services/website-development" },
      { icon: "🎨", label: "UI/UX Design", href: "/services/ui-ux-design" },
      { icon: "📈", label: "SEO Optimization", href: "/services/seo-optimization" },
      { icon: "📣", label: "Social Media Marketing", href: "/services/social-media-marketing" },
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled
        ? "bg-[#060a14]/95 backdrop-blur-xl border-b border-blue-900/25 shadow-2xl"
        : "bg-transparent"}`}
    >
      {/* ── TOP BAR ───────────────────────── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-[70px]">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700
              flex items-center justify-center shadow-lg">
              <span className="text-white font-extrabold text-sm">W</span>
            </div>
            <span className="text-lg font-extrabold text-slate-100">
              Webnify<span className="text-blue-500">Solutions</span>
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
                  className="px-4 py-2 rounded-xl text-sm font-medium
                    text-slate-400 hover:text-blue-300 hover:bg-blue-900/15"
                >
                  {link.label}
                </Link>

                {link.dropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[520px]">
                    <div className="bg-[#0a0f1e]/98 border border-blue-900/30
                      rounded-2xl shadow-2xl overflow-hidden p-3 grid grid-cols-2 gap-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="flex gap-3 p-3 rounded-xl
                            hover:bg-blue-900/15 transition"
                        >
                          <span className="text-xl">{item.icon}</span>
                          <div>
                            <p className="text-sm font-semibold text-slate-200">{item.label}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact-us"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500
                text-white text-sm font-semibold rounded-xl"
            >
              Get Free Quote
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5
              rounded-xl bg-blue-900/15 border border-blue-900/25"
          >
            <span className={`w-5 h-0.5 bg-slate-300 ${menuOpen && "rotate-45 translate-y-2"}`} />
            <span className={`w-5 h-0.5 bg-slate-300 ${menuOpen && "opacity-0"}`} />
            <span className={`w-5 h-0.5 bg-slate-300 ${menuOpen && "-rotate-45 -translate-y-2"}`} />
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU ───────────────────── */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden
        ${menuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-[#070b14]/98 border-t border-blue-900/20 px-6 py-6 space-y-2">

          {navLinks.map((link) => (
            <div key={link.label}>
              {!link.dropdown ? (
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-slate-300
                    hover:bg-blue-900/20 transition"
                >
                  {link.label}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === link.label ? null : link.label
                      )
                    }
                    className="w-full flex justify-between items-center
                      px-4 py-3 rounded-xl text-slate-300
                      hover:bg-blue-900/20 transition"
                  >
                    {link.label}
                    <span className={`transition-transform ${mobileExpanded === link.label ? "rotate-180" : ""}`}>
                      ⌄
                    </span>
                  </button>

                  {mobileExpanded === link.label && (
                    <div className="ml-4 mt-2 border-l border-blue-900/30 pl-4 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl
                            text-sm text-slate-400 hover:bg-blue-900/15 transition"
                        >
                          <span>{item.icon}</span>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}

          <Link
            href="/contact-us"
            onClick={() => setMenuOpen(false)}
            className="block text-center mt-4 py-3 bg-blue-600
              rounded-xl text-white font-semibold"
          >
            Get Free Quote →
          </Link>
        </div>
      </div>
    </header>
  );
}
