const partners = [
  {
    name: "National Council of Churches of Kenya",
    shortName: "NCCK",
    description:
      "Youth mentorship programmes and psychosocial support for young mothers, promoting resilience, confidence, and personal development.",
    category: "Youth & Community",
    accent: "blue",
  },
  {
    name: "Media Council of Kenya",
    shortName: "MCK",
    description:
      "Employee counselling, workplace mental health programmes, psychoeducation, and trauma support for media professionals.",
    category: "Workplace Wellness",
    accent: "purple",
  },
  {
    name: "Plan International Kenya",
    shortName: "Plan",
    description:
      "Adolescent mental health, psychosocial support, counselling services, and humanitarian emergency response initiatives.",
    category: "Youth & Humanitarian",
    accent: "green",
  },
  {
    name: "Kenya Red Cross Society",
    shortName: "KRCS",
    description:
      "Psychological First Aid and psychosocial support for communities affected by floods and other emergencies.",
    category: "Emergency Response",
    accent: "blue",
  },
  {
    name: "World Vision Kenya",
    shortName: "World Vision",
    description:
      "Trauma counselling and psychosocial recovery programmes for survivors of devastating community fires.",
    category: "Humanitarian Support",
    accent: "purple",
  },
  {
    name: "Global Art Interventions",
    shortName: "GAI",
    description:
      "School-based art therapy programmes that use creativity to promote healing, emotional expression, and resilience.",
    category: "School Mental Health",
    accent: "green",
  },
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
    badge: "bg-brand-green-light text-brand-green",
    line: "bg-brand-green",
  },
};

export default function Partnerships() {
  return (
    <section
      id="partnerships"
      className="relative overflow-hidden bg-surface py-24 sm:py-28 lg:py-36"
    >
      {/* Background decoration */}

      <div
        aria-hidden="true"
        className="absolute -right-48 top-0 h-[500px] w-[500px] rounded-full bg-brand-blue-light/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -left-48 bottom-0 h-[500px] w-[500px] rounded-full bg-brand-green-light/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-brand-blue" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">
                Collaboration
              </span>
            </div>

            <p className="mt-5 text-sm font-medium uppercase tracking-wider text-text-muted">
              Our Partnerships
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold leading-[1.12] tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              Stronger together,{" "}
              <span className="text-brand-purple">
                greater impact.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">
              Sustainable mental health outcomes are built through
              collaboration. We work alongside institutions, humanitarian
              agencies, schools, community organizations, and development
              partners to extend access to meaningful support.
            </p>
          </div>

        </div>

        {/* =====================================================
            PARTNERSHIP INTRO
        ===================================================== */}

        <div className="mt-14 overflow-hidden rounded-[2rem] bg-brand-blue shadow-xl">

          <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">

            <div className="relative p-8 sm:p-10 lg:p-12">

              <div
                aria-hidden="true"
                className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-brand-purple opacity-60"
              />

              <div className="relative">

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                  Working Across Sectors
                </span>

                <h3 className="mt-5 max-w-3xl text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Connecting expertise, resources, and community knowledge.
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                  Our partnerships allow us to combine professional expertise
                  with local knowledge and trusted community relationships,
                  helping us respond to mental health needs in practical and
                  culturally responsive ways.
                </p>

              </div>

            </div>

            {/* Partnership visual */}

            <div className="hidden px-10 lg:block">

              <div className="relative flex h-40 w-40 items-center justify-center">

                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full border border-white/10"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-5 rounded-full border border-white/10"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-10 rounded-full border border-white/20"
                />

                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-blue shadow-xl">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-7 w-7"
                    aria-hidden="true"
                  >
                    <path
                      d="M8.5 12.5 11 15a3 3 0 0 0 4.24 0l2.26-2.26a3 3 0 0 0 0-4.24 3 3 0 0 0-4.24 0L12 9.76"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m15.5 11.5-2.5-2.5a3 3 0 0 0-4.24 0L6.5 11.26a3 3 0 0 0 0 4.24 3 3 0 0 0 4.24 0L12 14.24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                </div>

              </div>

            </div>

          </div>
        </div>

        {/* =====================================================
            PARTNER CARDS
        ===================================================== */}

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {partners.map((partner) => {
            const style =
              accentStyles[
                partner.accent as keyof typeof accentStyles
              ];

            return (
              <article
                key={partner.name}
                className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
              >

                {/* Accent line */}

                <div
                  className={`absolute left-0 top-0 h-1 w-full ${style.line}`}
                />

                {/* Partner identity */}

                <div className="flex items-start gap-4">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-surface text-xs font-bold text-text-primary ring-1 ring-border">
                    {partner.shortName}
                  </div>

                  <div className="min-w-0">

                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${style.badge}`}
                    >
                      {partner.category}
                    </span>

                    <h3 className="mt-3 text-lg font-bold leading-snug text-text-primary">
                      {partner.name}
                    </h3>

                  </div>

                </div>

                {/* Description */}

                <p className="mt-6 text-sm leading-7 text-text-secondary">
                  {partner.description}
                </p>

                {/* Footer */}

                <div className="mt-7 flex items-center gap-2 border-t border-border pt-5">

                  <span
                    className={`h-1.5 w-1.5 rounded-full ${style.line}`}
                  />

                  <span className="text-xs font-semibold text-text-muted">
                    Partnership & collaboration
                  </span>

                </div>

              </article>
            );
          })}

        </div>

        {/* =====================================================
            COMMUNITY NETWORKS
        ===================================================== */}

        <div className="mt-8 rounded-[2rem] border border-border bg-white p-8 sm:p-10 lg:p-12">

          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

            <div>

              <span className="inline-flex rounded-full bg-brand-green-light px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-green-dark">
                Community Networks
              </span>

              <h3 className="mt-5 text-2xl font-bold leading-tight text-text-primary sm:text-3xl">
                Rooted in the community.
              </h3>

            </div>

            <div>

              <p className="text-sm leading-7 text-text-secondary sm:text-base">
                Our community-based collaborations include youth networks such
                as <strong className="text-text-primary">Ghetto Girls</strong>{" "}
                and{" "}
                <strong className="text-text-primary">
                  Vision Thinkers Youth Groups
                </strong>
                , supporting life skills training, mentorship, emotional
                regulation, and positive youth engagement.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">

                {[
                  "Youth mentorship",
                  "Life skills",
                  "Emotional regulation",
                  "Positive engagement",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-text-secondary"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

          </div>
        </div>

        {/* =====================================================
            PARTNERSHIP CTA
        ===================================================== */}

        <div className="mt-10 text-center">

          <p className="text-sm text-text-muted">
            Interested in creating meaningful mental health impact together?
          </p>

          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-blue transition-colors hover:text-brand-purple"
          >
            Explore partnership opportunities
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}