import RegisterWithGoogleButton from "@/components/RegisterWithGoogleButton";
import RegWithAppleBtn from "@/components/RegWithAppleBtn";
import RegWithGithubBtn from "@/components/GithubLoginBtn";
import RegWithGoogleBtn from "@/components/RegWithGoogleBtn";
import { GithubIcon, AppleIcon, GoogleIcon } from "@/helpers/Icons";
import { ArrowLeftCircleIcon, BrainCog } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Register",
};

const Register = () => {
  return (
    <div className="w-1/2 flex flex-col gap-12 bg-black  text-white items-center rounded-2xl">
      <div className="flex items-start w-full p-4">
        <Link href="/">
          <ArrowLeftCircleIcon size={32} />
        </Link>
      </div>

      <div>
        <h1 className="text-4xl font-semibold">Register to Glass Press</h1>
      </div>

      <div className="flex w-full flex-col gap-6 justify-center items-center">
        {/* <RegWithGoogleBtn />
        <RegWithAppleBtn />
        <RegWithGithubBtn /> */}
      </div>

      <div className="w-1/2">
        <p className="text-sm">
          By signing up, you agree to the
          <Link href="/terms" className="text-blue-400">
            Terms of Service
          </Link>
          and{" "}
          <Link className="text-blue-400" href="/policy">
            {" "}
            Privacy Policy
          </Link>
          , including
          <Link className="text-blue-400" href="/cookie">
            Cookie Use.
          </Link>
        </p>
      </div>

      <div className="flex flex-col h-full justify-end item-end p-24">
        <p className="text-gray-400">
          Already have an account?
          <Link href="/login" className="text-blue-400">
            Login here.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
