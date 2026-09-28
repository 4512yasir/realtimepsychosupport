import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Her Rise",
    shortTitle: "Young Mothers",
    description:
      "A community-based psychosocial support programme creating safe spaces for young mothers to heal, build resilience, and regain a sense of identity and purpose.",
    detail:
      "Her Rise combines GBV awareness, emotional regulation, positive psychology, peer support, and healing through expression. The programme is currently supporting an active cohort of 25–30 young mothers in Mathare.",
    accent: "purple",
    featured: true,
    status: "Active Programme",
    image: "/Images/IMG-3.jpg",
    tags: [
      "Emotional Healing",
      "GBV Awareness",
      "Peer Support",
      "Resilience",
    ],
  },
  {
    number: "02",
    title: "Community Counselling",
    shortTitle: "Community Care",
    description:
      "Providing confidential individual, family, and group counselling services for vulnerable members of the community.",
    detail:
      "We create safe and confidential spaces where individuals and families can receive professional support, process difficult experiences, and develop practical ways of coping and healing.",
    accent: "blue",
    featured: false,
    image: "/Images/IMG-4.jpg",
  },
  {
    number: "03",
    title: "Youth Mentorship & Psychoeducation",
    shortTitle: "Youth & Resilience",
    description:
      "Supporting children and young people through life skills, mentorship, psychoeducation, emotional resilience, and psychosocial support.",
    detail:
      "Our youth-focused work helps young people develop emotional awareness, confidence, positive relationships, decision-making skills, and practical tools for navigating life's challenges.",
    accent: "purple",
    featured: false,
    image: "/Images/IMG-5.jpg",
  },
  {
    number: "04",
    title: "School Mental Health & Community Theatre",
    shortTitle: "Schools & Children",
    description:
      "Supporting schools through mental health education, emotional expression, counselling, teacher support, and creative approaches to wellbeing.",
    detail:
      "Our school-based work includes community theatre, storytelling, and creative expression that help children and adolescents explore emotions and reinforce values such as peace, kindness, hope, and resilience.",
    accent: "green",
    featured: false,
    image: "/Images/IMG-6.jpg",
  },
  {
    number: "05",
    title: "Workplace Mental Health",
    shortTitle: "Workplace Wellbeing",
    description:
      "Helping organizations promote employee wellbeing through counselling, psychoeducation, team-building, stress management, and workplace debriefs.",
    detail:
      "We support organizations to strengthen mental health awareness, improve coping mechanisms, support interpersonal relationships, and build healthier and more resilient workplaces.",
    accent: "blue",
    featured: false,
    image: "/Images/IMG-7.jpg",
  },
  {
    number: "06",
    title: "Humanitarian Psychosocial Support",
    shortTitle: "Emergency Response",
    description:
      "Providing Psychological First Aid, trauma-informed counselling, and psychosocial support during emergencies and humanitarian crises.",
    detail:
      "Our experience includes supporting peer responders and communities affected by emergencies through timely psychosocial interventions and trauma-informed support.",
    accent: "purple",
    featured: false,
    image: "/Images/IMG-8.jpg",
  },
  {
    number: "07",
    title: "Capacity Building & Psychological First Aid",
    shortTitle: "Training & Capacity",
    description:
      "Strengthening the capacity of frontline workers and community actors to identify and respond to mental health and psychosocial needs.",
    detail:
      "Our capacity-building work includes Psychological First Aid training, development of training materials, and support for social workers and community-based mental health responders.",
    accent: "green",
    featured: false,
    image: "/Images/IMG-9.jpg",
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
    number: "bg-brand-green-light text-brand-green-dark",
    line: "bg-brand-green",
    hover: "group-hover:text-brand-green-dark",
  },
};

