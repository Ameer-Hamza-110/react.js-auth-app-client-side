
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, LayoutDashboard } from "lucide-react";
import { useAuthStore } from "../store/auth.store";
import toast from "react-hot-toast";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const user = useAuthStore((state) => state.user);
    const accessToken = useAuthStore((state) => state.accessToken);
    const logout = useAuthStore((state) => state.logout);

    const navigate = useNavigate();

    const isAuthenticated = !!accessToken && !!user;

    const handleLogout = () => {
        logout();
        setIsMenuOpen(false);
        toast.success("Logged out successfully");
        navigate("/login", { replace: true });
    };

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `text-sm font-medium transition ${isActive
            ? "text-lime-600"
            : "text-zinc-600 hover:text-zinc-900"
        }`;

    return (
        <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-lg font-bold text-zinc-900">
                        A
                    </div>
                    <span className="text-lg font-bold tracking-tight text-zinc-900">
                        Portfolio
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <NavLink to="/" className={navLinkClass}>
                        Home
                    </NavLink>

                    <NavLink to="/projects" className={navLinkClass}>
                        Projects
                    </NavLink>

                    <NavLink to="/about" className={navLinkClass}>
                        About
                    </NavLink>

                    <NavLink to="/contact" className={navLinkClass}>
                        Contact
                    </NavLink>

                    {isAuthenticated && (
                        <NavLink to="/dashboard" className={navLinkClass}>
                            Dashboard
                        </NavLink>
                    )}

                    {user?.role === "admin" && (
                        <NavLink to="/admin" className={navLinkClass}>
                            Admin Panel
                        </NavLink>
                    )}
                </div>

                {/* Desktop Actions */}
                <div className="hidden items-center gap-3 md:flex">
                    {isAuthenticated ? (
                        <>
                            <span className="max-w-32 truncate text-sm font-medium text-zinc-600">
                                Hi, {user.name.split(" ")[0]}
                            </span>

                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 rounded-lg border border-zinc-200 px-4 py-2.5 text-sm font-semibold text-zinc-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                            >
                                <LogOut size={16} />
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="text-sm font-semibold text-zinc-700 transition hover:text-zinc-900"
                            >
                                Sign in
                            </Link>

                            <Link
                                to="/register"
                                className="rounded-lg bg-lime-400 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-lime-500"
                            >
                                Get Started
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="rounded-lg p-2 text-zinc-700 transition hover:bg-zinc-100 md:hidden"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="border-t border-zinc-200 bg-white px-6 py-5 md:hidden">
                    <div className="flex flex-col gap-5">

                        <NavLink
                            to="/"
                            onClick={() => setIsMenuOpen(false)}
                            className={navLinkClass}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/projects"
                            onClick={() => setIsMenuOpen(false)}
                            className={navLinkClass}
                        >
                            Projects
                        </NavLink>
                        <NavLink to="/about" className={navLinkClass}>
                            About
                        </NavLink>

                        <NavLink to="/contact" className={navLinkClass}>
                            Contact
                        </NavLink>

                        {isAuthenticated && (
                            <NavLink
                                to="/dashboard"
                                onClick={() => setIsMenuOpen(false)}
                                className={navLinkClass}
                            >
                                Dashboard
                            </NavLink>
                        )}

                        {user?.role === "admin" && (
                            <NavLink
                                to="/admin"
                                onClick={() => setIsMenuOpen(false)}
                                className={navLinkClass}
                            >
                                Admin Panel
                            </NavLink>
                        )}

                        <div className="border-t border-zinc-200 pt-4">
                            {isAuthenticated ? (
                                <div className="space-y-4">
                                    <p className="text-sm text-zinc-500">
                                        Signed in as{" "}
                                        <span className="font-semibold text-zinc-900">
                                            {user.name}
                                        </span>
                                    </p>

                                    <button
                                        onClick={handleLogout}
                                        className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-200 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                                    >
                                        <LogOut size={17} />
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-3">
                                    <Link
                                        to="/login"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="rounded-lg border border-zinc-200 px-4 py-3 text-center text-sm font-semibold text-zinc-700"
                                    >
                                        Sign in
                                    </Link>

                                    <Link
                                        to="/register"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="rounded-lg bg-lime-400 px-4 py-3 text-center text-sm font-semibold text-zinc-900 hover:bg-lime-500"
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
