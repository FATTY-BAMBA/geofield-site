import { Link } from "react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Service } from "@/data/site";
import { cn } from "@/lib/utils";

export function ServiceCard({ service, detailed = false }: { service: Service; detailed?: boolean }) {
  return (
    <div
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-sand-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-12px_rgba(13,59,76,0.25)] hover:ring-emerald2-500/40"
      )}
    >
      {/* Keep the service label outside the artwork's visual safe area. */}
      <div className="flex min-h-12 shrink-0 items-center border-b border-sand-200 bg-sand-50/90 px-5">
        <span className="text-[11px] font-extrabold tracking-[0.14em] text-brand-800 uppercase">
          {service.english}
        </span>
      </div>

      {/* Visual */}
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

      {/* Body */}
      <div className="flex flex-1 flex-col p-6 pt-5">
        <h3 className="text-lg font-bold text-brand-900">{service.title}</h3>
        <p className="editorial-copy mt-2 text-[15px] text-slate-600">{service.desc}</p>

        {detailed && (
          <ul className="mt-4 space-y-2.5 border-t border-sand-200 pt-4">
            {service.points.map((pt) => (
              <li key={pt} className="flex items-start gap-2 text-[15px] leading-[1.75] text-slate-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald2-500" />
                {pt}
              </li>
            ))}
          </ul>
        )}

        <Link
          to="/contact"
          className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-emerald2-600 transition-colors hover:text-emerald2-500"
        >
          洽詢此服務
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
