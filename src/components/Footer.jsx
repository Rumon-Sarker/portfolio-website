import React from "react";
import {  FaTwitter, FaLinkedinIn, FaInstagram, FaFacebook, FaMapMarkerAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Quick Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="hover:text-gray-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gray-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <HiMail className="mr-2 text-lg" />
                <a href="mailto:someone@example.com" className="hover:text-gray-400 transition-colors">someone@example.com</a>
              </li>
              <li className="flex items-center">
                <FaLinkedinIn className="mr-2 text-lg" />
                <a href="tel:+1234567890" className="hover:text-gray-400 transition-colors">+1234567890</a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-lg" />
                <span>1234 Your Street, Your City</span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-600 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition-colors">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Brand. All rights reserved. |{" "}
            <a href="/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy Policy</a> |{" "}
            <a href="/terms-of-use" className="hover:text-gray-400 transition-colors">Terms of Use</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
