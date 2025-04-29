// ==== AuthContext.js ====
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// Replace with your actual API base URL
const API_URL = "http://localhost:3000";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = async (email, password, username) => {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, {
        email,
        password,
        username,
      });
      return response.data;
    } catch (error) {
      return { error: error.response?.data?.message || "Registration failed" };
    }
  };

  const login = async (email, password) => {
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        return { error: data.message || "Login failed" };
      }

      localStorage.setItem("token", data.token);
      setUser({ email });

      return { success: true };
    } catch (error) {
      return { error: "Something went wrong" };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
