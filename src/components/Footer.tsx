import { Link } from "react-router";
import { MapPin, Phone, Printer, Mail, Clock, ArrowUpRight } from "lucide-react";
import { company, industryLinks, navItems, offices, services } from "@/data/site";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const currentRocYear = currentYear - 1911;

  return (
    <footer className="relative overflow-hidden bg-brand-950 text-white">
      <div className="absolute inset-0 bg-grid-dark opacity-60" />
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-emerald2-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-8 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.3fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white">
                <img src="/images/logo.jpg" alt="大域工程標誌" className="h-9 w-9 object-contain" />
              </span>
              <div className="leading-tight">
                <p className="text-base font-bold">{company.name}</p>
                <p className="mt-0.5 text-xs font-semibold tracking-[0.08em] text-white/50">{company.nameEn}</p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              成立於{company.foundedLabel}，提供大地工程、水土保持、隧道檢測與安全監測等技術服務。
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.22em] text-emerald2-400 uppercase">網站導覽</h4>
            <ul className="mt-5 space-y-3">
              {navItems.slice(1).map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.22em] text-emerald2-400 uppercase">聯絡據點</h4>
            <div className="mt-5 space-y-6">
              {offices.map((o) => (
                <div key={o.name}>
                  <p className="text-sm font-bold text-white">{o.name}</p>
                  <div className="mt-2 space-y-1.5 text-sm leading-relaxed text-white/60">
                    <p className="flex gap-2">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald2-400" />
                      {o.address}
                    </p>
                    {o.tel && (
                      <p className="flex gap-2">
                        <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald2-400" />
                        {o.tel}
                        {o.fax && (
                          <span className="inline-flex items-center gap-1.5">
                            <Printer className="h-3.5 w-3.5 text-emerald2-400" /> {o.fax}
                          </span>
                        )}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services + contact */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.22em] text-emerald2-400 uppercase">專業領域</h4>
            <ul className="mt-5 space-y-2.5">
              {services.map((s) => (
                <li key={s.id} className="text-sm text-white/60">
                  {s.title}
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 text-sm text-white/60">
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-emerald2-400" /> {company.email}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-emerald2-400" /> {company.hours}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className="text-xs font-bold tracking-[0.22em] text-emerald2-400 uppercase">專業連結</h4>
              <p className="mt-1 text-sm text-white/45">工程領域相關學協會</p>
            </div>
            <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {industryLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
          <p>© 民國{currentRocYear}年（{currentYear}）{company.name}. All rights reserved.</p>
          <p className="tracking-[0.14em] uppercase">民國{company.foundedRoc}年創立 · Kaohsiung, Taiwan</p>
        </div>
      </div>
    </footer>
  );
}
