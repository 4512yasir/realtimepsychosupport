
const team = [
  {
    name: "Gladys Akumu",
    role: "Executive Director",
    initials: "GA",
    accent: "blue",
    number: "01",
    description:
      "Provides strategic leadership and guides the organization's vision, partnerships, and commitment to accessible mental health support.",
  },
  {
    name: "Christine Owira",
    role: "Counselling Psychologist",
    initials: "CO",
    accent: "purple",
    number: "02",
    description:
      "Provides professional counselling and psychosocial support, helping individuals and families access compassionate, client-centred care.",
  },
  {
    name: "Monicah Njeri",
    role: "Community Outreach Lead",
    initials: "MN",
    accent: "green",
    number: "03",
    description:
      "Strengthens community engagement and leads outreach initiatives involving individuals, families, schools, and community networks.",
  },
  {
    name: "Mathews Muiruri",
    role: "Project Officer",
    initials: "MM",
    accent: "blue",
    number: "04",
    description:
      "Supports project implementation, coordination, monitoring, and activities that advance mental health and psychosocial wellbeing.",
  },
  {
    name: "Viviene Akumu",
    role: "Resource Mobilizer",
    initials: "VA",
    accent: "purple",
    number: "05",
    description:
      "Supports resource mobilization and relationship-building to help strengthen the resources available for community mental health initiatives.",
  },
];

const accentStyles = {
  blue: {
    text: "text-brand-blue",
    light: "bg-brand-blue-light",
    solid: "bg-brand-blue",
    border: "group-hover:border-brand-blue/40",
    orb: "bg-brand-blue/10",
  },
  purple: {
    text: "text-brand-purple",
    light: "bg-brand-purple-light",
    solid: "bg-brand-purple",
    border: "group-hover:border-brand-purple/40",
    orb: "bg-brand-purple/10",
  },
  green: {
    text: "text-brand-green-dark",
    light: "bg-brand-green-light",
    solid: "bg-brand-green",
    border: "group-hover:border-brand-green/50",
    orb: "bg-brand-green/15",
  },
};

export default function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#F8F9FC]"
    >
      {/* HERO */}
      <div className="relative overflow-hidden bg-brand-blue">
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-40 h-[28rem] w-[28rem] rounded-full bg-brand-purple/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-brand-green/20 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:px-10 lg:py-32">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-brand-green" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/90">
                Meet Our Team
              </span>
            </div>

            <h1 className="mt-8 max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Compassion starts with{" "}
              <span className="text-brand-green-light">
                people.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Behind every conversation, every safe space, and every step
              towards healing is a team committed to helping individuals and
              communities thrive.
            </p>

            <a
              href="#team-members"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-brand-blue transition hover:-translate-y-0.5 hover:bg-brand-green-light"
            >
              Get to know us
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          {/* Team snapshot */}
          <div className="relative">
            <div className="rounded-[2rem] border border-white/15 bg-white/[0.08] p-7 backdrop-blur-md sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                United by purpose
              </p>

              <div className="mt-6 flex -space-x-3">
                {team.map((member) => {
                  const style =
                    accentStyles[
                      member.accent as keyof typeof accentStyles
                    ];

                  return (
                    <div
                      key={member.initials}
                      title={member.name}
                      className={`flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-brand-blue text-xs font-bold text-white ${style.solid}`}
                    >
                      {member.initials}
                    </div>
                  );
                })}
              </div>

              <p className="mt-7 text-5xl font-bold tracking-tight text-white">
                05
              </p>

              <p className="mt-2 text-sm leading-6 text-white/70">
                Dedicated team members. One shared commitment to mental
                health, dignity, and community wellbeing.
              </p>

              <div className="mt-7 h-px bg-white/15" />

              <p className="mt-5 text-sm font-medium leading-6 text-white">
                Healing Minds. Restoring Hope. Empowering Communities.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-10 w-10 rounded-xl border border-white/20 bg-brand-green"
            />
          </div>
        </div>

        {/* Bottom transition */}
        <div className="grid h-2 grid-cols-3">
          <div className="bg-brand-blue-light" />
          <div className="bg-brand-purple" />
          <div className="bg-brand-green" />
        </div>
      </div>

      {/* TEAM INTRODUCTION */}
      <div
        id="team-members"
        className="mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:px-10"
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-purple">
              The people behind the mission
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              Meet the people making{" "}
              <span className="text-brand-blue">a difference.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-text-secondary sm:text-base">
            Our team brings together leadership, counselling, project
            coordination, community outreach, and resource mobilization.
          </p>
        </div>

        {/* PROFILE GRID */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => {
            const style =
              accentStyles[
                member.accent as keyof typeof accentStyles
              ];

            return (
              <article
                key={member.initials}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-[#E8EAF1] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-8 ${style.border} ${
                  index === 0 ? "lg:col-span-1" : ""
                }`}
              >
                {/* Decorative profile background */}
                <div
                  aria-hidden="true"
                  className={`absolute -right-12 -top-12 h-40 w-40 rounded-full transition-transform duration-500 group-hover:scale-125 ${style.orb}`}
                />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-24 w-24 items-center justify-center rounded-[1.7rem] text-3xl font-bold tracking-tight text-white shadow-lg transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105 ${style.solid}`}
                    >
                      {member.initials}
                    </div>

                    <span className="text-sm font-bold tracking-widest text-text-muted/70">
                      / {member.number}
                    </span>
                  </div>

                  <div className="mt-8">
                    <span
                      className={`inline-flex rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] ${style.light} ${style.text}`}
                    >
                      {member.role}
                    </span>

                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-text-primary">
                      {member.name}
                    </h3>

                    <div
                      className={`mt-4 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-20 ${style.solid}`}
                    />

                    <p className="mt-5 text-sm leading-7 text-text-secondary">
                      {member.description}
                    </p>
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-[#EEF0F4] pt-5">
                    <span className="text-xs font-medium text-text-muted">
                      Real Time Psychosupport
                    </span>

                    <span
                      aria-hidden="true"
                      className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1 ${style.light} ${style.text}`}
                    >
                      ↗
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CLOSING STATEMENT */}
        <div className="relative mt-12 overflow-hidden rounded-[2rem] bg-brand-blue px-7 py-10 sm:px-12 sm:py-14">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="absolute -right-6 -top-14 h-44 w-44 rounded-full border border-white/10"
          />

          <div className="relative max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green-light">
              One team. One purpose.
            </p>

            <h3 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              Different strengths. One shared commitment to compassionate care.
            </h3>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Together, we work towards a future where mental health support
              is accessible, communities are resilient, and everyone is
              treated with dignity.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-green-light px-6 py-3.5 text-sm font-bold text-brand-blue transition hover:bg-white"
            >
              Connect with our team
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
