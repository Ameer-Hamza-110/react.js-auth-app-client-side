import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FolderGit2,
  Mail,
  Users,
  LogOut,
  Menu,
  X,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { useAuthStore } from "../../store/auth.store";

const navigation = [
  {
    name: "Overview",
    to: "/admin",
    icon: LayoutDashboard,
    end: true,
  },
  {
    name: "Manage Projects",
    to: "/admin/projects",
    icon: FolderGit2,
  },
  {
    name: "Messages",
    to: "/admin/messages",
    icon: Mail,
  },
  {
    name: "Users",
    to: "/admin/users",
    icon: Users,
  },
];

const AdminDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const currentPage =
    navigation.find((item) =>
      item.end
        ? location.pathname === item.to
        : location.pathname.startsWith(item.to)
    )?.name ?? "Admin";

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* ===== MOBILE TOP BAR ===== */}
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-zinc-200 bg-white px-4 py-3 lg:hidden">
        <Link to="/admin" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-400 text-zinc-900">
            <Sparkles size={16} aria-hidden="true" />
          </div>
          <span className="text-sm font-bold text-zinc-900">Admin</span>
        </Link>

        <button
          type="button"
          onClick={() => setSidebarOpen((v) => !v)}
          aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          aria-expanded={sidebarOpen}
          className="rounded-lg p-2 text-zinc-700 transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className="flex">
        {/* ===== MOBILE OVERLAY ===== */}
        {sidebarOpen && (
          <button
            type="button"
            aria-label="Close sidebar"
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-zinc-900/40 backdrop-blur-sm lg:hidden"
          />
        )}

        {/* ===== SIDEBAR ===== */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-64 transform border-r border-zinc-200 bg-white transition-transform duration-200 ease-in-out lg:sticky lg:top-0 lg:z-0 lg:h-screen lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Brand */}
          <div className="flex h-16 items-center justify-between border-b border-zinc-100 px-5">
            <Link
              to="/admin"
              className="flex items-center gap-2.5"
              onClick={() => setSidebarOpen(false)}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-400 text-zinc-900">
                <Sparkles size={18} aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-bold leading-none text-zinc-900">
                  Portfolio
                </p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-400">
                  Admin Panel
                </p>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close menu"
              className="rounded-lg p-1.5 text-zinc-500 hover:bg-zinc-100 lg:hidden"
            >
              <X size={18} />
            </button>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-1 p-3" aria-label="Admin">
            {navigation.map(({ name, to, icon: Icon, end }) => {
              const active = end
                ? location.pathname === to
                : location.pathname.startsWith(to);

              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setSidebarOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                    active
                      ? "bg-lime-50 text-lime-800"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon
                      size={17}
                      aria-hidden="true"
                      className={
                        active
                          ? "text-lime-600"
                          : "text-zinc-400 group-hover:text-zinc-600"
                      }
                    />
                    {name}
                  </span>
                  {active && (
                    <ChevronRight
                      size={14}
                      aria-hidden="true"
                      className="text-lime-600"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Footer / User */}
          <div className="absolute inset-x-0 bottom-0 border-t border-zinc-100 p-3">
            <div className="mb-2 flex items-center gap-3 rounded-lg bg-zinc-50 px-3 py-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-100 text-xs font-bold text-lime-800">
                {user?.name?.[0]?.toUpperCase() ?? "A"}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-zinc-900">
                  {user?.name ?? "Admin"}
                </p>
                <p className="truncate text-[10px] text-zinc-500">
                  {user?.email ?? "admin@example.com"}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-600 transition hover:bg-red-50 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <LogOut size={17} aria-hidden="true" />
              Log out
            </button>
          </div>
        </aside>

        {/* ===== MAIN CONTENT ===== */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Desktop top bar */}
          <header className="hidden border-b border-zinc-200 bg-white px-6 py-4 lg:block">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-lg font-bold text-zinc-900">
                  {currentPage}
                </h1>
                <p className="text-xs text-zinc-500">
                  Welcome back, {user?.name ?? "Admin"} 👋
                </p>
              </div>

              <Link
                to="/"
                className="text-xs font-medium text-zinc-500 transition hover:text-lime-700"
              >
                ← Back to site
              </Link>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;