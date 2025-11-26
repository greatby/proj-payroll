"use client";

import React from "react";

export default function StatsSection({ data }) {
  console.log(data.cards);
  return (
    <section className="relative w-full overflow-hidden bg-[#5c0047]">
      {/* Background image layer */}
      <div
        className="absolute left-0 top-0 h-full w-full bg-cover bg-fixed bg-no-repeat"
        style={{
          backgroundImage: "url('/images/stats_section_wave.svg')",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-28">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3 md:gap-0">
          {/* Left — STATS Label */}
          <div className="flex h-full w-full items-start md:col-span-1">
            <div className="flex items-center gap-4">
              <div className="h-1.5 w-1.5 bg-[#fb9ce5]"></div>
              <p className="caption3 font-medium uppercase text-white">
                {data?.subTitle}
              </p>
            </div>
          </div>

          {/* Right — Data */}
          <div className="flex w-full flex-col gap-16 md:col-span-2 md:gap-28">
            <h4 className="text-[48px] leading-[100%] tracking-[-.035rem] text-white">
              {data?.title}
            </h4>

            <div className="grid grid-cols-1 gap-6 rounded-md bg-[#f9f3e9] px-6 py-10 md:px-12 md:py-16 lg:grid-cols-2 lg:items-center lg:gap-10">
              {/* --- Stat 1 --- */}
              {data?.cards?.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <h1 className="heading1 flex leading-[100%] text-[25px]! text-[#5c0047] lg:text-[50px]!">
                      <span className="relative inline-block">
                        {item?.mainTitle}
                        {/* <span className="absolute left-[6.1rem] top-2 text-5xl font-medium lg:-top-1 lg:left-[7.5rem]">
                    +
                  </span> */}
                      </span>
                    </h1>
                    <div className="flex flex-col">
                      <p className="body3 font-semibold text-[#5c0047]">
                        {item?.subTitle}
                      </p>
                      <p className="body3 text-[#5c0047]">
                        {item?.description}
                      </p>
                    </div>
                    {index !== data.cards.length - 1 && (
                      <hr className="my-4 w-full border-t border-[#5c004733] lg:col-span-2" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
