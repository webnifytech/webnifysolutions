"use client";
import { useState, useEffect, useRef } from "react";

/* ─── SVG Icons ──────────────────────────────────────── */
const MailIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    viewBox="0 0 24 24"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const PhoneIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    viewBox="0 0 24 24"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.81.32 1.6.59 2.35a2 2 0 0 1-.45 2L9 10a16 16 0 0 0 5 5l.93-.14a2 2 0 0 1 2 .45c.75.27 1.54.47 2.35.59A2 2 0 0 1 22 16.92z" />
  </svg>
);
const LocationIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    viewBox="0 0 24 24"
  >
    <path d="M12 22s-8-6.4-8-12a8 8 0 0 1 16 0c0 5.6-8 12-8 12z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const ClockIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const ArrowIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);
const SpinIcon = () => (
  <svg
    className="w-5 h-5 animate-spin"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

/* ─── Floating Orbs Background ─────────────────────────── */
const FloatingOrbs = () => (
  <div
    className="absolute inset-0 overflow-hidden pointer-events-none"
    aria-hidden="true"
  >
    <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-600/10 to-cyan-500/5 blur-[100px] animate-float-slow" />
    <div className="absolute bottom-[0%] right-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-indigo-700/10 to-blue-500/5 blur-[120px] animate-float-medium" />
    <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-gradient-to-bl from-sky-500/8 to-blue-800/5 blur-[80px] animate-float-fast" />
    {/* Grid lines */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
  </div>
);

/* ─── Contact Info Card ──────────────────────────────── */
const InfoCard = ({ icon, label, value, href, delay }) => (
  <a
    href={href || "#"}
    className="group flex items-start gap-4 p-4 rounded-2xl border border-blue-900/20 bg-white/[0.02] hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-300 animate-fade-up"
    style={{ animationDelay: delay }}
  >
    <div className="mt-0.5 flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-600/20 group-hover:text-blue-300 transition-all duration-300 flex-shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-0.5">
        {label}
      </p>
      <p className="text-slate-200 text-sm font-medium leading-snug group-hover:text-white transition-colors">
        {value}
      </p>
    </div>
  </a>
);

/* ─── Input Field ────────────────────────────────────── */
const Field = ({ label, children, className = "" }) => (
  <div className={`flex flex-col gap-2 ${className}`}>
    <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
      {label}
    </label>
    {children}
  </div>
);

const inputClass =
  "w-full bg-white/[0.03] border border-blue-900/30 rounded-xl px-4 py-3.5 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all duration-300 focus:border-blue-500/60 focus:bg-white/[0.05] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.12)] hover:border-blue-700/40";

/* ─── Main Component ─────────────────────────────────── */
export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(""); // "success" | "error" | ""
  const [charCount, setCharCount] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value.trim();
    const email = e.target[1].value.trim();
    const phone = e.target[2].value.trim();
    const service = e.target[3].value;
    const message = e.target[4].value.trim();

    let newErrors = {};

    // ✅ VALIDATION
    if (!name) newErrors.name = "Name is required";
    if (!phone) newErrors.phone = "Phone number is required";
    if (!message) newErrors.message = "Message is required";

    // optional: phone format check
    if (phone && phone.length < 10) {
      newErrors.phone = "Enter valid phone number";
    }

    // अगर error hai → stop submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    setMsg("");

    const formData = { name, email, phone, service, message };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMsg("success");
        e.target.reset();
      } else {
        setMsg("error");
      }
    } catch {
      setMsg("error");
    }

    setLoading(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --font-display: 'Syne', sans-serif;
          --font-body: 'DM Sans', sans-serif;
        }

        * { box-sizing: border-box; }

        body {
          font-family: var(--font-body);
          background: #070b15;
        }

        h1, h2, h3 {
          font-family: var(--font-display);
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59,130,246,0.3); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(59,130,246,0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59,130,246,0); }
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-fade-up { animation: fade-up 0.6s ease forwards; opacity: 0; }
        .animate-spin { animation: spin 1.2s linear infinite; }
        .animate-pulse-ring { animation: pulse-ring 2s ease-in-out infinite; }

        .shimmer-text {
          background: linear-gradient(90deg, #60a5fa 0%, #93c5fd 40%, #38bdf8 60%, #60a5fa 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .glow-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .glow-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .glow-btn:hover::before { opacity: 1; }
        .glow-btn:hover { transform: translateY(-2px); box-shadow: 0 20px 60px rgba(59,130,246,0.35); }
        .glow-btn:active { transform: translateY(0); }

        select option { background: #0d1525; color: #e2e8f0; }

        .card-glass {
          background: rgba(13, 20, 40, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(59, 130, 246, 0.12);
        }

        .success-bar {
          background: linear-gradient(135deg, rgba(16,185,129,0.1), rgba(5,150,105,0.05));
          border: 1px solid rgba(16,185,129,0.3);
        }
        .error-bar {
          background: linear-gradient(135deg, rgba(239,68,68,0.1), rgba(220,38,38,0.05));
          border: 1px solid rgba(239,68,68,0.3);
        }

        textarea::-webkit-scrollbar { width: 4px; }
        textarea::-webkit-scrollbar-track { background: transparent; }
        textarea::-webkit-scrollbar-thumb { background: rgba(59,130,246,0.3); border-radius: 2px; }
      `}</style>

      <div
        className="min-h-screen bg-[#070b15] text-slate-100 relative"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <FloatingOrbs />

        {/* ── HERO ───────────────────────────────────────── */}
        <section className="relative py-12 px-6 text-center">
          <div
            className="animate-fade-up inline-flex items-center gap-2 text-[11px] tracking-[3px] uppercase text-blue-400 bg-blue-950/40 border border-blue-800/30 px-5 py-2 rounded-full mb-8"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-ring inline-block" />
            Get In Touch
          </div>

          <h1
            className="animate-fade-up text-[clamp(24px,3.5vw,48px)] font-extrabold leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto"
            style={{ fontFamily: "'Syne', sans-serif", animationDelay: "0.2s" }}
          >
            Let's Build Something
            <br />
            <span className="shimmer-text">Extraordinary Together</span>
          </h1>

          <p
            className="animate-fade-up max-w-xl mx-auto text-slate-400 text-base leading-relaxed mb-0"
            style={{ animationDelay: "0.35s" }}
          >
            Have a project in mind? Fill out the form and our team will respond
            within 24 hours — typically much faster.
          </p>
        </section>

        {/* ── MAIN GRID ──────────────────────────────────── */}
        <section className="relative max-w-6xl mx-auto px-6 pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* ── LEFT SIDEBAR ──────────────────────────── */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {/* Contact Info */}
              <div
                className="card-glass rounded-3xl p-6 animate-fade-up"
                style={{ animationDelay: "0.4s" }}
              >
                <p className="text-xs uppercase tracking-widest font-semibold text-slate-500 mb-5">
                  Contact Details
                </p>
                <div className="flex flex-col gap-3">
                  <InfoCard
                    icon={<MailIcon />}
                    label="Email"
                    value="webnifysolutions@gmail.com"
                    href="mailto:webnifysolutions@gmail.com"
                    delay="0.45s"
                  />
                  <InfoCard
                    icon={<PhoneIcon />}
                    label="Phone"
                    value="+91 9151108805"
                    href="tel:+919151108805"
                    delay="0.5s"
                  />
                  <InfoCard
                    icon={<LocationIcon />}
                    label="Location"
                    value="India — Serving Worldwide"
                    delay="0.55s"
                  />
                  <InfoCard
                    icon={<ClockIcon />}
                    label="Response Time"
                    value="Within 24 hours"
                    delay="0.6s"
                  />
                </div>
              </div>

              {/* Services Quick Links */}
              <div
                className="card-glass rounded-3xl p-6 animate-fade-up"
                style={{ animationDelay: "0.65s" }}
              >
                <p className="text-xs uppercase tracking-widest font-semibold text-slate-500 mb-4">
                  Our Services
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    "Website Development",
                    "SEO Optimization",
                    "Social Media Marketing",
                    "Paid Advertising",
                  ].map((s) => (
                    <div
                      key={s}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group cursor-default"
                    >
                      <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                        {s}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── FORM ──────────────────────────────────── */}
            <div
              className="lg:col-span-3 card-glass rounded-3xl p-8 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="mb-8">
                <h2
                  className="text-2xl font-bold mb-1.5"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Send a Message
                </h2>
                <p className="text-slate-500 text-sm">
                  We read every message and respond personally.
                </p>
              </div>

              {/* Status Messages */}
              {msg === "success" && (
                <div className="success-bar rounded-2xl px-5 py-4 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-xl leading-none">✅</span>
                    <div>
                      <p className="text-green-400 font-semibold text-sm">
                        Message received!
                      </p>
                      <p className="text-slate-400 text-xs mt-0.5">
                        We'll be in touch within 24 hours. For urgent help,{" "}
                        <a
                          href="tel:+919151108805"
                          className="text-blue-400 underline underline-offset-2"
                        >
                          call us now
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {msg === "error" && (
                <div className="error-bar rounded-2xl px-5 py-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xl leading-none">⚠️</span>
                    <p className="text-red-400 text-sm font-medium">
                      Couldn't send message. Please try again or call us
                      directly.
                    </p>
                  </div>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Full Name">
                    <input type="text" className={inputClass} />
                    {errors.name && (
                      <p className="text-red-400 text-xs">{errors.name}</p>
                    )}
                  </Field>

                  <Field label="Email Address">
                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Phone Number">
                    <input type="tel" className={inputClass} />
                    {errors.phone && (
                      <p className="text-red-400 text-xs">{errors.phone}</p>
                    )}
                  </Field>

                  <Field label="Service Required">
                    <select className={inputClass} defaultValue="">
                      <option value="" disabled>
                        Select a service…
                      </option>
                      <option>Website Development</option>
                      <option>SEO Optimization</option>
                      <option>Social Media Marketing</option>
                      <option>Paid Advertising</option>
                      <option>Other</option>
                    </select>
                  </Field>

               <Field
  label={`Message ${charCount > 0 ? `· ${charCount}/1000` : ""}`}
  className="md:col-span-2"
>
  <textarea
    placeholder="Tell us about your project, goals, and timeline…"
    rows={5}
    required
    maxLength={1000}
    onChange={(e) => {
      setCharCount(e.target.value.length);

      // error remove while typing
      if (errors.message) {
        setErrors({ ...errors, message: "" });
      }
    }}
    className={`${inputClass} resize-none`}
  />

  {/* ✅ ERROR MESSAGE */}
  {errors.message && (
    <p className="text-red-400 text-xs mt-1">{errors.message}</p>
  )}
</Field>

                  <div className="md:col-span-2 mt-1">
                    <button
                      type="submit"
                      disabled={loading}
                      className="glow-btn w-full flex items-center justify-center gap-3 py-4 px-8 rounded-2xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-blue-500 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:transform-none"
                    >
                      {loading ? (
                        <>
                          <SpinIcon />
                          <span>Sending…</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <ArrowIcon />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-600 mt-4">
                      By submitting, you agree to our{" "}
                      <a
                        href="#"
                        className="text-slate-500 underline underline-offset-2 hover:text-slate-300 transition-colors"
                      >
                        Privacy Policy
                      </a>
                      . No spam, ever.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
