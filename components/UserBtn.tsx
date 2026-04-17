import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserBtn = ({ user }: any) => {
  console.log(user);
  return (
    <div
      className="w-5/6 active:w-4/6 text-center px-2 flex justify-between items-center
           bg-white py-4 rounded-full text-black font-semibold
           hover:bg-gray-200
           active:bg-slate-200
           active:text-gray-900
             transition-all
             duration-200"
    >
      <Avatar size="lg">
        <AvatarImage src={user.user_metadata.avatar_url} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      
    </div>
  );
};

export default UserBtn;
