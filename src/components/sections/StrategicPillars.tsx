const pillars = [
  {
    number: "01",
    title: "Community Mental Health",
    description:
      "Providing affordable individual, family, and group counselling services within underserved communities.",
    accent: "blue",
  },
  {
    number: "02",
    title: "Child & Youth Development",
    description:
      "Equipping children and young people with emotional resilience, life skills, mentorship, and psychosocial support.",
    accent: "purple",
  },
  {
    number: "03",
    title: "School Mental Health",
    description:
      "Creating emotionally safe learning environments through counselling, teacher support, art therapy, and mental health education.",
    accent: "green",
  },
  {
    number: "04",
    title: "Humanitarian Emergency Response",
    description:
      "Providing Psychological First Aid, trauma counselling, and psychosocial support during emergencies and disasters.",
    accent: "blue",
  },
  {
    number: "05",
    title: "Workplace Mental Wellness",
    description:
      "Supporting organizations through employee wellbeing programmes, counselling, stress management, and mental health awareness.",
    accent: "purple",
  },
];

const accentStyles = {
  blue: {
    number: "bg-brand-blue-light text-brand-blue",
    line: "bg-brand-blue",
    hover: "group-hover:text-brand-blue",
  },
  purple: {
    number: "bg-brand-purple-light text-brand-purple",
    line: "bg-brand-purple",
    hover: "group-hover:text-brand-purple",
  },
  green: {
    number: "bg-brand-green-light text-brand-green",
    line: "bg-brand-green",
    hover: "group-hover:text-brand-green",
  },
};

export default function StrategicPillars() {
  return (
    <section
      id="pillars"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36"
    >
      {/* Decorative background */}

      <div
        aria-hidden="true"
        className="absolute -left-40 top-24 h-80 w-80 rounded-full bg-brand-blue-light/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-24 h-96 w-96 rounded-full bg-brand-purple-light/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* HEADER */}

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-brand-purple" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-purple">
                Our Focus
              </span>
            </div>

            <p className="mt-5 text-sm font-medium uppercase tracking-wider text-text-muted">
              Strategic Pillars
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold leading-[1.12] tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              A holistic approach to{" "}
              <span className="text-brand-blue">
                mental wellbeing.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">
              Our work is built around interconnected areas of intervention
              that respond to the different environments in which people live,
              learn, work, and recover.
            </p>
          </div>

        </div>

        {/* PILLARS */}

        <div className="mt-16 grid gap-5 lg:grid-cols-2">

          {pillars.map((pillar, index) => {
            const style =
              accentStyles[
                pillar.accent as keyof typeof accentStyles
              ];

            /*
             * Make the fifth pillar span the full width on large screens.
             */
            const isLast = index === pillars.length - 1;

            return (
              <article
                key={pillar.number}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-9 ${
                  isLast ? "lg:col-span-2" : ""
                }`}
              >

                {/* Top accent */}

                <div
                  className={`absolute left-0 top-0 h-1 w-full ${style.line}`}
                />

                <div className="flex flex-col gap-7 sm:flex-row">

                  {/* Number */}

                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-sm font-bold ${style.number}`}
                  >
                    {pillar.number}
                  </div>

                  {/* Content */}

                  <div className="flex-1">

                    <div className="flex flex-wrap items-center gap-3">

                      <h3
                        className={`text-xl font-bold text-text-primary transition-colors duration-300 ${style.hover} sm:text-2xl`}
                      >
                        {pillar.title}
                      </h3>

                      <span
                        className={`h-1 w-6 rounded-full ${style.line}`}
                      />

                    </div>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
                      {pillar.description}
                    </p>

                    {/* Explore indicator */}

                    <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-text-muted transition-colors duration-300 group-hover:text-text-primary">
                      <span>Area of focus</span>

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>

                  </div>

                </div>

                {/* Background number */}

                <span
                  aria-hidden="true"
                  className="absolute -bottom-10 -right-3 select-none text-[9rem] font-black leading-none text-black/[0.025]"
                >
                  {pillar.number}
                </span>

              </article>
            );
          })}

        </div>

        {/* CONNECTION STATEMENT */}

        <div className="mt-8 overflow-hidden rounded-[2rem] bg-surface ring-1 ring-border">

          <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">

            <div className="p-8 sm:p-10 lg:p-12">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">
                One integrated approach
              </p>

              <h3 className="mt-4 max-w-3xl text-2xl font-bold leading-tight text-text-primary sm:text-3xl">
                Mental health support should follow people wherever life
                happens.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
                From homes and schools to workplaces and emergency settings,
                our programmes are designed to meet people where they are and
                connect them with the support they need.
              </p>

            </div>

            {/* Visual */}

            <div className="flex items-center justify-center border-t border-border p-8 lg:border-l lg:border-t-0 lg:p-12">

              <div className="relative flex h-32 w-32 items-center justify-center">

                {/* Rings */}

                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full border border-brand-blue/20"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-4 rounded-full border border-brand-purple/30"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-8 rounded-full border border-brand-green/40"
                />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg">

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
        </div>

      </div>
    </section>
  );
}