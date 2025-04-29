import React, { useState, useEffect } from 'react';

const EditModal = ({ isOpen, post, onClose, onSave }) => {
  const [editedPost, setEditedPost] = useState({
    title: '',
    author: '',
    category: '',
    status: '',
    createdAt: '',
    updatedAt: ''
  });

  useEffect(() => {
    if (post) {
      setEditedPost(post);
    }
  }, [post]);

  if (!isOpen || !post) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPost((prev) => ({
      ...prev,
      [name]: value,
      updatedAt: new Date().toISOString().slice(0, 16).replace('T', ' '), // update time
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedPost);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-md w-full max-w-md p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Blog Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={editedPost.title}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            placeholder="Title"
            required
          />
          <input
            type="text"
            name="author"
            value={editedPost.author}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            placeholder="Author"
            required
          />
          <input
            type="text"
            name="category"
            value={editedPost.category}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            placeholder="Category"
            required
          />
          <select
            name="status"
            value={editedPost.status}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          >
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
          </select>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
