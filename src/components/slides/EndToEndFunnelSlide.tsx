import { motion } from "framer-motion";

const stages = [
  {
    stage: "Awareness",
    timing: "Month 1–3",
    audience: "General target segment; income Rs. 15L+; age 28–50",
    channels: "TV, OOH, print, organic social, search",
    volume: "500,000+ impressions; 5–8% recall",
    goal: "40,000–50,000 website visits",
    message: "“What Moves You?” emotional hook; category intro; brand differentiation",
    panel:
      "border-white/12 bg-gradient-to-b from-neutral-950/92 via-black/88 to-black/90 backdrop-blur-md",
  },
  {
    stage: "Consideration",
    timing: "Month 2–6",
    audience: "Website visitors, search leads, social engagers",
    channels: "Product videos, spec sheets, testimonials, influencer reviews",
    volume: "40,000–50,000 visitors; 25–30% active engagement",
    goal: "3,000–5,000 qualified leads",
    message: "Performance proof, competitive differentiation, financing options",
    panel:
      "border-white/12 bg-gradient-to-b from-neutral-950/92 via-black/88 to-black/90 backdrop-blur-md",
  },
  {
    stage: "Decision",
    timing: "Month 4–9",
    audience: "Qualified leads, test drive attendees, showroom visitors",
    channels: "Personalized email, sales consultation, test drive, financing",
    volume: "3,000–5,000 leads; 60–70% test drive conversion",
    goal: "1,200–1,800 sales-ready prospects",
    message: "Customization, finance plans, exclusive launch offers",
    panel:
      "border-white/12 bg-gradient-to-b from-neutral-950/90 via-red-950/28 to-black/90 backdrop-blur-md",
  },
  {
    stage: "Purchase & Advocacy",
    timing: "Month 6–12",
    audience: "Purchase decision makers; recent buyers",
    channels: "Sales teams, delivery experience, onboarding, community events",
    volume: "1,200–1,800 prospects; 40–50% conversion to sales",
    goal: "480–900 actual sales; 60% net promoter advocacy",
    message: "Delivery joy, ownership welcome, community invitation",
    panel:
      "border-red-500/25 bg-gradient-to-b from-red-950/55 via-neutral-950/92 to-black/92 backdrop-blur-md",
  },
];

export default function EndToEndFunnelSlide() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mb-3 sm:mb-4 md:mb-5">
        <h2 className="mb-3 text-xs font-mono uppercase tracking-widest text-white/50 sm:mb-4 sm:text-sm">17 / Architecture</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">End-to-End Lead Funnel Architecture</h3>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:gap-6">
        {stages.map((stage, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className={`flex h-full flex-col p-4 sm:p-6 ${stage.panel}`}
          >
            <div className="flex justify-between items-start mb-6 pb-4 border-b border-white/10">
              <div>
                <div className="text-xs font-mono text-red-500 tracking-widest uppercase mb-1">Stage {i+1}</div>
                <h4 className="text-2xl font-medium">{stage.stage}</h4>
              </div>
              <div className="text-xs font-mono text-white/40 mt-1">{stage.timing}</div>
            </div>
            
            <div className="grow space-y-5">
              <div>
                <div className="text-[10px] font-mono text-white/40 uppercase mb-1">Audience</div>
                <div className="text-sm text-white/80 leading-snug">{stage.audience}</div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-white/40 uppercase mb-1">Channels</div>
                <div className="text-sm text-white/80 leading-snug">{stage.channels}</div>
              </div>
              <div className="rounded-sm border border-white/10 bg-black/60 p-3 backdrop-blur-sm">
                <div className="text-[10px] font-mono text-white/40 uppercase mb-1">Expected Volume</div>
                <div className="text-sm font-medium text-white/90">{stage.volume}</div>
              </div>
              <div className="rounded-sm border border-white/12 bg-white/12 p-3 backdrop-blur-sm">
                <div className="text-[10px] font-mono text-red-400 uppercase mb-1">Conversion Goal</div>
                <div className="text-sm font-bold text-white">{stage.goal}</div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="text-[10px] font-mono text-white/40 uppercase mb-1">Key Message</div>
              <div className="text-xs text-white/70 italic leading-relaxed border-l-2 border-red-500 pl-2">{stage.message}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

