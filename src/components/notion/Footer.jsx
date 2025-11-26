"use client";

import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";

export default function NotionFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP FLEX ROW */}
        <div className="flex flex-col md:flex-row justify-between gap-16">

          {/* LEFT BLOCK */}
          <div className="w-full md:w-1/3">

            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/notion-logo.svg"
                alt="Notion"
                className="w-10 h-10"
              />
              <h2 className="text-2xl font-semibold">Notion</h2>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-5 text-gray-700 text-xl mb-6">
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
              <FaFacebook />
              <FaYoutube />
            </div>

            {/* Language button */}
            <button className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm mb-4">
              <IoGlobeOutline className="text-lg" />
              English (US)
            </button>

            {/* Cookie settings */}
            <p className="text-sm text-gray-600 mb-4 cursor-pointer">
              Cookie settings
            </p>

            {/* Copyright */}
            <p className="text-sm text-gray-500">© 2025 Notion Labs, Inc.</p>
          </div>

          {/* RIGHT COLUMNS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full">

            {/* Column: Company */}
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><a href="#">About us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Status</a></li>
                <li><a href="#">Terms & privacy</a></li>
                <li><a href="#">Your privacy rights</a></li>
              </ul>
            </div>

            {/* Column: Download */}
            <div>
              <h3 className="font-semibold mb-3">Download</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><a href="#">iOS & Android</a></li>
                <li><a href="#">Mac & Windows</a></li>
                <li><a href="#">Calendar</a></li>
                <li><a href="#">Web Clipper</a></li>
              </ul>
            </div>

            {/* Column: Resources */}
            <div>
              <h3 className="font-semibold mb-3">Resources</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><a href="#">Help center</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Integrations</a></li>
                <li><a href="#">Templates</a></li>
                <li><a href="#">Partner programs</a></li>
              </ul>
            </div>

            {/* Column: Notion for */}
            <div>
              <h3 className="font-semibold mb-3">Notion for</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><a href="#">Enterprise</a></li>
                <li><a href="#">Small business</a></li>
                <li><a href="#">Personal</a></li>
                <li>
                  <a className="font-semibold flex items-center gap-1" href="#">
                    Explore more →
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
