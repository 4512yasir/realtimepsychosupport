const governanceAreas = [
  {
    title: "Ethical Leadership",
    description:
      "We promote responsible leadership, ethical decision-making, and professional conduct across all areas of our work.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          d="M12 3 4 7v5c0 5 3.4 8 8 9 4.6-1 8-4 8-9V7l-8-4Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="m9 12 2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Financial Stewardship",
    description:
      "We are committed to responsible management of organizational resources and transparent stewardship of funds entrusted to us.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          d="M4 19V5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M4 17h16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M8 14v-3M12 14V8M16 14v-5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Safeguarding",
    description:
      "The dignity, safety, privacy, and wellbeing of the people we serve remain central to our programmes and partnerships.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          d="M12 21s8-3.8 8-10V5l-8-3-8 3v6c0 6.2 8 10 8 10Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M9 12.5 11 14l4-4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Accountability",
    description:
      "We continuously monitor our work, learn from experience, and strive to demonstrate meaningful and measurable impact.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          d="M4 6h16M4 12h16M4 18h10"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <circle
          cx="18"
          cy="18"
          r="2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    ),
  },
];

const principles = [
  "Transparency",
  "Integrity",
  "Safeguarding",
  "Responsible stewardship",
  "Professional ethics",
  "Continuous learning",
];

export default function Governance() {
  return (
    <section
      id="governance"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36"
    >
      {/* Decorative background */}

      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/3 rounded-full bg-brand-blue-light/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/3 rounded-full bg-brand-green-light/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="max-w-3xl">

          <div className="flex items-center gap-3">

            <span className="h-1 w-10 rounded-full bg-brand-blue" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">
              Accountability
            </span>

          </div>

          <h2 className="mt-6 text-3xl font-bold leading-[1.12] tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Governance built on{" "}
            <span className="text-brand-blue">
              trust.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-text-secondary sm:text-lg">
            Strong governance helps us protect the people we serve, manage
            resources responsibly, and ensure our work remains aligned with
            our mission and values.
          </p>

        </div>

        {/* =====================================================
            GOVERNANCE STATEMENT
        ===================================================== */}

        <div className="relative mt-14 overflow-hidden rounded-[2rem] bg-brand-blue p-8 shadow-xl sm:p-10 lg:p-14">

          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

            <div className="max-w-3xl">

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                Our Commitment
              </span>

              <h3 className="mt-5 text-2xl font-bold leading-tight text-white sm:text-3xl">
                Responsible leadership. Transparent systems. Meaningful impact.
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
                Real Time Psychosupport CBO is committed to transparency,
                accountability, and ethical leadership. Our governance systems
                support sound financial management, safeguarding, responsible
                stewardship, and continuous organizational learning.
              </p>

            </div>

            {/* Trust mark */}

            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-12 w-12 text-white"
                aria-hidden="true"
              >
                <path
                  d="M12 3 4 7v5c0 5 3.4 8 8 9 4.6-1 8-4 8-9V7l-8-4Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />

                <path
                  d="m8.5 12 2.2 2.2L15.5 9.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

            </div>

          </div>

        </div>

        {/* =====================================================
            GOVERNANCE AREAS
        ===================================================== */}

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {governanceAreas.map((item, index) => {

            const accents = [
              "text-brand-blue bg-brand-blue-light",
              "text-brand-purple bg-brand-purple-light",
              "text-brand-green-dark bg-brand-green-light",
              "text-brand-blue bg-brand-blue-light",
            ];

            return (
              <article
                key={item.title}
                className="group rounded-[1.5rem] border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${accents[index]}`}
                >
                  {item.icon}
                </div>

                <h3 className="mt-6 text-lg font-bold text-text-primary">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {item.description}
                </p>

              </article>
            );
          })}

        </div>

        {/* =====================================================
            BOARD / GOVERNANCE STRUCTURE
        ===================================================== */}

        <div className="mt-8 rounded-[2rem] border border-border bg-surface p-8 sm:p-10 lg:p-12">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <span className="inline-flex rounded-full bg-brand-purple-light px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-purple">
                Governance Structure
              </span>

              <h3 className="mt-5 text-2xl font-bold leading-tight text-text-primary sm:text-3xl">
                Guided by responsible oversight.
              </h3>

              <p className="mt-4 text-sm leading-7 text-text-secondary">
                Our governance framework provides oversight and guidance to
                support responsible decision-making, programme quality, and
                organizational sustainability.
              </p>

            </div>

            {/* Structure */}

            <div className="relative">

              {/* Vertical line */}

              <div
                aria-hidden="true"
                className="absolute left-6 top-7 hidden h-[calc(100%-3.5rem)] w-px bg-border sm:block"
              />

              <div className="space-y-5">

                {[
                  {
                    title: "Board of Directors",
                    description:
                      "Strategic oversight, governance, and organizational accountability.",
                    accent: "bg-brand-blue",
                  },
                  {
                    title: "Executive Leadership",
                    description:
                      "Organizational leadership, programme direction, and implementation.",
                    accent: "bg-brand-purple",
                  },
                  {
                    title: "Programme & Technical Team",
                    description:
                      "Professional delivery of mental health and psychosocial support programmes.",
                    accent: "bg-brand-green",
                  },
                  {
                    title: "Community & Partners",
                    description:
                      "Community participation, partnerships, feedback, and collaborative action.",
                    accent: "bg-brand-blue",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="relative flex gap-5"
                  >

                    <div
                      className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${item.accent} text-white shadow-sm`}
                    >
                      <span className="text-sm font-bold">
                        ✓
                      </span>
                    </div>

                    <div className="rounded-2xl border border-border bg-white p-5 sm:flex-1">

                      <h4 className="font-bold text-text-primary">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-text-secondary">
                        {item.description}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            PRINCIPLES
        ===================================================== */}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

          {principles.map((principle) => (
            <span
              key={principle}
              className="rounded-full border border-border bg-white px-5 py-2.5 text-xs font-semibold text-text-secondary shadow-sm"
            >
              {principle}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
}