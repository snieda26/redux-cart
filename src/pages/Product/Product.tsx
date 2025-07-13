import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '@/styles/pages/Product.module.scss';
import Button from '@/components/common/Button';
import mockData from '@/mock-data.json';

const Product: React.FC = () => {
  const { id } = useParams();

  const product = Array.isArray(mockData)
    ? mockData.find((item: any) => String(item.id) === String(id))
    : null;

  if (!product) return <div className={styles.notFound}>Product not found.</div>;

  return (
    <div className={styles.productPageWrapper}>
      <div className={styles.productPageContent}>
        <div className={styles.productImageSection}>
          <img src={product.image} alt={product.title} className={styles.productImage} />
        </div>
        <div className={styles.productInfoSection}>
          <h1 className={styles.productTitle}>{product.title}</h1>
          <p className={styles.productDesc}>{product.description}</p>
          <div className={styles.productFooter}>
            <span className={styles.productPrice}>{product.price} $</span>
            <Button onClick={() => {}}>Buy</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
