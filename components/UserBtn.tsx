"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { EllipsisVertical } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";
import { createClient } from "@/lib/supabase/client";

const UserBtn = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

 
  if (loading) {
    return (
      <div className="w-5/6 py-4 rounded-full bg-gray-100 animate-pulse" />
    );
  }

  if (!user) {
    return (
      <button
        onClick={() => router.push("/login")}
        className="w-5/6 text-center bg-black py-4 rounded-full text-white"
      >
        Login
      </button>
    );
  }

  const avatar = user.user_metadata?.avatar_url;
  const name =
    user.user_metadata?.full_name || user.user_metadata?.name || user.email;

  return (
    <div
      className="w-5/6 text-center px-3 flex justify-between items-center
      bg-white py-4 rounded-full text-black font-semibold
      hover:bg-gray-200 transition-all duration-200"
    >
      {/* USER INFO */}
      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>
            {name?.charAt(0).toUpperCase() || "U"}
          </AvatarFallback>
        </Avatar>

        <div className="text-left">
          <h1 className="text-sm font-medium truncate max-w-30">{name}</h1>
        </div>
      </div>

      {/* DROPDOWN */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <EllipsisVertical />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-52 py-2" align="end">
          <DropdownMenuGroup>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>

            <DropdownMenuItem onClick={() => router.push("/logout")}>Logout</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserBtn;
