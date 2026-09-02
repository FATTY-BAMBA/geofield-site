import { Link } from "react-router";
import { ArrowRight, CalendarDays } from "lucide-react";
import { categoryImages, type Project } from "@/data/site";

const categoryStyles: Record<string, string> = {
  鑽探: "bg-brand-900/90 text-emerald2-300",
  邊坡: "bg-emerald2-600/90 text-white",
  監造: "bg-white/90 text-brand-900",
  隧道: "bg-emerald2-500/90 text-white",
};

export function ProjectCard({ project }: { project: Project }) {
  const hasDetail = Boolean(project.detail);
  const coverImage = project.detail?.heroImage ?? categoryImages[project.category];
  const rocYear = project.title.match(/^(\d{2,3})年度/)?.[1];
  const yearLabel = rocYear ? `民國${rocYear}年 · ${Number(rocYear) + 1911}` : null;
  const scopeLabels: Record<string, string> = {
    鑽探: "地基與地質調查",
    邊坡: "邊坡治理與防災",
    監造: "公共工程監造",
    隧道: "隧道檢測與評估",
  };

  const inner = (
    <>
      <div className={`relative h-52 overflow-hidden ${hasDetail ? "bg-brand-950" : "technical-media"}`}>
        {!hasDetail && <div className="absolute inset-0 bg-grid-light opacity-45" />}
        {!hasDetail && <div className="absolute inset-x-14 bottom-2 h-12 rounded-full bg-brand-900/15 blur-2xl" />}
        <img
          src={coverImage}
          alt={hasDetail ? project.title : project.category}
          loading="lazy"
          className={`relative h-full w-full transition-transform duration-700 group-hover:scale-[1.035] ${
            hasDetail
              ? "object-cover"
              : "z-10 object-contain p-3 drop-shadow-[0_18px_16px_rgba(7,35,46,0.2)]"
          }`}
        />
        {hasDetail && <div className="absolute inset-0 bg-gradient-to-t from-brand-950/45 via-transparent to-transparent" />}
        <span
          className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-bold backdrop-blur ${categoryStyles[project.category]}`}
        >
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs font-bold tracking-wide text-slate-400">
          {yearLabel && <CalendarDays className="h-3.5 w-3.5 text-emerald2-500" />}
          <span>{yearLabel ?? scopeLabels[project.category]}</span>
        </div>
        <h3 className="editorial-heading mt-3 text-[17px] font-bold leading-[1.55] text-brand-900 transition-colors group-hover:text-emerald2-600">
          {project.title}
        </h3>
        <div className="mt-auto flex items-center justify-between border-t border-sand-200 pt-5 text-sm font-bold">
          <span className={hasDetail ? "text-emerald2-600" : "text-slate-400"}>
            {hasDetail ? "查看完整案例" : "工程實績"}
          </span>
          {hasDetail && (
            <ArrowRight className="h-4 w-4 shrink-0 text-emerald2-500 transition-transform group-hover:translate-x-1" />
          )}
        </div>
      </div>
    </>
  );

  const shell =
    "group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-sand-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(13,59,76,0.2)] hover:ring-brand-200";

  // 已建立詳細內容者才連結至內頁；其餘維持原本的靜態卡片。
  return hasDetail ? (
    <Link to={`/projects/${project.slug}`} className={shell}>
      {inner}
    </Link>
  ) : (
    <div className={shell}>{inner}</div>
  );
}
