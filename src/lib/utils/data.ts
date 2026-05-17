import { Product } from "./pricing";

export const MENU_DATA: Product[] = [
  {
    id: "p1",
    name: "Kopi Samawa",
    category: "coffee",
    description: "Espresso + Full Cream + Creamer. Perpaduan harmonis.",
    image: "/images/image2.png",
    options: [
      { size: "250ml", price: 20000 },
      { size: "500ml", price: 45000 },
      { size: "1000ml", price: 85000 }
    ]
  },
  {
    id: "p2",
    name: "Kopi Kado",
    category: "coffee",
    description: "Espresso + Creamer + Avocado. Kejutan rasa.",
    image: "/images/image4.png",
    options: [
      { size: "250ml", price: 20000 },
      { size: "500ml", price: 45000 },
      { size: "1000ml", price: 85000 }
    ]
  },
  {
    id: "p3",
    name: "Kopi Susu Aren Manten",
    category: "coffee",
    description: "Kopi susu klasik dengan gula aren premium.",
    image: "/images/image3.png",
    options: [
      { size: "250ml", price: 20000 },
      { size: "500ml", price: 45000 },
      { size: "1000ml", price: 85000 }
    ]
  },
  {
    id: "p4",
    name: "Mapag Tea",
    category: "non-coffee",
    description: "Thai Tea + Milk. Kesegaran yang menyambut.",
    image: "/images/image2.png",
    options: [
      { size: "250ml", price: 20000 },
      { size: "500ml", price: 40000 },
      { size: "1000ml", price: 75000 }
    ]
  },
  {
    id: "p5",
    name: "Choco Ijab Qabul",
    category: "non-coffee",
    description: "Chocolate + Fresh Milk. Janji manis cokelat kental.",
    image: "/images/image2.png",
    options: [
      { size: "250ml", price: 20000 },
      { size: "500ml", price: 45000 },
      { size: "1000ml", price: 85000 }
    ]
  }
];
