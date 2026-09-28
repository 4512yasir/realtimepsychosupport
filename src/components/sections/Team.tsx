import Image from "next/image";

const team = [
  {
    name: "Gladys Akumu",
    role: "Executive Director",
    image: "/images/team/gladys-akumu.jpg",
    initials: "GA",
    accent: "blue",
    description:
      "Provides strategic leadership and guides the organization's vision, partnerships, and commitment to accessible mental health support.",
  },
  {
    name: "Christine Owira",
    role: "Counselling Psychologist",
    image: "/images/team/christine-owira.jpg",
    initials: "CO",
    accent: "purple",
    description:
      "Provides professional counselling and psychosocial support, helping individuals and families access compassionate and client-centred mental health care.",
  },
  {
    name: "Monicah Njeri",
    role: "Community Outreach Lead",
    image: "/images/team/monica-njeri.jpg",
    initials: "MN",
    accent: "green",
    description:
      "Leads community outreach initiatives and strengthens engagement with individuals, families, schools, and community networks.",
  },
  {
    name: "Mathews Muiruri",
    role: "Project Officer",
    image: "/images/team/matthews-muiruri.jpg",
    initials: "MM",
    accent: "blue",
    description:
      "Supports project implementation, coordination, monitoring, and community-based activities that advance mental health and psychosocial wellbeing.",
  },
];

const accentStyles = {
  blue: {
    badge: "bg-brand-blue-light text-brand-blue",
    line: "bg-brand-blue",
    avatar: "bg-brand-blue text-white",
  },
  purple: {
    badge: "bg-brand-purple-light text-brand-purple",
    line: "bg-brand-purple",
    avatar: "bg-brand-purple text-white",
  },
  green: {
    badge: "bg-brand-green-light text-brand-green-dark",
    line: "bg-brand-green",
    avatar: "bg-brand-green text-white",
  },
};

export default function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-surface py-24 sm:py-28 lg:py-36"
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div
        aria-hidden="true"
        className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-brand-blue-light/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-brand-purple-light/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =======================================================
            HEADER
        ======================================================= */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="flex items-center justify-center gap-3">
            <span className="h-1 w-10 rounded-full bg-brand-green" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-green-dark">
              Our Team
            </span>

            <span className="h-1 w-10 rounded-full bg-brand-green" />
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            The people behind the{" "}
            <span className="text-brand-blue">work.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-text-secondary sm:text-lg">
            Real Time Psychosupport brings together professional expertise,
            community experience, and a shared commitment to improving mental
            health and wellbeing.
          </p>

        </div>

        {/* =======================================================
            TEAM GRID
        ======================================================= */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {team.map((member) => {
            const style =
              accentStyles[
                member.accent as keyof typeof accentStyles
              ];

            return (
              <article
                key={member.name}
                className="group overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* =================================================
                    PROFILE IMAGE / PLACEHOLDER
                ================================================= */}

                <div className="relative aspect-[4/4.2] overflow-hidden bg-brand-blue-light">

                  {/* 
                    TEMPORARY PROFILE PLACEHOLDER

                    Once real staff photos are available, simply
                    uncomment the Image below and remove the
                    placeholder.
                  */}

                  <div
                    className={`absolute inset-0 flex items-center justify-center ${style.avatar}`}
                  >
                    <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-8 border-white/20 bg-white/10 shadow-xl backdrop-blur-sm">

                      <span className="text-4xl font-bold tracking-tight text-white">
                        {member.initials}
                      </span>

                    </div>
                  </div>

                  {/* Decorative circles */}

                  <div
                    aria-hidden="true"
                    className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/20"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full border border-white/10"
                  />

                  {/* Future image */}

                  {/*
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  */}

                  {/* Accent */}

                  <div
                    className={`absolute bottom-0 left-0 h-1 w-full ${style.line}`}
                  />

                </div>

                {/* =================================================
                    DETAILS
                ================================================= */}

                <div className="p-7 sm:p-8">

                  <span
                    className={`inline-flex rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] ${style.badge}`}
                  >
                    {member.role}
                  </span>

                  <h3 className="mt-5 text-xl font-bold text-text-primary">
                    {member.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-text-secondary">
                    {member.description}
                  </p>

                </div>

              </article>
            );
          })}

        </div>

        {/* =======================================================
            TEAM PHILOSOPHY
        ======================================================= */}

        <div className="relative mt-12 overflow-hidden rounded-[2rem] bg-brand-blue p-8 shadow-xl sm:p-10 lg:p-12">

          {/* Purple */}

          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-purple/70 blur-sm"
          />

          {/* Green */}

          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-brand-green/40 blur-sm"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                One team. One purpose.
              </p>

              <h3 className="mt-4 max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl">
                Different expertise. A shared commitment to compassionate care.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Our strength comes from bringing together professional
                expertise, community knowledge, and collaborative practice to
                create meaningful mental health support.
              </p>

            </div>

            {/* Brand mark */}

            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">

              <div className="flex gap-1.5">

                <span className="h-3 w-3 rounded-full bg-white" />

                <span className="h-3 w-3 rounded-full bg-brand-purple" />

                <span className="h-3 w-3 rounded-full bg-brand-green" />

              </div>

            </div>

          </div>

        </div>

        {/* =======================================================
            PROFILE PHOTO NOTE
        ======================================================= */}

        <div className="mt-8 text-center">

          <p className="mx-auto max-w-2xl text-xs leading-6 text-text-muted">
            Team profiles can be updated with professional photographs as they
            become available, without changing the structure of this section.
          </p>

        </div>

      </div>
    </section>
  );
}