import React, { useState, useEffect } from 'react';

const NewPostModal = ({ isOpen, onClose, onSave }) => {
  const [newPost, setNewPost] = useState({
    title: '',
    subtitle1: '',
    subtitle2: '',
    content1: '',
    content2: '',
    category: '',
    author: '',
    date: '',
    status: 'Published',
    image1: '',
    image2: '',
    image3: '',
    mainImage: '',
  });

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setNewPost({
        title: '',
        subtitle1: '',
        subtitle2: '',
        content1: '',
        content2: '',
        category: '',
        author: '',
        date: '',
        status: 'Published',
        image1: '',
        image2: '',
        image3: '',
        mainImage: '',
      });
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSave(newPost);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 backdrop-blur-sm bg-black/40 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-[500px] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Add New Post</h2>

        <div className="space-y-3">
          <input
            name="title"
            value={newPost.title}
            onChange={handleChange}
            placeholder="Post Title"
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            name="subtitle1"
            value={newPost.subtitle1}
            onChange={handleChange}
            placeholder="Subtitle 1"
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            name="subtitle2"
            value={newPost.subtitle2}
            onChange={handleChange}
            placeholder="Subtitle 2"
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <textarea
            name="content1"
            value={newPost.content1}
            onChange={handleChange}
            placeholder="Content 1"
            rows="3"
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <textarea
            name="content2"
            value={newPost.content2}
            onChange={handleChange}
            placeholder="Content 2"
            rows="3"
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            name="category"
            value={newPost.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            name="author"
            value={newPost.author}
            onChange={handleChange}
            placeholder="Author"
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            name="date"
            value={newPost.date}
            onChange={handleChange}
            placeholder="Date"
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <select
            name="status"
            value={newPost.status}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
          </select>
          <input
            name="image1"
            value={newPost.image1}
            onChange={handleChange}
            placeholder="Image 1 URL"
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            name="image2"
            value={newPost.image2}
            onChange={handleChange}
            placeholder="Image 2 URL"
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            name="image3"
            value={newPost.image3}
            onChange={handleChange}
            placeholder="Image 3 URL"
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            name="mainImage"
            value={newPost.mainImage}
            onChange={handleChange}
            placeholder="Main Image URL"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800"
          >
            Save Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPostModal;
