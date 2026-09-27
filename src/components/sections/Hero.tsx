import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* =========================================================
          BACKGROUND DECORATIONS
      ========================================================= */}

      {/* Oceanic Blue */}
      <div
        aria-hidden="true"
        className="absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-brand-blue-light blur-3xl"
      />

      {/* Purple */}
      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-brand-purple-light blur-3xl"
      />

      {/* Green */}
      <div
        aria-hidden="true"
        className="absolute right-1/3 top-1/4 -z-10 h-40 w-40 rounded-full bg-brand-green-light blur-3xl"
      />

      {/* =========================================================
          HERO CONTAINER
      ========================================================= */}

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">

        {/* =======================================================
            LEFT CONTENT
        ======================================================= */}

        <div className="max-w-3xl">

          {/* Organization identity */}

          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-blue">
              Real Time Psychosupport CBO
            </p>

            <div className="mt-3 flex items-center gap-3">
              <span className="h-px w-10 bg-brand-green" />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
                Where Expertise Meets Compassion
              </span>
            </div>
          </div>

          {/* =====================================================
              MAIN HEADING
          ===================================================== */}

          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-6xl xl:text-7xl">
            Healing Minds.

            <span className="block text-brand-blue">
              Restoring Hope.
            </span>

            <span className="block text-brand-purple">
              Empowering Communities.
            </span>
          </h1>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}

          <p className="mt-7 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
            We provide accessible, affordable, and compassionate mental health
            and psychosocial support for individuals, families, and communities
            — helping people heal, build resilience, and thrive.
          </p>

          {/* =====================================================
              CTA BUTTONS
          ===================================================== */}

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">

            {/* Primary CTA */}

            <Link
              href="#contact"
              className="inline-flex h-13 items-center justify-center rounded-full bg-brand-blue px-7 text-sm font-bold text-white shadow-lg shadow-brand-blue/15 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-blue-dark hover:shadow-xl"
            >
              Get Support

              <span className="ml-2 text-base">
                →
              </span>
            </Link>

            {/* Secondary CTA */}

            <Link
              href="#partnerships"
              className="inline-flex h-13 items-center justify-center rounded-full border border-border bg-white px-7 text-sm font-bold text-text-primary transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple/30 hover:bg-brand-purple-light"
            >
              Partner With Us
            </Link>

          </div>

          {/* =====================================================
              TRUST INDICATORS
          ===================================================== */}

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-text-muted">

            {/* Community */}

            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green-light text-brand-green">
                ✓
              </span>

              Community-centered care
            </div>

            {/* Evidence */}

            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-purple-light text-brand-purple">
                ✓
              </span>

              Evidence-informed support
            </div>

          </div>
        </div>

        {/* =======================================================
            RIGHT VISUAL
        ======================================================= */}

        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">

          {/* =====================================================
              PHOTO CARD
          ===================================================== */}

          <div className="relative aspect-[4/4.5] overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-brand-blue/10">

            {/* =================================================
                PHOTO
            ================================================= */}

            <Image
              src="/Images/IMG-1.jpg"
              alt="Real Time Psychosupport community mental health work"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />

            {/* =================================================
                BRAND OVERLAY
            ================================================= */}

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-brand-blue/35 via-transparent to-brand-purple/35"
            />

            {/* =================================================
                SOFT GREEN GLOW
            ================================================= */}

            <div
              aria-hidden="true"
              className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-green/30 blur-3xl"
            />

            {/* =================================================
                TOP BRAND LABEL
            ================================================= */}

            <div className="absolute left-6 top-6 rounded-2xl border border-white/40 bg-white/90 px-5 py-3 shadow-lg backdrop-blur-md sm:left-8 sm:top-8">

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue">
                Real Time Psychosupport
              </p>

              <p className="mt-1 text-sm font-semibold text-text-primary">
                Community Mental Health
              </p>

            </div>

            {/* =================================================
                BOTTOM INFORMATION CARD
            ================================================= */}

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">

              <div className="rounded-2xl border border-white/50 bg-white/90 p-5 shadow-xl backdrop-blur-md">

                <div className="flex items-start justify-between gap-5">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-purple">
                      Our Commitment
                    </p>

                    <p className="mt-2 text-lg font-bold leading-6 text-text-primary">
                      Mental health is a human right.
                    </p>
                  </div>

                  {/* Brand dots */}

                  <div className="flex gap-1.5 pt-1">
                    <span className="h-3 w-3 rounded-full bg-brand-blue" />
                    <span className="h-3 w-3 rounded-full bg-brand-purple" />
                    <span className="h-3 w-3 rounded-full bg-brand-green" />
                  </div>

                </div>

                {/* Brand line */}

                <div className="mt-4 flex h-1.5 overflow-hidden rounded-full">
                  <span className="w-1/3 bg-brand-blue" />
                  <span className="w-1/3 bg-brand-purple" />
                  <span className="w-1/3 bg-brand-green" />
                </div>

              </div>

            </div>
          </div>

          {/* =====================================================
              FLOATING APPROACH CARD
          ===================================================== */}

          <div className="absolute -bottom-5 -left-3 hidden max-w-[230px] rounded-2xl border border-white bg-white p-4 shadow-xl sm:block lg:-left-8">

            <p className="text-xs font-bold uppercase tracking-wider text-brand-purple">
              Our Approach
            </p>

            <p className="mt-1 text-sm font-semibold leading-5 text-text-primary">
              Compassionate care. Community resilience.
            </p>

          </div>

          {/* =====================================================
              FLOATING BRAND ACCENT
          ===================================================== */}

          <div
            aria-hidden="true"
            className="absolute -right-4 top-16 hidden h-16 w-16 rounded-2xl bg-brand-green shadow-xl shadow-brand-green/20 sm:block"
          />

        </div>
      </div>

      {/* =========================================================
          BOTTOM BRAND STRIP
      ========================================================= */}

      <div className="mx-auto max-w-7xl px-5 pb-8 sm:px-8 lg:px-10">

        <div className="flex items-center gap-4">

          <span className="h-px flex-1 bg-brand-blue/10" />

          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-text-muted">
            Healing • Hope • Community
          </span>

          <span className="h-px flex-1 bg-brand-purple/10" />

        </div>

      </div>
    </section>
  );
}