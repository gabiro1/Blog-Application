import { useState } from 'react';
import BlogHeaderSection from '../components/blog/BlogHeaderSection';
import BlogGrid from '../components/blog/BlogGrid';
import Footer from '../components/Footer/Footer';
import { postsData } from '../components/Data/postsData';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredPosts = postsData.filter((post) =>
    post.title.toLowerCase().includes(searchTerm) ||
    post.author.toLowerCase().includes(searchTerm) ||
    post.category.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <BlogHeaderSection searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <BlogGrid filteredPosts={filteredPosts} />
      <Footer />
    </div>
  );
};

export default BlogPage;
