import { Link } from "react-router";
import { Newspaper, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export default function News() {
  return (
    <>
      <PageHero eyebrow="News" title="最新消息" description="公司動態、工程快訊與產業新知，將於此處不定期更新。" />

      <section className="bg-sand-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="mx-auto flex max-w-xl flex-col items-center rounded-3xl bg-white px-8 py-16 text-center ring-1 ring-sand-200">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-900/5 text-brand-900">
                <Newspaper className="h-8 w-8" />
              </span>
              <h3 className="mt-6 text-xl font-black text-brand-900">目前尚無最新消息</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                最新消息正在整理中，敬請期待。若您想直接了解我們的工程實績與服務內容，歡迎前往瀏覽。
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-900 px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5"
                >
                  瀏覽工程實績
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-900 px-6 py-3 text-sm font-bold text-brand-900 transition-all hover:bg-brand-900 hover:text-white"
                >
                  了解服務項目
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
