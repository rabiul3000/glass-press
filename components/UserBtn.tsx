import React from "react";
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

const UserBtn = ({ user }: any) => {
  // user_metadata: {
  //     avatar_url: 'https://lh3.googleusercontent.com/a/ACg8ocL0Mt5Ve15KID6wfIDov0YuqYYK_CMLrb-dkzf8i5FWVHIPY8EN=s96-c',
  //     email: 'mdrabiul.asia@gmail.com',
  //     email_verified: true,
  //     full_name: 'Md Rabiul',
  //     iss: 'https://accounts.google.com',
  //     name: 'Md Rabiul',
  //     phone_verified: false,
  //     picture: 'https://lh3.googleusercontent.com/a/ACg8ocL0Mt5Ve15KID6wfIDov0YuqYYK_CMLrb-dkzf8i5FWVHIPY8EN=s96-c',
  //     provider_id: '110194418457606206043',
  //     sub: '110194418457606206043'
  //   },
  const router = useRouter();

  return (
    <div
      className="w-5/6 text-center px-2 flex justify-between items-center
           bg-white py-4 rounded-full text-black font-semibold
           hover:bg-gray-200
           active:bg-slate-200
           active:text-gray-900
             transition-all
             duration-200"
    >
      <div className="flex gap-2 items-center">
        <Avatar size="lg">
          <AvatarImage src={user.user_metadata.avatar_url} alt="@shadcn" />
          <AvatarFallback>...</AvatarFallback>
        </Avatar>
        <div>
          <h1> {user.user_metadata.full_name} </h1>
        </div>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"}>
              <EllipsisVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52 py-4" align="end">
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                  router.push("/logout");
                }}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default UserBtn;
