import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  FolderGit2,
  Sparkles,
  Terminal,
} from "lucide-react";
import { useAuthStore } from "../store/auth.store";

const Home = () => {
  const user = useAuthStore((state) => state.user);
  const accessToken = useAuthStore((state) => state.accessToken);

  const isAuthenticated = !!accessToken && !!user;

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO (Centered, Full-Width) ===== */}
      <section className="relative overflow-hidden border-b border-zinc-100">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-lime-50 blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-28 lg:py-32">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-200 bg-white px-4 py-1.5 text-xs font-medium text-lime-700 shadow-sm">
            <Sparkles size={14} aria-hidden="true" />
            Welcome to my portfolio
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
            I build things for the{" "}
            <span className="text-lime-500">web.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg">
            Full-stack developer passionate about building modern, responsive,
            and useful web applications.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/projects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-lime-400 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-lime-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2 sm:w-auto"
            >
              <FolderGit2 size={17} aria-hidden="true" />
              Explore Projects
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to={
                isAuthenticated
                  ? user.role === "admin"
                    ? "/admin"
                    : "/dashboard"
                  : "/about"
              }
              className="inline-flex w-full items-center justify-center rounded-lg border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-lime-400 hover:text-lime-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2 sm:w-auto"
            >
              {isAuthenticated ? "Go to Dashboard" : "More About Me"}
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-sm text-zinc-400">
            <a
              href="https://github.com/Ameer-Hamza-110"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-zinc-900"
            >
              <Code2 size={16} aria-hidden="true" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ameer-hamza-jameel-556717332/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-lime-700"
            >
              <Terminal size={16} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ===== CODE EDITOR (Full Width, Below Hero) ===== */}
      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
            A look inside my workspace
          </h2>
          <p className="mt-2 text-sm text-zinc-500">
            Developer profile · available for work
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl shadow-zinc-200/40">
          {/* Editor Header */}
          <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-lime-500" />
              </div>
              <span className="text-xs font-medium text-zinc-500">
                developer.ts
              </span>
            </div>

            <div className="flex items-center gap-1.5 rounded-full bg-lime-50 px-2.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
              <span className="text-[10px] font-medium text-lime-700">
                Available
              </span>
            </div>
          </div>

          {/* Code */}
          <div className="overflow-x-auto bg-[#18181b] px-4 py-6 sm:px-6">
            <div className="min-w-[310px] space-y-2 font-mono text-[11px] leading-6 sm:text-xs md:text-sm">
              <p className="text-zinc-500">{"// A little about what I do"}</p>

              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-sky-300">developer</span>{" "}
                <span className="text-zinc-300">= {"{"}</span>
              </p>

              <p className="pl-5">
                <span className="text-sky-300">focus</span>
                <span className="text-zinc-400">: </span>
                <span className="text-lime-400">"Full-Stack Development"</span>,
              </p>

              <p className="pl-5">
                <span className="text-sky-300">frontend</span>
                <span className="text-zinc-400">: [</span>
                <span className="text-lime-400">
                  "React", "Next.js", "TypeScript"
                </span>
                <span className="text-zinc-400">],</span>
              </p>

              <p className="pl-5">
                <span className="text-sky-300">backend</span>
                <span className="text-zinc-400">: [</span>
                <span className="text-lime-400">
                  "Node.js", "Express", "NestJS"
                </span>
                <span className="text-zinc-400">],</span>
              </p>

              <p className="pl-5">
                <span className="text-sky-300">databases</span>
                <span className="text-zinc-400">: [</span>
                <span className="text-lime-400">"MongoDB", "PostgreSQL"</span>
                <span className="text-zinc-400">],</span>
              </p>

              <p className="pl-5">
                <span className="text-sky-300">mindset</span>
                <span className="text-zinc-400">: </span>
                <span className="text-lime-400">"Build. Learn. Improve."</span>
              </p>

              <p className="text-zinc-300">{"};"}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-zinc-200 bg-zinc-50 px-4 py-2.5">
            <span className="flex items-center gap-1.5 text-xs text-zinc-500">
              <Code2 size={13} aria-hidden="true" />
              TypeScript
            </span>
            <span className="text-xs text-zinc-400">Build • Learn • Improve</span>
          </div>
        </div>
      </section>

      {/* ===== QUICK LINKS (Simple 3-column) ===== */}
      <section className="border-t border-zinc-100 bg-zinc-50">
        <div className="mx-auto grid max-w-5xl gap-4 px-5 py-16 sm:grid-cols-3 sm:px-8">
          <Link
            to="/about"
            className="group flex flex-col rounded-lg border border-zinc-200 bg-white p-5 transition hover:border-lime-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2"
          >
            <Code2 className="mb-3 text-lime-600" size={22} aria-hidden="true" />
            <h3 className="font-semibold text-zinc-900">About Me</h3>
            <p className="mt-1 flex-1 text-sm text-zinc-500">
              My background and development journey.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-zinc-700 group-hover:text-lime-700">
              Read more <ArrowRight size={14} aria-hidden="true" />
            </span>
          </Link>

          <Link
            to="/projects"
            className="group flex flex-col rounded-lg border border-zinc-200 bg-white p-5 transition hover:border-lime-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2"
          >
            <FolderGit2
              className="mb-3 text-lime-600"
              size={22}
              aria-hidden="true"
            />
            <h3 className="font-semibold text-zinc-900">My Projects</h3>
            <p className="mt-1 flex-1 text-sm text-zinc-500">
              Applications and projects I've built.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-zinc-700 group-hover:text-lime-700">
              View projects <ArrowRight size={14} aria-hidden="true" />
            </span>
          </Link>

          <Link
            to="/contact"
            className="group flex flex-col rounded-lg border border-zinc-200 bg-white p-5 transition hover:border-lime-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2"
          >
            <Sparkles
              className="mb-3 text-lime-600"
              size={22}
              aria-hidden="true"
            />
            <h3 className="font-semibold text-zinc-900">Get in Touch</h3>
            <p className="mt-1 flex-1 text-sm text-zinc-500">
              Have an idea? Let's connect.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-zinc-700 group-hover:text-lime-700">
              Contact me <ArrowRight size={14} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;