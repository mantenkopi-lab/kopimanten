import { create } from 'zustand';
import { Product, ProductSize } from '../data/menu';

export interface CartItem {
  id: string;
  product: Product;
  size: ProductSize;
  price: number;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, size: ProductSize, price: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (product, size, price) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.product.id === product.id && item.size === size);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.product.id === product.id && item.size === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        items: [...state.items, { id: `${product.id}-${size}`, product, size, price, quantity: 1 }],
      };
    });
  },
  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },
  clearCart: () => set({ items: [] }),
  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
  },
  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
}));
