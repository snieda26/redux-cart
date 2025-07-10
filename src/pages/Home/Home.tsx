import React, { useContext } from 'react';
import products from '@/mock-data.json';
import { CartContext } from '@/context/CartContext';
import { ProductCard } from '@/components';
import styles from '@/styles/pages/Home.module.scss';

const Home: React.FC = () => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className={styles.homePage}>
      <div className={styles.container}>
        <div className={styles.productGrid}>
          {products.map((product: any) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              onAdd={() => addToCart(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
