import React from 'react';
import styles from '@/styles/components/ProductCard.module.scss';
import Button from '@/components/common/Button';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  onAdd: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, price, onAdd }) => (
  <div className={styles.productCard}>
    <img src={image} alt={title} className={styles.productImage} />
    <div className={styles.productTitle}>{title}</div>
    <div className={styles.productDesc}>{description}</div>
    <div className={styles.productFooter}>
      <span className={styles.productPrice}>{price} $</span>
      <Button onClick={onAdd}>Add</Button>
    </div>
  </div>
);

export default ProductCard;
