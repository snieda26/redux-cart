import React from 'react';
import styles from '@/styles/pages/Cart.module.scss';
import { Container } from '@/components/common/Container';

const Cart: React.FC = () => {
  return (
    <div className={styles.cartPage}>
      <Container
        additionalStyles={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 24px',
          marginTop: '80px',
        }}
      >
        <div className={styles.emptyCart}>Cart is empty</div>
      </Container>
    </div>
  );
};

export default Cart;
