import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Anchor, Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/clients", label: "Clients" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const onHero = location.pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        onHero
          ? "bg-transparent"
          : "bg-[color:var(--color-navy-900)]/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.05)]"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cta">
            <Anchor className="h-5 w-5 text-white" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-bold tracking-tight">MARIGAISS</span>
            <span className="block text-[10px] tracking-[0.2em] text-[color:var(--color-steel-200)]">
              INDIA PVT. LTD.
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active =
              item.to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className="group relative px-4 py-2 text-sm font-medium text-white/85 transition hover:text-white"
              >
                {item.label}
                <span
                  className={`pointer-events-none absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-[color:var(--color-cyan-400)] transition-transform ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-cta px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-elegant)] transition hover:opacity-95 hover:-translate-y-0.5"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-[72px] z-40 origin-top bg-[color:var(--color-navy-900)] transition-all lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="container-x flex flex-col gap-2 pt-8 pb-12">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-xl px-4 py-4 text-2xl font-display font-semibold text-white hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-cta px-5 py-4 text-base font-semibold text-white"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
