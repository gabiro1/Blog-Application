import React, { useState } from 'react';
import PostTabNav from './PostTabNav';
import BlogPostTable from './BlogPostTable';
import Sidebar from '../UI Dashboard/Sidebar';
import { exportToCSV } from '../../../utils/exportToCSV';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';

const BlogPostDashboard = () => {
  const [activeTab, setActiveTab] = useState('Published');
  const [searchTerm, setSearchTerm] = useState('');
  const [postToEdit, setPostToEdit] = useState(null);
  const [postToDelete, setPostToDelete] = useState(null);
  const [posts, setPosts] = useState([
    { id: 1, title: 'UX review presentations', author: 'David Brown', category: 'UI & UX Design', status: 'Draft', createdAt: '2025-03-25 10:00', updatedAt: '2025-03-25 10:00' },
    { id: 2, title: 'What is Wireframing?', author: 'Sophia Lee', category: 'Coding', status: 'Published', createdAt: '2025-03-25 10:00', updatedAt: '2025-03-25 10:00' },
    { id: 3, title: 'Understanding CSS Flexbox', author: 'Michael Smith', category: 'Web Development', status: 'Draft', createdAt: '2025-03-25 10:00', updatedAt: '2025-03-25 10:00' },
    { id: 4, title: 'JavaScript ES6 Features', author: 'Emily Johnson', category: 'JavaScript', status: 'Published', createdAt: '2025-03-25 10:00', updatedAt: '2025-03-25 10:00' },
  ]);

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleEdit = (post) => {
    setPostToEdit(post);
  };

  const handleSaveEdit = (updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((p) => (p.id === updatedPost.id ? updatedPost : p))
    );
    setPostToEdit(null);
  };

  const handleDelete = (post) => {
    setPostToDelete(post);
  };

  const confirmDelete = () => {
    setPosts(posts.filter((p) => p.id !== postToDelete.id));
    setPostToDelete(null);
  };

  const handleExport = () => {
    if (posts.length === 0) {
      console.error('No posts available to export.');
      return;
    }
    exportToCSV(posts);
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.status === activeTab &&
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <main className="ml-[260px] p-8 relative">
      <Sidebar />
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-[#1D1B25]">Blog Post</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by Name or Email"
          className="flex-grow border outline-none border-gray-300 rounded-md ml-5 mr-5 px-4 py-2 w-auto"
        />
        <button className="bg-green-700 text-white px-6 py-2.5 mr-3 rounded-md hover:bg-green-800 text-sm font-medium">
          New Post
        </button>
        <button
          onClick={handleExport}
          className="bg-green-700 text-white font-medium px-6 py-2 rounded-md hover:bg-green-800"
        >
          Export
        </button>
      </div>

      <PostTabNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <BlogPostTable posts={filteredPosts} onEdit={handleEdit} onDelete={handleDelete} />

      <EditModal
        isOpen={!!postToEdit}
        post={postToEdit}
        onClose={() => setPostToEdit(null)}
        onSave={handleSaveEdit}
      />

      <DeleteModal
        isOpen={!!postToDelete}
        post={postToDelete}
        onClose={() => setPostToDelete(null)}
        onConfirm={confirmDelete}
      />
    </main>
  );
};

export default BlogPostDashboard;
