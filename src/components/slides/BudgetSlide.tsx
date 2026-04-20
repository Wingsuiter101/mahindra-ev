import { motion } from "framer-motion";

const allocation = [
  { category: "ATL Media (TV, OOH, Print, Radio)", amount: "Rs. 6.75 Cr", share: "45%", desc: "Media buying, production, placement fees", color: "bg-red-600" },
  { category: "Digital Marketing", amount: "Rs. 6.0 Cr", share: "40%", desc: "Search, social, programmatic, email, website, analytics", color: "bg-indigo-600" },
  { category: "Influencer & Partnerships", amount: "Rs. 1.5 Cr", share: "10%", desc: "Influencer fees, partnership activation, events", color: "bg-purple-600" },
  { category: "Retail & Experiential", amount: "Rs. 0.75 Cr", share: "5%", desc: "Center operations, training, events, activation materials", color: "bg-slate-600" }
];

export default function BudgetSlide() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mb-3 sm:mb-4 md:mb-5">
        <h2 className="mb-3 text-xs font-mono uppercase tracking-widest text-white/50 sm:mb-4 sm:text-sm">24 / Financials</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Overall Budget Framework & Channel Allocation</h3>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative flex h-full flex-col items-center justify-center overflow-hidden border border-white/10 bg-gradient-to-br from-red-900/20 to-transparent p-4 sm:p-6 md:p-8 text-center sm:p-10"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-3xl -z-10" />
            <div className="text-xs font-mono text-white/50 uppercase tracking-widest mb-4">Total Annual Budget</div>
            <div className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">Rs. 15 Cr</div>
            <div className="text-sm text-white/70">Estimated for a 12-month launch campaign</div>
          </motion.div>
        </div>

        <div className="min-w-0 lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="h-full border border-white/10 bg-white/[0.02] p-5 sm:p-8"
          >
            <h4 className="text-xl font-medium mb-8">Budget Allocation by Category</h4>
            
            <div className="space-y-6">
              {allocation.map((item, i) => (
                <div key={i} className="relative">
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <div className="font-medium text-white/90">{item.category}</div>
                      <div className="text-xs text-white/50 mt-1">{item.desc}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-white">{item.amount}</div>
                      <div className="text-xs font-mono text-red-400">{item.share}</div>
                    </div>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color}`} style={{ width: item.share }} />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-xs font-mono text-white/40 uppercase mb-4">Monthly Distribution (Weighted toward launch)</div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                <div className="border border-white/5 bg-white/[0.03] p-4">
                  <div className="mb-2 flex items-baseline justify-between gap-2">
                    <div className="text-sm font-medium">Month 1</div>
                    <div className="shrink-0 font-mono text-sm text-red-400">Rs. 2.5 Cr</div>
                  </div>
                  <div className="text-xs text-white/60">Focus: Grand launch; ATL intensive; campaign setup</div>
                </div>
                <div className="border border-white/5 bg-white/[0.03] p-4">
                  <div className="mb-2 flex items-baseline justify-between gap-2">
                    <div className="text-sm font-medium">Month 2–3</div>
                    <div className="shrink-0 font-mono text-sm text-red-400">Rs. 2.0 Cr/mo</div>
                  </div>
                  <div className="text-xs text-white/60">Focus: Sustain awareness; scale digital; test drives</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

