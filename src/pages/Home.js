import React from "react";
import Hero from "../components/Home/Hero";
import Featured from "../components/Featured";
import Categories from "../components/Categories";
import About from "../components/about/About";
import WhyWeStarted from "../components/WhyWeStarted";
import Authors from "../components/Authors";
import Footer from "../components/UI/Footer";
import BlogPage from "./Blog";



function Home({ isAuthenticated, setIsAuthenticated }) {
  return (
    <>
      {/* <Header isAuthenticated={isAuthenticated} /> */}
      <Hero />
      <Featured />
      <Categories />
      <About />
      <WhyWeStarted />
      <Authors />
      <Footer />
    </>
  );
}

export default Home;
