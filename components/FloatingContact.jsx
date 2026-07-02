"use client";
import { useState } from "react";

const WA_NUMBER = "919151108805";
const WA_MESSAGE = encodeURIComponent("Hi Webnify Solutions! I'm interested in your digital services. Please share more details.");

const SERVICES = [
  "Website Development",
  "SEO Optimization",
  "Social Media Marketing",
  "UI / UX Design",
  "Brand Identity",
  "Other",
];

export default function FloatingContact() {
  const [formOpen, setFormOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // "success" | "error"
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim() || form.phone.trim().length < 10) e.phone = "Valid phone required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: "Via Floating Contact Button",
          service: form.service || "Not specified",
          message: form.message,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
      if (data.success) setForm({ name: "", phone: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .float-wrap {
          position: fixed;
          right: 20px;
          bottom: 28px;
          z-index: 8000;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
          font-family: 'Inter', sans-serif;
        }

        /* Contact Drawer */
        .contact-drawer {
          position: absolute;
          bottom: 110px;
          right: 0;
          width: 320px;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 24px 80px rgba(0,0,0,0.25);
          overflow: hidden;
          transform-origin: bottom right;
          animation: drawer-in 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        @keyframes drawer-in {
          from { opacity: 0; transform: scale(0.85) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }

        .drawer-header {
          background: linear-gradient(135deg, #016398, #0284c7);
          padding: 16px 18px 14px;
          display: flex; align-items: center; justify-content: space-between;
        }

        .drawer-body { padding: 16px 18px 18px; }

        .f-input {
          width: 100%;
          padding: 10px 13px;
          border-radius: 9px;
          border: 1.5px solid #e2e8f0;
          font-size: 13px;
          color: #0f172a;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: 'Inter', sans-serif;
          background: #f8fafc;
          margin-bottom: 0;
        }
        .f-input:focus {
          border-color: #016398;
          box-shadow: 0 0 0 3px rgba(1,99,152,0.1);
          background: #fff;
        }
        .f-input.err { border-color: #ef4444; }

        .f-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none' stroke='%2364748b' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
        }

        .f-btn {
          width: 100%;
          padding: 11px;
          border-radius: 9px;
          border: none;
          background: linear-gradient(135deg, #016398, #0284c7);
          color: white;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
        }
        .f-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #0284c7, #0ea5e9);
          transform: translateY(-1px);
        }
        .f-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .f-err { color: #ef4444; font-size: 11px; margin-top: 2px; display: block; }

        .f-field { margin-bottom: 10px; }

        /* Floating Buttons */
        .float-btn {
          width: 54px; height: 54px;
          border-radius: 50%;
          border: none;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          position: relative;
          box-shadow: 0 6px 24px rgba(0,0,0,0.2);
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
        }
        .float-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 10px 32px rgba(0,0,0,0.28);
        }

        .float-btn .tooltip {
          position: absolute;
          right: 62px;
          background: #0f172a;
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          padding: 5px 10px;
          border-radius: 7px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s;
        }
        .float-btn:hover .tooltip { opacity: 1; }

        /* Pulse ring on WhatsApp */
        .wa-pulse::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid #25d366;
          animation: wa-ring 2s ease-out infinite;
        }
        @keyframes wa-ring {
          0%   { transform: scale(1);   opacity: 0.7; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        .drawer-close {
          background: rgba(255,255,255,0.18);
          border: none; border-radius: 50%;
          width: 28px; height: 28px;
          color: white; font-size: 16px;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .drawer-close:hover { background: rgba(255,255,255,0.3); }

        @media (max-width: 380px) {
          .contact-drawer { width: 290px; right: -4px; }
        }
      `}</style>

      <div className="float-wrap">

        {/* Contact Drawer */}
        {formOpen && (
          <div className="contact-drawer">
            <div className="drawer-header">
              <div>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>Contact Us</p>
                <p style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginTop: 2 }}>Send us a Message</p>
              </div>
              <button className="drawer-close" onClick={() => { setFormOpen(false); setStatus(""); }}>×</button>
            </div>

            <div className="drawer-body">
              {status === "success" ? (
                <div style={{ textAlign: "center", padding: "20px 0" }}>
                  <div style={{ fontSize: 36 }}>✅</div>
                  <p style={{ fontWeight: 700, color: "#0f172a", marginTop: 10 }}>Message Sent!</p>
                  <p style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>We'll get back to you shortly.</p>
                  <button className="f-btn" style={{ marginTop: 16 }} onClick={() => { setFormOpen(false); setStatus(""); }}>Close</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="f-field">
                    <input type="text" placeholder="Your Name *" value={form.name}
                      onChange={e => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                      className={`f-input${errors.name ? " err" : ""}`} />
                    {errors.name && <span className="f-err">{errors.name}</span>}
                  </div>

                  <div className="f-field">
                    <input type="tel" placeholder="Mobile Number *" value={form.phone} maxLength={10}
                      onChange={e => { setForm({ ...form, phone: e.target.value.replace(/\D/g, "") }); setErrors({ ...errors, phone: "" }); }}
                      className={`f-input${errors.phone ? " err" : ""}`} />
                    {errors.phone && <span className="f-err">{errors.phone}</span>}
                  </div>

                  <div className="f-field">
                    <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                      className="f-input f-select">
                      <option value="">Service Interest (optional)</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="f-field">
                    <textarea placeholder="Tell us about your project... *" value={form.message} rows={3}
                      onChange={e => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: "" }); }}
                      className={`f-input${errors.message ? " err" : ""}`}
                      style={{ resize: "none" }} />
                    {errors.message && <span className="f-err">{errors.message}</span>}
                  </div>

                  {status === "error" && (
                    <p style={{ color: "#ef4444", fontSize: 11, marginBottom: 8 }}>⚠️ Failed to send. Please try again.</p>
                  )}

                  <button type="submit" disabled={loading} className="f-btn">
                    {loading ? "Sending..." : "Send Message →"}
                  </button>

                  {/* WhatsApp alternative */}
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 10, fontSize: 12, color: "#25d366", fontWeight: 600, textDecoration: "none" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.003 2C6.485 2 2 6.485 2 12.003c0 1.947.528 3.777 1.456 5.343L2 22l4.776-1.433A9.954 9.954 0 0012.003 22C17.521 22 22 17.521 22 12.003S17.521 2 12.003 2zm0 18.007a8.01 8.01 0 01-4.148-1.152l-.295-.177-3.075.923.878-3.07-.192-.308A7.998 7.998 0 014.003 12.003c0-4.412 3.589-8.003 8-8.003 4.411 0 8 3.591 8 8.003 0 4.412-3.589 8.004-8 8.004z"/></svg>
                    Chat on WhatsApp
                  </a>
                </form>
              )}
            </div>
          </div>
        )}

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="float-btn wa-pulse"
          style={{ background: "#25d366" }}
          aria-label="Chat on WhatsApp"
        >
          <span className="tooltip">WhatsApp Us</span>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12.003 2C6.485 2 2 6.485 2 12.003c0 1.947.528 3.777 1.456 5.343L2 22l4.776-1.433A9.954 9.954 0 0012.003 22C17.521 22 22 17.521 22 12.003S17.521 2 12.003 2zm0 18.007a8.01 8.01 0 01-4.148-1.152l-.295-.177-3.075.923.878-3.07-.192-.308A7.998 7.998 0 014.003 12.003c0-4.412 3.589-8.003 8-8.003 4.411 0 8 3.591 8 8.003 0 4.412-3.589 8.004-8 8.004z"/>
          </svg>
        </a>

        {/* Contact Us Button */}
        <button
          onClick={() => { setFormOpen(!formOpen); setStatus(""); }}
          className="float-btn"
          style={{ background: formOpen ? "#0f172a" : "linear-gradient(135deg,#016398,#0284c7)" }}
          aria-label="Contact Us"
        >
          <span className="tooltip">Contact Us</span>
          {formOpen ? (
            <svg width="22" height="22" fill="none" stroke="white" strokeWidth={2.5} viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="white" strokeWidth={1.8} viewBox="0 0 24 24">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          )}
        </button>

      </div>
    </>
  );
}
