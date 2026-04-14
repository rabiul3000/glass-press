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
]