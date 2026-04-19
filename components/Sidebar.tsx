"use client";
import { sidebarLinks } from "@/constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserBtn from "./UserBtn";
import { useAuth } from "@/providers/AuthProvider";

const Sidebar = () => {
  const pathName = usePathname();
  const { user } = useAuth();

  return (
    <aside className="flex flex-col justify-between items-center h-full w-full ">
      <div className="flex flex-col gap-3 w-full justify-start items-center pb-8 pt-1 h-10/12">
        <div className="flex flex-col gap-3 w-fit justify-start items-start">
          {sidebarLinks.map(({ name, path, icon }) => (
            <Link
              key={name}
              href={path}
              className="flex justify-center items-center gap-2 cursor-pointer px-4 py-2 rounded-full  hover:bg-gray-300 transition-colors duration-300"
            >
              <div>{icon}</div>
              <p
                className={`${path === pathName ? "font-bold" : "font-normal"}`}
              >
                {name}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="h-2/12  w-full mb-2 flex justify-center items-center">
        {user ? (
          <UserBtn />
        ) : (
          <Link
            href={"/login"}
            className="w-5/6 active:w-4/6 text-center
           bg-gray-900 py-4 rounded-full text-white font-semibold
           hover:bg-gray-800
           active:bg-slate-200
           active:text-gray-900
             transition-all
             duration-200"
          >
            Login
          </Link>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
