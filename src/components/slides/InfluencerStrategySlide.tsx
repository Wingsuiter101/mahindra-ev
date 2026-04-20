import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const tiers = [
  { tier: "Mega", size: "500K+", partners: "3–5", role: "Ambassadors, campaign face", impact: "25% reach increase" },
  { tier: "Macro", size: "100K–500K", partners: "8–10", role: "Thought leaders, experts", impact: "35% engagement" },
  { tier: "Micro", size: "10K–100K", partners: "15–20", role: "Niche authority, authentic reviews", impact: "8–12% conversion" },
  { tier: "Nano", size: "1K–10K", partners: "25–30", role: "Grassroots advocates, peer recommendations", impact: "15% referral rate" }
];

export default function InfluencerStrategySlide() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mb-3 sm:mb-4 md:mb-5">
        <h2 className="mb-3 text-xs font-mono uppercase tracking-widest text-white/50 sm:mb-4 sm:text-sm">12 / Influence</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Influencer Strategy & Ecosystem</h3>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:gap-8 lg:grid-cols-12 lg:gap-8">
        <div className="min-w-0 lg:col-span-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="h-full border border-white/10 bg-white/[0.02] p-5 sm:p-8"
          >
            <h4 className="mb-6 text-xl font-medium sm:mb-8">Influencer Tier Structure</h4>
            
            <div className="space-y-4">
              <div className="min-w-[560px] space-y-4">
              {tiers.map((tier, i) => (
                <div key={i} className="grid grid-cols-12 items-center gap-4 border border-white/5 bg-white/[0.02] p-4">
                  <div className="col-span-2">
                    <div className="font-medium text-white">{tier.tier}</div>
                    <div className="text-xs font-mono text-red-500">{tier.size}</div>
                  </div>
                  <div className="col-span-2 text-center font-mono text-sm text-white/60">
                    {tier.partners} <br/>partners
                  </div>
                  <div className="col-span-5 text-sm text-white/80">{tier.role}</div>
                  <div className="col-span-3 text-right font-mono text-xs text-red-400">{tier.impact}</div>
                </div>
              ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-6 lg:col-span-4">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 border border-white/10 bg-gradient-to-bl from-red-900/10 to-transparent"
          >
            <h4 className="text-sm font-mono text-white/50 uppercase tracking-widest mb-4">Engagement Models</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li><strong className="text-white">Brand Ambassador:</strong> 12-month partnership; exclusive access; revenue share</li>
              <li><strong className="text-white">Campaign Creator:</strong> 3–4 month campaign; dedicated product content</li>
              <li><strong className="text-white">Community Advocate:</strong> Ongoing engagement; seeding; affiliate commissions</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-6 border border-white/10 bg-white/[0.02]"
          >
            <h4 className="text-sm font-mono text-white/50 uppercase tracking-widest mb-4">Content Guidelines</h4>
            <div className="grid grid-cols-2 gap-y-3 text-sm text-white/70">
              <div className="flex items-center gap-2"><ChevronRight className="mt-0.5 size-3 shrink-0 text-red-500/75" /> Authenticity first</div>
              <div className="flex items-center gap-2"><ChevronRight className="mt-0.5 size-3 shrink-0 text-red-500/75" /> Dual messaging</div>
              <div className="flex items-center gap-2"><ChevronRight className="mt-0.5 size-3 shrink-0 text-red-500/75" /> Mixed formats</div>
              <div className="flex items-center gap-2"><ChevronRight className="mt-0.5 size-3 shrink-0 text-red-500/75" /> 2-3 posts/month</div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 text-xs font-mono text-red-400">
              KPIs: Engagement &gt;5%, CTR &gt;2%, SOV
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

