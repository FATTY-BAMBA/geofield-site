import { useState } from "react";
import { services } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { cn } from "@/lib/utils";

export default function Services() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? services : services.filter((s) => s.id === filter);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="服務項目"
        description="六大專業領域涵蓋工程全生命週期——從地質調查、設計分析，到施工監造與長期安全監測。"
        image="/images/svc-hydro.png"
      />

      <section className="bg-sand-50 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={() => setFilter("all")}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-bold transition-all",
                  filter === "all"
                    ? "bg-brand-900 text-white shadow-lg"
                    : "bg-white text-brand-900 ring-1 ring-sand-200 hover:ring-brand-900/30"
                )}
              >
                全部領域
              </button>
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setFilter(s.id)}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-sm font-bold transition-all",
                    filter === s.id
                      ? "bg-brand-900 text-white shadow-lg"
                      : "bg-white text-brand-900 ring-1 ring-sand-200 hover:ring-brand-900/30"
                  )}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s, i) => (
              <Reveal key={s.id} delay={0.05 * i} className="h-full">
                <ServiceCard service={s} detailed />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
