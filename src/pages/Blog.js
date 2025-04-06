import HeaderSection from '../components/HeaderSection';
import BlogGrid from '../components/BlogGrid';
import LoadMoreButton from '../components/LoadMoreButton';
import Footer from '../components/Footer';


const BlogPage = () => {
  return (
    <div>
      <HeaderSection />
      <BlogGrid />
      <LoadMoreButton />
      <Footer />
    </div>
  );
};

export default BlogPage;
