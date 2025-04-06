import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedPost from "../components/FeaturedPost";
import AllPosts from "../components/AllPosts";
import Categories from "../components/Categories";
import About from "../components/About";
import WhyWeStarted from "../components/WhyWeStarted";
import Authors from "../components/Authors";
import Footer from "../components/Footer";



function Login({ isAuthenticated, setIsAuthenticated }) {
  return (
    <>
      {/* <Header setIsAuthenticated={setIsAuthenticated} /> */}
      <Hero />
      <FeaturedPost />
      {/* <AllPosts /> */}
      <Categories />
      <About />
      <WhyWeStarted />
      <Authors />
      <Footer />
    </>
  );
}

export default Login;
