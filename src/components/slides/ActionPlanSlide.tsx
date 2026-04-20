import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const phases = [
  {
    title: "Immediate Actions",
    timeline: "Month 1–2",
    actions: [
      "Finalize creative concept and media partnerships",
      "Establish experiential center locations",
      "Secure influencer commitments"
    ],
    kpi: "Campaign materials approved; 5+ centers operational; 10+ influencers contracted",
    owner: "Marketing + Brand Teams"
  },
  {
    title: "Mid-term Actions",
    timeline: "Month 3–6",
    actions: [
      "Launch integrated ATL campaign",
      "Operationalize retail experiences",
      "Activate digital customer journey"
    ],
    kpi: "15M+ campaign reach; 50K+ test drives; 200+ qualified leads",
    owner: "Sales + Operations"
  },
  {
    title: "Long-term Actions",
    timeline: "Month 7–12",
    actions: [
      "Scale successful channels",
      "Optimize conversion funnel",
      "Establish retention program"
    ],
    kpi: "500+ unit sales; 60%+ conversion rate; NPS >50",
    owner: "Customer Success + Analytics"
  }
];

export default function ActionPlanSlide() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mb-3 sm:mb-4 md:mb-5">
        <h2 className="mb-2 text-xs font-mono uppercase tracking-widest text-white/50 sm:text-sm">02 / Execution</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Strategic Imperatives & Action Plan</h3>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="flex h-full flex-col"
          >
            <div className="mb-4 border-b border-white/20 pb-4">
              <div className="mb-1.5 font-mono text-sm tracking-widest text-red-500">{phase.timeline}</div>
              <h4 className="text-xl font-medium sm:text-2xl">{phase.title}</h4>
            </div>
            
            <div className="flex-grow space-y-4">
              <ul className="space-y-3">
                {phase.actions.map((action, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <ChevronRight className="mt-0.5 size-3 shrink-0 text-white/35" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
              
              <div className="rounded-sm border border-white/5 bg-white/[0.03] p-4">
                <div className="mb-1.5 text-xs font-mono uppercase text-white/40">Target KPIs</div>
                <div className="text-sm font-medium leading-relaxed text-white/90">{phase.kpi}</div>
              </div>
            </div>
            
            <div className="mt-5 border-t border-white/10 pt-4 text-xs font-mono uppercase text-white/40">
              Resp: {phase.owner}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

