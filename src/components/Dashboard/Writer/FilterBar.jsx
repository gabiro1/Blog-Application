import React from 'react';

const FilterBar = ({ activeFilter, onFilter }) => {
  return (
    <div className="flex space-x-4 mb-6">
      <button
        onClick={() => onFilter('All')}
        className={`px-4 py-2 rounded-md ${activeFilter === 'All' ? 'bg-gray-500 text-white' : 'bg-gray-200'}`}
      >
        All
      </button>
      <button
        onClick={() => onFilter('Active')}
        className={`px-4 py-2 rounded-md ${activeFilter === 'Active' ? 'bg-gray-500 text-white' : 'bg-gray-200'}`}
      >
        Active
      </button>
      <button
        onClick={() => onFilter('Top Writer')}
        className={`px-4 py-2 rounded-md ${activeFilter === 'Top Writer' ? 'bg-gray-500 text-white' : 'bg-gray-200'}`}
      >
        Top Writer
      </button>
      <button
        onClick={() => onFilter('Suspended')}
        className={`px-4 py-2 rounded-md ${activeFilter === 'Suspended' ? 'bg-gray-500 text-white' : 'bg-gray-200'}`}
      >
        Suspended
      </button>
    </div>
  );
};

export default FilterBar;
