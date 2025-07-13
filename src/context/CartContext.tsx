import { IProduct } from '@/types/product';
import React, { createContext, useState } from 'react';

export const CartContext = createContext<{
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  total: number;
}>({
  cart: [],
  addToCart: () => {},
  total: 0,
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  const addToCart = (product: IProduct) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 0) + 1 } : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 0), 0);

  return <CartContext.Provider value={{ cart, addToCart, total }}>{children}</CartContext.Provider>;
};
