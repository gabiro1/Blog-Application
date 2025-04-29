import React from 'react';

const filters = ['All', 'Most liked post', 'Recent likes', 'Top user'];

const FilterBar = ({ activeFilter, onFilter }) => (
  <div className="flex gap-6 mb-6 border-b border-gray-200">
    {filters.map((filter) => (
      <button
        key={filter}
        onClick={() => onFilter(filter)}
        className={`pb-2 relative font-medium text-sm ${
          activeFilter === filter
            ? 'text-black border-b-2 border-green-600'
            : 'text-gray-500'
        }`}
      >
        {filter}
      </button>
    ))}
  </div>
);

export default FilterBar;
