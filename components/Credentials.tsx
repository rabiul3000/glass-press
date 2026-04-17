import { createServer } from "@/lib/supabase/server";

const Credentials = () => {
  const supabase = createServer();
  const user = supabase.then((credentials) => credentials.auth.getUser());

  console.log(user);

  return (
    // <div>{JSON.stringify(user)}</div>
    // <Link
    //   href={user ? "/logout" : "/login"}
    //   className="w-5/6 active:w-4/6 text-center
    //        bg-gray-900 py-4 rounded-full text-white font-semibold
    //        hover:bg-gray-800
    //        active:bg-slate-200
    //        active:text-gray-900
    //          transition-all
    //          duration-200"
    // >
    //   {user ? "Logout" : "Login"}
    //   Log In
    // </Link>
  );
};

export default Credentials;
