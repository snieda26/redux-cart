import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '@/styles/pages/Product.module.scss';
import Button from '@/components/common/Button';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { fetchProductById } from '@/store/slices/productsSlice';
import { addToCart } from '@/store/slices/cartSlice';

const Product: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const {
    selectedProduct: product,
    loading,
    error,
  } = useAppSelector((state: any) => state.products);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(parseInt(id)));
    }
  }, [dispatch, id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  if (loading) {
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
        <div className={styles.errorContainer}>Error: {error}</div>
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
