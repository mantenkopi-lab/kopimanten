'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, Phone, MapPin, Coffee, Leaf, Users, ShieldCheck, ChevronRight } from 'lucide-react';
import Image from 'next/image';

import { menuData, categories, Product, ProductSize } from '../data/menu';
import { useCartStore } from '../store/cartStore';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Modal State for Product

  // Modal State for Product
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);

  const cart = useCartStore();

  const filteredMenu = activeCategory === 'All' 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
    setSelectedSize(product.prices[0].size);
  };

  const handleAddToCart = () => {
    if (selectedProduct && selectedSize) {
      const price = selectedProduct.prices.find(p => p.size === selectedSize)?.price || 0;
      cart.addItem(selectedProduct, selectedSize, price);
      setSelectedProduct(null);
      setIsCartOpen(true); // Open cart to show it was added
    }
  };

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white font-sans">
      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/5 py-0' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/assets/Logo Kopi Manten.JPG" alt="Kopi Manten Logo" width={50} height={50} className="rounded-full" />
            <div className="hidden sm:block">
              <h1 className="font-serif text-2xl tracking-widest text-white italic">Kopimanten</h1>
              <p className="text-[10px] tracking-[0.2em] text-[#c59d5f] uppercase mt-1">Coffee & Couple</p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-sm tracking-widest text-white/80">
            <a href="#" className="hover:text-[#c59d5f] transition-colors">HOME</a>
            <a href="#philosophy" className="hover:text-[#c59d5f] transition-colors">ABOUT US</a>
            <a href="#menu" className="hover:text-[#c59d5f] transition-colors">OUR COFFEE</a>
            <a href="#footer" className="hover:text-[#c59d5f] transition-colors">CONTACT</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-white/80 hover:text-[#c59d5f] transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {cart.getTotalItems() > 0 && (
                <span className="absolute top-0 right-0 bg-[#c59d5f] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cart.getTotalItems()}
                </span>
              )}
            </button>
            <button className="hidden sm:block px-6 py-2 border border-[#c59d5f] text-[#c59d5f] hover:bg-[#c59d5f] hover:text-black transition-colors text-sm tracking-widest">
              ORDER NOW
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center pt-24">
        <div className="absolute inset-0 z-0">
          <Image src="/assets/Tampilan Kopi booth.webp" alt="Coffee Booth" fill className="object-cover object-center opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#0d0d0d]" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 max-w-7xl mx-auto px-6 w-full flex justify-between items-center"
        >
          <div className="max-w-2xl">
            <p className="text-[#c59d5f] tracking-widest text-sm sm:text-base font-medium mb-4">EXCLUSIVE. PREMIUM. AUTHENTIC.</p>
            <h2 className="text-5xl sm:text-7xl font-serif text-white leading-tight mb-6">
              RASA, CERITA,<br />DAN MAKNA
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-md leading-relaxed">
              Kopi bukan hanya tentang rasa, tapi tentang perjalanan, kebersamaan, dan makna di setiap tegukan.
            </p>
            <a href="#menu" className="inline-block px-8 py-3 bg-[#c59d5f] text-black font-semibold tracking-wider hover:bg-[#e0b472] transition-colors">
              EXPLORE OUR COFFEE
            </a>
          </div>

          <div className="hidden lg:block glass p-6 border border-[#c59d5f]/30 w-64">
             <h3 className="text-[#c59d5f] text-xl font-serif mb-4 pb-2 border-b border-[#c59d5f]/30 text-center">MENU</h3>
             <ul className="text-white/80 space-y-3 text-sm tracking-wider text-center">
               <li>• ESPRESSO</li>
               <li>• AMERICANO</li>
               <li>• LATTE</li>
               <li>• CAPPUCCINO</li>
               <li>• MANUAL BREW</li>
               <li>• KOPI NUSANTARA</li>
               <li>• SIGNATURE</li>
             </ul>
          </div>
        </motion.div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section id="philosophy" className="py-24 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <p className="text-[#c59d5f] tracking-widest text-sm mb-2 uppercase">Filosofi Kopi Manten</p>
            <h2 className="text-4xl font-serif mb-6">KOPI ADALAH<br/>PERSATUAN</h2>
            <p className="text-white/60 mb-4 leading-relaxed">
              Kopi Manten terinspirasi dari filosofi pernikahan Jawa — menyatukan dua insan, dua keluarga, dan dua perjalanan menjadi satu tujuan.
            </p>
            <p className="text-white/60 leading-relaxed mb-6">
              Seperti kopi terbaik yang lahir dari perpaduan biji pilihan, proses yang penuh kesabaran, dan ketulusan dalam setiap langkah.
            </p>
            <p className="font-serif italic text-2xl text-[#c59d5f]">Kopi Manten</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-1 relative h-[400px] w-full"
          >
            <Image src="/assets/cozy & chill.JPG" alt="Latte Art" fill className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 rounded-full border border-[#c59d5f]/20 scale-105" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="lg:col-span-1 space-y-10"
          >
            <div className="flex gap-4">
              <Leaf className="w-8 h-8 text-[#c59d5f] shrink-0" />
              <div>
                <h4 className="text-lg tracking-wider mb-1">ALAMI</h4>
                <p className="text-sm text-white/50">Biji pilihan dari alam terbaik Nusantara</p>
              </div>
            </div>
            <div className="flex gap-4">
              <ShieldCheck className="w-8 h-8 text-[#c59d5f] shrink-0" />
              <div>
                <h4 className="text-lg tracking-wider mb-1">PROSES</h4>
                <p className="text-sm text-white/50">Diproses dengan ketelitian & dedikasi</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="w-8 h-8 text-[#c59d5f] shrink-0" />
              <div>
                <h4 className="text-lg tracking-wider mb-1">MANUSIA</h4>
                <p className="text-sm text-white/50">Dibuat untuk menyatukan cerita dan kebersamaan</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SIGNATURE MENU SECTION */}
      <section id="menu" className="py-24 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#c59d5f] tracking-widest text-sm mb-2 uppercase">Signature Menu</p>
          <h2 className="text-4xl font-serif mb-12">MENU PILIHAN</h2>
        </motion.div>
        
        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-white/10 pb-4">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 text-sm tracking-wider uppercase border transition-all ${
                activeCategory === cat 
                  ? 'border-[#c59d5f] bg-[#c59d5f] text-black' 
                  : 'border-white/20 text-white/60 hover:border-[#c59d5f] hover:text-[#c59d5f]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={product.id}
                className="group cursor-pointer flex flex-col"
                onClick={() => handleOpenProduct(product)}
              >
                <div className="relative w-full aspect-[4/5] bg-[#1a1a1a] overflow-hidden mb-4 rounded-sm">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-700" 
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 border border-[#c59d5f] text-[#c59d5f] tracking-widest text-xs">ORDER NOW</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#c59d5f] font-serif text-xl mb-1 uppercase tracking-wider">{product.name}</h3>
                  <p className="text-white/60 text-sm mb-2">{product.description}</p>
                  <p className="text-white/40 text-xs">
                    {product.prices.map(p => p.size).join(' / ')}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="relative py-24 bg-[#0a0a0a] border-t border-[#c59d5f]/20">
         <div className="absolute inset-0 bg-[url('/assets/Selamat%20Datang.JPG')] bg-cover bg-center opacity-5 grayscale" />
         
         <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16"
         >
            <div className="lg:col-span-2">
               <h2 className="text-3xl font-serif mb-2">SETIAP CANGKIR,</h2>
               <h2 className="text-3xl font-serif mb-6">SEBUAH CERITA.</h2>
               <p className="font-serif italic text-2xl text-[#c59d5f] mb-12">Kopi Manten</p>
               
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div>
                     <Coffee className="w-6 h-6 text-[#c59d5f] mb-3" />
                     <h4 className="text-sm font-bold tracking-wider mb-2">BIJI PILIHAN</h4>
                     <p className="text-xs text-white/50">100% biji kopi pilihan dari petani lokal</p>
                  </div>
                  <div>
                     <Leaf className="w-6 h-6 text-[#c59d5f] mb-3" />
                     <h4 className="text-sm font-bold tracking-wider mb-2">BERKELANJUTAN</h4>
                     <p className="text-xs text-white/50">Mendukung pertanian kopi berkelanjutan</p>
                  </div>
                  <div>
                     <ShieldCheck className="w-6 h-6 text-[#c59d5f] mb-3" />
                     <h4 className="text-sm font-bold tracking-wider mb-2">KUALITAS PREMIUM</h4>
                     <p className="text-xs text-white/50">Standar kualitas tinggi di setiap cangkir</p>
                  </div>
                  <div>
                     <Users className="w-6 h-6 text-[#c59d5f] mb-3" />
                     <h4 className="text-sm font-bold tracking-wider mb-2">KEBERSAMAAN</h4>
                     <p className="text-xs text-white/50">Lebih dari kopi, ini tentang kita</p>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-1 p-8 border border-[#c59d5f]/20 glass">
               <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#c59d5f]/20">
                  <MapPin className="w-5 h-5 text-[#c59d5f]" />
                  <h3 className="tracking-widest">VISIT OUR PLACE</h3>
               </div>
               <p className="text-sm text-white/60 leading-relaxed mb-6">
                  Banjar Wijaya Cluster Grasia B 41 No.28<br/>
                  RT.001/RW.010, Cipete, Kec. Pinang,<br/>
                  Kota Tangerang, Banten 15142
               </p>
               <div className="flex items-center gap-3 mb-8">
                  <Phone className="w-5 h-5 text-[#c59d5f]" />
                  <a href="tel:08118115981" className="text-xl tracking-wider hover:text-[#c59d5f] transition-colors">
                     0811-8115-981
                  </a>
               </div>
               <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#c59d5f] hover:text-[#c59d5f] transition-all text-xs font-bold">
                     IG
                  </a>
               </div>
            </div>
         </motion.div>
      </footer>

      {/* --- CART DRAWER --- */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-md bg-[#0d0d0d] z-50 shadow-2xl flex flex-col border-l border-[#c59d5f]/20"
            >
              <div className="p-6 flex items-center justify-between border-b border-white/10">
                <h2 className="text-xl tracking-widest text-[#c59d5f]">YOUR CART</h2>
                <button onClick={() => setIsCartOpen(false)} className="text-white/50 hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-white/30">
                    <ShoppingBag className="w-16 h-16 mb-4" />
                    <p className="tracking-widest">Cart is empty</p>
                  </div>
                ) : (
                  cart.items.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center">
                      <div className="w-20 h-20 relative bg-[#1a1a1a] shrink-0 border border-white/10">
                        <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-serif text-[#c59d5f] text-lg">{item.product.name}</h4>
                        <p className="text-xs text-white/50 mb-1">{item.size}</p>
                        <p className="text-white tracking-wider">Rp {(item.price / 1000).toFixed(0)}.000</p>
                      </div>
                      <div className="flex flex-col items-end gap-3">
                         <button onClick={() => cart.removeItem(item.id)} className="text-white/30 hover:text-red-400">
                           <X className="w-4 h-4" />
                         </button>
                         <span className="text-xs font-bold border border-white/20 px-2 py-1">Qty: {item.quantity}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.items.length > 0 && (
                <div className="p-6 border-t border-white/10 bg-[#111]">
                  <div className="flex justify-between mb-6">
                    <span className="text-white/70 tracking-widest">SUBTOTAL</span>
                    <span className="text-xl font-bold text-[#c59d5f]">Rp {(cart.getTotalPrice() / 1000).toFixed(0)}.000</span>
                  </div>
                  <button className="w-full bg-[#c59d5f] hover:bg-[#e0b472] text-black font-bold tracking-widest py-4 transition-colors">
                    CHECKOUT
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- PRODUCT MODAL --- */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            >
               <motion.div
                 initial={{ scale: 0.95, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 exit={{ scale: 0.95, opacity: 0 }}
                 onClick={(e) => e.stopPropagation()}
                 className="bg-[#111] border border-[#c59d5f]/30 max-w-lg w-full max-h-[90vh] overflow-y-auto relative"
               >
                 <button 
                   onClick={() => setSelectedProduct(null)}
                   className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white/70 hover:text-white"
                 >
                   <X className="w-5 h-5" />
                 </button>

                 <div className="relative w-full h-72">
                    <Image src={selectedProduct.image} alt={selectedProduct.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
                 </div>

                 <div className="p-8 -mt-10 relative z-10">
                    <p className="text-[#c59d5f] tracking-widest text-xs mb-2 uppercase">{selectedProduct.category}</p>
                    <h2 className="text-3xl font-serif mb-2">{selectedProduct.name}</h2>
                    <p className="text-white/60 text-sm mb-8 leading-relaxed">{selectedProduct.description}</p>

                    <h3 className="tracking-widest text-sm mb-4">SELECT SIZE</h3>
                    <div className="grid gap-3 mb-8">
                       {selectedProduct.prices.map((p) => (
                         <label 
                           key={p.size}
                           className={`flex items-center justify-between p-4 cursor-pointer transition-all border ${
                             selectedSize === p.size 
                               ? 'border-[#c59d5f] bg-[#c59d5f]/10' 
                               : 'border-white/10 hover:border-white/30'
                           }`}
                           onClick={() => setSelectedSize(p.size)}
                         >
                           <div className="flex items-center gap-4">
                             <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                               selectedSize === p.size ? 'border-[#c59d5f]' : 'border-white/30'
                             }`}>
                               {selectedSize === p.size && <div className="w-2 h-2 rounded-full bg-[#c59d5f]" />}
                             </div>
                             <span className="tracking-wider">{p.size}</span>
                           </div>
                           <span className="text-[#c59d5f]">Rp {(p.price / 1000).toFixed(0)}k</span>
                         </label>
                       ))}
                    </div>

                    <button 
                      onClick={handleAddToCart}
                      className="w-full bg-[#c59d5f] hover:bg-[#e0b472] text-black font-bold tracking-widest py-4 transition-colors flex justify-center items-center gap-2"
                    >
                      <ShoppingBag className="w-5 h-5" /> ADD TO CART
                    </button>
                 </div>
               </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
