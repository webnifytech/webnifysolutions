"use client";
import Link from "next/link";
import PopupTrigger from "@/components/PopupTrigger";

const values = [
  { icon: "🎯", title: "Results-Driven", desc: "Every strategy is designed to deliver measurable growth and real ROI." },
  { icon: "🧑‍💻", title: "Expert Team", desc: "Skilled developers, designers & marketers with proven real-world expertise." },
  { icon: "🔍", title: "Transparent", desc: "Clear timelines, honest pricing, and regular progress updates — always." },
  { icon: "🛠️", title: "Custom Solutions", desc: "Every project tailored precisely to your business goals and audience." },
  { icon: "⚡", title: "Latest Tech", desc: "Modern tech stack, SEO best practices, and scalable architecture." },
  { icon: "🤝", title: "Long-Term Partner", desc: "We don't just deliver projects — we build lasting partnerships." },
];

const coreValues = [
  "Client-first mindset",
  "Quality & performance",
  "Innovation & learning",
  "Honesty & transparency",
  "Accountability & ownership",
  "Continuous improvement",
];

export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .about-page {
          font-family: 'Inter', sans-serif;
          background: #060a14;
          color: #e2e8f0;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          max-width: 100vw;
        }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float-orb {
          0%, 100% { transform: translateY(0) scale(1); }
          50%       { transform: translateY(-24px) scale(1.04); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        .fade-up { animation: fade-up 0.7s ease both; }
        .d1 { animation-delay: 0.1s; }
        .d2 { animation-delay: 0.2s; }
        .d3 { animation-delay: 0.3s; }
        .d4 { animation-delay: 0.4s; }

        .gradient-text {
          background: linear-gradient(135deg, #60a5fa 0%, #38bdf8 50%, #818cf8 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 5s linear infinite;
        }

        .glass-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(99,179,237,0.12);
          backdrop-filter: blur(12px);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .glass-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(59,130,246,0.12);
          border-color: rgba(99,179,237,0.28);
        }

        .orb {
          position: absolute; border-radius: 9999px;
          filter: blur(90px); pointer-events: none;
          animation: float-orb 9s ease-in-out infinite;
          max-width: 100vw;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #60a5fa;
          background: rgba(59,130,246,0.08);
          border: 1px solid rgba(59,130,246,0.22);
          padding: 6px 18px;
          border-radius: 999px;
        }
        .badge::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #60a5fa;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .tag-chip {
          font-size: 12px;
          color: #93c5fd;
          background: rgba(37,99,235,0.12);
          border: 1px solid rgba(59,130,246,0.22);
          padding: 5px 14px;
          border-radius: 999px;
          font-weight: 500;
        }

        .value-icon {
          width: 50px; height: 50px;
          border-radius: 14px;
          background: rgba(37,99,235,0.12);
          border: 1px solid rgba(59,130,246,0.2);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px;
          margin-bottom: 16px;
          transition: background 0.2s;
        }
        .glass-card:hover .value-icon {
          background: rgba(37,99,235,0.22);
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 36px;
          background: linear-gradient(135deg, #2563eb, #0ea5e9);
          border-radius: 12px;
          font-weight: 700;
          font-size: 15px;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(37,99,235,0.3);
        }
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 48px rgba(37,99,235,0.45);
          background: linear-gradient(135deg, #1d4ed8, #0284c7);
        }

        .divider {
          border: none;
          border-top: 1px solid rgba(99,179,237,0.1);
          margin: 0;
        }

        .check-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          border-radius: 12px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(99,179,237,0.1);
          color: #cbd5e1;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
        }
        .check-item:hover {
          background: rgba(37,99,235,0.08);
          border-color: rgba(59,130,246,0.25);
          color: #e2e8f0;
        }

        .stat-card {
          text-align: center;
          padding: 28px 20px;
          border-radius: 20px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(99,179,237,0.12);
        }
        .stat-num {
          font-size: 40px;
          font-weight: 900;
          line-height: 1;
          background: linear-gradient(135deg, #60a5fa, #38bdf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .stat-label {
          font-size: 13px;
          color: #64748b;
          margin-top: 6px;
          font-weight: 500;
        }

        .grid-pattern {
          background-image:
            linear-gradient(rgba(59,130,246,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.025) 1px, transparent 1px);
          background-size: 72px 72px;
        }

        .mission-card {
          padding: 36px;
          border-radius: 24px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(99,179,237,0.12);
        }
        .mission-card h3 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #f1f5f9;
        }
        .mission-card p {
          color: #64748b;
          line-height: 1.7;
          font-size: 15px;
        }

        @media (max-width: 768px) {
          .about-grid, .mission-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="about-page">

        {/* ── HERO ───────────────────────────────────────────── */}
        <section className="relative overflow-hidden grid-pattern" style={{ paddingTop: "20px" }}>
          {/* Orbs */}
          <div className="orb" style={{ width: 600, height: 600, background: "rgba(37,99,235,0.1)", top: -200, left: "50%", transform: "translateX(-50%)", animationDuration: "10s" }} />
          <div className="orb" style={{ width: 300, height: 300, background: "rgba(14,165,233,0.07)", top: 80, right: "5%", animationDelay: "2s", animationDuration: "8s" }} />

          <div style={{ position: "relative", maxWidth: 900, margin: "0 auto", padding: "72px 24px 80px", textAlign: "center" }}>
            <div className="badge fade-up d1" style={{ marginBottom: 24, display: "inline-flex" }}>About Us</div>

            <h1
              className="fade-up d2"
              style={{ fontSize: "clamp(36px, 5.5vw, 64px)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-1.5px", marginBottom: 24 }}
            >
              Building Digital Solutions<br />
              That{" "}
              <span className="gradient-text">Drive Real Growth</span>
            </h1>

            <p
              className="fade-up d3"
              style={{ maxWidth: 620, margin: "0 auto 40px", color: "#64748b", fontSize: 17, lineHeight: 1.75 }}
            >
              We are a results-driven IT & digital marketing company helping businesses grow
              online with powerful websites, SEO, social media marketing, and user-centric design.
            </p>

            {/* Stats row */}
            <div className="fade-up d4" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, maxWidth: 520, margin: "0 auto" }}>
              {[
                { num: "50+", label: "Projects Delivered" },
                { num: "95%", label: "Client Satisfaction" },
                { num: "3+", label: "Years Experience" },
              ].map(s => (
                <div key={s.num} className="stat-card">
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── WHO WE ARE ────────────────────────────────────── */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 60, alignItems: "center" }}>
            <div>
              <div className="badge" style={{ marginBottom: 18, display: "inline-flex" }}>Who We Are</div>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800, marginBottom: 20, letterSpacing: "-0.8px", lineHeight: 1.2 }}>
                Your Dedicated Digital Growth Partner
              </h2>
              <p style={{ color: "#64748b", marginBottom: 16, lineHeight: 1.75, fontSize: 15 }}>
                Webnify Solutions is a modern IT solutions and digital growth company focused on
                delivering high-quality, scalable, and performance-driven digital products.
              </p>
              <p style={{ color: "#64748b", lineHeight: 1.75, fontSize: 15, marginBottom: 32 }}>
                From startups to established businesses, we partner with brands to create impactful
                digital experiences that generate leads, increase visibility, and drive measurable results.
              </p>
              <PopupTrigger className="cta-btn">
                Work With Us
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </PopupTrigger>
            </div>

            <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {["Web Development", "SEO Optimization", "Social Media Marketing", "UI / UX Design"].map((item, i) => (
                <div
                  key={item}
                  className="glass-card"
                  style={{ borderRadius: 18, padding: "24px 20px", textAlign: "center" }}
                >
                  <div style={{ fontSize: 26, marginBottom: 10 }}>
                    {["💻", "🔍", "📣", "🎨"][i]}
                  </div>
                  <p style={{ fontWeight: 600, fontSize: 13, color: "#93c5fd" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── MISSION & VISION ──────────────────────────────── */}
        <section style={{ background: "rgba(37,99,235,0.03)", borderTop: "1px solid rgba(99,179,237,0.08)", borderBottom: "1px solid rgba(99,179,237,0.08)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="badge" style={{ display: "inline-flex", marginBottom: 14 }}>Our Purpose</div>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 800, letterSpacing: "-0.8px" }}>
                Mission & Vision
              </h2>
            </div>

            <div className="mission-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 1000, margin: "0 auto 80px" }}>
              <div className="mission-card fade-up">
                <div style={{ fontSize: 32, marginBottom: 14 }}>🚀</div>
                <h3>Our Mission</h3>
                <p>
                  To help businesses succeed online by delivering innovative, reliable, and
                  ROI-focused digital solutions that drive long-term growth and competitive advantage.
                </p>
              </div>
              <div className="mission-card">
                <div style={{ fontSize: 32, marginBottom: 14 }}>🌐</div>
                <h3>Our Vision</h3>
                <p>
                  To become a trusted digital growth partner for businesses worldwide, known
                  for quality, transparency, and consistently measurable results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ─────────────────────────────────── */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="badge" style={{ display: "inline-flex", marginBottom: 14 }}>Why Us</div>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800, letterSpacing: "-0.8px" }}>
              Why Choose Webnify Solutions?
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
            {values.map(v => (
              <div key={v.title} className="glass-card" style={{ borderRadius: 20, padding: 28 }}>
                <div className="value-icon">{v.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: "#f1f5f9" }}>{v.title}</h3>
                <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="divider" />

        {/* ── CORE VALUES ───────────────────────────────────── */}
        <section style={{ background: "rgba(37,99,235,0.03)", borderTop: "1px solid rgba(99,179,237,0.08)", borderBottom: "1px solid rgba(99,179,237,0.08)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="badge" style={{ display: "inline-flex", marginBottom: 14 }}>Values</div>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800, letterSpacing: "-0.8px" }}>
                Our Core Values
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {coreValues.map(v => (
                <div key={v} className="check-item">
                  <span style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(37,99,235,0.15)", border: "1px solid rgba(59,130,246,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="13" height="13" fill="none" stroke="#60a5fa" strokeWidth={2.5} viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {v}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section style={{ position: "relative", overflow: "hidden" }}>
          <div className="orb" style={{ width: 500, height: 500, background: "rgba(37,99,235,0.08)", top: -100, left: "50%", transform: "translateX(-50%)" }} />
          <div style={{ position: "relative", maxWidth: 700, margin: "0 auto", padding: "100px 24px", textAlign: "center" }}>
            <div className="badge" style={{ display: "inline-flex", marginBottom: 20 }}>Let's Connect</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, marginBottom: 18, letterSpacing: "-1px", lineHeight: 1.15 }}>
              Let's Build Something{" "}
              <span className="gradient-text">Great Together</span>
            </h2>
            <p style={{ color: "#64748b", fontSize: 16, marginBottom: 36, lineHeight: 1.7 }}>
              Whether you're launching a new project or scaling your business, we're here to help you succeed.
            </p>
            <PopupTrigger className="cta-btn">
              Contact Us Today
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </PopupTrigger>
          </div>
        </section>

      </div>
    </>
  );
}
