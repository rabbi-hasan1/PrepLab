"use client";

import { Bell } from "lucide-react";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../navbar/ThemeToggle";
import MobileSidebar from "./Mobile-sidebar";
import Profile from "./Profile";

export default function DashNavbar() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const current = segments[1] || segments[0];

  const title = current.charAt(0).toUpperCase() + current.slice(1);
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-lg">
      <div className="flex items-center gap-1.5">
        <MobileSidebar />

        {/* <h1 className="text-lg font-semibold md:hidden">PrepLab</h1> */}
        <h1 className=" text-lg font-semibold ">{title}</h1>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Bell className="h-8 w-8" />
        </Button>
        <ThemeToggle />

        <Profile />
      </div>
    </header>
  );
}
