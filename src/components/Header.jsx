// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../store/cartSlice';

const Header = () => {
  const cartCount = useSelector(selectCartCount);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f8f9fa', alignItems: 'center', borderBottom: '1px solid #ddd' }}>
      <nav style={{ display: 'flex', gap: '15px', fontSize: '1rem' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Home</Link>
        <Link to="/plants" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Plants</Link>
        <Link to="/cart" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Cart</Link>
      </nav>
      <div style={{ position: 'relative', fontSize: '1.2rem' }}>
        🛒 
        <span style={{ 
          background: 'red', 
          color: 'white', 
          borderRadius: '50%', 
          padding: '2px 6px', 
          fontSize: '0.75rem', 
          position: 'absolute', 
          top: '-5px', 
          right: '-10px' 
        }}>
          {cartCount}
        </span>
      </div>
    </header>
  );
};

export default Header;