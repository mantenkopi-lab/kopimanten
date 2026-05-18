import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, ProductSize } from '../data/menu';

export interface CartItem {
  id: string;
  product: Product;
  size: ProductSize;
  price: number;
  quantity: number;
  notes?: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, size: ProductSize, price: number, notes?: string) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, size, price, notes) => {
        set((state) => {
          // Check if item with same product, size AND notes already exists
          const existingItem = state.items.find(
            (item) => 
              item.product.id === product.id && 
              item.size === size && 
              item.notes === notes
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id && 
                item.size === size && 
                item.notes === notes
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }

          // If not exists, add as new item with unique ID
          const uniqueId = `${product.id}-${size}-${notes || ''}-${Date.now()}`;
          return {
            items: [
              ...state.items, 
              { id: uniqueId, product, size, price, quantity: 1, notes }
            ],
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
    }),
    {
      name: 'cart-storage', // Key for localStorage
    }
  )
);
