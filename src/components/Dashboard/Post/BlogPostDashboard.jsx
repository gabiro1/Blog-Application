import React, { useState } from 'react';
import PostTabNav from './PostTabNav';
import BlogPostTable from './BlogPostTable';
import Sidebar from '../UI Dashboard/Sidebar'; 

const BlogPostDashboard = () => {
  const [activeTab, setActiveTab] = useState('Published');

  return (
    <main className="ml-[260px] p-8"> 
    <Sidebar/>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-[#1D1B25]">Blog Post</h1>
        <button className="bg-green-700 text-white px-5 py-2 rounded-md hover:bg-green-800 text-sm font-medium">
          Create new Post
        </button>
      </div>

      <PostTabNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <BlogPostTable activeTab={activeTab} />
    </main>
  );
};

export default BlogPostDashboard;
