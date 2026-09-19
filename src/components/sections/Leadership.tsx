const leadership = [
  {
    role: "Executive Director / Founder",
    name: "Name to be provided",
    bio: "Leadership profile and professional biography will be added once the organization provides the approved information.",
    accent: "blue",
  },
  {
    role: "Programme Coordinator",
    name: "Name to be provided",
    bio: "Professional biography and programme leadership experience will be added here.",
    accent: "purple",
  },
  {
    role: "Lead Psychologist / Counsellor",
    name: "Name to be provided",
    bio: "Professional biography, qualifications, and areas of expertise will be added here.",
    accent: "green",
  },
  {
    role: "Finance & Administration Officer",
    name: "Name to be provided",
    bio: "Professional biography and organizational responsibilities will be added here.",
    accent: "blue",
  },
];

const teamAreas = [
  "Psychologists",
  "Counsellors",
  "Social Workers",
  "Programme Officers",
  "Community Facilitators",
  "Volunteers",
  "Mental Health Champions",
];

const accentStyles = {
  blue: {
    badge: "bg-brand-blue-light text-brand-blue",
    line: "bg-brand-blue",
  },
  purple: {
    badge: "bg-brand-purple-light text-brand-purple",
    line: "bg-brand-purple",
  },
  green: {
    badge: "bg-brand-green-light text-brand-green-dark",
    line: "bg-brand-green",
  },
};

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="relative overflow-hidden bg-surface py-24 sm:py-28 lg:py-36"
    >
      {/* Background decoration */}

      <div
        aria-hidden="true"
        className="absolute -left-48 top-20 h-96 w-96 rounded-full bg-brand-blue-light/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-48 bottom-20 h-96 w-96 rounded-full bg-brand-purple-light/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>

            <div className="flex items-center gap-3">

              <span className="h-1 w-10 rounded-full bg-brand-purple" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-purple">
                Our People
              </span>

            </div>

            <p className="mt-5 text-sm font-medium uppercase tracking-wider text-text-muted">
              Leadership & Team
            </p>

          </div>

          <div>

            <h2 className="text-3xl font-bold leading-[1.12] tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              Expertise guided by{" "}
              <span className="text-brand-blue">
                compassion.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">
              Behind every programme is a multidisciplinary team committed to
              improving the wellbeing of individuals, families, and
              communities.
            </p>

          </div>

        </div>

        {/* =====================================================
            LEADERSHIP INTRO
        ===================================================== */}

        <div className="mt-14 overflow-hidden rounded-[2rem] bg-brand-blue shadow-xl">

          <div className="relative grid lg:grid-cols-[auto_1fr] lg:items-center">

            {/* Visual */}

            <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden px-10 lg:min-h-[330px] lg:w-[330px]">

              <div
                aria-hidden="true"
                className="absolute h-64 w-64 rounded-full border border-white/10"
              />

              <div
                aria-hidden="true"
                className="absolute h-48 w-48 rounded-full border border-white/10"
              />

              <div
                aria-hidden="true"
                className="absolute h-32 w-32 rounded-full border border-white/10"
              />

              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white text-brand-blue shadow-2xl">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-11 w-11"
                  aria-hidden="true"
                >
                  <path
                    d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <path
                    d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>

              </div>

            </div>

            {/* Text */}

            <div className="relative p-8 sm:p-10 lg:p-12">

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                Multidisciplinary Leadership
              </span>

              <h3 className="mt-5 max-w-3xl text-2xl font-bold leading-tight text-white sm:text-3xl">
                Professional expertise grounded in community knowledge.
              </h3>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
                Real Time Psychosupport is led by professionals and community
                advocates who bring together mental health expertise,
                programme leadership, administration, and lived community
                knowledge.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">

                {[
                  "Mental Health",
                  "Community Development",
                  "Programme Management",
                  "Psychosocial Support",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/70"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            LEADERSHIP CARDS
        ===================================================== */}

        <div className="mt-8 grid gap-5 md:grid-cols-2">

          {leadership.map((person) => {

            const style =
              accentStyles[
                person.accent as keyof typeof accentStyles
              ];

            return (
              <article
                key={person.role}
                className="group relative overflow-hidden rounded-[1.75rem] border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9"
              >

                <div
                  className={`absolute left-0 top-0 h-1 w-full ${style.line}`}
                />

                <div className="flex gap-5">

                  {/* Profile placeholder */}

                  <div
                    className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl ${style.badge}`}
                  >

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-9 w-9"
                      aria-hidden="true"
                    >
                      <circle
                        cx="12"
                        cy="8"
                        r="3.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />

                      <path
                        d="M5 20c.7-4 3-6 7-6s6.3 2 7 6"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>

                  </div>

                  <div className="min-w-0">

                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${style.badge}`}
                    >
                      Leadership
                    </span>

                    <h3 className="mt-3 text-lg font-bold text-text-primary sm:text-xl">
                      {person.role}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-text-muted">
                      {person.name}
                    </p>

                  </div>

                </div>

                <p className="mt-6 text-sm leading-7 text-text-secondary">
                  {person.bio}
                </p>

                <div className="mt-7 border-t border-border pt-5">

                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-text-muted">
                    Professional profile
                  </span>

                </div>

              </article>
            );
          })}

        </div>

        {/* =====================================================
            WIDER TEAM
        ===================================================== */}

        <div className="mt-8 rounded-[2rem] border border-border bg-white p-8 sm:p-10 lg:p-12">

          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">

            <div>

              <span className="inline-flex rounded-full bg-brand-green-light px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-green-dark">
                Our Team
              </span>

              <h3 className="mt-5 text-2xl font-bold leading-tight text-text-primary sm:text-3xl">
                Many skills. One shared purpose.
              </h3>

            </div>

            <div>

              <p className="text-sm leading-7 text-text-secondary sm:text-base">
                Our multidisciplinary team combines professional expertise
                with deep community knowledge to design and deliver
                compassionate, culturally responsive, and evidence-informed
                mental health services.
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">

                {teamAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-text-secondary"
                  >
                    {area}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}