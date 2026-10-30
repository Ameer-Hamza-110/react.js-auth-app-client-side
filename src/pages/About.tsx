
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

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-100 bg-zinc-50/70">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-lime-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-lime-200 bg-lime-50 px-4 py-2 text-sm font-medium text-lime-700">
              <Code2 size={16} />
              Get to know me
            </span>

            <h1 className="mt-7 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              About <span className="text-lime-500">Me.</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-500">
              I'm a developer who enjoys turning ideas into practical
              web applications. I focus on writing clean code,
              learning modern technologies, and continuously improving
              my development skills.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-lime-600">
            My Journey
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900">
            Building, learning, and growing as a developer.
          </h2>

          <div className="mt-6 space-y-4 text-base leading-8 text-zinc-500">
            <p>
              My interest in web development comes from the ability
              to build something useful with code. I started with
              the fundamentals of web development and gradually moved
              towards frontend and backend technologies.
            </p>

            <p>
              I enjoy working across the full stack — creating
              responsive interfaces, building REST APIs, implementing
              authentication, and connecting applications with databases.
            </p>

            <p>
              I'm also exploring NestJS and improving my understanding
              of backend architecture and professional development practices.
            </p>
          </div>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3 font-semibold text-zinc-900 transition hover:bg-lime-500"
          >
            Let's Connect <ArrowRight size={17} />
          </Link>
        </div>

        {/* What I Do */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-6 transition hover:border-lime-300">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-lime-100 text-lime-700">
              <Globe size={22} />
            </div>
            <h3 className="font-bold text-zinc-900">Frontend</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Building responsive and user-friendly web interfaces.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-6 transition hover:border-lime-300">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-lime-100 text-lime-700">
              <Database size={22} />
            </div>
            <h3 className="font-bold text-zinc-900">Backend</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Developing APIs, authentication, and database logic.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-6 transition hover:border-lime-300">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-lime-100 text-lime-700">
              <Layers size={22} />
            </div>
            <h3 className="font-bold text-zinc-900">Full Stack</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Connecting frontend, backend, and databases into complete apps.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-6 transition hover:border-lime-300">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-lime-100 text-lime-700">
              <Lightbulb size={22} />
            </div>
            <h3 className="font-bold text-zinc-900">Problem Solving</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Learning through projects and improving code quality.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-y border-zinc-100 bg-zinc-50/70">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-lime-600">
              Technologies
            </p>
            <h2 className="mt-3 text-3xl font-bold text-zinc-900">
              Tools & Technologies I Work With
            </h2>
            <p className="mt-4 leading-7 text-zinc-500">
              Technologies I've used while learning and building
              full-stack web applications.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 transition hover:border-lime-400 hover:bg-lime-50"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-lime-600">
              Selected Work
            </p>
            <h2 className="mt-3 text-3xl font-bold text-zinc-900">
              Projects I've Built
            </h2>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-800 transition hover:text-lime-700"
          >
            View all projects <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="rounded-2xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:border-lime-300 hover:shadow-lg"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-lime-100 text-lime-700">
                <Rocket size={21} />
              </div>

              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Project 0{index + 1}
              </p>

              <h3 className="mt-2 text-xl font-bold text-zinc-900">
                {project.name}
              </h3>

              <p className="mt-3 min-h-20 text-sm leading-6 text-zinc-500">
                {project.description}
              </p>

              <div className="mt-5 border-t border-zinc-100 pt-4">
                <p className="text-xs leading-6 text-zinc-500">
                  {project.stack}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
