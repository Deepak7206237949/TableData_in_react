import React from 'react';

const DateRange = ({ column }) => {
  const { filterValue, setFilter } = column;

  return (
    <div>
      <input
        type="date"
        value={filterValue || ''}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Start date"
      />
      <input
        type="date"
        value={filterValue || ''}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="End date"
      />
    </div>
  );
};

export default DateRange;