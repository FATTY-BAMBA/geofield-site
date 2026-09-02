import { useState } from "react";
import { projects, type ProjectCategory } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";

// 由資料自動產生分類，日後新增分類無須再改這裡
const categories: Array<"全部" | ProjectCategory> = [
  "全部",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export default function Projects() {
  const [cat, setCat] = useState<(typeof categories)[number]>("全部");
  const filtered = cat === "全部" ? projects : projects.filter((p) => p.category === cat);

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="工程實績"
        description="整理鑽探調查、邊坡工程、水保監造與隧道檢測等代表性實績；已完成資料整理的項目可進一步查看案例內容。"
        image="/images/service-cutouts/svc-slope.webp"
      />

      <section className="bg-sand-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2.5">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-sm font-bold transition-all",
                    cat === c
                      ? "bg-brand-900 text-white shadow-lg"
                      : "bg-white text-brand-900 ring-1 ring-sand-200 hover:ring-brand-900/30"
                  )}
                >
                  {c}
                  <span className={cn("ml-1.5 text-xs", cat === c ? "text-emerald2-300" : "text-slate-400")}>
                    {c === "全部" ? projects.length : projects.filter((p) => p.category === c).length}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.title} delay={0.05 * (i % 6)} className="h-full">
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
