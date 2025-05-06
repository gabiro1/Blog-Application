import React from "react";
import { Link } from "react-router-dom";
import { postsData } from "../components/Data/postsData"; // Ensure the correct path

function FeaturedPost() {
  const featuredPost = postsData[0]; // First post for the featured section

  return (
    <section className="w-full md:w-2/3 p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Featured Post</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={featuredPost.mainImage}
          alt={featuredPost.title}
          className="w-full object-cover"
        />
        <div className="p-6">
          <p className="text-sm text-gray-500">
            By <span className="text-blue-600 font-medium">{featuredPost.author}</span> | {featuredPost.date}
          </p>
          <h3 className="text-xl font-semibold mt-2">{featuredPost.title}</h3>
          <p className="text-gray-600 mt-2 text-sm">
            {featuredPost.content1.slice(0, 150)}...
          </p>
          {/* Link to BlogDetails page */}
          <Link
            to={`/post/${featuredPost.id}`} 
            className="mt-4 bg-green-700 text-white px-4 py-2 rounded-md inline-block"
          >
            Read More &gt;
          </Link>
        </div> 
      </div>
    </section>
  );
}

export default FeaturedPost;
