import type { ReactNode } from "react";

type SectionWrapperProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function SectionWrapper({
  id,
  children,
  className = "",
  innerClassName = "mx-auto max-w-6xl",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`px-6 py-32 md:px-12 lg:px-20 ${className}`}>
      <div className={innerClassName}>{children}</div>
    </section>
  );
}
