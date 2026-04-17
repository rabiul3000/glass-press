import { createServer } from "@/lib/supabase/server"


const checkUser = async () => {
    const supabase = createServer();
    const user = (await supabase).auth.getUser();

    if (user) {
        return {
            status: true,
            user: user
        }

    }
    return {
        status: false,
        user: null,
    }
}


export default checkUser;