const Modal = ({ onClose, onConfirm }) => (
  <div className="fixed inset-0 bg-[rgba(0, 0, 0, 0.5)]bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-md w-96">
      <h2 className="text-lg font-semibold mb-4">Are you sure?</h2>
      <p className="mb-4">Do you really want to delete this like? This action cannot be undone.</p>
      <div className="flex justify-end space-x-4">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
);

export default Modal;
