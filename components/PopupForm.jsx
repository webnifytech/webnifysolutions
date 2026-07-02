"use client";
import { useState, useEffect, useCallback } from "react";

const SERVICES = [
  "Website Development",
  "SEO Optimization",
  "Social Media Marketing",
  "UI / UX Design",
  "Brand Identity",
  "Other",
];

export default function PopupForm() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // "success" | "error"
  const [form, setForm] = useState({ name: "", phone: "", city: "", service: "" });
  const [errors, setErrors] = useState({});

  const openPopup = useCallback(() => setOpen(true), []);

  /* ── Trigger logic: open after 7s, global event, reopen after 2min on close ── */
  useEffect(() => {
    const firstTimer = setTimeout(() => setOpen(true), 7000);
    // Listen for manual trigger from any button
    window.addEventListener("open-popup", openPopup);
    return () => {
      clearTimeout(firstTimer);
      window.removeEventListener("open-popup", openPopup);
    };
  }, [openPopup]);

  const handleClose = () => {
    setOpen(false);
    setStatus("");
    setTimeout(() => setOpen(true), 120000); // reappear after 2 min
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim() || form.phone.trim().length < 10) e.phone = "Valid 10-digit number required";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.service) e.service = "Please select a service";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: `City: ${form.city}`,
          service: form.service,
          message: `Enquiry via Popup Form\nCity: ${form.city}\nService: ${form.service}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", phone: "", city: "", service: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setLoading(false);
  };

  if (!open) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .popup-overlay {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(6,10,20,0.85);
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
          animation: overlay-in 0.3s ease;
        }
        @keyframes overlay-in {
          from { opacity: 0; } to { opacity: 1; }
        }

        .popup-box {
          width: 100%; max-width: 860px;
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          box-shadow: 0 40px 120px rgba(0,0,0,0.45);
          animation: popup-in 0.4s cubic-bezier(0.34,1.56,0.64,1);
          max-height: 85vh;
        }
        @keyframes popup-in {
          from { opacity: 0; transform: scale(0.88) translateY(24px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }

        .popup-left {
          flex: 0 0 42%;
          background: linear-gradient(145deg, #016398 0%, #0284c7 40%, #0ea5e9 100%);
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .popup-left::before {
          content: '';
          position: absolute;
          width: 260px; height: 260px;
          border-radius: 50%;
          background: rgba(255,255,255,0.07);
          top: -80px; right: -80px;
        }
        .popup-left::after {
          content: '';
          position: absolute;
          width: 180px; height: 180px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          bottom: -50px; left: -50px;
        }

        .popup-right {
          flex: 1;
          padding: 36px 36px 32px;
          overflow-y: auto;
          background: #fff;
        }

        .popup-close {
          position: absolute;
          top: 14px; right: 16px;
          width: 32px; height: 32px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.18);
          color: white;
          font-size: 18px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          z-index: 2;
          transition: background 0.2s;
        }
        .popup-close:hover { background: rgba(255,255,255,0.3); }

        .popup-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 10px;
          border: 1.5px solid #e2e8f0;
          font-size: 14px;
          color: #0f172a;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: 'Inter', sans-serif;
          background: #f8fafc;
        }
        .popup-input:focus {
          border-color: #016398;
          box-shadow: 0 0 0 3px rgba(1,99,152,0.12);
          background: #fff;
        }
        .popup-input.err { border-color: #ef4444; }

        .popup-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%2364748b' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
        }

        .popup-btn {
          width: 100%;
          padding: 13px;
          border-radius: 10px;
          border: none;
          background: linear-gradient(135deg, #016398, #0284c7);
          color: white;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.25s;
          font-family: 'Inter', sans-serif;
          box-shadow: 0 4px 20px rgba(1,99,152,0.3);
        }
        .popup-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #0284c7, #0ea5e9);
          box-shadow: 0 8px 32px rgba(1,99,152,0.4);
          transform: translateY(-1px);
        }
        .popup-btn:disabled { opacity: 0.65; cursor: not-allowed; }

        .err-text { color: #ef4444; font-size: 11px; margin-top: 3px; }

        .badge-chip {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 999px;
          padding: 4px 12px;
          font-size: 11px;
          color: rgba(255,255,255,0.9);
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .trust-row {
          display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px;
        }
        .trust-item {
          display: flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.12);
          border-radius: 8px; padding: 6px 10px;
          font-size: 12px; color: rgba(255,255,255,0.85);
        }

        @media (max-width: 640px) {
          .popup-left { display: none; }
          .popup-box { max-width: 420px; }
        }
      `}</style>

      <div className="popup-overlay" onClick={(e) => e.target === e.currentTarget && handleClose()}>
        <div className="popup-box" style={{ fontFamily: "'Inter', sans-serif" }}>

          {/* ── LEFT SIDE ── */}
          <div className="popup-left">
            <button className="popup-close" onClick={handleClose} aria-label="Close">×</button>

            {/* Illustration */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="badge-chip" style={{ marginBottom: 20 }}>🚀 Free Consultation</div>

              <h2 style={{ fontSize: 26, fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: 14 }}>
                Let's Grow Your<br />Business Online
              </h2>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.78)", lineHeight: 1.65, marginBottom: 24 }}>
                Get a free strategy session with our digital experts. We'll help you rank on Google,
                build your brand, and drive real results.
              </p>

              {/* SVG Illustration */}
              <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 260, opacity: 0.92 }}>
                {/* Laptop */}
                <rect x="40" y="60" width="160" height="100" rx="10" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
                <rect x="50" y="70" width="140" height="82" rx="4" fill="rgba(255,255,255,0.08)" />
                {/* Screen content bars */}
                <rect x="62" y="82" width="80" height="7" rx="3" fill="rgba(255,255,255,0.5)" />
                <rect x="62" y="95" width="55" height="5" rx="2.5" fill="rgba(255,255,255,0.3)" />
                <rect x="62" y="106" width="100" height="5" rx="2.5" fill="rgba(255,255,255,0.2)" />
                <rect x="62" y="117" width="70" height="5" rx="2.5" fill="rgba(255,255,255,0.2)" />
                {/* Chart bars */}
                <rect x="140" y="110" width="14" height="30" rx="3" fill="rgba(255,255,255,0.4)" />
                <rect x="158" y="100" width="14" height="40" rx="3" fill="rgba(255,255,255,0.55)" />
                <rect x="176" y="88" width="14" height="52" rx="3" fill="rgba(255,255,255,0.7)" />
                {/* Stand */}
                <rect x="100" y="160" width="80" height="8" rx="4" fill="rgba(255,255,255,0.25)" />
                <rect x="118" y="155" width="44" height="10" rx="2" fill="rgba(255,255,255,0.18)" />
                {/* Growth arrow */}
                <path d="M220 50 L240 30" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" strokeLinecap="round" />
                <polyline points="232,30 240,30 240,38" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                {/* Decorative dots */}
                <circle cx="220" cy="50" r="5" fill="rgba(255,255,255,0.5)" />
                <circle cx="30" cy="100" r="4" fill="rgba(255,255,255,0.3)" />
                <circle cx="250" cy="90" r="3" fill="rgba(255,255,255,0.3)" />
              </svg>

              <div className="trust-row">
                {["50+ Projects", "Local SEO Expert", "Delhi & NCR"].map(t => (
                  <div key={t} className="trust-item">
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT SIDE ── */}
          <div className="popup-right">
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "#0f172a" }}>Get Free Consultation</h3>
                <button
                  onClick={handleClose}
                  style={{ background: "#f1f5f9", border: "none", borderRadius: "50%", width: 42, height: 42, cursor: "pointer", fontSize: 26, color: "#3261a3ff", display: "flex", alignItems: "center", justifyContent: "center" }}
                  aria-label="Close"
                >×</button>
              </div>
              <p style={{ fontSize: 13, color: "#64748b", marginTop: 4 }}>Fill in your details and we'll call you back within 30 minutes.</p>
            </div>

            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h4 style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>Thank You!</h4>
                <p style={{ color: "#64748b", fontSize: 14 }}>We've received your enquiry. Our team will contact you shortly.</p>
                <button onClick={handleClose} className="popup-btn" style={{ marginTop: 24, width: "auto", padding: "10px 28px" }}>Close</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

                  {/* Name */}
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "#475569", display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.5px" }}>Full Name *</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={e => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                      className={`popup-input${errors.name ? " err" : ""}`}
                    />
                    {errors.name && <p className="err-text">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "#475569", display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.5px" }}>Mobile Number *</label>
                    <input
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={form.phone}
                      maxLength={10}
                      onChange={e => { setForm({ ...form, phone: e.target.value.replace(/\D/g, "") }); setErrors({ ...errors, phone: "" }); }}
                      className={`popup-input${errors.phone ? " err" : ""}`}
                    />
                    {errors.phone && <p className="err-text">{errors.phone}</p>}
                  </div>

                  {/* City */}
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "#475569", display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.5px" }}>City *</label>
                    <input
                      type="text"
                      placeholder="e.g. Delhi, Noida, Mumbai..."
                      value={form.city}
                      onChange={e => { setForm({ ...form, city: e.target.value }); setErrors({ ...errors, city: "" }); }}
                      className={`popup-input${errors.city ? " err" : ""}`}
                    />
                    {errors.city && <p className="err-text">{errors.city}</p>}
                  </div>

                  {/* Service */}
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "#475569", display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.5px" }}>Service Interest *</label>
                    <select
                      value={form.service}
                      onChange={e => { setForm({ ...form, service: e.target.value }); setErrors({ ...errors, service: "" }); }}
                      className={`popup-input popup-select${errors.service ? " err" : ""}`}
                    >
                      <option value="">Select a service...</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <p className="err-text">{errors.service}</p>}
                  </div>

                  {status === "error" && (
                    <p style={{ color: "#ef4444", fontSize: 12, background: "#fef2f2", padding: "10px 14px", borderRadius: 8 }}>
                      ⚠️ Something went wrong. Please try again or call us directly.
                    </p>
                  )}

                  <button type="submit" disabled={loading} className="popup-btn" style={{ marginTop: 4 }}>
                    {loading ? "Sending..." : "Get Free Consultation →"}
                  </button>

                  <p style={{ textAlign: "center", fontSize: 11, color: "#94a3b8" }}>
                    🔒 100% Secure. No spam, ever.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </>
  );
}
