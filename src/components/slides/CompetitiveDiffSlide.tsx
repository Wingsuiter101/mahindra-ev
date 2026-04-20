import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const differentiators = [
  { label: "Technology Integration",  value: "Level 2 autonomous + OTA updates",           advantage: "6–12 months ahead"              },
  { label: "Design Language",         value: "Premium, bold, distinctly modern",            advantage: "vs conservative competitors"    },
  { label: "Performance Metrics",     value: "Fastest acceleration in class",               advantage: "0.5–1 sec faster"               },
  { label: "Safety Credentials",      value: "ARAI 5-star rating; 7+ airbags",             advantage: "Best-in-class safety"           },
  { label: "After-Sales Ecosystem",   value: "Dedicated EV centers; 24/7 roadside assist", advantage: "Peace of mind"                  },
  { label: "Ownership Experience",    value: "Exclusive club, curated events, financing",   advantage: "Premium lifestyle"              },
  { label: "Value Proposition",       value: "Best warranty + service packages",            advantage: "3-year / unlimited km advantage"},
];

export default function CompetitiveDiffSlide() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mb-3 sm:mb-4 md:mb-5">
        <h2 className="mb-3 text-xs font-mono uppercase tracking-widest text-white/50 sm:mb-4 sm:text-sm">08 / Advantage</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Competitive Differentiation Strategy</h3>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Left context block */}
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative overflow-hidden border border-white/10 bg-linear-to-b from-white/5 to-transparent p-5 sm:p-6"
          >
            <div className="pointer-events-none absolute right-0 top-0 -z-10 h-32 w-32 bg-red-600/20 blur-3xl" />
            <h4 className="mb-4 text-xl font-medium">The Mahindra Edge</h4>
            <p className="mb-6 leading-relaxed text-sm text-white/70">
              Our strategy relies on out-innovating competitors across seven key dimensions, establishing a premium positioning that justifies our price point through tangible, provable superiority.
            </p>
            <div className="h-1 w-12 bg-red-600" />
          </motion.div>
        </div>

        {/* Table */}
        <div className="min-w-0 lg:col-span-8">
          {/* ── Mobile: stacked cards ── */}
          <div className="space-y-2 sm:hidden">
            {differentiators.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className="border border-white/5 bg-white/[0.02] p-3"
              >
                <div className="mb-1 flex items-center gap-2">
                  <ChevronRight className="size-3 shrink-0 text-red-500/75" />
                  <span className="text-xs font-medium text-white/90">{row.label}</span>
                </div>
                <div className="mb-0.5 pl-5 text-[11px] text-white/60">{row.value}</div>
                <div className="pl-5 font-mono text-[11px] text-red-400/90">{row.advantage}</div>
              </motion.div>
            ))}
          </div>

          {/* ── Desktop: grid rows ── */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-12 gap-4 border-b border-white/20 pb-3 text-xs font-mono uppercase tracking-wider text-white/40">
              <div className="col-span-4">Differentiation Lever</div>
              <div className="col-span-5">Strategic Execution</div>
              <div className="col-span-3">Market Advantage</div>
            </div>
            <div className="mt-3 space-y-1">
              {differentiators.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.07 * i }}
                  className="grid grid-cols-12 items-center gap-4 border-b border-white/5 py-3 transition-colors hover:bg-white/[0.02]"
                >
                  <div className="col-span-4 flex items-center gap-2 font-medium text-white/90">
                    <ChevronRight className="size-3.5 shrink-0 text-red-500/75" />
                    <span className="text-sm">{row.label}</span>
                  </div>
                  <div className="col-span-5 text-sm text-white/70">{row.value}</div>
                  <div className="col-span-3 font-mono text-sm text-red-400/90">{row.advantage}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
