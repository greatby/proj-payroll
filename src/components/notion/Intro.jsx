"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";

export default function IntroducingNotion3() {
  const SLIDES = [
    {
      title: "Smart Wage Structuring",
      desc: "We don’t just process salaries — we model them. Our certified payroll experts create a compliant wage structure that ensures accurate PF and Gratuity calculations while enhancing employee take-home pay through intelligent restructuring.",
      video:
        "https://videos.ctfassets.net/spoqsaf9291f/4sGOnBGgPUbz0AGPlK3hzu/e9c967ac116ab4e02a861e5a32968e6f/Slide_A_1584x1080_isolated_final_compressed_500k.mp4",
      poster:
        "https://images.ctfassets.net/spoqsaf9291f/5YQCShRSSTzBGeNEJ4rq9r/7c7716af3473c233a302f9d4319aca0f/Slide_A_1584x1080_isolated_final_compressed_500k_first_frame.jpg",
    },
    {
      title: "Flawless Statutory Compliance",
      desc: "Your entire statutory workflow is handled with precision. From PF and ESI to monthly TDS filings, we ensure every return is submitted accurately and on time, eliminating penalties and compliance risks for your organization.",
      video:
        "https://videos.ctfassets.net/spoqsaf9291f/7h5maXW4nan2tJEtlTGz83/d3bc1bff536e254bfd47c8904937e63d/Slide_B_1584x1080_isolated_final_compressed_1100k.mp4",
      poster:
        "https://images.ctfassets.net/spoqsaf9291f/2Au7fvWafMpLZ9AEw3bC9j/63d0a6664f66b595cf8b01ae32254120/Slide_B_1584x1080_isolated_final_compressed_1100k_first_frame.jpg",
    },
    {
      title: "Optimized Take-Home Salary",
      desc: "Searches all your pages, messages, files, and the web to surface exactly what you need.",
      video:
        "https://videos.ctfassets.net/spoqsaf9291f/6kzWb9Yq0jKOfKvPiGzrhf/68e16d74ffd70fa761641bd04feef512/Slide_C_1584x1080_isolated_final_compressed_1100k.mp4",
      poster:
        "https://images.ctfassets.net/spoqsaf9291f/4qtBbCyYnRl56l1WV1TNEZ/c648f4c81dc75f7bc61dd521983ac3a7/Slide_C_1584x1080_isolated_final_compressed_1100k_first_frame.jpg",
    },
    // {
    //   title: "Personalized to you",
    //   desc: "Your Agent learns how you work. You control everything from how it behaves to how it looks.",
    //   video:
    //     "https://videos.ctfassets.net/spoqsaf9291f/2Ofwr4YxZHrV58vPRAM0rJ/961cfda420d4a5c20aeb38f9d0477af4/Slide_D_1584x1080_isolated_final_compressed_500k.mp4",
    //   poster:
    //     "https://images.ctfassets.net/spoqsaf9291f/58tNscjSP1mgkKTFkXwfg2/e33432b1e2fea7ea177f7e3fa002abae/Slide_D_1584x1080_isolated_final_compressed_500k_first_frame.jpg",
    // },
  ];

  const [active, setActive] = useState(0);
  const current = SLIDES[active];

  const goPrev = () =>
    setActive((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const goNext = () => setActive((i) => (i + 1) % SLIDES.length);

  return (
    <section className="bg-[#F5F3EF] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* HEADER */}
        <h2 className="text-4xl md:text-5xl font-bold mb-10 md:mb-12">
          Precision-Engineered Payroll for the New Wage Era
        </h2>

        {/* MAIN WRAPPER (NO GAP) */}
        <div className="flex flex-col md:flex-row w-full rounded-3xl overflow-hidden shadow-sm">
          {/* LEFT WHITE CARD */}
          <div className="bg-white w-full md:w-[32%] p-6 md:p-8">
            {/* <div className="flex items-center gap-2 text-sm mb-4">
              <span className="font-medium">Notion Agent</span>
              <span className="px-2 py-[2px] text-xs rounded-full bg-gray-100">
                New
              </span>
            </div> */}

            <div className="flex items-start gap-3 mb-6">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug">
                Core Value Proposition
              </p>
              <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-black">
               <FaArrowRightLong />
              </span>
            </div>

            <div className="border-t border-gray-200 mb-4" />

            {/* TABS */}
            <div className="space-y-4">
              {SLIDES.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="block text-left w-full"
                >
                  <p
                    className={`font-semibold text-base ${
                      active === i
                        ? "text-black"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {item.title}
                  </p>

                  {active === i && (
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  )}

                  <div className="border-b border-gray-200 mt-3"></div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE — FULL BACKGROUND IMAGE */}
          <div
            className="
              relative 
              w-full md:w-[68%] 
              flex justify-center items-center
              min-h-[320px]
            "
            style={{
              backgroundImage: 'url("/images/accordion-background.avif")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* VIDEO WRAPPER - RESPONSIVE */}
            <div
              className="
                relative w-full group

               
                md:absolute md:w-[95%] md:h-[93%] md:top-[25px] md:right-0
              "
            >
              <video
                key={current.video}
                src={current.video}
                poster={current.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="
                  w-full h-auto object-contain
                  rounded-none md:rounded-tl-xl
                "
              />

              {/* LEFT ARROW */}
              <button
                onClick={goPrev}
                className="
                  absolute left-3 md:left-6 
                  top-1/2 -translate-y-1/2
                  opacity-0 group-hover:opacity-100 
                  transition bg-white/80 backdrop-blur-md
                  rounded-full shadow p-2
                "
              >
                <FiChevronLeft size={22} />
              </button>

              {/* RIGHT ARROW */}
              <button
                onClick={goNext}
                className="
                  absolute right-3 md:right-6 
                  top-1/2 -translate-y-1/2
                  opacity-0 group-hover:opacity-100 
                  transition bg-white/80 backdrop-blur-md
                  rounded-full shadow p-2
                "
              >
                <FiChevronRight size={22} />
              </button>

              {/* NOSEY MASKED VIDEO */}
              <div
                className="
                  hidden sm:block
                  absolute bottom-3 right-3 
                  w-20 h-20 md:w-24 md:h-24
                "
                style={{
                  WebkitMaskImage:
                    'url("/front-static/nosey/fall/mask_noseyDuck.png")',
                  maskImage:
                    'url("/front-static/nosey/fall/mask_noseyDuck.png")',
                  WebkitMaskSize: "100% 100%",
                  maskSize: "100% 100%",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                }}
              >
                <video
                  src="/front-static/nosey/fall/clip_noseyDuck.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
