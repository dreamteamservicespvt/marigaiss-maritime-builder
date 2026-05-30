import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Anchor,
  Ship,
  Construction,
  Wrench,
  ShieldCheck,
  Truck,
  Waves,
  ArrowRight,
  Container,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CTABand, SectionHeading, StatCountUp } from "@/components/site/ui";
import galleryTugboat from "@/assets/gallery-tugboat.jpg";
import galleryCrane from "@/assets/gallery-crane.jpg";
import galleryFerry from "@/assets/gallery-ferry.jpg";
import galleryPropeller from "@/assets/gallery-propeller.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marigaiss India — Engineering the Maritime Edge" },
      {
        name: "description",
        content:
          "Marine equipment supply, tug & barge rental, industrial cranes and machined components — engineered from Kakinada since 2019.",
      },
      { property: "og:title", content: "Marigaiss India — Engineering the Maritime Edge" },
      {
        property: "og:description",
        content: "Marine Equipment. Heavy Lifting. Trusted Delivery.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const SERVICES = [
  {
    icon: Ship,
    title: "Marine Equipment",
    desc: "Boat propellers and passenger ferries engineered for reliability.",
  },
  {
    icon: Anchor,
    title: "Rental Assets",
    desc: "Tug & barge services and dumb-barge setups, on call when you need them.",
  },
  {
    icon: Construction,
    title: "Industrial Cranes",
    desc: "Standard industrial cranes and derrick cranes for heavy lifting.",
  },
  {
    icon: Container,
    title: "Material Handling",
    desc: "Straddle carriers (platters) and precision machined components.",
  },
];

const CAPABILITIES = [
  "AutoCAD",
  "Naval Architecture",
  "Shipbuilding",
  "Requirements Analysis",
  "Marine Engineering",
  "Leadership",
];

const GALLERY = [
  { src: galleryCrane, alt: "Industrial port crane lifting cargo" },
  { src: galleryTugboat, alt: "Harbour tugboat in operation" },
  { src: galleryPropeller, alt: "Precision marine propeller component" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-hero">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2000&q=80"
            alt="Aerial view of a container port with cranes"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-navy-900)]/85 via-[color:var(--color-navy-800)]/70 to-[color:var(--color-ocean-600)]/60" />
        </div>

        <div className="container-x flex min-h-[100svh] flex-col justify-center pt-28 pb-24">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-cyan-400)]/30 bg-[color:var(--color-cyan-400)]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-cyan-400)] backdrop-blur-md shadow-[0_0_24px_-8px_rgba(34,184,207,0.5)] sm:px-4 sm:text-xs sm:tracking-[0.2em]">
              <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-[color:var(--color-cyan-400)]" />
              <Waves className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span>Marine Engineering</span>
              <span className="h-3 w-px bg-[color:var(--color-cyan-400)]/40" />
              <span>Since 2019</span>
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1
              className="max-w-5xl text-balance font-display font-bold text-white"
              style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
            >
              Engineering the{" "}
              <span className="bg-gradient-to-r from-[color:var(--color-cyan-400)] to-white bg-clip-text text-transparent">
                Maritime Edge
              </span>
              .
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--color-steel-200)] md:text-xl">
              Marigaiss India supplies, rents and engineers maritime and heavy-machinery
              solutions — propellers, ferries, tugs, barges, cranes and machined components,
              trusted by industry from Kakinada outward.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-xl bg-cta px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-elegant)] transition hover:-translate-y-0.5"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Wave divider */}
        <svg
          className="absolute inset-x-0 bottom-0 h-16 w-full text-white md:h-24"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0 60 Q360 0 720 60 T1440 60 V120 H0 Z"
            fill="currentColor"
          />
        </svg>
      </section>

      {/* STATS STRIP */}
      <section className="bg-[color:var(--color-navy-900)] py-12">
        <div className="container-x grid grid-cols-2 gap-6 md:grid-cols-4">
          <StatCountUp value={2019} label="Established" />
          <StatCountUp value={1} suffix=" Cr" label="₹ Authorized Capital" />
          <StatCountUp value={4} suffix="+" label="Service Verticals" />
          <StatCountUp value={100} suffix="%" label="Founder-Led" />
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-28">
        <div className="container-x grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--color-ocean-500)]">
              Who we are
            </p>
            <h2 className="text-balance text-3xl font-bold text-[color:var(--color-navy-900)] md:text-5xl">
              A marine-engineering company built on precision and trust.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Incorporated in 2019 and headquartered in Kakinada, Marigaiss India brings
              hands-on marine engineering, a versatile rental fleet and a precision
              machining mindset to every project we deliver.
            </p>
            <ul className="mt-8 space-y-3 text-slate-700">
              {[
                "Founder-led by a qualified marine engineer",
                "End-to-end supply, rental and support",
                "Engineering precision from spec to delivery",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-ocean-500)]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150} className="relative">
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
              <img
                src={galleryTugboat}
                alt="Harbour tugboat at work"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden max-w-xs rounded-2xl bg-white p-5 shadow-[var(--shadow-card)] md:block">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-mist-50)] text-[color:var(--color-ocean-500)]">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-[color:var(--color-navy-900)]">
                    Quality You Can Trust
                  </p>
                  <p className="text-xs text-slate-500">
                    Engineered & inspected to standard
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-[color:var(--color-mist-50)] py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we do"
            title="Four ways we move maritime work forward."
            subtitle="From propellers to platters — a focused portfolio built around what ports, yards and industrial sites actually need."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <Link
                  to="/services"
                  className="group flex h-full flex-col rounded-2xl border border-[color:var(--color-steel-200)] bg-white p-7 transition hover:-translate-y-1 hover:border-[color:var(--color-cyan-400)] hover:shadow-[var(--shadow-card)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-mist-50)] text-[color:var(--color-ocean-500)] transition group-hover:bg-cta group-hover:text-white">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-[color:var(--color-navy-900)]">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {s.desc}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--color-ocean-500)]">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MARIGAISS */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Marigaiss"
            title="A small team. A serious capability set."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Anchor, title: "Marine engineering expertise", body: "Specification, sourcing and supply led by a qualified marine engineer." },
              { icon: Truck, title: "Rental fleet & heavy lifting", body: "Tugs, barges and cranes ready to deploy for the work ahead." },
              { icon: Wrench, title: "Precision machined components", body: "Built-to-spec parts where tolerance and reliability matter." },
              { icon: ShieldCheck, title: "Founder-led delivery", body: "Direct accountability from first call to final handover." },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="rounded-2xl border border-[color:var(--color-steel-200)] p-7 transition hover:border-[color:var(--color-ocean-500)]">
                  <f.icon className="h-7 w-7 text-[color:var(--color-ocean-500)]" />
                  <h3 className="mt-5 font-display text-lg font-semibold text-[color:var(--color-navy-900)]">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES BAND */}
      <section className="bg-[color:var(--color-navy-900)] py-16">
        <div className="container-x">
          <Reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-cyan-400)]">
              Capabilities
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {CAPABILITIES.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Capabilities in action"
            title="A glimpse of the work we serve."
            subtitle="From port operations to industrial sites — the environments where our equipment and engineering earn their keep."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {GALLERY.map((g, i) => (
              <Reveal key={g.src} delay={i * 100}>
                <Link
                  to="/clients"
                  className="group block overflow-hidden rounded-2xl bg-[color:var(--color-navy-900)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={g.src}
                      alt={g.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-navy-900)]/80 via-transparent to-transparent" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        secondary={{ label: "See Our Services", to: "/services" }}
      />
    </>
  );
}
