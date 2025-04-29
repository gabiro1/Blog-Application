import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/Logo - icon.png';
import { useAuth } from "../../context/AuthContext";
import Footer from "../UI/Footer";

function RegisterPage() {
  const { register } = useAuth();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (!email || !firstName || !lastName || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const username = `${firstName} ${lastName}`;
    const result = await register(email, password, username);

    if (result.error) {
      setError(result.error);
    } else {
      setError("");
      // Optionally redirect to login after successful registration
      // navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg">
        <h2 className="text-center text-gray-700 text-lg font-medium">Welcome to</h2>
        <div className="flex items-center justify-center mb-2">
          <img src={logo} alt="Logo" className="h-10" />
        </div>
        <p className="text-center text-sm text-gray-500 mb-6">Enter your information below to continue</p>

        {error && <div className="text-red-600 text-sm mb-3 text-center">{error}</div>}

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
          <Link
            to="/login"
            className="text-green-800 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
      <Footer  />
    </div>
  );
}

export default RegisterPage;
