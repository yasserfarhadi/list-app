"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { User as UserIcon, LogOut } from "lucide-react";
import { logout } from "@/actions/logout";
const User = () => {
  const session = useSession();
  const user = session.data?.user;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="flex w-[75px] items-center gap-2 text-foreground">
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="h-6 w-6 bg-foreground/90 text-black">
            <UserIcon width={18} height={18} />
          </AvatarFallback>
          <div className="text-xl tracking-wide">{user?.name}</div>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 border-none shadow-md" align="end">
        <button className="w-full" onClick={() => logout()}>
          <DropdownMenuItem className="align-center flex justify-between duration-500">
            Logout
            <LogOut width={20} height={20} />
          </DropdownMenuItem>
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default User;
