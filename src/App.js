import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/UI/Header";
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogDetails from "./components/PostDetails/BlogDetail";
import avatar from "./assets/images/avatar.jpg";
import Dashboard from "./components/Dashboard/Dashboard";
// Auth
import RegisterPage from "./components/Auth/RegisterPage";
import LoginPage from "./components/Auth/LoginPage";
import EditProfileForm from "./components/EditProfile/EditProfileForm"; // Profile edit form
// Dashboard
import BlogPostDashboard from "./components/Dashboard/Post/BlogPostDashboard";
import CommentDashboard from "./components/Dashboard/Comment/CommentDashboard";
import LikesDashboard from "./components/Dashboard/Likes/LikesDashboard";
import SubscriberDashboard from "./components/Dashboard/Subscriber/SubscriberDashboard";
import WriterDashboard from "./components/Dashboard/Writer/WriterDashboard";

function App() {
  const [user, setUser] = useState(null);
  const [userProfilePic, setUserProfilePic] = useState(null);

   // Check if the user is logged in by verifying the token
   useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // Simulate fetching user data using the token
      setUser({ name: "John Doe" }); // Replace with actual user data
      setUserProfilePic(avatar); // Replace with actual profile picture
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear the token
    setUser(null); // Reset user state
    setUserProfilePic(null); // Reset profile picture
    console.log("User logged out");
  };

  return (
    <Router>
      <Header
        isAuthenticated={!!user} 
        onLogout={handleLogout}
        userProfilePic={userProfilePic || avatar} // Default avatar if no profile picture
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Private Routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Routes>
                <Route path="edit-profile" element={<EditProfileForm />} />
                <Route path="blog/:postId" element={<BlogDetails />} />
                <Route path="post/:postId" element={<BlogDetails />} />
                <Route path="posts/:id" element={<BlogDetails />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="post" element={<BlogPostDashboard />} />
                <Route path="comments" element={<CommentDashboard />} />
                <Route path="likes" element={<LikesDashboard />} />
                <Route path="subscriber" element={<SubscriberDashboard />} />
                <Route path="writer" element={<WriterDashboard />} />
              </Routes>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;