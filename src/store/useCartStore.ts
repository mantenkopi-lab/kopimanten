import { create } from 'zustand';
import { CartItem, PricingResult, calculatePricing } from '@/lib/utils/pricing';

interface CartState {
  items: CartItem[];
  customerPhone: string;
  customerName: string;
  addItem: (item: CartItem) => void;
  removeItem: (index: number) => void;
  setCustomer: (name: string, phone: string) => void;
  clearCart: () => void;
  getPricing: () => PricingResult;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  customerPhone: '',
  customerName: '',

  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  
  removeItem: (index) => set((state) => ({ 
    items: state.items.filter((_, i) => i !== index) 
  })),

  setCustomer: (name, phone) => set({ customerName: name, customerPhone: phone }),

  clearCart: () => set({ items: [], customerName: '', customerPhone: '' }),

  getPricing: () => calculatePricing(get().items),
}));
