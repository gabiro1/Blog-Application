// File: /components/Writer/Modal.jsx

import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, onSave, writer, isDeleteModal, onConfirm }) => {
  const [newWriter, setNewWriter] = useState(writer || { name: '', email: '', status: 'Active', posts: 0 });

  useEffect(() => {
    if (writer) {
      setNewWriter(writer);
    } else {
      setNewWriter({ name: '', email: '', status: 'Active', posts: 0 });
    }
  }, [writer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWriter((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(newWriter); // On Save, either add or edit depending on context
    onClose();
  };

  return (
    <div className={`fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center ${!isOpen && 'hidden'}`}>
      <div className="bg-white p-6 rounded-lg w-96">
        {isDeleteModal ? (
          <div>
            <p>Are you sure you want to delete this writer?</p>
            <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Yes, Delete
            </button>
            <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-bold mb-4">{writer ? 'Edit Writer' : 'Add Writer'}</h3>
            <input
              type="text"
              name="name"
              value={newWriter.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 mb-4"
            />
            <input
              type="email"
              name="email"
              value={newWriter.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 mb-4"
            />
            <input
              type="number"
              name="posts"
              value={newWriter.posts}
              onChange={handleChange}
              placeholder="Posts"
              className="w-full px-4 py-2 border border-gray-300 mb-4"
            />
            <select
              name="status"
              value={newWriter.status}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 mb-4"
            >
              <option value="Active">Active</option>
              <option value="Suspended">Suspended</option>
              <option value="Top Writer">Top Writer</option>
            </select>
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              {writer ? 'Save Changes' : 'Add Writer'}
            </button>
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 ml-2"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
