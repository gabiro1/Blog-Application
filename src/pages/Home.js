import React from "react";
import Hero from "../components/Home/Hero";
import FeaturedPost from "../components/FeaturedPost";
import AllPosts from "../components/AllPosts";
import Categories from "../components/Categories";
import About from "../components/about/About";
import WhyWeStarted from "../components/WhyWeStarted";
import Authors from "../components/Authors";
import Footer from "../components/UI/Footer";



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
