"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Slide } from "@/components/Slide";
import { ArrowDown, ArrowUp } from "lucide-react";
import { SlideContext } from "@/context/SlideContext";

// Slide Components
import CoverSlide from "@/components/slides/CoverSlide";
import ContentsSlide from "@/components/slides/ContentsSlide";
import VisionSlide from "@/components/slides/VisionSlide";
import ActionPlanSlide from "@/components/slides/ActionPlanSlide";
import MarketContextSlide from "@/components/slides/MarketContextSlide";
import TargetConsumerSlide from "@/components/slides/TargetConsumerSlide";
import ConsumerJourneySlide from "@/components/slides/ConsumerJourneySlide";
import PositioningSlide from "@/components/slides/PositioningSlide";
import ProductLineupSlide from "@/components/slides/ProductLineupSlide";
import CompetitiveDiffSlide from "@/components/slides/CompetitiveDiffSlide";
import CampaignConceptSlide from "@/components/slides/CampaignConceptSlide";
import MediaMixSlide from "@/components/slides/MediaMixSlide";
import LeadFunnelSlide from "@/components/slides/LeadFunnelSlide";
import InfluencerStrategySlide from "@/components/slides/InfluencerStrategySlide";
import PartnershipSlide from "@/components/slides/PartnershipSlide";
import ExperienceCentersSlide from "@/components/slides/ExperienceCentersSlide";
import ActivationEventsSlide from "@/components/slides/ActivationEventsSlide";
import RetailTrainingSlide from "@/components/slides/RetailTrainingSlide";
import EndToEndFunnelSlide from "@/components/slides/EndToEndFunnelSlide";
import LeadScoringSlide from "@/components/slides/LeadScoringSlide";
import KPISlide from "@/components/slides/KPISlide";
import ReportingCadenceSlide from "@/components/slides/ReportingCadenceSlide";
import LaunchPhasesSlide from "@/components/slides/LaunchPhasesSlide";
import ChannelTimelineSlide from "@/components/slides/ChannelTimelineSlide";
import GovernanceSlide from "@/components/slides/GovernanceSlide";
import BudgetSlide from "@/components/slides/BudgetSlide";

const slides = [
  CoverSlide,           // 0
  ContentsSlide,        // 1
  VisionSlide,          // 2
  ActionPlanSlide,      // 3
  MarketContextSlide,   // 4
  TargetConsumerSlide,  // 5
  ConsumerJourneySlide, // 6
  PositioningSlide,     // 7
  ProductLineupSlide,   // 8
  CompetitiveDiffSlide, // 9
  CampaignConceptSlide, // 10
  MediaMixSlide,        // 11
  LeadFunnelSlide,      // 12
  InfluencerStrategySlide, // 13
  PartnershipSlide,     // 14
  ExperienceCentersSlide,  // 15
  ActivationEventsSlide,   // 16
  RetailTrainingSlide,     // 17
  EndToEndFunnelSlide,     // 18
  LeadScoringSlide,        // 19
  KPISlide,                // 20
  ReportingCadenceSlide,   // 21
  LaunchPhasesSlide,       // 22
  ChannelTimelineSlide,    // 23
  GovernanceSlide,         // 24
  BudgetSlide,             // 25
];

// Sidebar section markers
const NAV_SECTIONS = [
  { label: "Cover",       first: 0,  range: [0, 1]   },
  { label: "Strategy",    first: 2,  range: [2, 3]   },
  { label: "Market",      first: 4,  range: [4, 6]   },
  { label: "Positioning", first: 7,  range: [7, 9]   },
  { label: "Campaign",    first: 10, range: [10, 11] },
  { label: "Funnel",      first: 12, range: [12, 14] },
  { label: "Retail",      first: 15, range: [15, 17] },
  { label: "Leads",       first: 18, range: [18, 19] },
  { label: "KPIs",        first: 20, range: [20, 21] },
  { label: "Timeline",    first: 22, range: [22, 24] },
  { label: "Budget",      first: 25, range: [25, 25] },
];

// Full-bleed heroes: rendered at page level so they cover the ENTIRE viewport
// (header, footer, everything) — not constrained by the padded slide area.
const SLIDE_HEROES: Record<number, { src: string; cls: string; priority?: boolean; overlays: string[] }> = {
  0: {
    src: "/hero-mahindra.png",
    cls: "object-[65%_center] sm:object-center",
    priority: true,
    overlays: [
      "absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent sm:via-black/60",
      "absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60",
      "absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-red-950/40 to-transparent",
    ],
  },
  5: {
    src: "/slide-5.png",
    cls: "object-center",
    overlays: ["absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80"],
  },
  12: {
    src: "/slide-12.png",
    cls: "object-center",
    overlays: [
      "absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/85",
      "absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70",
    ],
  },
  18: {
    src: "/slide-18.png",
    cls: "object-center",
    overlays: ["absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/80"],
  },
};

