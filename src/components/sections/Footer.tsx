
import Image from "next/image";
import Link from "next/link";

const exploreLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Our Services", href: "/#services" },
  { label: "Our Approach", href: "/#approach" },
  { label: "Our Work", href: "/#gallery" },
  { label: "Partnerships", href: "/#partnerships" },
  { label: "Looking Ahead", href: "/#looking-ahead" },
];

const programmes = [
  "Community Counselling",
  "Youth Mentorship",
  "School Mental Health",
  "Humanitarian Psychosocial Support",
  "Workplace Wellness",
];

const partnershipAreas = [
  "Community Organizations",
  "Schools & Institutions",
  "Healthcare Partners",
  "Development Partners",
];

const values = [
  "Compassion",
  "Dignity",
  "Resilience",
  "Community",
  "Hope",
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-brand-blue text-white">
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-48 -z-10 h-[550px] w-[550px] rounded-full border border-white/[0.06]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[350px] w-[350px] rounded-full border border-white/[0.06]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 -z-10 h-[450px] w-[450px] rounded-full bg-brand-purple/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Closing statement */}
        <section className="border-b border-white/10 py-16 sm:py-20 lg:py-24">
          <div className="grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-brand-green-light" />
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-green-light">
                  Stay connected
                </p>
              </div>

              <h2 className="mt-6 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-6xl">
                Mental wellbeing is a journey.
                <span className="mt-2 block text-brand-green-light">
                  Let&apos;s take it together.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                We work alongside individuals, families, schools,
                organisations, and communities to promote healing, strengthen
                resilience, and make psychosocial support more accessible.
              </p>
            </div>

            <div className="lg:min-w-[220px] lg:pb-1">
              <p className="max-w-xs text-sm leading-6 text-white/55 lg:ml-auto lg:text-right">
                Have a question or interested in working with us?
              </p>

              <Link
                href="/#contact"
                className="group mt-5 inline-flex items-center justify-center gap-3 rounded-full bg-brand-green-light px-6 py-3.5 text-sm font-bold text-brand-blue transition duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Start a conversation
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Brand and community image */}
        <section className="grid gap-10 border-b border-white/10 py-12 sm:py-16 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16 lg:py-20">
          <div>
            <Link
              href="/"
              aria-label="Real Time Psychosupport home"
              className="inline-flex rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-light"
            >
              <Image
                src="/realtime-logo.jpeg"
                alt="Real Time Psychosupport CBO"
                width={220}
                height={90}
                className="h-auto w-[175px] rounded-lg object-contain sm:w-[195px]"
              />
            </Link>

            <p className="mt-7 max-w-lg text-2xl font-semibold leading-relaxed tracking-tight sm:text-3xl">
              Where expertise meets{" "}
              <span className="text-brand-green-light">compassion.</span>
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
              Real Time Psychosupport CBO is a grassroots, community-driven
              organisation committed to expanding access to mental health
              and psychosocial support.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Mental Wellbeing", "Psychosocial Support", "Community Care"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-white/65"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="relative h-64 sm:h-80">
              <Image
                src="/images/IMG-6.jpg"
                alt="Real Time Psychosupport community engagement"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green-light">
                  Rooted in community
                </p>
                <p className="mt-3 max-w-sm text-xl font-semibold leading-snug sm:text-2xl">
                  Healing happens through connection, understanding, and care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation and information */}
        <section className="grid grid-cols-1 gap-10 border-b border-white/10 py-12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-12 lg:py-16">
          {/* Explore */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
              Explore
            </h3>

            <ul className="mt-6 space-y-4">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors duration-200 hover:text-brand-green-light focus-visible:text-brand-green-light"
                  >
                    <span
                      aria-hidden="true"
                      className="text-brand-green-light opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      →
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
              Our Programmes
            </h3>

            <ul className="mt-6 space-y-4">
              {programmes.map((programme) => (
                <li key={programme}>
                  <Link
                    href="/#services"
                    className="text-sm leading-6 text-white/65 transition-colors duration-200 hover:text-brand-green-light"
                  >
                    {programme}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
              Contact Us
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <p className="text-xs font-medium text-white/40">Visit us</p>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Mathare
                  <br />
                  Nairobi, Kenya
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-white/40">Telephone</p>
                <p className="mt-2 text-sm text-white/65">
                  Contact details coming soon
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-white/40">Email</p>
                <p className="mt-2 text-sm text-white/65">
                  Email address coming soon
                </p>
              </div>

              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-green-light transition-colors hover:text-white"
              >
                Send us an enquiry
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Partnerships */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
              Work With Us
            </h3>

            <p className="mt-6 text-sm leading-7 text-white/60">
              Lasting mental health impact grows through meaningful
              partnerships and shared commitment.
            </p>

            <ul className="mt-5 space-y-3">
              {partnershipAreas.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-white/65"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green-light" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/#contact"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-green-light transition-colors hover:text-white"
            >
              Explore partnerships
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </section>

        {/* Core values */}
        <section className="border-b border-white/10 py-8 sm:py-10">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-8">
            {values.map((value, index) => (
              <div key={value} className="flex items-center gap-5 sm:gap-8">
                <span className="text-xs font-semibold tracking-wide text-white/55 sm:text-sm">
                  {value}
                </span>

                {index < values.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-brand-green-light/70"
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Brand statement */}
        <section className="py-10 text-center sm:py-12">
          <p className="text-[10px] font-bold uppercase leading-6 tracking-[0.18em] text-brand-green-light sm:text-xs sm:tracking-[0.22em]">
            Healing Minds. Restoring Hope. Empowering Communities.
          </p>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-white/50">
            Together, we can build communities where mental wellbeing is
            understood, supported, and valued.
          </p>

          <div className="mt-6 flex justify-center gap-2" aria-hidden="true">
            <span className="h-1 w-7 rounded-full bg-brand-blue-light" />
            <span className="h-1 w-7 rounded-full bg-brand-purple-light" />
            <span className="h-1 w-7 rounded-full bg-brand-green-light" />
          </div>
        </section>

        {/* Legal bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-white/45">
            © {new Date().getFullYear()} Real Time Psychosupport CBO. All
            rights reserved.
          </p>

          <p className="text-xs text-white/35">
            Built on compassion. Guided by community.
          </p>
        </div>
      </div>
    </footer>
  );
}
