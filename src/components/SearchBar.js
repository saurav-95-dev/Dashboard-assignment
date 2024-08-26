import React from "react";
import "../styles/SearchBar.css";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search anything..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
