import BlogCard from './BlogCard';

const blogPosts = [
  {
    title: 'UX review presentations',
    description: 'How do you create compelling presentations that impress your managers?',
    image: '/images/ux.jpg',
    category: 'Design',
    author: 'Olivia Rhye',
    date: '20 Jan 2022',
  },
  {
    title: 'Migrating to Linear 101',
    description: 'Linear helps streamline tasks and bug tracking. Here’s how to start.',
    image: '/images/linear.jpg',
    category: 'Product',
    author: 'Phoenix Baker',
    date: '19 Jan 2022',
  },
  // Add more blog posts here
];

const BlogGrid = () => {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-12 pb-16">
      {blogPosts.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
    </div>
  );
};

export default BlogGrid;
