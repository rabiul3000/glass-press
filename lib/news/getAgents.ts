import supabaseAdmin from "../supabase/supabaseAdmin";

export async function getAgents() {
  const { data, error } = await supabaseAdmin
    .from("agents")
    .select("*");

  if (error) throw new Error(error.message);
  console.log("data =============>", data)


  return data;

}
