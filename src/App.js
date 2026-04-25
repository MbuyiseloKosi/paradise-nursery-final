import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ProductList from './pages/ProductList';
import CartPage from './pages/CartPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Landing Page: No Header */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Product List: Has Header */}
        <Route path="/plants" element={
          <>
            <Header />
            <ProductList />
          </>
        } />
        
        {/* Cart Page: Has Header */}
        <Route path="/cart" element={
          <>
            <Header />
            <CartPage />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;