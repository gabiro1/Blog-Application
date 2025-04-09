import React, { useRef, useEffect, useState } from "react";
import logo from '../../assets/images/Logo - icon.png';
import { useAuth } from "../../context/AuthContext";

function RegisterModal({ isOpen, onClose, onSwitchToLogin }) {
  const modalRef = useRef(null);
  const { register } = useAuth();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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

  const handleRegister = () => {
    if (!email || !firstName || !lastName || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const result = register(email, password, { firstName, lastName });
    if (result.error) {
      setError(result.error);
    } else {
      setError("");
      onClose(); // Close modal on successful registration
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div
        ref={modalRef}
        className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative"
      >
        <h2 className="text-center text-gray-700 text-lg font-medium">Welcome to</h2>
        <div className="flex items-center justify-center mb-2">
          <img src={logo} alt="Logo" className="h-10" />
        </div>
        <p className="text-center text-sm text-gray-500 mb-6">
          Enter your information below to continue
        </p>

        {error && (
          <div className="text-red-600 text-sm mb-3 text-center">{error}</div>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded-lg bg-gray-100"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="First name"
            className="w-1/2 px-4 py-2 border rounded-lg bg-gray-100"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-1/2 px-4 py-2 border rounded-lg bg-gray-100"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="flex gap-4 mb-4">
          <input
            type="password"
            placeholder="Create Password"
            className="w-1/2 px-4 py-2 border rounded-lg bg-gray-100"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-1/2 px-4 py-2 border rounded-lg bg-gray-100"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          className="w-full bg-green-800 text-white py-2 rounded-lg mb-4"
          onClick={handleRegister}
        >
          Create Account
        </button>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <span
            className="text-green-800 font-medium cursor-pointer"
            onClick={() => {
              onClose();
              onSwitchToLogin();
            }}
          >
            Login
          </span>
        </p>

        <button onClick={onClose} className="absolute top-4 right-4 text-black text-xl">
          &times;
        </button>
      </div>
    </div>
  );
}

export default RegisterModal;
