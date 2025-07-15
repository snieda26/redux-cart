import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@/types/product';

interface CartItem extends IProduct {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      state.itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      state.total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      state.itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },

    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          item.quantity = quantity;
        }

        state.total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        state.itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.itemCount = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
