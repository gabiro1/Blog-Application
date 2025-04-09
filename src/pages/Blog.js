import BlogHeaderSection from '../components/blog/BlogHeaderSection';
import BlogGrid from '../components/blog/BlogGrid';
import LoadMoreButton from '../components/LoadMoreButton';
import Footer from '../components/UI/Footer';


const BlogPage = () => {
  return (
    <div>
      <BlogHeaderSection />
      <BlogGrid />
      <LoadMoreButton />
      <Footer />
    </div>
  );
};

export default BlogPage;
