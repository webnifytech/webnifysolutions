"use client";
import Link from "next/link";
import PopupTrigger from "@/components/PopupTrigger";

const services = [
  {
    emoji: "💻",
    title: "Website Development",
    desc: "High-performance, scalable, and SEO-friendly websites built with modern technologies that convert visitors into customers.",
    points: ["Business Websites", "E-Commerce Stores", "Web Applications"],
    url: "/services/website-development",
    accent: "#3b82f6",
  },
  {
    emoji: "🔍",
    title: "SEO Optimization",
    desc: "Data-driven SEO strategies to rank higher on Google, drive organic traffic, and generate consistent leads for your business.",
    points: ["Technical SEO", "On-Page SEO", "Link Building"],
    url: "/services/seo-optimization",
    accent: "#06b6d4",
  },
  {
    emoji: "📣",
    title: "Social Media Marketing",
    desc: "Grow your brand, engagement, and leads across Instagram, Facebook & LinkedIn with targeted content and paid campaigns.",
    points: ["Content Strategy", "Paid Ads", "Lead Generation"],
    url: "/services/social-media-marketing",
    accent: "#8b5cf6",
  },
  {
    emoji: "🎨",
    title: "UI / UX Design",
    desc: "User-centric UI/UX designs that enhance usability, engagement, and conversions — crafted with precision and aesthetic.",
    points: ["Wireframing", "Prototyping", "Design Systems"],
    url: "/services/ui-ux-design",
    accent: "#ec4899",
  },
];

const processSteps = [
  { num: "01", title: "Discovery", desc: "We learn your goals, audience, and competitive landscape." },
  { num: "02", title: "Strategy", desc: "We craft a tailored roadmap aligned with your objectives." },
  { num: "03", title: "Execution", desc: "Our team builds, designs, or launches your solution." },
  { num: "04", title: "Growth", desc: "We measure results, iterate, and continuously improve." },
];

