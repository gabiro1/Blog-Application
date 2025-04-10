import React from 'react';
import ActionButtons from './ActionButtons';

const WriterTable = ({ writers, onEdit, onDelete }) => {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Posts</th>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {writers.map((writer) => (
          <tr key={writer.id} className="border-b">
            <td className="px-4 py-2">{writer.id}</td>
            <td className="px-4 py-2">{writer.name}</td>
            <td className="px-4 py-2">{writer.email}</td>
            <td className="px-4 py-2">{writer.posts}</td>
            <td className="px-4 py-2">{writer.status}</td>
            <td className="px-4 py-2">
              <ActionButtons onEdit={() => onEdit(writer)} onDelete={() => onDelete(writer.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WriterTable;
