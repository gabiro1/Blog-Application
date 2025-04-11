import React from 'react';
import ActionButtons from './ActionButtons';

const SubscriberTable = ({ subscribers, onEdit, onDelete }) => (
  <div className="overflow-x-auto rounded-md border">
    <table className="min-w-full table-auto">
      <thead className="bg-black text-white">
        <tr>
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {subscribers.map((subscriber) => (
          <tr key={subscriber.id} className="border-t hover:bg-gray-50">
            <td className="px-4 py-2">{subscriber.id}</td>
            <td className="px-4 py-2">{subscriber.name}</td>
            <td className="px-4 py-2">{subscriber.email}</td>
            <td className="px-4 py-2">{subscriber.status}</td>
            <td className="px-4 py-2">
              <ActionButtons
                onEdit={() => onEdit(subscriber)}
                onDelete={() => onDelete(subscriber.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default SubscriberTable;
