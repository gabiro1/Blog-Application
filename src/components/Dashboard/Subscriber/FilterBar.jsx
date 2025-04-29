import React from "react";

// Updated filter options to match your current data
const filters = ["All", "Active", "Inactive", "Pending"];

const FilterBar = ({ activeFilter, onFilter }) => (
  <div className="flex gap-6 mb-6 border-b border-gray-200">
    {filters.map((filter) => (
      <button
        key={filter}
        onClick={() => onFilter(filter)}
        className={`pb-2 relative font-medium text-sm transition ${
          activeFilter === filter
            ? "text-black border-b-2 border-green-600"
            : "text-gray-500 hover:text-gray-800"
        }`}
      >
        {filter}
      </button>
    ))}
  </div>
);

export default FilterBar;
