import { motion } from "framer-motion";

const roles = [
  { role: "Marketing Lead", focus: "Campaign orchestration • Brand messaging • Creative oversight • ROI management", acc: "Month goal achievement; lead quality; brand equity" },
  { role: "Digital Manager", focus: "Website optimization • SEO/SEM • Social media • Email marketing • Analytics", acc: "Digital conversion; cost per lead; engagement metrics" },
  { role: "Sales Lead", focus: "Retail staffing • Test drive operations • Pipeline management • Customer conversion", acc: "Sales targets; conversion rate; customer satisfaction" },
  { role: "Brand Manager", focus: "Positioning consistency • Influencer relations • Content strategy • PR", acc: "Brand awareness; sentiment; media coverage" },
  { role: "Product Manager", focus: "Product positioning • Spec communication • Competitive comparison", acc: "Product inquiry rate; feature understanding; satisfaction" },
  { role: "Finance Partner", focus: "Budget tracking • ROI analysis • Cost optimization • Forecast management", acc: "Budget efficiency; profitability; spend accountability" }
];

export default function GovernanceSlide() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mb-3 sm:mb-4 md:mb-5">
        <h2 className="mb-3 text-xs font-mono uppercase tracking-widest text-white/50 sm:mb-4 sm:text-sm">23 / Operations</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Internal Coordination & Governance Structure</h3>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="min-w-0 lg:col-span-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="h-full"
          >
            <h4 className="text-xl font-medium mb-6">Cross-functional Team Roles & Responsibilities</h4>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {roles.map((role, i) => (
                <div key={i} className="p-5 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                  <div className="text-sm font-mono text-red-500 uppercase tracking-widest mb-2">{role.role}</div>
                  <div className="text-xs text-white/70 leading-relaxed mb-4">
                    {role.focus.split(' • ').map((f, j) => (
                      <div key={j} className="flex items-center gap-2 mb-1">
                        <div className="w-1 h-1 bg-white/30 rounded-full" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className="pt-3 border-t border-white/10">
                    <div className="text-[10px] font-mono text-white/40 uppercase mb-1">Accountability</div>
                    <div className="text-xs font-medium text-white/90">{role.acc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="space-y-6 lg:col-span-4">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 border border-white/10 bg-gradient-to-bl from-red-900/10 to-transparent"
          >
            <h4 className="text-lg font-medium mb-4">Weekly Sync Meetings</h4>
            <div className="text-xs font-mono text-red-400 uppercase mb-4">Every Monday, 1 hour</div>
            
            <div className="space-y-4">
              <div>
                <div className="text-[10px] font-mono text-white/40 uppercase mb-1">Attendees</div>
                <div className="text-xs text-white/80">All function heads + brand agency partners</div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-white/40 uppercase mb-1">Outcomes</div>
                <div className="text-xs text-white/80">Decisions documented • Action items assigned • Next week priorities clarified</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-6 border border-white/10 bg-white/[0.02]"
          >
            <h4 className="text-lg font-medium mb-4">Bi-weekly Campaign Review</h4>
            <div className="text-xs font-mono text-red-400 uppercase mb-4">Every 2 weeks, 2 hours</div>
            
            <div className="space-y-4">
              <div>
                <div className="text-[10px] font-mono text-white/40 uppercase mb-1">Attendees</div>
                <div className="text-xs text-white/80">Marketing team + external agency partners + select leadership</div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-white/40 uppercase mb-1">Outcomes</div>
                <div className="text-xs text-white/80">Campaign adjustments • Budget reallocation • New testing initiatives • Learning documentation</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

