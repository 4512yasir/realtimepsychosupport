import Image from "next/image";

const gallery = [
  {
    title: "Community Mental Health",
    category: "Community",
    image: "/Images/IMG-12.jpg",
    accent: "blue",
  },
  {
    title: "Supporting Young People",
    category: "Youth",
    image: "/Images/IMG-13.jpg",
    accent: "purple",
  },
  {
    title: "Mental Health Awareness",
    category: "Awareness",
    image: "/Images/IMG-10.jpg",
    accent: "green",
  },
  {
    title: "Community Engagement",
    category: "Outreach",
    image: "/Images/IMG-4.jpg",
    accent: "blue",
  },
  {
    title: "Counselling & Support",
    category: "Psychosocial Support",
    image: "/Images/IMG-5.jpg",
    accent: "purple",
  },
  {
    title: "Building Resilience",
    category: "Wellbeing",
    image: "/Images/IMG-10.jpg",
    accent: "green",
  },
];

const accentStyles = {
  blue: {
    badge: "bg-brand-blue text-white",
    line: "bg-brand-blue",
  },
  purple: {
    badge: "bg-brand-purple text-white",
    line: "bg-brand-purple",
  },
  green: {
    badge: "bg-brand-green text-white",
    line: "bg-brand-green",
  },
};

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="absolute -left-40 top-32 h-80 w-80 rounded-full bg-brand-blue-light/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-brand-purple-light/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-brand-green" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-green-dark">
                Our Work
              </span>
            </div>

            <p className="mt-5 text-sm font-medium uppercase tracking-wider text-text-muted">
              Gallery
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold leading-[1.12] tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              Moments that{" "}
              <span className="text-brand-blue">make a difference.</span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">
              A glimpse into the people, communities, and activities that
              shape our work in mental health and psychosocial support.
            </p>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {/* Featured image */}
          <article className="group relative min-h-[420px] overflow-hidden rounded-[2rem] bg-brand-blue sm:min-h-[520px]">
            <Image
              src={gallery[0].image}
              alt={gallery[0].title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
              <span className="inline-flex rounded-full bg-brand-blue px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                {gallery[0].category}
              </span>

              <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                {gallery[0].title}
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">
                Creating spaces where people can connect, learn, receive
                support, and build resilience.
              </p>
            </div>

            {/* Accent line */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-brand-blue" />
          </article>

          {/* Supporting images */}
          <div className="grid gap-5 sm:grid-cols-2">
            {gallery.slice(1).map((item) => {
              const style =
                accentStyles[
                  item.accent as keyof typeof accentStyles
                ];

              return (
                <article
                  key={item.title}
                  className="group relative min-h-[250px] overflow-hidden rounded-[1.75rem] bg-surface"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em] ${style.badge}`}
                    >
                      {item.category}
                    </span>

                    <h3 className="mt-3 text-lg font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                  {/* Accent line */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 w-full ${style.line}`}
                  />
                </article>
              );
            })}
          </div>
        </div>

        {/* Closing message */}
        <div className="mt-10 overflow-hidden rounded-[2rem] bg-surface ring-1 ring-border">
          <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">
                Community-centred
              </p>

              <h3 className="mt-4 max-w-3xl text-2xl font-bold leading-tight text-text-primary sm:text-3xl">
                Every interaction is an opportunity to create hope.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
                Through counselling, outreach, education, mentorship, and
                community engagement, we work alongside people to strengthen
                mental wellbeing and build supportive communities.
              </p>
            </div>

            {/* Decorative icon */}
            <div className="flex items-center justify-center border-t border-border p-8 lg:border-l lg:border-t-0 lg:p-12">
              <div className="relative flex h-28 w-28 items-center justify-center">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full border border-brand-blue/20"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-4 rounded-full border border-brand-purple/30"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-8 rounded-full border border-brand-green/40"
                />

                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg">
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
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final statement */}
        <div className="mt-8 text-center">
          <p className="mx-auto max-w-2xl text-xs leading-6 text-text-muted">
            Our work is rooted in people, relationships, and communities.
            Every moment reflects our commitment to healing, resilience, and
            hope.
          </p>
        </div>
      </div>
    </section>
  );
}