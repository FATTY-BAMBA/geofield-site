import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, X, PhoneCall } from "lucide-react";
import { navItems, company } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [menuLocation, setMenuLocation] = useState<string | null>(null);
  const open = menuLocation === location.key;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(7,35,46,0.08)]" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-4 px-5 xl:h-[88px] lg:px-8">
        {/* Brand */}
        <Link to="/" onClick={() => setMenuLocation(null)} className="flex min-w-0 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5">
            <img src="/images/logo.jpg" alt="大域工程標誌" className="h-9 w-9 object-contain" />
          </span>
          <span className="inline-grid min-w-0 leading-tight">
            <span
              className={cn(
                "block text-lg font-bold tracking-wide transition-colors sm:whitespace-nowrap sm:text-[22px]",
                solid ? "text-brand-900" : "text-white"
              )}
            >
              {company.name}
            </span>
            <span
              className={cn(
                "mt-1 hidden whitespace-nowrap text-[13px] font-semibold leading-5 transition-colors sm:block",
                solid ? "text-brand-600" : "text-white/80"
              )}
            >
              {company.shortNameEn}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="主要導覽" className="hidden shrink-0 items-center xl:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "relative inline-flex min-h-12 items-center rounded-lg px-3 py-2 text-lg font-bold transition-colors",
                  solid
                    ? isActive
                      ? "text-emerald2-600"
                      : "text-brand-900/80 hover:text-brand-900"
                    : isActive
                      ? "text-emerald2-300"
                      : "text-white/80 hover:text-white"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-emerald2-400 transition-all",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                  />
                </>
              )}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="action-button action-primary ml-3 px-4"
          >
            <PhoneCall className="h-4 w-4" />
            聯絡我們
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuLocation(open ? null : location.key)}
          aria-label={open ? "關閉選單" : "開啟選單"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 transition-colors xl:hidden",
            solid ? "border-brand-500 text-brand-900 hover:bg-sand-100" : "border-white/70 text-white hover:bg-white/10"
          )}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-navigation"
        inert={!open}
        className={cn(
          "overflow-y-auto bg-white transition-all duration-300 xl:hidden",
          open ? "max-h-[calc(100dvh-80px)] border-t border-sand-200" : "max-h-0"
        )}
      >
        <nav aria-label="行動版導覽" className="space-y-1 px-5 py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              onClick={() => setMenuLocation(null)}
              className={({ isActive }) =>
                cn(
                  "block rounded-lg px-4 py-3 text-body font-medium",
                  isActive ? "bg-sand-100 text-emerald2-600" : "text-brand-900 hover:bg-sand-50"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuLocation(null)}
            className="action-button action-primary mt-2 w-full"
          >
            <PhoneCall className="h-4 w-4" />
            聯絡我們
          </Link>
        </nav>
      </div>
    </header>
  );
}
