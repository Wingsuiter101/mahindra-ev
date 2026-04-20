import { ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PositioningSlide() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mb-3 sm:mb-4 md:mb-5">
        <h2 className="mb-3 text-xs font-mono uppercase tracking-widest text-white/50 sm:mb-4 sm:text-sm">06 / Strategy</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Dual-Track Positioning Framework</h3>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
        {/* Emotional Pillar */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="border border-white/10 bg-gradient-to-br from-indigo-900/10 to-transparent p-5 sm:p-6 md:p-8"
        >
          <div className="mb-3 text-xs font-mono uppercase tracking-widest text-red-500">Emotional Pillar</div>
          <h4 className="mb-4 text-xl font-light sm:text-2xl md:text-3xl">"What Moves You?"</h4>
          
          <div className="space-y-4">
            <div>
              <div className="mb-1 text-xs font-mono uppercase text-white/40">Brand Promise</div>
              <p className="text-sm text-white/80">Empowerment through premium innovation; positioning Mahindra as enabler of personal ambitions.</p>
            </div>
            <div>
              <div className="mb-1 text-xs font-mono uppercase text-white/40">Brand Archetype</div>
              <p className="text-sm text-white/80">The Visionary / Innovator — Represents progress, possibility, breakthrough thinking.</p>
            </div>
            
            <div className="border-t border-white/10 pt-4">
              <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2 sm:gap-3">
                <div className="flex items-center gap-1.5"><span className="shrink-0 text-white/40">Innovation</span><ArrowRight className="size-3 shrink-0 text-white/25" strokeWidth={1.5}/><span className="text-white/75">Feel ahead</span></div>
                <div className="flex items-center gap-1.5"><span className="shrink-0 text-white/40">Empowerment</span><ArrowRight className="size-3 shrink-0 text-white/25" strokeWidth={1.5}/><span className="text-white/75">Own ambitions</span></div>
                <div className="flex items-center gap-1.5"><span className="shrink-0 text-white/40">Authenticity</span><ArrowRight className="size-3 shrink-0 text-white/25" strokeWidth={1.5}/><span className="text-white/75">Trust in quality</span></div>
                <div className="flex items-center gap-1.5"><span className="shrink-0 text-white/40">Community</span><ArrowRight className="size-3 shrink-0 text-white/25" strokeWidth={1.5}/><span className="text-white/75">Belonging</span></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rational Pillar */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="border border-white/10 bg-gradient-to-bl from-white/5 to-transparent p-5 sm:p-6 md:p-8"
        >
          <div className="mb-3 text-xs font-mono uppercase tracking-widest text-white/50">Performance Pillar</div>
          <h4 className="mb-4 text-xl font-bold sm:text-2xl md:text-3xl">"What Moves It?"</h4>
          
          <div className="space-y-4">
            <div>
              <div className="mb-1 text-xs font-mono uppercase text-white/40">Value Proposition</div>
              <p className="text-sm text-white/80">Superior performance, reliability, and engineering excellence; premium pricing justified through tangible differentiation.</p>
            </div>
            <div>
              <div className="mb-1 text-xs font-mono uppercase text-white/40">Rational Benefits</div>
              <p className="text-sm text-white/80">Extended range, faster charging, superior acceleration, advanced safety, robust after-sales support.</p>
            </div>
            
            <div className="border-t border-white/10 pt-4">
              <div className="mb-2 text-xs font-mono uppercase text-white/40">Proof Points</div>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2"><ChevronRight className="mt-0.5 size-3 shrink-0 text-white/50" /> Third-party validation</li>
                <li className="flex items-center gap-2"><ChevronRight className="mt-0.5 size-3 shrink-0 text-white/50" /> Comparative spec sheets</li>
                <li className="flex items-center gap-2"><ChevronRight className="mt-0.5 size-3 shrink-0 text-white/50" /> Expert endorsements</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

