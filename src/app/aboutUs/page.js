export default function AboutPage() {
  return (
    <main className="bg-white text-black">
      {/* -------------------------------------- */}
      {/* HERO SECTION — Windsurf Style */}
      {/* -------------------------------------- */}
      <section className="relative h-[90vh] overflow-hidden bg-[#001A13] text-white flex items-center justify-center px-6">
        {/* Background Gradient Wave */}
        <div
          className="absolute inset-0 bg-no-repeat bg-right-top opacity-70"
          style={{
            backgroundImage:
              "url('/images/about_hero_wave_gradient.svg')",
          }}
        />

        <div className="relative z-10 max-w-3xl text-center flex flex-col gap-8">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Where Payroll Meets Precision: 
            <br /> Our Story of Zero-Error Dedication
          </h1>

          <p className="text-lg opacity-90">
            Perfection is not a goal — it’s our standard.  
            We combine human expertise with intelligent automation to deliver 
            flawless payroll, every single time.
          </p>
        </div>
      </section>

      {/* -------------------------------------- */}
      {/* CORE PHILOSOPHY SECTION */}
      {/* -------------------------------------- */}
      <section className="max-w-5xl mx-auto py-24 px-6 flex flex-col items-center gap-12">
        <div
          className="absolute inset-0 bg-no-repeat bg-right-top opacity-70 pointer-events-none"
          style={{
            backgroundImage:
              "url('/images/about_hero_wave_outline.svg')",
          }}
        />
        <h2 className="text-3xl md:text-4xl font-semibold text-center">
          Our Core Philosophy: Accuracy is Not Negotiable
        </h2>

        <p className="max-w-3xl text-lg text-center opacity-80 leading-relaxed">
          For most companies, payroll is a necessary process.  
          For us, it is a <strong>Science of Perfection</strong>.  
          We believe a single decimal error can erode trust, trigger penalties, 
          and disrupt business continuity — so every calculation, filing, and 
          interaction is designed for <strong>100% accuracy</strong>.
        </p>
      </section>

      {/* -------------------------------------- */}
      {/* TEAM SECTION — Windsurf Style */}
      {/* -------------------------------------- */}
      <section className="bg-[#F7F5F2] py-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">
            The Architects of Accuracy
          </h2>

          <p className="text-lg opacity-80 max-w-3xl text-center leading-relaxed">
            Our team consists of Chartered Accountants, HR Law Specialists, and 
            AI-driven Technologists who work together to design flawless payroll systems.
            <br /><br />
            <strong>The Human Edge:</strong> Experts who monitor Code on Wages (India) 
            and Labour Law (UAE) updates, ensuring proactive compliance.  
            <br />
            <strong>The Technological Backbone:</strong> AI-powered validation and
            error-detection ensures accuracy at scale — enhancing experts, never replacing them.
          </p>
        </div>
      </section>

      {/* -------------------------------------- */}
      {/* GLOBAL PANEL */}
      {/* -------------------------------------- */}
      <section className="max-w-5xl mx-auto py-24 px-6 flex flex-col items-center gap-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">
          Global Reach, Local Depth
        </h2>

        <p className="text-lg opacity-80 max-w-3xl text-center leading-relaxed">
          With presence in India and UAE — two of the world’s fastest-growing economies — 
          we combine deep regional expertise with the reliability of a global enterprise.
          <br /><br />
          Our promise is simple:  
          <strong>Every payslip. Every filing. Every time — 100% accurate.</strong>
        </p>
      </section>

      {/* -------------------------------------- */}
      {/* WHY PERFECTION MATTERS */}
      {/* -------------------------------------- */}
      <section className="bg-[#F7F5F2] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12">
            Why Perfection Matters To You
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-8 bg-white rounded-md shadow-sm">
              <h3 className="font-semibold text-xl mb-2">
                What We Deliver
              </h3>
              <ul className="list-disc pl-5 text-lg opacity-80 leading-relaxed">
                <li>Flawless Statutory Compliance</li>
                <li>Timely & Accurate Salary Disbursements</li>
                <li>Proactive Regulatory Structuring</li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-md shadow-sm">
              <h3 className="font-semibold text-xl mb-2">
                Direct Business Impact
              </h3>
              <ul className="list-disc pl-5 text-lg opacity-80 leading-relaxed">
                <li>Zero penalties, zero compliance risks</li>
                <li>Higher employee trust & retention</li>
                <li>Optimized CTC and improved tax efficiency</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------- */}
      {/* CTA SECTION */}
      {/* -------------------------------------- */}
      <section className="py-24 flex flex-col items-center px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
          Partner with the Perfectionists
        </h2>

        <p className="text-lg opacity-80 mb-10 text-center max-w-2xl">
          Start your journey toward flawless, zero-error payroll operations.
        </p>

        <a href="mailto:hello@epfdesk.com" className="bg-black cursor-pointer text-white px-8 py-4 text-lg rounded-md">
          Get Started
        </a>
      </section>
    </main>
  );
}
