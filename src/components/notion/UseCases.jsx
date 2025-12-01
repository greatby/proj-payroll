"use client";

import {
  PiWarningBold,
  PiClipboardTextBold,
  PiCurrencyInrBold,
  PiUserBold,
  PiTrendUpBold,
  PiIdentificationBadgeBold,
  PiBuildingsBold,
  PiGavelBold,
} from "react-icons/pi";

export default function WageCodeComplianceSection() {
  const cards = [
    {
      icon: <PiWarningBold size={22} />,
      title: "Understand the New Wage Code Requirements",
    },
    {
      icon: <PiClipboardTextBold size={22} />,
      title: "Identify Non-Compliant Salary Structures",
    },
    {
      icon: <PiCurrencyInrBold size={22} />,
      title: "Assess PF & Gratuity Cost Impact",
    },
    {
      icon: <PiUserBold size={22} />,
      title: "Evaluate Employee Take-Home Salary Changes",
    },
    {
      icon: <PiTrendUpBold size={22} />,
      title: "Model Financial Impact for Your Company",
    },
    {
      icon: <PiIdentificationBadgeBold size={22} />,
      title: "Prepare Gratuity & CTC Restructuring",
    },
    {
      icon: <PiBuildingsBold size={22} />,
      title: "Align Your Policies Across All Locations",
    },
    {
      icon: <PiGavelBold size={22} />,
      title: "Avoid Penalties & Internal Compliance Disputes",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              The New Wage Code Challenge:<br />
              Are Your Salaries Compliant?
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl">
              Basic Pay must now be <strong>50% or more</strong> of Total Remuneration.  
              This impacts PF, Gratuity, and employee take-home salaries.  
              One misstep can trigger penalties and internal disputes.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-1 text-blue-600 font-medium mt-3"
            >
              Learn how to stay compliant →
            </a>
          </div>

          {/* Illustration */}
          <img
            src="/images/asset-use-cases.png"
            alt="Wage code compliance"
            className="w-full md:w-[380px] lg:w-[420px] mt-6 md:mt-0 opacity-90"
          />
        </div>

        {/* GRID OF CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, idx) => (
            <a
              key={idx}
              href="#"
              className="flex flex-row md:flex-col gap-3 border border-gray-200 rounded-xl p-5 hover:shadow-sm transition group"
            >
              <div className="text-gray-700 group-hover:text-black">
                {card.icon}
              </div>

              <span className="font-medium text-gray-800 group-hover:text-black">
                {card.title} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
