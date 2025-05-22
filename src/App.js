// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Navbar/Header";
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogDetails from "./components/blog/BlogDetail";
import RegisterPage from "./components/Sign up/RegisterPage";
import LoginPage from "./components/Login/LoginPage";
import EditProfileForm from "./components/EditProfile/EditProfileForm";

import BlogPostDashboard from "./components/Dashboard/Post/BlogPostDashboard";
import CommentDashboard from "./components/Dashboard/Comment/CommentDashboard";
import LikesDashboard from "./components/Dashboard/Likes/LikesDashboard";
import Dashboard from "./components/Dashboard/Dashboard";

// Auth
import { AuthProvider, useAuth } from "../src/components/AuthContext/AuthContext";

const AppContent = () => {
  const { user, logout, userProfilePic } = useAuth();

  return (
    <>
      <Header
        isAuthenticated={!!user}
        onLogout={logout}
        userProfilePic={userProfilePic}
      />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Private Routes */}
        <Route
          path="/edit-profile"
          element={
            // <PrivateRoute>
              <EditProfileForm />
             //</PrivateRoute>
          }
        />
        <Route
          path="/blog/:postId"
          element={
            // <PrivateRoute>
              <BlogDetails />
            // </PrivateRoute> 
              
           
          }
        />
        <Route
          path="/post/:postId"
          element={
            //<PrivateRoute>
              <BlogDetails />
             //</PrivateRoute>
          }
        />
        <Route
          path="/posts/:id"
          element={
            // <PrivateRoute>
              <BlogDetails />
             //</PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            // <PrivateRoute>
              <Dashboard />
              // </PrivateRoute>
          }
        />
        <Route
          path="/post"
          element={
            <PrivateRoute>
              <BlogPostDashboard />
             </PrivateRoute>
          }
        />
        <Route
          path="/comments"
          element={
            // <PrivateRoute>
              <CommentDashboard />
            // </PrivateRoute>
          }
        />
        <Route
          path="/likes"
          element={
            // <PrivateRoute>
              <LikesDashboard />
            // {/* </PrivateRoute> */}
          }
        />
        
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

export default App;
 