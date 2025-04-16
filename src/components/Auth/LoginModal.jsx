import React, { useRef, useEffect, useState } from "react";
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import logo from '../../assets/images/Logo - icon.png';
import { useAuth } from "../../context/AuthContext";

function LoginModal({ isOpen, onClose, onSwitchToRegister }) {
  const modalRef = useRef(null);
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!isOpen) return null;

  const handleLogin = async () => {
    const result = await login(email, password);
    if (result?.error) {
      setError(result.error);
    } else {
      setError("");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center">
      <div
        ref={modalRef}
        className="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl relative animate-fade-in"
      >
        <h2 className="text-center text-black text-lg font-semibold">Welcome to</h2>
        <div className="flex items-center justify-center my-2">
          <img src={logo} alt="Logo" className="h-10" />
        </div>
        <p className="text-center text-sm text-gray-500 mb-6">
          Please login to your account.
        </p>

        {error && (
          <div className="text-red-600 text-sm mb-3 text-center">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-green-700" />
            <span className="text-sm text-gray-700">Remember me</span>
          </label>
          <button className="text-green-800 text-sm font-medium hover:underline">
            Forgot Password?
          </button>
        </div>

        <button
          className="w-full bg-green-800 hover:bg-green-700 transition text-white py-2 rounded-lg mb-4 font-medium"
          onClick={handleLogin}
        >
          Log In
        </button>

        <div className="text-center text-sm text-gray-500 mb-4">Or continue with</div>

        <div className="flex justify-center gap-4 mb-4">
          <button className="flex items-center text-black gap-2 border px-4 py-2 rounded-md shadow-sm hover:bg-gray-100">
            <FaGoogle size={20} />
            Google
          </button>
          <button className="flex items-center text-black gap-2 border px-4 py-2 rounded-md shadow-sm hover:bg-gray-100">
            <FaFacebook size={20} />
            Facebook
          </button>
        </div>

        <p className="text-center text-sm text-gray-500">
          New member here?{" "}
          <span
            className="text-green-800 font-medium cursor-pointer hover:underline"
            onClick={() => {
              onClose();
              onSwitchToRegister();
            }}
          >
            Register Now
          </span>
        </p>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black text-2xl hover:text-red-600 transition"
          aria-label="Close modal"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default LoginModal;
