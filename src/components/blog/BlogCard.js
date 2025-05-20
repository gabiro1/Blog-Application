import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, title, image, category, first_name, published_date }) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
        {image && (
         <img
  src={`http://localhost:5000/uploads/${image}`}
  alt={title}
  className="w-full h-48 object-cover"
/>
        )}
        <div className="p-5">
          <span className="text-sm text-purple-700 font-medium">{category}</span>
          <h2 className="text-xl font-semibold mt-2 mb-2 hover:underline">{title}</h2>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{first_name || 'Unknown Author'}</span>
            <span>{published_date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
