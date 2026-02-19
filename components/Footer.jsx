import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-blue-900/15 bg-[#060a14]">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* BRAND */}
          <div>
            <div className="text-[22px] font-extrabold text-slate-100 mb-4 tracking-tight">
              Webnify<span className="text-blue-500">Solutions</span>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              Scalable digital solutions — websites, SEO, social media marketing,
              and UI/UX design for modern businesses.
            </p>

            {/* Newsletter */}
            <div className="bg-blue-900/10 border border-blue-900/20 rounded-xl p-4 mb-6">
              <p className="text-xs text-slate-400 font-medium mb-3">
                📬 Get updates in your inbox
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-[#080c18] border border-blue-900/25 rounded-lg
                  px-3 py-2 text-xs text-slate-300 placeholder-slate-600 outline-none
                  focus:border-blue-600/60 transition-colors"
                />
                <button
                  className="bg-blue-600 hover:bg-blue-500 text-white text-xs
                  font-semibold px-3 py-2 rounded-lg transition-colors"
                >
                  Join
                </button>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {["F", "In", "Li", "Tw", "Yt"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-lg
                  bg-blue-900/10 border border-blue-900/20 text-slate-500
                  hover:text-blue-400 hover:border-blue-600/35 text-xs font-bold
                  transition-all duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[2.5px] uppercase
              text-slate-300 mb-5 pb-3 border-b-2 border-blue-600/40">
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
                    className="text-sm text-slate-500 hover:text-blue-400
                    flex items-center gap-2.5 group transition-all duration-200"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-blue-900
                      group-hover:bg-blue-500 flex-shrink-0 transition-colors"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[2.5px] uppercase
              text-slate-300 mb-5 pb-3 border-b-2 border-blue-600/40">
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
                    className="text-sm text-slate-500 hover:text-blue-400
                    flex items-center gap-2.5 group transition-all duration-200"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-blue-900
                      group-hover:bg-blue-500 flex-shrink-0 transition-colors"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[2.5px] uppercase
              text-slate-300 mb-5 pb-3 border-b-2 border-blue-600/40">
              Contact
            </h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 flex items-center justify-center
                  bg-blue-900/10 border border-blue-900/20 rounded-xl">
                  📞
                </div>
                <div>
                  <p className="text-[10px] text-slate-600 font-semibold uppercase">
                    Phone
                  </p>
                  <p className="text-sm text-slate-400">+91 63064 59872</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 flex items-center justify-center
                  bg-blue-900/10 border border-blue-900/20 rounded-xl">
                  ✉️
                </div>
                <div>
                  <p className="text-[10px] text-slate-600 font-semibold uppercase">
                    Email
                  </p>
                  <p className="text-sm text-slate-400">
                    webnifysolutions@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 flex items-center justify-center
                  bg-blue-900/10 border border-blue-900/20 rounded-xl">
                  📍
                </div>
                <div>
                  <p className="text-[10px] text-slate-600 font-semibold uppercase">
                    Location
                  </p>
                  <p className="text-sm text-slate-400">India</p>
                </div>
              </div>
            </div>

            <Link
              href="/contact-us"
              className="mt-6 flex items-center justify-center gap-2 w-full
              py-3 bg-blue-900/15 hover:bg-blue-900/25 border border-blue-700/25
              hover:border-blue-500/45 rounded-xl text-sm font-semibold
              text-blue-400 hover:text-blue-300 transition-all duration-300"
            >
              Get a Free Quote →
            </Link>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-blue-900/10 pt-6 flex flex-col sm:flex-row
          items-center justify-between gap-3">
          <p className="text-xs text-slate-600 text-center sm:text-left">
            © 2026{" "}
            <span className="text-blue-500 font-semibold">
              Webnify Solutions
            </span>
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
                className="text-xs text-slate-600 hover:text-blue-400 transition-colors"
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
