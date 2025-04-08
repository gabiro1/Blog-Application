import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../assets/images/footer-logo.png";

function Footer() {
  return (
    <footer className="bg-customGreen text-white py-10 px-5">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-10 text-left">
        {/* Logo Section */}
        <div className="flex-1 min-w-[250px]">
          <img src={logo} alt="Logo" className="h-14" />
        </div>

        {/* Support Section */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-xl font-bold mb-3">Support</h3>
          <p>Rubavu, Gisenyi</p>
          <p>Email: hblabdigital@gmail.com</p>
          <p>Phone: +250 789 028 283</p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-xl font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social & WhatsApp */}
        <div className="flex-1 min-w-[250px] flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-bold mb-3">Get in touch with us!</h3>
            <div className="flex gap-3">
              <FaFacebook className="text-xl hover:text-gray-300 cursor-pointer" />
              <FaTwitter className="text-xl hover:text-gray-300 cursor-pointer" />
              <FaInstagram className="text-xl hover:text-gray-300 cursor-pointer" />
              <FaLinkedin className="text-xl hover:text-gray-300 cursor-pointer" />
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white text-green-700 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition cursor-pointer w-fit">
            <p className="font-medium">Contact our support team</p>
            <FaWhatsapp className="text-xl" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
