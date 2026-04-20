"use client";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const drives = [
  { type: "Standard Route",        dur: "30m",  audience: "All interested buyers",    vol: "15–20/center" },
  { type: "Performance Route",     dur: "45m",  audience: "Tech/performance audience", vol: "8–10/center"  },
  { type: "Family Experience",     dur: "60m",  audience: "Family prospects",          vol: "5–8/center"   },
  { type: "Executive Power Lunch", dur: "90m",  audience: "HNW / business leaders",   vol: "3–5/month"    },
  { type: "Mobile Pop-Up",         dur: "20m",  audience: "General public",            vol: "100+/month"   },
];

const calendar = [
  { month: "Month 1",    event: "Grand Launch Event",           loc: "Kathmandu premium venue", scale: "500+ VIPs/media" },
  { month: "Month 2",    event: "Roadshow Circuit",             loc: "5 cities",                scale: "200+ per city"   },
  { month: "Month 3",    event: "Corporate Partnership Events", loc: "IT/Finance companies",    scale: "100+ per event"  },
  { month: "Month 4",    event: "Influencer Experience Day",    loc: "Premium location",        scale: "50+ creators"    },
  { month: "Month 5–12", event: "Monthly Community Events",     loc: "Experience centers",      scale: "150+ per event"  },
];

import type { Variants } from "framer-motion";

const rowVariants: Variants = {
  hidden: { opacity: 0, x: -18 },
  show:   (i: number) => ({ opacity: 1, x: 0, transition: { delay: 0.12 + i * 0.07, duration: 0.4, ease: "easeOut" } }),
};

const timelineVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  show:   (i: number) => ({ opacity: 1, x: 0, transition: { delay: 0.3 + i * 0.09, duration: 0.45, ease: "easeOut" } }),
};

const dotVariants: Variants = {
  hidden:  { scale: 0, opacity: 0 },
  show:    (i: number) => ({ scale: 1, opacity: 1, transition: { delay: 0.32 + i * 0.09, duration: 0.3, type: "spring", stiffness: 400, damping: 20 } }),
};

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  show:   { scaleY: 1, transition: { delay: 0.35, duration: 0.7 } },
};

export default function ActivationEventsSlide() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-3 sm:mb-4 md:mb-5"
      >
        <h2 className="mb-1 text-xs font-mono uppercase tracking-widest text-white/50 sm:text-sm">15 / Activation</h2>
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Experiential Drives & Activation Events</h3>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 xl:grid-cols-12 xl:gap-8">

        {/* ── Drive program ── */}
        <div className="min-w-0 xl:col-span-7">
          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-lg font-medium sm:text-xl"
          >
            Test Drive Program Structure
          </motion.h4>

          {/* Mobile cards */}
          <div className="space-y-2 sm:hidden">
            {drives.map((row, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={rowVariants}
                initial="hidden"
                animate="show"
                className="border border-white/5 bg-white/[0.02] p-3"
              >
                <div className="mb-1 flex items-center justify-between gap-2">
                  <span className="text-xs font-medium text-white/90">{row.type}</span>
                  <span className="shrink-0 font-mono text-xs text-red-400">{row.dur}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] text-white/55">{row.audience}</span>
                  <span className="shrink-0 text-[11px] text-white/40">{row.vol}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop grid */}
          <div className="hidden sm:block">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-12 gap-3 border-b border-white/20 pb-3 text-xs font-mono uppercase tracking-wider text-white/40"
            >
              <div className="col-span-4">Drive Type</div>
              <div className="col-span-2">Duration</div>
              <div className="col-span-4">Target Audience</div>
              <div className="col-span-2 text-right">Volume</div>
            </motion.div>

            <div className="mt-3 space-y-0">
              {drives.map((row, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={rowVariants}
                  initial="hidden"
                  animate="show"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.025)", x: 2 }}
                  className="grid grid-cols-12 items-center gap-3 border-b border-white/5 py-3"
                >
                  <div className="col-span-4 text-sm font-medium text-white/90">{row.type}</div>
                  <div className="col-span-2 font-mono text-sm text-red-400">{row.dur}</div>
                  <div className="col-span-4 text-sm text-white/60">{row.audience}</div>
                  <div className="col-span-2 text-right text-sm text-white/45">{row.vol}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Calendar timeline ── */}
        <div className="xl:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="relative h-full overflow-hidden border border-white/10 bg-linear-to-bl from-white/5 to-transparent p-4 sm:p-6"
          >
            {/* Top accent bar — animates in */}
            <motion.div
              initial={{ scaleX: 0, originX: 1 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="pointer-events-none absolute right-0 top-0 h-px w-full bg-linear-to-r from-transparent to-red-600"
            />

            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
              className="mb-5 text-lg font-medium sm:mb-6 sm:text-xl"
            >
              12-Month Activation Calendar
            </motion.h4>

            <div className="relative space-y-4 sm:space-y-5">
              {/* Vertical line — grows down */}
              <motion.div
                variants={lineVariants}
                initial="hidden"
                animate="show"
                style={{ originY: 0 }}
                className="absolute left-2.5 top-2 bottom-2 w-px bg-white/10"
              />

              {calendar.map((item, i) => (
                <div key={i} className="relative z-10 flex gap-4 sm:gap-5">
                  {/* Dot pops in */}
                  <motion.div
                    custom={i}
                    variants={dotVariants}
                    initial="hidden"
                    animate="show"
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-white/20 bg-black"
                  >
                    <ChevronRight className="size-2.5 text-red-500/75" />
                  </motion.div>

                  {/* Content slides in */}
                  <motion.div
                    custom={i}
                    variants={timelineVariants}
                    initial="hidden"
                    animate="show"
                  >
                    <div className="mb-0.5 font-mono text-[10px] uppercase text-red-400">{item.month}</div>
                    <div className="text-sm font-medium text-white/90">{item.event}</div>
                    <div className="text-xs text-white/50">{item.loc} · {item.scale}</div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
