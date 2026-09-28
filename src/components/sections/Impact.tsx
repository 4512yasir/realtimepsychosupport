const impactStats = [
  {
    value: "1,000+",
    label: "Community members reached",
    description:
      "People reached through counselling, psychosocial support, awareness, outreach, and community-based programmes.",
    accent: "blue",
  },
  {
    value: "125",
    label: "Social workers trained",
    description:
      "Social workers equipped with Psychological First Aid skills to strengthen community-based support.",
    accent: "purple",
  },
  {
    value: "8",
    label: "Schools served",
    description:
      "Schools reached through community theatre and mental health and wellbeing programmes.",
    accent: "green",
  },
  {
    value: "5",
    label: "Counties reached",
    description:
      "Mental health and psychosocial support initiatives implemented across five counties.",
    accent: "blue",
  },
  {
    value: "123",
    label: "Workplace staff supported",
    description:
      "Staff supported through workplace mental health, counselling, psychoeducation, and wellbeing initiatives.",
    accent: "purple",
  },
  {
    value: "25–30",
    label: "Young mothers supported",
    description:
      "Young mothers engaged through active Her Rise cohorts focused on resilience, wellbeing, and personal development.",
    accent: "green",
  },
  {
    value: "30",
    label: "Peer responders supported",
    description:
      "Peer responders supported during a flood emergency response initiative.",
    accent: "blue",
  },
  {
    value: "6+",
    label: "Partner organisations",
    description:
      "Organisations working with Real Time Psychosupport across public, community, and NGO sectors.",
    accent: "purple",
  },
];

const accentStyles = {
  blue: {
    number: "text-brand-blue",
    line: "bg-brand-blue",
    background: "bg-brand-blue-light",
  },
  purple: {
    number: "text-brand-purple",
    line: "bg-brand-purple",
    background: "bg-brand-purple-light",
  },
  green: {
    number: "text-brand-green-dark",
    line: "bg-brand-green",
    background: "bg-brand-green-light",
  },
};

export default function Impact() {
  return (
    <section
      id="impact"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-brand-blue-light/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-brand-green-light/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =======================================================
            HEADER
        ======================================================= */}

        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-brand-green" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-green-dark">
                Our Impact
              </span>
            </div>

            <p className="mt-5 text-sm font-medium uppercase tracking-wider text-text-muted">
              Restoring Hope Through Action
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-3xl font-bold leading-[1.12] tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              Every person supported is a{" "}
              <span className="text-brand-blue">story changed.</span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">
              Our work brings mental health and psychosocial support closer to
              individuals, families, schools, workplaces, and communities.
              Through counselling, training, outreach, and partnerships, we
              continue to expand access to care and build resilience.
            </p>
          </div>
        </div>

        {/* =======================================================
            FEATURE IMPACT STATEMENT
        ======================================================= */}

        <div className="mt-16 overflow-hidden rounded-[2rem] bg-brand-blue shadow-xl">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left */}

            <div className="relative p-8 sm:p-10 lg:p-14">
              <div
                aria-hidden="true"
                className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-purple opacity-60"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-brand-green opacity-30"
              />

              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                  Impact at a Glance
                </span>

                <h3 className="mt-7 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Building healthier communities, one person at a time.
                </h3>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
                  Real Time Psychosupport combines professional expertise,
                  community knowledge, and practical mental health
                  interventions to support people and strengthen the systems
                  around them.
                </p>

                <div className="mt-9 flex items-center gap-3">
                  <span className="h-1.5 w-12 rounded-full bg-white" />
                  <span className="h-1.5 w-8 rounded-full bg-brand-purple" />
                  <span className="h-1.5 w-5 rounded-full bg-brand-green" />
                </div>
              </div>
            </div>

            {/* Right */}

            <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden border-t border-white/10 lg:border-l lg:border-t-0">
              <div
                aria-hidden="true"
                className="absolute h-72 w-72 rounded-full border border-white/10"
              />

              <div
                aria-hidden="true"
                className="absolute h-52 w-52 rounded-full border border-white/10"
              />

              <div
                aria-hidden="true"
                className="absolute h-32 w-32 rounded-full border border-white/10"
              />

              <div className="relative text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-2xl">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-10 w-10 text-brand-blue"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 21s-7-4.35-9.5-8.5C.5 8.5 2.5 5 6 5c2 0 3.5 1.2 4.5 2.5C11.5 6.2 13 5 15 5c3.5 0 5.5 3.5 3.5 7.5C19 16.65 12 21 12 21Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                  Healing • Hope • Resilience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            STATISTICS
        ======================================================= */}

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat) => {
            const style =
              accentStyles[stat.accent as keyof typeof accentStyles];

            return (
              <article
                key={stat.label}
                className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-8"
              >
                {/* Accent line */}

                <div
                  className={`absolute left-0 top-0 h-1 w-full ${style.line}`}
                />

                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold ${style.background} ${style.number}`}
                  >
                    +
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Impact
                  </span>
                </div>

                <div className="mt-8">
                  <div
                    className={`text-4xl font-bold tracking-tight ${style.number}`}
                  >
                    {stat.value}
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-text-primary">
                    {stat.label}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    {stat.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* =======================================================
            IMPACT FOOTER
        ======================================================= */}

        <div className="mt-14 border-t border-border pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-3xl text-sm leading-7 text-text-muted">
              These figures reflect the reach and activities reported across
              Real Time Psychosupport programmes and partnerships. Impact
              figures are monitored and updated as programmes grow.
            </p>

            <div className="flex shrink-0 items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-blue" />
              <span className="h-2 w-2 rounded-full bg-brand-purple" />
              <span className="h-2 w-2 rounded-full bg-brand-green" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}