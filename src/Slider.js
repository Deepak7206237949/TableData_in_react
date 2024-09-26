import React from 'react';

const Slider = ({ column }) => {
  const { filterValue, setFilter } = column;

  return (
    <div>
      <input
        type="range"
        min={0}
        max={100}
        value={filterValue || 0}
        onChange={(e) => setFilter(e.target.value)}
      />
      <span>{filterValue || 0}</span>
    </div>
  );
};

export default Slider;