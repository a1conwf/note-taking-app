import { supabase } from "@/shared/lib/supabaseClient";
import type { NoteFilters } from "../types";

export const fetchNotes = async (filters: NoteFilters = {}) => {
	const { archived, tagName, search } = filters;

	let query = supabase
		.from("notes")
		.select(tagName ? "*, note_tags!inner(tags!inner(id, name))" : "*, note_tags(tags(id, name))")
		.order("updated_at", { ascending: false });

	if (archived !== undefined) {
		query = query.eq("is_archived", archived);
	}

	if (tagName) {
		query = query.eq("note_tags.tags.name", tagName);
	}

	if (search) {
		query = query.or(`title.ilike.%${search}%,description.ilike.%${search}%`);
	}

	const { data, error } = await query;

	if (error) {
		throw error;
	}

	return data;
};
