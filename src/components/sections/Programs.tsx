import Image from "next/image";

const services = [
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
    image: "/images/IMG-3.jpg",
    tags: [
      "Individual Support",
      "Family Counselling",
      "Group Support",
    ],
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
    image: "/images/IMG-4.jpg",
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
    image: "/images/IMG-5.jpg",
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
    image: "/images/IMG-6.jpg",
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
    image: "/images/IMG-7.jpg",
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
              Our Services
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-3xl font-bold leading-[1.12] tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              Support that meets people{" "}
              <span className="text-brand-purple">
                where they are.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">
              We provide compassionate, professional, and community-centred
              mental health and psychosocial support for individuals, families,
              young people, schools, workplaces, and communities.
            </p>
          </div>

        </div>

        {/* =======================================================
            FEATURED SERVICE
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

            <div className="relative grid lg:grid-cols-[1fr_0.9fr]">

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="relative z-10 p-8 sm:p-10 lg:p-14">

                <div className="flex items-center gap-4">

                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-xs font-bold text-white">
                    01
                  </span>

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                    Featured Service
                  </span>

                </div>

                <h3 className="mt-8 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Community Counselling
                </h3>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                  Providing confidential individual, family, and group
                  counselling that creates a safe space for people to be heard,
                  supported, and empowered.
                </p>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60">
                  We create safe and confidential spaces where individuals and
                  families can receive professional support, process difficult
                  experiences, and develop practical ways of coping and healing.
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

                {/* CTA */}

                <a
                  href="#contact"
                  className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-brand-blue transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Talk to us
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>

              </div>

              {/* =================================================
                  FEATURED IMAGE
              ================================================= */}

              <div className="relative min-h-[360px] lg:min-h-[520px]">

                <Image
                  src={services[0].image}
                  alt="Community counselling and psychosocial support"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/70 via-brand-blue/10 to-transparent" />

                {/* Floating label */}

                <div className="absolute bottom-7 left-7 right-7">

                  <div className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md">

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-blue">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path
                          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                        Safe. Confidential. Supportive.
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white">
                        A space where people can be heard.
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

        <div className="mt-6 grid gap-5 md:grid-cols-2">

          {services
            .filter((service) => !service.featured)
            .map((service) => {

              const style =
                accentStyles[
                  service.accent as keyof typeof accentStyles
                ];

              return (
                <article
                  key={service.number}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* Top accent */}

                  <div
                    className={`absolute left-0 top-0 z-10 h-1 w-full ${style.line}`}
                  />

                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <div className="relative h-56 overflow-hidden">

                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Image overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                    {/* Number */}

                    <div
                      className={`absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-xl text-xs font-bold shadow-sm ${style.number}`}
                    >
                      {service.number}
                    </div>

                    {/* Short title */}

                    <span className="absolute bottom-5 left-6 text-xs font-semibold uppercase tracking-wider text-white drop-shadow-md">
                      {service.shortTitle}
                    </span>

                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

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

                    <a
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
                    </a>

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
                Our services are designed to meet people where they are, while
                strengthening the families, institutions, and communities
                around them.
              </p>

            </div>

            {/* Colour identity */}

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
            Not sure which service is right for you?
          </p>

          <a
            href="#contact"
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-brand-blue transition-colors hover:text-brand-purple"
          >
            Talk to our team
            <span
              aria-hidden="true"
              className="transition-transform duration-300 hover:translate-x-1"
            >
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}