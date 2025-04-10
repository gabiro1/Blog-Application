import { FaTrash } from 'react-icons/fa'; // Importing FontAwesome trash icon

const ActionButtons = ({ openDeleteModal }) => (
  <div className="flex space-x-2">
    <button
      onClick={openDeleteModal}
      className="text-red-500 hover:text-red-700"
    >
      <FaTrash size={20} /> {/* Display trash icon */}
    </button>
  </div>
);

export default ActionButtons;
