const navItems = ["About", "Journey", "Thinking", "Experience", "Goal"];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-slate-200/80 bg-white/78 px-4 py-3 shadow-[0_10px_34px_rgba(30,27,75,0.06)] backdrop-blur-xl sm:px-6">
        <a
          href="#hero"
          className="rounded-full text-base font-semibold tracking-wide text-[#19171f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8b7bcf]"
        >
          Handain
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm font-medium tracking-wide text-slate-500 transition hover:bg-[#f3f0fb] hover:text-[#6f5db7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b7bcf]"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full bg-[#6f5db7] px-5 py-2.5 text-sm font-semibold tracking-wide text-white shadow-[0_10px_24px_rgba(111,93,183,0.18)] transition hover:bg-[#6250a8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b7bcf]"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
