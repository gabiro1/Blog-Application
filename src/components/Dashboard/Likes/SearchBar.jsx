const SearchBar = ({ searchTerm, onSearch }) => (
    <input
      type="text"
      value={searchTerm}
      onChange={onSearch}
      placeholder="Search"
      className="flex-grow border border-gray-300 rounded-md px-4 py-2 w-full"
    />
  );
  
  export default SearchBar;
    