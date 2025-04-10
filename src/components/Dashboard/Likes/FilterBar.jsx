// src/components/FilterBar.jsx
const filters = ['All', 'Most liked post', 'Recent likes', 'Top user'];

const FilterBar = ({ activeFilter, onFilter }) => (
  <div className="flex items-center flex-wrap gap-4">
    <span className="font-medium">Filters:</span>
    {filters.map((filter) => (
      <label key={filter} className="flex items-center gap-2 text-sm">
        <input
          type="radio"
          checked={activeFilter === filter}
          onChange={() => onFilter(filter)}
          className="h-4 w-4 text-green-800 border-gray-300 rounded"
        />
        {filter}
      </label>
    ))}
  </div>
);

export default FilterBar;
