import { motion } from "framer-motion";

const touchpoints = [
  { step: "1", action: "ATL triggers interest → search → website visit", phase: "Awareness" },
  { step: "2", action: "Product exploration → feature comparison → spec deep-dive", phase: "Consideration" },
  { step: "3", action: "Social proof → influencer reviews → testimonials → lead capture", phase: "Validation" },
  { step: "4", action: "Test drive booking → center visit → personalized consultation", phase: "Experience" },
  { step: "5", action: "Financing exploration → deal evaluation → purchase decision", phase: "Decision" }
];

const sequences = [
  { name: "Sequence 1 (Awareness)", timing: "Week 1–2", content: "Educational content, brand story, category overview" },
  { name: "Sequence 2 (Consideration)", timing: "Week 3–6", content: "Detailed specs, performance proof, customer stories" },
  { name: "Sequence 3 (Decision)", timing: "Week 7–12", content: "Financing options, ownership benefits, exclusive offers" },
  { name: "Sequence 4 (Post-Purchase)", timing: "Ongoing", content: "Onboarding, community invitations, referral incentives" }
];

export default function LeadFunnelSlide() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mb-3 sm:mb-4 md:mb-5">
        <h2 className="mb-3 text-xs font-mono uppercase tracking-widest text-white/50 sm:mb-4 sm:text-sm">11 / Funnel</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Digital Customer Journey & Lead Funnel</h3>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="border border-white/15 bg-black/35 p-5 backdrop-blur-xl sm:p-8"
        >
          <h4 className="text-xl font-medium mb-8">Awareness to Lead Conversion Flow</h4>
          
          <div className="space-y-6 relative">
            <div className="absolute left-4 top-4 bottom-4 w-px bg-white/10" />
            
            {touchpoints.map((tp, i) => (
              <div key={i} className="flex gap-6 relative z-10">
                <div className="w-8 h-8 rounded-full bg-black border border-red-500 flex items-center justify-center text-xs font-mono shrink-0 mt-1">
                  {tp.step}
                </div>
                <div>
                  <div className="text-xs font-mono text-red-400 uppercase mb-1">{tp.phase}</div>
                  <div className="text-sm text-white/80">{tp.action}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="relative border border-white/15 bg-black/50 p-5 backdrop-blur-xl sm:p-8 before:pointer-events-none before:absolute before:inset-0 before:z-0 before:bg-linear-to-br before:from-black/45 before:via-indigo-950/35 before:to-black/55"
        >
          <div className="relative z-10">
          <h4 className="text-xl font-medium mb-8">Lead Nurturing Sequences (3–6 months)</h4>
          
          <div className="space-y-6">
            {sequences.map((seq, i) => (
              <div key={i} className="rounded-sm border border-white/10 bg-black/35 p-5 backdrop-blur-sm transition-colors hover:bg-black/45">
                <div className="flex justify-between items-center mb-3">
                  <div className="font-medium text-white/90">{seq.name}</div>
                  <div className="text-xs font-mono text-red-500">{seq.timing}</div>
                </div>
                <div className="text-sm text-white/60 leading-relaxed">{seq.content}</div>
              </div>
            ))}
          </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

