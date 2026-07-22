import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Award,
  Drill,
  Layers,
  MapPin,
  ShieldCheck,
  Mountain,
  Waves,
} from "lucide-react";
import { company, stats, services, projects, heroPhotos } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 pt-[72px]">
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-brand-600/25 blur-3xl" />
      <div className="absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-emerald2-500/12 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pt-14 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-20 lg:pb-24">
        {/* Copy */}
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/15 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald2-400 animate-pulse-ring" />
              <span className="text-xs font-bold tracking-[0.2em] text-white/80 uppercase">
                Est. {company.founded} · 高雄 Kaohsiung
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-7 text-5xl font-black leading-[1.15] tracking-tight text-white md:text-6xl">
              為未來，
              <br />
              <span className="text-gradient-emerald">打好基礎。</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 text-lg font-bold text-white/90">{company.name}</p>
            <p className="mt-1 text-[11px] font-semibold tracking-[0.22em] text-emerald2-300/90 uppercase">
              {company.nameEn}
            </p>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/60">{company.intro}</p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald2-500 px-7 py-3.5 text-[15px] font-bold text-white shadow-xl shadow-emerald2-500/25 transition-all hover:-translate-y-0.5 hover:bg-emerald2-400"
              >
                探索服務項目
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-7 py-3.5 text-[15px] font-bold text-white ring-1 ring-white/20 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                檢視工程實績
              </Link>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.32}>
            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-black text-white md:text-4xl">
                    <Counter target={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1.5 text-[13px] font-semibold text-white/75">{s.label}</p>
                  <p className="text-[9px] font-semibold tracking-[0.14em] text-white/35 uppercase">{s.labelEn}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* 3D visual */}
        <Reveal delay={0.2} direction="right" className="relative">
          <div className="relative mx-auto max-w-[560px]">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-emerald2-500/20 via-transparent to-brand-600/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] ring-1 ring-white/20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
              <img
                src="/images/hero-strata.png"
                alt="大地工程鑽探 3D 剖面示意"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 via-transparent to-transparent" />
            </div>

            {/* Floating chips */}
            <div className="absolute -left-4 top-8 animate-float rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur md:-left-8">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-900 text-emerald2-400">
                  <Drill className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-[13px] font-bold text-brand-900">CPT 圓錐貫入試驗</p>
                  <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">In-situ Testing</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-3 bottom-10 animate-float-slow rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur md:-right-6">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald2-500 text-white">
                  <Layers className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-[13px] font-bold text-brand-900">地層剖面分析</p>
                  <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Strata Analysis</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-emerald2-500 to-transparent" />
    </section>
  );
}

