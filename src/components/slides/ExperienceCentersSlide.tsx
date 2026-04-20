import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const locations = [
  { city: "Kathmandu", count: 2 },
  { city: "Pokhara", count: 1 },
  { city: "Biratnagar", count: 1 },
  { city: "Lalitpur", count: 1 }
];

const zones = [
  "Product display (3 vehicle configs)",
  "VR / AR technology demo station",
  "Premium lounge area",
  "Test drive prep station",
  "Aftermarket & financing counter"
];

const experience = [
  "Digital check-in + personalised greeting",
  "Interactive screens, 360° rotation & AR try-on",
  "Level 2 ADAS + charging education",
  "In-vehicle data tracking during test drives",
  "Financial advisor + customisation + trade-in zone",
  "Community hub: events, merch & refreshments"
];

export default function ExperienceCentersSlide() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mb-4 sm:mb-6">
        <h2 className="mb-2 text-xs font-mono uppercase tracking-widest text-white/50 sm:text-sm">14 / Retail</h2>
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Experience Centers Design & Operational Model</h3>
      </div>

      {/* Quick stats row */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mb-4 grid grid-cols-3 gap-3 sm:mb-5 sm:gap-4"
      >
        {[
          { value: "5", label: "Centers" },
          { value: "8–10k", label: "sq ft each" },
          { value: "8–9", label: "Staff / center" }
        ].map((s, i) => (
          <div key={i} className="border border-white/10 bg-white/[0.02] px-3 py-3 text-center sm:px-4">
            <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">{s.value}</div>
            <div className="mt-0.5 text-[10px] font-mono uppercase tracking-widest text-white/40 sm:text-xs">{s.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Locations chips + main content */}
      <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12">

        {/* Left: locations */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="border border-white/10 bg-white/[0.02] p-4 sm:p-5 lg:col-span-3"
        >
          <h4 className="mb-3 text-xs font-mono uppercase tracking-widest text-white/50">Locations</h4>
          <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-2.5">
            {locations.map((loc, i) => (
              <div key={i} className="flex items-center justify-between gap-3 rounded-sm border border-white/8 bg-white/[0.03] px-3 py-2 lg:w-full">
                <span className="text-sm text-white/80">{loc.city}</span>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-red-500/50 text-xs font-mono text-red-400">{loc.count}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: zones + experience */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border border-white/10 bg-white/[0.02] p-4 sm:p-5 lg:col-span-9"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            <div>
              <h4 className="mb-3 text-xs font-mono uppercase tracking-widest text-white/50">Key Zones</h4>
              <ul className="space-y-2.5">
                {zones.map((z, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/75">
                    <ChevronRight className="mt-0.5 size-3.5 shrink-0 text-red-500/75" />
                    {z}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-xs font-mono uppercase tracking-widest text-white/50">Customer Journey</h4>
              <ul className="space-y-2.5">
                {experience.map((e, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/75">
                    <ChevronRight className="mt-0.5 size-3.5 shrink-0 text-indigo-400/75" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1 border-t border-white/10 pt-4">
            <span className="text-xs font-mono uppercase text-white/40">Staffing</span>
            <span className="text-xs text-white/60">
              Manager (1) · Specialists (2–3) · Coordinators (2) · CSR (2) · Support (1)
              <span className="ml-2 font-medium text-white">= 8–9 / center</span>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
