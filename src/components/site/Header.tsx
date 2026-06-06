import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Mail, Menu, Phone, X } from "lucide-react";
import { whatsappQuoteUrl } from "@/lib/whatsapp";
import logoAsset from "@/assets/mipl-logo.png.asset.json";

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-out-expo)] ${
        onHero
          ? "bg-transparent"
          : "border-b border-white/10 bg-[color:var(--color-navy-900)]/70 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.5)]"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between py-3 md:h-24">
        <Link to="/" className="flex items-center gap-3 text-white">
          <img
            src={logoAsset.url}
            alt="Marigaisss India Pvt. Ltd."
            className="h-14 w-auto object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)] transition-transform duration-500 hover:scale-[1.03] md:h-20 lg:h-[5.5rem]"
          />
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
          <a
            href={whatsappQuoteUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-cta px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-elegant)] transition hover:opacity-95 hover:-translate-y-0.5"
          >
            Get a Quote
          </a>
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
    </header>

      {/* Mobile menu — rendered as sibling of <header> so that no ancestor
          backdrop-filter / transform creates a containing block that would
          break `position: fixed` on inner pages. */}
      <div
        className={`fixed inset-0 top-20 z-[60] origin-top bg-[color:var(--color-navy-900)] transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        {/* Solid backdrop layer — guarantees opacity regardless of stacking */}
        <div className="absolute inset-0 bg-[color:var(--color-navy-900)]" aria-hidden />
        <div
          className="relative h-full overflow-y-auto bg-gradient-to-b from-[color:var(--color-navy-900)] via-[color:var(--color-navy-800)] to-[color:var(--color-navy-900)]"
        >
          <div className="container-x flex flex-col pt-4 pb-10">
            <nav className="flex flex-col">
              {NAV.map((item) => {
                const active =
                  item.to === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(item.to);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`group flex items-center justify-between border-b border-white/5 px-2 py-4 font-display text-xl font-semibold transition ${
                      active ? "text-[color:var(--color-cyan-400)]" : "text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="h-4 w-4 text-[color:var(--color-steel-300)] transition group-hover:translate-x-1 group-hover:text-[color:var(--color-cyan-400)]" />
                  </Link>
                );
              })}
            </nav>

            <a
              href={whatsappQuoteUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-cta px-5 py-4 text-base font-semibold text-white shadow-[var(--shadow-elegant)]"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </a>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--color-cyan-400)]">
                Reach us directly
              </p>
              <a
                href="mailto:marigaissindia@gmail.com"
                className="mt-3 flex items-center gap-3 text-sm text-white"
              >
                <Mail className="h-4 w-4 text-[color:var(--color-cyan-400)]" />
                marigaissindia@gmail.com
              </a>
              <a
                href="tel:+91"
                className="mt-2 flex items-center gap-3 text-sm text-[color:var(--color-steel-200)]"
              >
                <Phone className="h-4 w-4 text-[color:var(--color-cyan-400)]" />
                Kakinada, Andhra Pradesh
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
