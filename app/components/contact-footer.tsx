export function ContactFooter() {
  return (
    <footer id="contact" className="bg-[#19171f] px-6 py-14 text-white md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-2xl font-semibold tracking-wide">한다인</p>
          <p className="mt-3 max-w-xl leading-8 tracking-wide text-white/62">
            문제를 발견하고, 작은 실행으로 더 나은 방향을 찾아갑니다.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm tracking-wide text-white/70 md:text-right">
          <a
            href="mailto:handain@example.com"
            className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            han03j8@gmail.com
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
          </a>
        </div>
      </div>
    </footer>
  );
}
