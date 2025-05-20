import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function FeaturedPost() {
  const [featuredPost, setFeaturedPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the first/featured post from backend
    axios
      .get("http://localhost:5000/api/post/1") // Change '1' to your logic for featured post
      .then((res) => {
        setFeaturedPost(res.data);
        setError(null);
      })
      .catch((err) => {
        setError("Failed to load featured post.");
      });
  }, []);

  if (error) {
    return <div className="text-center text-red-500 text-lg py-10">{error}</div>;
  }

  if (!featuredPost) {
    return <p className="text-center text-gray-500 text-lg py-10">Loading...</p>;
  }

  return (
    <section className="w-full md:w-2/3 p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Featured Post</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={featuredPost.image || featuredPost.mainImage}
          alt={featuredPost.title}
          className="w-full object-cover"
        />
        <div className="p-6">
          <p className="text-sm text-gray-500">
            By <span className="text-blue-600 font-medium">{featuredPost.author || "Anonymous"}</span> |{" "}
            {featuredPost.date || (featuredPost.created_at && new Date(featuredPost.created_at).toLocaleDateString())}
          </p>
          <h3 className="text-xl font-semibold mt-2">{featuredPost.title}</h3>
          <p className="text-gray-600 mt-2 text-sm">
            {(featuredPost.content || "").slice(0, 150)}...
          </p>
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