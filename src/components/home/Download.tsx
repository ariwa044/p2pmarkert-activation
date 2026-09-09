import { Apple, Play, PackageOpen } from "lucide-react";
import { Reveal } from "./Reveal";
import phone from "@/assets/cta-phone.png";

const stores = [
  { icon: Apple, label: "App Store" },
  { icon: Play, label: "Google Play" },
  { icon: PackageOpen, label: "APK Pure" },
];

export function Download() {
  return (
    <section id="download" className="bg-surface py-16 sm:py-24">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 sm:gap-12 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Get started</p>
          <h2 className="mt-4 max-w-[14ch] text-[1.7rem] font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-[2rem] lg:text-[2.9rem]">
            Start earning digital asset for free today.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            Mining is free and secure with InterLink. Join the network using an invite code from a
            member.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {stores.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="https://p2pinterlink.com/p2/mine"
                className="flex items-center gap-3 rounded-2xl bg-ink px-6 py-4 text-sm font-bold text-white shadow-soft transition-transform duration-300 hover:-translate-y-1"
              >
                <Icon className="size-5" />
                {label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto max-w-sm">
            <div className="absolute inset-8 rounded-full bg-gradient-brand opacity-30 blur-3xl animate-pulse-glow" />
            <img
              src={phone}
              alt="InterLink app on a smartphone"
              loading="lazy"
              width={1024}
              height={1280}
              className="relative w-full animate-float-slow drop-shadow-2xl"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
