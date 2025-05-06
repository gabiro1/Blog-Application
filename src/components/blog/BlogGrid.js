import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import BlogCard from './BlogCard';
import LoadMoreButton from '../LoadMoreButton';

const BlogGrid = ({ filteredPosts }) => {
  const [posts, setPosts] = useState([]);  
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);  

  useEffect(() => {
    // Fetch posts from the backend API when the component mounts
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

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);  
  };

  const postsToShow =  posts;  
  const visiblePosts = postsToShow.slice(0, visibleCount);  

  if (loading) {
    return <div>Loading...</div>;  
  }

  if (error) {
    return <div>{error}</div>; 
  }

  return (
    <div className="px-4 sm:px-12 pb-16">
      <div className="grid gap-11 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map(post => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>

      {visibleCount < postsToShow.length && (
        <div onClick={handleLoadMore}>
          <LoadMoreButton />
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
