import { createFileRoute } from "@tanstack/react-router";
import { Award, Compass, Handshake, ShieldCheck, Users } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CTABand, PageHero, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Marigaiss India Pvt. Ltd." },
      {
        name: "description",
        content:
          "Founded in 2019 in Kakinada, Marigaiss India is a founder-led marine engineering company delivering equipment, rental assets and machined components.",
      },
      { property: "og:title", content: "About Marigaiss India" },
      {
        property: "og:description",
        content: "Our story, founder, corporate facts and values.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const FACTS: [string, string][] = [
  ["CIN", "U74999AP2019PTC112057"],
  ["Registration No.", "112057"],
  ["Date of Incorporation", "31 May 2019"],
  ["Authorized Capital", "₹1,00,00,000"],
  ["Paid-up Capital", "₹1,00,00,000"],
  ["Company Type", "Active · Non-Govt. Private"],
  ["Directors", "Lenin Lankey · Surya Kala Lanke"],
  ["Headquarters", "Kakinada, Andhra Pradesh"],
];

const TIMELINE = [
  { year: "2019", title: "Incorporation", body: "Marigaiss India Private Limited registered in Kakinada with a focused marine-engineering mandate." },
  { year: "2020", title: "Marine equipment supply", body: "Began supplying boat propellers, ferries and related marine equipment to regional operators." },
  { year: "2022", title: "Rental services expansion", body: "Added tug & barge services and dumb-barge setups to the rental portfolio." },
  { year: "2024", title: "Machined components & handling", body: "Extended to industrial cranes, straddle carriers and precision machined components." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="About Marigaiss India"
        subtitle="A founder-led marine engineering company, built in Kakinada, serving maritime and industrial work across India."
        image="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2000&q=80"
      />

      {/* STORY */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--color-ocean-500)]">
              Our story
            </p>
            <h2 className="text-balance text-3xl font-bold text-[color:var(--color-navy-900)] md:text-4xl">
              Built on the deck, run from the drafting table.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-600">
              <p>
                Marigaiss India was founded in 2019 by an experienced marine engineer with a
                conviction that maritime work in India deserves better-supplied equipment,
                more reliable rental fleets and the engineering rigor of a precision shop.
              </p>
              <p>
                From our office on Cinema Road in Kakinada, we supply marine equipment, rent
                heavy machinery and deliver machined components — combining hands-on
                shipbuilding experience with disciplined project execution.
              </p>
            </div>
          </Reveal>

          {/* Founder card */}
          <Reveal delay={150}>
            <div className="rounded-2xl border border-[color:var(--color-steel-200)] bg-white p-7 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-hero font-display text-2xl font-bold text-white">
                  LL
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-ocean-500)]">
                    Founder & Director
                  </p>
                  <p className="font-display text-lg font-semibold text-[color:var(--color-navy-900)]">
                    Lenin Lankey
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">
                Marine engineer with strong experience across shipbuilding and marine operations.
                Educated in Naval Architecture & Marine Engineering at the Institute of Marine
                Engineers, India.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["AutoCAD", "Marine Engineering", "Shipbuilding", "Requirements Analysis", "Leadership"].map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-[color:var(--color-mist-50)] px-3 py-1 text-xs font-medium text-[color:var(--color-navy-900)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FACT PANEL */}
      <section className="bg-[color:var(--color-mist-50)] py-20 md:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Corporate facts" title="At a glance." />
          <Reveal>
            <div className="mt-10 overflow-hidden rounded-2xl border border-[color:var(--color-steel-200)] bg-white">
              <dl className="grid divide-y divide-[color:var(--color-steel-200)] md:grid-cols-2 md:divide-y-0">
                {FACTS.map(([k, v], i) => (
                  <div
                    key={k}
                    className={`flex items-center justify-between gap-6 px-6 py-5 md:px-8 ${
                      i % 2 === 1 ? "md:border-l md:border-[color:var(--color-steel-200)]" : ""
                    } ${i >= 2 && "md:border-t md:border-[color:var(--color-steel-200)]"}`}
                  >
                    <dt className="text-sm font-medium text-slate-500">{k}</dt>
                    <dd className="text-right font-mono text-sm font-semibold text-[color:var(--color-navy-900)] md:text-base">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our values"
            title="What clients consistently get from us."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Reliability", body: "Equipment that shows up ready and stays running through the job." },
              { icon: Compass, title: "Engineering Precision", body: "Specifications, drawings and components held to a marine-engineering bar." },
              { icon: Handshake, title: "Customer Partnership", body: "Direct contact, transparent updates and accountability end to end." },
            ].map((v) => (
              <Reveal key={v.title}>
                <div className="rounded-2xl border border-[color:var(--color-steel-200)] p-8 transition hover:-translate-y-1 hover:border-[color:var(--color-ocean-500)] hover:shadow-[var(--shadow-card)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-mist-50)] text-[color:var(--color-ocean-500)]">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-[color:var(--color-navy-900)]">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-[color:var(--color-mist-50)] py-20 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Milestones" title="The Marigaiss timeline." />
          <div className="relative mt-14 md:mx-auto md:max-w-3xl">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-[color:var(--color-steel-200)] md:left-1/2" />
            <div className="space-y-10">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={i * 80}>
                  <div className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}>
                    <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                      <span className="font-mono text-sm font-semibold text-[color:var(--color-ocean-500)]">
                        {t.year}
                      </span>
                      <h3 className="mt-1 font-display text-xl font-semibold text-[color:var(--color-navy-900)]">
                        {t.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.body}</p>
                    </div>
                    <span className="absolute left-2.5 top-1.5 h-4 w-4 rounded-full border-4 border-white bg-[color:var(--color-ocean-500)] md:left-1/2 md:-translate-x-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTORS */}
      <section className="py-20 md:py-24">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { name: "Lenin Lankey", role: "Director · Founder" },
              { name: "Surya Kala Lanke", role: "Director" },
            ].map((d) => (
              <Reveal key={d.name}>
                <div className="flex items-center gap-5 rounded-2xl bg-[color:var(--color-mist-50)] p-6">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-cta text-white">
                    <Users className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-[color:var(--color-navy-900)]">
                      {d.name}
                    </p>
                    <p className="text-sm text-slate-500">{d.role}</p>
                  </div>
                  <Award className="ml-auto h-6 w-6 text-[color:var(--color-ocean-500)]" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Want to work with a focused marine-engineering partner?" />
    </>
  );
}
