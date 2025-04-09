import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/UI/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoggedOut from './components/Auth/LoggedOut';
import AuthModalContainer from './components/Auth/AuthModalContainer';
import Dashboard from './components/Dashboard/Dashboard'; 
import avatar from './assets/images/avatar.jpg';
// import ProfilePage from './components/ProfilePage'; // Adjust the path as needed

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
        <Route path="/login" element={<AuthModalContainer />} />
        <Route path="/logged-out" element={<LoggedOut />} />
        {/* <Route path="/profile" element={<ProfilePage />} /> */}

        {/* Dashboard  */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
