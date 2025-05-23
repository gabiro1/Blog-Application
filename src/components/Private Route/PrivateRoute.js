import React, { useEffect } from "react";
import { useAuth } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isLogged, user, authToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged || !user || !authToken) {
      console.log("not authenticated")
      navigate("/login");
      
    }
  }, [isLogged, user, authToken, navigate]);

  if (isLogged && user && authToken) {
    console.log("qwerty ")
    return children;
  }

  return null; 
};

export default ProtectedRoute;
