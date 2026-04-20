import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function VisionSlide() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mb-3 sm:mb-4 md:mb-5">
        <h2 className="mb-2 text-xs font-mono uppercase tracking-widest text-white/50 sm:text-sm">01 / Strategic Foundation</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Launch Vision & Core Objectives</h3>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="group relative overflow-hidden border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm sm:p-6 md:p-8"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <h4 className="mb-3 text-base font-medium text-white/80 sm:text-lg">Vision Statement</h4>
          <p className="text-base font-light leading-snug sm:text-xl md:text-2xl">
            Position Mahindra as the <span className="text-white font-medium">premium EV leader</span> in Nepal through the <span className="text-red-500">"Built for Those Who Build"</span> narrative, targeting aspirational achievers and the influence class.
          </p>
        </motion.div>

        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="border border-white/10 bg-white/[0.02] p-4 sm:p-5"
          >
            <h4 className="text-sm font-mono text-white/50 uppercase tracking-widest mb-3">Primary Objective</h4>
            <p className="text-xl">Establish market leadership in the premium EV SUV segment within <span className="text-red-500 font-bold">12 months</span> of launch.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4"
          >
            <div className="space-y-3">
              <h4 className="text-sm font-mono uppercase tracking-widest text-white/50">Secondary Objectives</h4>
              <ul className="space-y-2.5 text-sm text-white/70">
                <li className="flex gap-3"><ChevronRight className="mt-0.5 size-3 shrink-0 text-red-500/75" />Build brand equity through emotional connection</li>
                <li className="flex gap-3"><ChevronRight className="mt-0.5 size-3 shrink-0 text-red-500/75" />Validate performance superiority</li>
                <li className="flex gap-3"><ChevronRight className="mt-0.5 size-3 shrink-0 text-red-500/75" />Create sustainable competitive advantage</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-mono uppercase tracking-widest text-white/50">Success Definition</h4>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-1 sm:space-y-3">
                <div>
                  <div className="text-xl font-bold text-white sm:text-2xl">40%</div>
                  <div className="text-[10px] uppercase tracking-wider text-white/50 sm:text-xs">Awareness</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white sm:text-2xl">8-10%</div>
                  <div className="text-[10px] uppercase tracking-wider text-white/50 sm:text-xs">Trial Rate</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-red-500 sm:text-2xl">25%</div>
                  <div className="text-[10px] uppercase tracking-wider text-white/50 sm:text-xs">Market Share (Yr 1)</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

