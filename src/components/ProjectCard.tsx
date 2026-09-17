import { Link } from "react-router";
import { ArrowRight, CalendarDays } from "lucide-react";
import { categoryImages, type Project } from "@/data/site";

const categoryStyles: Record<string, string> = {
  設計: "bg-amber-50/95 text-amber-800",
  鑽探: "bg-brand-900/90 text-emerald2-300",
  邊坡: "bg-emerald2-600/90 text-white",
  監造: "bg-white/90 text-brand-900",
  隧道: "bg-emerald2-700/95 text-white",
};

export function ProjectCard({ project }: { project: Project }) {
  const hasDetail = Boolean(project.detail);
  const isImageRecord = project.detail?.contentStatus === "image-record";
  const coverImage =
    project.cardImage ?? project.detail?.cardImage ?? project.detail?.heroImage ?? categoryImages[project.category];
  const coverFit = project.cardImageFit ?? project.detail?.cardImageFit ?? (hasDetail ? "cover" : "contain");
  const usesTechnicalBackdrop = coverFit === "contain";
  const yearLabel = project.rocYear
    ? project.rocYearEnd
      ? `民國${project.rocYear}–${project.rocYearEnd}年 · ${project.rocYear + 1911}–${project.rocYearEnd + 1911}`
      : `民國${project.rocYear}年 · ${project.rocYear + 1911}`
    : null;
  const scopeLabels: Record<string, string> = {
    設計: "公共工程規劃設計",
    鑽探: "地基與地質調查",
    邊坡: "邊坡治理與防災",
    監造: "公共工程監造",
    隧道: "隧道檢測與評估",
  };

  const inner = (
    <>
      {usesTechnicalBackdrop ? (
        <>
          <div className="flex min-h-11 shrink-0 items-center border-b border-sand-200 bg-sand-50/90 px-5">
            <span className="text-caption font-extrabold tracking-[0.08em] text-emerald2-700">
              {project.category}
            </span>
          </div>
          <div className="technical-media relative h-52 overflow-hidden">
            <div className="absolute inset-0 bg-grid-light opacity-45" />
            <div className="absolute inset-x-16 bottom-3 h-10 rounded-full bg-brand-900/12 blur-2xl" />
            <img
              src={coverImage}
              alt={hasDetail ? project.title : project.category}
              loading="lazy"
              className="relative h-full w-full object-contain p-5 drop-shadow-[0_16px_14px_rgba(7,35,46,0.18)] transition-transform duration-700 group-hover:scale-[1.025] sm:p-6"
            />
          </div>
        </>
      ) : (
        <div className="relative h-56 overflow-hidden bg-brand-950">
          <>
            <img
              src={coverImage}
              alt={project.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/45 via-transparent to-transparent" />
            <span
              className={`absolute top-4 left-4 z-20 rounded-full px-3 py-1 text-caption font-bold shadow-sm backdrop-blur ${categoryStyles[project.category]}`}
            >
              {project.category}
            </span>
          </>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-caption font-bold tracking-wide text-slate-600">
          {yearLabel && <CalendarDays className="h-3.5 w-3.5 text-emerald2-500" />}
          <span>{yearLabel ?? scopeLabels[project.category]}</span>
        </div>
        <h3 className="editorial-heading mt-3 text-xl font-bold leading-[1.55] lg:text-2xl text-brand-900 transition-colors group-hover:text-emerald2-600">
          {project.title}
        </h3>
        <div className="mt-auto pt-6">
          {hasDetail ? (
            <span className="action-button action-primary w-full">
              {isImageRecord ? "查看工程影像" : "查看完整案例"}
              <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
            </span>
          ) : (
            <p className="border-t border-sand-200 pt-4 text-caption text-slate-600">工程實績</p>
          )}
        </div>
      </div>
    </>
  );

  const shell =
    "group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-sand-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(13,59,76,0.2)] hover:ring-brand-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-4";

  // 已建立詳細內容者才連結至內頁；其餘維持原本的靜態卡片。
  return hasDetail ? (
    <Link to={`/projects/${project.slug}`} className={shell}>
      {inner}
    </Link>
  ) : (
    <div className={shell}>{inner}</div>
  );
}
