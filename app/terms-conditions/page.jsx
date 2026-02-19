"use client";

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-[#080c18] text-slate-100 font-sans">

      {/* HERO */}
      <section className="relative py-20 border-b border-blue-900/20">
        <div className="absolute inset-0 bg-blue-700/[0.04] blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-[clamp(30px,5vw,48px)] font-extrabold mb-4">
            Terms &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              Conditions
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
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using Webnify Solutions’ website and services, you
            agree to be bound by these Terms & Conditions.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-100 mb-3">
            2. Services
          </h2>
          <p>
            We provide web development, SEO, UI/UX design, and digital marketing
            services. Service details, timelines, and pricing are agreed upon
            before project initiation.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-100 mb-3">
            3. Payments & Refunds
          </h2>
          <p>
            All payments must be made as per the agreed terms. Due to the nature
            of digital services, payments are non-refundable once work has
            commenced.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-100 mb-3">
            4. Intellectual Property
          </h2>
          <p>
            All designs, code, and content remain the property of Webnify
            Solutions until full payment is received, after which ownership is
            transferred to the client unless stated otherwise.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-100 mb-3">
            5. Client Responsibilities
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Providing accurate project requirements</li>
            <li>Timely feedback and approvals</li>
            <li>Compliance with legal regulations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-100 mb-3">
            6. Limitation of Liability
          </h2>
          <p>
            Webnify Solutions shall not be liable for any indirect or
            consequential damages arising from the use of our services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-100 mb-3">
            7. Changes to Terms
          </h2>
          <p>
            We reserve the right to update these Terms at any time. Continued
            use of our services constitutes acceptance of the revised terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-100 mb-3">
            8. Contact Information
          </h2>
          <p>
            For any questions regarding these Terms & Conditions, contact us at:
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
