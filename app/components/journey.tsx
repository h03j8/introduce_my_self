import { PortfolioCard } from "./portfolio-card";
import { SectionHeading } from "./section-heading";
import { SectionWrapper } from "./section-wrapper";

const steps = [
  {
    period: "중학교",
    title: "사람을 돕고 싶다는 생각",
    text: "당장 할 수 있는 것이 무엇인지 생각하고, 실천해봤던 순간",
  },
  {
    period: "고등학교",
    title: "다양한 경험과 문제 해결",
    text: "여러 활동을 하며 문제를 관찰하고, 직접 시도해보던 순간",
  },
  {
    period: "대학교 1학년",
    title: "시야를 넓혀가는 과정",
    text: "기술과 서비스를 배우며 생각을 결과물로 바꾸는 방법을 익혀가고 있습니다.",
  },
  {
    period: "이후",
    title: "꾸준히 개선하는 사람",
    text: "닮고 싶은 사람과 함께 성장하는 경험을 이어가고 싶습니다.",
  },
];

export function Journey() {
  return (
    <SectionWrapper id="journey" className="bg-white/60">
      <SectionHeading
        eyebrow="Journey"
        title="나의 여정"
        description="관심은 경험으로 이어졌고, 경험은 문제를 더 구체적으로 보는 기준이 되었습니다."
        align="center"
      />

      <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <PortfolioCard
            key={step.period}
            delay={index * 0.06}
            className="min-h-[238px]"
          >
            <p className="text-sm font-semibold tracking-[0.16em] text-[#6f5db7]">
              {step.period}
            </p>
            <h3 className="mt-6 text-xl font-semibold leading-8 tracking-wide text-[#19171f]">
              {step.title}
            </h3>
            <p className="mt-5 max-w-xs leading-9 tracking-wide text-slate-500">
              {step.text}
            </p>
          </PortfolioCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
