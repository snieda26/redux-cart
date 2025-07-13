import React from 'react';
import products from '@/mock-data.json';
import { ProductCard } from '@/components';
import styles from '@/styles/pages/Home.module.scss';
import { Container } from '@/components/common/Container';

const Home: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <Container>
        <div className={styles.productGrid}>
          {products.map((product: any) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              onAdd={() => {}}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
