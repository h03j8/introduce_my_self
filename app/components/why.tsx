import { PortfolioCard } from "./portfolio-card";
import { SectionHeading } from "./section-heading";
import { SectionWrapper } from "./section-wrapper";

const reasons = [
  {
    title: "중학교 시절 경험",
    text: "독거노인 봉사활동을 이후, '더 많은 사람'을 도울 수 있는 방법이 없을까 고민했습니다.",
  },
  {
    title: "직접 만들어보는 과정",
    text: "생각한 것을 직접 만들어보는 과정이 재밌게 느껴졌습니다.",
  },
];

export function Why() {
  return (
    <SectionWrapper id="about" className="bg-[#f8f9fc]">
      <SectionHeading
        eyebrow="About"
        title="왜 IT를 선택했을까"
      />
      <div className="mt-16 grid gap-7 md:grid-cols-2">
        {reasons.map((reason, index) => (
          <PortfolioCard key={reason.title} delay={index * 0.06}>
            <p className="text-sm font-semibold tracking-[0.16em] text-[#6f5db7]">
              0{index + 1}
            </p>
            <h3 className="mt-5 text-2xl font-semibold leading-9 tracking-wide text-[#19171f]">
              {reason.title}
            </h3>
            <p className="mt-5 max-w-md text-lg leading-9 tracking-wide text-slate-500">
              {reason.text}
            </p>
          </PortfolioCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
