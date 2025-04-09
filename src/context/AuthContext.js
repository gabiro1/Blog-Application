import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load user from localStorage on first load
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) setUser(storedUser);
  }, []);

  const login = (email, password) => {
    // Simulate validation — add real backend/API logic later
    if (!email || !password) return { error: "All fields are required." };

    const existingUser = JSON.parse(localStorage.getItem('user'));
    if (!existingUser || existingUser.email !== email || existingUser.password !== password) {
      return { error: "Invalid credentials." };
    }

    setUser(existingUser);
    return { success: true };
  };

  const register = (name, email, password) => {
    if (!name || !email || !password) return { error: "All fields are required." };

    const userData = { name, email, password };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
