import React from "react";
import { Link } from "react-router-dom";
import { postsData } from "../components/Data/postsData";

function AllPosts() {
  // Limit to 5 posts only
  const limitedPosts = postsData.slice(0, 5);

  return (
    <section className="w-full md:w-1/3 p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">All Posts</h2>
        <Link to="/blog" className="text-purple-600 text-sm">View All</Link>
      </div>

      <ul className="mt-4 space-y-2">
        {limitedPosts.map((post) => (
          <li
            key={post.id}
            className="p-4 bg-white rounded-md shadow-sm border-l-4 border-transparent hover:bg-gray-50 cursor-pointer"
          >
            <Link to={`/post/${post.id}`}>
              <p className="text-sm text-gray-500">
                By <span className="text-blue-600 font-medium">{post.author}</span> | {post.date}
              </p>
              <h3 className="font-semibold text-md">{post.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AllPosts;
