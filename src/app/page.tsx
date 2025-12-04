import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#teaching", label: "Teaching" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
  { href: "#media", label: "Media" },
  { href: "#contact", label: "Contact" },
] as const;

const researchAreas = [
  {
    title: "Nucleic acids & DNA structures",
    description:
      "Fundamental and applied aspects of nucleic acid structure, stability, and recognition.",
  },
  {
    title: "Multistranded DNA & G-quadruplexes",
    description:
      "Structural diversity and specific recognition of higher-order DNA secondary structures.",
  },
  {
    title: "Nanobiotechnology & applications",
    description:
      "Design of nanoscale materials for delivery, sensing, and environmental remediation.",
  },
];

const teachingHighlights = [
  "Undergraduate and postgraduate chemistry courses.",
  "Interdisciplinary curricula connecting chemistry with biology, materials, and technology.",
  "Mentoring student projects and research internships.",
];

const educationTimeline = [
  {
    period: "Ph.D. in Chemistry",
    detail: "Research in nucleic acids / biophysical chemistry (details to be confirmed).",
  },
  {
    period: "M.Phil. / M.Sc. in Chemistry",
    detail: "Advanced studies in physical and biological chemistry.",
  },
  {
    period: "Academic Positions",
    detail:
      "Faculty positions in chemistry and interdisciplinary programmes (exact roles to be finalised).",
  },
];

const achievements = [
  "Peer-reviewed publications in international journals.",
  "Supervision and co-supervision of student research projects.",
  "Invited talks and outreach activities in chemistry education.",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          <div className="flex items-baseline gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
              Chemistry Portfolio
            </span>
            <span className="hidden text-xs text-slate-400 md:inline">|</span>
            <p className="text-sm font-medium text-slate-900 md:text-base">
              Prof. Mahima Kaushik
            </p>
          </div>
          <nav className="hidden items-center gap-5 text-xs font-medium text-slate-600 md:flex md:text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-sky-700"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-10 md:gap-20 md:py-16">
        <section
          id="about"
          className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-center"
        >
          <div className="space-y-5 md:space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
              About
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Prof. Mahima Kaushik
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
              Chemistry academic and researcher with interests in nucleic acids, DNA secondary
              structures, and nanobiotechnology, with a strong commitment to teaching and mentoring
              students at the interface of chemistry and biology.
            </p>
            <div className="flex flex-wrap gap-3 text-xs md:text-sm">
              <span className="rounded-full bg-sky-50 px-3 py-1 font-medium text-sky-800">
                Nucleic acids & biophysical chemistry
              </span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-800">
                Nanobiotechnology
              </span>
              <span className="rounded-full bg-violet-50 px-3 py-1 font-medium text-violet-800">
                Chemistry education
              </span>
            </div>
            <div className="flex flex-wrap gap-3 pt-2 text-xs md:text-sm">
              <Link
                href="#research"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 font-medium text-slate-50 shadow-sm transition hover:bg-slate-800"
              >
                View research focus
              </Link>
              <Link
                href="#publications"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 font-medium text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Publications
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative h-40 w-40 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm md:h-52 md:w-52">
              <Image
                src="/profile-placeholder.jpg"
                alt="Portrait placeholder for Prof. Mahima Kaushik"
                fill
                sizes="(min-width: 768px) 13rem, 10rem"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section id="research" className="space-y-5 md:space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
              Research Focus
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Research areas
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
              Representative themes summarising current and past research interests. These entries
              can be refined with specific projects, grants, and collaborations.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {researchAreas.map((area) => (
              <div
                key={area.title}
                className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                  {area.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-700 md:text-sm">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="publications" className="space-y-5 md:space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
              Publications
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Selected publications
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
              A curated list of representative publications can be added here, with links to
              journals, DOIs, or preprints, along with a full CV or publication list.
            </p>
          </div>
          <div className="space-y-3 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-xs text-slate-600 md:text-sm">
            <p>
              Placeholder: add key papers with title, journal, year, and links. For example:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Title of a representative article in nucleic acids or nanobiotechnology —
                <span className="italic"> Journal name</span>, year.
              </li>
              <li>
                Structural or biophysical study of DNA secondary structures —
                <span className="italic"> Journal name</span>, year.
              </li>
            </ul>
            <p className="pt-1">
              A link to a Google Scholar, ORCID, or institutional profile can also be placed here.
            </p>
          </div>
        </section>

        <section id="teaching" className="space-y-5 md:space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
              Teaching
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Courses & mentoring
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
              This section can list undergraduate and postgraduate courses, as well as project and
              dissertation supervision.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {teachingHighlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-xs leading-relaxed text-slate-700 shadow-sm md:text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="space-y-5 md:space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
              Education & Positions
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Academic journey
            </h2>
          </div>
          <ol className="space-y-3 border-l border-slate-300 pl-4 text-xs md:text-sm">
            {educationTimeline.map((entry) => (
              <li key={entry.period} className="relative pl-3">
                <span className="absolute -left-[9px] mt-1 h-2.5 w-2.5 rounded-full bg-sky-600" />
                <p className="font-semibold text-slate-900">{entry.period}</p>
                <p className="text-slate-700">{entry.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="achievements" className="space-y-5 md:space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
              Achievements
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Recognitions & service
            </h2>
          </div>
          <ul className="grid gap-3 text-xs md:grid-cols-2 md:text-sm">
            {achievements.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-4 leading-relaxed text-slate-700 shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="media" className="space-y-5 md:space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
              Media & Outreach
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Lectures & videos
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
              Selected lectures, talks, and outreach content hosted on YouTube and other platforms.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-start">
            <div className="aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-black/90 shadow-sm">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed?listType=user_uploads&list=mahimakaushik2465"
                title="Prof. Mahima Kaushik - YouTube lectures"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-700 shadow-sm md:text-sm">
              <p className="font-semibold text-slate-900">YouTube teaching channel</p>
              <p>
                A dedicated channel sharing lectures, problem-solving sessions, and explanatory
                videos in chemistry.
              </p>
              <Link
                href="https://www.youtube.com/@mahimakaushik2465"
                target="_blank"
                className="inline-flex items-center gap-1 text-sky-700 underline-offset-2 hover:underline"
              >
                Visit channel
                <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>
        </section>

        <section id="contact" className="space-y-5 md:space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
              Contact
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Get in touch
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2 text-xs text-slate-700 md:text-sm">
              <p>
                This section can include official institutional email, office address, and links to
                academic profiles such as Google Scholar, ORCID, ResearchGate, or departmental
                pages.
              </p>
              <dl className="space-y-1">
                <div>
                  <dt className="font-semibold text-slate-900">Email</dt>
                  <dd>email@example.edu (to be updated)</dd>
                </div>
              </dl>
            </div>
            <div className="space-y-2 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-xs text-slate-600 md:text-sm">
              <p>
                Optionally, a simple contact form can be added here using a form backend service
                (e.g., Netlify Forms or similar) if preferred by the institution.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-10 border-t border-slate-200 bg-white py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 text-xs text-slate-500 md:text-sm">
          <p>
            © {new Date().getFullYear()} Prof. Mahima Kaushik. Academic portfolio.
          </p>
          <p>Site built with Next.js.</p>
        </div>
      </footer>
    </div>
  );
}
