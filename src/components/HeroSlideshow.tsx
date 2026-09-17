import { useEffect, useRef, useState } from "react";
import { homeHeroSlides } from "@/data/home";
import { cn } from "@/lib/utils";

const SLIDE_INTERVAL = 3000;

export function HeroSlideshow() {
  const container = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [inView, setInView] = useState(true);
  const [pageVisible, setPageVisible] = useState(() => !document.hidden);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
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
    if (reducedMotion || !inView || !pageVisible) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % homeHeroSlides.length);
    }, SLIDE_INTERVAL);
    return () => window.clearInterval(timer);
  }, [reducedMotion, inView, pageVisible]);

  return (
    <div
      ref={container}
      role="region"
      aria-label="精選工程與活動影像"
      aria-roledescription="輪播"
      className="relative mx-auto w-full max-w-[560px]"
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
    </div>
  );
}
