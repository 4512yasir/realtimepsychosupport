const programs = [
  {
    number: "01",
    title: "Community Counselling",
    shortTitle: "Community Care",
    description:
      "Providing confidential individual, family, and group counselling services for vulnerable members of the community.",
    detail:
      "We create safe and confidential spaces where individuals and families can receive professional support, process difficult experiences, and develop practical ways of coping and healing.",
    accent: "blue",
    featured: true,
  },
  {
    number: "02",
    title: "Youth Mentorship Programme",
    shortTitle: "Youth & Resilience",
    description:
      "Supporting young people through mentorship, emotional resilience training, life skills education, and psychosocial support.",
    detail:
      "Our youth-focused work helps young people develop emotional awareness, confidence, resilience, positive relationships, and practical life skills.",
    accent: "purple",
    featured: false,
  },
  {
    number: "03",
    title: "School Mental Health Initiative",
    shortTitle: "Schools & Children",
    description:
      "Working with schools to improve student wellbeing through counselling, emotional literacy, teacher capacity building, and art therapy.",
    detail:
      "We partner with schools to create emotionally safe learning environments where children can express themselves, access support, and build healthy coping skills.",
    accent: "green",
    featured: false,
  },
  {
    number: "04",
    title: "Humanitarian Psychosocial Support",
    shortTitle: "Emergency Response",
    description:
      "Delivering Psychological First Aid and trauma counselling during emergencies, disasters, and humanitarian crises.",
    detail:
      "When communities experience floods, fires, displacement, violence, or other emergencies, we provide timely psychological first aid and psychosocial support.",
    accent: "blue",
    featured: false,
  },
  {
    number: "05",
    title: "Workplace Wellness Programme",
    shortTitle: "Workplace Wellbeing",
    description:
      "Promoting healthier workplaces through counselling, psychoeducation, stress management, and employee wellness initiatives.",
    detail:
      "We help organizations build healthier workplaces by supporting employee wellbeing, managing stress, increasing mental health awareness, and strengthening organizational resilience.",
    accent: "purple",
    featured: false,
  },
];

const accentStyles = {
  blue: {
    number: "bg-brand-blue-light text-brand-blue",
    line: "bg-brand-blue",
    icon: "bg-brand-blue",
    hover: "group-hover:text-brand-blue",
  },
  purple: {
    number: "bg-brand-purple-light text-brand-purple",
    line: "bg-brand-purple",
    icon: "bg-brand-purple",
    hover: "group-hover:text-brand-purple",
  },
  green: {
    number: "bg-brand-green-light text-brand-green",
    line: "bg-brand-green",
    icon: "bg-brand-green",
    hover: "group-hover:text-brand-green",
  },
};

export default function Programs() {
  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-surface py-24 sm:py-28 lg:py-36"
    >
      {/* =========================================================
          DECORATIVE BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-brand-blue-light/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-brand-purple-light/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =======================================================
            HEADER
        ======================================================= */}

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-brand-green" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-green-dark">
                What We Do
              </span>
            </div>

            <p className="mt-5 text-sm font-medium uppercase tracking-wider text-text-muted">
              Our Programmes
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-3xl font-bold leading-[1.12] tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              Support designed around{" "}
              <span className="text-brand-purple">
                real lives.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">
              From everyday emotional support to humanitarian response, our
              programmes help individuals, families, young people, schools,
              workplaces, and communities build resilience and wellbeing.
            </p>
          </div>

        </div>

        {/* =======================================================
            FEATURED PROGRAM
        ======================================================= */}

        <div className="mt-16">

          <article className="group relative overflow-hidden rounded-[2rem] bg-brand-blue shadow-xl">

            {/* Decorative shapes */}

            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-purple opacity-70"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-brand-green opacity-30"
            />

            <div className="relative grid lg:grid-cols-[1fr_0.8fr]">

              {/* Main content */}

              <div className="p-8 sm:p-10 lg:p-14">

                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-xs font-bold text-white">
                    01
                  </span>

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                    Featured Programme
                  </span>
                </div>

                <h3 className="mt-8 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Community Counselling
                </h3>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                  Providing confidential individual, family, and group
                  counselling services for vulnerable members of the community.
                </p>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60">
                  We create safe and confidential spaces where individuals and
                  families can receive professional support, process difficult
                  experiences, and develop practical ways of coping and healing.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white">
                    Individual Support
                  </span>

                  <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white">
                    Family Counselling
                  </span>

                  <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white">
                    Group Support
                  </span>
                </div>

              </div>

              {/* Visual side */}

              <div className="relative hidden min-h-[390px] overflow-hidden lg:block">

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="relative h-64 w-64">

                    <div className="absolute inset-0 rounded-full border border-white/10" />

                    <div className="absolute inset-8 rounded-full border border-white/10" />

                    <div className="absolute inset-16 rounded-full bg-white/10" />

                    <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-2xl">

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
                  </div>

                </div>

              </div>
            </div>
          </article>
        </div>

        {/* =======================================================
            OTHER PROGRAMMES
        ======================================================= */}

        <div className="mt-6 grid gap-5 md:grid-cols-2">

          {programs
            .filter((program) => !program.featured)
            .map((program) => {

              const style =
                accentStyles[
                  program.accent as keyof typeof accentStyles
                ];

              return (
                <article
                  key={program.number}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
                >
                  {/* Top accent */}

                  <div
                    className={`absolute left-0 top-0 h-1 w-full ${style.line}`}
                  />

                  <div className="flex items-start justify-between gap-5">

                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${style.number}`}
                    >
                      {program.number}
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                      {program.shortTitle}
                    </span>

                  </div>

                  <h3
                    className={`mt-7 text-xl font-bold text-text-primary transition-colors ${style.hover}`}
                  >
                    {program.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-text-secondary">
                    {program.description}
                  </p>

                  <p className="mt-4 border-t border-border pt-4 text-sm leading-7 text-text-muted">
                    {program.detail}
                  </p>

                  <button
                    type="button"
                    className={`mt-6 inline-flex items-center gap-2 text-sm font-bold transition-colors ${style.hover}`}
                  >
                    Learn more
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </article>
              );
            })}

        </div>

        {/* =======================================================
            PROGRAMME FOOTER
        ======================================================= */}

        <div className="mt-16 rounded-[1.5rem] border border-border bg-white p-7 sm:p-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                Our Approach
              </p>

              <h3 className="mt-3 text-xl font-bold text-text-primary sm:text-2xl">
                Professional support. Community connection. Lasting impact.
              </h3>

              <p className="mt-3 text-sm leading-7 text-text-secondary">
                Our programmes are designed to meet people where they are,
                while strengthening the families, institutions, and communities
                around them.
              </p>

            </div>

            <div className="flex shrink-0 items-center gap-2">

              <span className="h-2.5 w-2.5 rounded-full bg-brand-blue" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-purple" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-green" />

              <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
                Care • Resilience • Hope
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}