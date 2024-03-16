import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_BACKEND_URL,
  import.meta.env.VITE_BACKEND_API_KEY,
);
