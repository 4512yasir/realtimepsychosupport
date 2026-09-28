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
      "We believe access to quality mental healthcare should not depend on someone's income, background, or circumstances.",
    accent: "green",
  },
];

const experience = [
  {
    number: "01",
    organization: "Media Council of Kenya",
    title: "Workplace Mental Health Support",
    value: "123",
    valueLabel: "staff supported",
    description:
      "Supported staff through structured mental health interventions, group mental health and team-building sessions, individual counselling, and workplace debriefs addressing work-related stress.",
    outcome:
      "Improved mental health awareness, interpersonal relationships, coping mechanisms, and team cohesion.",
    accent: "blue",
  },
  {
    number: "02",
    organization: "SHOFCO",
    title: "Capacity Building",
    value: "125",
    valueLabel: "social workers trained",
    description:
      "Developed a Psychological First Aid (PFA) module and trained social workers across five counties to strengthen frontline capacity to respond to mental health needs.",
    outcome:
      "Strengthened the capacity of frontline workers to provide appropriate mental health and psychosocial support.",
    accent: "purple",
  },
  {
    number: "03",
    organization: "Global Art Initiative",
    title: "Community Theatre for Healing",
    value: "8",
    valueLabel: "schools reached",
    description:
      "Delivered school-based theatre programmes for children aged 10–15 using storytelling and creative expression to reinforce values of peace, kindness, hope, and resilience.",
    outcome:
      "Improved emotional expression and promoted positive values among children and adolescents.",
    accent: "green",
  },
  {
    number: "04",
    organization: "Plan International",
    title: "Youth Psychoeducation",
    value: "52",
    valueLabel: "young people reached",
    description:
      "Provided life skills and mentorship sessions for school-going children and young adults, alongside trauma-informed counselling support for peer responders during the 2021 floods crisis.",
    outcome:
      "Improved decision-making and life skills while strengthening peer responders' capacity to manage trauma and support affected communities.",
    accent: "blue",
  },
  {
    number: "05",
    organization: "Nairobi County Government",
    title: "Community Mental Health Services & Awareness",
    value: "1,000+",
    valueLabel: "participants reached",
    description:
      "Provided mental health sensitization and psychosocial support through Kiamaiko Hospital and Mathare outreach activities, including a large-scale mental health awareness event in 2024.",
    outcome:
      "Increased community awareness, improved access to accurate mental health information, reduced stigma, and strengthened collaboration among mental health stakeholders.",
    accent: "purple",
  },
];

