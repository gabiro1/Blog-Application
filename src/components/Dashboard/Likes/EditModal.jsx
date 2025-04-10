import React, { useState, useEffect } from 'react';

const EditModal = ({ comment, onClose, onSave }) => {
  const [editedComment, setEditedComment] = useState('');
  const [editedStatus, setEditedStatus] = useState('');

  // Set initial values for editedComment and editedStatus when the modal is opened
  useEffect(() => {
    if (comment) {
      setEditedComment(comment.comment);
      setEditedStatus(comment.status);
    }
  }, [comment]);

  const handleSave = () => {
    if (comment) {
      onSave(comment.id, editedComment, editedStatus); // Save edited comment
    }
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md w-80">
        <h3 className="text-xl font-semibold">Edit Comment</h3>

        <div className="mt-4">
          <div className="mb-4">
            <label className="text-sm text-gray-600">User</label>
            <input
              type="text"
              value={comment?.user}
              readOnly
              className="mt-2 w-full p-2 bg-gray-100 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-600">Title</label>
            <input
              type="text"
              value={comment?.title}
              readOnly
              className="mt-2 w-full p-2 bg-gray-100 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-600">Comment</label>
            <textarea
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
              className="mt-2 w-full p-2 bg-white border rounded-md"
              rows="4"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-600">Status</label>
            <select
              value={editedStatus}
              onChange={(e) => setEditedStatus(e.target.value)}
              className="mt-2 w-full p-2 bg-white border rounded-md"
            >
              <option value="Approved">Approved</option>
              <option value="Pending">Pending</option>
              <option value="Report">Report</option>
            </select>
          </div>

          <div className="flex justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
