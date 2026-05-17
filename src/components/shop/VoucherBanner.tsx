"use client";
import React, { useState } from 'react';
import { Ticket, Sparkles, CheckCircle2 } from 'lucide-react';

export default function VoucherBanner() {
  const [isApplied, setIsApplied] = useState(false);

  return (
    <div 
      onClick={() => setIsApplied(!isApplied)}
      className={`relative overflow-hidden p-8 rounded-[3rem] border transition-all duration-700 cursor-pointer group animate-fade-in ${
        isApplied 
        ? 'bg-green-600/10 border-green-500/30 shadow-2xl shadow-green-500/10' 
        : 'glass border-white/5 hover:border-orange-500/30 hover:bg-white/[0.05]'
      }`}
    >
      {/* Background Glow */}
      <div className={`absolute top-1/2 left-0 -translate-y-1/2 w-40 h-40 blur-[80px] -z-10 transition-colors duration-700 ${
        isApplied ? 'bg-green-500/20' : 'bg-orange-500/10'
      }`}></div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className={`w-16 h-16 rounded-3xl flex items-center justify-center transition-all duration-500 shadow-xl ${
            isApplied 
            ? 'bg-green-500 text-white rotate-[360deg]' 
            : 'orange-gradient text-white group-hover:scale-110'
          }`}>
            {isApplied ? <CheckCircle2 className="w-8 h-8" /> : <Ticket className="w-8 h-8" />}
          </div>
          <div className="space-y-1">
            <h3 className="font-black text-2xl tracking-tighter uppercase italic">
               {isApplied ? 'Promo Aktif!' : 'Voucher Manten Baru'}
            </h3>
            <p className="text-sm font-medium text-slate-400">
               {isApplied 
                ? 'Diskon otomatis terpotong pada total belanja Anda.' 
                : 'Klik untuk klaim diskon 15% khusus member baru.'}
            </p>
          </div>
        </div>

        <div className={`px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
          isApplied 
          ? 'bg-green-500 text-white' 
          : 'bg-white text-black group-hover:orange-gradient group-hover:text-white'
        }`}>
          {isApplied ? 'KODE: MANTENBARU' : 'Ambil Sekarang'}
        </div>
      </div>
      
      {/* Floating Sparkles Decor */}
      <div className="absolute top-4 right-8 opacity-20 group-hover:opacity-100 transition-opacity">
         <Sparkles className={`w-5 h-5 ${isApplied ? 'text-green-400' : 'text-orange-400'}`} />
      </div>
    </div>
  );
}
