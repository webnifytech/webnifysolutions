"use client";
import { useState, useRef } from "react";

/* ── Icons ─────────────────────────────────────────────── */
const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.81.32 1.6.59 2.35a2 2 0 0 1-.45 2L9 10a16 16 0 0 0 5 5l.93-.14a2 2 0 0 1 2 .45c.75.27 1.54.47 2.35.59A2 2 0 0 1 22 16.92z" />
  </svg>
);
const LocationIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
    <path d="M12 22s-8-6.4-8-12a8 8 0 0 1 16 0c0 5.6-8 12-8 12z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const SpinIcon = () => (
  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

const trustPoints = [
  "50+ successful projects delivered",
  "Clients across Delhi, Noida & all India",
  "Response within 24 hours — usually faster",
  "Free strategy consultation, no obligation",
];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value.trim();
    const email = e.target[1].value.trim();
    const phone = e.target[2].value.trim();
    const service = e.target[3].value;
    const message = e.target[4].value.trim();

    let newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!phone) newErrors.phone = "Phone number is required";
    if (!message) newErrors.message = "Message is required";
    if (phone && phone.length < 10) newErrors.phone = "Enter valid phone number";

    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setErrors({});
    setLoading(true);
    setMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, service, message }),
      });
      const data = await res.json();
      if (data.success) { setMsg("success"); e.target.reset(); setCharCount(0); }
      else setMsg("error");
    } catch {
      setMsg("error");
    }
    setLoading(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .contact-page {
          font-family: 'Inter', sans-serif;
          background: #060a14;
          color: #e2e8f0;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          max-width: 100vw;
        }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float-orb { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:0.4} }

        .fade-up { animation: fade-up 0.65s ease both; }
        .d1 { animation-delay: 0.1s; }
        .d2 { animation-delay: 0.2s; }
        .d3 { animation-delay: 0.3s; }

        .shimmer-text {
          background: linear-gradient(90deg, #60a5fa 0%, #93c5fd 40%, #38bdf8 60%, #60a5fa 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .orb {
          position: absolute; border-radius: 9999px;
          filter: blur(90px); pointer-events: none;
          animation: float-orb 9s ease-in-out infinite;
          max-width: 100vw;
        }

        .grid-pattern {
          background-image:
            linear-gradient(rgba(59,130,246,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.025) 1px, transparent 1px);
          background-size: 72px 72px;
        }

        .badge {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 11px; letter-spacing: 3px; text-transform: uppercase;
          color: #60a5fa; background: rgba(59,130,246,0.08);
          border: 1px solid rgba(59,130,246,0.22); padding: 6px 18px; border-radius: 999px;
        }
        .badge::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: #60a5fa; animation: pulse-dot 2s infinite;
        }

        /* Glass card */
        .glass-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(99,179,237,0.12);
          border-radius: 24px;
        }

        /* Info card */
        .info-card {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 14px 16px;
          border-radius: 14px;
          border: 1px solid rgba(99,179,237,0.1);
          background: rgba(255,255,255,0.02);
          transition: all 0.25s;
          text-decoration: none;
        }
        .info-card:hover {
          background: rgba(59,130,246,0.06);
          border-color: rgba(99,179,237,0.25);
        }
        .info-icon {
          width: 38px; height: 38px; border-radius: 10px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(37,99,235,0.12); border: 1px solid rgba(59,130,246,0.2);
          color: #60a5fa;
        }

        /* Form styles */
        .c-input {
          width: 100%;
          padding: 13px 16px;
          border-radius: 10px;
          border: 1.5px solid rgba(99,179,237,0.2);
          background: rgba(255,255,255,0.04);
          font-size: 14px;
          color: #e2e8f0;
          outline: none;
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
        }
        .c-input::placeholder { color: #475569; }
        .c-input:focus {
          border-color: rgba(59,130,246,0.5);
          background: rgba(255,255,255,0.06);
          box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
        }
        .c-input.err { border-color: rgba(239,68,68,0.5); }
        select.c-input option { background: #0d1525; color: #e2e8f0; }

        .c-label {
          display: block; font-size: 11px; font-weight: 600;
          text-transform: uppercase; letter-spacing: 1px;
          color: #64748b; margin-bottom: 6px;
        }

        .c-field { margin-bottom: 16px; }

        .c-btn {
          width: 100%; padding: 14px;
          border-radius: 12px; border: none;
          background: linear-gradient(135deg, #2563eb, #0ea5e9);
          color: white; font-weight: 700; font-size: 15px;
          cursor: pointer; transition: all 0.25s;
          font-family: 'Inter', sans-serif;
          box-shadow: 0 8px 32px rgba(37,99,235,0.3);
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .c-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 16px 48px rgba(37,99,235,0.4);
        }
        .c-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .err-msg { color: #f87171; font-size: 11px; margin-top: 4px; display: block; }

        .success-box {
          background: linear-gradient(135deg, rgba(16,185,129,0.1), rgba(5,150,105,0.05));
          border: 1px solid rgba(16,185,129,0.3); border-radius: 14px;
          padding: 18px 20px; margin-bottom: 20px;
        }
        .error-box {
          background: linear-gradient(135deg, rgba(239,68,68,0.1), rgba(220,38,38,0.05));
          border: 1px solid rgba(239,68,68,0.3); border-radius: 14px;
          padding: 14px 18px; margin-bottom: 20px;
        }

        .trust-badge {
          display: flex; align-items: center; gap: 8px;
          font-size: 13px; color: #94a3b8;
        }
        .trust-badge-icon {
          width: 22px; height: 22px; border-radius: 6px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(37,99,235,0.15); color: #60a5fa;
        }

        .wa-btn {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 12px; border-radius: 12px; border: 1px solid rgba(37,211,102,0.3);
          background: rgba(37,211,102,0.06); color: #4ade80;
          font-size: 14px; font-weight: 600; cursor: pointer;
          text-decoration: none; transition: all 0.2s; font-family: 'Inter', sans-serif;
          margin-top: 12px;
        }
        .wa-btn:hover { background: rgba(37,211,102,0.12); border-color: rgba(37,211,102,0.5); }
        .wa-btn:hover { background: rgba(37,211,102,0.12); border-color: rgba(37,211,102,0.5); }
      `}</style>

      <div className="contact-page grid-pattern">
        <div className="orb" style={{ width: 500, height: 500, background: "rgba(37,99,235,0.08)", top: -100, left: "50%", transform: "translateX(-50%)" }} />

        {/* ── HERO ─────────────────────────────────────────── */}
        <section style={{ position: "relative", padding: "72px 24px 56px", textAlign: "center" }}>
          <div className="badge fade-up d1" style={{ display: "inline-flex", marginBottom: 20 }}>
            Get In Touch
          </div>

          <h1
            className="fade-up d2"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(28px, 4.5vw, 52px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-1.2px", marginBottom: 18, maxWidth: 700, margin: "0 auto 18px" }}
          >
            Let's Build Something <br />
            <span className="shimmer-text">Extraordinary Together</span>
          </h1>

          <p className="fade-up d3" style={{ maxWidth: 520, margin: "0 auto", color: "#64748b", fontSize: 16, lineHeight: 1.75 }}>
            Have a project in mind? Fill out the form below — our team will respond within 24 hours, typically much faster.
          </p>
        </section>

        {/* ── MAIN GRID ─────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.7fr] gap-6 items-start">

            {/* ── LEFT SIDEBAR ─────────────────────────── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

              {/* Contact Details */}
              <div className="glass-card" style={{ padding: 24 }}>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#64748b", marginBottom: 16 }}>Contact Details</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { icon: <MailIcon />, label: "Email", value: "webnifysolutions@gmail.com", href: "mailto:webnifysolutions@gmail.com" },
                    { icon: <PhoneIcon />, label: "Phone", value: "+91 9151108805", href: "tel:+919151108805" },
                    { icon: <LocationIcon />, label: "Location", value: "Delhi NCR — Serving All India", href: null },
                    { icon: <ClockIcon />, label: "Response Time", value: "Within 24 hours", href: null },
                  ].map((item) => (
                    <a key={item.label} href={item.href || "#"} className="info-card" style={{ color: "inherit" }} onClick={!item.href ? e => e.preventDefault() : undefined}>
                      <div className="info-icon">{item.icon}</div>
                      <div>
                        <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: "#64748b", marginBottom: 2 }}>{item.label}</p>
                        <p style={{ fontSize: 13.5, fontWeight: 500, color: "#cbd5e1", lineHeight: 1.4 }}>{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Trust Signals */}
              <div className="glass-card" style={{ padding: 24 }}>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#64748b", marginBottom: 16 }}>Why Choose Us</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {trustPoints.map(point => (
                    <div key={point} className="trust-badge">
                      <div className="trust-badge-icon"><CheckIcon /></div>
                      {point}
                    </div>
                  ))}
                </div>
              </div>

              {/* Services Quick */}
              <div className="glass-card" style={{ padding: 24 }}>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#64748b", marginBottom: 14 }}>Our Services</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {["Website Development", "SEO Optimization", "Social Media Marketing", "UI / UX Design"].map(s => (
                    <div key={s} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 10px", borderRadius: 10, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(99,179,237,0.08)" }}>
                      <span style={{ fontSize: 13, color: "#cbd5e1" }}>{s}</span>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3b82f6", opacity: 0.7 }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp quick link */}
              <a href="https://wa.me/919151108805?text=Hi%20Webnify%20Solutions!%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="wa-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#4ade80">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12.003 2C6.485 2 2 6.485 2 12.003c0 1.947.528 3.777 1.456 5.343L2 22l4.776-1.433A9.954 9.954 0 0012.003 22C17.521 22 22 17.521 22 12.003S17.521 2 12.003 2zm0 18.007a8.01 8.01 0 01-4.148-1.152l-.295-.177-3.075.923.878-3.07-.192-.308A7.998 7.998 0 014.003 12.003c0-4.412 3.589-8.003 8-8.003 4.411 0 8 3.591 8 8.003 0 4.412-3.589 8.004-8 8.004z"/>
                </svg>
                Chat on WhatsApp Directly
              </a>
            </div>

            {/* ── FORM ─────────────────────────────────────── */}
            <div className="glass-card p-6 md:p-9">
              <div className="mb-7">
                <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 24, fontWeight: 800, color: "#f1f5f9", marginBottom: 6, letterSpacing: "-0.4px" }}>
                  Send a Message
                </h2>
                <p style={{ color: "#64748b", fontSize: 14 }}>We read every message and respond personally.</p>
              </div>

              {/* Status */}
              {msg === "success" && (
                <div className="success-box">
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 22 }}>✅</span>
                    <div>
                      <p style={{ color: "#34d399", fontWeight: 700, fontSize: 15 }}>Message received!</p>
                      <p style={{ color: "#94a3b8", fontSize: 13, marginTop: 4 }}>
                        We'll be in touch within 24 hours. For urgent help,{" "}
                        <a href="tel:+919151108805" style={{ color: "#60a5fa", textDecoration: "underline" }}>call us now</a>.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {msg === "error" && (
                <div className="error-box">
                  <p style={{ color: "#f87171", fontSize: 14 }}>⚠️ Couldn't send message. Please try again or <a href="tel:+919151108805" style={{ color: "#60a5fa" }}>call us directly</a>.</p>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <div className="c-field">
                    <label className="c-label">Full Name *</label>
                    <input type="text" className={`c-input${errors.name ? " err" : ""}`} placeholder="Your full name" />
                    {errors.name && <span className="err-msg">{errors.name}</span>}
                  </div>

                  <div className="c-field">
                    <label className="c-label">Email Address</label>
                    <input type="email" placeholder="you@example.com" className="c-input" />
                  </div>

                  <div className="c-field">
                    <label className="c-label">Phone Number *</label>
                    <input type="tel" className={`c-input${errors.phone ? " err" : ""}`} placeholder="10-digit mobile number" />
                    {errors.phone && <span className="err-msg">{errors.phone}</span>}
                  </div>

                  <div className="c-field">
                    <label className="c-label">Service Required</label>
                    <select className="c-input" defaultValue="">
                      <option value="" disabled>Select a service…</option>
                      <option>Website Development</option>
                      <option>SEO Optimization</option>
                      <option>Social Media Marketing</option>
                      <option>UI / UX Design</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="c-field" style={{ gridColumn: "1 / -1" }}>
                    <label className="c-label">Message {charCount > 0 ? `· ${charCount}/1000` : ""} *</label>
                    <textarea
                      placeholder="Tell us about your project, goals, and timeline…"
                      rows={5}
                      required
                      maxLength={1000}
                      onChange={(e) => {
                        setCharCount(e.target.value.length);
                        if (errors.message) setErrors({ ...errors, message: "" });
                      }}
                      className={`c-input${errors.message ? " err" : ""}`}
                      style={{ resize: "none" }}
                    />
                    {errors.message && <span className="err-msg">{errors.message}</span>}
                  </div>

                  <div style={{ gridColumn: "1 / -1" }}>
                    <button type="submit" disabled={loading} className="c-btn">
                      {loading ? <><SpinIcon /> Sending…</> : <>Submit Request <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></>}
                    </button>
                    <p style={{ textAlign: "center", fontSize: 12, color: "#475569", marginTop: 14 }}>
                      🔒 Your information is secure and never shared.{" "}
                      <a href="/privacy-policy" style={{ color: "#64748b", textDecoration: "underline" }}>Privacy Policy</a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* ── PROFESSIONAL TRUST STRIP ──────────────────── */}
        <section style={{ background: "rgba(37,99,235,0.04)", borderTop: "1px solid rgba(99,179,237,0.1)", padding: "48px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#64748b", textTransform: "uppercase", letterSpacing: 2, marginBottom: 28 }}>
              Trusted by businesses across India
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24 }}>
              {[
                { emoji: "⭐", label: "5-Star Client Reviews" },
                { emoji: "🇮🇳", label: "Delhi & Noida Based" },
                { emoji: "🔒", label: "100% Data Privacy" },
                { emoji: "⚡", label: "Fast Delivery" },
                { emoji: "📞", label: "24hr Response Time" },
                { emoji: "🤝", label: "Long-Term Partnership" },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 18 }}>{item.emoji}</span>
                  <span style={{ fontSize: 13, color: "#94a3b8", fontWeight: 500 }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
