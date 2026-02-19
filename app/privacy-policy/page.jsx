"use client";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#080c18] text-slate-100 font-sans">

      {/* HERO */}
      <section className="relative py-20 border-b border-blue-900/20">
        <div className="absolute inset-0 bg-blue-700/[0.04] blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-[clamp(30px,5vw,48px)] font-extrabold mb-4">
            Privacy{" "}
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-slate-500">
            Last updated: January 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-10 text-slate-400">

        <div>
          <h2 className="text-xl font-bold text-slate-100 mb-3">
            1. Introduction
          </h2>
          <p>
            Webnify Solutions (“we”, “our”, “us”) respects your privacy and is
            committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, and safeguard your data when
            you visit our website or use our services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-100 mb-3">
            2. Information We Collect
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Personal details such as name, email, phone number</li>
            <li>Information submitted through contact forms</li>
            <li>Technical data like IP address, browser type, device info</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-100 mb-3">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>To respond to inquiries and provide services</li>
            <li>To improve website performance and user experience</li>
            <li>For marketing and communication (only with consent)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-100 mb-3">
            4. Data Protection
          </h2>
          <p>
            We implement industry-standard security measures to protect your
            data. However, no method of transmission over the internet is 100%
            secure, and we cannot guarantee absolute security.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-100 mb-3">
            5. Third-Party Services
          </h2>
          <p>
            We may use third-party tools such as analytics or advertising
            platforms. These providers have their own privacy policies, and we
            are not responsible for their practices.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-100 mb-3">
            6. Your Rights
          </h2>
          <p>
            You have the right to request access, correction, or deletion of
            your personal data. You may contact us anytime regarding your data.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-100 mb-3">
            7. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
            <br />
            <span className="text-blue-400">
              webnifysolutions@gmail.com
            </span>
          </p>
        </div>

      </section>
    </div>
  );
}
