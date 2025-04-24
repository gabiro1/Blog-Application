import { useState } from 'react';
import Sidebar from '../UI Dashboard/Sidebar';
import LikeTable from '../Likes/LikesTable';
import FilterBar from '../Likes/FilterBar';
import ActionButtons from '../Likes/ActionButtons';
import Modal from '../Likes/Modal';
import likesData from '../../Data/likesData';

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
    setLikes((prevLikes) => prevLikes.filter((like) => like.id !== id));
    setModalVisible(false);
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

  // Apply the selected filter
  let sortedLikes = [...filteredLikes];
  if (activeFilter === 'Most liked post') {
    sortedLikes = sortedLikes.sort((a, b) => b.likesCount - a.likesCount);
  } else if (activeFilter === 'Recent likes') {
    sortedLikes = sortedLikes.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (activeFilter === 'Top user') {
    // Ensure there is data before using reduce
    if (sortedLikes.length > 0) {
      const userLikes = sortedLikes.reduce((acc, like) => {
        acc[like.user] = (acc[like.user] || 0) + like.likesCount;
        return acc;
      }, {});
      
      const topUser = Object.keys(userLikes).reduce((a, b) =>
        userLikes[a] > userLikes[b] ? a : b
      );
      sortedLikes = sortedLikes.filter(like => like.user === topUser);
    }
  }

  const handleExport = () => {
    // Define headers
    const headers = ['User', 'Liked Post Title', 'Status'];

    // Prepare rows of data
    const rows = filteredLikes.map(like => [
      like.user,
      like.likedPostTitle,
      like.status,
    ]);

    // Create CSV content
    let csvContent = "data:text/csv;charset=utf-8,";

    // Add headers
    csvContent += headers.join(",") + "\n";

    // Add rows
    rows.forEach((row) => {
      csvContent += row.join(",") + "\n";
    });

    // Create a download link and trigger download
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "likes_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
