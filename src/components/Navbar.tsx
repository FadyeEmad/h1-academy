import { useEffect, useState } from 'react'
import { Logo } from './Logo'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-brand-200/80 bg-parchment/90 shadow-soft backdrop-blur-md'
          : 'border-b border-transparent bg-parchment/70 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo showWordmark={false} imgClassName="h-9 w-auto sm:h-10" className="min-w-0" />

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-brand-800 transition-colors hover:bg-brand-100/80 hover:text-brand-950"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="rounded-full bg-brand-900 px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:bg-brand-800 hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Enroll Today
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-200/80 bg-white/80 text-brand-900 shadow-sm backdrop-blur lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-full rounded-full bg-current transition ${
                open ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-full rounded-full bg-current transition ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-3 block h-0.5 w-full rounded-full bg-current transition ${
                open ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`fixed inset-0 top-[57px] z-40 bg-brand-950/40 backdrop-blur-sm transition-opacity lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed inset-x-0 top-[57px] z-50 mx-4 max-h-[calc(100vh-4rem)] overflow-y-auto rounded-2xl border border-brand-200/90 bg-parchment shadow-card transition-all duration-300 ease-out lg:hidden ${
          open
            ? 'translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none -translate-y-2 scale-[0.98] opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-0.5 p-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block rounded-xl px-4 py-3 text-base font-medium text-brand-900 transition hover:bg-brand-100"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              className="block rounded-full bg-brand-900 px-4 py-3 text-center text-base font-semibold text-white shadow-card transition hover:bg-brand-800"
              onClick={() => setOpen(false)}
            >
              Enroll Today
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
