import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const ecosystem = [
  { label: "Interlink App", href: "#app" },
  { label: "ITLX Wallet", href: "#wallet" },
  { label: "InterlinkChain", href: "#chain" },
];
const community = [
  { label: "Ambassador", href: "#community" },
  { label: "Creator", href: "#community" },
  { label: "Campaign", href: "#community" },
];
const resource = [
  { label: "Foundation", href: "#resource" },
  { label: "Whitepaper", href: "#resource" },
  { label: "Treasury company", href: "#resource" },
];

function Dropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 py-2 text-[0.95rem] font-medium text-foreground/80 transition-colors hover:text-primary">
        {label}
        <ChevronDown className="size-4 transition-transform duration-300 group-hover:rotate-180" />
      </button>
      <div className="pointer-events-none absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 translate-y-2 rounded-2xl border border-border bg-popover p-2 opacity-0 shadow-float transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
        {items.map((i) => (
          <a
            key={i.label}
            href={i.href}
            className="block rounded-xl px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
          >
            {i.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-background/85 shadow-soft backdrop-blur-xl" : "bg-background"
      }`}
    >
      <nav className="mx-auto flex h-[64px] max-w-[1400px] items-center justify-between gap-2 px-4 sm:h-[76px] sm:px-5 lg:px-10">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="grid size-8 shrink-0 place-items-center rounded-[10px] bg-gradient-brand text-primary-foreground shadow-glow">
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
          <span className="truncate text-lg font-extrabold tracking-tight text-primary">InterLink</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          <a
            href="#credibility"
            className="py-2 text-[0.95rem] font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            About
          </a>
          <Dropdown label="Ecosystem" items={ecosystem} />
          <a
            href="#blog"
            className="py-2 text-[0.95rem] font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Blog
          </a>
          <Dropdown label="Community" items={community} />
          <Dropdown label="Resource" items={resource} />
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href="#download"
            className="rounded-full bg-gradient-brand px-4 py-2.5 text-xs font-bold text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5 sm:px-6 sm:py-3 sm:text-sm"
          >
            Get the app
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 shrink-0 place-items-center rounded-full border border-border text-foreground sm:size-10 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="animate-fade-in border-t border-border bg-background px-5 pb-6 pt-3 lg:hidden">
          {[
            { label: "About", href: "#credibility" },
            ...ecosystem,
            { label: "Blog", href: "#blog" },
            ...community,
            ...resource,
          ].map((i) => (
            <a
              key={i.label}
              href={i.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 text-base font-medium text-foreground/85"
            >
              {i.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
