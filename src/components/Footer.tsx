
import { Link } from "react-router-dom";
import { Code2, Network, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 bg-white">

      <div className="mx-auto max-w-6xl px-6 py-14">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex w-fit items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-lg font-bold text-zinc-900">
                A
              </div>

              <span className="text-lg font-bold text-zinc-900">
                Portfolio
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-500">
              A place to showcase my work, share projects, and connect
              with people who appreciate technology and creativity.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/Ameer-Hamza-110"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-lg border border-zinc-200 p-2.5 text-zinc-600 transition hover:border-lime-400 hover:bg-lime-50 hover:text-zinc-900"
              >
                <Code2 size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/ameer-hamza-jameel-556717332/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg border border-zinc-200 p-2.5 text-zinc-600 transition hover:border-lime-400 hover:bg-lime-50 hover:text-zinc-900"
              >
                <Network size={18} />
              </a>

              <a
                href="mailto:hello@example.com"
                aria-label="Email"
                className="rounded-lg border border-zinc-200 p-2.5 text-zinc-600 transition hover:border-lime-400 hover:bg-lime-50 hover:text-zinc-900"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900">
              Navigation
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link to="/" className="text-sm text-zinc-500 hover:text-lime-600">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/projects" className="text-sm text-zinc-500 hover:text-lime-600">
                  Projects
                </Link>
              </li>

              <li>
                <Link to="/login" className="text-sm text-zinc-500 hover:text-lime-600">
                  Sign In
                </Link>
              </li>

              <li>
                <Link to="/register" className="text-sm text-zinc-500 hover:text-lime-600">
                  Create Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900">
              Get in touch
            </h3>

            <p className="mt-5 text-sm leading-6 text-zinc-500">
              Have a question or want to collaborate? Feel free to reach out.
            </p>

            <a
              href="mailto:hello@example.com"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 transition hover:text-lime-600"
            >
              Contact Me
              <ArrowUpRight size={16} />
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-6 sm:flex-row">

          <p className="text-center text-xs text-zinc-400">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>

          <p className="text-xs text-zinc-400">
            Built with React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
