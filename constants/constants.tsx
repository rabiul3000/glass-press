import { BellDot, BrainCog, HomeIcon, Search, User } from "lucide-react";

export const sidebarLinks = [
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

export const newsSources = [
  {
    name: "Al Jazeera",
    type: "rss",
    url: "https://www.aljazeera.com/xml/rss/all.xml",
    country: "global",
  },
  {
    name: "BBC",
    type: "rss",
    url: "http://feeds.bbci.co.uk/news/rss.xml",
    country: "uk",
  },
];



export const loginBtnCN =
  "w-1/2 cursor-pointer bg-white text-black rounded-full p-3 flex gap-2 justify-center items-center active:bg-slate-800 hover:bg-slate-300 transition-colors duration-200";
