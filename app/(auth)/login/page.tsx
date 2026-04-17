import AppleLoginBtn from "@/components/AppleLoginBtn";
import GithubLoginBtn from "@/components/GithubLoginBtn";
import GoogleLoginBtn from "@/components/GoogleLoginBtn";
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
        <h1 className="text-4xl font-semibold">Glass Press Start</h1>
      </div>

      <div className="flex w-full flex-col gap-6 justify-center items-center">
        <GoogleLoginBtn />
        <AppleLoginBtn />
        <GithubLoginBtn />
      </div>

      <div className="flex h-full justify-center items-center">
        <div className="w-1/2">
          <p className="text-sm">
            By signing in, you agree to the{" "}
            <Link href="/terms" className="text-blue-400">
              Terms of Service {" "}
            </Link>
            and{" "}
            <Link className="text-blue-400" href="/policy">
              {" "}
              Privacy Policy. {" "}
            </Link>
            including {" "}
            <Link className="text-blue-400" href="/cookie">
              Cookie Use.
            </Link>
          </p>
        </div>

       


      </div>
    </div>
  );
};

export default Login;
