import React from "react";
import { useParams } from "react-router-dom";
import { postsData } from "../Data/postsData"; 
import Footer from "../UI/Footer"; 
import CommentSection from "./CommentSection"; 

function BlogDetails() {
  const { postId } = useParams(); 
  const post = postsData.find(post => post.id === parseInt(postId)); // Find the post by using id

  if (!post) {
    return <p className="text-center text-red-500 text-lg">Post not found</p>;
  }

  return (
    <div>
      <div className="container mx-auto p-6 mb-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <img src={post.mainImage} alt={post.title} className="w-full object-cover mb-4" />
      <p className="text-sm text-gray-500">
        By <span className="text-blue-600 font-medium">{post.author}</span> | {post.date}
      </p>
      <p className="mt-4 text-gray-700">{post.content1}</p>
      <p className="mt-4 text-gray-600">{post.content2}</p>
      <CommentSection />
      
    </div>
    <Footer />
    </div>
  );
}

export default BlogDetails;
