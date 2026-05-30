import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUp } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-4 text-xs font-semibold uppercase tracking-[0.25em] ${
            light ? "text-[color:var(--color-cyan-400)]" : "text-[color:var(--color-ocean-500)]"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-balance text-3xl font-bold md:text-5xl ${
          light ? "text-white" : "text-[color:var(--color-navy-900)]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            light ? "text-[color:var(--color-steel-200)]" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

export function CTABand({
  title = "Need marine equipment or rental assets? Let's talk.",
  subtitle = "Our team responds within one business day.",
  primary = { label: "Contact Us", to: "/contact" },
  secondary,
}: {
  title?: string;
  subtitle?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <section className="relative overflow-hidden bg-hero py-20 md:py-24">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 800 400">
          <path
            d="M0 320 Q200 260 400 320 T800 320 V400 H0 Z"
            fill="rgba(34,184,207,0.25)"
          />
          <path
            d="M0 350 Q200 300 400 350 T800 350 V400 H0 Z"
            fill="rgba(21,101,166,0.3)"
          />
        </svg>
      </div>
      <div className="container-x relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
        <Reveal>
          <h2 className="text-balance text-3xl font-bold text-white md:text-4xl">{title}</h2>
          <p className="mt-3 text-[color:var(--color-steel-200)]">{subtitle}</p>
        </Reveal>
        <Reveal delay={120} className="flex flex-wrap gap-3">
          <Link
            to={primary.to}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--color-navy-900)] transition hover:-translate-y-0.5 hover:bg-[color:var(--color-cyan-400)] hover:text-[color:var(--color-navy-900)]"
          >
            {primary.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
          {secondary && (
            <Link
              to={secondary.to}
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {secondary.label}
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-navy-900)] text-white shadow-[var(--shadow-elegant)] transition hover:bg-[color:var(--color-ocean-500)]"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-hero pt-32 pb-20 md:pt-40 md:pb-24">
      {image && (
        <div className="absolute inset-0 -z-10">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[color:var(--color-navy-900)]/60" />
        </div>
      )}
      <div className="container-x">
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--color-cyan-400)]">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-4xl text-balance font-display text-4xl font-bold text-white md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-[color:var(--color-steel-200)]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export function StatCountUp({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const [n, setN] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = (el: HTMLDivElement | null) => {
    if (!el || started) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setStarted(true);
        const start = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    });
    io.observe(el);
  };
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-bold text-white md:text-5xl">
        {n}
        {suffix}
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.18em] text-[color:var(--color-steel-200)]">
        {label}
      </div>
    </div>
  );
}
