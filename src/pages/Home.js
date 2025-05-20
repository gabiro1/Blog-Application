import React from "react";
import Hero from "../components/Home/Hero";
import Featured from "../components/Featured";
import Categories from "../components/Categories";
import About from "../components/about/About";
import WhyWeStarted from "../components/WhyWeStarted";
import Authors from "../components/Authors";
import Footer from "../components/Footer/Footer";
import JoinTeamSection from "../components/about/JoinTeamSection";
// import BlogPage from "./Blog";

function Home({ isAuthenticated, setIsAuthenticated }) {
  return (
    <>
      {/* Uncomment the Header if needed */}
      {/* <Header isAuthenticated={isAuthenticated} /> */}
      <Hero />
      <Featured />
      <Categories />
      <About />
      <WhyWeStarted />
      <Authors />
      <JoinTeamSection />
      <Footer />
    </>
  );
}

export default Home;