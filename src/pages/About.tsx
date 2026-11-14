import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Database,
  Globe,
  Layers,
  Lightbulb,
  Rocket,
} from "lucide-react";

const skills = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "NestJS",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Tailwind CSS",
  "REST APIs",
  "Git & GitHub",
];

const projects = [
  {
    name: "ShopNest",
    description:
      "An e-commerce application with product management, cart, authentication, and an admin dashboard.",
    stack: "React · Express · PostgreSQL · TypeScript",
  },
  {
    name: "Job Portal",
    description:
      "A job portal with employer and applicant dashboards, job listings, and application management.",
    stack: "Next.js · TypeScript · MySQL",
  },
  {
    name: "MERN Portfolio",
    description:
      "A full-stack portfolio application with authentication, REST APIs, and image uploads.",
    stack: "MongoDB · Express · React · Node.js",
  },
];

const services = [
  {
    icon: Globe,
    title: "Frontend",
    description: "Building responsive and user-friendly web interfaces.",
  },
  {
    icon: Database,
    title: "Backend",
    description: "Developing APIs, authentication, and database logic.",
  },
  {
    icon: Layers,
    title: "Full Stack",
    description:
      "Connecting frontend, backend, and databases into complete apps.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Learning through projects and improving code quality.",
  },
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
            <Code2 size={14} aria-hidden="true" />
            Get to know me
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
            About <span className="text-lime-500">Me.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg">
            I'm a developer who enjoys turning ideas into practical web
            applications. I focus on writing clean code, learning modern
            technologies, and continuously improving my development skills.
          </p>
        </div>
      </section>

      {/* ===== MY JOURNEY (stacked, centered) ===== */}
      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-lime-600">
            My Journey
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Building, learning, and growing as a developer.
          </h2>
        </div>

        <div className="mt-8 space-y-4 text-base leading-8 text-zinc-500">
          <p>
            My interest in web development comes from the ability to build
            something useful with code. I started with the fundamentals of web
            development and gradually moved towards frontend and backend
            technologies.
          </p>
          <p>
            I enjoy working across the full stack — creating responsive
            interfaces, building REST APIs, implementing authentication, and
            connecting applications with databases.
          </p>
          <p>
            I'm also exploring NestJS and improving my understanding of backend
            architecture and professional development practices.
          </p>
        </div>

        <div className="mt-9 text-center">
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-lime-400 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-lime-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2"
          >
            Let's Connect
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      {/* ===== WHAT I DO (uniform 4-col grid) ===== */}
      <section className="border-t border-zinc-100 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-lime-600">
              What I Do
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Areas I focus on
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, description }) => (
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
              Technologies
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Tools & Technologies I Work With
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-zinc-500">
              Technologies I've used while learning and building full-stack web
              applications.
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

      {/* ===== PROJECTS ===== */}
      <section className="border-t border-zinc-100 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-lime-600">
                Selected Work
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                Projects I've Built
              </h2>
            </div>

            <Link
              to="/projects"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-700 transition hover:text-lime-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2 rounded-md"
            >
              View all projects
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-lime-300 hover:shadow-md"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-50 text-lime-600 transition group-hover:bg-lime-100">
                    <Rocket size={19} aria-hidden="true" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-zinc-900">
                  {project.name}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-6 text-zinc-500">
                  {project.description}
                </p>

                <div className="mt-4 border-t border-zinc-100 pt-3">
                  <p className="text-[11px] leading-5 text-zinc-500">
                    {project.stack}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;