const accentStyles = {
  blue: {
    number: "bg-brand-blue-light text-brand-blue",
    line: "bg-brand-blue",
    badge: "bg-brand-blue-light text-brand-blue",
  },
  purple: {
    number: "bg-brand-purple-light text-brand-purple",
    line: "bg-brand-purple",
    badge: "bg-brand-purple-light text-brand-purple",
  },
  green: {
    number: "bg-brand-green-light text-brand-green-dark",
    line: "bg-brand-green",
    badge: "bg-brand-green-light text-brand-green-dark",
  },
};

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

        <div className="max-w-4xl">
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
            Mental health support that begins with{" "}
            <span className="text-brand-blue">people.</span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">
            Real Time Psychosupport CBO is a community-based organization based
            in Mathare, Nairobi, dedicated to providing accessible and timely
            mental health and psychosocial support services to individuals,
            families, and vulnerable populations.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">
            Through counselling, community engagement, and capacity-building
            initiatives, we promote mental wellbeing, resilience, and social
            transformation.
          </p>
        </div>

        {/* =======================================================
            ORGANIZATION AT A GLANCE
        ======================================================= */}

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
              Location
            </p>
            <p className="mt-2 text-lg font-bold text-text-primary">
              Mathare, Nairobi
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-purple">
              Focus
            </p>
            <p className="mt-2 text-lg font-bold text-text-primary">
              Mental Health
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-green-dark">
              Approach
            </p>
            <p className="mt-2 text-lg font-bold text-text-primary">
              Community-Based
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
              Core Support
            </p>
            <p className="mt-2 text-lg font-bold text-text-primary">
              Psychosocial Support
            </p>
          </div>
        </div>

        {/* =======================================================
            STORY + PHOTO
        ======================================================= */}

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          {/* IMAGE */}

          <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-brand-blue shadow-xl sm:min-h-[520px]">
            <Image
              src="/images/IMG-5.jpg"
              alt="Real Time Psychosupport community mental health work"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-brand-blue/10 to-transparent"
            />

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

          {/* OUR STORY */}

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
              Bringing mental health support closer to the community.
            </h3>

            <div className="mt-6 space-y-5 text-sm leading-7 text-text-secondary sm:text-base">
              <p>
                Real Time Psychosupport works with individuals, families,
                schools, workplaces, community networks, and vulnerable
                populations to improve access to mental health and
                psychosocial support.
              </p>

              <p>
                Our work combines counselling, community engagement,
                psychoeducation, capacity building, youth support, workplace
                mental health, school-based interventions, and humanitarian
                psychosocial support.
              </p>

              <p>
                Through these approaches, we seek to strengthen resilience,
                improve wellbeing, reduce stigma, and help communities develop
                the knowledge and support systems needed to respond to mental
                health challenges.
              </p>
            </div>

            {/* Mission highlight */}

            <div className="mt-8 rounded-2xl bg-brand-blue-light p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
                Our Purpose
              </p>

              <p className="mt-2 text-sm font-semibold leading-6 text-text-primary">
                Promoting mental wellbeing, resilience, and social
                transformation through accessible and timely support.
              </p>
            </div>

            <Link
              href="#services"
              className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold text-brand-blue transition-colors hover:text-brand-purple"
            >
              Explore our programmes
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>

        {/* =======================================================
            BELIEF STATEMENT
        ======================================================= */}

        <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-brand-blue p-8 shadow-xl sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand-purple/70 blur-sm"
          />

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
                Mental health support should be accessible to everyone.
              </h3>

              <p className="mt-3 text-xl font-medium text-white/80">
                Care, dignity, and hope should be within reach.
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
              const style =
                accentStyles[principle.accent as keyof typeof accentStyles];

              return (
                <article
                  key={principle.number}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
                >
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
            OUR EXPERIENCE
        ======================================================= */}

        <div className="mt-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-purple">
              Our Experience
            </p>

            <h3 className="mt-3 text-3xl font-bold leading-tight text-text-primary sm:text-4xl">
              Experience built through community action.
            </h3>

            <p className="mt-5 text-base leading-8 text-text-secondary sm:text-lg">
              Our work spans workplace mental health, capacity building,
              school-based programmes, youth psychoeducation, and community
              mental health services.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {experience.map((item) => {
              const style =
                accentStyles[item.accent as keyof typeof accentStyles];

              return (
                <article
                  key={item.number}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-8"
                >
                  <div
                    className={`absolute left-0 top-0 h-1 w-full ${style.line}`}
                  />

                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] ${style.badge}`}
                      >
                        {item.organization}
                      </span>

                      <h4 className="mt-4 text-xl font-bold text-text-primary">
                        {item.title}
                      </h4>
                    </div>

                    <span className="text-2xl font-light text-text-muted/30">
                      {item.number}
                    </span>
                  </div>

                  <div className="mt-7 flex items-end gap-3">
                    <span className={`text-4xl font-bold ${style.badge.split(" ")[1]}`}>
                      {item.value}
                    </span>

                    <span className="pb-1 text-xs font-semibold uppercase tracking-wider text-text-muted">
                      {item.valueLabel}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-text-secondary">
                    {item.description}
                  </p>

                  <div className="mt-6 border-t border-border pt-5">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-text-muted">
                      Key Outcome
                    </p>

                    <p className="mt-2 text-sm leading-7 text-text-primary">
                      {item.outcome}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex justify-end">
            <Link
              href="#impact"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue transition-colors hover:text-brand-purple"
            >
              View our impact
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================= */}

        <div className="mt-16 flex flex-col gap-5 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-text-muted">
            From community counselling and youth support to workplace mental
            health and humanitarian psychosocial support, our experience is
            grounded in practical community-based action.
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