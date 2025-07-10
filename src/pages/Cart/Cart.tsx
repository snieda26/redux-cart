import React, { useContext } from 'react';
import { CartItem, Card } from '@/components';
import { CartContext } from '@/context/CartContext';
import styles from '@/styles/pages/Cart.module.scss';

const Cart: React.FC = () => {
  const { cart, total } = useContext(CartContext);
  return (
    <div className={styles.cartPage}>
      <div className={styles.container}>
        <h2>My orders</h2>
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
            Total: <b>{total} $</b>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