export default function ServicesPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .svc-page {
          font-family: 'Inter', sans-serif;
          background: #060a14;
          color: #e2e8f0;
          min-height: 100vh;
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

        .svc-fade-up { animation: fade-up 0.7s ease both; }
        .d1 { animation-delay: 0.1s; }
        .d2 { animation-delay: 0.2s; }
        .d3 { animation-delay: 0.3s; }
        .d4 { animation-delay: 0.45s; }

        .gradient-text {
          background: linear-gradient(135deg, #60a5fa 0%, #38bdf8 50%, #818cf8 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 5s linear infinite;
        }

        .svc-badge {
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
        .svc-badge::before {
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

        .svc-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(99,179,237,0.12);
          border-radius: 24px;
          padding: 36px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .svc-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 72px rgba(59,130,246,0.12);
          border-color: rgba(99,179,237,0.28);
        }

        .svc-icon-wrap {
          width: 60px; height: 60px;
          border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          font-size: 26px;
          margin-bottom: 20px;
          background: rgba(37,99,235,0.1);
          border: 1px solid rgba(59,130,246,0.18);
          transition: background 0.2s;
        }
        .svc-card:hover .svc-icon-wrap {
          background: rgba(37,99,235,0.18);
        }

        .svc-tag {
          display: inline-flex;
          font-size: 11px;
          font-weight: 600;
          color: #93c5fd;
          background: rgba(37,99,235,0.12);
          border: 1px solid rgba(59,130,246,0.2);
          padding: 4px 12px;
          border-radius: 999px;
        }

        .svc-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: #60a5fa;
          text-decoration: none;
          margin-top: auto;
          padding-top: 20px;
          transition: color 0.2s, gap 0.2s;
        }
        .svc-link:hover {
          color: #93c5fd;
          gap: 10px;
        }

        .orb {
          position: absolute;
          border-radius: 9999px;
          filter: blur(90px);
          pointer-events: none;
          animation: float-orb 9s ease-in-out infinite;
        }

        .grid-pattern {
          background-image:
            linear-gradient(rgba(59,130,246,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.025) 1px, transparent 1px);
          background-size: 72px 72px;
        }

        .divider { border: none; border-top: 1px solid rgba(99,179,237,0.1); margin: 0; }

        .process-num {
          font-size: 42px;
          font-weight: 900;
          line-height: 1;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
          margin-bottom: 10px;
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
        }

        @media (max-width: 768px) {
          .svc-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: 1fr 1fr !important; }
          .who-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="svc-page">

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden grid-pattern" style={{ paddingTop: "80px" }}>
          <div className="orb" style={{ width: 700, height: 500, background: "rgba(37,99,235,0.09)", top: -200, left: "50%", transform: "translateX(-50%)" }} />
          <div className="orb" style={{ width: 280, height: 280, background: "rgba(14,165,233,0.07)", top: 100, right: "5%", animationDelay: "2s", animationDuration: "8s" }} />

          <div style={{ position: "relative", maxWidth: 860, margin: "0 auto", padding: "72px 24px 80px", textAlign: "center" }}>
            <div className="svc-badge svc-fade-up d1" style={{ marginBottom: 24, display: "inline-flex" }}>Our Services</div>

            <h1
              className="svc-fade-up d2"
              style={{ fontSize: "clamp(36px,5.5vw,64px)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-1.5px", marginBottom: 24 }}
            >
              Complete Digital Solutions<br />
              for{" "}
              <span className="gradient-text">Business Growth</span>
            </h1>

            <p
              className="svc-fade-up d3"
              style={{ maxWidth: 620, margin: "0 auto", color: "#64748b", fontSize: 17, lineHeight: 1.75 }}
            >
              From website development to SEO, social media marketing, and UI/UX design —
              end-to-end digital services to help your business thrive online.
            </p>
          </div>
        </section>

        <hr className="divider" />

        {/* ── SERVICES GRID ─────────────────────────────────── */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {services.map(s => (
              <div key={s.title} className="svc-card">
                <div className="svc-icon-wrap">{s.emoji}</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12, color: "#f1f5f9", letterSpacing: "-0.4px" }}>{s.title}</h3>
                <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{s.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                  {s.points.map(p => (
                    <span key={p} className="svc-tag">{p}</span>
                  ))}
                </div>
                <Link href={s.url} className="svc-link">
                  View Details
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <hr className="divider" />

        {/* ── OUR PROCESS ───────────────────────────────────── */}
        <section style={{ background: "rgba(37,99,235,0.03)", borderTop: "1px solid rgba(99,179,237,0.08)", borderBottom: "1px solid rgba(99,179,237,0.08)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <div className="svc-badge" style={{ display: "inline-flex", marginBottom: 14 }}>How We Work</div>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800, letterSpacing: "-0.8px" }}>
                Our Process
              </h2>
            </div>

            <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
              {processSteps.map((step, i) => (
                <div
                  key={step.num}
                  style={{
                    padding: "32px 24px",
                    borderRadius: 20,
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(99,179,237,0.12)",
                    position: "relative",
                  }}
                >
                  <span className="process-num">{step.num}</span>
                  <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: "#f1f5f9" }}>{step.title}</h3>
                  <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section style={{ position: "relative", overflow: "hidden" }}>
          <div className="orb" style={{ width: 500, height: 400, background: "rgba(37,99,235,0.08)", top: -50, left: "50%", transform: "translateX(-50%)" }} />
          <div style={{ position: "relative", maxWidth: 700, margin: "0 auto", padding: "100px 24px", textAlign: "center" }}>
            <div className="svc-badge" style={{ display: "inline-flex", marginBottom: 20 }}>Get Started</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, marginBottom: 18, letterSpacing: "-1px", lineHeight: 1.15 }}>
              Not Sure Which Service<br />
              <span className="gradient-text">You Need?</span>
            </h2>
            <p style={{ color: "#64748b", fontSize: 16, marginBottom: 36, lineHeight: 1.7 }}>
              Talk to our experts and get a free consultation tailored to your business goals.
            </p>
            <PopupTrigger className="cta-btn">
              Book Free Consultation
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
