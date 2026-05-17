"use client";
import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  Trophy, 
  Printer, 
  MoreHorizontal, 
  ArrowUpRight, 
  Search,
  Coffee,
  Package,
  CircleDollarSign
} from 'lucide-react';

const MOCK_ORDERS = [
  { id: 'KM-001', customer: 'Budi Santoso', phone: '0812345678', total: 45000, points: 45, date: '10:45 AM', status: 'Selesai' },
  { id: 'KM-002', customer: 'Siti Aminah', phone: '0898765432', total: 85000, points: 85, date: '11:20 AM', status: 'Proses' },
  { id: 'KM-003', customer: 'Andi Pratama', phone: '0811223344', total: 125000, points: 125, date: '12:05 PM', status: 'Selesai' },
];

export default function AdminDashboard() {
  const [orders] = useState(MOCK_ORDERS);

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-10 selection:bg-orange-500/30">
      {/* Background Decor */}
      <div className="fixed top-[-100px] right-[-100px] w-[500px] h-[500px] bg-orange-600/10 blur-[150px] -z-10 rounded-full"></div>
      
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
           <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Live Dashboard</span>
           </div>
           <h1 className="text-4xl font-black tracking-tighter">ADMIN <span className="text-gradient">COMMANDER.</span></h1>
        </div>
        
        <div className="flex gap-4 w-full md:w-auto">
           <div className="relative flex-1 md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Cari Pesanan / Customer..." 
                className="w-full bg-white/5 border border-white/5 p-4 pl-12 rounded-2xl focus:border-orange-500/50 outline-none transition-all font-medium text-sm"
              />
           </div>
           <button className="bg-white text-black p-4 rounded-2xl font-black hover:orange-gradient hover:text-white transition-all shadow-xl shadow-white/5">
              <Package className="w-5 h-5" />
           </button>
        </div>
      </header>

      {/* Grid Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard title="Revenue Today" value="Rp 255.000" icon={<CircleDollarSign className="w-5 h-5" />} trend="+12%" color="orange" />
        <StatCard title="Active Customers" value="84" icon={<Users className="w-5 h-5" />} trend="+8" color="blue" />
        <StatCard title="Total Redemptions" value="12" icon={<Trophy className="w-5 h-5" />} trend="0" color="purple" />
        <StatCard title="Main Product" value="Susu Aren" icon={<Coffee className="w-5 h-5" />} sub="64 Sold" color="green" />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Order Table */}
        <div className="lg:col-span-2 glass rounded-[2.5rem] border-white/5 overflow-hidden">
           <div className="p-8 border-b border-white/5 flex justify-between items-center">
              <h2 className="text-xl font-black uppercase tracking-tighter">Pesanan Terbaru</h2>
              <button className="text-xs font-bold text-slate-500 hover:text-orange-500 transition">Lihat Semua</button>
           </div>
           
           <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="text-[10px] font-black uppercase tracking-widest text-slate-500 border-b border-white/5">
                  <tr>
                    <th className="p-8 pb-4">Order ID</th>
                    <th className="p-8 pb-4">Customer</th>
                    <th className="p-8 pb-4">Income</th>
                    <th className="p-8 pb-4">Status</th>
                    <th className="p-8 pb-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium">
                  {orders.map((order, idx) => (
                    <tr key={order.id} className="group border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="p-8 py-6 font-mono text-xs text-orange-500/80">{order.id}</td>
                      <td className="p-8 py-6">
                        <p className="font-black text-white">{order.customer}</p>
                        <p className="text-[10px] text-slate-500 font-bold">{order.phone}</p>
                      </td>
                      <td className="p-8 py-6">
                        <div className="flex items-center gap-1">
                           <span className="text-xs text-slate-500">IDR</span>
                           <span className="font-black">{order.total.toLocaleString()}</span>
                        </div>
                        <p className="text-[10px] text-green-500 font-bold">+{order.points} Pts</p>
                      </td>
                      <td className="p-8 py-6">
                         <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                           order.status === 'Selesai' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-orange-500/10 text-orange-500 border border-orange-500/20'
                         }`}>
                            {order.status}
                         </span>
                      </td>
                      <td className="p-8 py-6">
                         <div className="flex justify-center gap-2 opacity-10 md:opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="bg-white/5 p-2 rounded-lg hover:bg-white/10 transition border border-white/5">
                               <Printer className="w-4 h-4" />
                            </button>
                            <button className="bg-white/5 p-2 rounded-lg hover:bg-white/10 transition border border-white/5">
                               <MoreHorizontal className="w-4 h-4" />
                            </button>
                         </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
           </div>
        </div>

        {/* Side Panel: Quick Actions/Insights */}
        <div className="space-y-6">
           <div className="glass p-8 rounded-[2.5rem] border-white/5 bg-gradient-to-br from-orange-600/10 to-transparent">
              <h3 className="font-black uppercase tracking-tighter mb-6 flex items-center gap-2">
                 <ArrowUpRight className="w-5 h-5 text-orange-500" />
                 Insights
              </h3>
              <div className="space-y-6">
                 <div className="flex justify-between items-start">
                    <p className="text-sm font-medium text-slate-400">Total Reward<br/>Dibagikan</p>
                    <span className="text-2xl font-black">1.250 <span className="text-xs text-slate-600">PTS</span></span>
                 </div>
                 <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div className="orange-gradient h-full w-[65%]"></div>
                 </div>
                 <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Target Bulanan: 2.000 PTS</p>
              </div>
           </div>

           <div className="glass p-8 rounded-[2.5rem] border-white/5">
              <h3 className="font-black uppercase tracking-tighter mb-6">Quick Tools</h3>
              <div className="grid grid-cols-2 gap-3">
                 <button className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-all text-center group">
                    <BarChart3 className="w-6 h-6 mx-auto mb-2 text-slate-500 group-hover:text-orange-500" />
                    <span className="text-[10px] font-black uppercase text-slate-400">Laporan</span>
                 </button>
                 <button className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-all text-center group">
                    <Users className="w-6 h-6 mx-auto mb-2 text-slate-500 group-hover:text-orange-500" />
                    <span className="text-[10px] font-black uppercase text-slate-400">Promo</span>
                 </button>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}

function StatCard({ title, value, sub, trend, icon, color }: any) {
  return (
    <div className="glass p-7 rounded-[2.5rem] border-white/5 hover:border-white/10 transition-all group overflow-hidden relative">
      <div className={`absolute -right-4 -bottom-4 w-24 h-24 blur-3xl opacity-10 group-hover:opacity-20 transition-opacity bg-${color}-500`}></div>
      <div className="flex justify-between items-start mb-4">
         <div className={`w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 text-white`}>
            {icon}
         </div>
         {trend && (
            <span className="text-[10px] font-black bg-green-500/10 text-green-500 px-2 py-1 rounded-lg border border-green-500/20">
               {trend}
            </span>
         )}
      </div>
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">{title}</p>
      <h3 className="text-3xl font-black tracking-tighter text-white">{value}</h3>
      {sub && <p className="text-[10px] text-slate-500 font-bold mt-2 uppercase">{sub}</p>}
    </div>
  );
}
