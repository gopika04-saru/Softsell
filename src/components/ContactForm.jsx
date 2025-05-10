import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer  id="contact" className="bg-white py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left Column: Logo and tagline */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-[#008080] mb-4">
                SoftSell
                </h1>
            <p className="text-[#6b7280] text-lg max-w-xs">
              Turning unused software licenses into instant revenue for businesses worldwide.
            </p>
          </div>

          {/* Link Columns */}
          <div className="flex flex-[2] justify-between flex-wrap gap-10">
            {/* COMPANY Column */}
            <div>
              <h2 className="text-[#111827] font-bold uppercase text-sm mb-4 tracking-wider">COMPANY</h2>
              <ul className="space-y-3">
                <li><a href="#" className="no-underline text-[#6b7280] hover:text-gray-900 transition-colors">About Us</a></li>
                <li><a href="#" className="no-underline text-[#6b7280] hover:text-gray-900 transition-colors">Careers</a></li>
                <li><a href="#" className="no-underline text-[#6b7280] hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#" className="no-underline text-[#6b7280] hover:text-gray-900 transition-colors">Press</a></li>
              </ul>
            </div>

            {/* SUPPORT Column */}
            <div>
              <h2 className="text-[#111827] font-bold uppercase text-sm mb-4 tracking-wider">SUPPORT</h2>
              <ul className="space-y-3">
                <li><a href="#" className="no-underline text-[#6b7280] hover:text-gray-900 transition-colors">Help Center</a></li>
                <li><a href="#" className="no-underline text-[#6b7280] hover:text-gray-900 transition-colors">Contact Us</a></li>
                <li><a href="#" className="no-underline text-[#6b7280] hover:text-gray-900 transition-colors">FAQs</a></li>
                <li><a href="#" className="no-underline text-[#6b7280] hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="no-underline text-[#6b7280] hover:text-gray-900 transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            {/* RESOURCES Column */}
            <div>
              <h2 className="text-[#111827] font-bold uppercase text-sm mb-4 tracking-wider">RESOURCES</h2>
              <ul className="space-y-3">
                <li><a href="#" className="no-underline text-[#6b7280] hover:text-gray-900 transition-colors">License Valuation Guide</a></li>
                <li><a href="#" className="no-underline text-[#6b7280] hover:text-gray-900 transition-colors">Software License Types</a></li>
                <li><a href="#" className="no-underline text-[#6b7280] hover:text-gray-900 transition-colors">Market Trends</a></li>
                <li><a href="#" className="no-underline text-[#6b7280] hover:text-gray-900 transition-colors">Case Studies</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="pt-8 mt-8 border-t border-gray-200">
          {/* Copyright */}
          <p className="text-[#6b7280] text-center">
            © 2025 SoftSell. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center mt-6">
            <div className="flex space-x-4 text-[#374151] text-xl">
              <a href="#"><FaFacebookF className="hover:text-gray-900" /></a>
              <a href="#"><FaTwitter className="hover:text-gray-900" /></a>
              <a href="#"><FaInstagram className="hover:text-gray-900" /></a>
              <a href="#"><FaLinkedinIn className="hover:text-gray-900" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
