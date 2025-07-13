import React from 'react';
import styles from '@/styles/components/CartItem.module.scss';

interface CartItemProps {
  image: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ image, title, description, price, quantity }) => (
  <div className={styles.cartItem}>
    <div className={styles.cartItemImageContainer}>
      <img src={image} alt={title} className={styles.cartItemImage} />
    </div>
    <div className={styles.cartItemInfo}>
      <div className={styles.cartItemTitle}>{title}</div>
      <div className={styles.cartItemDesc}>{description}</div>
    </div>
    <div className={styles.cartItemQty}>{quantity} pcs.</div>
    <div className={styles.cartItemPrice}>{price} $</div>
  </div>
);

export default CartItem;
