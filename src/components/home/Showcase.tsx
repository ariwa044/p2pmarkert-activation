import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import free from "@/assets/showcase-free.jpg";
import builders from "@/assets/showcase-builders.jpg";
import recognized from "@/assets/showcase-recognized.jpg";
import cash from "@/assets/showcase-cash.jpg";

const cards = [
  {
    img: free,
    title: "Free. No battery drain. Accumulate digital assets daily.",
    body: "One tap to mine anytime. No hardware, no setup — just your phone and a few seconds a day.",
  },
  {
    img: builders,
    title: "Backed by builders who ship.",
    body: "This spot is reserved for your real partners, investors, or press mentions once you have them.",
  },
  {
    img: recognized,
    title: "Recognized where it matters.",
    body: "Swap this card for a real listing, award, or press mention as soon as you've earned one.",
  },
  {
    img: cash,
    title: "Cash out through real payment rails.",
    body: "Whatever top-up and withdrawal partners you connect will show here.",
  },
];

export function Showcase() {
  return (
    <section className="bg-surface py-14 sm:py-20">
      <div className="mx-auto grid max-w-[1400px] gap-5 px-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:px-10">
        {cards.map((c, idx) => (
          <Reveal key={c.title} delay={idx * 90}>
            <article className="group h-full overflow-hidden rounded-[26px] border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-float">
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="size-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold leading-snug tracking-tight text-foreground">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                <a
                  href="#download"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-primary"
                >
                  See more
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
