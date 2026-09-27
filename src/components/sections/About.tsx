import Image from "next/image";
import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Rooted in Community",
    description:
      "We work alongside individuals, families, schools, and community networks to understand local realities and create support that responds to people's needs.",
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
          BACKGROUND DECORATIONS
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
            SECTION HEADER
        ======================================================= */}

        <div className="max-w-3xl">

          <div className="flex items-center gap-3">
            <span className="h-1 w-10 rounded-full bg-brand-green" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-green-dark">
              Who We Are
            </span>
          </div>

          <p className="mt-5 text-sm font-medium uppercase tracking-wider text-text-muted">
            Real Time Psychosupport CBO
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Mental healthcare that begins with{" "}
            <span className="text-brand-blue">
              people.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
            We are a grassroots, community-driven organization based in
            Mathare, Nairobi, working to make quality mental health and
            psychosocial support accessible, affordable, and compassionate.
          </p>

        </div>

        {/* =======================================================
            STORY + PHOTO
        ======================================================= */}

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">

          {/* =====================================================
              IMAGE
          ===================================================== */}

          <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-brand-blue shadow-xl sm:min-h-[520px]">

            <Image
              src="/Images/IMG-5.jpg"
              alt="Real Time Psychosupport community mental health work"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />

            {/* Brand overlay */}

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-brand-blue/10 to-transparent"
            />

            {/* Image label */}

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">

              <div className="max-w-sm rounded-2xl border border-white/30 bg-white/90 p-5 shadow-xl backdrop-blur-md">

                <div className="flex items-center gap-3">

                  <span className="h-2.5 w-2.5 rounded-full bg-brand-green" />

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
                    Community at the heart
                  </p>

                </div>

                <p className="mt-2 text-lg font-bold leading-7 text-text-primary">
                  Supporting people where they live, learn, work, and recover.
                </p>

              </div>

            </div>

          </div>

          {/* =====================================================
              OUR STORY
          ===================================================== */}

          <div className="flex flex-col justify-center rounded-[2rem] border border-border bg-surface p-8 sm:p-10 lg:p-12">

            <div className="flex items-center justify-between">

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-purple">
                Our Story
              </span>

              <span className="text-3xl font-light text-brand-purple/30">
                01
              </span>

            </div>

            <h3 className="mt-7 text-2xl font-bold leading-tight text-text-primary sm:text-3xl">
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

            {/* Mission highlight */}

            <div className="mt-8 rounded-2xl bg-brand-blue-light p-5">

              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
                Our Purpose
              </p>

              <p className="mt-2 text-sm font-semibold leading-6 text-text-primary">
                To restore hope, strengthen resilience, and ensure that every
                individual has the opportunity to live a mentally healthy and
                dignified life.
              </p>

            </div>

            <Link
              href="#services"
              className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold text-brand-blue transition-colors hover:text-brand-purple"
            >
              Explore our programmes

              <span className="text-lg">
                →
              </span>
            </Link>

          </div>

        </div>

        {/* =======================================================
            BELIEF STATEMENT
        ======================================================= */}

        <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-brand-blue p-8 shadow-xl sm:p-10 lg:p-12">

          {/* Purple decoration */}

          <div
            aria-hidden="true"
            className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand-purple/70 blur-sm"
          />

          {/* Green decoration */}

          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-brand-green/40 blur-sm"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>

              <div className="flex items-center gap-3">

                <span className="h-2 w-2 rounded-full bg-brand-green" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  What We Believe
                </span>

              </div>

              <h3 className="mt-6 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                Because mental health is not a privilege.
              </h3>

              <p className="mt-3 text-xl font-medium text-white/80">
                It is a human right.
              </p>

            </div>

            <div className="lg:max-w-sm">

              <div className="mb-5 flex h-1.5 max-w-[180px] overflow-hidden rounded-full">

                <span className="w-1/3 bg-white" />

                <span className="w-1/3 bg-brand-purple" />

                <span className="w-1/3 bg-brand-green" />

              </div>

              <p className="text-sm leading-7 text-white/70">
                We work to ensure that people experiencing emotional and
                psychological challenges can find support, dignity, and hope
                regardless of their economic circumstances.
              </p>

            </div>

          </div>

        </div>

        {/* =======================================================
            THREE PRINCIPLES
        ======================================================= */}

        <div className="mt-20">

          <div className="mb-8">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
              How We Work
            </p>

            <h3 className="mt-3 text-2xl font-bold text-text-primary sm:text-3xl">
              Our approach is built on three principles.
            </h3>

          </div>

          <div className="grid gap-5 md:grid-cols-3">

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