import { FiEdit2, FiTrash2 } from 'react-icons/fi';

const ActionButtons = ({ openDeleteModal, openEditModal, commentId }) => (
  <div className="flex space-x-2">
    {/* Edit Button with Icon */}
    <button
      onClick={() => openEditModal(commentId)}
      className="p-2  text-dark "
    >
      <FiEdit2 className="w-5 h-5" />
    </button>

    {/* Delete Button with Icon */}
    <button
      onClick={() => openDeleteModal(commentId)}
      className="p-2 text-dark"
    >
      <FiTrash2 className="w-5 h-5" />
    </button>
  </div>
);

export default ActionButtons;
