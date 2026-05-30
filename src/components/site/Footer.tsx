import { Link } from "@tanstack/react-router";
import { Anchor, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[color:var(--color-navy-900)] text-[color:var(--color-steel-200)]">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cta">
              <Anchor className="h-5 w-5 text-white" />
            </span>
            <span>
              <span className="block font-display text-lg font-bold">MARIGAISS</span>
              <span className="block text-[10px] tracking-[0.2em]">INDIA PVT. LTD.</span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Marine equipment supply, heavy-machinery rental and precision machined components,
            engineered from Kakinada since 2019.
          </p>
          <p className="mt-4 text-xs tracking-wide text-[color:var(--color-steel-300)]">
            @Marigaissindiapvtltd
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
            Navigate
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Services", "/services"],
              ["Clients", "/clients"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link to={href} className="transition hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
            Services
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li>Marine Equipment</li>
            <li>Tug & Barge Rental</li>
            <li>Industrial & Derrick Cranes</li>
            <li>Material Handling</li>
            <li>Machined Components</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
            Contact
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-cyan-400)]" />
              <span>
                D.No: 13-3-1/1, 3rd Floor, Citizen Co-Op. Society Bank, Cinema Road,
                Kakinada – 533001, AP, India
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-cyan-400)]" />
              <a href="mailto:marigaissindia@gmail.com" className="hover:text-white">
                marigaissindia@gmail.com
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-cyan-400)]" />
              <a href="mailto:lenin.lankey@gmail.com" className="hover:text-white">
                lenin.lankey@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-2 py-6 text-xs text-[color:var(--color-steel-300)] md:flex-row md:items-center">
          <p>© 2019–{year} Marigaiss India Private Limited. All rights reserved.</p>
          <p className="font-mono">CIN: U74999AP2019PTC112057</p>
        </div>
      </div>
    </footer>
  );
}
