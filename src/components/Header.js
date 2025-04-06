import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png"; 

function Header({ isAuthenticated, onLogout }) {
  return (
    <header className="header-container">
      <div className="header">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>

        {/* Navigation Links */}
        <nav>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          
          {isAuthenticated ? (
            <div className="auth-buttons">
              <button className="btn-profile">Profile</button>
              <button className="btn-logout" onClick={onLogout}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn-login">Login</button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
