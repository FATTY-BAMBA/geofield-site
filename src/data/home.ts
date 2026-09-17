interface HeroSlide {
  src: string;
  alt: string;
  width: number;
  height: number;
  fit?: "cover" | "contain";
}

// Curated from the existing galleries for clarity, resolution, and a 4:3 frame.
// Keep the complete truck visible; the event and aerial photos already fit 4:3.
export const homeHeroSlides: HeroSlide[] = [
  {
    src: "/images/hero-strata.png",
    alt: "CPT 試驗車與地層剖面示意",
    width: 1536,
    height: 977,
  },
  {
    src: "/images/news/geotech-2026/booth-group.webp",
    alt: "Geotech 2026 大域工程團隊與與會人員於展位合影",
    width: 1474,
    height: 1110,
  },
  {
    src: "/images/projects/n3-373k-slope-repair/slope-aerial.webp",
    alt: "國道3號南下373k+300邊坡修復工程空拍全景",
    width: 1920,
    height: 1440,
  },
  {
    src: "/images/equipment/cpt/cpt-truck-blue.webp",
    alt: "大域工程 CPT 圓錐貫入試驗車",
    width: 1280,
    height: 840,
    fit: "contain",
  },
  {
    src: "/images/news/geotech-2026/booth-exchange.webp",
    alt: "Geotech 2026 大域工程展位現場技術交流",
    width: 1477,
    height: 1108,
  },
  {
    src: "/images/projects/south-link-jialu-fangye-slope-assessment/railway-slope-aerial.webp",
    alt: "南迴線加祿枋野間鐵路邊坡空拍影像",
    width: 1920,
    height: 1440,
  },
];
