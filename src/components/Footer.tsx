import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Code2,
  Network,
  Mail,
  ArrowUpRight,
  Sparkles,
  LogOut,
  LayoutDashboard,
  Loader2,
} from "lucide-react";
import { useAuthStore } from "../store/auth.store";
import toast from "react-hot-toast";

const socials = [
  {
    href: "https://github.com/Ameer-Hamza-110",
    label: "GitHub",
    icon: Code2,
  },
  {
    href: "https://www.linkedin.com/in/ameer-hamza-jameel-556717332/",
    label: "LinkedIn",
    icon: Network,
  },
  {
    href: "mailto:hello@example.com",
    label: "Email",
    icon: Mail,
  },
];

const Footer = () => {
  const navigate = useNavigate();
  const user = useAuthStore((s) => s.user);
  const accessToken = useAuthStore((s) => s.accessToken);
  const logout = useAuthStore((s) => s.logout);

  const [loggingOut, setLoggingOut] = useState(false);

  const isAuthenticated = !!accessToken && !!user;
  const isAdmin = user?.role === "admin";

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      logout();
      toast.success("Logged out successfully");
      navigate("/login", { replace: true });
    } finally {
      setLoggingOut(false);
    }
  };

  const guestLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/login", label: "Sign In" },
    { to: "/register", label: "Create Account" },
  ];

  const authLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    ...(isAdmin ? [{ to: "/admin", label: "Admin Panel" }] : []),
  ];

  const navLinks = isAuthenticated ? authLinks : guestLinks;

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex w-fit items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-400 text-zinc-900">
                <Sparkles size={18} aria-hidden="true" />
              </div>
              <span className="text-base font-bold tracking-tight text-zinc-900 sm:text-lg">
                Authly
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-500">
              A simple, secure authentication app. Sign up, log in, and manage
              your account — nothing more, nothing less.
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  aria-label={label}
                  className="rounded-lg border border-zinc-200 p-2.5 text-zinc-600 transition hover:border-lime-400 hover:bg-lime-50 hover:text-lime-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900">Navigation</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-zinc-500 transition hover:text-lime-700"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account / Contact */}
          <div>
            {isAuthenticated ? (
              <>
                <h3 className="text-sm font-semibold text-zinc-900">
                  Your Account
                </h3>

                <div className="mt-4 flex items-center gap-2.5 rounded-lg bg-zinc-50 px-3 py-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-100 text-xs font-bold text-lime-800">
                    {user?.name?.[0]?.toUpperCase() ?? "U"}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-zinc-900">
                      {user?.name}
                    </p>
                    <p className="truncate text-[10px] text-zinc-500">
                      {user?.email}
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex flex-col gap-2">
                  {isAdmin && (
                    <Link
                      to="/admin"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition hover:text-lime-700"
                    >
                      <LayoutDashboard size={14} aria-hidden="true" />
                      Admin Panel
                    </Link>
                  )}

                  <button
                    type="button"
                    onClick={handleLogout}
                    disabled={loggingOut}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition hover:text-red-600 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 rounded-sm"
                  >
                    {loggingOut ? (
                      <Loader2
                        size={14}
                        className="animate-spin"
                        aria-hidden="true"
                      />
                    ) : (
                      <LogOut size={14} aria-hidden="true" />
                    )}
                    {loggingOut ? "Logging out..." : "Log out"}
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-sm font-semibold text-zinc-900">
                  Get in touch
                </h3>
                <p className="mt-4 text-sm leading-6 text-zinc-500">
                  Have a question or want to collaborate? Feel free to reach
                  out.
                </p>
                <a
                  href="mailto:hello@example.com"
                  className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 transition hover:text-lime-700"
                >
                  Contact us
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-zinc-200 pt-6 sm:flex-row">
          <p className="text-center text-xs text-zinc-400">
            © {new Date().getFullYear()} Authly. All rights reserved.
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