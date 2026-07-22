import { Link } from "react-router";
import { MapPin, Phone, Printer, Mail, Clock, ArrowUpRight } from "lucide-react";
import { company, navItems, offices, services } from "@/data/site";

export function Footer() {
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
                <p className="text-[15px] font-bold">{company.name}</p>
                <p className="text-[9px] font-semibold tracking-[0.14em] text-white/50">{company.nameEn}</p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              成立於{company.founded}年，專業大地工程、水土保持顧問機構。以嚴謹的分析與可靠的品質，為每一項工程打下穩固基礎。
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
                  <div className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-white/60">
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
                <li key={s.id} className="text-[13px] text-white/60">
                  {s.title}
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 text-[13px] text-white/60">
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-emerald2-400" /> {company.email}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-emerald2-400" /> {company.hours}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
          <p>© 2026 {company.name} GeoField Engineering Consultants. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Since {company.founded} · Kaohsiung, Taiwan</p>
        </div>
      </div>
    </footer>
  );
}
