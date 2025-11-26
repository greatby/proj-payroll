export default function PayrollPricing() {
  return (
    <main className="bg-[#f9f3e9] text-black">

      {/* =========================== */}
      {/* HERO SECTION (Windsurf Style) */}
      {/* =========================== */}
      <section className="relative flex flex-col items-center justify-center text-center pt-32 pb-20 px-6 overflow-hidden">
        
        {/* Background Wave */}
        <div className="pointer-events-none absolute left-[-80rem] top-40 h-[2200px] w-[4300px] rotate-[55deg] opacity-80">
          <img
            src="/images/pricing_wave.svg"
            className="object-cover w-full h-full"
          />
        </div>

        <h1 className="relative z-10 text-4xl md:text-5xl font-semibold">
          Simple, Transparent Pricing.<br />No Hidden Fees.
        </h1>

        <p className="relative z-10 text-lg mt-6 opacity-80 max-w-2xl">
          Transparent, scalable, and built for accuracy.  
          Perfect payroll at a predictable monthly cost.
        </p>
      </section>

      {/* =========================== */}
      {/* PRICING GRID */}
      {/* =========================== */}
      <section className="relative max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {/* FOUNDATION PLAN */}
        <div className="bg-white/60 backdrop-blur-sm rounded-md p-8 flex flex-col gap-8 shadow-sm">
          <div>
            <h3 className="text-xl font-semibold uppercase">Foundation</h3>
            <p className="mt-2 text-sm text-gray-600">
              Best for Startups & SMEs (10–50 Employees)
            </p>

            <div className="mt-4 flex items-end gap-2">
              <p className="text-4xl font-semibold">₹350</p>
              <p className="text-gray-600">/ employee / month</p>
            </div>

            <p className="text-gray-500 text-sm">AED 150 (UAE)</p>
          </div>

          <a
            href="mailto:hello@epfdesk.com"
            className="px-6 py-3 bg-black text-white rounded-sm text-center"
          >
            Get Started
          </a>

          <ul className="space-y-3 text-gray-800 text-sm">
            <li>✓ Core Payroll Processing</li>
            <li>✓ Statutory Deductions & Payslips</li>
            <li>✓ Employee Self-Service (ESS)</li>
            <li>✓ PF/ESI Registration & Filing (India)</li>
            <li>✓ TDS Calculation & Challan</li>
            <li>✓ WPS (SJF/SCI) File Generation (UAE)</li>
            <li>✓ Basic End-of-Service Gratuity</li>
          </ul>
        </div>

        {/* COMPLIANCE PRO — POPULAR */}
        <div className="bg-white/60 backdrop-blur-sm rounded-md p-8 flex flex-col gap-8 shadow-sm border-2 border-[#00B8A9]">
          <div>
            <div className="flex gap-2 items-center">
              <h3 className="text-xl font-semibold uppercase">Compliance Pro</h3>
              <span className="bg-[#E0FBF6] text-[#00796B] px-2 py-1 text-xs font-semibold rounded">
                Most Popular
              </span>
            </div>

            <p className="mt-2 text-sm text-gray-600">
              Best for Growing Businesses (51–200 Employees)
            </p>

            <div className="mt-4 flex items-end gap-2">
              <p className="text-4xl font-semibold">₹550</p>
              <p className="text-gray-600">/ employee / month</p>
            </div>

            <p className="text-gray-500 text-sm">AED 250 (UAE)</p>
          </div>

          <a
            href="mailto:hello@epfdesk.com"
            className="px-6 py-3 bg-[#00B8A9] text-black rounded-sm text-center font-medium"
          >
            Choose Plan
          </a>

          <ul className="space-y-3 text-gray-800 text-sm">
            <li>✓ Everything in Foundation</li>
            <li>✓ Dedicated Payroll Specialist</li>
            <li>✓ Leave & Attendance Integration</li>
            <li>✓ Advanced Wage Code Structuring (India)</li>
            <li>✓ Gratuity / PF Liability Reporting</li>
            <li>✓ Compliance Audit Support</li>
            <li>✓ MoHRE Liaison (UAE)</li>
            <li>✓ Real-Time EoS Liability Tracker</li>
            <li>✓ Multi-Zone Free-Zone Payroll (UAE)</li>
          </ul>
        </div>

        {/* ENTERPRISE PERFECTION */}
        <div className="bg-white/60 backdrop-blur-sm rounded-md p-8 flex flex-col gap-8 shadow-sm">
          <div>
            <h3 className="text-xl font-semibold uppercase">Enterprise Perfection</h3>

            <p className="mt-2 text-sm text-gray-600">
              Best for Large Corporations (200+ Employees)
            </p>

            <div className="mt-4 flex items-end gap-2">
              <p className="text-4xl font-semibold">Custom</p>
            </div>
          </div>

          <a
            href="mailto:hello@epfdesk.com"
            className="px-6 py-3 border border-black text-black rounded-sm text-center font-medium hover:bg-black hover:text-white transition"
          >
            Request Quote
          </a>

          <ul className="space-y-3 text-gray-800 text-sm">
            <li>✓ Everything in Compliance Pro</li>
            <li>✓ Multi-Country Payroll</li>
            <li>✓ Custom API Integrations</li>
            <li>✓ Expense Management Module</li>
            <li>✓ Dedicated Relationship Manager</li>
            <li>✓ Full Labour Code Strategy (India)</li>
            <li>✓ Custom MIS & Cost Centre Reporting</li>
            <li>✓ Multi-Currency Payroll</li>
            <li>✓ Custom Bank File Formats</li>
            <li>✓ On-Demand Labour Law Advisory</li>
          </ul>
        </div>
      </section>

    

      {/* =========================== */}
      {/* CTA */}
      {/* =========================== */}
      <section className="py-20 flex flex-col items-center px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
          Ready for a flawless payroll experience?
        </h2>

        <p className="max-w-2xl text-center text-lg opacity-80 mb-10">
          Let’s discuss the perfect payroll plan tailored to your organisation.
        </p>

        <a
          href="mailto:hello@epfdesk.com"
          className="bg-black text-white px-10 py-4 text-lg rounded-md"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
