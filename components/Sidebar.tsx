"use client"
import Link from "next/link";
import { BellDot, BrainCog, HomeIcon, Search, User } from "lucide-react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const sidebarLinks = [
    {
      name: "",
      path: "/",
      icon: <BrainCog color="green" />,
    },
    {
      name: "Home",
      path: "/",
      icon: <HomeIcon />,
    },
    {
      name: "Explore",
      path: "/explore",
      icon: <Search />,
    },
    {
      name: "Notifications",
      path: "/notifications",
      icon: <BellDot />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <User />,
    },
  ];

  const pathName = usePathname();

  return (
    <aside className="flex flex-col gap-3 w-full justify-center items-center py-8">
      <div className="flex flex-col gap-3 w-fit justify-start items-start">
        {sidebarLinks.map(({name, path, icon}) => (
          <Link
            key={name}
            href={path}
            className="flex justify-center items-center gap-2 cursor-pointer px-4 py-2 rounded-full  hover:bg-gray-300 transition-colors duration-300"
          >
            <div>{icon}</div>
            <p className={`${ path===pathName ? 'font-bold':'font-normal'}`}>{name}</p>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
