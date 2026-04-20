import { motion } from "framer-motion";

const stages = [
  {
    phase: "Awareness",
    timeline: "Months 1–2",
    channels: "ATL media (TV, OOH), digital platforms, influencer social content",
    messaging: "Emotional hook 'What moves you?' + category education",
    metric: "Target reach: 70% of defined segment",
    color: "from-white/5 to-transparent"
  },
  {
    phase: "Consideration",
    timeline: "Months 3–6",
    channels: "Experiential centers, test drives, detailed demos, peer reviews",
    messaging: "Performance proof 'What moves it?' + comparative differentiation",
    metric: "Target conversion: 20% of aware audience",
    color: "from-white/10 to-transparent"
  },
  {
    phase: "Decision",
    timeline: "Months 6–12",
    channels: "Retail experience, personalized consultations, financing, community",
    messaging: "Value justification, ownership benefits, after-sales excellence",
    metric: "Target conversion: 40% of consideration",
    color: "from-red-900/20 to-transparent"
  }
];

export default function ConsumerJourneySlide() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mb-3 sm:mb-4 md:mb-5">
        <h2 className="mb-2 text-xs font-mono uppercase tracking-widest text-white/50 sm:text-sm">05 / Journey</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Consumer Journey & Touchpoints</h3>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-6 hidden h-px w-full bg-white/10 lg:block" />
        
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
          {stages.map((stage, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="relative pt-6"
            >
              <div className="absolute left-8 top-0 h-3 w-3 -translate-y-1/2 rounded-full bg-red-600 ring-4 ring-black" />
              
              <div className={`h-full border border-white/10 bg-gradient-to-b p-4 sm:p-5 ${stage.color}`}>
                <div className="mb-4 flex items-end justify-between border-b border-white/10 pb-3">
                  <h4 className="text-xl font-medium">{stage.phase}</h4>
                  <span className="text-xs font-mono tracking-widest text-red-500">{stage.timeline}</span>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="mb-1 text-xs font-mono uppercase text-white/40">Primary Channels</div>
                    <div className="text-sm leading-relaxed text-white/80">{stage.channels}</div>
                  </div>
                  <div>
                    <div className="mb-1 text-xs font-mono uppercase text-white/40">Key Messaging</div>
                    <div className="border-l-2 border-red-500 pl-3 text-sm italic leading-relaxed text-white/80">{stage.messaging}</div>
                  </div>
                  <div className="mt-3 border-t border-white/10 pt-3">
                    <div className="mb-1 text-xs font-mono uppercase text-white/40">Success Metric</div>
                    <div className="text-sm font-medium text-white">{stage.metric}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

