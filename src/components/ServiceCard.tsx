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
      {/* Visual */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-sand-50 via-sand-100 to-brand-100">
        <div className="absolute inset-0 bg-grid-light" />
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="relative h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.06]"
        />
        <span className="absolute top-4 left-4 rounded-full bg-brand-950/85 px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-emerald2-300 uppercase backdrop-blur">
          {service.english}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-brand-900">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">{service.desc}</p>

        {detailed && (
          <ul className="mt-4 space-y-2.5 border-t border-sand-200 pt-4">
            {service.points.map((pt) => (
              <li key={pt} className="flex items-start gap-2 text-[13px] leading-relaxed text-slate-600">
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
