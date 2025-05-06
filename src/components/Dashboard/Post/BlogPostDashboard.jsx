import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../UI Dashboard/Sidebar';
import PostTabNav from './PostTabNav';
import BlogPostTable from './BlogPostTable';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';
import NewPostModal from './NewPostModal';

const BlogPostDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState('Published');
  const [searchTerm, setSearchTerm] = useState('');
  const [postToEdit, setPostToEdit] = useState(null);
  const [postToDelete, setPostToDelete] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch posts from the backend API when the component mounts
  useEffect(() => {
    axios.get('/api/posts')  // Adjusted route to match your backend
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  // Search functionality
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtered posts based on search term and active tab
  const filteredPosts = posts.filter(
    (post) =>
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (post.status === activeTab || activeTab === 'All')
  );

  // Handle editing a post
  const handleEdit = (post) => {
    setPostToEdit(post);
  };

  const handleSaveEdit = (updatedPost) => {
    axios.put(`/api/edit/${updatedPost.id}`, updatedPost)  // Adjusted route to match your backend
      .then(response => {
        setPosts(posts.map(post => (post.id === updatedPost.id ? updatedPost : post)));
        setPostToEdit(null);
      })
      .catch(error => {
        console.error('Error updating post:', error);
      });
  };

  // Handle deleting a post
  const handleDelete = (post) => {
    setPostToDelete(post);
  };

  const confirmDelete = () => {
    axios.delete(`/api/delete/${postToDelete.id}`)  // Adjusted route to match your backend
      .then(() => {
        setPosts(posts.filter((post) => post.id !== postToDelete.id));
        setPostToDelete(null);
      })
      .catch(error => {
        console.error('Error deleting post:', error);
      });
  };

  // Export to CSV
  const exportToCSV = () => {
    const headers = ['Id', 'Title', 'Author', 'Category', 'Status'];
    const rows = posts.map(post => [post.id, post.title, post.author, post.category, post.status]);

    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += headers.join(',') + '\n';
    rows.forEach(row => {
      csvContent += row.join(',') + '\n';
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'blog_posts.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle adding a new post
  const handleAddNewPost = (newPostData) => {
    axios.post('/api/post', newPostData)  // Adjusted route to match your backend
      .then(response => {
        setPosts([...posts, response.data]);
        setIsModalOpen(false);
      })
      .catch(error => {
        console.error('Error adding new post:', error);
      });
  };

  return (
    <main className="ml-[260px] p-8 relative">
      <Sidebar />
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-[#1D1B25]">Blog Post Dashboard</h1>
        <input
          type="text"
          placeholder="Search by Title or Author"
          value={searchTerm}
          onChange={handleSearch}
          className="flex-grow border outline-none border-gray-300 rounded-md ml-5 mr-5 px-4 py-2 w-auto"
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-700 text-white px-6 py-2.5 mr-3 rounded-md hover:bg-green-800 text-sm font-medium"
        >
          New Post
        </button>
        <button
          onClick={exportToCSV}
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

      {/* New Post Modal */}
      <NewPostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddNewPost}
      />

      {/* Edit Post Modal */}
      <EditModal
        isOpen={!!postToEdit}
        post={postToEdit}
        onClose={() => setPostToEdit(null)}
        onSave={handleSaveEdit}
      />

      {/* Delete Post Modal */}
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
