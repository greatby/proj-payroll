export default function WageCodeSectionUae() {
  return (
    <section className="bg-sk-sand">
      <div className="mx-auto max-w-7xl px-5 py-24 md:py-36">
        
        {/* Heading */}
        <h4 className="text-[48px] font-normal leading-[100%] mb-12 md:mb-16">
          Your Local Payroll Expert <br /> in the Emirates
        </h4>

        {/* Two Cards */}
        <div className="flex w-full flex-col gap-2 md:flex-row">

          {/* Card 1 — Local Presence */}
          <div
            className="
              flex max-h-[14.2rem] min-h-[14.2rem] w-full flex-col gap-8 
              overflow-hidden rounded bg-contain bg-right bg-no-repeat 
              bg-[#43045e] 
              bg-[url('https://exafunction.github.io/public/images/waves/link_card_waves/indigo_wave_mobile.svg')]
              md:max-h-194 md:min-h-194 md:bg-bottom
              md:bg-[url('https://exafunction.github.io/public/images/waves/link_card_waves/indigo_wave_desktop.svg')]
            "
          >
            <div className="flex w-full flex-col gap-6 px-6 py-8 md:p-16">

              {/* Tag */}
              <div className="w-fit rounded-xs px-1 py-1 bg-[#ffccf3]">
                <p className="body4 mt-px font-medium uppercase">
                  Local Expertise
                </p>
              </div>

              {/* Title */}
              <p className="text-[20px] md:text-[34px] leading-[110%] max-w-xl text-white">
                Physically present across Dubai, Abu Dhabi & the Northern Emirates.
              </p>

              {/* Button */}
              <button className="
                text-white cursor-pointer whitespace-nowrap font-medium leading-6 
                transition-colors inline-flex items-center justify-center gap-3
                border-b border-sk-white hover:border-sk-white/20 
                hover:text-sk-white/50 w-fit px-0 py-1 text-base md:text-lg
              ">
                <span className="flex items-center gap-1.5 font-dmMono uppercase">
                  Learn more
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="m13.75 6.75 5.5 5.25-5.5 5.25M19 12H4.75"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Card 2 — Local Knowledge */}
          <div
            className="
              flex max-h-[14.2rem] min-h-[14.2rem] w-full flex-col gap-8 
              overflow-hidden rounded bg-contain bg-right bg-no-repeat 
              bg-[#003326] 
              bg-[url('https://exafunction.github.io/public/images/waves/link_card_waves/aqua_wave_mobile.svg')]
              md:max-h-194 md:min-h-194 md:bg-bottom
              md:bg-[url('https://exafunction.github.io/public/images/waves/link_card_waves/aqua_wave_desktop.svg')]
            "
          >
            <div className="flex w-full flex-col gap-6 px-6 py-8 md:p-16">

              {/* Tag */}
              <div className="w-fit rounded-xs px-1 py-1 bg-[#ecfba9]">
                <p className="body4 mt-px font-medium uppercase">
                  On-Ground Knowledge
                </p>
              </div>

              {/* Title */}
              <p className="text-[20px] md:text-[34px] leading-[110%] max-w-xl text-white">
                We understand UAE payroll rules, languages & the business culture.
              </p>

              {/* Description */}
              <p className="text-white/80 text-sm md:text-base max-w-xl leading-[150%]">
                Our payroll experts are embedded in the regulatory landscape of 
                Dubai, Abu Dhabi, and the Northern Emirates. Visit us at JLT, Dubai 
                or ADGM, Abu Dhabi — wherever you operate, we speak your language 
                and understand your day-to-day compliance needs.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
