import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeading({ eyebrow, title, description, align = "left", dark = false }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
        <span className="h-[3px] w-9 rounded-full bg-emerald2-500" />
        <span className="text-xs font-bold tracking-[0.25em] text-emerald2-500 uppercase">{eyebrow}</span>
      </div>
      <h2
        className={cn(
          "mt-4 text-3xl md:text-4xl font-black leading-tight tracking-tight",
          dark ? "text-white" : "text-brand-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed", dark ? "text-white/65" : "text-slate-500")}>
          {description}
        </p>
      )}
    </div>
  );
}
