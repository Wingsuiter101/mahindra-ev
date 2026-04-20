import { motion } from "framer-motion";

const segments = [
  {
    name: "Aspirational Achievers",
    size: "40%",
    demo: "Age 32–48 | Entrepreneurs & Owners | Income Rs. 15–25L",
    desc: "Urban professionals seeking status and innovation.",
    motivation: "Leadership projection, wealth demonstration, environmental consciousness",
    driver: "Premium quality, cutting-edge technology, exclusive ownership experience"
  },
  {
    name: "Influence Class",
    size: "35%",
    demo: "Age 28–40 | Corporate Execs | Income Rs. 20L+",
    desc: "Digitally native, active on social media.",
    motivation: "Trendsetter identity, peer influence, digital-first engagement, sustainability",
    driver: "Brand prestige, social media appeal, technological differentiation"
  },
  {
    name: "Progressive Pragmatists",
    size: "25%",
    demo: "Age 35–50 | Established Professionals | Income Rs. 18L+",
    desc: "Data-driven, tech-savvy decision makers.",
    motivation: "Long-term value, operational efficiency, environmental responsibility",
    driver: "Total cost of ownership, performance metrics, reliability proof"
  }
];

export default function TargetConsumerSlide() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mb-3 sm:mb-4 md:mb-5">
        <h2 className="mb-3 text-xs font-mono uppercase tracking-widest text-white/50 sm:mb-4 sm:text-sm">04 / Audience</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Consumer Segmentation & Psychographics</h3>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3">
        {segments.map((segment, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="group relative overflow-hidden border border-white/10 bg-black p-5 sm:p-6"
          >
            <div className="pointer-events-none absolute right-0 top-0 p-4 text-5xl font-bold text-white/5 transition-colors group-hover:text-white/10">
              {segment.size}
            </div>
            
            <h4 className="mb-1.5 text-xl font-medium sm:text-2xl">{segment.name}</h4>
            <div className="mb-3 text-xs font-mono text-red-500">{segment.demo}</div>
            
            <p className="mb-4 text-sm text-white/70">
              {segment.desc}
            </p>
            
            <div className="space-y-3 border-t border-white/10 pt-4">
              <div>
                <div className="mb-1 text-xs font-mono uppercase text-white/40">Core Motivation</div>
                <div className="text-sm text-white/80 leading-relaxed">{segment.motivation}</div>
              </div>
              <div>
                <div className="mb-1 text-xs font-mono uppercase text-white/40">Purchase Driver</div>
                <div className="text-sm text-white/80 leading-relaxed">{segment.driver}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

