
import { Link } from "react-router-dom";
import { ShieldX, ArrowLeft, Home } from "lucide-react";

export default function Unauthorized() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">

        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-lime-100">
          <ShieldX className="h-10 w-10 text-lime-600" />
        </div>

        {/* Error Code */}
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-lime-600">
          Access Denied
        </p>

        {/* Heading */}
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Unauthorized
        </h1>

        {/* Description */}
        <p className="mt-4 text-sm leading-6 text-zinc-500 sm:text-base">
          Sorry, you don't have permission to access this page.
          Please contact the administrator if you think this is a mistake.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-lime-400 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2"
          >
            <Home size={17} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2"
          >
            <ArrowLeft size={17} />
            Go Back
          </button>

        </div>

        {/* Footer */}
        <p className="mt-10 text-xs text-zinc-400">
          Error 403 · Forbidden
        </p>

      </div>
    </div>
  );
}
