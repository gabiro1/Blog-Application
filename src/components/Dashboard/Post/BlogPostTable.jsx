import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import StatusBadge from './StatusBadge'; // Make sure this exists
import { useNavigate } from 'react-router-dom';

const BlogPostTable = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch posts from API on mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api');
        setPosts(response.data);
      } catch (err) {
        setError('Failed to load posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleEdit = (post) => {
    console.log('Edit post:', post);
    // Implement modal/form edit here
  };

  const handleDelete = (post) => {
    console.log('Delete post:', post);
    // Implement delete logic here (e.g., axios.delete)
  };

  if (loading) return <p className="p-4 text-gray-600">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="overflow-x-auto bg-white rounded-md border border-gray-200 p-4">
      <table className="w-full table-auto text-left">
        <thead className="bg-[#1D1B25] text-white text-sm">
          <tr>
            <th className="py-3 px-4">Id</th>
            <th className="py-3 px-4">Title</th>
        
            <th className="py-3 px-4">Category</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Created At</th>
            <th className="py-3 px-4">Updated At</th>
            <th className="py-3 px-4">Action</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-800">
          {posts.length > 0 ? (
            posts.map((post) => (
              <tr key={post.id} className="border-t">
                <td className="py-3 px-4">{post.id}</td>
                <td className="py-3 px-4"
                onClick={() => navigate(`/blog/${post.id}`)}>{post.title}</td>

                <td className="py-3 px-4">{post.category}</td>
                <td className="py-3 px-4">
                  <StatusBadge status={post.status} />
                </td>
                <td className="py-3 px-4">{post.created_at?.split('T')[0]}</td>
                <td className="py-3 px-4">{post.updated_at?.split('T')[0]}</td>
                <td className="py-3 px-4 flex gap-3">
                  <button
                    title="Edit"
                    onClick={() => handleEdit(post)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FiEdit2 size={16} />
                  </button>
                  <button
                    title="Delete"
                    onClick={() => handleDelete(post)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="py-4 text-center text-gray-500">
                No posts available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BlogPostTable;