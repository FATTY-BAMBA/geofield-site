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
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <div className={cn("flex items-center gap-3.5", align === "center" && "justify-center")}>
        <span className="h-[3px] w-10 rounded-full bg-emerald2-500" />
        <span className="text-[13px] font-extrabold leading-[1.4] tracking-[0.18em] text-emerald2-500 uppercase md:text-sm">
          {eyebrow}
        </span>
      </div>
      <h2
        className={cn(
          "editorial-heading mt-4 text-3xl font-extrabold leading-[1.22] md:text-4xl",
          dark ? "text-white" : "text-brand-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("editorial-copy mt-4 text-base md:text-[17px]", dark ? "text-white/70" : "text-slate-600")}>
          {description}
        </p>
      )}
    </div>
  );
}
