import React, { createContext, useContext, useState, useEffect } from "react";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isLogged, setIsLogged] = useState(false);
  const [authToken, setAuthToken] = useState();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const savedUser = localStorage.getItem("user");
    console.log("in auth context")
    if (token && savedUser) {
      setAuthToken(token);
      setUser(JSON.parse(savedUser));
      setIsLogged(true);
    }
  }, []);

  const login = (user, token) => {
    setAuthToken(token);
    setUser(user);
    setIsLogged(true);
    localStorage.setItem("authToken", token);
    localStorage.setItem("user", JSON.stringify(user));
  
  console.log("logging...")
  };

  const logout = () => {
    setAuthToken(null);
    setUser(null);
    setIsLogged(false);
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ isLogged, authToken, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext) ;
