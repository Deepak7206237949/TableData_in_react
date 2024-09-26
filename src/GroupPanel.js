import React from 'react';

const GroupPanel = ({ columns, onGroupChange }) => {
  return (
    <div>
      {columns.map((column) => (
        <div key={column.id}>
          <input
            type="checkbox"
            checked={column.grouped}
            onChange={() => onGroupChange(column.id)}
          />
          <span>{column.Header}</span>
        </div>
      ))}
    </div>
  );
};

export default GroupPanel;