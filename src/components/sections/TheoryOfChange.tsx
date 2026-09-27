const changeSteps = [
  {
    number: "01",
    title: "Access",
    description:
      "People and communities gain access to affordable, quality mental health and psychosocial support that responds to their needs.",
    accent: "blue",
  },
  {
    number: "02",
    title: "Support",
    description:
      "Individuals receive counselling, psychosocial care, education, mentorship, and trauma-informed support.",
    accent: "purple",
  },
  {
    number: "03",
    title: "Resilience",
    description:
      "People strengthen emotional awareness, healthier coping mechanisms, confidence, and their ability to navigate adversity.",
    accent: "green",
  },
  {
    number: "04",
    title: "Stronger Relationships",
    description:
      "Improved emotional wellbeing strengthens relationships within families, schools, workplaces, and communities.",
    accent: "blue",
  },
  {
    number: "05",
    title: "Healthier Communities",
    description:
      "Resilient individuals and supportive relationships contribute to safer, healthier, and more empowered communities.",
    accent: "purple",
  },
];

const accentStyles = {
  blue: {
    number: "bg-brand-blue-light text-brand-blue",
    line: "bg-brand-blue",
  },
  purple: {
    number: "bg-brand-purple-light text-brand-purple",
    line: "bg-brand-purple",
  },
  green: {
    number: "bg-brand-green-light text-brand-green",
    line: "bg-brand-green",
  },
};

export default function TheoryOfChange() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-surface py-24 sm:py-28 lg:py-36"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        aria-hidden="true"
        className="absolute -right-48 top-20 h-[500px] w-[500px] rounded-full bg-brand-purple-light/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -left-48 bottom-0 h-[450px] w-[450px] rounded-full bg-brand-blue-light/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-green-light/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-1 w-10 rounded-full bg-brand-green" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-green-dark">
              Our Approach
            </span>

            <span className="h-1 w-10 rounded-full bg-brand-green" />
          </div>

          <p className="mt-6 text-sm font-medium uppercase tracking-wider text-text-muted">
            Theory of Change
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            From access to care to{" "}
            <span className="text-brand-purple">lasting change.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">
            We believe that when people have access to quality mental health
            services, psychosocial support, and opportunities to build
            resilience, they are better equipped to navigate adversity,
            strengthen relationships, and contribute to healthier communities.
          </p>
        </div>

        {/* =====================================================
            CORE STATEMENT
        ===================================================== */}

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-border sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-light text-brand-blue">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  d="M12 3v18M3 12h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
              We Start With Access
            </p>

            <h3 className="mt-3 text-xl font-bold leading-tight text-text-primary">
              Support should be within reach.
            </h3>

            <p className="mt-4 text-sm leading-7 text-text-secondary">
              We work to reduce barriers that prevent individuals and
              communities from accessing appropriate mental health and
              psychosocial support.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-border sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-purple-light text-brand-purple">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  d="M20 11.5a7.5 7.5 0 0 1-11.8 6.1L4 19l1.4-4.2A7.5 7.5 0 1 1 20 11.5Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-purple">
              We Focus On People
            </p>

            <h3 className="mt-3 text-xl font-bold leading-tight text-text-primary">
              Care goes beyond counselling.
            </h3>

            <p className="mt-4 text-sm leading-7 text-text-secondary">
              Our work considers the emotional, social, family, school, and
              community environments that influence mental wellbeing.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-border sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green-light text-brand-green-dark">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  d="M5 19c4.5-1 8-4.5 9-9M5 19c1-4.5 4.5-8 9-9M5 19c4.5 0 8-1 11-4 3-3 3-7 3-10-3 0-7 0-10 3-3 3-4 6.5-4 11Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-green-dark">
              We Aim For Change
            </p>

            <h3 className="mt-3 text-xl font-bold leading-tight text-text-primary">
              Resilience can grow.
            </h3>

            <p className="mt-4 text-sm leading-7 text-text-secondary">
              Through sustained support, people can build skills, confidence,
              healthier coping strategies, and stronger connections.
            </p>
          </div>
        </div>

        {/* =====================================================
            CHANGE PATHWAY
        ===================================================== */}

        <div className="mt-8 overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-border">
          {/* Pathway header */}
          <div className="border-b border-border p-7 sm:p-9 lg:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                  Our Change Pathway
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-tight text-text-primary sm:text-3xl">
                  How our work contributes to lasting impact.
                </h3>
              </div>

              <p className="max-w-md text-sm leading-6 text-text-secondary">
                Our approach connects individual support with stronger
                relationships and healthier communities.
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="relative">
              {/* Connecting line */}
              <div
                aria-hidden="true"
                className="absolute left-[23px] top-6 hidden h-[calc(100%-48px)] w-px bg-border sm:block"
              />

              <div className="space-y-4">
                {changeSteps.map((step) => {
                  const style =
                   accentStyles[step.accent as keyof typeof accentStyles];

                  return (
                    <div
                      key={step.number}
                      className="group relative flex gap-5 rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md sm:p-6"
                    >
                      {/* Number */}
                      <div
                        className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xs font-bold ${style.number}`}
                      >
                        {step.number}
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h4 className="text-base font-bold text-text-primary sm:text-lg">
                            {step.title}
                          </h4>

                          <span
                            className={`h-1 w-6 rounded-full ${style.line}`}
                          />
                        </div>

                        <p className="mt-2 max-w-3xl text-sm leading-7 text-text-secondary">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            FINAL OUTCOME
        ===================================================== */}

        <div className="relative mt-8 overflow-hidden rounded-[2rem] bg-brand-blue p-8 sm:p-10 lg:p-12">
          {/* Decorative shapes */}

          <div
            aria-hidden="true"
            className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-brand-purple opacity-70"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-28 -left-16 h-64 w-64 rounded-full bg-brand-green opacity-30"
          />

          <div
            aria-hidden="true"
            className="absolute right-1/3 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border border-white/10"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                The Change We Seek
              </p>

              <h3 className="mt-4 max-w-3xl text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                A mentally healthy, resilient, and empowered society where
                people can access quality support and thrive.
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                By strengthening individuals, families, institutions, and
                communities, we seek to make mental wellbeing part of
                healthier and more supportive environments.
              </p>
            </div>

            {/* Brand mark */}
            <div className="relative flex h-32 w-32 items-center justify-center">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full border border-white/15"
              />

              <div
                aria-hidden="true"
                className="absolute inset-4 rounded-full border border-brand-purple/40"
              />

              <div
                aria-hidden="true"
                className="absolute inset-8 rounded-full border border-brand-green/50"
              />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-blue shadow-lg">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    d="M12 21s-7-4.35-9.5-8.5C.5 8.5 2.5 5 6 5c2 0 3.5 1.2 4.5 2.5C11.5 6.2 13 5 15 5c3.5 0 5.5 3.5 3.5 7.5C19 16.65 12 21 12 21Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            CLOSING STATEMENT
        ===================================================== */}

        <div className="mt-10 text-center">
          <p className="mx-auto max-w-2xl text-sm leading-7 text-text-muted">
            Lasting change happens when people are supported not only as
            individuals, but within the families, schools, workplaces, and
            communities where they live.
          </p>
        </div>
      </div>
    </section>
  );
}