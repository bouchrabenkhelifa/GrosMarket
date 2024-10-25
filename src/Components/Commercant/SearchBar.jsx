import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ setSearchQuery }) => {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex shadow-sm rounded-lg max-w-2xl mx-auto pt-24 md:w-full sm:w-[75%]">
      <input
        type="text"
        onChange={handleSearchChange}
        className="flex-grow h-10 px-4 text-gray-700 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#FFC300] placeholder:text-sm placeholder:font-normal"
        placeholder="Rechercher un produit"
      />
      <button type="submit">
        <FaSearch className="text-gray-500 bg-[#FFC300] p-2 w-10 h-10 cursor-pointer rounded-r-lg" />
      </button>
    </div>
  );
};

export default SearchBar;
