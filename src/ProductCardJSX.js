import React, { useState } from 'react';

const ProductCardJSX = ({ name, price, description }) => {
  const [message, setMessage] = useState('');

  const handleBuyNow = () => {
    setMessage('Item added to cart!');
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>{description}</p>
      <button onClick={handleBuyNow} style={{ backgroundColor: '#007bff', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }}>
        Buy Now
      </button>
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </div>
  );
};
