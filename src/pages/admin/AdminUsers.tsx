import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Users,
  Search,
  AlertCircle,
  Loader2,
  ShieldCheck,
  User as UserIcon,
  Mail,
  Calendar,
  RefreshCw,
} from "lucide-react";
import { getUsersApi } from "../../api/admin/admin.api";

interface AdminUser {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  createdAt: string;
  updatedAt: string;
}

const inputClasses =
  "w-full rounded-lg border border-zinc-200 bg-white py-2.5 pl-10 pr-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 hover:border-zinc-300 focus:border-lime-500 focus:ring-2 focus:ring-lime-100";

const AdminUsers = () => {
  const { data, isPending, isError, error, refetch, isFetching } = useQuery<
    AdminUser[]
  >({
    queryKey: ["users"],
    queryFn: getUsersApi,
  });

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState<"all" | "admin" | "user">(
    "all"
  );

  const users = data ?? [];

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();
    return users.filter((u) => {
      const matchesSearch =
        !query ||
        u.name.toLowerCase().includes(query) ||
        u.email.toLowerCase().includes(query);
      const matchesRole = roleFilter === "all" || u.role === roleFilter;
      return matchesSearch && matchesRole;
    });
  }, [users, search, roleFilter]);

  const adminCount = users.filter((u) => u.role === "admin").length;
  const userCount = users.length - adminCount;

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  // ---------- Loading ----------
  if (isPending) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3">
        <Loader2
          size={28}
          className="animate-spin text-lime-500"
          aria-hidden="true"
        />
        <p className="text-sm text-zinc-500">Loading users...</p>
      </div>
    );
  }

  // ---------- Error ----------
  if (isError) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
          <AlertCircle size={22} aria-hidden="true" />
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-900">
            Couldn't load users
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            {error instanceof Error ? error.message : "Something went wrong."}
          </p>
        </div>
        <button
          type="button"
          onClick={() => refetch()}
          className="inline-flex items-center gap-2 rounded-lg bg-lime-400 px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-lime-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2"
        >
          <RefreshCw size={15} aria-hidden="true" />
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* ===== HEADER + STATS ===== */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-bold text-zinc-900">
            <Users size={18} className="text-lime-600" aria-hidden="true" />
            Users
          </h2>
          <p className="mt-1 text-xs text-zinc-500">
            {users.length} registered{" "}
            {users.length === 1 ? "account" : "accounts"}
          </p>
        </div>

        <button
          type="button"
          onClick={() => refetch()}
          disabled={isFetching}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-3.5 py-2 text-xs font-semibold text-zinc-700 transition hover:border-lime-300 hover:bg-lime-50 hover:text-lime-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-600 focus-visible:ring-offset-2 disabled:opacity-60"
        >
          <RefreshCw
            size={14}
            aria-hidden="true"
            className={isFetching ? "animate-spin" : ""}
          />
          Refresh
        </button>
      </div>

      {/* Stat cards */}
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-zinc-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-zinc-500">Total users</p>
            <Users size={15} className="text-zinc-400" aria-hidden="true" />
          </div>
          <p className="mt-2 text-2xl font-bold text-zinc-900">
            {users.length}
          </p>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-zinc-500">Admins</p>
            <ShieldCheck
              size={15}
              className="text-lime-500"
              aria-hidden="true"
            />
          </div>
          <p className="mt-2 text-2xl font-bold text-zinc-900">{adminCount}</p>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-zinc-500">Regular users</p>
            <UserIcon size={15} className="text-zinc-400" aria-hidden="true" />
          </div>
          <p className="mt-2 text-2xl font-bold text-zinc-900">{userCount}</p>
        </div>
      </div>

      {/* ===== FILTERS ===== */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
            aria-hidden="true"
          />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or email..."
            aria-label="Search users"
            className={inputClasses}
          />
        </div>

        <div className="flex gap-1 rounded-lg border border-zinc-200 bg-white p-1">
          {(["all", "admin", "user"] as const).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRoleFilter(r)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium capitalize transition ${
                roleFilter === r
                  ? "bg-lime-100 text-lime-800"
                  : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
              }`}
            >
              {r === "all" ? "All" : r === "admin" ? "Admins" : "Users"}
            </button>
          ))}
        </div>
      </div>

      {/* ===== TABLE ===== */}
      {filteredUsers.length === 0 ? (
        <div className="rounded-xl border border-dashed border-zinc-300 bg-white p-10 text-center">
          <Users
            size={28}
            className="mx-auto text-zinc-300"
            aria-hidden="true"
          />
          <p className="mt-3 text-sm font-semibold text-zinc-900">
            No users found
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            {search || roleFilter !== "all"
              ? "Try adjusting your search or filters."
              : "There are no registered users yet."}
          </p>
        </div>
      ) : (
        <>
          {/* Desktop table */}
          <div className="hidden overflow-hidden rounded-xl border border-zinc-200 bg-white md:block">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-zinc-200 bg-zinc-50 text-xs uppercase tracking-wider text-zinc-500">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      User
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Role
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Joined
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {filteredUsers.map((u) => (
                    <tr
                      key={u._id}
                      className="transition hover:bg-zinc-50/60"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime-100 text-xs font-bold text-lime-800">
                            {u.name[0]?.toUpperCase() ?? "U"}
                          </div>
                          <div className="min-w-0">
                            <p className="truncate font-medium text-zinc-900">
                              {u.name}
                            </p>
                            <p className="truncate text-xs text-zinc-500">
                              {u.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${
                            u.role === "admin"
                              ? "bg-lime-100 text-lime-800"
                              : "bg-zinc-100 text-zinc-700"
                          }`}
                        >
                          {u.role === "admin" ? (
                            <ShieldCheck size={12} aria-hidden="true" />
                          ) : (
                            <UserIcon size={12} aria-hidden="true" />
                          )}
                          {u.role === "admin" ? "Admin" : "User"}
                        </span>
                      </td>

                      <td className="px-4 py-3 text-xs text-zinc-500">
                        {formatDate(u.createdAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile cards */}
          <div className="space-y-3 md:hidden">
            {filteredUsers.map((u) => (
              <div
                key={u._id}
                className="rounded-xl border border-zinc-200 bg-white p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-100 text-xs font-bold text-lime-800">
                    {u.name[0]?.toUpperCase() ?? "U"}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="truncate text-sm font-semibold text-zinc-900">
                        {u.name}
                      </p>
                      <span
                        className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${
                          u.role === "admin"
                            ? "bg-lime-100 text-lime-800"
                            : "bg-zinc-100 text-zinc-700"
                        }`}
                      >
                        {u.role === "admin" ? (
                          <ShieldCheck size={10} aria-hidden="true" />
                        ) : (
                          <UserIcon size={10} aria-hidden="true" />
                        )}
                        {u.role === "admin" ? "Admin" : "User"}
                      </span>
                    </div>
                    <p className="mt-1 flex items-center gap-1.5 truncate text-xs text-zinc-500">
                      <Mail size={11} aria-hidden="true" />
                      {u.email}
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-zinc-400">
                      <Calendar size={11} aria-hidden="true" />
                      Joined {formatDate(u.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AdminUsers;