import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import { CartProvider } from './context/CartContext';

const App: React.FC = () => (
  <CartProvider>
    <Router>
      <nav
        style={{
          padding: '1rem',
          background: '#22313a',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Link
          to="/"
          style={{ color: '#fff', fontWeight: 700, textDecoration: 'none', fontSize: '1.2rem' }}
        >
          ULTRASHOP
        </Link>
        <Link to="/cart" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>
          Cart
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  </CartProvider>
);

export default App;
