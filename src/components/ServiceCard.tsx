import { Link } from "react-router";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  DraftingCompass,
  FileCheck2,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/data/site";
import { cn } from "@/lib/utils";

const serviceVisuals: Record<NonNullable<Service["visual"]>, { icon: LucideIcon; label: string }> = {
  planning: { icon: FileCheck2, label: "工程計畫與審查文件" },
  design: { icon: DraftingCompass, label: "規劃與設計成果" },
  supervision: { icon: ClipboardCheck, label: "施工查驗與品質管理" },
};

export function ServiceCard({ service, detailed = false }: { service: Service; detailed?: boolean }) {
  const visual = service.visual ? serviceVisuals[service.visual] : null;
  const VisualIcon = visual?.icon;

  return (
    <div
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-sand-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-12px_rgba(13,59,76,0.25)] hover:ring-emerald2-500/40"
      )}
    >
      {/* Keep the service label outside the artwork's visual safe area. */}
      <div className="flex h-14 shrink-0 items-center border-b border-sand-200 bg-sand-50/90 px-5">
        <span className="text-sm font-extrabold leading-[1.35] tracking-[0.08em] text-brand-800 uppercase">
          {service.english}
        </span>
      </div>

      {/* Visual */}
      {service.image ? (
        <div className="technical-media relative h-52 overflow-hidden">
          <div className="absolute inset-0 bg-grid-light opacity-45" />
          <div className="absolute inset-x-16 bottom-3 h-10 rounded-full bg-brand-900/12 blur-2xl" />
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="relative h-full w-full object-contain p-5 drop-shadow-[0_16px_14px_rgba(7,35,46,0.18)] transition-transform duration-500 group-hover:scale-[1.025] sm:p-6"
          />
        </div>
      ) : visual && VisualIcon ? (
        <div className="technical-media relative flex h-52 items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-light opacity-45" />
          <div className="absolute h-36 w-36 rounded-full bg-white/75 ring-1 ring-brand-100 transition-transform duration-500 group-hover:scale-105" />
          <div className="relative flex flex-col items-center text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-900 text-emerald2-300 shadow-xl shadow-brand-900/20">
              <VisualIcon className="h-8 w-8" />
            </span>
            <p className="mt-4 text-sm font-bold tracking-[0.08em] text-brand-800">{visual.label}</p>
          </div>
        </div>
      ) : null}

      {/* Body */}
      <div className="flex flex-1 flex-col p-6 pt-5">
        <h3 className="text-xl font-bold text-brand-900">{service.title}</h3>
        <p className="editorial-copy mt-2 text-base text-slate-600">{service.desc}</p>

        {detailed && (
          <ul className="mt-4 space-y-2.5 border-t border-sand-200 pt-4">
            {service.points.map((pt) => (
              <li key={pt} className="flex items-start gap-2 text-base leading-[1.75] text-slate-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald2-500" />
                {pt}
              </li>
            ))}
          </ul>
        )}

        <Link
          to="/contact"
          className="mt-auto inline-flex min-h-11 items-center gap-1.5 pt-5 text-base font-bold text-emerald2-600 transition-colors hover:text-emerald2-500"
        >
          洽詢此服務
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
