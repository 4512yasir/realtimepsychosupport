const priorities = [
  {
    number: "01",
    title: "Community Wellness Centers",
    description:
      "Establish accessible community wellness spaces where individuals and families can receive integrated mental health and psychosocial support.",
    accent: "blue",
  },
  {
    number: "02",
    title: "School Mental Health",
    description:
      "Expand school-based programmes that strengthen emotional wellbeing, resilience, counselling access, and safe learning environments.",
    accent: "purple",
  },
  {
    number: "03",
    title: "Digital & Tele-Mental Health",
    description:
      "Scale digital counselling and tele-mental health services to reach people beyond traditional physical service points.",
    accent: "green",
  },
  {
    number: "04",
    title: "Community Mental Health Champions",
    description:
      "Train and equip community champions to promote mental health awareness, early support, referral, and resilience within their communities.",
    accent: "blue",
  },
  {
    number: "05",
    title: "Youth Resilience & Livelihoods",
    description:
      "Strengthen youth resilience initiatives while creating opportunities that support wellbeing, confidence, skills development, and economic participation.",
    accent: "purple",
  },
  {
    number: "06",
    title: "Research, MEL & Learning",
    description:
      "Strengthen research, monitoring, evaluation, and learning to improve programmes and demonstrate measurable community impact.",
    accent: "green",
  },
  {
    number: "07",
    title: "Strategic Partnerships",
    description:
      "Build stronger relationships with county governments, healthcare institutions, development agencies, schools, and community organizations.",
    accent: "blue",
  },
];

const accentStyles = {
  blue: {
    number: "bg-brand-blue text-white",
    line: "bg-brand-blue",
    badge: "bg-brand-blue-light text-brand-blue",
  },
  purple: {
    number: "bg-brand-purple text-white",
    line: "bg-brand-purple",
    badge: "bg-brand-purple-light text-brand-purple",
  },
  green: {
    number: "bg-brand-green text-white",
    line: "bg-brand-green",
    badge: "bg-brand-green-light text-brand-green-dark",
  },
};

