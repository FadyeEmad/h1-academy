export function ContactCTA() {
  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-brand-200/90 bg-gradient-to-br from-brand-900 via-brand-900 to-brand-950 px-6 py-12 shadow-card sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-brand-700/50 blur-3xl" aria-hidden />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white text-balance sm:text-3xl lg:text-4xl">
              Ready to enroll in the next cohort?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-100/95 sm:text-lg">
              Share your goals and background—our admissions team will recommend a pathway, timeline, and financing
              options that fit. No pressure, no generic brochure; just a thoughtful next step.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href="mailto:admissions@meridianacademy.edu"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-brand-950 shadow-glow transition hover:bg-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light"
              >
                Get Started
              </a>
              <a
                href="tel:+15555550100"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:border-accent/50 hover:bg-white/10"
              >
                Call +1 (555) 555-0100
              </a>
            </div>
            <p className="mt-6 text-sm text-brand-200/90">
              Typical reply within one business day · Secure inquiry form available on request
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
