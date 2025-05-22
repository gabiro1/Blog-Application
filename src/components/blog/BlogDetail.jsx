import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import CommentSection from "../Comment/CommentSection";
import BlogGrid from "./BlogGrid";

const BlogDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/post/${postId}`)
      .then((res) => {
        setPost(res.data);
        setError(null);
      })
      .catch((err) => {
        console.error("Error fetching post:", err);
        setError("Failed to load post. Please try again.");
      });
  }, [postId]);

  if (error) {
    return (
      <div className="text-center text-red-500 text-lg py-10">
        {error}
      </div>
    );
  }

  if (!post) {
    return (
      <p className="text-center text-gray-500 text-lg py-10">Loading...</p>
    );
  }

  return (
    <div>
    <div className="max-w-5xl mx-auto px-4 py-10 font-sans">
      <h1 className="text-3xl font-bold mb-2 text-center">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6 text-center">
        {post.author || "Anonymous"} •{" "}
        {post.created_at && new Date(post.created_at).toLocaleDateString()}
      </p>

      {post.image && (
        <img
            src={post.image}
            alt={post.title}
            className="w-full h-70 object-cover rounded-md"
          />
      )}

      <div
        className="prose max-w-none mt-6 p-7"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <CommentSection postId={postId} />

      <div>
        <h2 className="text-2xl font-bold mt-10 mb-10">What to read next</h2>
        <BlogGrid/>
      </div>
    </div>
      <Footer />
      </div>
  );
};

export default BlogDetails;
