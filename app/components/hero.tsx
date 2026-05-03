"use client";

import { motion } from "framer-motion";

const chips = ["관찰", "문제 정의", "작은 개선"];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.58 } },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate px-6 pb-28 pt-36 md:px-12 lg:px-20 lg:pb-36 lg:pt-44"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,#f8f9fc_58%,#f3f1f8_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.28] [background-image:linear-gradient(rgba(111,93,183,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(111,93,183,0.05)_1px,transparent_1px)] [background-size:44px_44px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-6xl"
      >
        <motion.h1
          variants={item}
          className="max-w-5xl text-5xl font-semibold leading-[1.22] tracking-wide text-[#19171f] sm:text-7xl lg:text-8xl lg:leading-[1.18]"
        >
          문제를 발견하고, <span className="text-[#6f5db7]">더 나은 방향을</span>{" "}
          찾아가고 있습니다
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-8 max-w-[42rem] text-xl leading-10 tracking-wide text-slate-500"
        >
          빠른 성과보다 꾸준한 과정과 방향을 더 중요하게 생각합니다.
          그리고 저는 정량화할 수 없는 가치에도 의미가 있다고 믿는 사람입니다.
        </motion.p>
        <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-slate-200 bg-white/72 px-4 py-2 text-sm font-medium tracking-wide text-slate-600"
            >
              {chip}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
