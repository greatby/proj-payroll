"use client";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";

export default function BentoCards() {
  return (
    <section className=" bg-[#F5F3EF] py-6 ">
      {/* -------- CARD 1 -------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1  md:grid-cols-2 gap-6 mt-12">

      <article className="bg-white rounded-2xl shadow-sm overflow-hidden relative">
        {/* Header */}
        <div className="p-6">
          <p className="text-sm text-gray-500">Enterprise Search</p>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">One search for everything.</h2>
            <IoArrowForward className="text-black text-2xl" />
          </div>
        </div>

        {/* Image Container */}
        <div className="bg-red-400 p-4 rounded-xl mx-4 mb-8">
          <Image
            src="/images/bento-search.jpg"
            alt="Enterprise Search"
            width={1400}
            height={900}
            className="rounded-xl"
          />
        </div>

        {/* Small Character Icon */}
        <div className="absolute bottom-4 right-4">
          <Image
            src="/images/character-1.png"
            alt="icon"
            width={70}
            height={70}
          />
        </div>

        {/* Clickable Link */}
        <a
          href="/product/enterprise-search"
          className="absolute inset-0"
          aria-label="One search for everything"
        />
      </article>

      {/* -------- CARD 2 -------- */}
      <article className="bg-white rounded-2xl shadow-sm overflow-hidden relative">
        {/* Header */}
        <div className="p-6">
          <p className="text-sm text-gray-500">AI Meeting Notes</p>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Perfect notes, every time.</h2>
            <IoArrowForward className="text-black text-2xl" />
          </div>
        </div>

        {/* Image Container */}
        <div className="bg-blue-500 p-4 rounded-xl mx-4 mb-8">
          <Image
            src="/images/bento-meeting.jpg"
            alt="AI Meeting Notes"
            width={1400}
            height={900}
            className="rounded-xl"
          />
        </div>

        {/* Small Character Icon */}
        <div className="absolute bottom-4 right-4">
          <Image
            src="/images/character-2.png"
            alt="icon"
            width={70}
            height={70}
          />
        </div>

        {/* Clickable Link */}
        <a
          href="/product/ai-meeting-notes"
          className="absolute inset-0"
          aria-label="Perfect notes"
        />
      </article>
      </div>
    </section>
  );
}
