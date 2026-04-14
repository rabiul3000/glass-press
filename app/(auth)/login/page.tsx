import { GithubIcon, AppleIcon, GoogleIcon } from "@/helpers/Icons";
import { ArrowLeftCircleIcon, BrainCog } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login",
};

const Login = () => {
  return (
    <div className="w-1/2 flex flex-col gap-12 bg-black  text-white items-center rounded-2xl">
      <div className="flex items-start w-full p-4">
        <Link href="/">
          <ArrowLeftCircleIcon size={32} />
        </Link>
      </div>

      <div>
        <h1 className="text-4xl font-semibold">Login to Glass Press</h1>
      </div>

      <div className="flex w-full flex-col gap-6 justify-center items-center">
        <button className="w-1/2 bg-white text-black rounded-full p-3 flex gap-2 justify-center items-center active:bg-slate-800 hover:bg-slate-300 transition-colors duration-200">
          <GoogleIcon /> Login with Google
        </button>
        <button className="w-1/2 bg-white text-black rounded-full p-3 flex gap-2 justify-center items-center active:bg-slate-800 hover:bg-slate-300 transition-colors duration-200">
          <AppleIcon /> Login with Apple
        </button>
        <button className="w-1/2 bg-white text-black rounded-full p-3 flex gap-2 justify-center items-center active:bg-slate-800 hover:bg-slate-300 transition-colors duration-200">
          <GithubIcon /> Login with Github
        </button>
      </div>

      <div className="flex flex-col h-full justify-end item-end p-24">
        <p className="text-gray-400">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-400">
            Register here.{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
