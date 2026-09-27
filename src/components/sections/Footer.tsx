import Image from "next/image";
import Link from "next/link";

const exploreLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Our Approach", href: "#approach" },
  { label: "Our Work", href: "#gallery" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "Looking Ahead", href: "#looking-ahead" },
];

const programmes = [
  "Community Counselling",
  "Youth Mentorship",
  "School Mental Health",
  "Humanitarian Psychosocial Support",
  "Workplace Wellness",
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    short: "f",
  },
  {
    label: "Instagram",
    href: "#",
    short: "ig",
  },
  {
    label: "LinkedIn",
    href: "#",
    short: "in",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-blue text-white">
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        aria-hidden="true"
        className="absolute -right-60 -top-60 h-[700px] w-[700px] rounded-full border border-white/[0.05]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full border border-white/[0.05]"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-72 -left-56 h-[650px] w-[650px] rounded-full border border-white/[0.04]"
      />

      <div
        aria-hidden="true"
        className="absolute left-1/3 top-1/2 h-72 w-72 rounded-full bg-brand-purple/10 blur-3xl"
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            PREMIUM CTA / CLOSING STATEMENT
        ===================================================== */}

        <div className="border-b border-white/10 py-20 sm:py-24 lg:py-28">
          <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_0.6fr]">
            {/* Main statement */}

            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-brand-green-light" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green-light">
                  Stay Connected
                </span>
              </div>

              <h2 className="mt-7 max-w-5xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
                Mental health is not a destination.
                <span className="block text-brand-green-light">
                  It is a journey we take together.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
                Real Time Psychosupport works alongside individuals, families,
                schools, organizations, and communities to create pathways
                toward healing, resilience, and hope.
              </p>
            </div>

            {/* CTA */}

            <div className="lg:pb-2 lg:text-right">
              <p className="text-sm leading-6 text-white/45">
                Have a question, need support, or want to work with us?
              </p>

              <Link
                href="#contact"
                className="group mt-5 inline-flex h-13 items-center justify-center rounded-full bg-brand-green px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-brand-blue hover:shadow-2xl"
              >
                Start a Conversation

                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            BRAND + IMAGE
        ===================================================== */}

        <div className="border-b border-white/10 py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Brand */}

            <div>
              <Link
                href="/"
                aria-label="Real Time Psychosupport home"
                className="inline-flex"
              >
                <Image
                  src="/realtime-logo.jpeg"
                  alt="Real Time Psychosupport CBO"
                  width={200}
                  height={80}
                  className="h-auto w-[180px] rounded-xl object-contain"
                />
              </Link>

              <p className="mt-7 max-w-lg text-2xl font-semibold leading-relaxed text-white">
                Where expertise meets{" "}
                <span className="text-brand-green-light">
                  compassion.
                </span>
              </p>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/45">
                Real Time Psychosupport CBO is a grassroots, community-driven
                organization committed to expanding access to quality mental
                health and psychosocial support.
              </p>

              {/* Social */}

              <div className="mt-7 flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green-light/50 hover:bg-brand-green hover:text-white"
                  >
                    {social.short}
                  </a>
                ))}
              </div>
            </div>

            {/* Image */}

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
              <div className="relative h-72 sm:h-80">
                <Image
                  src="/Images/IMG-6.jpg"
                  alt="Real Time Psychosupport community engagement"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-brand-blue/35" />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-7">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green-light">
                    Rooted in Community
                  </span>

                  <p className="mt-2 max-w-sm text-xl font-bold leading-snug text-white">
                    Healing happens through people, relationships, and
                    community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            NAVIGATION GRID
        ===================================================== */}

        <div className="grid gap-12 border-b border-white/10 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-[1fr_0.8fr_0.9fr_1fr]">
          {/* Explore */}

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-white/35">
              Explore
            </h3>

            <ul className="mt-6 space-y-3.5">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-white/55 transition-colors duration-300 hover:text-white"
                  >
                    <span className="mr-0 w-0 overflow-hidden text-brand-green-light transition-all duration-300 group-hover:mr-2 group-hover:w-4">
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
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-white/35">
              Programmes
            </h3>

            <ul className="mt-6 space-y-3.5">
              {programmes.map((programme) => (
                <li key={programme}>
                  <Link
                    href="#services"
                    className="text-sm leading-6 text-white/55 transition-colors duration-300 hover:text-white"
                  >
                    {programme}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-white/35">
              Contact
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">
                  Location
                </p>

                <p className="mt-2 text-sm leading-6 text-white/65">
                  Mathare
                  <br />
                  Nairobi, Kenya
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">
                  Telephone
                </p>

                <p className="mt-2 text-sm text-white/65">
                  Coming Soon
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">
                  Email
                </p>

                <p className="mt-2 text-sm text-white/65">
                  Coming Soon
                </p>
              </div>
            </div>
          </div>

          {/* Partnership */}

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-white/35">
              Partnerships
            </h3>

            <p className="mt-6 text-sm leading-7 text-white/45">
              We believe lasting mental health impact is built through
              collaboration.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Community Organizations",
                "Schools & Institutions",
                "Healthcare Partners",
                "Development Partners",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/55"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />

                  {item}
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className="group mt-7 inline-flex items-center text-sm font-bold text-brand-green-light"
            >
              Explore partnerships

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* =====================================================
            BRAND VALUES
        ===================================================== */}

        <div className="border-b border-white/10 py-10">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center">
            {[
              "Compassion",
              "Dignity",
              "Resilience",
              "Community",
              "Hope",
            ].map((value, index) => (
              <div
                key={value}
                className="flex items-center gap-8"
              >
                <span className="text-sm font-semibold tracking-wide text-white/40">
                  {value}
                </span>

                {index < 4 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-1 w-1 rounded-full bg-brand-green sm:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            FINAL BRAND STATEMENT
        ===================================================== */}

        <div className="py-12 text-center sm:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green-light">
            Healing Minds. Restoring Hope. Empowering Communities.
          </p>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/35">
            Together, we can create communities where mental wellbeing is
            understood, supported, and valued.
          </p>

          <div className="mx-auto mt-7 flex items-center justify-center gap-2">
            <span className="h-1 w-8 rounded-full bg-brand-blue-light" />
            <span className="h-1 w-8 rounded-full bg-brand-purple-light" />
            <span className="h-1 w-8 rounded-full bg-brand-green-light" />
          </div>
        </div>

        {/* =====================================================
            LEGAL BAR
        ===================================================== */}

        <div className="flex flex-col gap-5 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Real Time Psychosupport CBO. All
            rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="#"
              className="text-xs text-white/30 transition-colors hover:text-white/70"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-xs text-white/30 transition-colors hover:text-white/70"
            >
              Safeguarding
            </Link>

            <Link
              href="#"
              className="text-xs text-white/30 transition-colors hover:text-white/70"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}