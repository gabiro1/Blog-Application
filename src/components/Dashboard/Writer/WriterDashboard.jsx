// File: /components/Dashboard/WriterDashboard.jsx

import React, { useState } from 'react';
import Sidebar from '../UI Dashboard/Sidebar'; 
import FilterBar from './FilterBar'; 
import WriterTable from './WriterTable'; 
import Modal from './Modal'; 
import { exportToCSV } from '../../../utils/exportToCSV'; 

const initialWriters = [
  { id: 1, name: 'John Doe', email: 'john@example.com', posts: 10, status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', posts: 5, status: 'Top Writer' },
  { id: 3, name: 'Alex Brown', email: 'alex@example.com', posts: 2, status: 'Suspended' },
  { id: 4, name: 'Emily White', email: 'emily@example.com', posts: 8, status: 'Active' }
];

const Writers = () => {
  const [writers, setWriters] = useState(initialWriters);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [writerToDelete, setWriterToDelete] = useState(null);
  const [editableWriter, setEditableWriter] = useState(null); // for editing writer

  // Handler for filtering writers based on status (All, Active, Suspended, Top Writer)
  const handleFilter = (filter) => setActiveFilter(filter);

  // Handler for searching writers by name or email
  const handleSearch = (e) => setSearchTerm(e.target.value);

  // Filtering writers based on search term and selected filter
  const filteredWriters = writers.filter((writer) => {
    const matchesSearchTerm =
      writer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      writer.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatusFilter =
      activeFilter === 'All' || writer.status === activeFilter;

    return matchesSearchTerm && matchesStatusFilter;
  });

  const deleteWriter = (id) => {
    setWriters((prevWriters) => prevWriters.filter((writer) => writer.id !== id));
    setModalVisible(false);
  };

  const editWriter = (writer) => {
    setEditableWriter(writer); // This will populate the modal with writer data for editing
    setModalVisible(true);
  };

  const saveEditedWriter = (editedWriter) => {
    setWriters((prevWriters) =>
      prevWriters.map((writer) =>
        writer.id === editedWriter.id ? editedWriter : writer
      )
    );
    setEditableWriter(null); // Clear the editable writer after saving
    setModalVisible(false); // Close modal
  };

  const addWriter = (newWriter) => {
    setWriters((prevWriters) => [
      ...prevWriters,
      { ...newWriter, id: prevWriters.length + 1 }, // Add new writer with a unique ID
    ]);
    setModalVisible(false); // Close the modal after adding
  };

  const handleExport = () => {
    exportToCSV(filteredWriters);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 space-y-6 ml-64 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold">Writers</h2>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by Name or Email"
            className="flex-grow border border-gray-300 rounded-md px-4 py-2 w-auto"
          />
          <button
            onClick={() => {
              setEditableWriter(null); 
              setModalVisible(true); 
            }}
            className="bg-green-800 text-white font-medium px-6 py-2 rounded-md hover:bg-green-700"
          >
            Add Writer
          </button>
          <button
            onClick={handleExport}
            className="bg-green-800 text-white font-medium px-6 py-2 rounded-md hover:bg-green-700"
          >
            Export
          </button>
          
        </div>

        <FilterBar activeFilter={activeFilter} onFilter={handleFilter} />

        <WriterTable
          writers={filteredWriters}
          onEdit={editWriter}
          onDelete={(id) => {
            setWriterToDelete(id);
            setModalVisible(true);
          }}
        />

        {/* Modal for editing or adding a writer */}
        {modalVisible && (
          <Modal
            isOpen={modalVisible}
            onClose={() => setModalVisible(false)}
            onSave={editableWriter ? saveEditedWriter : addWriter}
            writer={editableWriter} // Pass the editable writer if editing, or undefined for adding new
          />
        )}
      </div>
    </div>
  );
};

export default Writers;
