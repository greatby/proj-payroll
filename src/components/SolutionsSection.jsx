// "use client";

// export default function SolutionsSection() {
//   return (
//     <section className="bg-sk-sand">
//       <div className="mx-auto max-w-7xl px-5 py-24 md:py-36">
        
//         {/* Heading */}
//         <h4 className="text-[48px] font-normal leading-[100%] mb-12 md:mb-16">
//           Solutions for Organizations <br /> and Individual Developers
//         </h4>

//         {/* Two Cards */}
//         <div className="flex w-full flex-col gap-2 md:flex-row">

//           {/* Card 1 — Developers */}
//           <div
//             className="
//               flex max-h-[14.2rem] min-h-[14.2rem] w-full flex-col gap-8 
//               overflow-hidden rounded bg-contain bg-right bg-no-repeat 
//               bg-[#43045e] 
//               bg-[url('https://exafunction.github.io/public/images/waves/link_card_waves/indigo_wave_mobile.svg')]
//               md:max-h-194 md:min-h-194 md:bg-bottom
//               md:bg-[url('https://exafunction.github.io/public/images/waves/link_card_waves/indigo_wave_desktop.svg')]
//             "
//           >
//             <div className="flex w-full flex-col gap-8 px-6 py-8 md:p-16">

//               {/* Tag */}
//               <div className="w-fit rounded-xs px-1 py-1 bg-[#ffccf3]">
//                 <p className="body4 mt-px font-medium uppercase">
//                   For Developers
//                 </p>
//               </div>

//               {/* Title */}
//               <p className="text-[20px] md:text-[40px] leading-[100%] max-w-xl text-white">
//                 Code without context-switching. Finally!
//               </p>

//               {/* Button */}
//               <a href="/pricing">
//                 <button className=" text-white
//                   cursor-pointer whitespace-nowrap font-medium leading-6 
//                   transition-colors inline-flex items-center justify-center gap-3
//                   focus-visible:outline-none focus-visible:ring-2 
//                   focus-visible:ring-offset-4 disabled:pointer-events-none
//                   [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0
//                   text-sk-white border-b border-sk-white 
//                   hover:border-sk-white/20 hover:text-sk-white/50 
//                   disabled:opacity-30 focus-visible:ring-offset-sk-white 
//                   focus-visible:ring-sk-black w-fit px-0 py-1 
//                   text-base md:text-lg
//                 ">
//                   <span className="flex items-center gap-1.5 font-dmMono uppercase">
//                     Learn more
//                     <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
//                       <path
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="1.5"
//                         d="m13.75 6.75 5.5 5.25-5.5 5.25M19 12H4.75"
//                       />
//                     </svg>
//                   </span>
//                 </button>
//               </a>
//             </div>
//           </div>

//           {/* Card 2 — Enterprise */}
//           <div
//             className="
//               flex max-h-[14.2rem] min-h-[14.2rem] w-full flex-col gap-8 
//               overflow-hidden rounded bg-contain bg-right bg-no-repeat 
//               bg-[#003326] 
//               bg-[url('https://exafunction.github.io/public/images/waves/link_card_waves/aqua_wave_mobile.svg')]
//               md:max-h-194 md:min-h-194 md:bg-bottom
//               md:bg-[url('https://exafunction.github.io/public/images/waves/link_card_waves/aqua_wave_desktop.svg')]
//             "
//           >
//             <div className="flex w-full flex-col gap-8 px-6 py-8 md:p-16">

//               {/* Tag */}
//               <div className="w-fit rounded-xs px-1 py-1 bg-[#ecfba9]">
//                 <p className="body4 mt-px font-medium uppercase">
//                   For Enterprise
//                 </p>
//               </div>

//               {/* Title */}
//               <p className="text-[20px] md:text-[40px] leading-[100%] max-w-xl text-white">
//                 Multiply your organization’s output overnight.
//               </p>

//               {/* Button */}
//               <a href="/enterprise">
//                 <button className=" text-white
//                   cursor-pointer whitespace-nowrap font-medium leading-6 
//                   transition-colors inline-flex items-center justify-center gap-3
//                   focus-visible:outline-none focus-visible:ring-2 
//                   focus-visible:ring-offset-4 disabled:pointer-events-none
//                   [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0
//                   text-sk-white border-b border-sk-white 
//                   hover:border-sk-white/20 hover:text-sk-white/50 
//                   disabled:opacity-30 focus-visible:ring-offset-sk-white 
//                   focus-visible:ring-sk-black w-fit px-0 py-1 
//                   text-base md:text-lg
//                 ">
//                   <span className="flex items-center gap-1.5 font-dmMono uppercase">
//                     Learn more
//                     <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
//                       <path
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="1.5"
//                         d="m13.75 6.75 5.5 5.25-5.5 5.25M19 12H4.75"
//                       />
//                     </svg>
//                   </span>
//                 </button>
//               </a>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

export default function WageCodeSection() {
  return (
    <section className="bg-sk-sand">
      <div className="mx-auto max-w-7xl px-5 py-24 md:py-36">
        
        {/* Heading */}
        <h4 className="text-[48px] font-normal leading-[100%] mb-12 md:mb-16">
          The New Wage Code Challenge <br /> Are Your Salaries Compliant?
        </h4>

        {/* Two Cards */}
        <div className="flex w-full flex-col gap-2 md:flex-row">

          {/* Card 1 — Problem Summary */}
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
                  Compliance Risk
                </p>
              </div>

              {/* Title */}
              <p className="text-[20px] md:text-[34px] leading-[110%] max-w-xl text-white">
                Basic Pay must be 50% of Total Compensation — are you aligned?
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

          {/* Card 2 — Impact Description */}
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
                  Business Impact
                </p>
              </div>

              {/* Title */}
              <p className="text-[20px] md:text-[34px] leading-[110%] max-w-xl text-white">
                Wrong structuring increases PF, Gratuity, and risks penalties.
              </p>

              {/* Description */}
              <p className="text-white/80 text-sm md:text-base max-w-xl leading-[150%]">
                This new Wage Code directly affects take-home salary,
                employer cost, and statutory liabilities.
                One misstep can lead to employee disputes, legal exposure,
                and unexpected financial burdens.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
