"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

export default function NotionNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // "notion" | "explore" | null

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full border-b border-[#0000001a] bg-white fixed top-0 left-0 z-9999">
        <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center font-semibold">
            <a href="/">PAYROLL</a>
          </div>

          {/* CENTER (DESKTOP) */}
          <div className="hidden md:flex items-center gap-7 text-[15px] text-gray-800">
            {/* NOTION DROPDOWN (HOVER) */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenMenu("notion")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="flex items-center gap-1 hover:text-black">
                Notion <FiChevronDown />
              </button>
            </div>

            <a href="#" className="hover:text-black">
              Mail
            </a>
            <a href="#" className="hover:text-black">
              Calendar
            </a>
            <a href="#" className="hover:text-black">
              AI
            </a>
            <a href="#" className="hover:text-black">
              Enterprise
            </a>
            <a href="#" className="hover:text-black">
              Pricing
            </a>

            {/* EXPLORE DROPDOWN */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenMenu("explore")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="flex items-center gap-1 hover:text-black">
                Explore <FiChevronDown />
              </button>
            </div>

            <a href="#" className="hover:text-black">
              Request a demo
            </a>
          </div>

          {/* RIGHT (DESKTOP) */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="hover:text-black">
              Log in
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Get Notion free
            </a>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-2xl"
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* ------- FULL WIDTH DROPDOWN MENUS (DESKTOP) ------- */}

      {/* NOTION DROPDOWN */}
      {openMenu === "notion" && (
        <div
          onMouseEnter={() => setOpenMenu("notion")}
          onMouseLeave={() => setOpenMenu(null)}
          className="
            fixed left-0 top-16 
            w-screen 
            bg-white border-t shadow-2xl 
            z-99999 
            py-12
          "
        >
          <div className="max-w-7xl mx-auto px-10 grid grid-cols-3 gap-20">
            {/* COL 1 */}
            <DropdownCol
              heading="Features"
              items={[
                { title: "Notion AI", desc: "Build, write, automate" },
                { title: "Agents", desc: "Handles manual tasks", badge: "New" },
                { title: "Enterprise Search", desc: "Find answers instantly" },
                { title: "AI Meeting Notes", desc: "Perfectly written by AI" },
              ]}
            />

            {/* COL 2 */}
            <DropdownCol
              heading=""
              items={[
                { title: "Docs", desc: "Simple & powerful" },
                { title: "Knowledge Base", desc: "Centralize your knowledge" },
                { title: "Projects", desc: "Manage any project" },
                { title: "Sites", desc: "Publish anything fast" },
              ]}
            />

            {/* COL 3 */}
            <DropdownCol
              heading="Get started"
              items={[
                {
                  title: "Explore AI use cases",
                  desc: "See what Notion AI can do",
                  badge: "New",
                },
                {
                  title: "Browse marketplace",
                  desc: "Templates for everything",
                },
                { title: "View integrations", desc: "Connect your apps" },
                { title: "Download web clipper", desc: "Save from the web" },
              ]}
            />
          </div>
        </div>
      )}

      {/* EXPLORE DROPDOWN */}
      {openMenu === "explore" && (
        <div
          onMouseEnter={() => setOpenMenu("explore")}
          onMouseLeave={() => setOpenMenu(null)}
          className="
            fixed left-0 top-16 
            w-screen 
            bg-white border-t shadow-2xl 
            z-99999 
            py-12
          "
        >
          <div className="max-w-7xl mx-auto px-10 grid grid-cols-4 gap-20">
            <DropdownSimple
              heading="Teams"
              items={["Eng & Product", "Design", "Marketing", "IT"]}
            />
            <DropdownSimple
              heading="Team size"
              items={["Startups", "SMBs", "Enterprise", "Education"]}
            />
            <DropdownSimple
              heading="Learn"
              items={[
                "Help center",
                "Academy",
                "Blog",
                "Community",
                "Partners",
              ]}
            />
            <DropdownSimple
              heading="Build"
              items={["API", "Templates", "Security", "Find a partner"]}
            />
          </div>
        </div>
      )}

      {/* ---------------- MOBILE MENU ---------------- */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-xl border-t px-6 pt-20 pb-6 space-y-4">
          <MobileAccordion heading="Notion">
            <MobileSimple
              items={[
                "Notion AI",
                "Agents",
                "Enterprise Search",
                "AI Meeting Notes",
                "Docs",
                "Knowledge Base",
                "Projects",
                "Sites",
              ]}
            />
          </MobileAccordion>

          <MobileLink label="Mail" />
          <MobileLink label="Calendar" />
          <MobileLink label="AI" />
          <MobileLink label="Enterprise" />
          <MobileLink label="Pricing" />

          <MobileAccordion heading="Explore">
            <MobileSimple
              items={[
                "Eng & Product",
                "Design",
                "Marketing",
                "IT",
                "Startups",
                "SMBs",
                "Enterprise",
                "Education",
              ]}
            />
          </MobileAccordion>

          <MobileLink label="Request a demo" />

          <div className="pt-4 border-t">
            <MobileLink label="Log in" />
            <a
              href="#"
              className="block text-center mt-3 px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Get Notion free
            </a>
          </div>
        </div>
      )}
    </>
  );
}

/* -------------------- HELPERS ---------------------- */

function DropdownCol({ heading, items }) {
  return (
    <div>
      {heading && <h3 className="text-sm text-gray-500 mb-4">{heading}</h3>}
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.title} className="cursor-pointer">
            <div className="flex items-center gap-2">
              <h4 className="text-lg font-semibold">{item.title}</h4>
              {item.badge && (
                <span className="px-2 py-0.5 text-xs bg-gray-200 rounded-full">
                  {item.badge}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DropdownSimple({ heading, items }) {
  return (
    <div>
      <h3 className="text-sm text-gray-500 mb-4">{heading}</h3>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it} className="cursor-pointer hover:text-black text-[15px]">
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileAccordion({ heading, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex justify-between py-2 text-[16px] font-medium"
      >
        {heading}
        <FiChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open && <div className="pl-4 mt-2">{children}</div>}
    </div>
  );
}

function MobileSimple({ items }) {
  return (
    <ul className="space-y-1">
      {items.map((i) => (
        <li key={i} className="py-1 text-[15px]">
          {i}
        </li>
      ))}
    </ul>
  );
}

function MobileLink({ label }) {
  return <div className="py-1 text-[16px]">{label}</div>;
}
