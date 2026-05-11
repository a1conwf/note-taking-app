import { supabase } from "@/shared/lib/supabaseClient";
import type { NoteFilters } from "../types";

export const fetchNotes = async (filters: NoteFilters = {}) => {
	const { archived, tagIds = [], search } = filters;

	let query = supabase
		.from("notes")
		.select("*, note_tags(tags(id, name))")
		.order("updated_at", { ascending: false });

	if (archived !== undefined) {
		query = query.eq("is_archived", archived);
	}

	if (tagIds.length > 0) {
		const { data: noteTags, error: noteTagsError } = await supabase
			.from("note_tags")
			.select("note_id")
			.in("tag_id", tagIds);

		if (noteTagsError) {
			throw noteTagsError;
		}

		const noteIds = noteTags.map(({ note_id }) => note_id);

		if (noteIds.length === 0) {
			return [];
		}

		query = query.in("id", noteIds);
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
