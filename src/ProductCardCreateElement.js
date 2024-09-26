import React, { useState } from 'react';

const ProductCardCreateElement = ({ name, price, description }) => {
  const [message, setMessage] = useState('');

  const handleBuyNow = () => {
    setMessage('Item added to cart!');
  };

  return React.createElement(
    'div',
    { style: { border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '20px' } },
    React.createElement('h2', null, name),
    React.createElement('p', null, `Price: $${price}`),
    React.createElement('p', null, description),
    React.createElement(
      'button',
      {
        onClick: handleBuyNow,
        style: { backgroundColor: '#007bff', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }
      },
      'Buy Now'
    ),
    message && React.createElement('p', { style: { color: 'green' } }, message)
  );
};
