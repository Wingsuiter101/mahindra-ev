import { motion } from "framer-motion";

const criteria = [
  { label: "Income Level",       weight: "30%", low: "<15L",            med: "15–25L",          high: ">25L"                },
  { label: "Purchase Timeline",  weight: "25%", low: "6+ months",       med: "3–6 months",      high: "0–3 months"          },
  { label: "Digital Engagement", weight: "20%", low: "1–2 touchpoints", med: "3–5 touchpoints", high: "6+ touchpoints"      },
  { label: "Test Drive Interest",weight: "15%", low: "No interest",     med: "Inquiry submitted",high: "Booked appointment" },
  { label: "Product Preference", weight: "10%", low: "General interest",med: "Specific model",  high: "Configuration"       },
];

const outcomes = [
  { type: "Hot Leads",  score: "80+",   actions: ["Immediate sales team contact", "Prioritized follow-up", "Personalized consultation"],                         color: "border-red-500 text-red-400" },
  { type: "Warm Leads", score: "50–79", actions: ["Nurturing email sequences", "Retargeting", "Event invitations", "Monthly check-ins"],                         color: "border-indigo-500 text-indigo-400" },
  { type: "Cold Leads", score: "<50",   actions: ["Content nurturing", "Seasonal re-engagement", "Alumni targeting"],                                             color: "border-white/20 text-white/55" },
];

export default function LeadScoringSlide() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mb-3 sm:mb-4 md:mb-5">
        <h2 className="mb-3 text-xs font-mono uppercase tracking-widest text-white/50 sm:mb-4 sm:text-sm">18 / Qualification</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Lead Scoring & Qualification Framework</h3>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Scoring criteria */}
        <div className="min-w-0 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-4 text-lg font-medium sm:text-xl">Scoring Criteria (Weighted)</h4>

            {/* ── Mobile: stacked cards ── */}
            <div className="space-y-2 sm:hidden">
              {criteria.map((row, i) => (
                <div key={i} className="border border-white/5 bg-white/[0.02] p-3">
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-xs font-medium text-white/90">{row.label}</span>
                    <span className="font-mono text-xs text-red-400">{row.weight}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-[10px]">
                    <div><span className="text-white/35">Low: </span><span className="text-white/60">{row.low}</span></div>
                    <div><span className="text-white/35">Med: </span><span className="text-white/70">{row.med}</span></div>
                    <div><span className="text-white/35">High: </span><span className="font-medium text-white/90">{row.high}</span></div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Desktop: grid rows ── */}
            <div className="hidden sm:block">
              <div className="grid grid-cols-12 gap-3 border-b border-white/20 pb-3 text-xs font-mono uppercase tracking-wider text-white/40">
                <div className="col-span-3">Criteria</div>
                <div className="col-span-2 text-red-500">Weight</div>
                <div className="col-span-2">Low</div>
                <div className="col-span-2">Medium</div>
                <div className="col-span-3">High</div>
              </div>
              <div className="mt-3 space-y-1">
                {criteria.map((row, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * i }}
                    className="grid grid-cols-12 items-center gap-3 border-b border-white/5 py-3 transition-colors hover:bg-white/[0.02]"
                  >
                    <div className="col-span-3 text-sm font-medium text-white/90">{row.label}</div>
                    <div className="col-span-2 font-mono text-sm text-red-400">{row.weight}</div>
                    <div className="col-span-2 text-xs text-white/50">{row.low}</div>
                    <div className="col-span-2 text-xs text-white/70">{row.med}</div>
                    <div className="col-span-3 text-xs font-medium text-white">{row.high}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Outcome cards */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="h-full border border-white/10 bg-linear-to-bl from-white/5 to-transparent p-4 sm:p-6"
          >
            <h4 className="mb-4 text-lg font-medium sm:mb-6 sm:text-xl">Qualification Outcomes</h4>
            <div className="space-y-4">
              {outcomes.map((outcome, i) => (
                <div key={i} className={`border-l-4 bg-black/30 p-3 sm:p-4 ${outcome.color}`}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium text-white">{outcome.type}</span>
                    <span className="rounded-sm bg-white/10 px-2 py-0.5 font-mono text-xs">{outcome.score}</span>
                  </div>
                  <div className="space-y-0.5">
                    {outcome.actions.map((action, j) => (
                      <div key={j} className="text-xs text-white/65">· {action}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
