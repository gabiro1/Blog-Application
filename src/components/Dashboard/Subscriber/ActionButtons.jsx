import { FiTrash2, FiEdit2 } from "react-icons/fi";

const ActionButtons = ({ onEdit, onDelete }) => (
    <div className="flex space-x-2">
      <button
        onClick={onEdit}
        className="px-4 py-2  text-dark rounded-md"
      >
        <FiEdit2 size={16} />
      </button>
      <button
        onClick={onDelete}
        className="  text-dark rounded-md "
      >
        <FiTrash2 size={16} />
      </button>
    </div>
  );
  
  export default ActionButtons;
  