import { useState } from 'react';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import CommentTable from './CommentTable';
import Sidebar from '../UI Dashboard/Sidebar';
import ActionButtons from './ActionButtons';
import Modal from './Modal';  // Delete Modal
import EditModal from './EditModal';  // Import Edit Modal

const commentsData = [
  { id: 1, user: 'David Brown', comment: 'Great article!', title: 'UX review presentations', status: 'Approved' },
  { id: 2, user: 'Sophia Lee', comment: 'Thanks for this!', title: 'What is Wireframing?', status: 'Pending' },
  { id: 3, user: 'James Carter', comment: 'This is spam content', title: 'Keep Hackers Out', status: 'Report' },
  { id: 4, user: 'Olivia Martin', comment: 'Can you explain more?', title: 'REST APIs Simplified', status: 'Approved' }
];

const Comments = () => {
  const [comments, setComments] = useState(commentsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const [commentToEdit, setCommentToEdit] = useState(null); // State for the comment being edited

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
    setEditModalVisible(false); // Close the edit modal after saving
  };


  const filteredComments = comments.filter((comment) => {
    // First, check if the search term matches the user or title
    const matchesSearchTerm = comment.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              comment.title.toLowerCase().includes(searchTerm.toLowerCase());
  
    // Then, check if the status filter matches
    const matchesStatusFilter = activeFilter === 'All' || comment.status === activeFilter;
  
    // Return true if both conditions are met
    return matchesSearchTerm && matchesStatusFilter;
  });
  

  return (
    <div className="flex">
      {/* Render Sidebar on the left */}
      <Sidebar />

      <div className="p-6 space-y-6 ml-64 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold">Comment</h2>
          <div className="flex flex-grow max-w-xl w-full">
            <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
          </div>
          <button className="bg-green-800 text-white font-medium px-6 py-2 rounded-md hover:bg-green-700">
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
