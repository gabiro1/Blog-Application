// /components/Dashboard/WriterModal.jsx
import React, { useState, useEffect } from 'react';

const WriterModal = ({ isOpen, onClose, onSave, writer }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    posts: 0,
    status: 'Active',
  });

  useEffect(() => {
    if (writer) setFormData(writer);
  }, [writer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave({ ...formData, id: writer?.id || Date.now() });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/35 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">
          {writer ? 'Edit Writer' : 'Add New Writer'}
        </h2>

        <div className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Writer Name"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            name="posts"
            type="number"
            value={formData.posts}
            onChange={handleChange}
            placeholder="Posts"
            className="w-full border px-4 py-2 rounded"
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          >
            <option value="Active">Active</option>
            <option value="Suspended">Suspended</option>
            <option value="Top Writer">Top Writer</option>
          </select>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default WriterModal;
