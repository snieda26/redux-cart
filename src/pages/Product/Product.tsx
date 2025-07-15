import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '@/styles/pages/Product.module.scss';
import Button from '@/components/common/Button';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { useAppDispatch } from '@/store/hooks';
import { useGetProductByIdQuery } from '@/store/api/productsApi';
import { addToCart } from '@/store/slices/cartSlice';
import { RootState } from '@/store';

const Product: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductByIdQuery(parseInt(id || '0'), {
    skip: !id,
  });

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  if (isLoading) {
    return (
      <div className={styles.productPageWrapper}>
        <div className={styles.loadingContainer}>
          <LoadingSpinner size="large" />
          <div className={styles.loadingText}>Loading product...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.productPageWrapper}>
        <div className={styles.errorContainer}>
          Error: {'data' in error ? String(error.data) : 'Failed to load product'}
        </div>
      </div>
    );
  }

  if (!product) {
    return <div className={styles.notFound}>Product not found.</div>;
  }

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
            <Button onClick={handleAddToCart}>Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
