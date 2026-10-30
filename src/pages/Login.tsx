
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import toast from "react-hot-toast";

import {
  loginApi,
  type LoginInput,
} from "../api/auth/auth.api";
import { useAuthStore } from "../store/auth.store";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const { register, handleSubmit } = useForm<LoginInput>();

  const mutation = useMutation({
    mutationFn: loginApi,

    onSuccess: (data) => {
      setAuth(data.access_token, data.user)

      toast.success("Login successful");
      navigate("/dashboard", { replace: true });
    },

    onError: (error) => {
      if (isAxiosError(error)) {
        const message = error.response?.data?.message;

        if (Array.isArray(message)) {
          message.forEach((item: string) => toast.error(item));
          return;
        }

        toast.error(message || "Login failed");
        return;
      }

      toast.error("Something went wrong");
    },
  });

  const handleFormSubmit = (data: LoginInput) => {
    mutation.mutate(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400 text-xl font-bold text-zinc-900">
            A
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Sign in to access your account.
          </p>
        </div>

        {/* Form */}
        <form
          className="space-y-5"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-zinc-800"
            >
              Email address
            </label>

            <input
              {...register("email")}
              id="email"
              type="email"
              placeholder="name@example.com"
              autoComplete="email"
              className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-lime-500 focus:ring-2 focus:ring-lime-100"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-zinc-800"
            >
              Password
            </label>

            <div className="relative">
              <input
                {...register("password")}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 pr-12 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-lime-500 focus:ring-2 focus:ring-lime-100"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 transition hover:text-zinc-900"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={mutation.isPending}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-lime-400 px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {mutation.isPending ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-900/30 border-t-zinc-900" />
                Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-7 text-center text-sm text-zinc-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-zinc-900 underline decoration-lime-500 decoration-2 underline-offset-4 hover:text-lime-700"
          >
            Create account
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
