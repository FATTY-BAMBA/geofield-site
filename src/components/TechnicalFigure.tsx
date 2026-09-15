import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
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
  labelPlacement?: "overlay" | "header";
  fit?: "cover" | "contain";
  className?: string;
  mediaClassName?: string;
  imageClassName?: string;
  loading?: "eager" | "lazy";
  gallery?: Array<{
    src: string;
    alt: string;
    caption?: string;
    fit?: "cover" | "contain";
  }>;
  initialIndex?: number;
}

export function TechnicalFigure({
  src,
  alt,
  caption,
  label,
  labelPlacement = "overlay",
  fit = "contain",
  className,
  mediaClassName,
  imageClassName,
  loading = "lazy",
  gallery,
  initialIndex = 0,
}: TechnicalFigureProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const hasGallery = Boolean(gallery && gallery.length > 1);
  const activeItem = gallery?.[activeIndex] ?? { src, alt, caption, fit };

  const move = (direction: number) => {
    if (!gallery?.length) return;
    setActiveIndex((current) => (current + direction + gallery.length) % gallery.length);
  };

  return (
    <Dialog onOpenChange={(open) => open && setActiveIndex(initialIndex)}>
      <figure className={cn("overflow-hidden rounded-2xl bg-white ring-1 ring-sand-200", className)}>
        {label && labelPlacement === "header" && (
          <div className="border-b border-sand-200 px-1 pt-1 pb-3">
            <span className="text-xs font-bold tracking-[0.18em] text-emerald2-600 uppercase">
              {label}
            </span>
          </div>
        )}
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
            {label && labelPlacement === "overlay" && (
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
        style={{ width: "min(96vw, 1600px)", maxWidth: "none" }}
        className="max-h-[96vh] w-[min(96vw,1600px)] max-w-none gap-0 overflow-hidden border-white/10 bg-brand-950 p-3 text-white shadow-2xl sm:max-w-none sm:rounded-2xl sm:p-4"
        onKeyDown={(event) => {
          if (!hasGallery) return;
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
          }
        }}
      >
        <DialogTitle className="sr-only">{activeItem.alt}</DialogTitle>
        <DialogDescription className="sr-only">{activeItem.caption ?? activeItem.alt}</DialogDescription>
        <DialogClose asChild>
          <button
            type="button"
            aria-label="關閉圖片"
            className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-brand-950/85 text-white shadow-lg backdrop-blur transition-colors hover:bg-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald2-400"
          >
            <X className="h-5 w-5" />
          </button>
        </DialogClose>
        <div className="relative flex min-h-0 items-center justify-center overflow-hidden rounded-xl">
          <img src={activeItem.src} alt={activeItem.alt} className="mx-auto max-h-[80vh] max-w-full rounded-xl object-contain" />
          {hasGallery && (
            <>
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="查看上一張圖片"
                className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full bg-brand-950/85 text-white shadow-lg backdrop-blur transition-colors hover:bg-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald2-400 sm:left-4"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="查看下一張圖片"
                className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full bg-brand-950/85 text-white shadow-lg backdrop-blur transition-colors hover:bg-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald2-400 sm:right-4"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>
        {hasGallery && (
          <p className="px-3 pt-3 text-center text-xs font-bold tracking-wider text-emerald2-300">
            {activeIndex + 1} / {gallery?.length}
          </p>
        )}
        {activeItem.caption && (
          <p className="px-3 pt-2 pb-1 text-center text-sm leading-relaxed text-white/70">{activeItem.caption}</p>
        )}
      </DialogContent>
    </Dialog>
  );
}
