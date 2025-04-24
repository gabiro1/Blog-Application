import React from 'react';
import { FiTrash2, FiEdit2 } from 'react-icons/fi';

const ActionButtons = ({ onEdit, onDelete }) => {
  return (
    <div className="flex space-x-2">
      <button
        onClick={onEdit}
        className="text-dark ml-4"
      >
        <FiEdit2 size={16}/>
      </button>
      <button
        onClick={onDelete}
        className=" text-Dark ml-2"
      >
        <FiTrash2 size={16} />
      </button>
    </div>
  );
};

export default ActionButtons;
