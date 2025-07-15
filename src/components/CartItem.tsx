import React from 'react';
import styles from '@/styles/components/CartItem.module.scss';

interface CartItemProps {
  id: number;
  image: string;
  title: string;
  description?: string;
  price: number;
  quantity: number;
  onUpdateQuantity: (quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  image,
  title,
  description,
  price,
  quantity,
  onUpdateQuantity,
}) => (
  <div className={styles.cartItem}>
    <div className={styles.cartItemImageContainer}>
      <img src={image} alt={title} className={styles.cartItemImage} />
    </div>
    <div className={styles.cartItemInfo}>
      <div className={styles.cartItemTitle}>{title}</div>
      {description && <div className={styles.cartItemDesc}>{description}</div>}
    </div>
    <div className={styles.cartItemControls}>
      <div className={styles.quantityControls}>
        <button onClick={() => onUpdateQuantity(quantity - 1)} className={styles.quantityBtn}>
          -
        </button>
        <span className={styles.quantity}>{quantity}</span>
        <button onClick={() => onUpdateQuantity(quantity + 1)} className={styles.quantityBtn}>
          +
        </button>
      </div>
      <div className={styles.cartItemPrice}>${(price * quantity).toFixed(2)}</div>
    </div>
  </div>
);

export default CartItem;
