import { motion } from "framer-motion";

const atl = [
  { channel: "Television", m1_3: "Intensive (30s × 10/wk)", m4_6: "Sustained (5/wk)",   m7_9: "Optimized (3/wk)", m10_12: "Retention (2/wk)" },
  { channel: "OOH",        m1_3: "50 high-traffic sites",   m4_6: "30 locations",         m7_9: "20 locations",    m10_12: "15 locations"      },
  { channel: "Print",      m1_3: "Monthly (5 titles)",      m4_6: "Bi-weekly (3 titles)", m7_9: "Monthly (2)",     m10_12: "As needed"         },
  { channel: "Radio",      m1_3: "20 spots/week",           m4_6: "15 spots/week",        m7_9: "10 spots/week",   m10_12: "5 spots/week"      },
];

const digital = [
  { month: "Month 1",    focus: "Brand awareness (emotional hook) · Website optimisation · Social channel setup"         },
  { month: "Month 2",    focus: "Retargeting (consideration) · Comparison content · Test drive booking push"              },
  { month: "Month 3",    focus: "Product education · Financing content · Exclusive offer promotion"                       },
  { month: "Month 4–6",  focus: "Performance optimisation · Scale successful channels · New partnership content"          },
  { month: "Month 7–12", focus: "Retention focus · Referral programme · UGC · Alumni community"                          },
];

const periods = ["Month 1–3", "Month 4–6", "Month 7–9", "Month 10–12"];

export default function ChannelTimelineSlide() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mb-3 sm:mb-4 md:mb-5">
        <h2 className="mb-3 text-xs font-mono uppercase tracking-widest text-white/50 sm:mb-4 sm:text-sm">22 / Roadmap</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Campaign Execution Roadmap</h3>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 xl:grid-cols-12 xl:gap-8">
        {/* ATL table */}
        <div className="min-w-0 xl:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="border border-white/10 bg-white/[0.02] p-4 sm:p-6"
          >
            <h4 className="mb-4 text-lg font-medium sm:text-xl">ATL Campaign Rollout</h4>

            {/* ── Mobile: each channel is a card ── */}
            <div className="space-y-3 sm:hidden">
              {atl.map((row, i) => (
                <div key={i} className="border border-white/5 bg-white/[0.02] p-3">
                  <div className="mb-2 font-medium text-sm text-white/90">{row.channel}</div>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                    {[row.m1_3, row.m4_6, row.m7_9, row.m10_12].map((val, j) => (
                      <div key={j}>
                        <div className="text-[9px] font-mono uppercase text-white/30">{periods[j]}</div>
                        <div className="text-[11px] text-white/65">{val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* ── Desktop: real table ── */}
            <div className="hidden sm:block">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/20 text-xs font-mono uppercase tracking-wider text-white/40">
                    <th className="pb-3 font-normal w-[15%]">Channel</th>
                    <th className="pb-3 font-normal">Month 1–3</th>
                    <th className="pb-3 font-normal">Month 4–6</th>
                    <th className="pb-3 font-normal">Month 7–9</th>
                    <th className="pb-3 font-normal">Month 10–12</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {atl.map((row, i) => (
                    <tr key={i} className="transition-colors hover:bg-white/[0.02]">
                      <td className="py-3 font-medium text-white/90">{row.channel}</td>
                      <td className="py-3 text-white/65">{row.m1_3}</td>
                      <td className="py-3 text-white/65">{row.m4_6}</td>
                      <td className="py-3 text-white/65">{row.m7_9}</td>
                      <td className="py-3 text-white/65">{row.m10_12}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Digital sequencing */}
        <div className="xl:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="h-full border border-white/10 bg-linear-to-bl from-indigo-900/10 to-transparent p-4 sm:p-6"
          >
            <h4 className="mb-4 text-lg font-medium sm:mb-5 sm:text-xl">Digital Sequencing</h4>

            <div className="relative space-y-4">
              <div className="pointer-events-none absolute left-2.5 top-2 bottom-2 w-px bg-white/10" />
              {digital.map((item, i) => (
                <div key={i} className="relative z-10 flex gap-4">
                  <div className="mt-0.5 h-5 w-5 shrink-0 rounded-full border-2 border-red-500 bg-black" />
                  <div>
                    <div className="mb-0.5 font-mono text-[10px] uppercase text-red-400">{item.month}</div>
                    <div className="text-xs leading-relaxed text-white/65">{item.focus}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
