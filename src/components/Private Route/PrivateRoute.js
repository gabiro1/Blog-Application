import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/';

const PrivateRoute = ({ children }) => {
  // Try to get user from context
  const { user } = useAuth();

  // Fallback: check for token in localStorage
  const token = localStorage.getItem("authToken");

  // Allow access if user exists or token is present
  if (user || token) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;