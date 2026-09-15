import { useState } from "react";
import { projects, type ProjectCategory } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";

const categories: ProjectCategory[] = ["鑽探", "隧道", "監造", "設計", "邊坡"];

export default function Projects() {
  const [cat, setCat] = useState<ProjectCategory>("鑽探");
  const filtered = projects.filter((project) => project.category === cat);

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="工程實績"
        description="依服務範圍整理鑽探調查、隧道檢測、施工監造、公共工程設計與邊坡工程等代表性實績；已完成資料整理的項目可進一步查看案例內容。"
        image="/images/service-cutouts/svc-slope.webp"
      />

      <section className="bg-sand-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2.5" aria-label="工程實績分類">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setCat(category)}
                  aria-pressed={cat === category}
                  className={cn(
                    "min-h-11 rounded-full px-5 py-2.5 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald2-500 focus-visible:ring-offset-2",
                    cat === category
                      ? "bg-brand-900 text-white shadow-lg"
                      : "bg-white text-brand-900 ring-1 ring-sand-200 hover:ring-brand-900/30"
                  )}
                >
                  {category}
                  <span
                    className={cn(
                      "ml-1.5 text-xs",
                      cat === category ? "text-emerald2-300" : "text-slate-400"
                    )}
                  >
                    {projects.filter((project) => project.category === category).length}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, index) => (
              <Reveal key={project.title} delay={0.05 * (index % 6)} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
