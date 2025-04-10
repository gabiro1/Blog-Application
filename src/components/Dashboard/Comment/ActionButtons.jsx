import { Edit, Trash2 } from 'lucide-react';

const ActionButtons = ({ openDeleteModal, openEditModal, commentId }) => (
  <div className="flex space-x-2">
    {/* Edit Button with Icon */}
    <button
      onClick={() => openEditModal(commentId)}
      className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      <Edit className="w-5 h-5" />
    </button>

    {/* Delete Button with Icon */}
    <button
      onClick={() => openDeleteModal(commentId)}
      className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
    >
      <Trash2 className="w-5 h-5" />
    </button>
  </div>
);

export default ActionButtons;
