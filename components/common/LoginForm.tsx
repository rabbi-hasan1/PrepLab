"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const handleLogin = (data: LoginFormData) => {
    console.log(data);
  };
  return (
    <div className=" h-[70vh]  flex items-center  justify-center  dark:from-zinc-900 dark:to-black px-4 transition-colors duration-500">
      <div
        className="w-full max-w-sm md:max-w-md rounded-2xl p-8
        bg-white/80 dark:bg-zinc-900/70
        backdrop-blur-xl
        border border-zinc-200/70 dark:border-zinc-800
        shadow-lg dark:shadow-black/40
        transition-all duration-300"
      >
        <h2
          className="text-2xl font-semibold text-center mb-6
          text-zinc-900 dark:text-white"
        >
          Welcome back
        </h2>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is must be required" })}
            className="w-full px-4 py-2.5 rounded-lg
              bg-zinc-200 dark:bg-zinc-800
              border border-transparent
              focus:border-blue-500 focus:ring-2 focus:ring-blue-500
              outline-none text-sm
              text-zinc-900 dark:text-white
              placeholder:text-zinc-500 dark:placeholder:text-zinc-400
              transition"
          />
          {errors?.email && (
            <p className="text-red-500 text-left -mt-2 ml-1">
              {errors?.email?.message}
            </p>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              maxLength: {
                value: 30,
                message: "Password cannot exceed 30 characters",
              },
            })}
            className="w-full px-4 py-2.5 rounded-lg
              bg-zinc-200 dark:bg-zinc-800
              border border-transparent
              focus:border-blue-500 focus:ring-2 focus:ring-blue-500
              outline-none text-sm
              text-zinc-900 dark:text-white
              placeholder:text-zinc-500 dark:placeholder:text-zinc-400
              transition"
          />
          {errors?.password && (
            <p className="text-red-500 text-left -mt-2 ml-1">
              {errors?.password?.message}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg font-medium
              bg-zinc-900 text-white cursor-pointer
              dark:bg-white dark:text-black
              hover:opacity-90
              transition"
          >
            Sign in
          </button>
        </form>
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-zinc-300 dark:bg-zinc-700"></div>
          <span className="px-3 text-xs text-zinc-500 dark:text-zinc-400">
            OR
          </span>
          <div className="flex-1 h-px bg-zinc-300 dark:bg-zinc-700"></div>
        </div>
        <div className="space-y-3 mb-6">
          <button
            className="w-full flex items-center justify-center gap-1 py-2.5 rounded-lg
            bg-white dark:bg-zinc-800
            border border-zinc-300 dark:border-zinc-700
            hover:bg-zinc-50 dark:hover:bg-zinc-700
            transition"
          >
            <Image
              src="/google.png"
              alt="google"
              width={20}
              height={20}
              className="w-auto h-auto"
            />
            <span className="text-sm  font-medium text-zinc-700 dark:text-zinc-200">
              Continue with Google
            </span>
          </button>
        </div>

        <p
          className="text-center text-xs md:text-sm mt-6
          text-zinc-500 dark:text-zinc-400"
        >
          Don’t have an account?{" "}
          <Link
            href="/auth/register"
            className="underline pl-0.5 cursor-pointer hover:text-zinc-700 text-green-500 dark:hover:text-zinc-200"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
