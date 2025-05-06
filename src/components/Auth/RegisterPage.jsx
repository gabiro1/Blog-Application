import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo - icon.png";
import { useAuth } from "../../context/AuthContext";
import Footer from "../UI/Footer";
import axios from "axios";



function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setSuccess(""); // Clear previous success messages

    if (!email || !first_name || !last_name || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/user/register", {
        email,
        password,
        username: `${first_name} ${last_name}`,
      });

      // Assuming the response contains a success message
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000); // Redirect to login page after 2 seconds
    } catch (err) {
      // Handle errors (e.g., email already exists)
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-center text-lg font-medium text-gray-800">Welcome to</h2>
        <div className="flex justify-center my-2">
          <img src={logo} alt="Logo" className="h-10" />
        </div>
        <p className="text-center text-sm text-gray-500 mb-6">
          Enter your information below to continue
        </p>

        {error && (
          <div className="text-red-600 text-sm mb-4 text-center">{error}</div>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 mb-4 border rounded-lg bg-gray-100 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="First name"
            className="w-1/2 px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-1/2 px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="flex gap-4 mb-4">
          <input
            type="password"
            placeholder="Create Password"
            className="w-1/2 px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-1/2 px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          className="w-full bg-green-800 text-white py-2 rounded-lg mb-4 hover:bg-green-900"
          onClick={handleRegister}
        >
          Create Account
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-green-800 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
      
    </div>
    <Footer />
    </div>
  );
}

export default RegisterPage;
