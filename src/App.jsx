import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';

function App() {
  return (
    <Router>
      <div className="background-image">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/plants">Plants</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={
            <div style={{ textAlign: 'center', marginTop: '100px', color: 'white' }}>
              <h1>Welcome to Paradise Nursery</h1>
              <button 
                style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
                onClick={() => window.location.href = '/plants'}
              >
                Get Started
              </button>
            </div>
          } />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;