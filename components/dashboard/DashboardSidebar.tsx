"use client";

import clsx from "clsx";
import { ChevronLeft, ChevronRight, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navLinks } from "@/lib/nav-links";

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={clsx(
        "relative hidden h-screen shrink-0 flex-col border-r bg-background transition-all duration-300 ease-in-out md:flex",
        collapsed ? "w-20" : "w-64",
      )}
    >
      <button
        onClick={() => setCollapsed((prev) => !prev)}
        className="absolute -right-3 top-4 z-20 flex h-7 w-7 items-center justify-center rounded-full border bg-background shadow-md transition hover:bg-muted"
      >
        {collapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </button>

      <div
        className={clsx(
          "flex h-16 shrink-0 items-center border-b",
          collapsed ? "justify-center" : "px-6",
        )}
      >
        <Link
          href="/dashboard"
          className="text-xl font-bold tracking-tight whitespace-nowrap"
        >
          {collapsed ? "P" : "PrepLab"}
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {navLinks.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname === item.href ||
                  pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                title={collapsed ? item.title : undefined}
                className={clsx(
                  "flex rounded-xl py-3 text-sm font-medium transition-all duration-200",
                  collapsed ? "justify-center" : "items-center gap-3 px-4",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <Icon className="h-5 w-5 shrink-0" />

                {!collapsed && (
                  <span className="font-semibold">{item.title}</span>
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="border-t p-4">
        <button
          className={clsx(
            "flex w-full rounded-xl py-3 text-sm transition-colors hover:bg-destructive hover:text-destructive-foreground",
            collapsed ? "justify-center" : "items-center gap-3 px-4",
          )}
        >
          <LogOut className="h-5 w-5 shrink-0" />

          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