/* ─── Services ─── */
function ServicesSection() {
  return (
    <section className="relative bg-sand-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Services · 服務項目"
              title="六大專業領域，全方位大地工程顧問"
              description="從地質調查、設計分析到施工監造與安全監測，提供工程全生命週期的專業技術服務。"
            />
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-xl border-2 border-brand-900 px-6 py-3 text-sm font-bold text-brand-900 transition-all hover:bg-brand-900 hover:text-white"
            >
              全部服務
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={0.06 * i} className="h-full">
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About split with photo slideshow ─── */
function AboutSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % heroPhotos.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        {/* Slideshow */}
        <Reveal direction="left">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-brand-900/5" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-2xl ring-1 ring-sand-200">
              {heroPhotos.map((p, i) => (
                <img
                  key={p.src}
                  src={p.src}
                  alt={p.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                    i === index ? "opacity-100 animate-kenburns" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-sm font-bold text-white">大域工程 CPT 試驗車隊</p>
                <p className="text-[10px] font-semibold tracking-[0.18em] text-white/70 uppercase">
                  In-house Field Investigation Fleet
                </p>
              </div>
              <div className="absolute bottom-5 right-5 flex gap-1.5">
                {heroPhotos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`第 ${i + 1} 張照片`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-6 bg-emerald2-400" : "w-1.5 bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="About · 關於大域"
              title="三十年深耕台灣，值得信賴的大地工程夥伴"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-500">
              自{company.founded}年成立以來，大域工程累積超過 500 件工程實績，涵蓋鑽探調查、邊坡工程、
              隧道檢測與水土保持監造等領域。我們以自有試驗車隊與儀器設備深入現場，
              用第一手數據支撐每一項設計判斷。
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Award, title: "專業誠信", desc: "資深工程師與技師團隊，嚴謹把關每份報告" },
                { icon: Mountain, title: "現場實務", desc: "自有 CPT 試驗車與監測儀器，掌握真實地層資料" },
                { icon: Waves, title: "水保專長", desc: "坡地開發水保計畫與監造，守護山坡地安全" },
                { icon: MapPin, title: "雙據點服務", desc: "高雄總公司與台北辦公室，服務範圍遍及全台" },
              ].map((f) => (
                <div key={f.title} className="flex gap-3.5 rounded-2xl bg-sand-50 p-4 ring-1 ring-sand-200">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-900 text-emerald2-400">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-brand-900">{f.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.26}>
            <Link
              to="/about"
              className="group mt-9 inline-flex items-center gap-2 text-[15px] font-bold text-emerald2-600 transition-colors hover:text-emerald2-500"
            >
              深入了解大域
              <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Projects ─── */
function ProjectsSection() {
  const featured = projects.slice(0, 4);
  return (
    <section className="bg-sand-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Projects · 工程實績"
              title="五百餘件實績，遍佈全台的工程足跡"
              description="從太陽光電廠地基調查到國道邊坡修復，每一件都是對品質的承諾。"
            />
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-xl border-2 border-brand-900 px-6 py-3 text-sm font-bold text-brand-900 transition-all hover:bg-brand-900 hover:text-white"
            >
              全部實績
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={0.06 * i} className="h-full">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Assurance band ─── */
function AssuranceBand() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-18 lg:py-24">
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald2-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <Reveal>
          <SectionHeading
            dark
            align="center"
            eyebrow="Why GeoField · 為什麼選擇大域"
            title="把看不見的地層，變成可信賴的數據"
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Award, num: "30+", title: "年專業經驗", desc: "自1993年深耕大地工程領域" },
            { icon: Layers, num: "6", title: "大專業領域", desc: "調查、設計、監造、監測一條龍服務" },
            { icon: ShieldCheck, num: "100%", title: "品質承諾", desc: "嚴謹分析方法與可靠品質保證" },
            { icon: MapPin, num: "2", title: "服務據點", desc: "高雄總公司 × 台北辦公室" },
          ].map((item, i) => (
            <Reveal key={item.title} delay={0.08 * i}>
              <div className="group h-full rounded-2xl bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/10 hover:ring-emerald2-500/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald2-500/15 text-emerald2-400 ring-1 ring-emerald2-500/30">
                  <item.icon className="h-6 w-6" />
                </span>
                <p className="mt-5 text-3xl font-black text-white">{item.num}</p>
                <p className="mt-1 text-sm font-bold text-emerald2-300">{item.title}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-white/55">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950">
      <div
        className="absolute top-0 right-0 h-full w-2/5 bg-brand-950/40"
        style={{ transform: "skewX(-12deg)", transformOrigin: "top right" }}
      />
      <div className="absolute inset-0 bg-grid-dark opacity-60" />
      <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-5 py-16 lg:px-8 lg:py-20">
        <Reveal>
          <div>
            <h2 className="text-3xl font-black text-white md:text-4xl">有工程需求？歡迎與我們聯繫</h2>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/65">
              若您有任何疑問或建議，歡迎留下您寶貴的訊息，我們將盡速與您聯繫。
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald2-500 px-8 py-4 text-[15px] font-bold text-white shadow-xl shadow-emerald2-500/30 transition-all hover:-translate-y-0.5 hover:bg-emerald2-400"
            >
              立即聯絡我們
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+88672295922"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-8 py-4 text-[15px] font-bold text-white ring-1 ring-white/25 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15"
            >
              (07) 229-5922
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <AssuranceBand />
      <ProjectsSection />
      <CtaSection />
    </>
  );
}
