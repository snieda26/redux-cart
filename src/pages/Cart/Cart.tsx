import React from 'react';
import styles from '@/styles/pages/Cart.module.scss';
import { Container } from '@/components/common/Container';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { updateQuantity } from '@/store/slices/cartSlice';
import { CartItem } from '@/components';
import { RootState } from '@/store';
import { IProduct } from '@/types/product';

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, total } = useAppSelector((state: RootState) => state.cart);

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

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
        {items.length === 0 ? (
          <div className={styles.emptyCart}>Cart is empty</div>
        ) : (
          <div className={styles.cartContent}>
            <div className={styles.cartItems}>
              {items.map((item: IProduct) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  quantity={item.quantity || 0}
                  onUpdateQuantity={(quantity: number) => handleUpdateQuantity(item.id, quantity)}
                />
              ))}
            </div>
            <div className={styles.cartTotal}>
              <h2>Total: ${total.toFixed(2)}</h2>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;
