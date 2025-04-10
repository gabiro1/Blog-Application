import React, { useState } from "react";
import Sidebar from "../UI Dashboard/Sidebar";
import FilterBar from "./FilterBar";
import SubscriberTable from "./SubscriberTable";
import ActionButtons from "./ActionButtons";
import Modal from "./Modal";
import { exportToCSV } from "../../../utils/exportToCSV"; 

const initialSubscribers = [
  { id: 1, name: "David Brown", email: "david@example.com", status: "Subscriber" },
  { id: 2, name: "Sophia Lee", email: "sophia@example.com", status: "Unsubscriber" },
  { id: 3, name: "James Carter", email: "james@example.com", status: "Active" },
  { id: 4, name: "Olivia Martin", email: "olivia@example.com", status: "Subscriber" }
];

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState(initialSubscribers);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [subscriberToDelete, setSubscriberToDelete] = useState(null);
  const [editableSubscriber, setEditableSubscriber] = useState(null);

  // Handle filter change
  const handleFilter = (filter) => setActiveFilter(filter);

  // Handle search
  const handleSearch = (e) => setSearchTerm(e.target.value);

  // Filter subscribers based on status and search term
  const filteredSubscribers = subscribers.filter((subscriber) => {
    const matchesSearchTerm =
      subscriber.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subscriber.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatusFilter =
      activeFilter === "All" || subscriber.status === activeFilter;

    return matchesSearchTerm && matchesStatusFilter;
  });

  // Delete subscriber
  const deleteSubscriber = (id) => {
    setSubscribers((prevSubscribers) =>
      prevSubscribers.filter((subscriber) => subscriber.id !== id)
    );
    setModalVisible(false);
  };

  // Edit subscriber
  const editSubscriber = (subscriber) => {
    setEditableSubscriber(subscriber);
  };

  // Save edited subscriber
  const saveEditedSubscriber = (editedSubscriber) => {
    setSubscribers((prevSubscribers) =>
      prevSubscribers.map((subscriber) =>
        subscriber.id === editedSubscriber.id ? editedSubscriber : subscriber
      )
    );
    setEditableSubscriber(null);
  };

  // Export to CSV
  const handleExport = () => {
    exportToCSV(filteredSubscribers);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 space-y-6 ml-64 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold">Subscribers</h2>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by Name or Email"
            className="flex-grow border border-gray-300 rounded-md px-4 py-2 w-full"
          />
          <button
            onClick={handleExport}
            className="bg-green-800 text-white font-medium px-6 py-2 rounded-md hover:bg-green-700"
          >
            Export
          </button>
        </div>

        {/* Filter */}
        <FilterBar activeFilter={activeFilter} onFilter={handleFilter} />

        {/* Subscriber Table */}
        <SubscriberTable
          subscribers={filteredSubscribers}
          onEdit={editSubscriber}
          onDelete={(id) => {
            setSubscriberToDelete(id);
            setModalVisible(true);
          }}
        />

        {/* Edit Subscriber Modal */}
        {editableSubscriber && (
          <Modal
            isOpen={editableSubscriber !== null}
            onClose={() => setEditableSubscriber(null)}
            onSave={saveEditedSubscriber}
            subscriber={editableSubscriber}
          />
        )}

        {/* Delete Confirmation Modal */}
        {modalVisible && (
          <Modal
            onClose={() => setModalVisible(false)}
            onConfirm={() => deleteSubscriber(subscriberToDelete)}
            isDeleteModal
          />
        )}
      </div>
    </div>
  );
};

export default Subscribers;
