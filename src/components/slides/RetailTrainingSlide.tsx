import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const modules = [
  { name: "Brand Philosophy & Positioning", dur: "2 days" },
  { name: "Product Knowledge", dur: "4 days" },
  { name: "Technology Deep-Dive", dur: "3 days" },
  { name: "Sales Skills & Customer Psychology", dur: "5 days" },
  { name: "Test Drive Excellence", dur: "3 days" },
  { name: "After-Sales & Community", dur: "2 days" }
];

const metrics = [
  { category: "Sales Metrics", items: "Target achievement, Conversion rate, CSAT, Test drive booking rate" },
  { category: "Service Metrics", items: "Feedback score, Resolution time, Repeat business, NPS" },
  { category: "Behavioral Metrics", items: "Product knowledge tests, Mystery shopper, Attendance, Training completion" }
];

export default function RetailTrainingSlide() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mb-3 sm:mb-4 md:mb-5">
        <h2 className="mb-3 text-xs font-mono uppercase tracking-widest text-white/50 sm:mb-4 sm:text-sm">16 / Excellence</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Retail Staff Training & Excellence Program</h3>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:gap-8 lg:grid-cols-2 lg:gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="mb-6 flex flex-col gap-2 border-b border-white/10 pb-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <h4 className="text-lg font-medium sm:text-xl">Comprehensive Onboarding</h4>
            <div className="font-mono text-xs uppercase tracking-widest text-red-500 sm:text-sm">3-Week Program</div>
          </div>
          
          <div className="space-y-4">
            {modules.map((mod, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="text-xs font-mono text-white/30 w-6">M{i+1}</div>
                  <div className="text-sm font-medium text-white/90">{mod.name}</div>
                </div>
                <div className="text-xs font-mono text-white/50">{mod.dur}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="border border-white/10 bg-gradient-to-br from-indigo-900/10 to-transparent p-5 sm:p-8"
          >
            <h4 className="text-xl font-medium mb-6">Performance Management (Quarterly)</h4>
            
            <div className="space-y-6">
              {metrics.map((metric, i) => (
                <div key={i}>
                  <div className="text-xs font-mono text-red-400 uppercase mb-2">{metric.category}</div>
                  <div className="text-sm text-white/70 leading-relaxed">{metric.items}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-6 border border-white/10 bg-white/[0.02]"
          >
            <h4 className="text-sm font-mono text-white/50 uppercase tracking-widest mb-4">Incentive Structure</h4>
            <div className="flex flex-col gap-3 text-sm text-white/80 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-4">
              <div className="flex items-center gap-2"><ChevronRight className="mt-0.5 size-3.5 shrink-0 text-red-500/75" /> Base + Commission</div>
              <div className="flex items-center gap-2"><ChevronRight className="mt-0.5 size-3.5 shrink-0 text-red-500/75" /> Quarterly Bonus</div>
              <div className="flex items-center gap-2"><ChevronRight className="mt-0.5 size-3.5 shrink-0 text-red-500/75" /> Recognition Awards</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

