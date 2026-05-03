"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type PortfolioCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function PortfolioCard({
  children,
  className = "",
  delay = 0,
}: PortfolioCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.52, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -3,
        boxShadow: "0 14px 34px rgba(30, 27, 75, 0.08)",
      }}
      className={`rounded-2xl border border-slate-200/80 bg-white/78 p-8 shadow-[0_8px_28px_rgba(30,27,75,0.04)] transition-colors hover:border-[#d9d2f0] motion-reduce:transition-none ${className}`}
    >
      {children}
    </motion.article>
  );
}
