import React from "react";
import heroImage from "../assets/images/hero-image.jpg";

function FeaturedPost() {
  return (
    <section className="w-full md:w-2/3 p-6">
      <h2 className="text-2xl font-bold mb-4">Featured Post</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={heroImage}
          alt="Post"
          className="w-full object-cover"
        />
        <div className="p-6">
          <p className="text-sm text-gray-500">
            By <span className="text-blue-600 font-medium">John Doe</span> | May 23, 2022
          </p>
          <h3 className="text-xl font-semibold mt-2">
            A Step-by-Step Guide to Optimizing Your Website for Speed and Performance
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            Website speed is crucial for user experience and SEO. In this guide, we explore tools and best practices to enhance website loading times, reduce latency, and improve overall performance.
          </p>
          <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-md">
            Read More &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

function AllPosts() {
  const posts = [
    { title: "How To Build Confidence In Your UX Work", date: "Aug 23, 2021", author: "John Doe" },
    { title: "How to Build a Secure and Scalable API with Django and FastAPI", date: "Aug 23, 2021", author: "John Doe", highlight: true },
    { title: "Exploring the Best Cloud Platforms for DevOps in 2025", date: "Aug 23, 2021", author: "John Doe" },
    { title: "Mastering Git: Best Practices for Effective Version Control", date: "March 15, 2025", author: "Jxxt Team" }
  ];

  return (
    <section className="w-full md:w-1/3 p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">All Posts</h2>
        <a href="#" className="text-purple-600 text-sm">View All</a>
      </div>
      <ul className="mt-4 space-y-2">
        {posts.map((post, index) => (
          <li
            key={index}
            className={`p-4 ${post.highlight ? "bg-yellow-100" : "bg-white"} rounded-md shadow-sm border-l-4 ${
              post.highlight ? "border-yellow-500" : "border-transparent"
            }`}
          >
            <p className="text-sm text-gray-500">
              By <span className="text-blue-600 font-medium">{post.author}</span> | {post.date}
            </p>
            <h3 className="font-semibold text-md">{post.title}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}

function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 p-6">
      <FeaturedPost />
      <AllPosts />
    </div>
  );
}

export default BlogPage;
