import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ handleSearchNote }) => {
  const handleChange = (event) => {
    const searchText = event.target.value;
    handleSearchNote(searchText);
  };

  return (
    <div className='flex items-center bg-gray-200 rounded-full p-2 mt-4 ml-8 mr-8'>
      <FaSearch size={20} className='ml-2' />
      <input
        type='text'
        onChange={handleChange}
        placeholder='Type to search...'
        className='bg-transparent border-none focus:outline-none ml-2'
        style={{ flex: 1 }}
      />
    </div>
  );
};

export default SearchBar;
