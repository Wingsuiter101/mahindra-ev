import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const meetings = [
  {
    name: "Weekly Dashboard",
    cadence: "Real-time tracking",
    items: "Website traffic, Lead volume and source, Test drive bookings, Sales pipeline status, Campaign performance, Inventory status",
    resp: "Digital Marketing Manager + Sales Lead",
    color: "from-white/5 to-transparent"
  },
  {
    name: "Monthly Business Review",
    cadence: "Detailed analysis",
    items: "Funnel conversion rates, Acquisition cost, CLV projection, Campaign ROI, Channel performance, Lead quality, Sales forecast",
    resp: "Full marketing + sales leadership team",
    color: "from-white/10 to-transparent"
  },
  {
    name: "Quarterly Strategic Review",
    cadence: "Insights & optimization",
    items: "Segment performance, Campaign effectiveness, Market feedback, Strategic adjustments, Budget reallocation, Competitive intelligence",
    resp: "Full leadership + external agency partners",
    color: "from-red-900/20 to-transparent"
  }
];

export default function ReportingCadenceSlide() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mb-3 sm:mb-4 md:mb-5">
        <h2 className="mb-3 text-xs font-mono uppercase tracking-widest text-white/50 sm:mb-4 sm:text-sm">20 / Governance</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Performance Tracking & Reporting Cadence</h3>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {meetings.map((meeting, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className={`flex h-full flex-col border border-white/10 bg-gradient-to-b p-5 sm:p-8 ${meeting.color}`}
          >
            <div className="mb-6 pb-6 border-b border-white/10">
              <h4 className="text-2xl font-medium mb-2">{meeting.name}</h4>
              <div className="text-xs font-mono text-red-500 uppercase tracking-widest">{meeting.cadence}</div>
            </div>
            
            <div className="flex-grow space-y-4">
              <div className="text-xs font-mono text-white/40 uppercase mb-2">Key Metrics & Agenda</div>
              <ul className="space-y-3">
                {meeting.items.split(', ').map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-white/80">
                    <ChevronRight className="mt-0.5 size-3.5 shrink-0 text-red-500/75" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 pt-4 border-t border-white/10">
              <div className="text-xs font-mono text-white/40 uppercase mb-1">Responsibility</div>
              <div className="text-sm font-medium text-white/90">{meeting.resp}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

