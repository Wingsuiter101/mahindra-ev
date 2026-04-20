import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const atl = [
  { channel: "Television (Prime Time)", time: "M1–12", reach: "60%", role: "Emotional hook + brand intro", kpi: "40% aided awareness" },
  { channel: "Out-of-Home", time: "M1–9", reach: "High-traffic", role: "Performance specs, provocative taglines", kpi: "35% unaided awareness" },
  { channel: "Print (Premium)", time: "M2–8", reach: "Aspirational", role: "Detailed features, expert reviews", kpi: "25% consideration" },
  { channel: "Radio (Premium Slots)", time: "M3–12", reach: "Commute", role: "Founder stories, highlights, CTA", kpi: "15% awareness + direct leads" }
];

const digital = [
  { channel: "Search & SEO", share: "15%", role: "premium EV Nepal, XUV400, BE6 searches, paid search, organic SEO" },
  { channel: "Social Media", share: "25%", role: "Instagram, Facebook, YouTube, TikTok" },
  { channel: "Programmatic Display", share: "20%", role: "retargeting + contextual automotive/lifestyle targeting" },
  { channel: "Email & CRM", share: "15%", role: "lead nurturing, offers, invitations, customer stories" },
  { channel: "Web & Landing Pages", share: "25%", role: "configurators, immersive experiences, comparison tools, test-drive booking" }
];

export default function MediaMixSlide() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mb-3 sm:mb-4 md:mb-5">
        <h2 className="mb-3 text-xs font-mono uppercase tracking-widest text-white/50 sm:mb-4 sm:text-sm">10 / Media</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Media Mix Strategy & Channel Allocation</h3>
      </div>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-12">
        <div className="space-y-4 xl:col-span-7">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="border border-white/10 bg-white/[0.02] p-5 sm:p-8"
          >
            <div className="mb-6 flex flex-col gap-2 border-b border-white/10 pb-4 sm:flex-row sm:items-end sm:justify-between">
              <h4 className="text-lg font-medium sm:text-xl">ATL Strategy</h4>
              <div className="text-3xl font-bold text-white/20">45%</div>
            </div>
            <div className="space-y-4">
              {atl.map((item, i) => (
                <div key={i} className="grid grid-cols-1 gap-1 border-b border-white/5 pb-3 text-sm last:border-0 sm:grid-cols-12 sm:gap-4 sm:border-0 sm:pb-0">
                  <div className="font-medium text-white/90 sm:col-span-4">{item.channel}</div>
                  <div className="font-mono text-xs text-white/50 sm:col-span-2 sm:mt-0.5">{item.time}</div>
                  <div className="text-white/70 sm:col-span-6">{item.role}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="border border-white/10 bg-white/[0.02] p-5 sm:p-8"
          >
            <div className="mb-6 flex items-end justify-between border-b border-white/10 pb-4">
              <h4 className="text-lg font-medium sm:text-xl">BTL Strategy</h4>
              <div className="text-3xl font-bold text-white/20">15%</div>
            </div>
            <div className="grid grid-cols-1 gap-2 text-sm text-white/70 sm:grid-cols-2 sm:gap-4">
              <div className="flex items-center gap-2"><ChevronRight className="mt-0.5 size-3.5 shrink-0 text-red-500/75" /> Experiential centers</div>
              <div className="flex items-center gap-2"><ChevronRight className="mt-0.5 size-3.5 shrink-0 text-red-500/75" /> Test drive events</div>
              <div className="flex items-center gap-2"><ChevronRight className="mt-0.5 size-3.5 shrink-0 text-red-500/75" /> Sampling and demonstrations</div>
              <div className="flex items-center gap-2"><ChevronRight className="mt-0.5 size-3.5 shrink-0 text-red-500/75" /> PR and media relations</div>
            </div>
          </motion.div>
        </div>

        <div className="xl:col-span-5">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="h-full border border-white/10 bg-gradient-to-b from-indigo-900/20 to-transparent p-5 sm:p-8"
          >
            <div className="mb-6 flex items-end justify-between border-b border-white/10 pb-4">
              <h4 className="text-xl font-medium">Digital Strategy</h4>
              <div className="text-3xl font-bold text-white/20">40%</div>
            </div>
            
            <div className="space-y-4">
              {digital.map((item, i) => (
                <div key={i} className="relative">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-white/90">{item.channel}</span>
                    <span className="font-mono text-red-400">{item.share}</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-red-600" style={{ width: item.share }} />
                  </div>
                  <div className="text-xs text-white/50 leading-relaxed">{item.role}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

