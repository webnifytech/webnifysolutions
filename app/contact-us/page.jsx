"use client";
import { useState } from "react";

/* ─── Icons ─────────────────────────────────────────── */
const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path d="M4 4h16v16H4z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.81.32 1.6.59 2.35a2 2 0 0 1-.45 2L9 10a16 16 0 0 0 5 5l.93-.14a2 2 0 0 1 2 .45c.75.27 1.54.47 2.35.59A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const LocationIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path d="M12 21s-6-5.33-6-10a6 6 0 0 1 12 0c0 4.67-6 10-6 10z"/>
    <circle cx="12" cy="11" r="2"/>
  </svg>
);
const CheckIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

/* ─── Component ─────────────────────────────────────── */
export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-[#080c18] text-slate-100 font-sans">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-700/[0.05] blur-3xl
          w-[900px] h-[500px] rounded-full top-[-200px] left-1/2 -translate-x-1/2" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <span className="inline-block text-[11px] tracking-[3px] uppercase text-blue-400
            bg-blue-900/20 border border-blue-700/30 px-4 py-1.5 rounded-full mb-6">
            Contact Us
          </span>

          <h1 className="text-[clamp(34px,5vw,58px)] font-extrabold mb-6">
            Let’s Discuss Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-sky-400
              bg-clip-text text-transparent">
              Project & Growth
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-500 text-[16px] leading-relaxed">
            Have a project in mind or need help with web, SEO, or marketing?
            Fill out the form and our experts will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* ── CONTACT SECTION ─────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ── CONTACT INFO ─────────────────────────── */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#0d1424]/90 border border-blue-900/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>

              <div className="space-y-4 text-slate-400 text-sm">
                <div className="flex items-start gap-3">
                  <MailIcon />
                  <div>
                    <p className="font-semibold text-slate-200">Email</p>
                    <p>info@webnifysolutions.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <PhoneIcon />
                  <div>
                    <p className="font-semibold text-slate-200">Phone</p>
                    <p>+91 9XXXXXXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <LocationIcon />
                  <div>
                    <p className="font-semibold text-slate-200">Location</p>
                    <p>India (Serving Worldwide)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0d1424]/90 border border-blue-900/30 rounded-2xl p-6">
              <h4 className="font-bold mb-4">Why Work With Us?</h4>
              <ul className="space-y-3">
                {[
                  "Free consultation & project guidance",
                  "Transparent pricing & timelines",
                  "Dedicated project manager",
                  "Proven results-driven approach",
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-400">
                    <span className="w-5 h-5 rounded-full bg-blue-600/20
                      text-blue-400 flex items-center justify-center">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── FORM ─────────────────────────────────── */}
          <div className="lg:col-span-2">
            <div className="bg-[#0d1424]/90 border border-blue-900/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-[#080c18] border border-blue-900/40 rounded-xl
                    px-4 py-3 text-sm text-slate-300 focus:outline-none
                    focus:border-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-[#080c18] border border-blue-900/40 rounded-xl
                    px-4 py-3 text-sm text-slate-300 focus:outline-none
                    focus:border-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-[#080c18] border border-blue-900/40 rounded-xl
                    px-4 py-3 text-sm text-slate-300 focus:outline-none
                    focus:border-blue-500"
                />
                <select
                  className="bg-[#080c18] border border-blue-900/40 rounded-xl
                    px-4 py-3 text-sm text-slate-400 focus:outline-none
                    focus:border-blue-500"
                >
                  <option>Select Service</option>
                  <option>Website Development</option>
                  <option>SEO Optimization</option>
                  <option>Social Media Marketing</option>
                  <option>Paid Advertising</option>
                  <option>Other</option>
                </select>

                <textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="md:col-span-2 bg-[#080c18] border border-blue-900/40
                    rounded-xl px-4 py-3 text-sm text-slate-300
                    focus:outline-none focus:border-blue-500"
                />

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-500
                      rounded-xl font-semibold text-white transition
                      disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Submit Request"}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
