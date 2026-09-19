import Image from "next/image";
import Link from "next/link";

const programs = [
  "Community Counselling",
  "Youth Mentorship",
  "School Mental Health",
  "Humanitarian Psychosocial Support",
  "Workplace Wellness",
];

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Programmes", href: "#programs" },
  { label: "Our Impact", href: "#impact" },
  { label: "Partnerships", href: "#partners" },
  { label: "Looking Ahead", href: "#looking-ahead" },
  { label: "Contact Us", href: "#contact" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
  },
  {
    label: "Instagram",
    href: "#",
  },
  {
    label: "LinkedIn",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-blue text-white">

      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/[0.06]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 h-[300px] w-[300px] rounded-full border border-white/[0.06]"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-56 -left-40 h-[500px] w-[500px] rounded-full border border-white/[0.05]"
      />

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid gap-12 border-b border-white/10 py-16 sm:py-20 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr] lg:gap-10">

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="max-w-sm">

            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="Real Time Psychosupport home"
            >
              <Image
                src="/realtime-logo.jpeg"
                alt="Real Time Psychosupport CBO"
                width={180}
                height={70}
                className="h-auto w-[170px] rounded-lg object-contain"
              />
            </Link>

            <p className="mt-7 text-xl font-semibold leading-relaxed text-white">
              Where expertise meets{" "}
              <span className="text-brand-green-light">
                compassion.
              </span>
            </p>

            <p className="mt-5 text-sm leading-7 text-white/55">
              Real Time Psychosupport CBO is a grassroots, community-driven
              organization working to make quality mental health and
              psychosocial support accessible to vulnerable communities.
            </p>

            {/* Social links */}

            <div className="mt-7 flex gap-2">

              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 items-center rounded-full border border-white/10 bg-white/5 px-4 text-xs font-semibold text-white/65 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  {social.label}
                </a>
              ))}

            </div>

          </div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div>

            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Explore
            </h3>

            <ul className="mt-6 space-y-3">

              {quickLinks.map((link) => (
                <li key={link.label}>

                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <span className="mr-0 w-0 overflow-hidden text-brand-green-light transition-all duration-300 group-hover:mr-2 group-hover:w-3">
                      →
                    </span>

                    {link.label}
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* =================================================
              PROGRAMMES
          ================================================= */}

          <div>

            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Our Programmes
            </h3>

            <ul className="mt-6 space-y-3">

              {programs.map((program) => (
                <li
                  key={program}
                  className="text-sm leading-6 text-white/60"
                >
                  {program}
                </li>
              ))}

            </ul>

          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div>

            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div>

                <p className="text-xs font-semibold uppercase tracking-wider text-white/35">
                  Location
                </p>

                <p className="mt-1 text-sm text-white/70">
                  Mathare, Nairobi, Kenya
                </p>

              </div>

              <div>

                <p className="text-xs font-semibold uppercase tracking-wider text-white/35">
                  Telephone
                </p>

                <p className="mt-1 text-sm text-white/70">
                  Coming Soon
                </p>

              </div>

              <div>

                <p className="text-xs font-semibold uppercase tracking-wider text-white/35">
                  Email
                </p>

                <p className="mt-1 text-sm text-white/70">
                  Coming Soon
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            PARTNERSHIP STRIP
        ===================================================== */}

        <div className="border-b border-white/10 py-8">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-sm font-semibold text-white">
                Interested in partnering with us?
              </p>

              <p className="mt-1 text-xs leading-5 text-white/45">
                Let's work together to strengthen mental health and community
                resilience.
              </p>

            </div>

            <Link
              href="#contact"
              className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-brand-green px-6 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-brand-blue hover:shadow-lg"
            >
              Start a Conversation
              <span className="ml-2">→</span>
            </Link>

          </div>

        </div>

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Real Time Psychosupport CBO. All
            rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">

            <Link
              href="#"
              className="text-xs text-white/40 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-xs text-white/40 transition-colors hover:text-white"
            >
              Safeguarding
            </Link>

            <Link
              href="#"
              className="text-xs text-white/40 transition-colors hover:text-white"
            >
              Accessibility
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}