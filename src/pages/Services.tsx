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
        description="依工程流程整合現地調查、規劃設計、施工監造、檢測評估及長期安全監測。"
        image="/images/service-cutouts/svc-hydro.webp"
      />

      <section className="bg-sand-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="mb-10 max-w-3xl border-l-4 border-emerald2-500 pl-5">
              <h2 className="text-2xl font-extrabold text-brand-900">六大類別，涵蓋多項工程技術服務</h2>
              <p className="editorial-copy mt-3 text-base text-slate-600 md:text-[17px]">
                下列分類用於快速找到對應能力，並不代表每個領域只有單一服務。點選分類後，可查看該領域的主要工作內容與應用範圍。
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={() => setFilter("all")}
                aria-pressed={filter === "all"}
                className={cn(
                  "min-h-11 rounded-full px-5 py-2.5 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald2-500 focus-visible:ring-offset-2",
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
                  aria-pressed={filter === s.id}
                  className={cn(
                    "min-h-11 rounded-full px-5 py-2.5 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald2-500 focus-visible:ring-offset-2",
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
