import React from 'react';
import { ProductCard } from '@/components';
import styles from '@/styles/pages/Home.module.scss';
import { Container } from '@/components/common/Container';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { useAppDispatch } from '@/store/hooks';
import { addToCart } from '@/store/slices/cartSlice';
import { useGetProductsQuery } from '@/store/api/productsApi';
import { IProduct } from '@/types/product';
import { RootState } from '@/store';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: products, isLoading, error } = useGetProductsQuery();

  const handleAddToCart = (product: IProduct) => {
    dispatch(addToCart(product));
  };

  if (isLoading) {
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
          <div className={styles.errorContainer}>
            Error: {'data' in error ? String(error.data) : 'Failed to load products'}
          </div>
        </Container>
      </div>
    );
  }

  if (!products) {
    return (
      <div className={styles.homePage}>
        <Container>
          <div className={styles.errorContainer}>No products found</div>
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
