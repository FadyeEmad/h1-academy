import { Logo } from './Logo'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-brand-950 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28"
    >
      <div className="absolute inset-0 bg-mesh-hero" aria-hidden />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/85 via-brand-900/75 to-brand-950/95" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center lg:mx-0 lg:max-w-3xl lg:items-start lg:text-left">
          <div className="mb-6 animate-fade-up opacity-0 [animation-delay:0.05s] lg:mb-8">
            <Logo
              showWordmark={false}
              imgClassName="mx-auto h-16 w-auto drop-shadow-lg lg:mx-0 lg:h-20"
              className="justify-center lg:justify-start"
            />
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent-light/95 sm:text-sm animate-fade-up opacity-0 [animation-delay:0.1s]">
            Professional education · Lifelong learning
          </p>
          <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white text-balance sm:text-4xl sm:leading-tight md:text-5xl lg:text-[3.25rem] xl:text-6xl animate-fade-up opacity-0 [animation-delay:0.15s]">
            Where ambition meets{' '}
            <span className="bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
              structured excellence
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-100/95 sm:text-lg animate-fade-up opacity-0 [animation-delay:0.2s]">
            Meridian Academy delivers rigorous programs, expert-led instruction, and a supportive environment
            designed for learners who expect more than a certificate—they expect a measurable step forward in
            their careers.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start animate-fade-up opacity-0 [animation-delay:0.25s]">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-center text-base font-semibold text-brand-950 shadow-glow transition hover:bg-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light"
            >
              Join Now
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:border-accent/50 hover:bg-white/10"
            >
              Explore programs
            </a>
          </div>

          <dl className="mt-12 grid w-full max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-8 text-left sm:max-w-2xl lg:max-w-none animate-fade-up opacity-0 [animation-delay:0.3s]">
            {[
              { k: '15+', v: 'Years of delivery' },
              { k: '98%', v: 'Completion satisfaction' },
              { k: '40+', v: 'Industry partners' },
            ].map((item) => (
              <div key={item.k} className="text-center lg:text-left">
                <dt className="font-display text-2xl font-semibold text-white sm:text-3xl">{item.k}</dt>
                <dd className="mt-1 text-xs text-brand-200/90 sm:text-sm">{item.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl sm:h-80 sm:w-80"
        aria-hidden
      />
    </section>
  )
}
