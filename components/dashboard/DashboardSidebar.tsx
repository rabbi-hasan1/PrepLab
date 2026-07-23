"use client";

import clsx from "clsx";
import { ChevronRight, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navLinks } from "@/lib/nav-links";

export default function Sidebar() {
  const pathname = usePathname();
  const [colapes, setColape] = useState(false);

  const handleOpen = () => {
    setColape((prev) => !prev);
  };

  return (
    <aside
      className={clsx(
        "hidden relative h-screen flex-col border-r bg-background transition-all duration-300 md:flex",
        colapes ? "w-20" : "w-64",
      )}
    >
      <button
        onClick={handleOpen}
        className={clsx(
          "absolute -right-1 top-5 z-10 flex h-6 w-6 items-center justify-center rounded-full border bg-background shadow",
        )}
      >
        <ChevronRight
          className={clsx(
            "h-4 w-4 transition-transform",
            colapes && "rotate-180",
          )}
        />
      </button>

      <div
        className={clsx(
          "flex h-16 items-center border-b",
          colapes ? "justify-center" : "px-6",
        )}
      >
        <Link href="/dashboard" className="text-xl font-bold tracking-tight">
          {colapes ? "P" : "PrepLab"}
        </Link>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {navLinks.map((item) => {
          const Icon = item.icon;

          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "flex rounded-xl py-3 text-sm font-medium transition-all duration-200",
                colapes ? "justify-center px-0" : "items-center gap-3 px-4",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {!colapes && <span>{item.title}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="border-t p-4">
        <button
          className={clsx(
            "flex w-full rounded-xl py-3 text-sm transition-colors hover:bg-destructive hover:text-destructive-foreground cursor-pointer",
            colapes ? "justify-center px-0" : "items-center gap-3 px-4",
          )}
        >
          <LogOut className="h-5 w-5 shrink-0" />
          {!colapes && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
