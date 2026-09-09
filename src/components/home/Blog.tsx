import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import feature from "@/assets/blog-nyse.jpg";

export function Blog() {
  return (
    <section id="blog" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Blog</p>
          <h2 className="mt-4 text-[1.7rem] font-extrabold tracking-tight text-foreground sm:text-[2rem] lg:text-[2.6rem]">
            Latest releases.
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <article className="group grid overflow-hidden rounded-[28px] border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-float lg:grid-cols-2">
            <div className="relative aspect-16/10 overflow-hidden">
              <span className="absolute left-5 top-5 z-10 rounded-full bg-destructive px-3 py-1 text-xs font-extrabold tracking-wide text-white">
                HOT
              </span>
              <img
                src={feature}
                alt="New York Stock Exchange building at golden hour"
                loading="lazy"
                width={1280}
                height={800}
                className="size-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 p-6 sm:p-8 lg:p-12">
              <h3 className="text-xl font-bold leading-snug tracking-tight text-foreground sm:text-2xl">
                Why InterLink is targeting the NYSE — not just crypto hype
              </h3>
              <p className="text-sm font-semibold text-muted-foreground">Sep 3, 2025</p>
              <a
                href="#download"
                className="inline-flex items-center gap-1 text-sm font-bold text-primary"
              >
                See more
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
