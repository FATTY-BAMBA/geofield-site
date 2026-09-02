import { useState } from "react";
import { Link, Navigate, useParams } from "react-router";
import { ArrowLeft, Building2, CalendarDays, MapPin, X } from "lucide-react";
import { getProject, categoryImages } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  const [lightbox, setLightbox] = useState<number | null>(null);

  // 無此專案，或該專案尚未建立詳細內容 → 回列表頁
  if (!project || !project.detail) return <Navigate to="/projects" replace />;

  const d = project.detail;
  const hero = d.heroImage ?? categoryImages[project.category];
  const meta = [
    { icon: Building2, label: "業主", value: d.client },
    { icon: MapPin, label: "工程地點", value: d.location },
    { icon: CalendarDays, label: "執行期間", value: d.period },
  ].filter((m) => Boolean(m.value));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-950 pt-[72px]">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/90 to-brand-950/40" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-[13px] text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              返回工程實績
            </Link>
            <p className="mt-6 text-xs font-bold tracking-[0.3em] text-emerald2-400 uppercase">Project</p>
            <h1 className="mt-3 max-w-3xl text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
              {project.title}
            </h1>
            <span className="mt-5 inline-block rounded-full bg-emerald2-500/15 px-4 py-1.5 text-sm font-bold text-emerald2-300">
              {project.category}
            </span>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-emerald2-500 to-transparent" />
      </section>

      {/* 專案概述 + 工作項目 */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.35fr_0.65fr] lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Overview" title="專案概述" />
            <p className="mt-6 text-base leading-loose text-slate-600">{d.summary}</p>
            {meta.length > 0 && (
              <dl className="mt-8 grid gap-4 sm:grid-cols-3">
                {meta.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="rounded-2xl bg-sand-50 p-5 ring-1 ring-sand-200">
                    <dt className="flex items-center gap-2 text-xs font-bold tracking-wider text-slate-400 uppercase">
                      <Icon className="h-3.5 w-3.5" />
                      {label}
                    </dt>
                    <dd className="mt-2 text-sm font-bold text-brand-900">{value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </Reveal>

          <Reveal direction="right">
            <div className="rounded-3xl bg-brand-900 p-8">
              <h3 className="text-lg font-black text-white">工作項目</h3>
              <ul className="mt-6 space-y-4">
                {d.scope.map((s, i) => (
                  <li key={s} className="flex gap-3.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald2-500/20 text-xs font-black text-emerald2-300">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-white/80">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 技術作業內容 —— 等高卡片網格，與工程實績列表同一套視覺語彙 */}
      {d.sections.length > 0 && (
        <section className="bg-sand-50 py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Methodology"
                title="技術作業內容"
                description="結合現場檢測、非破壞探查、三維掃描與長期監測，建立完整的隧道維護管理資訊。"
              />
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {d.sections.map((sec, i) => (
                <Reveal key={sec.title} delay={0.05 * (i % 4)} className="h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-sand-200 transition-all duration-300 hover:shadow-[0_20px_50px_-12px_rgba(13,59,76,0.15)]">
                    {sec.image && (
                      <div className="relative h-56 shrink-0 overflow-hidden bg-gradient-to-br from-sand-50 via-sand-100 to-brand-100">
                        <div className="absolute inset-0 bg-grid-light" />
                        <img
                          src={sec.image}
                          alt={sec.title}
                          loading="lazy"
                          className={`relative h-full w-full ${
                            sec.fit === "contain" ? "object-contain p-4" : "object-cover"
                          }`}
                        />
                        <span className="absolute top-4 left-4 rounded-full bg-brand-950/85 px-3 py-1 text-xs font-black tracking-widest text-emerald2-300 backdrop-blur">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-6 lg:p-7">
                      <h3 className="text-lg font-black text-brand-900">{sec.title}</h3>
                      <p className="mt-3 text-base leading-loose text-slate-600">{sec.body}</p>
                      {sec.bullets && (
                        <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                          {sec.bullets.map((b) => (
                            <li
                              key={b}
                              className="rounded-full bg-sand-50 px-3 py-1.5 text-xs font-bold text-brand-900 ring-1 ring-sand-200"
                            >
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 工程照片 */}
      {d.photos && d.photos.length > 0 && (
        <section className="bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionHeading eyebrow="Gallery" title="工程照片" />
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {d.photos.map((p, i) => (
                <Reveal key={p.src} delay={0.05 * (i % 3)} className="h-full">
                  <button
                    onClick={() => setLightbox(i)}
                    className="group flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white text-left ring-1 ring-sand-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-12px_rgba(13,59,76,0.25)]"
                  >
                    <div className="relative h-48 shrink-0 overflow-hidden bg-gradient-to-br from-sand-50 via-sand-100 to-brand-100">
                      <div className="absolute inset-0 bg-grid-light" />
                      <img
                        src={p.src}
                        alt={p.caption ?? project.title}
                        loading="lazy"
                        className={`relative h-full w-full transition-transform duration-500 group-hover:scale-[1.06] ${
                          p.fit === "contain" ? "object-contain p-3" : "object-cover"
                        }`}
                      />
                    </div>
                    {p.caption && (
                      <div className="flex flex-1 items-center p-5">
                        <span className="text-base font-bold leading-snug text-brand-900 transition-colors group-hover:text-emerald2-600">
                          {p.caption}
                        </span>
                      </div>
                    )}
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {lightbox !== null && d.photos?.[lightbox] && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-950/90 p-5 backdrop-blur"
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="關閉"
            className="absolute top-5 right-5 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-4xl">
            <img
              src={d.photos[lightbox].src}
              alt={d.photos[lightbox].caption ?? project.title}
              className="max-h-[78vh] w-full rounded-2xl object-contain"
            />
            {d.photos[lightbox].caption && (
              <figcaption className="mt-4 text-center text-sm text-white/70">{d.photos[lightbox].caption}</figcaption>
            )}
          </figure>
        </div>
      )}

      {/* CTA */}
      <section className="bg-brand-900 py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center lg:px-8">
          <h3 className="text-2xl font-black text-white">有類似的工程需求？</h3>
          <p className="max-w-lg text-sm leading-relaxed text-white/65">
            歡迎與我們聯繫，由專業團隊為您評估最適合的檢測與評估方案。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-xl bg-emerald2-500 px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5"
            >
              聯絡我們
            </Link>
            <Link
              to="/projects"
              className="rounded-xl border-2 border-white/25 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white/10"
            >
              查看其他實績
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
