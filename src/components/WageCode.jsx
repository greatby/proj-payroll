"use client";
import { useEffect, useRef } from "react";

export default function WageCodeProblemStatement() {
  const spot = useRef(null);

  useEffect(() => {
    const handle = (e) => {
      if (!spot.current) return;
      spot.current.style.setProperty("--x", `${e.clientX}px`);
      spot.current.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0A0D12] py-28 text-white">
      {/* MOVING SPOTLIGHT */}
      <div
        ref={spot}
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(
              600px circle at var(--x, 50%) var(--y, 50%),
              rgba(255,228,122,0.25),
              rgba(251,156,229,0.2),
              rgba(9,111,255,0.1),
              transparent 70%
            )
          `,
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-16 px-6 md:flex-row md:items-center">

        {/* LEFT TEXT — EXACT WINDSURF STYLE */}
        <div className="flex-1 md:pr-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-[6px] w-[6px] bg-[#FEEA8A]" />
            <p className="text-sm tracking-widest text-gray-300">
              COMPLIANCE ALERT
            </p>
          </div>

          <h2 className="mb-6 text-4xl font-semibold leading-tight md:text-5xl">
            The New Wage Code Challenge:
            <br /> Are Your Salaries Compliant?
          </h2>

          <p className="text-lg leading-relaxed opacity-80">
            The mandate is clear:{" "}
            <strong>Basic Pay must be 50% or more of Total Remuneration.</strong>
            This shift impacts PF, Gratuity, and employee take-home salary.
            One wrong structure can trigger internal disputes, dissatisfaction,
            or even <strong>heavy compliance penalties.</strong>
          </p>
        </div>

        {/* RIGHT CARD — EXACT GLASS PANEL FROM WINDSURF */}
        <div className="flex-1 w-full md:w-[45%]">
          <div className="relative rounded-2xl border border-white/10 bg-white/10 p-10 backdrop-blur-xl shadow-xl">
            {/* subtle gradient overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-20" />

            <h3 className="mb-6 text-xl font-semibold">
              Why This Matters for Your Business
            </h3>

            <ul className="space-y-4 text-gray-200">
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-[#FEEA8A]" />
                Incorrect salary structures increase PF & Gratuity liabilities.
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-[#FEEA8A]" />
                Non-compliance may trigger labour audits and penalties.
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-[#FEEA8A]" />
                Employees may challenge reduced take-home salary.
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-[#FEEA8A]" />
                HR teams face escalations and internal disputes.
              </li>
            </ul>

            <button className="mt-8 rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200">
              Fix My Wage Code Structure →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
