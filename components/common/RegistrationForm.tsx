"use client";

import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    mode: "onBlur",
  });

  const password = watch("password");

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    console.log(data);

    reset();
  };

  return (
    <div className="h-[87vh] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-xs border border-zinc-200/70 dark:border-zinc-800">
        <div className="hidden md:flex flex-col justify-center p-10 bg-zinc-900 text-white">
          <h2 className="text-3xl font-bold mb-4">Join the Dev Community </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Share your knowledge, write blogs, explore modern programming
            trends, and connect with developers worldwide.
          </p>
        </div>

        <div className="p-8 sm:p-10 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold text-center mb-6 text-zinc-900 dark:text-white">
            Create account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
                className="w-full px-4 py-2.5 rounded-lg bg-zinc-200 dark:bg-zinc-800 border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-zinc-900 dark:text-white"
              />

              {errors.name && (
                <p className="text-red-500 text-left mt-1 ml-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email",
                  },
                })}
                className="w-full px-4 py-2.5 rounded-lg bg-zinc-200 dark:bg-zinc-800 border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-zinc-900 dark:text-white"
              />

              {errors.email && (
                <p className="text-red-500 text-left mt-1 ml-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="w-full px-4 py-2.5 pr-10 rounded-lg bg-zinc-200 dark:bg-zinc-800 border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-zinc-900 dark:text-white"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-500 text-left mt-1 ml-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  className="w-full px-4 py-2.5 pr-10 rounded-lg bg-zinc-200 dark:bg-zinc-800 border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-zinc-900 dark:text-white"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              {errors.confirmPassword && (
                <p className="text-red-500 text-left mt-1 ml-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 rounded-lg font-medium cursor-pointer bg-zinc-900 text-white dark:bg-white dark:text-black hover:opacity-90 transition disabled:opacity-60"
            >
              {isSubmitting ? "Creating..." : "Create Account"}
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-zinc-300 dark:bg-zinc-700" />
            <span className="px-3 text-xs text-zinc-500 dark:text-zinc-400">
              OR
            </span>
            <div className="flex-1 h-px bg-zinc-300 dark:bg-zinc-700" />
          </div>

          <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition">
            <Image src="/google.png" alt="Google" width={20} height={20} />
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              Sign up with Google
            </span>
          </button>

          <p className="text-center text-xs mt-6 text-zinc-500 dark:text-zinc-400">
            Already have an account?
            <Link href="/auth/login" className="underline text-green-500 ml-1">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
