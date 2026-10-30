
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
    <div className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-lime-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-lime-50 blur-3xl" />

      {/* Hero */}
      <main className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* Left Content */}
          <section>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-lime-200 bg-lime-50 px-4 py-2 text-xs font-semibold text-lime-700 sm:text-sm">
              <Sparkles size={15} />
              Welcome to my portfolio
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-[1.15] tracking-tight text-zinc-900 sm:text-5xl md:text-6xl xl:text-7xl">
              I build things for the{" "}
              <span className="text-lime-500">web.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-500 sm:text-lg">
              I'm a full-stack developer passionate about building
              modern, responsive, and useful web applications.
              Explore my projects, technologies, and the work behind them.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-lime-400 px-6 py-3.5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-lime-500 hover:shadow-md"
              >
                <FolderGit2 size={18} />
                Explore Projects
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to={isAuthenticated
                  ? user.role === "admin" ? "/admin" : "/dashboard"
                  : "/about"}
                className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-700 transition hover:border-lime-300 hover:bg-lime-50"
              >
                {isAuthenticated ? "Go to Dashboard" : "More About Me"}
              </Link>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-zinc-100 pt-7">
              <span className="text-sm text-zinc-400">
                Find me on
              </span>

              <a
                href="https://github.com/Ameer-Hamza-110"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
              >
                <Code2 size={19} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ameer-hamza-jameel-556717332/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-lime-700"
              >
                <Terminal size={19} />
                LinkedIn
              </a>
            </div>
          </section>

          {/* Right Code Editor */}
          <section className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-3xl bg-lime-200/70 rotate-12" />
            <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-full border-[12px] border-lime-100" />

            <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-200/60">

              {/* Editor Header */}
              <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-4 py-4 sm:px-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-100 text-lime-700">
                    <Terminal size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-zinc-900">
                      Developer Profile
                    </p>
                    <p className="text-xs text-zinc-400">
                      A look inside my workspace
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-lime-50 px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-lime-500" />
                  <span className="text-xs font-medium text-lime-700">
                    Available
                  </span>
                </div>
              </div>

              {/* Editor Tabs */}
              <div className="flex items-center gap-1 border-b border-zinc-200 bg-white px-3 pt-2">
                <div className="flex items-center gap-2 border-b-2 border-lime-400 px-3 py-3 text-xs font-medium text-zinc-800">
                  <Code2 size={14} className="text-lime-600" />
                  developer.ts
                </div>
              </div>

              {/* Code */}
              <div className="overflow-x-auto bg-[#18181b] px-4 py-6 sm:px-6 sm:py-7">
                <div className="min-w-[310px] space-y-3 font-mono text-[11px] leading-6 sm:text-xs md:text-sm">
                  <p className="text-zinc-500">
                    {"// A little about what I do"}
                  </p>

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
                  </p>
                  <p className="pl-10 text-lime-400">
                    "React", "Next.js", "TypeScript"
                  </p>
                  <p className="pl-5 text-zinc-400">],</p>

                  <p className="pl-5">
                    <span className="text-sky-300">backend</span>
                    <span className="text-zinc-400">: [</span>
                  </p>
                  <p className="pl-10 text-lime-400">
                    "Node.js", "Express", "NestJS"
                  </p>
                  <p className="pl-5 text-zinc-400">],</p>

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

                  <p className="pt-2 text-zinc-500">
                    {"// Always learning something new."}
                  </p>
                </div>
              </div>

              {/* Editor Footer */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200 bg-zinc-50 px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <Code2 size={14} />
                  TypeScript
                </div>

                <span className="text-xs text-zinc-400">
                  Build • Learn • Improve
                </span>
              </div>
            </div>

            {/* Floating Card */}
            <div className="relative mt-5 grid grid-cols-2 gap-3 sm:absolute sm:-bottom-10 sm:left-7 sm:right-7 sm:mt-0">
              <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-lg shadow-zinc-200/40">
                <FolderGit2 className="mb-2 text-lime-600" size={20} />
                <p className="text-sm font-bold text-zinc-900">
                  My Projects
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  Things I've built
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-lg shadow-zinc-200/40">
                <Code2 className="mb-2 text-lime-600" size={20} />
                <p className="text-sm font-bold text-zinc-900">
                  My Skills
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  Tools I work with
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Quick Links */}
      <section className="relative border-t border-zinc-100 bg-zinc-50/70">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:px-10">
          <Link
            to="/about"
            className="group rounded-2xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:border-lime-300 hover:shadow-lg"
          >
            <Code2 className="mb-5 text-lime-600" size={25} />
            <h2 className="font-bold text-zinc-900">About Me</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Learn about my background, skills, and development journey.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-zinc-800 group-hover:text-lime-700">
              Read more <ArrowRight size={16} />
            </span>
          </Link>

          <Link
            to="/projects"
            className="group rounded-2xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:border-lime-300 hover:shadow-lg"
          >
            <FolderGit2 className="mb-5 text-lime-600" size={25} />
            <h2 className="font-bold text-zinc-900">My Projects</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Explore applications and projects I've worked on.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-zinc-800 group-hover:text-lime-700">
              View projects <ArrowRight size={16} />
            </span>
          </Link>

          <Link
            to="/contact"
            className="group rounded-2xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:border-lime-300 hover:shadow-lg sm:col-span-2 lg:col-span-1"
          >
            <Sparkles className="mb-5 text-lime-600" size={25} />
            <h2 className="font-bold text-zinc-900">Get in Touch</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Have a question, idea, or collaboration in mind? Let's connect.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-zinc-800 group-hover:text-lime-700">
              Contact me <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
