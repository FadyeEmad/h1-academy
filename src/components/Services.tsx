import { ServiceImage } from './ServiceImage'

/* Each entry maps 1:1 to public/images/service-N.jpg — swap titles/descriptions when you confirm what each photo represents. */
const services = [
  {
    image: '/images/service-1.jpg',
    accent: 'a' as const,
    title: 'Diploma & degree pathways',
    description:
      'Structured tracks that align with accreditation standards, combining foundational theory with assessed coursework and capstone projects.',
  },
  {
    image: '/images/service-2.jpg',
    accent: 'b' as const,
    title: 'Industry certification prep',
    description:
      'Focused preparation for recognized credentials—study plans, practice labs, and instructor-led review tied to exam blueprints.',
  },
  {
    image: '/images/service-3.jpg',
    accent: 'c' as const,
    title: 'Hands-on skills intensives',
    description:
      'Short, high-impact workshops in tools and methods employers use today, from data storytelling to collaborative delivery practices.',
  },
  {
    image: '/images/service-4.jpg',
    accent: 'd' as const,
    title: 'Advising & career studio',
    description:
      'One-to-one coaching, résumé and portfolio feedback, and introductions to our hiring partner network when you are role-ready.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative bg-parchment py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-dark">What we offer</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-brand-950 sm:text-4xl">
              Programs designed for real-world momentum
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-700 sm:text-lg">
              Each offering is built as a complete learning experience—not a loose bundle of videos. Expect
              clear outcomes, accountable milestones, and instructors who invest in your progress.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center self-start rounded-full border border-brand-300 bg-white px-5 py-2.5 text-sm font-semibold text-brand-900 shadow-sm transition hover:border-accent hover:bg-brand-50 lg:self-auto"
          >
            Request a syllabus
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-200/90 bg-white shadow-soft transition duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-card"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-100">
                <ServiceImage src={s.image} accent={s.accent} alt={s.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 via-transparent to-transparent opacity-80 transition group-hover:from-brand-950/40" />
                <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-900 shadow-sm backdrop-blur">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-display text-lg font-semibold leading-snug text-brand-950 transition group-hover:text-accent-dark sm:text-xl">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-700">{s.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-900 transition group-hover:gap-2 group-hover:text-accent-dark">
                  Learn more
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
