import React, { useContext } from 'react';
import { CartItem, Card } from '@/components';
import { CartContext } from '@/context/CartContext';
import styles from '@/styles/pages/Cart.module.scss';
import { Container } from '@/components/common/Container';

const Cart: React.FC = () => {
  const { cart, total } = useContext(CartContext);

  if (!cart.length) {
    return <div className={styles.emptyCart}>No items in cart</div>;
  }

  return (
    <div className={styles.cartPage}>
      <Container
        additionalStyles={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 1.5rem',
          marginTop: '80px',
        }}
      >
        <Card className={styles.cartList}>
          {cart.map((item: any) => (
            <CartItem
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
          <div className={styles.cartTotal}>
            Total: <b>{total.toFixed(2)} $</b>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Cart;
