// src/pages/ProductList.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/cartSlice';
import { plants } from '../data/plants';

const ProductList = () => {
  const dispatch = useDispatch();
  // Track which items have been added to disable buttons
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (plant) => {
    if (!addedItems[plant.id]) {
      dispatch(addItem(plant));
      setAddedItems(prev => ({ ...prev, [plant.id]: true }));
    }
  };

  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Our Collection</h2>
      {categories.map(category => (
        <div key={category} style={{ marginBottom: '3rem' }}>
          <h3 style={{ borderBottom: '2px solid #4CAF50', display: 'inline-block', paddingBottom: '5px', marginBottom: '1rem' }}>{category}</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {plants.filter(p => p.category === category).map(plant => (
              <div key={plant.id} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', width: '200px', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }} />
                <h4 style={{ margin: '10px 0 5px', fontSize: '1.1rem' }}>{plant.name}</h4>
                <p style={{ fontWeight: 'bold', color: '#4CAF50', margin: '5px 0' }}>${plant.price.toFixed(2)}</p>
                <button 
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedItems[plant.id]}
                  style={{ 
                    background: addedItems[plant.id] ? '#ccc' : '#4CAF50', 
                    color: 'white', 
                    border: 'none', 
                    padding: '0.5rem 1rem', 
                    borderRadius: '4px',
                    cursor: addedItems[plant.id] ? 'not-allowed' : 'pointer',
                    width: '100%',
                    fontWeight: 'bold'
                  }}
                >
                  {addedItems[plant.id] ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;