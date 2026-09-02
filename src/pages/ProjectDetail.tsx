import { Link, Navigate, useParams } from "react-router";
import { ArrowLeft, Building2, CalendarDays, MapPin } from "lucide-react";
import { getProject, categoryImages } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TechnicalFigure } from "@/components/TechnicalFigure";

const maintenanceSteps = ["日常巡檢", "定期檢測", "功能評估", "設施監測", "應對策略"];

function MaintenanceCycleVisual() {
  return (
    <div className="relative h-full min-h-[360px] overflow-hidden rounded-3xl bg-brand-950 p-7 text-white ring-1 ring-white/10 lg:p-9">
      <div className="absolute inset-0 bg-grid-dark opacity-45" />
      <div className="relative">
        <p className="text-xs font-bold tracking-[0.22em] text-emerald2-300 uppercase">Maintenance Framework</p>
        <h4 className="editorial-heading mt-3 text-2xl font-extrabold">以維管資料串聯每一次判斷</h4>
        <ol className="mt-7 grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-5 lg:grid-cols-2 xl:grid-cols-5">
          {maintenanceSteps.map((step, index) => (
            <li key={step} className="border-l-2 border-emerald2-500/65 pl-3">
              <span className="block text-xs font-black tracking-wider text-emerald2-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-1 block text-sm font-bold text-white/90">{step}</span>
            </li>
          ))}
        </ol>
        <div className="mt-8 grid gap-3 border-t border-white/15 pt-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-amber-400/10 p-4 ring-1 ring-amber-300/20">
            <span className="text-xs font-bold text-amber-200">具立即性風險</span>
            <p className="mt-1 text-sm leading-relaxed text-white/70">納入主動管理，安排補修、補強或更新。</p>
          </div>
          <div className="rounded-2xl bg-emerald2-500/10 p-4 ring-1 ring-emerald2-400/20">
            <span className="text-xs font-bold text-emerald2-200">無立即性風險</span>
            <p className="mt-1 text-sm leading-relaxed text-white/70">保留基準資料，依週期持續追蹤。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

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
            <p className="mt-6 text-xs font-bold tracking-[0.3em] text-emerald2-400 uppercase">Case Study</p>
            <h1 className="editorial-heading mt-3 max-w-3xl text-3xl font-extrabold leading-[1.18] text-white md:text-5xl">
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
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.35fr_0.65fr] lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Overview" title="專案概述" />
            <p className="editorial-copy mt-6 text-base text-slate-600 md:text-[17px]">{d.summary}</p>
            {meta.length > 0 && (
              <dl className="mt-8 grid gap-4 sm:grid-cols-3">
                {meta.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="rounded-2xl bg-sand-50 p-5 ring-1 ring-sand-200">
                    <dt className="flex items-center gap-2 text-xs font-bold tracking-wider text-slate-400 uppercase">
                      <Icon className="h-3.5 w-3.5" />
                      {label}
                    </dt>
                    <dd className="mt-2 text-base font-bold text-brand-900">{value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </Reveal>

          <Reveal direction="right">
            <div className="rounded-3xl bg-brand-900 p-8">
              <h3 className="text-lg font-extrabold text-white">工作項目</h3>
              <ul className="mt-6 space-y-4">
                {d.scope.map((s, i) => (
                  <li key={s} className="flex gap-3.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald2-500/20 text-xs font-black text-emerald2-300">
                      {i + 1}
                    </span>
                    <span className="text-base leading-relaxed text-white/80">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 技術作業內容 */}
      {d.sections.length > 0 && (
        <section className="bg-sand-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Methodology"
                title="技術作業內容"
                description="把現場檢查、非破壞探查、三維掃描與重點量測整合到同一套位置資料中，支援後續維護判斷。"
              />
            </Reveal>

            <div className="mt-12 space-y-10 lg:mt-16 lg:space-y-16">
              {d.sections.map((sec, i) => (
                <Reveal key={sec.title} delay={0.04 * (i % 3)}>
                  <article className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
                    <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
                      {sec.visual === "maintenance-cycle" ? (
                        <MaintenanceCycleVisual />
                      ) : (
                        sec.image && (
                          <TechnicalFigure
                            src={sec.image}
                            alt={sec.title}
                            fit={sec.fit ?? "cover"}
                            className="rounded-3xl shadow-[0_22px_55px_-28px_rgba(13,59,76,0.35)]"
                            mediaClassName="h-72 sm:h-[340px] lg:h-[390px]"
                            imageClassName={sec.fit === "contain" ? "p-3 sm:p-6" : undefined}
                          />
                        )
                      )}
                    </div>
                    <div className={i % 2 === 1 ? "lg:order-1" : undefined}>
                      <p className="text-xs font-black tracking-[0.2em] text-emerald2-600 uppercase">
                        {String(i + 1).padStart(2, "0")} / {String(d.sections.length).padStart(2, "0")}
                      </p>
                      <h3 className="editorial-heading mt-3 text-2xl font-extrabold leading-snug text-brand-900 lg:text-3xl">
                        {sec.title}
                      </h3>
                      <p className="editorial-copy mt-5 text-base text-slate-600 md:text-[17px]">{sec.body}</p>
                      {sec.bullets && (
                        <ul className="mt-6 flex flex-wrap gap-2">
                          {sec.bullets.map((b) => (
                            <li
                              key={b}
                              className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-brand-900 ring-1 ring-sand-200"
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
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Field Record"
                title="工程影像與現況紀錄"
                description="點選任一圖片可查看完整尺寸與圖說。"
              />
            </Reveal>
            <div className="mt-10 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {d.photos.map((p, i) => (
                <Reveal
                  key={p.src}
                  delay={0.05 * (i % 3)}
                  className={i === 0 ? "h-full sm:col-span-2 lg:col-span-2" : "h-full"}
                >
                  <TechnicalFigure
                    src={p.src}
                    alt={p.caption ?? project.title}
                    caption={p.caption}
                    fit={p.fit ?? "cover"}
                    className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(13,59,76,0.18)] hover:ring-brand-200"
                    mediaClassName={i === 0 ? "h-64 lg:h-72" : "h-56 lg:h-60"}
                    imageClassName={p.fit === "contain" ? "p-4" : undefined}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-brand-900 py-16 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center lg:px-8">
          <h3 className="text-2xl font-extrabold text-white">有類似的工程需求？</h3>
          <p className="max-w-lg text-base leading-relaxed text-white/65">
            請提供場址、設施現況與工作需求，我們將依現地條件建議適合的調查與評估項目。
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
