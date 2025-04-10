import { useState } from 'react';
import Sidebar from '../UI Dashboard/Sidebar';
import LikeTable from '../Likes/LikesTable';
import FilterBar from '../Likes/FilterBar';
import ActionButtons from '../Likes/ActionButtons';
import Modal from '../Likes/Modal';

// Dummy data for likes
const likesData = [
  { id: 1, user: 'David Brown', likedPostTitle: 'UX review presentations', date: '2025-04-05', status: 'Approved' },
  { id: 2, user: 'Sophia Lee', likedPostTitle: 'What is Wireframing?', date: '2025-04-06', status: 'Pending' },
  { id: 3, user: 'James Carter', likedPostTitle: 'Keep Hackers Out', date: '2025-04-07', status: 'Report' },
  { id: 4, user: 'Olivia Martin', likedPostTitle: 'REST APIs Simplified', date: '2025-04-08', status: 'Approved' }
];

const Likes = () => {
  const [likes, setLikes] = useState(likesData);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [likeToDelete, setLikeToDelete] = useState(null);

  // Handle search term change
  const handleSearch = (e) => setSearchTerm(e.target.value);

  // Handle filter change
  const handleFilter = (filter) => setActiveFilter(filter);

  // Handle delete like
  const deleteLike = (id) => {
    // Remove the like by filtering out the one with the given id
    setLikes((prevLikes) => prevLikes.filter((like) => like.id !== id));
    setModalVisible(false); // Close the modal after deletion
  };

  // Filter likes based on active filter and search term
  const filteredLikes = likes.filter((like) => {
    const matchesSearchTerm =
      like.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      like.likedPostTitle.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeFilter === 'All') {
      return matchesSearchTerm;
    }

    const matchesStatusFilter = like.status === activeFilter;

    return matchesSearchTerm && matchesStatusFilter;
  });

  // Optional: Sorting by date (most recent first)
  const sortedLikes = filteredLikes.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 space-y-6 ml-64 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold">Likes</h2>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search"
            className="flex-grow border border-gray-300 rounded-md px-4 py-2 w-full"
          />
          <button className="bg-green-800 text-white font-medium px-6 py-2 rounded-md hover:bg-green-700">
            Export
          </button>
        </div>

        {/* Filter */}
        <FilterBar activeFilter={activeFilter} onFilter={handleFilter} />

        {/* Table */}
        <LikeTable
          likes={sortedLikes} // Use sorted and filtered likes
          renderActions={(likeId) => (
            <ActionButtons openDeleteModal={() => { setLikeToDelete(likeId); setModalVisible(true); }} />
          )}
        />

        {/* Modal for Delete */}
        {modalVisible && (
          <Modal
            onClose={() => setModalVisible(false)}
            onConfirm={() => deleteLike(likeToDelete)}
          />
        )}
      </div>
    </div>
  );
};

export default Likes;
