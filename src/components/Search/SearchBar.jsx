import { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState("");

  const SearchHandler = (e) => {
    setQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name or email"
        value={query}
        onChange={SearchHandler}
      />
    </div>
  );
};

export default SearchBar;
