import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center  w-full h-screen my-32 ">
      <h1 className="text-8xl py-2">404</h1>
      <h2 className="font-semibold">Not Found</h2>
      <p className="font-semibold">Could not find requested resource</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 mt-8 rounded-lg bg-green-600 px-6 py-3 text-white font-medium shadow-md transition-all duration-300 hover:bg-green-700 hover:shadow-lg"
      >
        <Home size={18} />
        Back to Home
      </Link>
    </div>
  );
}
