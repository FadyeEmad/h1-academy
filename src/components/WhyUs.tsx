const features = [
  {
    title: 'Instructors with industry tenure',
    body: 'Faculty blend teaching craft with recent field experience—so examples stay relevant and candid.',
  },
  {
    title: 'Project-first pedagogy',
    body: 'You ship work you can show: briefs mirror real constraints, not textbook hypotheticals.',
  },
  {
    title: 'Career services integrated',
    body: 'Advising is not an add-on; milestones include positioning, practice interviews, and portfolio polish.',
  },
  {
    title: 'Modern, modular curriculum',
    body: 'Content updates track toolchains and standards; electives let you deepen where it matters for your path.',
  },
  {
    title: 'Support that respects your time',
    body: 'Structured office hours, async feedback SLAs, and cohort channels keep you unblocked between sessions.',
  },
  {
    title: 'Flexible learning formats',
    body: 'Blend live sessions with structured async work—designed for professionals balancing competing priorities.',
  },
]

function FeatureIcon({ index }: { index: number }) {
  const icons = [
    <path key="a" strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />,
    <path key="b" strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0022 16.25v-5.18a2.652 2.652 0 00-1.25-2.25L15.75 7.5l-4.364 4.364a2.652 2.652 0 01-3.182 0L3.75 7.5m6 6l-1.59 1.59a2.652 2.652 0 01-3.182 0L3.75 7.5" />,
    <path key="c" strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />,
    <path key="d" strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />,
    <path key="e" strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />,
    <path key="f" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />,
  ]
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      {icons[index % icons.length]}
    </svg>
  )
}

export function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-brand-950 py-16 text-white sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-brand-700/40 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-light">Why Meridian</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Built for learners who expect substance
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-100/90 sm:text-lg">
            Our advantage is not a single gimmick—it is the cumulative effect of people, process, and accountability
            working together.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-soft backdrop-blur-sm transition duration-300 hover:border-accent/40 hover:bg-white/[0.1]"
            >
              <div className="inline-flex rounded-xl bg-accent/15 p-3 text-accent-light transition group-hover:bg-accent/25">
                <FeatureIcon index={i} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-100/85">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
