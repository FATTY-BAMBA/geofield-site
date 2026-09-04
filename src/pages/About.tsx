import { useState } from "react";
import { Activity, Award, Drill, HeartHandshake, Lightbulb, ScanLine, Users } from "lucide-react";
import { aboutTabs, company, heroPhotos, milestones, stats } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

const values = [
  { icon: Award, title: "專業", desc: "嚴謹的技術分析與深厚的學理基礎" },
  { icon: HeartHandshake, title: "誠信", desc: "誠實面對數據，可靠交付每份承諾" },
  { icon: Lightbulb, title: "創新", desc: "持續導入新工法與自動化監測技術" },
  { icon: Users, title: "服務", desc: "重視客戶需求，建立長期夥伴關係" },
];

const capabilities = [
  {
    icon: Drill,
    title: "鑽探與 CPT 現地試驗",
    desc: "取得地層、強度與地下水相關資料，作為基礎及開挖設計判讀依據。",
  },
  {
    icon: Activity,
    title: "工程安全監測",
    desc: "整合傾斜、沉陷、水位及自動化資料，追蹤工程與坡地變化趨勢。",
  },
  {
    icon: ScanLine,
    title: "隧道非破壞檢測",
    desc: "運用透地雷達、三維掃描與近接調查，建立維護管理所需的現況資料。",
  },
];

export default function About() {
  const [tab, setTab] = useState(aboutTabs[0].key);
  const active = aboutTabs.find((t) => t.key === tab)!;

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="關於我們"
        description={`成立於民國${company.foundedRoc}年（${company.founded}年），提供土木、大地工程與水土保持相關技術服務。`}
        image="/images/hero-strata.png"
      />

      {/* Tabs + intro */}
      <section className="bg-sand-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal direction="left">
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-brand-900/5" />
                <img
                  src="/images/hero-2.jpg"
                  alt="大域工程 CPT 試驗車"
                  className="relative aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-2xl ring-1 ring-sand-200"
                />
                <div className="absolute -bottom-6 -right-4 rounded-2xl bg-brand-900 px-6 py-4 text-white shadow-xl md:-right-8">
                  <p className="text-3xl font-black text-emerald2-400">
                    <Counter target={30} suffix="+" />
                  </p>
                  <p className="text-xs font-semibold tracking-wider text-white/70">年專業經驗</p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <SectionHeading eyebrow="Who We Are" title="以現地調查與工程分析為核心的顧問團隊" />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-7 flex flex-wrap gap-2" role="tablist" aria-label="關於大域">
                  {aboutTabs.map((t) => (
                    <button
                      key={t.key}
                      onClick={() => setTab(t.key)}
                      type="button"
                      role="tab"
                      id={`about-tab-${t.key}`}
                      aria-selected={tab === t.key}
                      aria-controls="about-tab-content"
                      className={cn(
                        "min-h-11 rounded-full px-5 py-2.5 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald2-500 focus-visible:ring-offset-2",
                        tab === t.key
                          ? "bg-brand-900 text-white shadow-lg"
                          : "bg-white text-brand-900 ring-1 ring-sand-200 hover:ring-brand-900/30"
                      )}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
                <div
                  key={tab}
                  id="about-tab-content"
                  role="tabpanel"
                  aria-labelledby={`about-tab-${tab}`}
                  className="editorial-copy mt-6 rounded-2xl bg-white p-7 text-base text-slate-600 ring-1 ring-sand-200 md:text-[17px]"
                  style={{ animation: "fadeSlide 0.45s ease both" }}
                >
                  {active.content}
                </div>
                <style>{`@keyframes fadeSlide { from { opacity: 0; transform: translateY(10px);} to { opacity: 1; transform: none; } }`}</style>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-sand-200 bg-white py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 sm:grid-cols-4 lg:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.06 * i}>
              <div className="text-center">
                <p className="text-4xl font-black text-brand-900">
                  <Counter target={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm font-bold text-slate-700">{s.label}</p>
                <p className="mt-0.5 text-xs font-semibold leading-tight tracking-[0.08em] text-slate-400 uppercase">{s.labelEn}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-sand-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Company at a Glance · 公司概況" title="民國82年成立，持續累積工程經驗" align="center" />
          </Reveal>
          <div className="relative mt-14">
            <div className="absolute top-6 right-[12%] left-[12%] hidden h-0.5 bg-gradient-to-r from-brand-200 via-emerald2-400 to-brand-200 lg:block" />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={0.08 * i}>
                  <div className="relative text-center">
                    <span className="relative z-10 inline-flex h-12 items-center rounded-full bg-brand-900 px-5 text-sm font-bold tracking-wide text-emerald2-300 shadow-lg">
                      {m.year}
                    </span>
                    <div className="mt-5 rounded-2xl bg-white p-6 ring-1 ring-sand-200">
                      <p className="text-base font-bold text-brand-900">{m.title}</p>
                      <p className="mt-2 text-base leading-[1.75] text-slate-600">{m.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-brand-950 py-16 lg:py-24">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading dark align="center" eyebrow="Core Values · 經營理念" title="專業 · 誠信 · 創新 · 服務" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.08 * i}>
                <div className="h-full rounded-2xl bg-white/5 p-7 text-center ring-1 ring-white/10 backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/10">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald2-500/15 text-emerald2-400 ring-1 ring-emerald2-500/30">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <p className="mt-4 text-lg font-extrabold text-white">{v.title}</p>
                  <p className="mt-2 text-base leading-[1.75] text-white/65">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet gallery */}
      <section id="equipment" className="scroll-mt-24 bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Equipment & Methods · 設備與技術"
              title="從現地取得資料，再轉化為工程判斷"
              description="依工程需求整合鑽探、現地試驗、非破壞檢測及安全監測，讓設計與維護建議建立在可追溯的現場資料上。"
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={0.06 * i}>
                <article className="flex h-full gap-4 rounded-2xl bg-sand-50 p-6 ring-1 ring-sand-200">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-900 text-emerald2-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold text-brand-900">{title}</h3>
                    <p className="mt-2 text-base leading-[1.75] text-slate-600">{desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {heroPhotos.map((p, i) => (
              <Reveal key={p.src} delay={0.06 * i}>
                <div className="group overflow-hidden rounded-2xl ring-1 ring-sand-200">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
