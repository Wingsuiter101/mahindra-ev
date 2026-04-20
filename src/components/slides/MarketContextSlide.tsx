import { motion } from "framer-motion";

const dataPoints = [
  { label: "EV Market Size",       current: "Growing from base",          opp: "Premium segment emerging (5–10% of EV sales)" },
  { label: "Premium SUV Demand",   current: "Limited local options",       opp: "High aspirational demand among upper-middle class" },
  { label: "Target Income Level",  current: "Rs. 15L+ annual",            opp: "2.5M+ households; 15% growth CAGR" },
  { label: "Government Support",   current: "Import incentives active",    opp: "Tax benefits for EVs; infrastructure developing" },
  { label: "Competitor Presence",  current: "2–3 established players",    opp: "Fragmented market; differentiation possible" },
  { label: "Infrastructure",       current: "Charging network expanding",  opp: "100+ public chargers; home charging adoption 40%+" },
];

export default function MarketContextSlide() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mb-3 sm:mb-4 md:mb-5">
        <h2 className="mb-3 text-xs font-mono uppercase tracking-widest text-white/50 sm:mb-4 sm:text-sm">03 / Landscape</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Nepal EV Market Context & Opportunity</h3>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-12 xl:gap-8">
        {/* Summary card */}
        <div className="xl:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="border border-white/10 bg-linear-to-br from-white/5 to-transparent p-5 sm:p-6"
          >
            <h4 className="mb-3 text-lg font-medium sm:text-xl">Market Analysis</h4>
            <p className="mb-5 text-sm leading-relaxed text-white/70">
              Nepal's premium automotive market shows strong appetite for aspirational products. The EV transition creates a first-mover premium positioning advantage.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
              <div>
                <div className="text-2xl font-bold text-white sm:text-3xl">3–5k</div>
                <div className="text-[10px] uppercase text-white/50 sm:text-xs">Premium EV Units/Yr</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-500 sm:text-3xl">25–30%</div>
                <div className="text-[10px] uppercase text-white/50 sm:text-xs">Est. YoY Growth</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Data table */}
        <div className="min-w-0 xl:col-span-8">
          {/* ── Mobile: stacked cards ── */}
          <div className="space-y-2 sm:hidden">
            {dataPoints.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className="border border-white/5 bg-white/[0.02] p-3"
              >
                <div className="mb-1.5 text-xs font-medium text-white/90">{row.label}</div>
                <div className="mb-1 text-[11px] text-white/50">{row.current}</div>
                <div className="text-[11px] text-red-400/90">{row.opp}</div>
              </motion.div>
            ))}
          </div>

          {/* ── Desktop: grid rows ── */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-12 gap-4 border-b border-white/20 pb-3 text-xs font-mono uppercase tracking-wider text-white/40">
              <div className="col-span-3">Dimension</div>
              <div className="col-span-4">Current State</div>
              <div className="col-span-5">Opportunity</div>
            </div>
            <div className="mt-3 space-y-1">
              {dataPoints.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i }}
                  className="grid grid-cols-12 gap-4 border-b border-white/5 py-3 transition-colors hover:bg-white/[0.02]"
                >
                  <div className="col-span-3 text-sm font-medium text-white/90">{row.label}</div>
                  <div className="col-span-4 text-sm text-white/60">{row.current}</div>
                  <div className="col-span-5 text-sm text-red-400/90">{row.opp}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
