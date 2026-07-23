"use client";

import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export default function Profile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button className="rounded-md focus:outline-none  ">
            <Image
              src="/profile.png"
              alt="Profile"
              width={30}
              height={30}
              className="rounded-full bg-amber-200 "
            />
          </button>
        }
      ></DropdownMenuTrigger>
      <DropdownMenuContent className="mx-3 mt-2   ">
        <DropdownMenuItem>
          <UserIcon />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCardIcon />
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SettingsIcon />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOutIcon />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
