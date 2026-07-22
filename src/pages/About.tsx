import { useState } from "react";
import { Award, HeartHandshake, Lightbulb, Users } from "lucide-react";
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

export default function About() {
  const [tab, setTab] = useState(aboutTabs[0].key);
  const active = aboutTabs.find((t) => t.key === tab)!;

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="關於我們"
        description={`自${company.founded}年成立至今，大域工程以專業、誠信、創新、服務的理念，陪伴台灣每一寸土地的開發與守護。`}
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
                <SectionHeading eyebrow="Who We Are" title="紮根高雄，放眼全台的工程顧問團隊" />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-7 flex flex-wrap gap-2">
                  {aboutTabs.map((t) => (
                    <button
                      key={t.key}
                      onClick={() => setTab(t.key)}
                      className={cn(
                        "rounded-full px-5 py-2.5 text-sm font-bold transition-all",
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
                  className="mt-6 rounded-2xl bg-white p-7 text-[15px] leading-loose text-slate-600 ring-1 ring-sand-200"
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
                <p className="text-[9px] font-semibold tracking-[0.16em] text-slate-400 uppercase">{s.labelEn}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-sand-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Milestones · 發展歷程" title="穩健前行三十年" align="center" />
          </Reveal>
          <div className="relative mt-14">
            <div className="absolute top-6 right-[12%] left-[12%] hidden h-0.5 bg-gradient-to-r from-brand-200 via-emerald2-400 to-brand-200 lg:block" />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={0.08 * i}>
                  <div className="relative text-center">
                    <span className="relative z-10 inline-flex h-12 items-center rounded-full bg-brand-900 px-5 text-sm font-black tracking-wide text-emerald2-300 shadow-lg">
                      {m.year}
                    </span>
                    <div className="mt-5 rounded-2xl bg-white p-6 ring-1 ring-sand-200">
                      <p className="text-base font-bold text-brand-900">{m.title}</p>
                      <p className="mt-2 text-[13px] leading-relaxed text-slate-500">{m.desc}</p>
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
                  <p className="mt-4 text-lg font-black text-white">{v.title}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/55">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet gallery */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our Fleet · 自有設備"
              title="CPT 試驗車隊，深入第一現場"
              description="自有圓錐貫入試驗車與監測儀器，從現地試驗到數據分析全程自主掌控。"
            />
          </Reveal>
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
