import React from "react";
import { postsData } from "../Data/postsData"; 
import { Link } from "react-router-dom";

function Hero() {
  const featuredPost = postsData[5]; 

  if (!featuredPost) {
    return <p className="text-center text-red-500">No featured post found</p>;
  }

  return (
    <section
      className="relative flex flex-col items-start justify-center h-screen text-white px-12"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(14, 85, 45, 0.7), rgba(238, 241, 248, 0.3)), url(${featuredPost.mainImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h4 className="text-sm uppercase tracking-widest">
        POSTED ON {featuredPost.category || "GENERAL"}
      </h4>
      <h1 className="text-4xl font-bold max-w-2xl">
        {featuredPost.title}
      </h1>
      <p className="text-sm mt-2">
        By {featuredPost.author} | {featuredPost.date}
      </p>
      <p className="max-w-lg mt-4">
        {featuredPost.excerpt || featuredPost.content1.slice(0, 150) + "..."}
      </p>

      <Link to={`/blog/${featuredPost.id}`}>
        <button className="bg-green-800 text-white px-6 py-3 rounded-md mt-6 hover:bg-green-700 transition">
          Read More
        </button>
      </Link>
    </section>
  );
}

export default Hero;
