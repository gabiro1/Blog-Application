import React, { useState, useEffect } from 'react';
import Sidebar from '../UI Dashboard/Sidebar';
import FilterBar from './FilterBar';
import WriterTable from './WriterTable';
import WriterModal from './WriterModal';
// import { exportToCSV } from '../../../utils/exportToCSV';
import writersData from '../../Data/writersData';

const Writers = () => {
  const [writers, setWriters] = useState(writersData);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [writerToDelete, setWriterToDelete] = useState(null);
  const [editableWriter, setEditableWriter] = useState(null);

  // Effect to check and set "Top Writer"
  useEffect(() => {
    const maxPosts = Math.max(...writers.map(writer => writer.posts));
    const updatedWriters = writers.map(writer => ({
      ...writer,
      status: writer.posts === maxPosts ? 'Top Writer' : writer.status
    }));
    setWriters(updatedWriters);
  }, [writers]);

  const handleFilter = (filter) => setActiveFilter(filter);
  const handleSearch = (e) => setSearchTerm(e.target.value);

  const filteredWriters = writers.filter((writer) => {
    const matchSearch =
      writer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      writer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = activeFilter === 'All' || writer.status === activeFilter;
    return matchSearch && matchStatus;
  });

  const deleteWriter = (id) => {
    setWriters((prev) => prev.filter((w) => w.id !== id));
    setModalVisible(false);
  };

  const editWriter = (writer) => {
    setEditableWriter(writer);
    setModalVisible(true);
  };

  const saveEditedWriter = (writer) => {
    setWriters((prev) =>
      prev.map((w) => (w.id === writer.id ? writer : w))
    );
    setEditableWriter(null);
    setModalVisible(false);
  };

  const addWriter = (writer) => {
    setWriters((prev) => [...prev, { ...writer, id: prev.length + 1 }]);
    setModalVisible(false);
  };

  // const handleExport = () => exportToCSV(filteredWriters);

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
            // onClick={handleExport}
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

        {/* Modal Component */}
        <WriterModal
          isOpen={modalVisible}
          onClose={() => {
            setModalVisible(false);
            setEditableWriter(null);
          }}
          onSave={editableWriter ? saveEditedWriter : addWriter}
          writer={editableWriter}
        />
      </div>
    </div>
  );
};

export default Writers;
