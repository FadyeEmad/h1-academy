const quotes = [
  {
    name: 'Elena Marchetti',
    role: 'Product Operations Lead',
    quote:
      'The cohort model forced me to produce work I could defend in interviews. Within eight weeks of finishing, I accepted an offer above my target range.',
  },
  {
    name: 'James Okonkwo',
    role: 'Financial Analyst',
    quote:
      'Instructors were direct about where my outputs were thin—and exactly how to strengthen them. That honesty accelerated my growth more than any self-paced course.',
  },
  {
    name: 'Sofia Rahman',
    role: 'UX Designer',
    quote:
      'Career studio sessions turned my portfolio from a folder of files into a coherent story. The academy treated my transition like a project—with milestones.',
  },
]

export function Testimonials() {
  return (
    <section className="bg-section-fade py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-dark">Voices from our cohorts</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-950 sm:text-4xl">
            Outcomes you can recognize
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {quotes.map((q) => (
            <blockquote
              key={q.name}
              className="flex flex-col rounded-2xl border border-brand-200/90 bg-white p-6 shadow-soft transition duration-300 hover:shadow-card sm:p-8"
            >
              <div className="mb-4 text-accent" aria-hidden>
                <svg className="h-8 w-8 opacity-90" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>
              </div>
              <p className="flex-1 text-base leading-relaxed text-brand-800">&ldquo;{q.quote}&rdquo;</p>
              <footer className="mt-6 border-t border-brand-100 pt-5">
                <cite className="not-italic">
                  <span className="font-semibold text-brand-950">{q.name}</span>
                  <span className="mt-0.5 block text-sm text-brand-600">{q.role}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
