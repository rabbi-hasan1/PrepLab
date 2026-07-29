"use client";

import { Bell } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../navbar/ThemeToggle";
import MobileSidebar from "./Mobile-sidebar";
import Profile from "./Profile";

export default function DashNavbar() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const current = segments[1] || segments[0];
  const title = current.charAt(0).toUpperCase() + current.slice(1);

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b bg-background px-4 md:px-8">
      <div className="flex items-center gap-2">
        <MobileSidebar />
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>

        <ThemeToggle />

        <Profile />
      </div>
    </header>
  );
}
