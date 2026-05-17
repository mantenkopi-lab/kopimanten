export type ProductSize = '250ml' | '500ml' | '1000ml' | 'Cup';

export interface ProductPrice {
  size: ProductSize;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'Signature Coffee' | 'Non-Coffee' | 'Series Calon Manten' | 'Food & Snack';
  image: string;
  prices: ProductPrice[];
}

export const categories = [
  'All',
  'Signature Coffee',
  'Non-Coffee',
  'Series Calon Manten',
  'Food & Snack'
];

export const menuData: Product[] = [
  {
    id: 'kopi-samawa',
    name: 'Kopi Samawa',
    description: 'Biji Kopi + Creamer + Susu Segar',
    category: 'Signature Coffee',
    image: '/assets/Kopi Samawa.webp',
    prices: [
      { size: '250ml', price: 20000 },
      { size: '500ml', price: 45000 },
      { size: '1000ml', price: 85000 },
    ],
  },
  {
    id: 'kopi-kado',
    name: 'Kopi Kado',
    description: 'Alpukat + Espresso + Fresh Milk',
    category: 'Signature Coffee',
    image: '/assets/Kopi Kado.webp',
    prices: [
      { size: '250ml', price: 20000 },
      { size: '500ml', price: 45000 },
      { size: '1000ml', price: 85000 },
    ],
  },
  {
    id: 'kopi-susu-aren-manten',
    name: 'Kopsus Samawa',
    description: 'Kopi Susu Gula Aren khas Manten',
    category: 'Signature Coffee',
    image: '/assets/kopsus samawa.JPG',
    prices: [
      { size: '250ml', price: 20000 },
      { size: '500ml', price: 45000 },
      { size: '1000ml', price: 85000 },
    ],
  },
  {
    id: 'choco-ijab-qabul',
    name: 'Choco Ijab Qabul',
    description: 'Coklat Kental Spesial',
    category: 'Non-Coffee',
    image: '/assets/Choco Ijab Qabul.JPG',
    prices: [
      { size: '250ml', price: 20000 },
      { size: '500ml', price: 45000 },
      { size: '1000ml', price: 85000 },
    ],
  },
  {
    id: 'mapag-tea',
    name: 'Mapag Tea',
    description: 'Thai Tea Autentik',
    category: 'Non-Coffee',
    image: '/assets/Mapag Tea.webp',
    prices: [
      { size: '250ml', price: 20000 },
      { size: '500ml', price: 40000 },
      { size: '1000ml', price: 75000 },
    ],
  },
  {
    id: 'mahar',
    name: 'Mahar (Matcha Harmonis)',
    description: 'Matcha Segar',
    category: 'Non-Coffee',
    image: '/assets/MAHAR (Matcha Harmonis).webp',
    prices: [
      { size: '250ml', price: 20000 },
      { size: '500ml', price: 40000 },
      { size: '1000ml', price: 75000 },
    ],
  },
  {
    id: 'moka-win',
    name: 'Moka Win',
    description: 'Coklat + Espresso',
    category: 'Series Calon Manten',
    image: '/assets/Moka Win.webp',
    prices: [
      { size: 'Cup', price: 22000 },
    ],
  },
  {
    id: 'teh-kua',
    name: 'Teh K.U.A',
    description: 'Thai Tea Creamy',
    category: 'Series Calon Manten',
    image: '/assets/cozy & chill.JPG', // Placeholder
    prices: [
      { size: 'Cup', price: 20000 },
    ],
  },
  {
    id: 'snack-kebab',
    name: 'Kebab Mini',
    description: 'Kebab daging lezat',
    category: 'Food & Snack',
    image: '/assets/Selamat Datang.JPG', // Placeholder
    prices: [
      { size: 'Cup', price: 15000 },
    ],
  },
];
