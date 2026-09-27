import Image from "next/image";

const partners = [
  {
    name: "National Council of Churches of Kenya",
    shortName: "NCCK",
    description:
      "Youth mentorship programmes and psychosocial support for young mothers, promoting resilience, confidence, and personal development.",
    category: "Youth & Community",
    accent: "blue",
    image: "/images/nccklogo.png",
  },
  {
    name: "Media Council of Kenya",
    shortName: "MCK",
    description:
      "Employee counselling, workplace mental health programmes, psychoeducation, and trauma support for media professionals.",
    category: "Workplace Wellness",
    accent: "purple",
    image: "/images/media.jfif",
  },
  {
    name: "Plan International Kenya",
    shortName: "Plan",
    description:
      "Adolescent mental health, psychosocial support, counselling services, and humanitarian emergency response initiatives.",
    category: "Youth & Humanitarian",
    accent: "green",
    image: "/images/plan.png",
  },
  {
    name: "Kenya Red Cross Society",
    shortName: "KRCS",
    description:
      "Psychological First Aid and psychosocial support for communities affected by floods and other emergencies.",
    category: "Emergency Response",
    accent: "blue",
    image: "/images/redcross.png",
  },
  {
    name: "World Vision Kenya",
    shortName: "World Vision",
    description:
      "Trauma counselling and psychosocial recovery programmes for survivors of devastating community fires.",
    category: "Humanitarian Support",
    accent: "purple",
    image: "/images/worldvision.jfif",
  },
  {
    name: "Global Art Interventions",
    shortName: "GAI",
    description:
      "School-based art therapy programmes that use creativity to promote healing, emotional expression, and resilience.",
    category: "School Mental Health",
    accent: "green",
    image: "/images/GLOBALART.jpg",
  },
];

const accentStyles = {
  blue: {
    badge: "bg-brand-blue-light text-brand-blue",
    line: "bg-brand-blue",
    dot: "bg-brand-blue",
  },
  purple: {
    badge: "bg-brand-purple-light text-brand-purple",
    line: "bg-brand-purple",
    dot: "bg-brand-purple",
  },
  green: {
    badge: "bg-brand-green-light text-brand-green-dark",
    line: "bg-brand-green",
    dot: "bg-brand-green",
  },
};

export default function Partnerships() {
  return (
    <section
      id="partnerships"
      className="relative overflow-hidden bg-surface py-24 sm:py-28 lg:py-36"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

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
              <span className="text-brand-purple">greater impact.</span>
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
            FEATURED PARTNERSHIP IMAGE
        ===================================================== */}

        <div className="mt-14 overflow-hidden rounded-[2rem] bg-brand-blue shadow-xl">
          <div className="grid lg:grid-cols-[1fr_0.85fr]">
            {/* Text */}

            <div className="relative flex items-center p-8 sm:p-10 lg:p-14">
              <div
                aria-hidden="true"
                className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-purple/50 blur-sm"
              />

              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                  Working Across Sectors
                </span>

                <h3 className="mt-5 max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                  Connecting expertise, resources, and community knowledge.
                </h3>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                  Our partnerships allow us to combine professional expertise
                  with local knowledge and trusted community relationships,
                  helping us respond to mental health needs in practical and
                  culturally responsive ways.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Mental Health",
                    "Youth",
                    "Community",
                    "Humanitarian Response",
                    "Workplace Wellness",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured image */}

            <div className="relative min-h-[320px] lg:min-h-[420px]">
              <Image
                src="/images/IMG-7"
                alt="Real Time Psychosupport working with community and partner organizations"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-transparent to-transparent lg:from-brand-blue/80 lg:via-brand-blue/10" />

              {/* Image label */}

              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-black/30 px-4 py-2 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-brand-green" />

                  <span className="text-xs font-semibold text-white">
                    Collaboration in action
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            PARTNER COUNT
        ===================================================== */}

        <div className="mt-10 flex flex-wrap items-center justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">
              Selected Collaborations
            </p>

            <p className="mt-2 text-sm text-text-secondary">
              Organizations contributing to mental health and community
              wellbeing.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-brand-blue">
              {partners.length}
            </span>

            <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              Partner Organizations
            </span>
          </div>
        </div>

        {/* =====================================================
            PARTNER CARDS
        ===================================================== */}

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => {
            const style = accentStyles[partner.accent];

            return (
              <article
                key={partner.name}
                className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}

                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={partner.image}
                    alt={`${partner.name} partnership`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Image overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  {/* Category */}

                  <div className="absolute bottom-4 left-5">
                    <span
                      className={`inline-flex rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] ${style.badge}`}
                    >
                      {partner.category}
                    </span>
                  </div>

                  {/* Short name */}

                  <div className="absolute right-4 top-4 flex h-11 min-w-11 items-center justify-center rounded-xl bg-white/90 px-2 text-[10px] font-bold text-text-primary shadow-sm backdrop-blur-sm">
                    {partner.shortName}
                  </div>
                </div>

                {/* Accent */}

                <div className={`h-1 w-full ${style.line}`} />

                {/* Content */}

                <div className="p-7 sm:p-8">
                  <h3 className="text-lg font-bold leading-snug text-text-primary">
                    {partner.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-text-secondary">
                    {partner.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 border-t border-border pt-5">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${style.dot}`}
                    />

                    <span className="text-xs font-semibold text-text-muted">
                      Partnership & collaboration
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            COMMUNITY NETWORKS
        ===================================================== */}

        <div className="mt-8 overflow-hidden rounded-[2rem] border border-border bg-white">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Community image */}

            <div className="relative min-h-[320px] lg:min-h-[380px]">
              <Image
                src="/images/IMG-8.jpg"
                alt="Real Time Psychosupport community engagement"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <span className="rounded-full bg-brand-green px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white">
                  Community Networks
                </span>
              </div>
            </div>

            {/* Community content */}

            <div className="flex items-center p-8 sm:p-10 lg:p-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green-dark">
                  Rooted in the community
                </p>

                <h3 className="mt-4 text-2xl font-bold leading-tight text-text-primary sm:text-3xl">
                  Mental health support grows through trusted relationships.
                </h3>

                <p className="mt-5 text-sm leading-7 text-text-secondary sm:text-base">
                  Our community-based collaborations include youth networks
                  such as{" "}
                  <strong className="text-text-primary">Ghetto Girls</strong>{" "}
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
        </div>

        {/* =====================================================
            CTA
        ===================================================== */}

        <div className="mt-12 text-center">
          <p className="text-sm text-text-muted">
            Interested in creating meaningful mental health impact together?
          </p>

          <a
            href="#contact"
            className="group mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-blue transition-colors hover:text-brand-purple"
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