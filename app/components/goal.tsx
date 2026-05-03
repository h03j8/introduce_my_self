import { Reveal } from "./motion";
import { SectionWrapper } from "./section-wrapper";

export function Goal() {
  return (
    <SectionWrapper id="goal" className="bg-[#f8f9fc]">
      <Reveal className="mx-auto max-w-4xl rounded-2xl border border-slate-200/80 bg-white/78 px-6 py-20 text-center shadow-[0_8px_28px_rgba(30,27,75,0.04)] sm:px-10 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6f5db7]">
          Goal
        </p>
        <h2 className="mt-6 text-4xl font-semibold leading-[1.25] tracking-wide text-[#19171f] sm:text-5xl">
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-2xl font-medium leading-[1.8] tracking-wide text-slate-600 sm:text-3xl sm:leading-[1.75]">
          일단 시작하는 사람이 되고 싶습니다
        </p>
      </Reveal>
    </SectionWrapper>
  );
}
