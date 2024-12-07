import React from 'react';

const StarshipSearch = ({ searchQuery, setSearchQuery }) => {
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);  // Update the search query in App.jsx
    };
  
    return (
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for a starship"
        />
      </div>
    );
  };
  
  export default StarshipSearch;