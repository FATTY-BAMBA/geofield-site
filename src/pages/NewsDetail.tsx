import { Link, Navigate, useParams } from "react-router";
import { ArrowLeft, ArrowUpRight, CalendarDays } from "lucide-react";
import { getNewsArticle } from "@/data/news";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TechnicalFigure } from "@/components/TechnicalFigure";

export default function NewsDetail() {
  const { slug } = useParams();
  const article = getNewsArticle(slug);

  if (!article) return <Navigate to="/news" replace />;

  const gallery = article.photos.map((photo) => ({ ...photo, alt: photo.caption }));
  const singlePhoto = gallery.length === 1;

  return (
    <article>
      <header className="relative overflow-hidden bg-brand-950 pt-[72px]">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="relative mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
          <Reveal>
            <Link
              to="/news"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald2-400"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              返回最新消息
            </Link>
            <p className="mt-6 text-xs font-bold tracking-[0.22em] text-emerald2-400 uppercase">Professional Activities</p>
            <h1 className="editorial-heading mt-4 max-w-5xl text-3xl font-extrabold leading-[1.45] text-white md:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
              <span className="rounded-full bg-emerald2-500/15 px-4 py-1.5 font-bold text-emerald2-300">
                {article.category}
              </span>
              <span className="inline-flex items-center gap-2 text-white/75">
                <CalendarDays aria-hidden="true" className="h-4 w-4" />
                <span>活動日期</span>
                <time dateTime={article.date}>{article.dateLabel}</time>
              </span>
            </div>
          </Reveal>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-emerald2-500 to-transparent" />
      </header>

      <section className="bg-white py-12 lg:py-16" aria-label="活動紀錄">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="max-w-3xl space-y-4">
              {article.paragraphs.map((paragraph) => (
                <p key={paragraph} className="editorial-copy text-base text-slate-600 md:text-lg">{paragraph}</p>
              ))}
              {article.eventSource && (
                <a
                  href={article.eventSource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-emerald2-700 underline decoration-emerald2-200 underline-offset-4 hover:decoration-emerald2-700"
                >
                  {article.eventSource.label}
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  <span className="sr-only">（另開視窗）</span>
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand-50 py-12 lg:py-20" aria-label="活動照片">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Event Gallery" title="活動照片" description="點選照片可放大查看完整影像。" />
          </Reveal>
          <div className={singlePhoto ? "mt-10 max-w-4xl" : "mt-10 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3"}>
            {gallery.map((photo, index) => (
              <Reveal key={photo.src} delay={0.04 * (index % 3)} className={!singlePhoto && index === 0 ? "sm:col-span-2" : undefined}>
                <TechnicalFigure
                  src={photo.src}
                  alt={photo.alt}
                  caption={photo.caption}
                  fit="contain"
                  gallery={gallery}
                  initialIndex={index}
                  className="rounded-2xl shadow-sm"
                  mediaClassName={singlePhoto || index > 0 ? "aspect-[4/3]" : "aspect-[4/3] sm:aspect-[16/9]"}
                />
              </Reveal>
            ))}
          </div>
          <Link
            to="/news"
            className="mt-12 inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald2-500 focus-visible:ring-offset-4"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            返回最新消息
          </Link>
        </div>
      </section>
    </article>
  );
}
