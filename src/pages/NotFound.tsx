import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative bg-brand-950 px-5 pb-24 pt-40 text-white lg:pb-32 lg:pt-48">
      <div className="absolute inset-0 bg-grid-dark opacity-60" />
      <div className="relative mx-auto max-w-3xl">
        <p className="text-lg font-bold tracking-[0.2em] text-emerald2-300">404</p>
        <h1 className="editorial-heading mt-4 text-4xl font-extrabold lg:text-5xl">找不到此頁面</h1>
        <p className="mt-6 max-w-xl text-body leading-relaxed text-white/80">
          此頁面可能已移除或網址有誤。您可以回到首頁，或瀏覽我們的工程實績與服務項目。
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/" className="action-button action-primary">返回首頁 <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/projects" className="action-button action-inverse">瀏覽工程實績</Link>
          <Link to="/services" className="action-button action-inverse">查看服務項目</Link>
        </div>
      </div>
    </section>
  );
}
