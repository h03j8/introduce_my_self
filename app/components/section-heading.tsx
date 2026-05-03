import { Reveal } from "./motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-[42rem]"
      }
    >
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6f5db7]">
        {eyebrow}
      </p>
      <h2 className="mt-5 text-3xl font-semibold leading-[1.28] tracking-wide text-[#19171f] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-[42rem] text-lg leading-9 tracking-wide text-slate-500">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
