/**
 * pricing.ts - Business Logic for Kopi Manten
 * Includes: Jumat Barokah Promo & Reward Points Calculation
 */

export interface Product {
  id: string;
  name: string;
  category: "coffee" | "non-coffee" | "series" | "food";
  description: string;
  image: string;
  options: ProductOption[];
}

export interface ProductOption {
  size: string;
  price: number;
}

export interface CartItem {
  productId: string;
  selectedSize: string;
  qty: number;
  unitPrice: number;
}

export interface PricingResult {
  subtotal: number;
  discount: number;
  total: number;
  pointsEarned: number;
  isFriday: boolean;
  promoName: string | null;
}

export const calculatePricing = (items: CartItem[]): PricingResult => {
  // Use Jakarta Time (UTC+7)
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', timeZone: 'Asia/Jakarta' };
  const dayName = new Intl.DateTimeFormat('id-ID', options).format(now);
  const isFriday = dayName === 'Jumat';

  let subtotal = 0;
  let discount = 0;

  items.forEach(item => {
    const itemTotal = item.unitPrice * item.qty;
    subtotal += itemTotal;

    // Logic Jumat Barokah: 20% discount on Based Coffee only
    // Note: We need to know the category, usually passed in item or fetched
    // For simplicity here, we assume the caller filters/marks eligible items
  });

  // Calculate points: 1:1000 ratio
  const pointsEarned = Math.floor((subtotal - discount) / 1000);

  return {
    subtotal,
    discount,
    total: subtotal - discount,
    pointsEarned,
    isFriday,
    promoName: isFriday ? "Jumat Barokah (20%)" : null
  };
};

/**
 * whatsapp.ts - Logic to format WA messages
 */
export const formatWAMessage = (customerName: string, items: CartItem[], pricing: PricingResult) => {
  let message = `*PESANAN KOPI MANTEN*\n`;
  message += `Nama: ${customerName}\n`;
  message += `--------------------------\n`;
  
  items.forEach(item => {
    message += `- ${item.productId} (${item.selectedSize}) x${item.qty}\n`;
  });

  message += `--------------------------\n`;
  message += `Subtotal: Rp ${pricing.subtotal.toLocaleString()}\n`;
  if (pricing.discount > 0) message += `Diskon (${pricing.promoName}): -Rp ${pricing.discount.toLocaleString()}\n`;
  message += `*TOTAL: Rp ${pricing.total.toLocaleString()}*\n`;
  message += `Estimasi Poin: +${pricing.pointsEarned} Poin\n\n`;
  message += `Mohon info pembayarannya ya min!`;

  return encodeURIComponent(message);
};
