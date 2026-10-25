
import Image from "next/image";
import Link from "next/link";

const supportOptions = [
  {
    number: "01",
    title: "Financial Support",
    description:
      "Help expand access to counselling, psychosocial support, and community mental health programmes.",
    detail: "Fund meaningful change",
  },
  {
    number: "02",
    title: "Donate Resources",
    description:
      "Contribute essential materials, equipment, and resources that strengthen our community initiatives.",
    detail: "Give what you can",
  },
  {
    number: "03",
    title: "Volunteer With Us",
    description:
      "Share your skills, experience, and time to help create more supportive and resilient communities.",
    detail: "Share your expertise",
  },
  {
    number: "04",
    title: "Strategic Partnerships",
    description:
      "Work alongside our team to develop initiatives that make mental health support more accessible.",
    detail: "Create lasting impact",
  },
];

export default function Support() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Premium Hero */}
      <section className="relative isolate bg-brand-blue text-white">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-blue via-brand-blue to-[#30275E]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 md:grid-cols-2 lg:gap-20 lg:py-32">
          <div>
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-brand-green-light">
              <span className="h-px w-8 bg-brand-green-light" />
              Make a difference
            </span>

            <h1 className="mt-7 max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Your support can change{" "}
              <span className="text-brand-green-light">
                someone&apos;s story.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-white/75 sm:text-lg">
              Every contribution helps Real Time Psychosupport bring
              compassion, emotional wellbeing, and psychosocial support
              closer to the people and communities who need it.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#ways-to-support"
                className="inline-flex items-center gap-3 rounded-full bg-brand-green-light px-7 py-3.5 text-sm font-bold text-brand-blue transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Explore ways to help
                <span aria-hidden="true">↗</span>
              </a>

              <Link
                href="/#contact"
                className="inline-flex items-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-white hover:bg-white/10"
              >
                Talk to our team
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-4 border-t border-white/15 pt-6">
              <div className="flex -space-x-2" aria-hidden="true">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-brand-blue bg-brand-green-light text-xs font-bold text-brand-blue">
                  C
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-brand-blue bg-brand-purple-light text-xs font-bold text-brand-blue">
                  H
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-brand-blue bg-white text-xs font-bold text-brand-blue">
                  C
                </span>
              </div>
              <p className="max-w-xs text-xs leading-5 text-white/65">
                Compassion in action. Stronger people. Healthier communities.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] border border-white/10" />

            <div className="relative h-[360px] overflow-hidden rounded-[1.5rem] sm:h-[460px]">
              <Image
                src="/images/IMG-3.jpg"
                alt="Community engagement and psychosocial support"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/75 via-transparent to-transparent" />

              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-brand-blue/75 p-5 backdrop-blur-md sm:inset-x-7 sm:bottom-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green-light">
                  Our purpose
                </p>
                <p className="mt-2 text-xl font-semibold leading-snug sm:text-2xl">
                  Healing Minds. Restoring Hope. Empowering Communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-purple">
              Why your support matters
            </p>
            <h2 className="mt-5 max-w-md text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
              A little support can make room for hope.
            </h2>
          </div>

          <div className="md:pt-8">
            <p className="text-base leading-8 text-text-secondary sm:text-lg">
              Access to mental health and psychosocial support can make a
              meaningful difference in people&apos;s lives. By supporting our
              work, you help us strengthen community initiatives, encourage
              resilience, and create spaces where people feel heard and
              supported.
            </p>
            <p className="mt-5 text-base leading-8 text-text-secondary">
              Whether you give, volunteer, or collaborate with us, your
              contribution can become part of a wider effort to build
              healthier communities.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Support */}
      <section
        id="ways-to-support"
        className="bg-[#F7F8FC] px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-purple">
                Get involved
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
                Make your contribution count.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-text-secondary">
              Find a way to contribute that matches your resources, skills,
              or organisation&apos;s mission.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {supportOptions.map((option) => (
              <article
                key={option.number}
                className="group flex flex-col rounded-2xl border border-[#E8EAF1] bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-brand-purple/30 hover:shadow-[0_20px_50px_rgba(35,42,80,0.08)] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue text-sm font-bold text-white transition duration-300 group-hover:bg-brand-purple">
                    {option.number}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-xl text-brand-purple/60 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    ↗
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-text-primary">
                  {option.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-text-secondary">
                  {option.description}
                </p>

                <div className="mt-7 border-t border-border pt-5">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue transition-colors hover:text-brand-purple"
                  >
                    {option.detail}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Her Rise Feature */}
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[1.75rem] bg-brand-blue md:grid-cols-2">
          <div className="relative min-h-[320px] sm:min-h-[420px]">
            <Image
              src="/images/IMG-3.jpg"
              alt="Community empowerment and support for young mothers"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/45 to-transparent md:bg-gradient-to-r" />
          </div>

          <div className="flex flex-col justify-center px-7 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-green-light">
              Featured programme
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Support Her Rise.
            </h2>

            <p className="mt-6 leading-8 text-white/75">
              Her Rise supports young mothers in Mathare through safe spaces,
              emotional wellbeing activities, peer support, GBV awareness,
              and resilience-building.
            </p>

            <p className="mt-4 leading-8 text-white/75">
              Your support or partnership can help strengthen the programme
              and the support available to young mothers.
            </p>

            <div className="mt-8">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-brand-blue transition duration-300 hover:bg-brand-green-light"
              >
                Partner with Her Rise
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto max-w-5xl rounded-[1.75rem] border border-[#E8EAF1] px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-purple">
            Be part of the change
          </p>

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Together, we can build a more compassionate world.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-text-secondary">
            Let&apos;s explore how you, your business, or your organisation
            can support the mission of Real Time Psychosupport.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-blue px-8 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-purple"
          >
            Start a conversation
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
