import React, { useState } from 'react';
import { postsData } from '../Data/postsData';
import BlogCard from './BlogCard';
import LoadMoreButton from '../LoadMoreButton';

const BlogGrid = ({ filteredPosts }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const postsToShow = filteredPosts || postsData;
  const visiblePosts = postsToShow.slice(0, visibleCount);

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
