import React from "react";
import heroImage from "../assets/images/hero-image.jpg";

function Hero() {
  return (
    <section
      className="relative flex flex-col items-start justify-center h-screen text-white px-12"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(14, 85, 45, 0.7), rgba(238, 241, 248, 0.3)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h4 className="text-sm uppercase tracking-widest">POSTED ON TECHNOLOGY</h4>
      <h1 className="text-4xl font-bold max-w-2xl">
        Step-by-step guide to building a secure and scalable web application
      </h1>
      <p className="text-sm mt-2">By James West | May 23, 2025</p>
      <p className="max-w-lg mt-4">
        Understanding the fundamentals of web security and scalability is
        crucial for modern developers.
      </p>
      <button className="bg-green-800 text-white px-6 py-3 rounded-md mt-6 hover:bg-green-700 transition">
        Read More
      </button>
    </section>
  );
}

export default Hero;
