// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';

const LandingPage = () => {
  return (
    <div style={{ 
      backgroundImage: 'url("https://images.unsplash.com/photo-1463320898484-cdee8141c787?auto=format&fit=crop&w=1920&q=80")',
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div style={{ background: 'rgba(0,0,0,0.6)', padding: '2rem', borderRadius: '8px', maxWidth: '600px', width: '100%' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Paradise Nursery</h1>
        <AboutUs />
        <Link to="/plants">
          <button style={{ marginTop: '2rem', padding: '1rem 2rem', fontSize: '1.2rem', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background 0.3s' }}>
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;