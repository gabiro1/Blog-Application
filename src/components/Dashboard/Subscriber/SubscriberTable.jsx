import React from 'react';
import StatusBadge from './StatusBadge';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

const posts = [
  {
    id: 1,
    title: 'UX review presentations',
    author: 'David Brown',
    category: 'UI & UX Design',
    status: 'Draft',
    createdAt: '2025-03-25 10:00',
    updatedAt: '2025-03-25 10:00',
  },
  {
    id: 2,
    title: 'What is Wireframing?',
    author: 'Sophia Lee',
    category: 'Coding',
    status: 'Published',
    createdAt: '2025-03-25 10:00',
    updatedAt: '2025-03-25 10:00',
  },
  // ... more data
];

const BlogPostTable = ({ activeTab }) => {
  const filteredPosts = posts.filter((post) => post.status === activeTab);

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
          {filteredPosts.map((post) => (
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
                <button title="Edit">
                  <FiEdit2 size={16} />
                </button>
                <button title="Delete">
                  <FiTrash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogPostTable;
