import BlogHeaderSection from '../components/BlogHeaderSection';
import BlogGrid from '../components/BlogGrid';
import LoadMoreButton from '../components/LoadMoreButton';
import Footer from '../components/Footer';


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
