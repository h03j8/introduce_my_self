import { Reveal } from "./motion";
import { SectionHeading } from "./section-heading";
import { SectionWrapper } from "./section-wrapper";

const experiences = [
  {
    title: "청소년의회",
    text: "사회 문제를 조사했습니다. 관점을 나누고 논의의 흐름을 정리했습니다.",
  },
  {
    title: "게임 개발 대회",
    text: "아이디어를 직접 구현했습니다. 핵심 기능을 정하고 끝까지 완성했습니다.",
  },
  {
    title: "경제체험대회",
    text: "사용자 흐름을 살폈습니다. 선택의 이유를 상황과 데이터로 정리했습니다.",
  },
  {
    title: "해커톤",
    text: "문제를 빠르게 정의했습니다. 우선순위를 정하고 서비스 형태로 구체화했습니다.",
  },
];

export function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-white/60">
      <SectionHeading
        eyebrow="Experience"
        title="실행으로 옮긴 경험"
        description="핵심 경험만 남기고, 문제를 어떻게 보고 실행했는지 중심으로 정리했습니다."
      />

      <Reveal delay={0.1} className="mt-16 max-w-3xl">
        <div className="border-l border-[#d9d2f0] pl-7 sm:pl-10">
          <div className="space-y-11">
            {experiences.map((experience) => (
              <article key={experience.title} className="relative">
                <span className="absolute -left-[34px] top-2 h-3 w-3 rounded-full border-2 border-white bg-[#8b7bcf] shadow-[0_0_0_5px_rgba(139,123,207,0.12)] sm:-left-[46px]" />
                <h3 className="text-xl font-semibold tracking-wide text-[#19171f]">
                  {experience.title}
                </h3>
                <p className="mt-3 max-w-2xl text-lg leading-9 tracking-wide text-slate-500">
                  {experience.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
