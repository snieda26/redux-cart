import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Cart from '@/pages/Cart/Cart';
import Product from '@/pages/Product/Product';
import { Container } from '@/components/common/Container';
import cartIcon from '@/assets/icons/cart.svg';
import styles from '@/styles/components/common/CartButton.module.scss';

const CartButton: React.FC = () => {
  return (
    <Link to="/cart" className={styles.cartButton}>
      <span className={styles.price}>0 $</span>
      <span className={styles.divider} />
      <span className={styles.iconWrap}>
        <img src={cartIcon} alt="cart" className={styles.icon} />
        <span className={styles.count}>0</span>
      </span>
    </Link>
  );
};

const App: React.FC = () => (
  <Router>
    <nav
      style={{
        padding: '1rem',
        background: '#22313a',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <Container
        additionalStyles={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link
          to="/"
          style={{ color: '#fff', fontWeight: 700, textDecoration: 'none', fontSize: '1.2rem' }}
        >
          ULTRASHOP
        </Link>
        <CartButton />
      </Container>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  </Router>
);

export default App;
