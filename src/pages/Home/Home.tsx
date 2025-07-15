import React, { useEffect } from 'react';
import { ProductCard } from '@/components';
import styles from '@/styles/pages/Home.module.scss';
import { Container } from '@/components/common/Container';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { fetchProducts } from '@/store/slices/productsSlice';
import { addToCart } from '@/store/slices/cartSlice';
import { IProduct } from '@/types/product';
import { RootState } from '@/store';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items: products, loading, error } = useAppSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product: IProduct) => {
    dispatch(addToCart(product));
  };

  if (loading) {
    return (
      <div className={styles.homePage}>
        <Container>
          <div className={styles.loadingContainer}>
            <LoadingSpinner size="large" />
            <div className={styles.loadingText}>Loading products...</div>
          </div>
        </Container>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.homePage}>
        <Container>
          <div className={styles.errorContainer}>Error: {error}</div>
        </Container>
      </div>
    );
  }

  return (
    <div className={styles.homePage}>
      <Container>
        <div className={styles.productGrid}>
          {products.map((product: IProduct) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              onAdd={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
