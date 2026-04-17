"use client";
import { loginBtnCN } from "@/constants/constants";
import { GoogleIcon } from "@/helpers/Icons";
import { createClient } from "@/lib/supabase/client";

const GoogleLoginBtn = () => {
  const supabase = createClient();

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback`,
      },
    });

    if (error) {
      console.error("Google login error:", error.message);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className={loginBtnCN}
    >
      <GoogleIcon /> Continue with Google
    </button>
  );
};

export default GoogleLoginBtn;
