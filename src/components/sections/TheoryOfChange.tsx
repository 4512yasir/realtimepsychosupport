const changeSteps = [
  {
    number: "01",
    title: "Access",
    description:
      "People and communities gain access to affordable, quality mental health and psychosocial support.",
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
      "People develop healthier coping mechanisms, emotional awareness, confidence, and the ability to navigate adversity.",
    accent: "green",
  },
  {
    number: "04",
    title: "Stronger Families",
    description:
      "Improved emotional wellbeing strengthens relationships, families, schools, and workplaces.",
    accent: "blue",
  },
  {
    number: "05",
    title: "Healthier Communities",
    description:
      "Resilient individuals and families contribute to safer, healthier, and more empowered communities.",
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
      {/* Background decoration */}

      <div
        aria-hidden="true"
        className="absolute -right-48 top-20 h-[500px] w-[500px] rounded-full bg-brand-purple-light/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -left-48 bottom-0 h-[450px] w-[450px] rounded-full bg-brand-blue-light/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="max-w-4xl">

          <div className="flex items-center gap-3">
            <span className="h-1 w-10 rounded-full bg-brand-green" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-green-dark">
              Our Approach
            </span>
          </div>

          <p className="mt-5 text-sm font-medium uppercase tracking-wider text-text-muted">
            Theory of Change
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            From access to care to{" "}
            <span className="text-brand-purple">
              lasting change.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">
            We believe that when people have access to quality mental health
            services, psychosocial support, and opportunities to build
            resilience, they become better equipped to overcome adversity and
            participate meaningfully in their families and communities.
          </p>

        </div>

        {/* =====================================================
            CORE THEORY
        ===================================================== */}

        <div className="mt-16 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-border sm:p-10 lg:p-12">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            {/* Left statement */}

            <div>

              <span className="inline-flex rounded-full bg-brand-blue-light px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
                Why Our Work Matters
              </span>

              <h3 className="mt-6 text-2xl font-bold leading-tight text-text-primary sm:text-3xl">
                Investing in emotional wellbeing today creates stronger
                communities tomorrow.
              </h3>

              <p className="mt-5 text-sm leading-7 text-text-secondary sm:text-base">
                Mental wellbeing affects how people learn, work, build
                relationships, respond to adversity, and participate in
                society. Our approach therefore looks beyond individual
                counselling to the wider systems and relationships that shape
                people's lives.
              </p>

              {/* Outcome statement */}

              <div className="mt-8 rounded-2xl border-l-4 border-brand-green bg-brand-green-light p-5">
                <p className="text-sm font-semibold leading-7 text-brand-green-dark">
                  Better mental wellbeing contributes to healthier families,
                  safer communities, and sustainable development.
                </p>
              </div>

            </div>

            {/* Right visual flow */}

            <div className="relative">

              {/* Connecting line */}

              <div
                aria-hidden="true"
                className="absolute left-[22px] top-8 hidden h-[calc(100%-64px)] w-px bg-border sm:block"
              />

              <div className="space-y-4">

                {changeSteps.map((step) => {

                  const style =
                    accentStyles[
                      step.accent as keyof typeof accentStyles
                    ];

                  return (
                    <div
                      key={step.number}
                      className="group relative flex gap-5 rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:bg-white hover:shadow-md sm:p-6"
                    >

                      {/* Number */}

                      <div
                        className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${style.number}`}
                      >
                        {step.number}
                      </div>

                      <div className="min-w-0">

                        <div className="flex flex-wrap items-center gap-3">

                          <h4 className="font-bold text-text-primary">
                            {step.title}
                          </h4>

                          <span
                            className={`h-1 w-5 rounded-full ${style.line}`}
                          />

                        </div>

                        <p className="mt-2 text-sm leading-6 text-text-secondary">
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

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                The Change We Seek
              </p>

              <h3 className="mt-4 max-w-3xl text-2xl font-bold leading-tight text-white sm:text-3xl">
                A mentally healthy, resilient, and empowered society where
                everyone can access quality support.
              </h3>

            </div>

            {/* Brand mark */}

            <div className="flex items-center gap-2">

              <div className="h-3 w-3 rounded-full bg-white" />
              <div className="h-3 w-3 rounded-full bg-brand-purple" />
              <div className="h-3 w-3 rounded-full bg-brand-green" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}