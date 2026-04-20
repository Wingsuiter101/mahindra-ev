import { motion } from "framer-motion";

const phases = [
  {
    phase: "Pre-Launch",
    timing: "Week -4 to Week 0",
    focus: "Foundation Building",
    actions: "Finalize creative assets • Secure media • Train retail staff • Soft launch to influencers • Official product reveal",
    exit: "70% media coverage goal achieved • 5,000+ awareness reach • Retail staff fully trained"
  },
  {
    phase: "Rapid Scale",
    timing: "Week 1 to Month 3",
    focus: "Momentum Building",
    actions: "ATL campaign optimization • Influencer content seeding • Community events launched • Mid-campaign assessment",
    exit: "40% unaided awareness • 3,000+ qualified leads • 500+ test drives booked • 50+ units sold"
  },
  {
    phase: "Growth",
    timing: "Month 4–6",
    focus: "Scaling Success",
    actions: "Influencer second wave • Regional roadshow expansion • Loyalty program launch • Half-year business review",
    exit: "55% aided awareness • 5,000+ total leads • 1,200+ test drives • 300+ units sold"
  },
  {
    phase: "Consolidation",
    timing: "Month 7–12",
    focus: "Market Leadership",
    actions: "Shift from awareness to retention • Referral program optimization • Year-end push • Testimonial harvesting",
    exit: "600–800 units sold • 20% market share in premium EV segment • 55+ NPS"
  }
];

export default function LaunchPhasesSlide() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mb-3 sm:mb-4 md:mb-5">
        <h2 className="mb-3 text-xs font-mono uppercase tracking-widest text-white/50 sm:mb-4 sm:text-sm">21 / Timeline</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Launch Phase Structure & Critical Milestones</h3>
      </div>

      <div className="space-y-6">
        {phases.map((phase, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="group grid grid-cols-1 gap-6 border border-white/10 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04] sm:p-6 lg:grid-cols-12 lg:items-center"
          >
            <div className="border-white/10 pb-4 lg:col-span-3 lg:border-r lg:pb-0 lg:pr-6">
              <div className="text-xs font-mono text-red-500 uppercase tracking-widest mb-1">{phase.timing}</div>
              <h4 className="text-xl font-medium text-white group-hover:text-red-400 transition-colors">{phase.phase}</h4>
              <div className="text-sm text-white/50 mt-1">{phase.focus}</div>
            </div>
            
            <div className="border-white/10 py-4 lg:col-span-5 lg:border-0 lg:px-6 lg:py-0">
              <div className="text-xs font-mono text-white/40 uppercase mb-2">Key Actions</div>
              <div className="text-sm text-white/80 leading-relaxed">
                {phase.actions.split(' • ').map((action, j) => (
                  <span key={j} className="inline-block mr-3 mb-1">
                    <span className="text-red-500 mr-1">•</span>{action}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-4 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
              <div className="text-xs font-mono text-white/40 uppercase mb-2">Exit Criteria / KPIs</div>
              <ul className="space-y-1">
                {phase.exit.split(' • ').map((crit, j) => (
                  <li key={j} className="text-sm font-medium text-white/90 flex items-start gap-2">
                    <div className="w-1 h-1 bg-white/30 rounded-full mt-2 shrink-0" />
                    <span>{crit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

