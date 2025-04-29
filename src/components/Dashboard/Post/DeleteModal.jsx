const DeleteModal = ({ isOpen, onClose, onConfirm, post }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/40">
        <div className="bg-white rounded-lg shadow-lg p-6 w-[400px]">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Confirm Deletion</h2>
          <p className="mb-6 text-gray-700">
            Are you sure you want to delete <strong>{post?.title}</strong>?
          </p>
          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };
export default DeleteModal;  