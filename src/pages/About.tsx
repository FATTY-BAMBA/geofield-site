import { Link } from "react-router";
import { Activity, ArrowRight, Award, CheckCircle2, Drill, HeartHandshake, Lightbulb, ScanLine, Users } from "lucide-react";
import { aboutTabs, company, cptMedia, milestones, stats } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { SectionHeading } from "@/components/SectionHeading";

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
    desc: "取得地層、強度與地下水相關資料，作為基礎、開挖及工程設計判讀依據。",
    image: "/images/projects/guanmiao-solar/card-cover.webp",
    alt: "關廟太陽光電廠地基調查現場",
  },
  {
    icon: ScanLine,
    title: "隧道檢測與工程評估",
    desc: "運用透地雷達、三維掃描與近接調查，建立維護、補修與安全評估所需資料。",
    image: "/images/projects/irrigation-tunnel/site-context.webp",
    alt: "水圳隧道檢測安全評估現場",
  },
  {
    icon: Activity,
    title: "邊坡工程與安全監測",
    desc: "整合現況調查、穩定分析與監測判讀，支援邊坡防災、修復及長期安全管理。",
    image: "/images/projects/n3-373k/card-cover.webp",
    alt: "國道3號南下373k+300邊坡修復工程",
  },
];

const workflowSteps = [
  { step: "01", title: "現地調查", desc: "掌握地質、水文、構造物與周邊環境條件" },
  { step: "02", title: "工程分析", desc: "整合試驗、檢測與監測資料，辨識關鍵風險" },
  { step: "03", title: "規劃設計", desc: "提出符合現地條件、施工需求與法規的方案" },
  { step: "04", title: "監造與追蹤", desc: "查驗施工品質，並以持續監測支援安全管理" },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="關於我們"
        description={`成立於民國${company.foundedRoc}年（${company.founded}年），提供土木、大地工程與水土保持相關技術服務。`}
        image="/images/hero-strata.png"
      />

      {/* Company introduction */}
      <section className="bg-sand-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal direction="left">
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-brand-900/5" />
                <div className="relative grid grid-cols-2 gap-3 overflow-hidden rounded-[1.75rem] bg-white p-3 shadow-2xl ring-1 ring-sand-200">
                  <figure className="col-span-2 overflow-hidden rounded-2xl sm:col-span-1 sm:row-span-2">
                    <img
                      src="/images/projects/n3-373k/card-cover.webp"
                      alt="國道3號南下373k+300邊坡修復工程全景"
                      className="h-full min-h-72 w-full object-cover sm:min-h-[430px]"
                    />
                  </figure>
                  <figure className="overflow-hidden rounded-2xl">
                    <img
                      src="/images/projects/irrigation-tunnel/site-context.webp"
                      alt="水圳隧道檢測安全評估現場"
                      className="aspect-[4/3] h-full w-full object-cover"
                    />
                  </figure>
                  <figure className="overflow-hidden rounded-2xl">
                    <img
                      src="/images/projects/jinshihu/card-cover.webp"
                      alt="金獅湖滯洪池周邊地景環境改造工程"
                      className="aspect-[4/3] h-full w-full object-cover"
                    />
                  </figure>
                </div>
                <div className="absolute -bottom-6 -right-2 rounded-2xl bg-brand-900 px-6 py-4 text-white shadow-xl md:-right-6">
                  <p className="text-3xl font-black text-emerald2-400">
                    <Counter target={30} suffix="+" />
                  </p>
                  <p className="text-xs font-semibold tracking-wider text-white/70">年工程顧問經驗</p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="Who We Are · 關於大域"
                  title="以現地調查與工程分析為核心的顧問團隊"
                  description="從地質條件與工程需求出發，整合調查、分析、設計、監造、檢測及安全監測，提出可執行且可追溯的專業判斷。"
                />
              </Reveal>
              <div className="mt-8 space-y-4">
                {aboutTabs.map((item, index) => (
                  <Reveal key={item.key} delay={0.06 * index}>
                    <article className="grid gap-3 rounded-2xl bg-white p-6 ring-1 ring-sand-200 sm:grid-cols-[52px_1fr]">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-900 text-sm font-black text-emerald2-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h2 className="text-lg font-extrabold text-brand-900">{item.label}</h2>
                        <p className="editorial-copy mt-2 text-base text-slate-600">{item.content}</p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
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

      {/* Integrated workflow */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="How We Work · 工作流程"
              title="由第一手資料，推進至可執行的工程方案"
              description="每個階段承接前一階段的成果，讓調查、分析、設計與現場管理形成完整工作鏈。"
              align="center"
            />
          </Reveal>
          <div className="relative mt-12">
            <div className="absolute top-7 right-[10%] left-[10%] hidden h-px bg-sand-200 lg:block" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {workflowSteps.map((item, index) => (
                <Reveal key={item.step} delay={0.07 * index}>
                  <article className="relative h-full rounded-2xl bg-sand-50 p-6 ring-1 ring-sand-200">
                    <span className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-900 text-sm font-black tracking-wider text-emerald2-300 shadow-lg">
                      {item.step}
                    </span>
                    <h2 className="mt-5 text-xl font-extrabold text-brand-900">{item.title}</h2>
                    <p className="mt-2 text-base leading-[1.75] text-slate-600">{item.desc}</p>
                  </article>
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

      {/* Equipment and methods */}
      <section id="equipment" className="scroll-mt-24 bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Equipment & Methods · 設備與技術"
              title="跨領域方法，建立可追溯的工程判斷"
              description="由鑽探與現地試驗、隧道檢測到邊坡工程與安全監測，依場址條件選擇合適方法，而非以單一設備套用所有工程。"
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, desc, image, alt }, index) => (
              <Reveal key={title} delay={0.07 * index} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-sand-50 ring-1 ring-sand-200">
                  <div className="overflow-hidden bg-brand-950">
                    <img
                      src={image}
                      alt={alt}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                    />
                  </div>
                  <div className="flex flex-1 gap-4 p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-900 text-emerald2-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className="text-lg font-extrabold text-brand-900">{title}</h2>
                      <p className="mt-2 text-base leading-[1.75] text-slate-600">{desc}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <article className="mt-12 overflow-hidden rounded-[2rem] bg-brand-950 text-white shadow-[0_24px_60px_-36px_rgba(6,45,59,0.8)] ring-1 ring-brand-900/15">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
                  <p className="text-6xl font-black text-emerald2-300">2</p>
                  <p className="mt-1 text-xs font-bold tracking-[0.18em] text-white/45 uppercase">Truck-mounted CPT Systems</p>
                  <h2 className="mt-6 text-2xl font-black leading-tight md:text-3xl">雙車配置的車載式 CPT 現地試驗系統</h2>
                  <p className="editorial-copy mt-4 text-base text-white/70">
                    兩部試驗車均可依案件需求投入現地調查，並於車內完成即時資料擷取與深度剖面檢視。
                  </p>
                  <ul className="mt-6 space-y-3 text-sm font-semibold text-white/75">
                    {["雙車皆可投入現地作業", "即時取得連續地層資料", "試驗成果支援工程判讀"].map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald2-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-px bg-white/10">
                  {[cptMedia.fleetPrimary, cptMedia.fleetSecondary, cptMedia.liveData, cptMedia.rods].map((item) => (
                    <figure key={item.src} className="relative overflow-hidden bg-brand-900">
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 hover:scale-[1.035]"
                      />
                      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/95 to-transparent px-4 pt-10 pb-3 text-xs font-bold text-white">
                        {item.title}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="border-t border-sand-200 bg-sand-50 py-16 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-8">
          <Reveal>
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-emerald2-600 uppercase">Work With GeoField · 與大域合作</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight text-brand-900 md:text-4xl">
                從工程需求與現地條件開始，建立合適的技術方案
              </h2>
              <p className="editorial-copy mt-4 max-w-2xl text-base text-slate-600 md:text-[17px]">
                提供工程位置、工作需求與預計時程，我們將協助確認適合的調查、設計、監造、檢測或監測服務。
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-900 ring-1 ring-sand-300 transition hover:-translate-y-0.5 hover:ring-brand-300"
              >
                查看服務項目
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-emerald2-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald2-600/20 transition hover:-translate-y-0.5 hover:bg-emerald2-500"
              >
                聯絡我們
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
