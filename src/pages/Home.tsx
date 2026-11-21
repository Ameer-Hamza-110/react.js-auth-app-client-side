import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Lock,
  ShieldCheck,
  Sparkles,
  UserPlus,
  Zap,
  CheckCircle2,
  KeyRound,
  Fingerprint,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import { useAuthStore } from "../store/auth.store";
import toast from "react-hot-toast";

const steps = [
  {
    icon: UserPlus,
    title: "Create your account",
    description:
      "Sign up with your email in seconds — no clutter, no long forms.",
  },
  {
    icon: KeyRound,
    title: "Log in securely",
    description:
      "Access your account with protected, token-based sessions.",
  },
  {
    icon: ShieldCheck,
    title: "Stay protected",
    description:
      "Your session is validated on every request — nothing slips through.",
  },
];

const features = [
  {
    icon: Lock,
    title: "Secure by default",
    description: "JWT sessions and protected routes out of the box.",
  },
  {
    icon: Zap,
    title: "Fast & simple",
    description: "A minimal experience with zero unnecessary steps.",
  },
  {
    icon: Fingerprint,
    title: "Privacy first",
    description: "We store only what's required to keep you signed in.",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const user = useAuthStore((s) => s.user);
  const accessToken = useAuthStore((s) => s.accessToken);
  const logout = useAuthStore((s) => s.logout);

  const isAuthenticated = !!accessToken && !!user;
  const isAdmin = user?.role === "admin";

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden border-b border-zinc-100">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[720px] -translate-x-1/2 rounded-full bg-lime-50 blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-28 lg:py-32">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-200 bg-white px-4 py-1.5 text-xs font-medium text-lime-700 shadow-sm">
            <Sparkles size={14} aria-hidden="true" />
            Simple. Secure. Yours.
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
            Your account,{" "}
            <span className="text-lime-500">simplified.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg">
            A clean, secure authentication app. Sign up, log in, and manage
            your account — nothing more, nothing less.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {isAuthenticated ? (
              <>
                {isAdmin ? (
                  <Link
                    to="/admin"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-lime-400 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-lime-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2 sm:w-auto"
                  >
                    <LayoutDashboard size={16} aria-hidden="true" />
                    Open Admin Panel
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                ) : (
                  <div className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-lime-200 bg-lime-50 px-6 py-3 text-sm font-semibold text-lime-800 sm:w-auto">
                    <CheckCircle2 size={16} aria-hidden="true" />
                    You're signed in as {user?.name?.split(" ")[0]}
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleLogout}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 sm:w-auto"
                >
                  <LogOut size={16} aria-hidden="true" />
                  Log out
                </button>
              </>
            ) : (
              <>
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
                  Log in
                </Link>
              </>
            )}
          </div>

          {!isAuthenticated && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-zinc-400">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2
                  size={14}
                  className="text-lime-500"
                  aria-hidden="true"
                />
                No credit card
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2
                  size={14}
                  className="text-lime-500"
                  aria-hidden="true"
                />
                Free forever
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2
                  size={14}
                  className="text-lime-500"
                  aria-hidden="true"
                />
                Cancel anytime
              </span>
            </div>
          )}
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-lime-600">
            How it works
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Three steps to get started
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className="relative rounded-xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-lime-300 hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-50 text-lime-600">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                  Step 0{i + 1}
                </span>
              </div>
              <h3 className="text-sm font-bold text-zinc-900">{title}</h3>
              <p className="mt-1.5 text-xs leading-6 text-zinc-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="border-t border-zinc-100 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-lime-600">
              Why Authly
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Authentication, done right
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
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

      {/* ===== FINAL CTA ===== */}
      <section className="border-t border-zinc-100 bg-white">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            {isAuthenticated ? "You're all set." : "Ready to get started?"}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-500">
            {isAuthenticated
              ? "Your account is active and secure. You can log out anytime from here or the footer."
              : "Create your account in seconds and start using Authly today."}
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {isAuthenticated ? (
              isAdmin ? (
                <Link
                  to="/admin"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-lime-400 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-lime-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2 sm:w-auto"
                >
                  Open Admin Panel
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              ) : (
                <Link
                  to="/"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-lime-400 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-lime-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2 sm:w-auto"
                >
                  Back to top
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              )
            ) : (
              <>
                <Link
                  to="/register"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-lime-400 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-lime-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2 sm:w-auto"
                >
                  Create free account
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
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;