import { supabase } from "@/shared/lib/supabaseClient";

export const getTags = async () => {
	const { data, error } = await supabase.from("tags").select("*");

	if (error) {
		throw error;
	}

	return data;
};
