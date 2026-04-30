import { supabase } from "@/lib/supabaseClient";

export const getTags = async () => {
	const { data, error } = await supabase.from("tags").select("*");

	if (error) {
		throw error;
	}

	return data;
};
