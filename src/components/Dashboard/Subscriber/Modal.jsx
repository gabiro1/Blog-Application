// src/Components/Modal.jsx
import { useState } from "react";

const Modal = ({ isOpen, onClose, onSave, onConfirm, subscriber, isDeleteModal }) => {
  const [name, setName] = useState(subscriber?.name || "");
  const [email, setEmail] = useState(subscriber?.email || "");
  const [status, setStatus] = useState(subscriber?.status || "");

  const handleSave = () => {
    const editedSubscriber = { ...subscriber, name, email, status };
    onSave(editedSubscriber);
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-md">
          {isDeleteModal ? (
            <div>
              <p>Are you sure you want to delete this subscriber?</p>
              <div className="flex gap-4">
                <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded-md">Cancel</button>
                <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded-md">Delete</button>
              </div>
            </div>
          ) : (
            <div>
              <label className="block">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border rounded-md w-full"
              />
              <label className="block mt-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-md w-full"
              />
              <label className="block mt-2">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="border rounded-md w-full"
              >
                <option value="Subscriber">Subscriber</option>
                <option value="Unsubscriber">Unsubscriber</option>
                <option value="Active">Active</option>
              </select>
              <div className="mt-4 flex gap-4">
                <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded-md">Cancel</button>
                <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded-md">Save</button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default Modal;
