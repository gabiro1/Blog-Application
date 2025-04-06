import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/images/footer-logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Branding */}
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <h3 className="footer-section-header">Support</h3>
          <p>Rubavu, Gisenyi</p>
          <p>Email: hblabdigital@gmail.com</p>
          <p>Phone: +250 789 028 283</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-section-header">Quick Links</h3>
          <ul>
            <li><a className="text-white no-underline" href="#">Privacy Policy</a></li>
            <li><a className="text-white no-underline" href="#">Terms of Use</a></li>
            <li><a className="text-white no-underline" href="#">FAQ</a></li>
            <li><a className="text-white no-underline" href="#">Contact</a></li>
          </ul>
        </div>

        {/* Social Media & WhatsApp Support */}
        <div className="footer-social">
          <div className ="footer-social-section">
          <h3 className="footer-section-header">Get in touch with us!</h3>
          <div className="social-icons">
            <FaFacebook className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaLinkedin className="social-icon" />
          </div>
          </div>
          <div className="whatsapp-btn">
            <p>Contact our support team</p>
            <FaWhatsapp className="whatsapp-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
