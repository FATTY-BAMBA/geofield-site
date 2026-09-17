import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { homeHeroSlides } from "@/data/home";
import { cn } from "@/lib/utils";

const SLIDE_INTERVAL = 6000;
const controlClass = "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald2-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950";

export function HeroSlideshow() {
  const container = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(true);
  const [pageVisible, setPageVisible] = useState(() => !document.hidden);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) setPaused(true);
    };
    const onVisibilityChange = () => setPageVisible(!document.hidden);
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (container.current) observer.observe(container.current);
    media.addEventListener("change", onMotionChange);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", onMotionChange);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (paused || hovered || !inView || !pageVisible) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % homeHeroSlides.length);
    }, SLIDE_INTERVAL);
    return () => window.clearInterval(timer);
  }, [paused, hovered, inView, pageVisible]);

  const move = (direction: number) => {
    setPaused(true);
    setIndex((current) => (current + direction + homeHeroSlides.length) % homeHeroSlides.length);
  };

  return (
    <div
      ref={container}
      role="region"
      aria-label="精選工程與活動影像"
      aria-roledescription="輪播"
      className="relative mx-auto w-full max-w-[560px]"
      onPointerEnter={(event) => event.pointerType === "mouse" && setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onFocusCapture={(event) => {
        if (!event.target.closest("[data-playback-control]")) setPaused(true);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
    >
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-emerald2-500/20 via-transparent to-brand-600/30 blur-2xl" />
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-brand-950 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/20">
        {homeHeroSlides.map((slide, slideIndex) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            width={slide.width}
            height={slide.height}
            aria-hidden={slideIndex !== index}
            loading={slideIndex === 0 ? "eager" : "lazy"}
            fetchPriority={slideIndex === 0 ? "high" : "low"}
            decoding="async"
            className={cn(
              "absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out motion-reduce:transition-none",
              slide.fit === "contain" ? "object-contain" : "object-cover",
              slideIndex === index ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
      </div>

      {/* Controls stay outside the image so the photographs remain unobstructed. */}
      <div className="relative mt-4 flex items-center justify-between gap-2 max-[359px]:flex-wrap max-[359px]:justify-center">
        <button type="button" className={controlClass} onClick={() => move(-1)} aria-label="上一張精選影像">
          <ChevronLeft aria-hidden="true" className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-1 max-[359px]:order-first max-[359px]:w-full max-[359px]:justify-center" role="group" aria-label="選擇精選影像">
          {homeHeroSlides.map((slide, slideIndex) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`顯示第 ${slideIndex + 1} 張：${slide.alt}`}
              aria-pressed={slideIndex === index}
              onClick={() => { setPaused(true); setIndex(slideIndex); }}
              className="flex h-11 w-6 items-center justify-center rounded-full hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald2-300 sm:w-8"
            >
              <span className={cn("h-2.5 rounded-full transition-all", slideIndex === index ? "w-5 bg-emerald2-300" : "w-2.5 bg-white/75")} />
            </button>
          ))}
        </div>
        <button type="button" className={controlClass} onClick={() => move(1)} aria-label="下一張精選影像">
          <ChevronRight aria-hidden="true" className="h-5 w-5" />
        </button>
        <button type="button" data-playback-control className={controlClass} onClick={() => setPaused((current) => !current)} aria-label={paused ? "播放精選影像輪播" : "暫停精選影像輪播"}>
          {paused ? <Play aria-hidden="true" className="h-4 w-4" /> : <Pause aria-hidden="true" className="h-4 w-4" />}
        </button>
      </div>
      <p className="sr-only" aria-live={paused ? "polite" : "off"} aria-atomic="true">
        第 {index + 1} 張，共 {homeHeroSlides.length} 張：{homeHeroSlides[index].alt}
      </p>
    </div>
  );
}
