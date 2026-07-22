import { Images } from "lucide-react";
import { categoryImages, type Project } from "@/data/site";

const categoryStyles: Record<string, string> = {
  鑽探: "bg-brand-900/90 text-emerald2-300",
  邊坡: "bg-emerald2-600/90 text-white",
  監造: "bg-white/90 text-brand-900",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-sand-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-12px_rgba(13,59,76,0.25)]">
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-sand-50 via-sand-100 to-brand-100">
        <div className="absolute inset-0 bg-grid-light" />
        <img
          src={categoryImages[project.category]}
          alt={project.category}
          loading="lazy"
          className="relative h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.06]"
        />
        <span
          className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-bold backdrop-blur ${categoryStyles[project.category]}`}
        >
          {project.category}
        </span>
        <span className="absolute right-4 bottom-4 inline-flex items-center gap-1.5 rounded-full bg-brand-950/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          <Images className="h-3.5 w-3.5" />
          {project.photoCount} 張
        </span>
      </div>
      <div className="flex flex-1 items-center p-5">
        <h3 className="text-[15px] font-bold leading-snug text-brand-900 transition-colors group-hover:text-emerald2-600">
          {project.title}
        </h3>
      </div>
    </div>
  );
}
