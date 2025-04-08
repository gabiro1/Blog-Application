import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/Logo.png";

function Header({ isAuthenticated, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 custom-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/blog" className="hover:text-gray-300 transition">Blog</Link>
          <Link to="/about" className="hover:text-gray-300 transition">About</Link>
          <Link to="/contact" className="hover:text-gray-300 transition">Contact</Link>

          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <button className="bg-white text-black px-4 py-1 rounded-lg font-medium">Profile</button>
              <button onClick={onLogout} className="bg-white text-black px-4 py-1 rounded-lg font-medium">Logout</button>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-white text-black px-4 py-1 rounded-lg font-medium">Login</button>
            </Link>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 custom-gradient text-white">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-black no-underline" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/blog" className="text-black no-underline" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link to="/about" className="text-black no-underline" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" className="text-black no-underline" onClick={() => setMenuOpen(false)}>Contact</Link>

            {isAuthenticated ? (
              <div className="flex flex-col gap-2">
                <button className="bg-white text-black px-4 py-1 rounded-lg font-medium">Profile</button>
                <button onClick={onLogout} className="bg-white text-black px-4 py-1 rounded-lg font-medium">Logout</button>
              </div>
            ) : (
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                <button className="bg-white text-black px-4 py-1 rounded-lg font-medium">Login</button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
