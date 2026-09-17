import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  style?: CSSProperties;
}

const offsets = {
  up: "translateY(36px)",
  down: "translateY(-36px)",
  left: "translateX(-36px)",
  right: "translateX(36px)",
  none: "none",
};

export function Reveal({ children, delay = 0, direction = "up", className, style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Initial HTML stays readable without JavaScript. Only enhance offscreen content.
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    const animation = el.animate(
      [{ opacity: 0, transform: offsets[direction] }, { opacity: 1, transform: "none" }],
      { duration: 800, delay: delay * 1000, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" }
    );
    animation.pause();
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animation.play();
        observer.disconnect();
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    observer.observe(el);
    return () => {
      observer.disconnect();
      animation.cancel();
    };
  }, [delay, direction]);

  return <div ref={ref} className={className} style={style}>{children}</div>;
}
