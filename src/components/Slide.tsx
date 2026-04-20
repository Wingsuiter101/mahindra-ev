import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SlideProps {
  children: ReactNode;
  direction: number;
}

const variants = {
  enter: (dir: number) => ({ y: dir > 0 ? 24 : -24, opacity: 0 }),
  center: { zIndex: 1, y: 0, opacity: 1 },
  exit: (dir: number) => ({ zIndex: 0, y: dir < 0 ? 24 : -24, opacity: 0 }),
};

export function Slide({ children, direction }: SlideProps) {
  return (
    // Layer 1 — fills the positioned parent
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        y: { type: "spring", stiffness: 380, damping: 34 },
        opacity: { duration: 0.3 },
      }}
      className="absolute inset-0 overflow-x-clip"
    >
      {/*
        Layer 2 — scroll container.
        h-full resolves against Layer 1's concrete inset-0 height.
        flex + flex-col so children can use flex-1 to fill this height.
        When content is taller than h-full, overflow-y-auto scrolls it.
      */}
      <div className="flex h-full flex-col overflow-y-auto overflow-x-clip [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
        {/*
          Layer 3 — max-width centering wrapper.
          flex-1 grows to fill Layer 2's h-full.
          py padding gives breathing room top/bottom.
          Children use flex-1 here to fill the remaining space.
        */}
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col py-3 sm:py-2 md:py-3">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
