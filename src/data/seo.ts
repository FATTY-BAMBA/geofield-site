import { projects } from "./site";
import { newsArticles } from "./news";

export interface PageMeta {
  title: string;
  description: string;
  type?: "article" | "website";
}

export const SITE_ORIGIN = "https://www.geofield.tw";

const defaultDescription =
  "大域工程顧問有限公司成立於民國82年（1993年），提供地質鑽探、隧道工程、坡地防災、工程設計、施工監造與安全監測服務。";

const routeMeta: Record<string, PageMeta> = {
  "/": {
    title: "大域工程顧問有限公司｜大地工程、監測與水土保持",
    description: defaultDescription,
  },
  "/about": {
    title: "關於大域｜大域工程顧問有限公司",
    description: "認識大域工程顧問的發展歷程、專業團隊、現地調查設備與工程服務經驗。",
  },
  "/services": {
    title: "服務項目｜大域工程顧問有限公司",
    description: "查看地質鑽探、隧道工程、坡地防災、基礎開挖、工程設計、施工監造、安全監測及水土保持等服務。",
  },
  "/technology": {
    title: "技術與設備｜Kantaro 坡地監測｜大域工程顧問有限公司",
    description: "了解 Kantaro 自計化坡地地表傾滑監測技術，以及大域工程提供的現地勘查、系統建置、監測服務、資料判讀及維護支援。",
  },
  "/projects": {
    title: "工程實績｜大域工程顧問有限公司",
    description: "瀏覽大域工程顧問的隧道檢測、地質調查、邊坡工程與施工監造代表案例。",
  },
  "/news": {
    title: "最新消息｜大域工程顧問有限公司",
    description: "查看大域工程顧問的研討會參與、技術分享與專業活動紀錄。",
  },
  "/contact": {
    title: "聯絡我們｜大域工程顧問有限公司",
    description: "聯絡大域工程顧問，洽詢工程調查、設計、監造、檢測評估及安全監測需求。",
  },
  "/location": {
    title: "交通位置｜大域工程顧問有限公司",
    description: "查看大域工程顧問高雄總公司、台北辦公室與宜蘭辦公室的地址、電話及交通位置。",
  },
};

// One route registry supplies both the initial HTML and client-side navigation.
export const pages: Record<string, PageMeta> = {
  ...routeMeta,
  ...Object.fromEntries(projects.filter((project) => project.detail).map((project) => [
    `/projects/${project.slug}`,
    { title: `${project.title}｜大域工程顧問有限公司`, description: project.detail!.summary },
  ])),
  ...Object.fromEntries(newsArticles.map((article) => [
    `/news/${article.slug}`,
    { title: `${article.title}｜大域工程顧問有限公司`, description: article.excerpt, type: "article" },
  ])),
};

const notFoundMeta: PageMeta = {
  title: "找不到此頁面｜大域工程顧問有限公司",
  description: "此頁面可能已移除或網址有誤。請從首頁或工程實績繼續瀏覽大域工程顧問網站。",
};

export function getPageMeta(pathname: string) {
  const path = pathname.replace(/\/+$/, "") || "/";
  const page = Object.hasOwn(pages, path) ? pages[path] : undefined;
  return {
    ...(page ?? notFoundMeta),
    type: page?.type ?? "website",
    canonical: page ? `${SITE_ORIGIN}${path}` : undefined,
    robots: page ? "index, follow, max-image-preview:large" : "noindex, follow",
    status: page ? 200 : 404,
  };
}
