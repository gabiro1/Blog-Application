import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const ActionButtons = ({ onEdit, onDelete }) => {
  return (
    <div className="flex items-center justify-end space-x-2">
      <button
        onClick={onEdit}
        className="text-blue-600 hover:text-blue-800 transition"
        title="Edit"
      >
        <Pencil size={18} />
      </button>
      <button
        onClick={onDelete}
        className="text-red-600 hover:text-red-800 transition"
        title="Delete"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default ActionButtons;
