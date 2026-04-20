import { motion } from "framer-motion";
import { Sparkles, Landmark, Cpu, Hotel } from "lucide-react";

const categories = [
  { title: "Lifestyle Brands",     examples: "Fashion, luxury, wellness",                                      Icon: Sparkles  },
  { title: "Financial Services",   examples: "Premium credit cards, investment platforms, wealth firms",       Icon: Landmark  },
  { title: "Technology Partners",  examples: "Gadget brands, smart home, digital services",                    Icon: Cpu       },
  { title: "Hospitality",          examples: "Hotels, restaurants, clubs",                                     Icon: Hotel     }
];

const retail = [
  { title: "Mall Activations",         examples: "Premium shopping centers, co-branded experiences" },
  { title: "Educational Institutions", examples: "IIMs, premium schools, campus engagement" },
  { title: "Corporate Partnerships",   examples: "IT/Finance companies, B2B fleet, executive leasing, CSR" },
  { title: "Sports & Wellness",        examples: "Gyms, sports clubs, wellness centers" }
];

export default function PartnershipSlide() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mb-3 sm:mb-4 md:mb-5">
        <h2 className="mb-3 text-xs font-mono uppercase tracking-widest text-white/50 sm:mb-4 sm:text-sm">13 / Ecosystem</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Strategic Partnership Architecture</h3>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:gap-8 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="mb-5 flex items-center gap-4 sm:mb-8">
            <div className="h-px w-8 bg-red-600" />
            <h4 className="text-xl font-medium sm:text-2xl">Category Partnerships</h4>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {categories.map(({ title, examples, Icon }, i) => (
              <div key={i} className="group border border-white/10 bg-white/[0.02] p-5 transition-colors hover:bg-white/5 sm:p-6">
                <Icon className="mb-4 size-5 text-red-500/60 transition-opacity group-hover:text-red-400" strokeWidth={1.5} />
                <h5 className="mb-2 font-medium text-white">{title}</h5>
                <p className="text-sm leading-relaxed text-white/60">{examples}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="mb-5 flex items-center gap-4 sm:mb-8">
            <div className="h-px w-8 bg-indigo-500" />
            <h4 className="text-xl font-medium sm:text-2xl">Retail & Experiential</h4>
          </div>

          <div className="space-y-4">
            {retail.map((item, i) => (
              <div key={i} className="flex items-center gap-6 border border-white/10 bg-linear-to-r from-white/[0.02] to-transparent p-5">
                <div className="w-8 shrink-0 text-right font-mono text-xs uppercase text-white/30">
                  0{i + 1}
                </div>
                <div>
                  <h5 className="mb-1 font-medium text-white">{item.title}</h5>
                  <p className="text-sm text-white/60">{item.examples}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
