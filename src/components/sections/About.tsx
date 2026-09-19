import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Rooted in Community",
    description:
      "We work alongside individuals, families, schools, and community networks to understand local realities and create support that truly responds to people's needs.",
    accent: "blue",
  },
  {
    number: "02",
    title: "Guided by Expertise",
    description:
      "Our work brings together mental health professionals, counsellors, social workers, community facilitators, and trained mental health champions.",
    accent: "purple",
  },
  {
    number: "03",
    title: "Open to Everyone",
    description:
      "We believe access to quality mental healthcare should never depend on someone's income, background, or circumstances.",
    accent: "green",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36"
    >
      {/* =========================================================
          BACKGROUND BRAND ELEMENTS
      ========================================================= */}

      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-brand-purple-light/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-brand-green-light/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =======================================================
            SECTION INTRO
        ======================================================= */}

        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-brand-green" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-green-dark">
                Who We Are
              </span>
            </div>

            <p className="mt-5 text-sm font-medium uppercase tracking-wider text-text-muted">
              Real Time Psychosupport CBO
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-3xl font-bold leading-[1.12] tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              Mental healthcare that begins with{" "}
              <span className="text-brand-blue">
                people.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">
              We are a grassroots, community-driven organization based in
              Mathare, Nairobi, working to make quality mental health and
              psychosocial support accessible, affordable, and compassionate.
            </p>
          </div>
        </div>

        {/* =======================================================
            FEATURE AREA
        ======================================================= */}

        <div className="mt-20 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">

          {/* -------------------------------------------------------
              BELIEF CARD
          ------------------------------------------------------- */}

          <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-brand-blue p-8 shadow-xl sm:p-10 lg:p-12">

            {/* Decorative purple */}
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-purple opacity-70 blur-sm"
            />

            {/* Decorative green */}
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-brand-green opacity-40 blur-sm"
            />

            {/* Decorative ring */}
            <div
              aria-hidden="true"
              className="absolute right-10 top-10 h-28 w-28 rounded-full border border-white/20"
            />

            <div
              aria-hidden="true"
              className="absolute right-16 top-16 h-16 w-16 rounded-full border border-white/20"
            />

            <div className="relative flex h-full flex-col justify-between">

              <div>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-brand-green" />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                    Our Belief
                  </span>
                </div>

                <h3 className="mt-8 max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Because mental health is not a privilege.
                </h3>

                <p className="mt-4 max-w-lg text-xl font-medium leading-8 text-white/80">
                  It is a human right.
                </p>
              </div>

              <div className="mt-12">
                <div className="mb-6 flex h-1.5 max-w-[180px] overflow-hidden rounded-full">
                  <span className="w-1/3 bg-white" />
                  <span className="w-1/3 bg-brand-purple" />
                  <span className="w-1/3 bg-brand-green" />
                </div>

                <p className="max-w-lg text-sm leading-7 text-white/70">
                  We work to ensure that people experiencing emotional and
                  psychological challenges can find support, dignity, and hope
                  regardless of their economic circumstances.
                </p>
              </div>

            </div>
          </div>

          {/* -------------------------------------------------------
              ORGANIZATION DESCRIPTION
          ------------------------------------------------------- */}

          <div className="flex flex-col justify-center rounded-[2rem] border border-border bg-surface p-8 sm:p-10 lg:p-12">

            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                Our Story
              </span>

              <span className="text-3xl font-light text-brand-purple/40">
                01
              </span>
            </div>

            <h3 className="text-2xl font-bold leading-tight text-text-primary sm:text-3xl">
              Turning invisible suffering into visible support.
            </h3>

            <div className="mt-6 space-y-5 text-sm leading-7 text-text-secondary sm:text-base">
              <p>
                Behind the resilience of communities like Mathare are countless
                stories of emotional pain — from families facing poverty and
                displacement to young people navigating trauma, violence,
                unemployment, and uncertainty.
              </p>

              <p>
                Real Time Psychosupport was established to bridge the gap
                between these challenges and the professional support people
                deserve.
              </p>

              <p>
                Today, we combine community engagement with professional mental
                health services, trauma-informed care, youth empowerment,
                school-based interventions, workplace wellness, and humanitarian
                psychosocial support.
              </p>
            </div>

            <Link
              href="#programs"
              className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold text-brand-blue transition-colors hover:text-brand-purple"
            >
              Discover what we do
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>

        {/* =======================================================
            THREE PRINCIPLES
        ======================================================= */}

        <div className="mt-20 grid gap-5 md:grid-cols-3">

          {principles.map((principle) => {

            const styles = {
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

            const style =
              styles[principle.accent as keyof typeof styles];

            return (
              <article
                key={principle.number}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
              >

                {/* Accent line */}
                <div
                  className={`absolute left-0 top-0 h-1 w-full ${style.line}`}
                />

                <div className="flex items-center justify-between">

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl text-xs font-bold ${style.number}`}
                  >
                    {principle.number}
                  </div>

                  <span className="text-2xl text-text-muted/30 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-bold text-text-primary">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {principle.description}
                </p>

              </article>
            );
          })}
        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================= */}

        <div className="mt-16 flex flex-col gap-5 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">

          <p className="max-w-2xl text-sm leading-7 text-text-muted">
            From community counselling to emergency psychosocial support, our
            work is guided by one purpose: helping people heal and communities
            become stronger.
          </p>

          <div className="flex shrink-0 items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand-blue" />
            <span className="h-2 w-2 rounded-full bg-brand-purple" />
            <span className="h-2 w-2 rounded-full bg-brand-green" />
            <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
              Healing • Hope • Resilience
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}