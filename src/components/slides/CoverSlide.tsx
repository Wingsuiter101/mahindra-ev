"use client";
import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

export default function CoverSlide() {
  return (
    // All content bottom-anchored → car fills the top, text anchors at bottom
    // This is the cinematic poster / automotive ad layout
    <div className="flex flex-1 flex-col justify-end pb-2 sm:justify-center sm:pb-0">

      {/* ── Content block (sits at bottom on mobile, centered on desktop) ── */}
      <div className="sm:max-w-2xl">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 flex items-center gap-2"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/8 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-white/65 backdrop-blur-sm sm:text-xs">
            <Zap className="size-3 text-red-400" strokeWidth={2} />
            Strategic Presentation
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.75 }}
          className="mb-5 text-[clamp(3.1rem,13vw,5.5rem)] font-semibold leading-[0.88] tracking-[-0.055em] sm:mb-8 md:font-bold"
          style={{ textShadow: "0 4px 40px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.5)" }}
        >
          <span className="block text-white">Mahindra</span>
          <span className="block bg-linear-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent">
            EV SUVs
          </span>
          <span className="mt-1 block text-red-500 sm:mt-0">
            Nepal
          </span>
        </motion.h1>

        {/* Divider + meta row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center gap-4 border-t border-white/10 pt-4 sm:pt-5"
        >
          <div className="flex-1">
            <p className="text-[11px] font-mono uppercase tracking-widest text-white/40 sm:text-xs">
              Premium Launch Strategy
            </p>
            <p className="mt-0.5 text-sm font-medium text-white/80 sm:text-base">
              Prepared by Asim Shrestha
            </p>
          </div>
          <span className="flex items-center gap-1 rounded-full border border-white/15 px-2.5 py-1 text-[10px] font-mono text-white/35">
            <ArrowRight className="size-3" strokeWidth={1.75} />
            26 slides
          </span>
        </motion.div>

      </div>
    </div>
  );
}
