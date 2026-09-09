const columns = [
  {
    title: "Ecosystem",
    links: ["Interlink App", "ITLX Wallet", "InterlinkChain", "Marketplace"],
  },
  { title: "Community", links: ["Ambassador", "Creator", "Campaign", "Blog"] },
  { title: "Resource", links: ["Foundation", "Whitepaper", "Treasury company", "Support"] },
  { title: "Legal", links: ["Privacy policy", "Terms of use", "Cookies", "Disclosures"] },
];

export function Footer() {
  return (
    <footer className="bg-ink py-12 text-white sm:py-16">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-[10px] bg-gradient-brand">
                <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
                  <path
                    d="M6 15a5 5 0 0 1 5-5h2a5 5 0 0 1 0 10h-2"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                  <circle cx="8" cy="7" r="2.6" fill="currentColor" />
                </svg>
              </span>
              <span className="text-lg font-extrabold tracking-tight">InterLink</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Activating marketplace trading, escrow and free mobile mining for the next billion
              people.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title} id={col.title.toLowerCase()}>
              <p className="text-sm font-bold tracking-wide">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#top"
                      className="text-sm text-white/60 transition-colors hover:text-primary-soft"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs text-white/45">
          © {new Date().getFullYear()} InterLink. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
