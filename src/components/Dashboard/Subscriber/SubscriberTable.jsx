import React from "react";
import ActionButtons from "./ActionButtons";

const SubscriberTable = ({ subscribers, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-left text-sm uppercase">
            <th className="py-3 px-4 border-b">Name</th>
            <th className="py-3 px-4 border-b">Email</th>
            <th className="py-3 px-4 border-b">Status</th>
            <th className="py-3 px-4 border-b text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-6 text-gray-500">
                No subscribers found.
              </td>
            </tr>
          ) : (
            subscribers.map((subscriber) => (
              <tr
                key={subscriber.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4">{subscriber.name}</td>
                <td className="py-3 px-4">{subscriber.email}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      subscriber.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : subscriber.status === "Inactive"
                        ? "bg-red-100 text-red-700"
                        : subscriber.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {subscriber.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <ActionButtons
                    onEdit={() => onEdit(subscriber)}
                    onDelete={() => onDelete(subscriber.id)}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SubscriberTable;
