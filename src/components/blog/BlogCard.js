const BlogCard = ({ title, description, image, category, author, date }) => {
    return (
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
        {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
        <div className="p-5">
          <span className="text-sm text-purple-700 font-medium">{category}</span>
          <h2 className="text-xl font-semibold mt-2 mb-2 hover:underline cursor-pointer">{title}</h2>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{author}</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogCard;
  