import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "../api";
import type { NoteFilters } from "../types";

export const useNotes = (filters: NoteFilters = {}) => {
	return useQuery({
		queryKey: ["notes", filters],
		queryFn: () => fetchNotes(filters),
	});
};
