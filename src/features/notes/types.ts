import type { Tag } from "@/features/tags/types";

export type Note = {
	id: string;
	title: string;
	description: string;
	updated_at: string;
	is_archived: boolean;
	note_tags: NoteTag[];
};

export type NoteTag = {
	tags: Tag;
};

export type NoteFilters = {
	archived?: boolean;
	tagIds?: string[];
	search?: string;
};
