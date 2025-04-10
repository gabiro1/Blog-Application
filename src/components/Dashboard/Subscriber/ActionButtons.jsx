const ActionButtons = ({ onEdit, onDelete }) => (
    <div className="flex space-x-2">
      <button
        onClick={onEdit}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Edit
      </button>
      <button
        onClick={onDelete}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
  
  export default ActionButtons;
  