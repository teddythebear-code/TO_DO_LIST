import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_PROJECT_API_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase; 

console.log("SUPABASE URL:", supabaseUrl);
console.log("SUPABASE KEY:", supabaseKey);