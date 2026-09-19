const stories = [
  {
    category: "Community Mental Health",
    title: "Creating spaces where people can speak without fear",
    description:
      "Through community-based counselling and psychosocial support, Real Time Psychosupport creates safe spaces where individuals and families can seek help, be heard, and begin their journey toward healing.",
    accent: "blue",
  },
  {
    category: "Youth Empowerment",
    title: "Helping young people build resilience",
    description:
      "Youth mentorship, life skills, emotional resilience, and psychosocial support help young people develop healthier ways of navigating challenges and building their futures.",
    accent: "purple",
  },
  {
    category: "Humanitarian Response",
    title: "Supporting communities after crisis",
    description:
      "During emergencies and disasters, psychological first aid and trauma-informed psychosocial support help affected communities begin processing experiences and rebuilding resilience.",
    accent: "green",
  },
];

const accentStyles = {
  blue: {
    tag: "bg-brand-blue-light text-brand-blue",
    line: "bg-brand-blue",
    quote: "text-brand-blue/10",
  },
  purple: {
    tag: "bg-brand-purple-light text-brand-purple",
    line: "bg-brand-purple",
    quote: "text-brand-purple/10",
  },
  green: {
    tag: "bg-brand-green-light text-brand-green-dark",
    line: "bg-brand-green",
    quote: "text-brand-green/10",
  },
};

export default function SuccessStories() {
  return (
    <section
      id="stories"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36"
    >
      {/* Background decoration */}

      <div
        aria-hidden="true"
        className="absolute -right-48 top-24 h-96 w-96 rounded-full bg-brand-purple-light/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -left-48 bottom-24 h-96 w-96 rounded-full bg-brand-blue-light/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <div className="flex items-center gap-3">

              <span className="h-1 w-10 rounded-full bg-brand-green" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-green-dark">
                Stories of Change
              </span>

            </div>

            <p className="mt-5 text-sm font-medium uppercase tracking-wider text-text-muted">
              Our Stories
            </p>
          </div>

          <div>

            <h2 className="text-3xl font-bold leading-[1.12] tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              Behind every programme is a{" "}
              <span className="text-brand-purple">
                human story.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">
              Impact is more than numbers. It is reflected in the people,
              families, young people, and communities who find support,
              regain confidence, and discover new possibilities.
            </p>

          </div>

        </div>

        {/* =====================================================
            FEATURE STORY
        ===================================================== */}

        <div className="relative mt-16 overflow-hidden rounded-[2rem] bg-brand-blue shadow-xl">

          {/* Decorative quotation mark */}

          <div
            aria-hidden="true"
            className="absolute -right-6 -top-16 select-none text-[18rem] font-serif leading-none text-white/[0.04]"
          >
            “
          </div>

          <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">

            {/* Visual placeholder */}

            <div className="relative min-h-[360px] overflow-hidden bg-brand-purple lg:min-h-[480px]">

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-brand-purple via-brand-blue to-brand-green opacity-90"
              />

              <div
                aria-hidden="true"
                className="absolute -left-20 -top-20 h-72 w-72 rounded-full border border-white/10"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-32 -right-16 h-80 w-80 rounded-full border border-white/10"
              />

              <div className="relative flex h-full min-h-[360px] items-end p-8 sm:p-10 lg:min-h-[480px] lg:p-12">

                <div>

                  <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                    Featured Story
                  </span>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-white/75">
                    Approved beneficiary stories and photography can be
                    featured here to bring the organization's impact to life.
                  </p>

                </div>

              </div>

            </div>

            {/* Story */}

            <div className="flex items-center p-8 sm:p-10 lg:p-14">

              <div>

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                  A Journey Toward Healing
                </span>

                <h3 className="mt-5 max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                  When people have somewhere safe to turn, healing can begin.
                </h3>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
                  Real Time Psychosupport works to make mental health support
                  accessible to people who may otherwise face financial,
                  social, or geographic barriers to professional care.
                </p>

                <div className="mt-8 h-px w-full bg-white/10" />

                <div className="mt-7 flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 21s-7-4.35-9.5-8.5C.5 8.5 2.5 5 6 5c2 0 3.5 1.2 4.5 2.5C11.5 6.2 13 5 15 5c3.5 0 5.5 3.5 3.5 7.5C19 16.65 12 21 12 21Z"
                        fill="currentColor"
                      />
                    </svg>

                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Stories that inspire change
                    </p>

                    <p className="text-xs text-white/50">
                      Real experiences • Real communities
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

        {/* =====================================================
            STORY CARDS
        ===================================================== */}

        <div className="mt-8 grid gap-5 lg:grid-cols-3">

          {stories.map((story) => {

            const style =
              accentStyles[
                story.accent as keyof typeof accentStyles
              ];

            return (
              <article
                key={story.title}
                className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-8"
              >

                <div
                  className={`absolute left-0 top-0 h-1 w-full ${style.line}`}
                />

                {/* Quote icon */}

                <div
                  aria-hidden="true"
                  className={`absolute right-5 top-4 font-serif text-7xl leading-none ${style.quote}`}
                >
                  “
                </div>

                <div className="relative">

                  <span
                    className={`inline-flex rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] ${style.tag}`}
                  >
                    {story.category}
                  </span>

                  <h3 className="mt-6 text-xl font-bold leading-snug text-text-primary">
                    {story.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-text-secondary">
                    {story.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-text-muted">

                    <span
                      className={`h-1.5 w-1.5 rounded-full ${style.line}`}
                    />

                    <span>Read the story</span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </div>

                </div>

              </article>
            );
          })}

        </div>

        {/* =====================================================
            STORY SUBMISSION / CTA
        ===================================================== */}

        <div className="mt-10 rounded-[2rem] border border-border bg-surface p-8 sm:p-10 lg:p-12">

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">
                Share the impact
              </p>

              <h3 className="mt-4 text-2xl font-bold text-text-primary sm:text-3xl">
                Every voice matters.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
                With informed consent and appropriate safeguarding, real
                community stories can help others understand the importance
                of accessible mental health support.
              </p>

            </div>

            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand-blue px-7 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-purple hover:shadow-lg"
            >
              Share your story
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}