"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    // { label: "Temp Staffing", href: "/tempstaffing" },
    // { label: "Payroll", href: "/payroll-processing" },
    // { label: "Labour Law", href: "/labour-law" },
    { label: "About Us", href: "/aboutUs" },
    { label: "Pricing", href: "/pricing" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#f9f3e9] text-black" : "bg-transparent text-white"
      }`}
    >
      <nav className="flex font-navbar items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo (left) */}
        <Link href="/" className="text-lg md:text-xl font-bold">
          PAYROLL
        </Link>

        {/* Desktop Links + Icons (right) */}
     
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold uppercase px-2 py-1 rounded-sm transition-colors ${
                  isActive
                    ? scrolled
                      ? "text-[#137A6C]"
                      : "underline text-white"
                    : scrolled
                    ? "text-black hover:text-[#137A6C]"
                    : "text-white hover:text-gray-200"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Contact Icons */}
          <div className="flex items-center gap-2 ml-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919945933333"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                scrolled
                  ? "border-black bg-white text-black hover:bg-gray-100 hover:border-black hover:text-black"
                  : "border-black hover:border-white bg-white text-black hover:bg-transparent hover:text-white"
              }`}
            >
              <FaWhatsapp className="h-4 w-4" />
            </a>

            {/* Email */}
            <a
              href="mailto:hello@epfdesk.com"
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                scrolled
                  ? "border-black bg-white text-black hover:bg-gray-100 hover:border-black hover:text-black"
                  : "border-black hover:border-white bg-white text-black hover:bg-transparent hover:text-white"
              }`}
            >
              <MdEmail className="h-4 w-4" />
            </a>

            {/* Phone */}
            <a
              href="tel:+919945933333"
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                scrolled
                  ? "border-black bg-white text-black hover:bg-gray-100 hover:border-black hover:text-black"
                  : "border-black hover:border-white bg-white text-black hover:bg-transparent hover:text-white"
              }`}
            >
              <FiPhone className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-2xl"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((s) => !s)}
        >
          {mobileOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden overflow-hidden border-t border-gray-200 bg-white"
          >
            <div className="px-6 py-4 max-w-7xl mx-auto flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block w-full text-left px-3 py-2 rounded-sm font-semibold transition-colors ${
                      isActive
                        ? "text-[#137A6C]"
                        : "text-black hover:text-[#137A6C]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Contact Icons */}
              <div className="flex gap-2 mt-2">
                <a
                  href="https://wa.me/919980511980"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black text-black hover:bg-black hover:text-white transition-colors"
                >
                  <FaWhatsapp className="h-4 w-4" />
                </a>
                <a
                  href="mailto:hello@epfdesk.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black text-black hover:bg-black hover:text-white transition-colors"
                >
                  <MdEmail className="h-4 w-4" />
                </a>
                <a
                  href="tel:+919980511980"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black text-black hover:bg-black hover:text-white transition-colors"
                >
                  <FiPhone className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}