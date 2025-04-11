import React, { useState, useEffect } from 'react';

const EditModal = ({ isOpen, post, onClose, onSave }) => {
  const [editedPost, setEditedPost] = useState(post);

  useEffect(() => {
    setEditedPost(post);
  }, [post]);

  if (!isOpen || !post) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPost({ ...editedPost, [name]: value });
  };

  const handleSave = () => {
    onSave(editedPost);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/40">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[500px]">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Edit Post</h2>
        <input
          type="text"
          name="title"
          value={editedPost.title}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
          placeholder="Title"
        />
        <input
          type="text"
          name="author"
          value={editedPost.author}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
          placeholder="Author"
        />
        <input
          type="text"
          name="category"
          value={editedPost.category}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
          placeholder="Category"
        />
        {/* Add more fields if needed */}
        <div className="flex justify-end gap-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
          <button onClick={handleSave} className="px-4 py-2 bg-green-700 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
