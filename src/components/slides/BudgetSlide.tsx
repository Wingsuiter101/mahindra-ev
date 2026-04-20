"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

const allocation = [
  { category: "ATL Media",              amount: "Rs. 6.75 Cr", share: 45, desc: "TV, OOH, print, radio — media buying, production, placement", color: "bg-red-600"    },
  { category: "Digital Marketing",      amount: "Rs. 6.0 Cr",  share: 40, desc: "Search, social, programmatic, email, website, analytics",      color: "bg-indigo-600" },
  { category: "Influencer & Partners",  amount: "Rs. 1.5 Cr",  share: 10, desc: "Influencer fees, partnership activation, events",               color: "bg-purple-500" },
  { category: "Retail & Experiential",  amount: "Rs. 0.75 Cr", share:  5, desc: "Center ops, training, events, activation materials",            color: "bg-slate-500"  },
];

const monthly = [
  { label: "Month 1",   amount: "Rs. 2.5 Cr",   note: "Grand launch · ATL intensive · campaign setup"        },
  { label: "Month 2–3", amount: "Rs. 2.0 Cr/mo", note: "Sustain awareness · scale digital · test drives"      },
  { label: "Month 4–6", amount: "Rs. 1.5 Cr/mo", note: "Optimise channels · activations · influencer content" },
  { label: "Month 7–12",amount: "Rs. 0.9 Cr/mo", note: "Retention · community · referral programme"           },
];

// Animated counting number
function CountUp({ to, suffix = "", delay = 0 }: { to: number; suffix?: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const val = useMotionValue(0);
  const rounded = useTransform(val, (v) => `${Math.round(v)}${suffix}`);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(val, to, { duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] });
    return ctrl.stop;
  }, [inView, val, to, delay]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

// Animated progress bar
function Bar({ pct, color, delay }: { pct: number; color: string; delay: number }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
      <motion.div
        className={`h-full rounded-full ${color}`}
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ delay, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}

export default function BudgetSlide() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-3 sm:mb-4 md:mb-5"
      >
        <h2 className="mb-1 text-xs font-mono uppercase tracking-widest text-white/50 sm:text-sm">24 / Financials</h2>
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Budget Framework & Channel Allocation</h3>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-12 lg:gap-8">

        {/* ── Total hero card ── */}
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-full flex-col items-center justify-center overflow-hidden border border-white/10 bg-linear-to-br from-red-900/20 to-transparent p-6 text-center sm:p-8"
          >
            {/* Ambient glow */}
            <motion.div
              className="pointer-events-none absolute right-0 top-0 -z-10 h-48 w-48 rounded-full bg-red-600/15 blur-3xl"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="mb-3 font-mono text-xs uppercase tracking-widest text-white/45">
              Total Annual Budget
            </div>

            {/* Count-up total */}
            <div className="mb-1 text-5xl font-bold text-white sm:text-6xl md:text-7xl">
              Rs.&nbsp;<CountUp to={15} delay={0.3} />
            </div>
            <div className="mb-4 font-mono text-lg font-semibold text-red-400">Crore</div>

            <div className="text-sm text-white/55">12-month premium launch campaign</div>

            {/* Thin animated rule */}
            <motion.div
              className="mt-6 h-px bg-linear-to-r from-transparent via-red-500/60 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>
        </div>

        {/* ── Allocation + monthly ── */}
        <div className="min-w-0 lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-full flex-col border border-white/10 bg-white/[0.02] p-4 sm:p-6"
          >
            <h4 className="mb-5 text-base font-medium sm:text-lg">Budget Allocation by Channel</h4>

            {/* Bar chart rows */}
            <div className="space-y-4">
              {allocation.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + i * 0.08, duration: 0.4 }}
                >
                  <div className="mb-1.5 flex items-baseline justify-between gap-3">
                    <div className="min-w-0">
                      <span className="text-sm font-medium text-white/90">{item.category}</span>
                      <span className="ml-2 hidden text-xs text-white/40 sm:inline">{item.desc}</span>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="font-mono text-sm font-semibold text-white">{item.amount}</span>
                      <span className="ml-2 font-mono text-xs text-red-400">{item.share}%</span>
                    </div>
                  </div>
                  <Bar pct={item.share} color={item.color} delay={0.35 + i * 0.08} />
                </motion.div>
              ))}
            </div>

            {/* Monthly distribution */}
            <div className="mt-5 border-t border-white/10 pt-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mb-3 font-mono text-[10px] uppercase tracking-widest text-white/35"
              >
                Monthly Distribution (weighted toward launch)
              </motion.div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {monthly.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75 + i * 0.07, duration: 0.35 }}
                    className="border border-white/5 bg-white/[0.03] p-3"
                  >
                    <div className="mb-1 font-mono text-[10px] uppercase text-white/40">{m.label}</div>
                    <div className="mb-1 font-mono text-sm font-semibold text-red-400">{m.amount}</div>
                    <div className="text-[10px] leading-relaxed text-white/45">{m.note}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
