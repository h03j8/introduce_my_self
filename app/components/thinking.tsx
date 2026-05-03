import { PortfolioCard } from "./portfolio-card";
import { SectionHeading } from "./section-heading";
import { SectionWrapper } from "./section-wrapper";

const values = [
  {
    title: "상황을 먼저 살피고",
    text: "겉으로 보이는 결과보다 그 일이 생긴 맥락을 먼저 살핍니다.",
  },
  {
    title: "필요한 일이 무엇인지 정하고",
    text: "지금 해야 할 일을 먼저 정리해봅니다.",
  },
  {
    title: "일단 실행합니다",
    text: "일단 시작하고, 개선해나가고자 합니다",
  },
];

export function Thinking() {
  return (
    <SectionWrapper id="thinking" className="bg-[#f8f9fc]">
      <SectionHeading
        eyebrow="Thinking"
        title="중요하게 생각하는 것"
        align="center"
      />

      <div className="mt-16 grid gap-7 md:grid-cols-3">
        {values.map((item, index) => (
          <PortfolioCard
            key={item.title}
            delay={index * 0.06}
            className="min-h-[230px]"
          >
            <span className="text-sm font-semibold tracking-[0.16em] text-[#6f5db7]">
              0{index + 1}
            </span>
            <h3 className="mt-5 text-2xl font-semibold leading-9 tracking-wide text-[#19171f]">
              {item.title}
            </h3>
            <p className="mt-5 max-w-sm leading-9 tracking-wide text-slate-500">
              {item.text}
            </p>
          </PortfolioCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
