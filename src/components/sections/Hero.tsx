
import Image from "next/image";
import Link from "next/link";

const impactStats = [
  {
    value: "1,000+",
    label: "Community members reached",
    accent: "text-brand-blue",
  },
  {
    value: "6+",
    label: "Active programmes",
    accent: "text-brand-purple",
  },
  {
    value: "5",
    label: "Counties reached",
    accent: "text-brand-green-dark",
  },
];

const commitments = [
  "Community-centred care",
  "Evidence-informed support",
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#FCFCFE]">
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand-blue-light/70 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-40 -z-10 h-[500px] w-[500px] rounded-full bg-brand-purple-light/60 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-brand-green-light/40 blur-[100px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:min-h-[780px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-10 lg:py-20">
        {/* Left: Main message */}
        <div className="relative z-10">
          {/* Organisation identity */}
          <div className="flex items-center gap-4">
            <div className="h-11 w-1 rounded-full bg-brand-green" />

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue sm:text-sm">
                Real Time Psychosupport CBO
              </p>
              <p className="mt-1.5 text-xs font-medium tracking-wide text-text-muted sm:text-sm">
                Where Expertise Meets Compassion
              </p>
            </div>
          </div>

          {/* Headline */}
          <h1 className="mt-9 max-w-3xl text-[2.8rem] font-semibold leading-[1.06] tracking-[-0.045em] text-text-primary sm:text-6xl lg:mt-11 lg:text-[4.5rem] xl:text-[5rem]">
            Healing Minds.
            <span className="mt-2 block text-brand-blue">
              Restoring Hope.
            </span>
            <span className="mt-2 block text-brand-purple">
              Empowering Communities.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-8 text-text-secondary sm:mt-8 sm:text-lg sm:leading-9">
            We provide accessible, affordable, and compassionate mental
            health and psychosocial support for individuals, families,
            and communities — helping people heal, build resilience,
            and thrive.
          </p>

          {/* Primary actions */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
            <Link
              href="/#contact"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-brand-blue px-7 py-4 text-sm font-bold text-white shadow-lg shadow-brand-blue/15 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
            >
              Get Support
              <span
                aria-hidden="true"
                className="text-lg transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            <Link
              href="/#partnerships"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-border bg-white/80 px-7 py-4 text-sm font-bold text-text-primary transition duration-300 hover:-translate-y-0.5 hover:border-brand-purple/40 hover:bg-brand-purple-light/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
            >
              Partner With Us
              <span aria-hidden="true" className="text-brand-purple">
                ↗
              </span>
            </Link>
          </div>

          {/* Care principles */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {commitments.map((commitment) => (
              <div key={commitment} className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-xs font-bold text-brand-green-dark">
                  ✓
                </span>
                <span className="text-xs font-medium text-text-secondary sm:text-sm">
                  {commitment}
                </span>
              </div>
            ))}
          </div>

          {/* Impact summary */}
          <div className="mt-10 border-t border-border/80 pt-7 sm:mt-12 sm:pt-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-text-muted sm:text-xs">
                Our Impact
              </p>

              <Link
                href="/#impact"
                className="group inline-flex items-center gap-2 text-xs font-bold text-brand-blue transition-colors hover:text-brand-purple sm:text-sm"
              >
                Explore our work
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-5">
              {impactStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={
                    index === 0
                      ? "min-w-0"
                      : "min-w-0 border-l border-border pl-3 sm:pl-5"
                  }
                >
                  <p
                    className={`text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl ${stat.accent}`}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-2 max-w-32 text-[11px] leading-5 text-text-secondary sm:text-xs sm:leading-6">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Photography and brand story */}
        <div className="relative mx-auto w-full max-w-[540px] lg:ml-auto">
          {/* Outer frame */}
          <div
            aria-hidden="true"
            className="absolute -inset-3 -z-10 rounded-[2rem] border border-brand-blue/10 sm:-inset-5 sm:rounded-[2.5rem]"
          />

          {/* Main photograph */}
          <div className="group relative aspect-[4/4.7] overflow-hidden rounded-[1.5rem] bg-brand-blue-light shadow-2xl shadow-brand-blue/10 sm:rounded-[2rem]">
            <Image
              src="/images/IMG-1.jpg"
              alt="Real Time Psychosupport community mental health work"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            />

            {/* Photo treatment */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-brand-blue/20 via-transparent to-brand-blue/80"
            />

            {/* Top label */}
            <div className="absolute left-4 right-4 top-4 sm:left-6 sm:right-6 sm:top-6">
              <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-white/50 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md sm:px-5">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-green" />
                <span className="truncate text-[10px] font-bold uppercase tracking-[0.14em] text-brand-blue sm:text-xs sm:tracking-[0.18em]">
                  Mental Health & Wellbeing
                </span>
              </div>
            </div>

            {/* Bottom photo caption */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-green-light sm:text-xs">
                Our commitment
              </p>

              <h2 className="mt-3 max-w-md text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                Every person deserves to be heard, supported, and valued.
              </h2>

              <div className="mt-5 flex gap-1.5" aria-hidden="true">
                <span className="h-1 w-9 rounded-full bg-brand-blue-light" />
                <span className="h-1 w-9 rounded-full bg-brand-purple-light" />
                <span className="h-1 w-9 rounded-full bg-brand-green-light" />
              </div>
            </div>
          </div>

          {/* Floating approach card */}
          <div className="relative mx-3 -mt-5 rounded-2xl border border-white/80 bg-white/95 p-5 shadow-xl shadow-brand-blue/10 backdrop-blur-md sm:absolute sm:-bottom-7 sm:-left-10 sm:mx-0 sm:mt-0 sm:max-w-[255px] sm:p-5 lg:-left-12">
            <div className="flex items-start gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-purple-light text-xl text-brand-purple">
                <span aria-hidden="true">♡</span>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-purple">
                  Our Approach
                </p>
                <p className="mt-1.5 text-sm font-semibold leading-6 text-text-primary">
                  Compassionate care. Stronger communities.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative accent */}
          <div
            aria-hidden="true"
            className="absolute -right-3 top-1/4 -z-10 hidden h-16 w-16 rounded-2xl bg-brand-green shadow-lg shadow-brand-green/20 sm:block lg:-right-5"
          />
        </div>
      </div>

      {/* Closing brand strip */}
      <div className="mx-auto max-w-7xl px-5 pb-7 sm:px-8 lg:px-10 lg:pb-9">
        <div className="flex items-center gap-4">
          <span className="h-px flex-1 bg-brand-blue/10" />
          <p className="text-center text-[9px] font-bold uppercase tracking-[0.2em] text-text-muted sm:text-[10px] sm:tracking-[0.25em]">
            Healing <span className="px-1 text-brand-blue">•</span> Hope{" "}
            <span className="px-1 text-brand-purple">•</span> Community
          </p>
          <span className="h-px flex-1 bg-brand-purple/10" />
        </div>
      </div>
    </section>
  );
}
