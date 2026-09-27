const contactDetails = [
  {
    label: "Visit Us",
    value: "Mathare, Nairobi, Kenya",
    description:
      "Our community-based work is rooted in Mathare and the communities we serve.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle
          cx="12"
          cy="10"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    ),
  },
  {
    label: "Call Us",
    value: "Telephone: Coming Soon",
    description:
      "Reach out to our team for enquiries, support, programmes, and collaboration.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          d="M6.5 3.5h3l1.5 4-2 1.5a15 15 0 0 0 6 6l1.5-2 4 1.5v3c0 1.1-.9 2-2 2C10.5 19.5 4.5 13.5 4.5 6.5c0-1.1.9-2 2-3Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Email Us",
    value: "Email: Coming Soon",
    description:
      "For partnerships, programmes, referrals, and general enquiries.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="m4 7 8 6 8-6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const socials = [
  {
    name: "Facebook",
    href: "#",
  },
  {
    name: "Instagram",
    href: "#",
  },
  {
    name: "LinkedIn",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-surface py-24 sm:py-28 lg:py-36"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        aria-hidden="true"
        className="absolute -left-52 top-20 h-[500px] w-[500px] rounded-full bg-brand-blue-light/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-52 bottom-0 h-[500px] w-[500px] rounded-full bg-brand-green-light/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-1 w-10 rounded-full bg-brand-green" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-green-dark">
              Get In Touch
            </span>

            <span className="h-1 w-10 rounded-full bg-brand-green" />
          </div>

          <h2 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl">
            Let&apos;s create{" "}
            <span className="text-brand-purple">
              healthier communities
            </span>{" "}
            together.
          </h2>

          <p className="mt-6 text-base leading-8 text-text-secondary sm:text-lg">
            Whether you need mental health support, want to partner with us,
            or simply want to learn more about our work, our team would love
            to hear from you.
          </p>
        </div>

        {/* =====================================================
            MAIN CONTACT CARD
        ===================================================== */}

        <div className="mt-14 overflow-hidden rounded-[2.5rem] border border-border bg-white shadow-xl">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* =================================================
                LEFT / CONTACT INFORMATION
            ================================================= */}

            <div className="relative overflow-hidden bg-brand-blue p-8 sm:p-10 lg:p-14">
              {/* Decorative circles */}

              <div
                aria-hidden="true"
                className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/10"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-white/10"
              />

              {/* Community image */}

              <div className="relative mb-10 overflow-hidden rounded-[1.5rem] border border-white/10">
                <div className="relative h-56 sm:h-64">
                  <img
                    src="/images/IMG-7.jpg"
                    alt="Real Time Psychosupport engaging with the community"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-brand-blue/40" />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                      Community • Care • Connection
                    </p>

                    <p className="mt-2 text-lg font-bold text-white">
                      Support starts with reaching out.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                  Contact Real Time Psychosupport
                </span>

                <h3 className="mt-6 text-3xl font-bold leading-tight text-white">
                  Where expertise meets compassion.
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/70">
                  We believe reaching out for support should be simple,
                  respectful, and accessible.
                </p>

                {/* Contact details */}

                <div className="mt-10 space-y-6">
                  {contactDetails.map((item) => (
                    <div
                      key={item.label}
                      className="flex gap-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-green-light">
                        {item.icon}
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                          {item.label}
                        </p>

                        <p className="mt-1 text-sm font-semibold text-white">
                          {item.value}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-white/50">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social links */}

                <div className="mt-10 border-t border-white/10 pt-7">
                  <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                    Connect with us
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        aria-label={social.name}
                        className="flex h-10 items-center rounded-full border border-white/10 bg-white/5 px-4 text-xs font-semibold text-white/70 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT / FORM
            ================================================= */}

            <div className="p-8 sm:p-10 lg:p-14">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-purple">
                  Send Us a Message
                </span>

                <h3 className="mt-4 text-2xl font-bold text-text-primary">
                  Start a conversation.
                </h3>

                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  Tell us a little about how we can help or how you would
                  like to collaborate.
                </p>
              </div>

              <form
                className="mt-8 space-y-5"
                method="POST"
                action="#"
              >
                {/* Name + Email */}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-text-primary"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="mt-2 h-12 w-full rounded-xl border border-border bg-surface px-4 text-sm text-text-primary outline-none transition-all placeholder:text-text-muted focus:border-brand-blue focus:ring-4 focus:ring-brand-blue-light"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-text-primary"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="mt-2 h-12 w-full rounded-xl border border-border bg-surface px-4 text-sm text-text-primary outline-none transition-all placeholder:text-text-muted focus:border-brand-blue focus:ring-4 focus:ring-brand-blue-light"
                    />
                  </div>
                </div>

                {/* Organization */}

                <div>
                  <label
                    htmlFor="organization"
                    className="text-sm font-semibold text-text-primary"
                  >
                    Organization{" "}
                    <span className="font-normal text-text-muted">
                      (optional)
                    </span>
                  </label>

                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    autoComplete="organization"
                    placeholder="Organization or institution"
                    className="mt-2 h-12 w-full rounded-xl border border-border bg-surface px-4 text-sm text-text-primary outline-none transition-all placeholder:text-text-muted focus:border-brand-blue focus:ring-4 focus:ring-brand-blue-light"
                  />
                </div>

                {/* Subject */}

                <div>
                  <label
                    htmlFor="subject"
                    className="text-sm font-semibold text-text-primary"
                  >
                    How can we help?
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    defaultValue=""
                    required
                    className="mt-2 h-12 w-full rounded-xl border border-border bg-surface px-4 text-sm text-text-primary outline-none transition-all focus:border-brand-blue focus:ring-4 focus:ring-brand-blue-light"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>

                    <option value="support">
                      Mental health support
                    </option>

                    <option value="partnership">
                      Partnership opportunity
                    </option>

                    <option value="programme">
                      Programme enquiry
                    </option>

                    <option value="workplace">
                      Workplace wellness
                    </option>

                    <option value="school">
                      School mental health
                    </option>

                    <option value="other">
                      Other enquiry
                    </option>
                  </select>
                </div>

                {/* Message */}

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-text-primary"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us more..."
                    className="mt-2 w-full resize-none rounded-xl border border-border bg-surface p-4 text-sm text-text-primary outline-none transition-all placeholder:text-text-muted focus:border-brand-blue focus:ring-4 focus:ring-brand-blue-light"
                  />
                </div>

                {/* Submit */}

                <button
                  type="submit"
                  className="group inline-flex h-13 w-full items-center justify-center rounded-full bg-brand-purple px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue hover:shadow-xl"
                >
                  Send Message

                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <p className="text-center text-xs leading-5 text-text-muted">
                  We respect your privacy and will only use the information
                  provided to respond to your enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* =====================================================
            PARTNERSHIP CTA
        ===================================================== */}

        <div className="mt-8 overflow-hidden rounded-[2rem] border border-brand-green/20 bg-brand-green-light/40">
          <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="p-7 sm:p-9">
              <p className="text-sm font-bold text-brand-green-dark">
                Interested in becoming a partner?
              </p>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-text-secondary">
                We collaborate with government, development partners,
                corporates, schools, healthcare institutions, humanitarian
                agencies, and community organizations.
              </p>
            </div>

            <div className="px-7 pb-7 lg:px-9 lg:pb-0">
              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-brand-green px-6 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue hover:shadow-lg"
              >
                Start a Partnership
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            PRIVACY / SUPPORT NOTE
        ===================================================== */}

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue-light text-brand-blue">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                d="M12 3 5 6v5c0 4.5 2.8 8.5 7 10 4.2-1.5 7-5.5 7-10V6l-7-3Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />

              <path
                d="m9.5 12 1.7 1.7 3.5-3.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="mt-4 text-xs leading-6 text-text-muted">
            Your information is treated with respect and confidentiality.
            Please avoid sharing highly sensitive personal or clinical
            information through this general enquiry form.
          </p>
        </div>
      </div>
    </section>
  );
}