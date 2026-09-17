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
import NewsDetail from "./pages/NewsDetail";
import { RouteMeta } from "./components/RouteMeta";
import NotFound from "./pages/NotFound";

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
      <main className="overflow-x-clip">
        <Routes>
          <Route caseSensitive path="/" element={<Home />} />
          <Route caseSensitive path="/about" element={<About />} />
          <Route caseSensitive path="/services" element={<Services />} />
          <Route caseSensitive path="/technology" element={<Technology />} />
          <Route caseSensitive path="/projects" element={<Projects />} />
          <Route caseSensitive path="/projects/:slug" element={<ProjectDetail />} />
          <Route caseSensitive path="/contact" element={<Contact />} />
          <Route caseSensitive path="/location" element={<Location />} />
          <Route caseSensitive path="/news" element={<News />} />
          <Route caseSensitive path="/news/:slug" element={<NewsDetail />} />
          <Route caseSensitive path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
