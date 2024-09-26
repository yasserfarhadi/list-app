'use client';

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useSession } from 'next-auth/react';
import { User as UserIcon, LogOut } from 'lucide-react';
import { logout } from '@/actions/logout';
const User = () => {
  const session = useSession();
  const user = session.data?.user;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="flex gap-2 items-center w-[75px] text-foreground">
          <AvatarImage src={user?.image || ''} />
          <AvatarFallback className="bg-foreground/90 text-black w-6 h-6">
            <UserIcon width={18} height={18} />
          </AvatarFallback>
          <div className="text-xl tracking-wide">{user?.name}</div>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <button onClick={() => logout()}>
          <DropdownMenuItem className="flex align-center justify-between">
            Logout
            <LogOut />
          </DropdownMenuItem>
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default User;
