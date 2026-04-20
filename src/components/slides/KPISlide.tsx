import { motion } from "framer-motion";

const awareness = [
  { metric: "15% Unaided Awareness", target: "15% of segment", baseline: "Baseline: 2%" },
  { metric: "40% Aided Awareness", target: "40% of segment", baseline: "Baseline: 8%" },
  { metric: "60% Category Awareness", target: "Premium EV in Nepal", baseline: "Baseline: 35%" },
  { metric: "35% Website Traffic", target: "50,000+ monthly", baseline: "35% non-branded search" },
  { metric: "8% Social Reach", target: "2M+ impressions", baseline: "8%+ engagement rate" }
];

const consideration = [
  { metric: "5,000 Lead Volume", desc: "Qualified leads (email + phone)" },
  { metric: "2,000+ Test Drives", desc: "Scheduled appointments" },
  { metric: "10–12% Web Conv.", desc: "Visitor to lead" },
  { metric: "25%+ Email Open", desc: "Nurturing campaigns" },
  { metric: "60% Content Eng.", desc: "Video completion rate" }
];

const purchase = [
  { metric: "600–800 Units", desc: "Sales volume across three models" },
  { metric: "15–20% Conversion", desc: "Lead-to-Sale conversion rate" },
  { metric: "Rs. 2.0–2.5L CAC", desc: "Customer Acquisition Cost per vehicle" },
  { metric: "50–60% TD Conv.", desc: "Booked drive to purchase" },
  { metric: "Rs. 34L Avg Deal", desc: "Weighted across three models" }
];

const loyalty = [
  { metric: "55% NPS", desc: "Within first 6 months of ownership" },
  { metric: "85% CSAT", desc: "Post-delivery survey" },
  { metric: "25% Referral Rate", desc: "Customers refer within 6 months" },
  { metric: "80% Repeat Service", desc: "Within warranty period" },
  { metric: "60% Event Attend.", desc: "Customer base attending events" }
];

export default function KPISlide() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mb-3 sm:mb-4">
        <h2 className="mb-3 text-xs font-mono uppercase tracking-widest text-white/50 sm:mb-4 sm:text-sm">19 / Measurement</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Key Performance Indicators & Success Metrics</h3>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="border border-white/10 bg-white/[0.02] p-4 sm:p-6"
        >
          <div className="text-xs font-mono text-red-500 uppercase tracking-widest mb-4">Target Month 3</div>
          <h4 className="text-xl font-medium mb-6">Awareness</h4>
          <div className="space-y-4">
            {awareness.map((item, i) => (
              <div key={i} className="pb-3 border-b border-white/5 last:border-0">
                <div className="text-sm font-medium text-white mb-1">{item.metric}</div>
                <div className="flex justify-between text-xs text-white/50">
                  <span>{item.target}</span>
                  <span className="font-mono text-white/30">{item.baseline}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border border-white/10 bg-white/[0.02] p-4 sm:p-6"
        >
          <div className="text-xs font-mono text-red-500 uppercase tracking-widest mb-4">Target Month 6</div>
          <h4 className="text-xl font-medium mb-6">Consideration</h4>
          <div className="space-y-4">
            {consideration.map((item, i) => (
              <div key={i} className="pb-3 border-b border-white/5 last:border-0">
                <div className="text-sm font-medium text-white mb-1">{item.metric}</div>
                <div className="text-xs text-white/50">{item.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative overflow-hidden border border-red-500/30 bg-gradient-to-b from-red-900/10 to-transparent p-4 sm:p-6"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-red-500" />
          <div className="text-xs font-mono text-red-400 uppercase tracking-widest mb-4">Target Month 12</div>
          <h4 className="text-xl font-medium mb-6">Purchase</h4>
          <div className="space-y-4">
            {purchase.map((item, i) => (
              <div key={i} className="pb-3 border-b border-white/5 last:border-0">
                <div className="text-sm font-medium text-white mb-1">{item.metric}</div>
                <div className="text-xs text-white/60">{item.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="border border-white/10 bg-white/[0.02] p-4 sm:p-6"
        >
          <div className="text-xs font-mono text-red-500 uppercase tracking-widest mb-4">Target Month 12</div>
          <h4 className="text-xl font-medium mb-6">Loyalty & Advocacy</h4>
          <div className="space-y-4">
            {loyalty.map((item, i) => (
              <div key={i} className="pb-3 border-b border-white/5 last:border-0">
                <div className="text-sm font-medium text-white mb-1">{item.metric}</div>
                <div className="text-xs text-white/50">{item.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

