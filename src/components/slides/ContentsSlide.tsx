"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useSlide } from "@/context/SlideContext";

const items = [
  { label: "Executive Summary & Strategic Objectives",    slide: 2  },
  { label: "Market Opportunity & Consumer Landscape",     slide: 4  },
  { label: "Brand Positioning & Value Proposition",       slide: 7  },
  { label: "Campaign Strategy & Creative Concept",        slide: 10 },
  { label: "Customer Journey & Lead Funnel Management",   slide: 12 },
  { label: "Retail Experience & Customer Engagement",     slide: 15 },
  { label: "Phased Implementation Timeline & Milestones", slide: 22 },
  { label: "Budget Allocation & Financial Planning",      slide: 25 },
];

export default function ContentsSlide() {
  const { navigate } = useSlide();

  return (
    <div className="flex flex-1 flex-col justify-between sm:justify-center">

      {/* ── Header — editorial mobile title ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="shrink-0"
      >
        <h2 className="mb-2 text-[10px] font-mono uppercase tracking-[0.35em] text-white/35 sm:mb-3 sm:text-xs sm:tracking-widest">
          Table of Contents
        </h2>
        <div className="relative inline-block">
          <h3 className="text-[clamp(2.85rem,12vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Contents
          </h3>
          {/* Accent rule — reads more premium on narrow screens */}
          <div className="mt-3 h-px w-12 bg-gradient-to-r from-red-500/90 to-transparent sm:mt-4 sm:w-16" />
        </div>
      </motion.div>

      {/* ── Nav list — grows and distributes evenly ── */}
      <div className="flex flex-1 flex-col justify-around py-2 sm:flex-none sm:justify-start sm:space-y-1 sm:py-0 lg:border-l lg:border-white/10 lg:pl-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 + 0.05 * index, duration: 0.45 }}
          >
            <button
              type="button"
              onClick={() => navigate(item.slide)}
              className="group flex w-full items-center gap-3 border-b border-white/[0.06] py-1.5 text-left transition-colors last:border-0 hover:bg-white/[0.02] sm:rounded-sm sm:border-none sm:px-2 sm:py-2"
            >
              <span className="w-6 shrink-0 text-center font-mono text-xs text-red-600/60 transition-colors duration-200 group-hover:text-red-500 sm:text-sm">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-[14px] font-medium leading-snug text-white/65 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                {item.label}
              </span>
              <ArrowRight className="size-3.5 shrink-0 text-white/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100" strokeWidth={1.75} />
            </button>
          </motion.div>
        ))}
      </div>

      {/* ── Caption ── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="shrink-0 text-[10px] font-mono uppercase tracking-widest text-white/20"
      >
        Tap any section to jump · 26 slides
      </motion.p>
    </div>
  );
}
