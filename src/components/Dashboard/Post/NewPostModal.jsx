import React, { useState, useEffect } from 'react';

const NewPostModal = ({ isOpen, onClose, onSave }) => {
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: '',
    image: null,
  });

  useEffect(() => {
    if (!isOpen) {
      setNewPost({
        title: '',
        content: '',
        category: '',
        image: null,
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

  const handleFileChange = (e) => {
    setNewPost((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('title', newPost.title);
    formData.append('content', newPost.content);
    formData.append('category', newPost.category);
    if (newPost.image) {
      formData.append('image', newPost.image);
    }

    try {
      const response = await fetch('http://localhost:5000/api/post', {
  method: 'POST',
  body: formData,
});

      const result = await response.json();
      if (response.ok) {
        alert('Post created successfully!');
        onSave(result);
        onClose();
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Something went wrong while creating the post.');
    }
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
            placeholder="Title"
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <textarea
            name="content"
            value={newPost.content}
            onChange={handleChange}
            placeholder="Content"
            rows="5"
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
            type="file"
            accept="image/*"
            onChange={handleFileChange}
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
