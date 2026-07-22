import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
}

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-950 pt-[72px]">
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-600/30 blur-3xl" />
      <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-emerald2-500/15 blur-3xl" />
      {image && (
        <img
          src={image}
          alt=""
          className="pointer-events-none absolute -right-10 bottom-0 hidden w-[380px] opacity-30 lg:block"
        />
      )}
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <Reveal>
          <nav className="flex items-center gap-1.5 text-[13px] text-white/50">
            <Link to="/" className="transition-colors hover:text-white">
              首頁
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-semibold text-emerald2-300">{title}</span>
          </nav>
          <p className="mt-6 text-xs font-bold tracking-[0.3em] text-emerald2-400 uppercase">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">{title}</h1>
          {description && <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65">{description}</p>}
        </Reveal>
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-emerald2-500 to-transparent" />
    </section>
  );
}
