import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/UI/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogDetails from "./components/PostDetails/BlogDetail";
import avatar from './assets/images/avatar.jpg'; // Example avatar image
import Dashboard from './components/Dashboard/Dashboard'; // Import the Dashboard component

// Dashboard
import BlogPostDashboard from './components/Dashboard/Post/BlogPostDashboard'; 
import CommentDashboard from "./components/Dashboard/Comment/CommentDashboard";
import LikesDashboard from './components/Dashboard/Likes/LikesDashboard';
import SubscriberDashboard from "./components/Dashboard/Subscriber/SubscriberDashboard";
import WriterDashboard from "./components/Dashboard/Writer/WriterDashboard";

function App() {
  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <Router>
      <Header
        isAuthenticated={true}
        onLogout={handleLogout}
        userProfilePic={avatar}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* BlogDetails route with dynamic postId */}
        <Route path="/post/:postId" element={<BlogDetails />} />

         {/* Dashboard  */}
         <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/post" element={<BlogPostDashboard />} />
        <Route path="/comments" element={<CommentDashboard />} />
        <Route path="/likes" element={<LikesDashboard />} />
        <Route path="/subscriber" element={<SubscriberDashboard />} />
        <Route path="/writer" element={<WriterDashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
