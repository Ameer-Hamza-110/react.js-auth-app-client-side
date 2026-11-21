import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, LayoutDashboard, Sparkles } from "lucide-react";
import { useAuthStore } from "../store/auth.store";
import toast from "react-hot-toast";

const publicLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = useAuthStore((s) => s.user);
  const accessToken = useAuthStore((s) => s.accessToken);
  const logout = useAuthStore((s) => s.logout);

  const navigate = useNavigate();
  const isAuthenticated = !!accessToken && !!user;

  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = () => {
    logout();
    closeMenu();
    toast.success("Logged out successfully");
    navigate("/login", { replace: true });
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition ${
      isActive ? "text-lime-600" : "text-zinc-600 hover:text-zinc-900"
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block rounded-lg px-3 py-2.5 text-sm font-medium transition ${
      isActive
        ? "bg-lime-50 text-lime-700"
        : "text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-6">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2"
          aria-label="Authly home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-400 text-zinc-900">
            <Sparkles size={18} aria-hidden="true" />
          </div>
          <span className="text-base font-bold tracking-tight text-zinc-900 sm:text-lg">
            Authly
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {publicLinks.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={navLinkClass}>
              {label}
            </NavLink>
          ))}

       

          {user?.role === "admin" && (
            <NavLink to="/admin" className={navLinkClass}>
              Admin
            </NavLink>
          )}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                className="flex items-center gap-2 rounded-lg border border-zinc-200 px-3.5 py-2 text-sm font-medium text-zinc-700 transition hover:border-lime-300 hover:bg-lime-50 hover:text-lime-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2"
              >
                <LayoutDashboard size={16} aria-hidden="true" />
                <span className="max-w-32 truncate">
                  {user.name.split(" ")[0]}
                </span>
              </Link>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-lg border border-zinc-200 px-3.5 py-2 text-sm font-semibold text-zinc-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
              >
                <LogOut size={16} aria-hidden="true" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-semibold text-zinc-700 transition hover:text-lime-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2 rounded-md px-1"
              >
                Sign in
              </Link>

              <Link
                to="/register"
                className="rounded-lg bg-lime-400 px-4 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-lime-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((v) => !v)}
          className="rounded-lg p-2 text-zinc-700 transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-zinc-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {publicLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={closeMenu}
                className={mobileNavLinkClass}
              >
                {label}
              </NavLink>
            ))}

         

            {user?.role === "admin" && (
              <NavLink
                to="/admin"
                onClick={closeMenu}
                className={mobileNavLinkClass}
              >
                Admin
              </NavLink>
            )}

            <div className="mt-3 border-t border-zinc-200 pt-3">
              {isAuthenticated ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 rounded-lg bg-zinc-50 px-3 py-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-100 text-xs font-bold text-lime-800">
                      {user.name[0]?.toUpperCase() ?? "U"}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-zinc-900">
                        {user.name}
                      </p>
                      <p className="truncate text-xs text-zinc-500">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                  >
                    <LogOut size={17} aria-hidden="true" />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="rounded-lg border border-zinc-200 px-4 py-2.5 text-center text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
                  >
                    Sign in
                  </Link>

                  <Link
                    to="/register"
                    onClick={closeMenu}
                    className="rounded-lg bg-lime-400 px-4 py-2.5 text-center text-sm font-semibold text-zinc-900 transition hover:bg-lime-500"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;