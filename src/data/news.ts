export interface NewsPhoto {
  src: string;
  caption: string;
}

export interface NewsArticle {
  slug: string;
  title: string;
  category: "專業活動";
  date: string;
  endDate?: string;
  dateLabel: string;
  coverImage: string;
  coverAlt: string;
  excerpt: string;
  paragraphs: string[];
  photos: NewsPhoto[];
  eventSource?: { label: string; href: string };
}

const GEOTECH_DIR = "/images/news/geotech-2026";
const METRO_DIR = "/images/news/metro-geotechnical-seminar-20260814";

/** 活動日期取自現場照片及活動公告，不以檔案傳送日期作為活動日期。 */
export const newsArticles: NewsArticle[] = [
  {
    slug: "geotech-2026",
    title: "Geotech 2026｜第二十一屆大地工程學術研討會",
    category: "專業活動",
    date: "2026-08-26",
    endDate: "2026-08-28",
    dateLabel: "2026.08.26–28",
    coverImage: `${GEOTECH_DIR}/booth-group.webp`,
    coverAlt: "大域工程團隊與與會人員於 Geotech 2026 展位合影",
    excerpt: "大域工程參與 Geotech 2026，記錄展位交流、工程案例技術分享與研討會現場。",
    paragraphs: [
      "大域工程參與 Geotech 2026 第二十一屆大地工程學術研討會，透過展位展示與現場交流，與工程界同業分享實務經驗。",
      "活動影像涵蓋展位互動、坡地工程案例技術分享、開幕典禮及團隊合影，留下本次專業交流的現場紀錄。",
    ],
    photos: [
      { src: `${GEOTECH_DIR}/booth-group.webp`, caption: "Geotech 2026 大域工程展位合影" },
      { src: `${GEOTECH_DIR}/booth-exchange.webp`, caption: "展位現場技術交流" },
      { src: `${GEOTECH_DIR}/technical-presentation.webp`, caption: "坡地工程案例技術分享" },
      { src: `${GEOTECH_DIR}/opening-ceremony.webp`, caption: "Geotech 2026 開幕典禮" },
      { src: `${GEOTECH_DIR}/conference-stage.webp`, caption: "研討會大會舞台合影" },
      { src: `${GEOTECH_DIR}/team-at-booth.webp`, caption: "大域工程團隊於展位合影" },
      { src: `${GEOTECH_DIR}/exhibition-group.webp`, caption: "展位參與人員合影" },
    ],
  },
  {
    slug: "metro-geotechnical-seminar-20260814",
    title: "高雄市與臺南市都會區捷運路網展望與面臨大地工程的挑戰研討會",
    category: "專業活動",
    date: "2026-08-14",
    dateLabel: "2026.08.14",
    coverImage: `${METRO_DIR}/seminar-stage.webp`,
    coverAlt: "捷運與大地工程研討會舞台合影與現場簡報",
    excerpt: "以高雄、臺南都會區捷運發展與大地工程挑戰為主題，記錄研討會專業交流現場。",
    paragraphs: [
      "2026年8月14日，大域工程參與「高雄市與臺南市都會區捷運路網展望與面臨大地工程的挑戰研討會」。活動聚焦捷運路網發展與相關大地工程課題。",
      "本次活動照片記錄研討會舞台合影與現場簡報，呈現工程專業交流的一刻。",
    ],
    photos: [
      { src: `${METRO_DIR}/seminar-stage.webp`, caption: "2026年8月14日捷運與大地工程研討會舞台合影" },
    ],
    eventSource: {
      label: "研討會活動公告",
      href: "https://www.kpcea.org.tw/activity/index/30/758",
    },
  },
];

export const getNewsArticle = (slug?: string) => newsArticles.find((article) => article.slug === slug);
