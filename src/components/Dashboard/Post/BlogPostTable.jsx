import React from 'react';
import StatusBadge from './StatusBadge';  // Assuming you have a StatusBadge component
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

const BlogPostTable = ({ posts, activeTab, handleEdit, handleDelete }) => {
  console.log('Active Tab:', activeTab); // Log activeTab value
  console.log('All Posts:', posts); // Log all posts to see what you have

  // Filter posts based on the selected status (activeTab)
  const filteredPosts = posts.filter((post) => post.status === activeTab);
  
  console.log('Filtered Posts:', filteredPosts); // Log filtered posts

  return (
    <div className="overflow-x-auto bg-white rounded-md border border-gray-200">
      <table className="w-full table-auto text-left">
        <thead className="bg-[#1D1B25] text-white text-sm">
          <tr>
            <th className="py-3 px-4">Id</th>
            <th className="py-3 px-4">Title</th>
            <th className="py-3 px-4">Author</th>
            <th className="py-3 px-4">Category</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Created at</th>
            <th className="py-3 px-4">Updated At</th>
            <th className="py-3 px-4">Action</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-800">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <tr key={post.id} className="border-t">
                <td className="py-3 px-4">{post.id}</td>
                <td className="py-3 px-4">{post.title}</td>
                <td className="py-3 px-4">{post.author}</td>
                <td className="py-3 px-4">{post.category}</td>
                <td className="py-3 px-4">
                  <StatusBadge status={post.status} />
                </td>
                <td className="py-3 px-4">{post.createdAt}</td>
                <td className="py-3 px-4">{post.updatedAt}</td>
                <td className="py-3 px-4 flex gap-3 text-gray-600">
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
              <td colSpan="8" className="py-3 px-4 text-center text-gray-500">
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
