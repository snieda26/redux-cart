import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '@/styles/components/ProductCard.module.scss';
import Button from '@/components/common/Button';
import { DESCRIPTION_MAX_LENGTH, TITLE_MAX_LENGTH } from '@/constants';

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  onAdd: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  description,
  price,
  onAdd,
}) => {
  const navigate = useNavigate();
  const truncatedDescription =
    description.length > DESCRIPTION_MAX_LENGTH
      ? description.slice(0, DESCRIPTION_MAX_LENGTH) + '...'
      : description;

  const truncatedTitle =
    title.length > TITLE_MAX_LENGTH ? title.slice(0, TITLE_MAX_LENGTH) + '...' : title;

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAdd();
  };

  return (
    <div className={styles.productCard} onClick={handleCardClick}>
      <div className={styles.productImageContainer}>
        <img src={image} alt={title} className={styles.productImage} />
      </div>
      <div className={styles.productContent}>
        <div className={styles.productTitle}>{truncatedTitle}</div>
        <div className={styles.productDesc}>{truncatedDescription}</div>
        <div className={styles.productFooter}>
          <span className={styles.productPrice}>{price} $</span>
          <Button onClick={handleAddToCart}>Buy</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
