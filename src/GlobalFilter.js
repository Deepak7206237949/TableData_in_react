import React from 'react';

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <input
      type="text"
      value={filter || ''}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Search all columns"
    />
  );
};

export default GlobalFilter;