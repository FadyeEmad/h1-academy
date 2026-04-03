const highlights = [
  {
    title: 'Evidence-based curriculum',
    body: 'Programs are mapped to industry competencies and refreshed annually with employer input.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: 'Mentored progression',
    body: 'Small cohort sizes and structured checkpoints keep learners on track without losing momentum.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.09 9.09 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 3.215 9.09 9.09 0 01-5.198-2.099m5.198 2.099c.181.324.374.63.582.912m0 0 .001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Career-aligned outcomes',
    body: 'Portfolio reviews, interview coaching, and alumni networks translate learning into opportunity.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
]

export function About() {
  return (
    <section id="about" className="relative bg-section-fade py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-dark">About the academy</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-950 sm:text-4xl">
            A deliberate approach to professional growth
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-700 sm:text-lg">
            Meridian Academy was founded to bridge the gap between formal education and the demands of modern
            employers. We combine academic rigor with applied projects, so graduates leave with clarity,
            confidence, and proof of what they can do—not just a transcript.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {highlights.map((h) => (
            <article
              key={h.title}
              className="group rounded-2xl border border-brand-200/80 bg-white/80 p-6 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-card"
            >
              <div className="inline-flex rounded-xl bg-brand-900/5 p-3 text-brand-900 transition group-hover:bg-accent/15 group-hover:text-accent-dark">
                {h.icon}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-brand-950">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-700">{h.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
