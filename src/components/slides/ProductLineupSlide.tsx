import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "XUV400",
    tagline: "EV Entry Point",
    price: "NPR 52.5L",
    positioning: "Gateway to premium EV ownership; proven platform, urban-ready performance and safety pedigree",
    features: "456km range • ARAI 5-star safety • 39.4 kWh battery • 110 kW motor",
    target: "First-time EV buyers; value-conscious professionals; range-confident urban commuters",
    angle: "Best total cost of ownership with Mahindra reliability — the smart EV entry",
    image: "/xuv400-exterior-right-front-three-quarter-8.avif"
  },
  {
    name: "BE 6",
    tagline: "Premium Mid-Range",
    price: "NPR 57L–68L",
    positioning: "Bold coupe-SUV design meets cutting-edge EV tech; urban performance with a statement silhouette",
    features: "~550km range • 59 kWh battery • 99 kW motor • Panoramic glass roof",
    target: "Design-conscious achievers; digital-native professionals; prestige-driven buyers",
    angle: "The most striking EV design in its class — fashion-forward, performance-backed",
    highlight: true,
    image: "/be-6-exterior-right-front-three-quarter-6.avif"
  },
  {
    name: "XEV 9e",
    tagline: "Flagship Premium",
    price: "NPR 69L–107L",
    positioning: "Flagship expression of Mahindra EV excellence; space, technology, and performance at the apex",
    features: "542–656km range • 59–79 kWh • Up to 199 kW • Level 2 ADAS • AMOLED",
    target: "Influence class; established executives; early adopters; family-first luxury buyers",
    angle: "Nepal's most capable premium EV SUV — a true segment benchmark",
    image: "/xev-9e-exterior-right-front-three-quarter-2.avif"
  }
];

export default function ProductLineupSlide() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mb-3 sm:mb-4">
        <h2 className="mb-3 text-xs font-mono uppercase tracking-widest text-white/50 sm:mb-4 sm:text-sm">07 / Product</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Product Lineup & Differentiation</h3>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3">
        {products.map((product, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className={`relative flex h-full flex-col overflow-hidden border p-5 sm:p-6 ${product.highlight ? 'border-red-500/50 bg-red-900/5' : 'border-white/10 bg-white/[0.02]'}`}
          >
            {product.highlight && (
              <div className="absolute top-0 left-0 w-full h-1 bg-red-500" />
            )}
            
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div>
                <h4 className="mb-1 text-2xl font-bold sm:text-3xl">{product.name}</h4>
                <div className="text-xs font-mono text-white/50 uppercase">{product.tagline}</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-medium text-red-400">{product.price}</div>
              </div>
            </div>
            
            <div className="group relative mb-4 h-36 w-full sm:h-40 md:h-44">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-transparent" />
              <Image
                src={product.image}
                alt={product.name}
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 28vw"
                className="object-contain object-bottom drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="space-y-4 flex-grow relative z-10">
              <div>
                <p className="text-sm text-white/80 leading-relaxed">{product.positioning}</p>
              </div>
              
              <div className="p-3 bg-black/40 border border-white/5 rounded-sm">
                <div className="text-xs font-mono text-white/40 uppercase mb-2">Key Specs</div>
                <div className="text-xs text-white/90">{product.features}</div>
              </div>
              
              <div>
                <div className="text-xs font-mono text-white/40 uppercase mb-1">Target</div>
                <p className="text-xs text-white/70">{product.target}</p>
              </div>
            </div>
            
            <div className="mt-4 pt-3 border-t border-white/10 relative z-10">
              <div className="text-xs font-mono text-white/40 uppercase mb-1">Unique Angle</div>
              <p className="text-xs font-medium text-white/90">{product.angle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