export default function Services() {
  return (
    <section
      id="services"
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
              Programmes & Services
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-3xl font-bold leading-[1.12] tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              Support that meets people{" "}
              <span className="text-brand-purple">where they are.</span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">
              We provide community-based mental health and psychosocial
              support across counselling, youth development, schools,
              workplaces, humanitarian response, and capacity building.
            </p>
          </div>
        </div>

        {/* =======================================================
            FEATURED PROGRAMME — HER RISE
        ======================================================= */}

        <div className="mt-16">
          <article className="group relative overflow-hidden rounded-[2rem] bg-brand-purple shadow-xl">
            {/* Decorative shapes */}

            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-blue opacity-60"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-brand-green opacity-30"
            />

            <div className="relative grid lg:grid-cols-[1fr_0.9fr]">
              {/* Content */}

              <div className="relative z-10 p-8 sm:p-10 lg:p-14">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-xs font-bold text-white">
                    01
                  </span>

                  <span className="rounded-full bg-brand-green px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    Active Programme
                  </span>
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                  Her Rise
                </p>

                <h3 className="mt-3 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Healing, Resilience & Empowerment for Young Mothers
                </h3>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                  Creating safe spaces where young mothers can process
                  difficult experiences, strengthen emotional resilience, and
                  rebuild a sense of identity, confidence, and purpose.
                </p>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60">
                  Her Rise combines GBV awareness, emotional regulation,
                  positive psychology, peer support, and healing through
                  expression. The programme currently supports an active cohort
                  of 25–30 young mothers in Mathare.
                </p>

                {/* Tags */}

                <div className="mt-8 flex flex-wrap gap-3">
                  {services[0].tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Programme metrics */}

                <div className="mt-9 grid max-w-lg grid-cols-2 gap-4 border-t border-white/15 pt-7 sm:grid-cols-3">
                  <div>
                    <p className="text-2xl font-bold text-white">25–30</p>
                    <p className="mt-1 text-xs text-white/55">
                      Young mothers
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-white">Weekly</p>
                    <p className="mt-1 text-xs text-white/55">
                      Group sessions
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-white">2026</p>
                    <p className="mt-1 text-xs text-white/55">
                      Programme launched
                    </p>
                  </div>
                </div>

                <Link
                  href="#support"
                  className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-brand-purple transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Support Her Rise
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>

              {/* Featured image */}

              <div className="relative min-h-[360px] lg:min-h-[580px]">
                <Image
                  src={services[0].image}
                  alt="Young mothers participating in a psychosocial support programme"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/75 via-brand-purple/10 to-transparent" />

                <div className="absolute bottom-7 left-7 right-7">
                  <div className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-green text-white">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 21s-7-4.35-9.5-8.5C.5 8.5 2.5 5 6 5c2 0 3.5 1.2 4.5 2.5C11.5 6.2 13 5 15 5c3.5 0 5.5 3.5 3.5 7.5C19 16.65 12 21 12 21Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                        Safe. Supportive. Empowering.
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white">
                        Healing begins when people have a safe space.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* =======================================================
            OTHER SERVICES
        ======================================================= */}

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services
            .filter((service) => !service.featured)
            .map((service) => {
              const style =
                accentStyles[service.accent as keyof typeof accentStyles];

              return (
                <article
                  key={service.number}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`absolute left-0 top-0 z-10 h-1 w-full ${style.line}`}
                  />

                  {/* Image */}

                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                    <div
                      className={`absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-xl text-xs font-bold shadow-sm ${style.number}`}
                    >
                      {service.number}
                    </div>

                    <span className="absolute bottom-5 left-6 text-xs font-semibold uppercase tracking-wider text-white drop-shadow-md">
                      {service.shortTitle}
                    </span>
                  </div>

                  {/* Content */}

                  <div className="p-7 sm:p-8">
                    <h3
                      className={`text-xl font-bold text-text-primary transition-colors ${style.hover}`}
                    >
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-text-secondary">
                      {service.description}
                    </p>

                    <p className="mt-4 border-t border-border pt-4 text-sm leading-7 text-text-muted">
                      {service.detail}
                    </p>

                    <Link
                      href="#contact"
                      className={`mt-6 inline-flex items-center gap-2 text-sm font-bold transition-colors ${style.hover}`}
                    >
                      Talk to us
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              );
            })}
        </div>

        {/* =======================================================
            APPROACH / CTA
        ======================================================= */}

        <div className="mt-16 overflow-hidden rounded-[1.5rem] border border-border bg-white">
          <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="p-7 sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                Our Approach
              </p>

              <h3 className="mt-3 text-xl font-bold text-text-primary sm:text-2xl">
                Professional support. Community connection. Lasting impact.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-text-secondary">
                Our programmes are designed to meet people where they are,
                while strengthening the families, institutions, and communities
                around them.
              </p>
            </div>

            <div className="flex items-center gap-2 px-7 pb-7 sm:px-8 sm:pb-8 lg:px-10 lg:py-10">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-blue" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-purple" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-green" />

              <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
                Care • Resilience • Hope
              </span>
            </div>
          </div>
        </div>

        {/* =======================================================
            FINAL CTA
        ======================================================= */}

        <div className="mt-10 text-center">
          <p className="text-sm text-text-secondary">
            Looking for support or interested in working with us?
          </p>

          <Link
            href="#contact"
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-brand-blue transition-colors hover:text-brand-purple"
          >
            Talk to our team
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}