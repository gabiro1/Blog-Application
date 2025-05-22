import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditModal = ({ isOpen, post, onClose, onSave }) => {
  const [editedPost, setEditedPost] = useState({
    title: '',
    author: '',
    category: '',
    status: '',
    content: '',
    reading_time: '',
    image: null,
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
      updatedAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
    }));
  };

  const handleFileChange = (e) => {
    setEditedPost((prev) => ({
      ...prev,
      image: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", editedPost.title);
    formData.append("content", editedPost.content);
    formData.append("category", editedPost.category);
    formData.append("reading_time", editedPost.reading_time);
    if (editedPost.image) {
      formData.append("image", editedPost.image);
    }

    try {
      const response = await axios.put(`/api/posts/${post.id}`, formData, {
        headers: {
          // 'Authorization': `Bearer ${your_token}`, // if needed
          'Content-Type': 'multipart/form-data',
        }
      });

      if (response.status === 200) {
        alert("Post updated successfully!");
        onSave();   // To trigger refresh or reload in parent
        onClose();  // Close modal
      } else {
        alert(response.data.message || "Failed to update post.");
      }
    } catch (error) {
      console.error("Error updating post:", error);
      alert("An error occurred while updating the post.");
    }
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
          <textarea
            name="content"
            value={editedPost.content}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            placeholder="Content"
            required
          />
          <input
            type="number"
            name="reading_time"
            value={editedPost.reading_time}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            placeholder="Reading Time (minutes)"
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
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="w-full border px-4 py-2 rounded"
          />

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
