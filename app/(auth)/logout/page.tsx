"use client";
import LogoutBtn from "@/components/LogoutBtn";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-start lg:gap-52 gap-24 items-center lg:py-24 py-12 bg-white h-full lg:w-1/3 w-full rounded-2xl">
      <h1 className="lg:text-2xl text-lg">Are you really want to Logout?</h1>
      <div className="flex flex-col gap-3 w-full justify-center items-center">
        <LogoutBtn />
        <button
          className="w-5/6 lg:w-1/2 active:w-4/6 text-center
           bg-gray-200 py-4 rounded-full text-gray-500 font-semibold
           hover:bg-gray-800 hover:text-white
           active:bg-slate-200
           active:text-gray-900
           transition-all
             duration-200"
          onClick={() => {
            router.push("/");
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default page;
