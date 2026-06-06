import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logoAsset from "@/assets/mipl-logo.png.asset.json";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[color:var(--color-navy-900)] text-[color:var(--color-steel-200)]">
      <div className="container-x grid grid-cols-2 gap-6 py-10 md:gap-12 md:py-16 lg:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-white/15 md:h-11 md:w-11">
              <img src={logoAsset.url} alt="MIPL logo" className="h-8 w-8 object-contain md:h-9 md:w-9" />
            </span>
            <span>
              <span className="block font-display text-base font-bold md:text-lg">MARIGAISSS</span>
              <span className="block text-[10px] tracking-[0.2em]">INDIA PVT. LTD.</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-xs leading-relaxed md:mt-5 md:text-sm">
            Marine equipment supply, heavy-machinery rental and precision machined components,
            engineered from Kakinada since 2019.
          </p>
          <p className="mt-3 text-[11px] tracking-wide text-[color:var(--color-steel-300)] md:mt-4 md:text-xs">
            @Marigaissindiapvtltd
          </p>
        </div>

        <div className="col-span-1">
          <h4 className="font-display text-xs font-semibold uppercase tracking-widest text-white md:text-sm">
            Navigate
          </h4>
          <ul className="mt-3 space-y-2 text-sm md:mt-5 md:space-y-3">
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

        <div className="col-span-1">
          <h4 className="font-display text-xs font-semibold uppercase tracking-widest text-white md:text-sm">
            Services
          </h4>
          <ul className="mt-3 space-y-2 text-sm md:mt-5 md:space-y-3">
            <li>Marine Equipment</li>
            <li>Tug & Barge Rental</li>
            <li>Industrial & Derrick Cranes</li>
            <li>Material Handling</li>
            <li>Machined Components</li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h4 className="font-display text-xs font-semibold uppercase tracking-widest text-white md:text-sm">
            Contact
          </h4>
          <ul className="mt-3 space-y-2.5 text-xs md:mt-5 md:space-y-3 md:text-sm">
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
        <div className="container-x flex flex-col items-start justify-between gap-2 py-4 text-[11px] text-[color:var(--color-steel-300)] md:flex-row md:items-center md:py-6 md:text-xs">
          <p>© 2019–{year} Marigaiss India Private Limited. All rights reserved.</p>
          <p className="font-mono">CIN: U74999AP2019PTC112057</p>
        </div>
      </div>
    </footer>
  );
}
