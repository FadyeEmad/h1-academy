import { Logo } from './Logo'

const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#contact', label: 'Contact' },
]

const social = [
  { name: 'LinkedIn', href: '#' },
  { name: 'YouTube', href: '#' },
  { name: 'Instagram', href: '#' },
]

export function Footer() {
  return (
    <footer className="border-t border-brand-200/80 bg-parchment">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Logo showWordmark={false} imgClassName="h-10 w-auto sm:h-11" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-brand-700">
              Meridian Academy prepares professionals for what comes next—through rigorous instruction, applied
              projects, and advising that respects both ambition and schedule.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-800 transition hover:border-accent hover:text-accent-dark"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7 lg:justify-items-end">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-950">Explore</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-brand-700 transition hover:text-brand-950">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-950">Contact</h3>
              <ul className="mt-4 space-y-2 text-sm text-brand-700">
                <li>
                  <a href="mailto:hello@meridianacademy.edu" className="transition hover:text-brand-950">
                    hello@meridianacademy.edu
                  </a>
                </li>
                <li>
                  <a href="tel:+15555550100" className="transition hover:text-brand-950">
                    +1 (555) 555-0100
                  </a>
                </li>
                <li className="pt-1 leading-relaxed">
                  1200 Harbor Exchange
                  <br />
                  Suite 400 · Riverton, ST 01920
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-950">Hours</h3>
              <p className="mt-4 text-sm leading-relaxed text-brand-700">
                Mon–Fri · 9:00–18:00
                <br />
                Sat · By appointment
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-brand-200/80 pt-8 text-xs text-brand-600 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Meridian Academy. All rights reserved.</p>
          <p className="flex flex-wrap gap-4">
            <a href="#" className="transition hover:text-brand-900">
              Privacy
            </a>
            <a href="#" className="transition hover:text-brand-900">
              Terms
            </a>
            <a href="#" className="transition hover:text-brand-900">
              Accessibility
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
