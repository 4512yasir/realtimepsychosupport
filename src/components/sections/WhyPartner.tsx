const strengths = [
  {
    number: "01",
    title: "Deep Community Roots",
    description:
      "Our work is grounded in the communities we serve, helping us understand local realities, needs, barriers, and opportunities.",
    accent: "blue",
  },
  {
    number: "02",
    title: "Professional Expertise",
    description:
      "Our multidisciplinary approach brings together mental health professionals, programme teams, community facilitators, and volunteers.",
    accent: "purple",
  },
  {
    number: "03",
    title: "Collaborative Approach",
    description:
      "We work alongside government institutions, humanitarian agencies, schools, healthcare providers, community organizations, and development partners.",
    accent: "green",
  },
  {
    number: "04",
    title: "Holistic Programming",
    description:
      "Our programmes connect mental health with youth development, education, emergency response, community resilience, and workplace wellbeing.",
    accent: "blue",
  },
  {
    number: "05",
    title: "Commitment to Impact",
    description:
      "We aim to strengthen monitoring, evaluation, learning, and evidence so that our programmes remain responsive and accountable.",
    accent: "purple",
  },
  {
    number: "06",
    title: "Community-Centred Innovation",
    description:
      "We explore practical and accessible approaches, including digital services and community-based solutions, to expand access to support.",
    accent: "green",
  },
];

const partnerTypes = [
  "Government",
  "Development Partners",
  "Humanitarian Agencies",
  "Corporates",
  "Schools & Universities",
  "Healthcare Institutions",
  "Community Organizations",
  "Foundations",
];

const accentStyles = {
  blue: {
    icon: "bg-brand-blue-light text-brand-blue",
    line: "bg-brand-blue",
  },
  purple: {
    icon: "bg-brand-purple-light text-brand-purple",
    line: "bg-brand-purple",
  },
  green: {
    icon: "bg-brand-green-light text-brand-green-dark",
    line: "bg-brand-green",
  },
};

export default function WhyPartner() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="absolute -right-56 top-20 h-[500px] w-[500px] rounded-full bg-brand-purple-light/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -left-56 bottom-0 h-[500px] w-[500px] rounded-full bg-brand-blue-light/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>

            <div className="flex items-center gap-3">

              <span className="h-1 w-10 rounded-full bg-brand-green" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-green-dark">
                Partnerships
              </span>

            </div>

            <p className="mt-5 text-sm font-medium uppercase tracking-wider text-text-muted">
              Why Partner With Us
            </p>

          </div>

          <div>

            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              Together, we can make mental health{" "}
              <span className="text-brand-purple">
                accessible.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">
              Sustainable change requires collaboration. We welcome partners
              who share our commitment to building healthier, more resilient,
              and empowered communities.
            </p>

          </div>

        </div>

        {/* =====================================================
            PARTNER VALUE PROPOSITION
        ===================================================== */}

        <div className="relative mt-14 overflow-hidden rounded-[2.5rem] bg-brand-blue shadow-2xl">

          <div className="grid lg:grid-cols-[1fr_0.75fr]">

            {/* Main statement */}

            <div className="relative p-8 sm:p-10 lg:p-14">

              <div
                aria-hidden="true"
                className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/10"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-white/10"
              />

              <div className="relative">

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                  A Shared Mission
                </span>

                <h3 className="mt-6 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Your expertise, resources, and networks can help us reach
                  more people.
                </h3>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                  Whether through programme partnerships, technical support,
                  funding, research, employee wellness, community engagement,
                  or innovation, there are many ways to create meaningful
                  impact together.
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-bold text-brand-blue transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-green hover:text-white hover:shadow-lg"
                >
                  Start a Conversation
                  <span className="ml-2">→</span>
                </a>

              </div>

            </div>

            {/* Partnership visual */}

            <div className="relative flex min-h-[330px] items-center justify-center overflow-hidden bg-brand-purple p-10">

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

              <div className="relative grid grid-cols-3 gap-3">

                {[
                  "Government",
                  "Community",
                  "Partners",
                  "Experts",
                  "Youth",
                  "Families",
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/10 p-3 text-center text-[11px] font-semibold text-white backdrop-blur-sm ${
                      index === 4 ? "bg-brand-green/80" : ""
                    }`}
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            WHY US
        ===================================================== */}

        <div className="mt-20">

          <div className="max-w-2xl">

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">
              What We Bring
            </span>

            <h3 className="mt-5 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Why organizations choose to work with us.
            </h3>

          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {strengths.map((strength) => {

              const style =
                accentStyles[
                  strength.accent as keyof typeof accentStyles
                ];

              return (
                <article
                  key={strength.number}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-8"
                >

                  <div
                    className={`absolute left-0 top-0 h-1 w-full ${style.line}`}
                  />

                  <div className="flex items-center justify-between">

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl text-xs font-bold ${style.icon}`}
                    >
                      {strength.number}
                    </div>

                    <span className="text-2xl font-light text-text-muted/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>

                  </div>

                  <h4 className="mt-7 text-xl font-bold text-text-primary">
                    {strength.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-text-secondary">
                    {strength.description}
                  </p>

                </article>
              );
            })}

          </div>

        </div>

        {/* =====================================================
            WHO WE WORK WITH
        ===================================================== */}

        <div className="mt-20 rounded-[2rem] border border-border bg-surface p-8 sm:p-10 lg:p-12">

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

            <div>

              <span className="inline-flex rounded-full bg-brand-green-light px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-green-dark">
                Collaboration
              </span>

              <h3 className="mt-5 text-2xl font-bold leading-tight text-text-primary sm:text-3xl">
                We believe no single organization can do it alone.
              </h3>

              <p className="mt-4 text-sm leading-7 text-text-secondary">
                We welcome collaboration across sectors to expand access to
                quality mental health and psychosocial support.
              </p>

            </div>

            <div className="flex flex-wrap gap-3">

              {partnerTypes.map((partner) => (
                <div
                  key={partner}
                  className="rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-text-secondary shadow-sm transition-colors hover:border-brand-blue hover:text-brand-blue"
                >
                  {partner}
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* =====================================================
            PARTNERSHIP OPPORTUNITIES
        ===================================================== */}

        <div className="mt-8 grid gap-5 md:grid-cols-3">

          {[
            {
              title: "Programme Partnerships",
              text: "Co-design and implement programmes that respond to community needs.",
              accent: "blue",
            },
            {
              title: "Technical Collaboration",
              text: "Share expertise, research, training, technology, and innovation.",
              accent: "purple",
            },
            {
              title: "Resource Mobilization",
              text: "Support sustainable mental health initiatives through funding and strategic resources.",
              accent: "green",
            },
          ].map((item) => {

            const style =
              accentStyles[
                item.accent as keyof typeof accentStyles
              ];

            return (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-border bg-white p-7"
              >

                <div
                  className={`h-2 w-10 rounded-full ${style.line}`}
                />

                <h4 className="mt-6 text-lg font-bold text-text-primary">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {item.text}
                </p>

              </div>
            );
          })}

        </div>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <div className="mt-10 text-center">

          <p className="text-sm font-medium text-text-secondary">
            Have an idea for collaboration?
          </p>

          <a
            href="#contact"
            className="mt-5 inline-flex h-13 items-center justify-center rounded-full bg-brand-purple px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue hover:shadow-xl"
          >
            Let's Work Together
            <span className="ml-2">→</span>
          </a>

        </div>

      </div>
    </section>
  );
}