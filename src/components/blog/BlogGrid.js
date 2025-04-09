import BlogCard from './BlogCard';

const blogPosts = [
  {
    title: 'UX review presentations',
    description: 'How do you create compelling presentations that impress your managers?',
    image: require('../../assets/images/Blog/ux-review.jpg'),
    category: 'Design',
    author: 'Olivia Rhye',
    date: '20 Jan 2022',
  },

  {
    title: 'Building your API Stack',
    description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
    image: require('../../assets/images/Blog/ux-review.jpg'),
    category: 'Software Engineering',
    author: 'Lana Steiner',
    date: '18 May 2022',
  },
  {
    title: 'How collaboration makes us better designers',
    description: 'Collaboration can make our teams stronger, and our individual designs better.',
    image: require('../../assets/images/Blog/ux-review.jpg'),
    category: 'Design',
    author: 'Natali Craig',
    date: '12 Feb 2022',
  },
  {
    title: 'How To Build Confidence In Your UX Work',
    description: 'JavaScript frameworks make development easy with extensive features and functionalities.',
    image: require('../../assets/images/Blog/ux-review.jpg'),
    category: 'Product',
    author: 'Drew Cano',
    date: '23 June 2022',
  },
  {
    title: 'Podcast: Creating a better CX Community',
    description: 'Starting a community doesn’t need to be complicated, but how do you get started?',
    image: require('../../assets/images/Blog/ux-review.jpg'),
    category: 'Customer Success',
    author: '',
    date: '19 Mar 2022',
  },
  // Add more blog posts here
];

const BlogGrid = () => {
  return (
    <div className="grid gap-11 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-12 pb-16">
      {blogPosts.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
    </div>
  );
};

export default BlogGrid;
