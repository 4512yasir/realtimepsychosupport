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

          {/* Eyebrow */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue-light px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-brand-green" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue-dark">
              Where Expertise Meets Compassion
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-6xl xl:text-7xl">
            Healing Minds.

            <span className="block text-brand-blue">
              Restoring Hope.
            </span>

            <span className="block text-brand-purple">
              Empowering Communities.
            </span>
          </h1>

          {/* Description */}
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

            {/* Community Care */}
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green-light text-brand-green">
                ✓
              </span>

              Community-centered care
            </div>

            {/* Evidence-informed */}
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
              MAIN VISUAL CARD
          ===================================================== */}

          <div className="relative aspect-[4/4.5] overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-brand-blue/10">

            {/* Brand gradient */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-purple to-brand-green"
            />

            {/* Soft overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-white/85"
            />

            {/* Purple decoration */}
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-purple/30 blur-2xl"
            />

            {/* Green decoration */}
            <div
              aria-hidden="true"
              className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-brand-green/30 blur-2xl"
            />

            {/* Inner content */}
            <div className="relative flex h-full flex-col p-7 sm:p-9">

              {/* =================================================
                  TOP
              ================================================= */}

              <div className="flex items-start justify-between">

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
                    Our Commitment
                  </p>

                  <p className="mt-2 max-w-xs text-lg font-bold leading-7 text-text-primary">
                    Mental health is a human right.
                  </p>
                </div>

                {/* Brand dots */}
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-brand-blue" />
                  <span className="h-3 w-3 rounded-full bg-brand-purple" />
                  <span className="h-3 w-3 rounded-full bg-brand-green" />
                </div>

              </div>

              {/* =================================================
                  CENTRAL VISUAL
              ================================================= */}

              <div className="relative my-auto flex items-center justify-center py-10">

                {/* Blue glow */}
                <div
                  aria-hidden="true"
                  className="absolute h-64 w-64 rounded-full bg-brand-blue/20 blur-3xl"
                />

                {/* Purple glow */}
                <div
                  aria-hidden="true"
                  className="absolute -right-4 h-48 w-48 rounded-full bg-brand-purple/20 blur-3xl"
                />

                {/* Green glow */}
                <div
                  aria-hidden="true"
                  className="absolute -left-4 h-48 w-48 rounded-full bg-brand-green/20 blur-3xl"
                />

                {/* Main circle */}
                <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-white/80 bg-white/80 shadow-2xl backdrop-blur-md">

                  {/* Blue ring */}
                  <div className="absolute inset-5 rounded-full border-[10px] border-brand-blue/20" />

                  {/* Purple ring */}
                  <div className="absolute inset-9 rounded-full border-[10px] border-brand-purple/30" />

                  {/* Gradient center */}
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue via-brand-purple to-brand-green shadow-xl">

                    <div className="h-10 w-10 rounded-full bg-white/90" />

                  </div>

                  {/* Blue floating circle */}
                  <span className="absolute -right-2 top-14 h-9 w-9 rounded-full bg-brand-blue shadow-lg" />

                  {/* Purple floating circle */}
                  <span className="absolute -left-2 bottom-14 h-11 w-11 rounded-full bg-brand-purple shadow-lg" />

                  {/* Green floating circle */}
                  <span className="absolute bottom-2 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-brand-green shadow-lg" />

                </div>
              </div>

              {/* =================================================
                  BOTTOM MESSAGE
              ================================================= */}

              <div className="rounded-2xl border border-white/80 bg-white/80 p-5 backdrop-blur-md">

                <p className="text-sm leading-6 text-text-secondary">
                  Restoring dignity, strengthening resilience, and creating
                  pathways to healthier communities.
                </p>

                {/* Three-color brand line */}
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

        </div>
      </div>
    </section>
  );
}