import { Link } from "react-router-dom";
import {
  ArrowRight,
  User,
  GraduationCap,
  Briefcase,
  Code2,
  Database,
  Layers,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "Internship Experience",
    description:
      "Hands-on experience building real full-stack features with TypeScript, React, Next.js, Express, PostgreSQL, and MySQL.",
  },
  {
    icon: Layers,
    title: "Full-Stack Mindset",
    description:
      "Comfortable moving between frontend interfaces, backend APIs, and database design.",
  },
  {
    icon: Code2,
    title: "WordPress & Customization",
    description:
      "Developing and customizing websites with WordPress when a project needs a fast, content-first solution.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "Passionate about turning real-world problems into clean, scalable, and maintainable code.",
  },
];

const skills = [
  "Full-Stack Development",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "TypeScript",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "REST APIs",
  "JWT Authentication",
  "RBAC",
  "Tailwind CSS",
  "Git & GitHub",
  "WordPress",
  "Cursor",
];

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden border-b border-zinc-100">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-lime-50 blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-200 bg-white px-4 py-1.5 text-xs font-medium text-lime-700 shadow-sm">
            <User size={14} aria-hidden="true" />
            Get to know me
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
            Hi, I'm <span className="text-lime-500">Ameer Hamza.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg">
            Junior Full Stack Developer with internship experience building
            full-stack web applications using TypeScript, React.js, Next.js,
            Express.js, PostgreSQL, and MySQL — plus WordPress customization.
          </p>
        </div>
      </section>

      {/* ===== MY STORY ===== */}
      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-lime-600">
            My Story
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Passionate about building real, useful things.
          </h2>
        </div>

        <div className="mt-8 space-y-4 text-base leading-8 text-zinc-500">
          <p>
            I'm a Junior Full Stack Developer with internship experience
            building full-stack web applications using TypeScript, React.js,
            Next.js, Express.js, PostgreSQL, and MySQL. I also develop and
            customize websites using WordPress when a project calls for it.
          </p>
          <p>
            I'm passionate about solving real-world problems through clean,
            scalable, and maintainable code. I enjoy moving across the stack —
            from crafting responsive interfaces to wiring up APIs and
            databases.
          </p>
          <p>
            I'm continuously improving my understanding of backend architecture,
            authentication flows, and professional development practices.
          </p>
        </div>

        <div className="mt-9 text-center">
          <Link
            to="/register"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-lime-400 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-lime-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2"
          >
            Get Started
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="border-t border-zinc-100 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-lime-600">
              What I Bring
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Highlights from my journey
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-lime-300 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-50 text-lime-600">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="text-sm font-bold text-zinc-900">{title}</h3>
                <p className="mt-1.5 text-xs leading-6 text-zinc-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section className="border-t border-zinc-100 bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-lime-600">
              Tech Stack
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Skills & Tools I Work With
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-zinc-500">
              Technologies I've used while learning, interning, and building
              full-stack web applications.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap justify-center gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-medium text-zinc-700 transition hover:border-lime-400 hover:bg-lime-50 hover:text-lime-800 sm:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="border-t border-zinc-100 bg-zinc-50">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <div className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-lime-100 text-lime-600">
            <Sparkles size={22} aria-hidden="true" />
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Want to see the app?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-500">
            Create an account and explore how the authentication flow works
            end to end.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/register"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-lime-400 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-lime-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2 sm:w-auto"
            >
              Create account
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/login"
              className="inline-flex w-full items-center justify-center rounded-lg border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-lime-400 hover:text-lime-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2 sm:w-auto"
            >
              I already have an account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;