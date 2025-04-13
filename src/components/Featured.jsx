import React from 'react';
import FeaturedPost from './FeaturedPost';
import AllPosts from './AllPosts';

function Featured() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 p-6">
      <FeaturedPost />
      <AllPosts />
    </div>
  );
}

export default Featured;