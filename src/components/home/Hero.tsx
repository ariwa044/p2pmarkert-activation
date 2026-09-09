import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-marketplace.jpg";

const locations = [
  { flag: "🇳🇬", city: "Lagos, Nigeria" },
  { flag: "🇨🇦", city: "Montreal, Canada" },
  { flag: "🇩🇪", city: "Neu-Isenburg, Germany" },
  { flag: "🇰🇪", city: "Nairobi, Kenya" },
  { flag: "🇮🇳", city: "Mumbai, India" },
  { flag: "🇧🇷", city: "São Paulo, Brazil" },
];

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % locations.length), 3200);
    return () => clearInterval(t);
  }, []);

  const loc = locations[i] ?? locations[0]!;

  return (
    <section id="top" className="relative min-h-[560px] w-full overflow-hidden bg-ink h-[82vh] sm:h-[88vh] sm:min-h-[620px] lg:h-[92vh]">
      <img
        src={heroImage}
        alt="People trading in a busy street marketplace"
        width={1920}
        height={1088}
        className="absolute inset-0 size-full animate-ken-burns object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/25" />

      <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-center px-5 pt-24 lg:px-10">
        <div
          key={i}
          className="absolute right-4 top-20 flex animate-fade-in items-center gap-2 rounded-full bg-ink/55 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md sm:right-5 sm:top-24 sm:px-4 sm:py-2 sm:text-sm lg:right-10 lg:top-28"
        >
          <span aria-hidden="true">{loc.flag}</span>
          {loc.city}
        </div>

        <h1 className="max-w-[16ch] animate-rise text-[1.7rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[2.6rem] lg:text-[3.6rem]">
          Activating Marketplace on your Interlink Wallet allows you to securely trade your ITG
          assets with other, using Interlink Escrow services
        </h1>

        <div className="mt-7 flex flex-wrap gap-3 animate-rise [animation-delay:180ms] [animation-fill-mode:both] sm:mt-9">
          <a
            href="#download"
            className="inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white shadow-float transition-transform duration-300 hover:-translate-y-1 sm:px-9 sm:py-4"
          >
            Download
          </a>
          <Link
            to="/mine"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-emerald-600 shadow-float transition-transform duration-300 hover:-translate-y-1 lg:hidden"
          >
            <span className="size-5 animate-spin-coin rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600" />
            Activate Marketplace
          </Link>
        </div>

        <Link
          to="/mine"
          className="absolute left-1/2 top-1/2 hidden -translate-y-16 animate-float items-center gap-3 rounded-full bg-white px-6 py-4 shadow-float transition-transform duration-300 hover:-translate-y-20 lg:flex"
        >
          <span className="size-7 animate-spin-coin rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 shadow-inner" />
          <span className="text-lg font-extrabold text-emerald-600">$ITL Activate Marketplace</span>
        </Link>

      </div>
    </section>
  );
}
