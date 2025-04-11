import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/Logo.png";
import LoginModal from "../Auth/LoginModal";
import ProfileMenu from "../Profile/ProfileMenu";

function Header({ isAuthenticated, onLogout, userProfilePic }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#EEF1F8] to-[#0E552D] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 ml-6">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 mr-6">
          <Link to="/" className="hover:text-gray-200 text-white text-decoration-none">Home</Link>
          <Link to="/blog" className="hover:text-gray-200 text-white text-decoration-none">Blog</Link>
          <Link to="/about" className="hover:text-gray-200 text-white text-decoration-none">About</Link>
          <Link to="/contact" className="hover:text-gray-200 text-white text-decoration-none">Contact</Link>

          {isAuthenticated ? (
            <div className="relative">
              <img
                src={userProfilePic}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-white cursor-pointer"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              />
              {showProfileMenu && <ProfileMenu onLogout={onLogout} />}
            </div>
          ) : (
            <button
              onClick={() => setShowLogin(true)}
              className="bg-white text-black px-4 py-1 rounded-lg font-medium hover:bg-gray-200"
            >
              Login
            </button>
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
        <div className="md:hidden px-4 pb-4 bg-gradient-to-r from-[#EEF1F8] to-[#0E552D] text-white text-decoration-none">
          <div className="flex flex-col gap-4">
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-200 text-white text-decoration-none">Home</Link>
            <Link to="/blog" onClick={() => setMenuOpen(false)} className="hover:text-gray-200 text-white text-decoration-none">Blog</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-gray-200 text-white text-decoration-none">About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-200 text-white text-decoration-none">Contact</Link>

            {isAuthenticated ? (
              <div className="flex items-center mt-2">
                <img
                  src={userProfilePic}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onLogout();
                  }}
                  className="bg-white text-black px-4 py-1 rounded-lg font-medium ml-4"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setShowLogin(true);
                  setMenuOpen(false);
                }}
                className="bg-white text-black px-4 py-1 rounded-lg font-medium"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </header>
  );
}

export default Header;
