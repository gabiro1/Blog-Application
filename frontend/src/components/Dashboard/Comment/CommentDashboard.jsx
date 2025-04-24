import React, { useState } from 'react';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import CommentTable from './CommentTable';
import Sidebar from '../UI Dashboard/Sidebar';
import ActionButtons from './ActionButtons';
import Modal from './Modal';  
import EditModal from './EditModal';  
import commentsData from '../../Data/commentsData';  

const Comments = () => {
  const [comments, setComments] = useState(commentsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const [commentToEdit, setCommentToEdit] = useState(null);

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleFilter = (filter) => setActiveFilter(filter);

  const deleteComment = (id) => {
    setComments((prevComments) => prevComments.filter((comment) => comment.id !== id));
    setModalVisible(false); // Close the modal after deletion
  };

  const openDeleteModal = (id) => {
    setCommentToDelete(id); // Set the comment id to delete
    setModalVisible(true); // Show the modal
  };

  const openEditModal = (id) => {
    const comment = comments.find((comment) => comment.id === id);
    setCommentToEdit(comment); // Set the comment to edit
    setEditModalVisible(true); // Show the edit modal
  };

  const saveEdit = (id, editedComment, editedStatus) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id
          ? { ...comment, comment: editedComment, status: editedStatus }
          : comment
      )
    );
    setEditModalVisible(false); 
  };

  const filteredComments = comments.filter((comment) => {
    const matchesSearchTerm = comment.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              comment.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatusFilter = activeFilter === 'All' || comment.status === activeFilter;
    return matchesSearchTerm && matchesStatusFilter;
  });

  // Export function to convert data to CSV and trigger download
  const handleExport = () => {
    const headers = ['ID', 'User', 'Comment', 'Title', 'Status'];
    const rows = filteredComments.map(comment => [
      comment.id,
      comment.user,
      comment.comment,
      comment.title,
      comment.status
    ]);
    
    const csvContent = [
      headers.join(','), // Header row
      ...rows.map(row => row.join(',')) // Data rows
    ].join('\n');

    // Create a Blob and trigger a download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'comments.csv');
      link.click();
    }
  };

  return (
    <div className="flex">
      {/* Render Sidebar on the left */}
      <Sidebar />

      <div className="p-6 space-y-6 ml-64 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold">Comments</h2>
          <div className="flex flex-grow max-w-xl w-full">
            <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
          </div>
          <button
            onClick={handleExport}
            className="bg-green-800 text-white font-medium px-6 py-2 rounded-md hover:bg-green-700"
          >
            Export
          </button>
        </div>

        {/* Filter */}
        <FilterBar activeFilter={activeFilter} onFilter={handleFilter} />

        {/* Table */}
        <CommentTable
          comments={filteredComments}
          renderActions={(commentId) => (
            <>
              <ActionButtons
                openDeleteModal={openDeleteModal}
                openEditModal={openEditModal} // Added Edit Modal action
                commentId={commentId}
              />
            </>
          )}
        />

        {/* Modals */}
        {modalVisible && (
          <Modal
            onClose={() => setModalVisible(false)}
            onConfirm={() => deleteComment(commentToDelete)}
          />
        )}

        {editModalVisible && (
          <EditModal
            comment={commentToEdit}
            onClose={() => setEditModalVisible(false)}
            onSave={saveEdit}
          />
        )}
      </div>
    </div>
  );
};

export default Comments;
