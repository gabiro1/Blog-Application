import React, { useState } from 'react';
import Sidebar from '../UI Dashboard/Sidebar';
import PostTabNav from './PostTabNav';
import BlogPostTable from './BlogPostTable';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';
import NewPostModal from './NewPostModal'; // ✅ Use your reusable modal here
import { postsData } from '../../Data/postsData';

const BlogPostDashboard = () => {
  const [activeTab, setActiveTab] = useState('Published');
  const [searchTerm, setSearchTerm] = useState('');
  const [postToEdit, setPostToEdit] = useState(null);
  const [postToDelete, setPostToDelete] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [posts, setPosts] = useState(
    postsData.map((post, index) => ({
      ...post,
      id: post.id || index + 1,
      status: index % 2 === 0 ? 'Published' : 'Draft',
    }))
  );

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleEdit = (post) => setPostToEdit(post);

  const handleSaveEdit = (updatedPost) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === updatedPost.id ? updatedPost : p))
    );
    setPostToEdit(null);
  };

  const handleDelete = (post) => setPostToDelete(post);

  const confirmDelete = () => {
    setPosts(posts.filter((p) => p.id !== postToDelete.id));
    setPostToDelete(null);
  };

  const exportToCSV = (posts) => {
    if (!Array.isArray(posts)) {
      console.error('Invalid posts data. Expected an array, got:', typeof posts, posts);
      return;
    }

    const headers = ['Id', 'Title', 'Author', 'Category', 'Status'];
    const rows = posts.map((post) => [
      post.id,
      post.title,
      post.author,
      post.category,
      post.status,
    ]);

    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += headers.join(',') + '\n';
    rows.forEach((row) => {
      csvContent += row.map((field) => `"${String(field).replace(/"/g, '""')}"`).join(',') + '\n';
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'blog_posts.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAddNewPost = (newPostData) => {
    const newPostWithId = { ...newPostData, id: posts.length + 1 };
    setPosts((prev) => [...prev, newPostWithId]);
    setIsModalOpen(false);
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
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-700 text-white px-6 py-2.5 mr-3 rounded-md hover:bg-green-800 text-sm font-medium"
        >
          New Post
        </button>
        <button
          onClick={() => exportToCSV(posts)}
          className="bg-green-700 text-white font-medium px-6 py-2 rounded-md hover:bg-green-800"
        >
          Export
        </button>
      </div>

      <PostTabNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <BlogPostTable
        posts={filteredPosts}
        activeTab={activeTab}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

      {/* ✅ Reusable modal for adding new post */}
      <NewPostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddNewPost}
      />

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
