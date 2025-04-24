import React from "react";
import { Link } from "react-router-dom";

function ProfileMenu({ onLogout }) {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
      <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-decoration-none">
        Edit Profile
      </Link>
      <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-decoration-none">
        Dashboard
      </Link>
      <button
        onClick={onLogout}
        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
      >
        Logout
      </button>
    </div>
  );
}

export default ProfileMenu;
