"use client";

export default function NotionHero({data}) {
  return (
    <section className="relative w-full pt-32 pb-20 bg-white">

      {/* MASKED VIDEO ROW */}
      <div className="flex justify-center mb-12">
        <div
          className="overflow-hidden"
          style={{
            WebkitMaskImage: 'url("/images/homepage-hero-animation-mask.png")',
            maskImage: 'url("/images/homepage-hero-animation-mask.png")',
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-[950px] max-w-full"
            src="/videos/homepage-hero-animation.mp4"
            poster="/front-static/pages/home/fall/hero/homepage-hero-animation-ff.png"
          />
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-center font-bold text-5xl md:text-6xl leading-tight text-black">
        {data?.title}
      </h1>

      {/* Subheading */}
      <p className="text-center mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        {data?.subTitle}
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-10">
        <a
          href="mailto:hello@epfdesk.com"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-md"
        >
          Get a quote
        </a>

        <a
          href="#"
          className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-lg rounded-md text-gray-700"
        >
          Request a demo
        </a>
      </div>
    </section>
  );
}
