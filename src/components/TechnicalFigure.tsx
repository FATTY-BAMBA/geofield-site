import { Maximize2, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface TechnicalFigureProps {
  src: string;
  alt: string;
  caption?: string;
  label?: string;
  fit?: "cover" | "contain";
  className?: string;
  mediaClassName?: string;
  imageClassName?: string;
  loading?: "eager" | "lazy";
}

export function TechnicalFigure({
  src,
  alt,
  caption,
  label,
  fit = "contain",
  className,
  mediaClassName,
  imageClassName,
  loading = "lazy",
}: TechnicalFigureProps) {
  return (
    <Dialog>
      <figure className={cn("overflow-hidden rounded-2xl bg-white ring-1 ring-sand-200", className)}>
        <DialogTrigger asChild>
          <button
            type="button"
            className={cn(
              "group relative block w-full overflow-hidden bg-sand-50 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald2-500 focus-visible:ring-inset",
              mediaClassName
            )}
            aria-label={`放大查看：${alt}`}
          >
            <div className="absolute inset-0 bg-grid-light opacity-60" />
            <img
              src={src}
              alt={alt}
              loading={loading}
              className={cn(
                "relative h-full w-full transition-transform duration-500 group-hover:scale-[1.015]",
                fit === "contain" ? "object-contain" : "object-cover",
                imageClassName
              )}
            />
            {label && (
              <span className="absolute top-4 left-4 rounded-full bg-brand-950/90 px-3 py-1.5 text-xs font-bold tracking-[0.12em] text-emerald2-300 uppercase backdrop-blur">
                {label}
              </span>
            )}
            <span className="absolute right-4 bottom-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-950/85 text-white opacity-0 shadow-lg backdrop-blur transition-all group-hover:opacity-100 group-focus-visible:opacity-100">
              <Maximize2 className="h-4 w-4" />
            </span>
          </button>
        </DialogTrigger>
        {caption && <figcaption className="px-5 py-4 text-sm leading-relaxed text-slate-500">{caption}</figcaption>}
      </figure>

      <DialogContent
        showCloseButton={false}
        className="max-h-[94vh] max-w-[min(96vw,1500px)] gap-0 overflow-hidden border-white/10 bg-brand-950 p-3 text-white shadow-2xl sm:rounded-2xl sm:p-4"
      >
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <DialogDescription className="sr-only">{caption ?? alt}</DialogDescription>
        <DialogClose asChild>
          <button
            type="button"
            aria-label="關閉圖片"
            className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-brand-950/85 text-white shadow-lg backdrop-blur transition-colors hover:bg-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald2-400"
          >
            <X className="h-5 w-5" />
          </button>
        </DialogClose>
        <img src={src} alt={alt} className="max-h-[82vh] w-full rounded-xl object-contain" />
        {caption && <p className="px-3 pt-3 pb-1 text-center text-sm leading-relaxed text-white/70">{caption}</p>}
      </DialogContent>
    </Dialog>
  );
}
