import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  { title: "Emotional", desc: "Founder stories, achievement narratives, lifestyle aspiration, community belonging" },
  { title: "Performance", desc: "Technology deep-dives, safety features, range demonstrations, competitive comparisons" },
  { title: "Experience", desc: "Test drive stories, retail center showcases, customer reviews, ownership benefits" },
  { title: "Community", desc: "Influencer endorsements, peer recommendations, exclusive events, owner ecosystem" }
];

export default function CampaignConceptSlide() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mb-3 sm:mb-4 md:mb-5">
        <h2 className="mb-3 text-xs font-mono uppercase tracking-widest text-white/50 sm:mb-4 sm:text-sm">09 / Creative</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Campaign Concept & Creative Territory</h3>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden border border-white/10 bg-black p-5 sm:p-6 md:p-8"
        >
          <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 bg-indigo-900/20 blur-3xl" />
          <h4 className="mb-3 text-xs font-mono uppercase tracking-widest text-white/50">Campaign Theme</h4>
          <h5 className="mb-5 text-2xl font-bold sm:text-3xl md:text-4xl">"What Moves You?<br/><span className="text-red-500">What Moves It?</span>"</h5>
          
          <div className="space-y-3">
            <div className="border border-white/5 bg-white/[0.03] p-4">
              <div className="mb-1.5 text-xs font-mono uppercase text-white/40">Axis 1: Emotional</div>
              <p className="text-sm text-white/80">Personal aspiration, ambition fulfillment, legacy building, forward-thinking identity</p>
            </div>
            <div className="border border-white/5 bg-white/[0.03] p-4">
              <div className="mb-1.5 text-xs font-mono uppercase text-white/40">Axis 2: Rational</div>
              <p className="text-sm text-white/80">Performance proof, technology superiority, engineering excellence, tangible differentiation</p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="border border-white/10 bg-white/[0.02] p-4 sm:p-5"
          >
            <h4 className="mb-3 text-base font-medium sm:text-lg">Creative Territory</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex flex-col gap-1 sm:flex-row sm:gap-3"><ChevronRight className="mt-0.5 size-3.5 shrink-0 text-red-500/75" /><span className="shrink-0 text-white/40 sm:w-32">Visual Language</span> <span className="text-white/90">Bold, modern, dynamic; premium minimalism; use of light and motion metaphors</span></li>
              <li className="flex flex-col gap-1 sm:flex-row sm:gap-3"><ChevronRight className="mt-0.5 size-3.5 shrink-0 text-red-500/75" /><span className="shrink-0 text-white/40 sm:w-32">Narrative</span> <span className="text-white/90">Individual success stories + product performance demos; real customers + authentic testimonials</span></li>
              <li className="flex flex-col gap-1 sm:flex-row sm:gap-3"><ChevronRight className="mt-0.5 size-3.5 shrink-0 text-red-500/75" /><span className="shrink-0 text-white/40 sm:w-32">Emotional Trigger</span> <span className="text-white/90">"Built for Those Who Build" celebrating entrepreneurs, professionals, innovators, changemakers</span></li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-sm font-mono text-white/50 uppercase tracking-widest mb-4">Content Pillars</h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {pillars.map((pillar, i) => (
                <div key={i} className="p-4 border border-white/5 bg-white/[0.01]">
                  <div className="text-xs font-mono text-red-400 uppercase mb-2">Pillar {i+1}: {pillar.title}</div>
                  <p className="text-xs text-white/60 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

