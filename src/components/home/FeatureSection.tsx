import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function FeatureSection({
  id,
  eyebrow,
  title,
  body,
  bullets,
  image,
  imageAlt,
  reverse = false,
  dark = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-24", dark ? "bg-ink text-white" : "bg-background text-foreground")}
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 sm:gap-14 lg:grid-cols-2 lg:px-10">
        <Reveal className={cn(reverse && "lg:order-2")}>
          <p
            className={cn(
              "text-sm font-bold uppercase tracking-[0.2em]",
              dark ? "text-primary-soft" : "text-primary",
            )}
          >
            {eyebrow}
          </p>
          <h2 className="mt-4 max-w-[15ch] text-[1.7rem] font-extrabold leading-[1.1] tracking-tight sm:text-[2rem] lg:text-[2.9rem]">
            {title}
          </h2>
          <p
            className={cn(
              "mt-5 max-w-lg text-base leading-relaxed",
              dark ? "text-white/70" : "text-muted-foreground",
            )}
          >
            {body}
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm font-semibold">
                <span
                  className={cn(
                    "grid size-6 shrink-0 place-items-center rounded-full",
                    dark ? "bg-white/10 text-primary-soft" : "bg-accent text-primary",
                  )}
                >
                  <Check className="size-3.5" />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <a
            href="#download"
            className="mt-9 inline-flex rounded-full bg-gradient-brand px-8 py-4 text-sm font-bold text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-1"
          >
            Learn more
          </a>
        </Reveal>

        <Reveal delay={120} className={cn(reverse && "lg:order-1")}>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-brand opacity-20 blur-3xl animate-pulse-glow" />
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              width={1200}
              height={1200}
              className="relative w-full animate-float-slow rounded-[32px] object-cover shadow-float"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