export default function LookingAhead() {
  return (
    <section
      id="looking-ahead"
      className="relative overflow-hidden bg-surface py-24 sm:py-28 lg:py-36"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        aria-hidden="true"
        className="absolute -left-48 top-0 h-[500px] w-[500px] rounded-full bg-brand-blue-light/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-brand-green-light/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HERO
        ===================================================== */}

        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-blue px-7 py-14 shadow-2xl sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Decorative circles */}

          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10"
          />

          <div
            aria-hidden="true"
            className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/10"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-white/10"
          />

          <div className="relative max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-brand-green" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-green-light">
                Looking Ahead
              </span>
            </div>

            <h2 className="mt-7 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building a future where{" "}
              <span className="text-brand-green-light">
                everyone can thrive.
              </span>
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              Our ambition is to expand access to quality mental health and
              psychosocial support beyond Mathare while strengthening the
              community roots that have shaped our work.
            </p>
          </div>

          {/* Bottom statement */}

          <div className="relative mt-12 border-t border-white/10 pt-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-sm leading-7 text-white/60">
                From community wellness centres to digital counselling, Real
                Time Psychosupport is working toward a more accessible,
                resilient, and mentally healthy Kenya.
              </p>

              <div className="flex shrink-0 items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-blue-light" />
                <span className="h-2 w-2 rounded-full bg-brand-purple-light" />
                <span className="h-2 w-2 rounded-full bg-brand-green-light" />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="mx-auto mt-20 max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-purple">
            Our Strategic Priorities
          </span>

          <h3 className="mt-5 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            From vision to action.
          </h3>

          <p className="mt-5 text-base leading-8 text-text-secondary">
            Our future priorities are designed to expand access, strengthen
            community resilience, improve quality, and create sustainable
            pathways for mental wellbeing.
          </p>
        </div>

        {/* =====================================================
            IMAGE + PRIORITIES INTRO
        ===================================================== */}

        <div className="mt-14 overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            {/* Image */}

            <div className="relative min-h-[360px] overflow-hidden bg-brand-blue">
              <img
                src="/images/looking-ahead/community-future.jpg"
                alt="Community members participating in mental health and psychosocial support activities"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-brand-blue/35" />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-7 sm:p-9">
                <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                  Our Future Direction
                </span>

                <p className="mt-4 max-w-md text-xl font-bold leading-snug text-white sm:text-2xl">
                  Expanding care while keeping communities at the centre.
                </p>
              </div>
            </div>

            {/* Content */}

            <div className="flex items-center p-8 sm:p-10 lg:p-14">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green-dark">
                  Looking Forward
                </span>

                <h3 className="mt-5 text-2xl font-bold leading-tight text-text-primary sm:text-3xl">
                  Growing the systems that make mental wellbeing possible.
                </h3>

                <p className="mt-5 text-sm leading-7 text-text-secondary sm:text-base">
                  Our future work will combine direct psychosocial support,
                  prevention, community participation, digital innovation,
                  evidence, and strategic partnerships to reach more people
                  with meaningful support.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Access",
                    "Prevention",
                    "Resilience",
                    "Innovation",
                    "Evidence",
                    "Partnerships",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-brand-green-light px-3 py-1.5 text-xs font-semibold text-brand-green-dark"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            PRIORITY GRID
        ===================================================== */}

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {priorities.map((priority) => {
            const style =
               accentStyles[priority.accent as keyof typeof accentStyles];

            return (
              <article
                key={priority.number}
                className="group relative overflow-hidden rounded-[1.75rem] border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
              >
                {/* Accent line */}

                <div
                  className={`absolute left-0 top-0 h-1 w-full ${style.line}`}
                />

                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl text-xs font-bold ${style.number}`}
                  >
                    {priority.number}
                  </div>

                  <span className="text-2xl font-light text-text-muted/30 transition-colors group-hover:text-text-muted/60">
                    ↗
                  </span>
                </div>

                <h4 className="mt-7 text-xl font-bold leading-snug text-text-primary">
                  {priority.title}
                </h4>

                <p className="mt-4 text-sm leading-7 text-text-secondary">
                  {priority.description}
                </p>

                <div className="mt-6">
                  <span
                    className={`inline-flex rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] ${style.badge}`}
                  >
                    Strategic Priority
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            BIG VISION STATEMENT
        ===================================================== */}

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-border bg-white">
          <div className="grid lg:grid-cols-[1fr_1.2fr]">
            {/* Left */}

            <div className="relative min-h-[360px] overflow-hidden bg-brand-purple">
              <img
                src="/images/looking-ahead/mental-health-future.jpg"
                alt="People and communities connected through mental health support"
                className="absolute inset-0 h-full w-full object-cover opacity-40"
              />

              <div className="absolute inset-0 bg-brand-purple/80" />

              <div
                aria-hidden="true"
                className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full border border-white/10"
              />

              <div
                aria-hidden="true"
                className="absolute -left-16 -top-16 h-48 w-48 rounded-full border border-white/10"
              />

              <div className="relative flex h-full min-h-[360px] flex-col justify-between p-8 sm:p-10 lg:p-14">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                    Our Ambition
                  </span>

                  <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-8 w-8"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 3v18M3 12h18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />

                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                </div>

                <p className="max-w-sm text-sm leading-7 text-white/70">
                  Expanding access to support while building stronger,
                  healthier, and more resilient communities.
                </p>
              </div>
            </div>

            {/* Right */}

            <div className="flex items-center p-8 sm:p-10 lg:p-14">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-purple">
                  A mentally healthy Kenya
                </p>

                <h3 className="mt-5 text-2xl font-bold leading-tight text-text-primary sm:text-3xl lg:text-4xl">
                  Every vulnerable community deserves access to quality mental
                  healthcare.
                </h3>

                <p className="mt-6 text-sm leading-7 text-text-secondary sm:text-base">
                  We envision a future where geography, income, stigma, or
                  circumstance no longer determine whether someone can access
                  the mental health and psychosocial support they need.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-brand-blue-light/50 p-5">
                    <p className="text-2xl font-bold text-brand-blue">01</p>
                    <p className="mt-2 text-sm font-semibold text-text-primary">
                      Accessible Care
                    </p>
                    <p className="mt-1 text-xs leading-6 text-text-secondary">
                      Bringing support closer to people and communities.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-brand-green-light/50 p-5">
                    <p className="text-2xl font-bold text-brand-green-dark">
                      02
                    </p>
                    <p className="mt-2 text-sm font-semibold text-text-primary">
                      Stronger Communities
                    </p>
                    <p className="mt-1 text-xs leading-6 text-text-secondary">
                      Building resilience through participation and connection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            PARTNERSHIP CTA
        ===================================================== */}

        <div className="mt-10 text-center">
          <p className="text-sm font-medium text-text-secondary">
            Help us turn this vision into action.
          </p>

          <a
            href="#contact"
            className="mt-5 inline-flex h-12 items-center justify-center rounded-full bg-brand-green px-7 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue hover:shadow-lg"
          >
            Explore Partnership Opportunities
          </a>
        </div>
      </div>
    </section>
  );
}