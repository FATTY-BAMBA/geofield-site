import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, X, PhoneCall } from "lucide-react";
import { navItems, company } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(7,35,46,0.08)]" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5">
            <img src="/images/logo.jpg" alt="大域工程標誌" className="h-9 w-9 object-contain" />
          </span>
          <span className="leading-tight">
            <span
              className={cn(
                "block text-[15px] font-bold tracking-wide transition-colors",
                solid ? "text-brand-900" : "text-white"
              )}
            >
              {company.name}
            </span>
            <span
              className={cn(
                "block text-[9px] font-semibold tracking-[0.14em] transition-colors",
                solid ? "text-brand-600" : "text-white/60"
              )}
            >
              {company.nameEn}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "relative rounded-lg px-4 py-2 text-sm font-medium transition-colors",
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
                      "absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-emerald2-400 transition-all",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                  />
                </>
              )}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center gap-2 rounded-xl bg-emerald2-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald2-500/25 transition-all hover:-translate-y-0.5 hover:bg-emerald2-400"
          >
            <PhoneCall className="h-4 w-4" />
            聯絡我們
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="開啟選單"
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-xl transition-colors lg:hidden",
            solid ? "text-brand-900 hover:bg-sand-100" : "text-white hover:bg-white/10"
          )}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden bg-white transition-all duration-300 lg:hidden",
          open ? "max-h-[420px] border-t border-sand-200" : "max-h-0"
        )}
      >
        <nav className="space-y-1 px-5 py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "block rounded-lg px-4 py-3 text-[15px] font-medium",
                  isActive ? "bg-sand-100 text-emerald2-600" : "text-brand-900 hover:bg-sand-50"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-emerald2-500 px-4 py-3 text-[15px] font-bold text-white"
          >
            <PhoneCall className="h-4 w-4" />
            聯絡我們
          </Link>
        </nav>
      </div>
    </header>
  );
}
