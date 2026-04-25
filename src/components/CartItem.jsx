// src/components/CartItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../store/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem', borderRadius: '8px', background: '#fff', flexWrap: 'wrap', gap: '10px' }}>
      <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
      <div style={{ flex: 1, minWidth: '150px' }}>
        <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>{item.name}</h3>
        <p style={{ margin: '0', color: '#666', fontSize: '0.9rem' }}>Unit Price: ${item.price.toFixed(2)}</p>
        <p style={{ margin: '5px 0 0 0', fontWeight: 'bold', color: '#4CAF50' }}>Total: ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button onClick={() => dispatch(decrementQuantity({ id: item.id }))} style={{ padding: '5px 10px', cursor: 'pointer', background: '#eee', border: 'none', borderRadius: '4px' }}>-</button>
        <span style={{ width: '30px', textAlign: 'center', fontWeight: 'bold' }}>{item.quantity}</span>
        <button onClick={() => dispatch(incrementQuantity({ id: item.id }))} style={{ padding: '5px 10px', cursor: 'pointer', background: '#eee', border: 'none', borderRadius: '4px' }}>+</button>
        <button onClick={() => dispatch(removeItem({ id: item.id }))} style={{ background: '#ff4d4d', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;