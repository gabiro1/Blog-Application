import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import FeaturedPost from "../components/FeaturedPost";
import AllPosts from "../components/AllPosts";
import Categories from "../components/Categories";
import About from "../components/About";
import WhyWeStarted from "../components/WhyWeStarted";
import Authors from "../components/Authors";
import Footer from "../components/Footer";



function Home({ isAuthenticated, setIsAuthenticated }) {
  return (
    <>
      {/* <Header isAuthenticated={isAuthenticated} /> */}
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

export default Home;
