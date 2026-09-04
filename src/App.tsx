import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Technology from "./pages/Technology";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import Location from "./pages/Location";
import News from "./pages/News";
import { projects } from "./data/site";

const defaultDescription =
  "大域工程顧問有限公司成立於民國82年（1993年），提供地質鑽探、隧道工程、坡地防災、工程設計、施工監造與安全監測服務。";

const routeMeta: Record<string, { title: string; description: string }> = {
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
    title: "Kantaro 自計化坡地監測｜大域工程顧問有限公司",
    description: "了解 Kantaro 地表傾滑監測系統的感測原理、佈設方式、預警邏輯與坡地現場應用成果。",
  },
  "/projects": {
    title: "工程實績｜大域工程顧問有限公司",
    description: "瀏覽大域工程顧問的隧道檢測、地質調查、邊坡工程與施工監造代表案例。",
  },
  "/news": {
    title: "最新消息｜大域工程顧問有限公司",
    description: "查看大域工程顧問的公司消息、技術分享與工程動態。",
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

function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const projectSlug = pathname.startsWith("/projects/") ? pathname.split("/").filter(Boolean).at(-1) : undefined;
    const project = projectSlug ? projects.find((item) => item.slug === projectSlug) : undefined;
    const meta = project
      ? {
          title: `${project.title}｜大域工程顧問有限公司`,
          description: project.detail?.summary ?? `查看${project.title}工程案例與專業服務內容。`,
        }
      : (routeMeta[pathname] ?? routeMeta["/"]);

    document.title = meta.title;
    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    description.content = meta.description;
  }, [pathname]);

  return null;
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const frame = window.requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return () => window.cancelAnimationFrame(frame);
    }

    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <RouteMeta />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
