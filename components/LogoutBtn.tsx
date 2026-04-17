"use client";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

const LogoutBtn = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout error:", error.message);
      return;
    }

    router.refresh();
    router.push("/");
  };

  return (
    <button
      className="w-5/6 lg:w-1/2 active:w-4/6 text-center
           bg-gray-900 py-4 rounded-full text-white font-semibold
           hover:bg-gray-800
           active:bg-slate-200
           active:text-gray-900
             transition-all
             duration-200"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
