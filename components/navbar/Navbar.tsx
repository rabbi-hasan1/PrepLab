import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Logo from "../common/Logo";
import { ThemeToggle } from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50  border-b bg-background/80  backdrop-blur-lg">
      <div className="flex items-center max-w-7xl mx-auto justify-between px-3 py-2.5">
        <Logo />

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="/auth/login"
            className="
              group
              flex items-center gap-1
              bg-green-900 cursor-pointer
              hover:bg-green-800
              text-white
              px-3
              py-1
              rounded-md
              border-b-3
              border-green-950
              transition-all
              duration-200
            "
          >
            <span>Login</span>

            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