export default function PresentationDeck() {
  const [[page, direction], setPage] = useState([0, 0]);

  const navigate = useCallback((index: number) => {
    setPage(([p]) => {
      const clamped = Math.max(0, Math.min(slides.length - 1, index));
      if (clamped === p) return [p, 0];
      return [clamped, clamped > p ? 1 : -1];
    });
  }, []);

  const paginate = useCallback((newDirection: number) => {
    setPage(([p]) => {
      const next = p + newDirection;
      if (next < 0 || next >= slides.length) return [p, newDirection];
      return [next, newDirection];
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        paginate(1);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        paginate(-1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate]);

  const contextValue = useMemo(() => ({ page, total: slides.length, navigate }), [page, navigate]);
  const CurrentSlide = slides[page];
  const hero = SLIDE_HEROES[page];

  const activeSection = NAV_SECTIONS.findIndex(
    (s) => page >= s.range[0] && page <= s.range[1]
  );

  return (
    <SlideContext.Provider value={contextValue}>
      <main className="relative flex h-dvh w-full max-w-full flex-col overflow-hidden bg-black font-sans text-white selection:bg-red-600 selection:text-white">

        {/* ── Default background ── */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-slate-900/40 via-black to-black" />

        {/* ── Full-bleed hero images — absolute inset-0 at the main level
            so they cover header, footer and all padding, edge to edge ── */}
        <AnimatePresence>
          {hero && (
            <motion.div
              key={`hero-${page}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55 }}
              className="pointer-events-none absolute inset-0 z-[1]"
            >
              <Image
                src={hero.src}
                alt=""
                fill
                unoptimized
                priority={!!hero.priority}
                className={`object-cover ${hero.cls}`}
              />
              {hero.overlays.map((cls, i) => (
                <div key={i} className={cls} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Top accent bar ── */}
        <div className="pointer-events-none absolute left-0 top-0 z-50 h-[2px] w-full bg-linear-to-r from-red-600 via-indigo-900 to-black" />

        {/* ── Header ── */}
        <header className="relative z-50 flex shrink-0 items-center justify-between gap-4 px-6 pb-3 pt-[max(1.25rem,env(safe-area-inset-top))] sm:px-10 sm:pb-4 sm:pt-[max(1.5rem,env(safe-area-inset-top))] md:px-14 md:pt-[max(1.75rem,env(safe-area-inset-top))]">
          <button
            type="button"
            onClick={() => navigate(0)}
            aria-label="Back to cover slide"
            className="flex min-w-0 cursor-pointer items-center rounded-sm outline-none ring-offset-2 ring-offset-black transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-red-500/80"
          >
            <Image
              src="/Mahindra-Logo.png"
              alt=""
              width={200}
              height={48}
              priority
              unoptimized
              className="pointer-events-none h-7 w-auto max-w-[min(160px,45vw)] object-contain object-left sm:h-8 md:h-9"
            />
          </button>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-white/35 sm:block sm:text-xs">
            EV · Nepal
          </span>
        </header>

        {/* ── Slide viewport ── */}
        <div className="relative z-10 h-0 flex-1 overflow-x-clip px-4 pr-8 sm:px-10 sm:pr-14 md:px-14 md:pr-20">
          <div className="relative mx-auto h-full w-full max-w-7xl">
            <AnimatePresence initial={false} custom={direction}>
              <Slide key={page} direction={direction}>
                <CurrentSlide />
              </Slide>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Sidebar navigation ── */}
        <aside className="pointer-events-none absolute inset-y-0 right-0 z-40 flex flex-col items-center justify-center gap-2 pr-2.5 sm:pr-4">
          {NAV_SECTIONS.map((section, i) => {
            const isActive = i === activeSection;
            return (
              <button
                key={section.label}
                type="button"
                aria-label={`Go to ${section.label}`}
                onClick={() => navigate(section.first)}
                className="group pointer-events-auto relative flex items-center justify-end"
              >
                <span className="mr-2 origin-right scale-x-0 select-none whitespace-nowrap rounded-sm bg-black/80 px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest text-white/70 opacity-0 backdrop-blur-sm transition-all duration-200 group-hover:scale-x-100 group-hover:opacity-100 sm:text-[10px]">
                  {section.label}
                </span>
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? "h-2 w-2 bg-red-500 shadow-[0_0_8px_2px_rgba(239,68,68,0.6)]"
                      : "h-1.5 w-1.5 bg-white/25 group-hover:bg-white/60"
                  }`}
                />
              </button>
            );
          })}
        </aside>

        {/* ── Footer ── */}
        <footer className="relative z-50 flex shrink-0 items-center justify-between gap-3 px-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-3 sm:px-10 sm:gap-6 sm:pb-[max(1.5rem,env(safe-area-inset-bottom))] md:px-14">
          <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
            <div className="shrink-0 font-mono text-[10px] tracking-widest text-white/40 sm:text-xs">
              {String(page + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </div>
            <div className="relative h-px min-w-0 flex-1 max-w-32 bg-white/10 sm:max-w-40">
              <div
                className="absolute left-0 top-0 h-full bg-red-600 transition-all duration-500 ease-out"
                style={{ width: `${((page + 1) / slides.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => paginate(-1)}
              disabled={page === 0}
              className="group flex items-center justify-center px-3.5 py-2.5 transition-colors hover:bg-white/10 disabled:pointer-events-none disabled:opacity-25 sm:px-4 sm:py-3"
            >
              <ArrowUp className="size-[15px] text-white/55 transition-colors group-hover:text-white sm:size-4" strokeWidth={1.75} />
            </button>

            <div className="relative flex w-px self-stretch bg-white/10">
              <div
                className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-red-500 shadow-[0_0_6px_2px_rgba(239,68,68,0.55)] transition-all duration-500 ease-out"
                style={{ top: `${(page / (slides.length - 1)) * 100}%`, transform: "translate(-50%, -50%)" }}
              />
            </div>

            <button
              type="button"
              aria-label="Next slide"
              onClick={() => paginate(1)}
              disabled={page === slides.length - 1}
              className="group flex items-center justify-center px-3.5 py-2.5 transition-colors hover:bg-white/10 disabled:pointer-events-none disabled:opacity-25 sm:px-4 sm:py-3"
            >
              <ArrowDown className="size-[15px] text-white/55 transition-colors group-hover:text-white sm:size-4" strokeWidth={1.75} />
            </button>
          </div>
        </footer>
      </main>
    </SlideContext.Provider>
  );
}
