// src/pages/CartPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../store/cartSlice';
import CartItem from '../components/CartItem';

const CartPage = () => {
  const cartItems = useSelector(selectCartItems);
  const totalCost = useSelector(selectCartTotal);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>Your Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '2rem', background: '#f9f9f9', borderRadius: '8px' }}>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Your cart is empty.</p>
          <Link to="/plants">
            <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Start Shopping
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid #ddd', paddingBottom: '1rem' }}>
            <span style={{ fontSize: '1.1rem' }}>Total Items: <strong>{totalItems}</strong></span>
            <span style={{ fontSize: '1.1rem' }}>Total Cost: <strong style={{ color: '#4CAF50' }}>${totalCost.toFixed(2)}</strong></span>
          </div>

          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/plants">
              <button style={{ padding: '1rem 2rem', background: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', flex: 1 }}>
                Continue Shopping
              </button>
            </Link>
            <button 
              onClick={() => alert("Checkout feature coming soon!")}
              style={{ padding: '1rem 2rem', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', flex: 1 }}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;