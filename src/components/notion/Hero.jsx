"use client";

export default function NotionHero({ data }) {
  return (
    <section className="relative w-full pt-32 pb-20 bg-white">
      <div className="flex justify-center mb-6">
        <img
          src="/images/abstract.png"
          alt="Hero graphic"
          className="w-full h-auto max-w-full"
        />
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
