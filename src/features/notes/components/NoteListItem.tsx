import React from "react";

import { formatDate } from "@/shared/lib/utils";

import type { Note } from "../types";

type NoteListItemProps = {
	note: Note;
};

const NoteListItem: React.FC<NoteListItemProps> = ({ note }) => {
	return (
		<div className="flex flex-col gap-3 group cursor-pointer hover:bg-neutral-100 transition-all duration-300 rounded-lg p-3">
			<h3 className="text-preset-3 text-neutral-950">{note.title}</h3>
			<ul className="flex items-center gap-1">
				{note.note_tags.map((noteTag) => (
					<li key={noteTag.tags.id} className="px-2 bg-neutral-200 rounded-md">
						<span className="text-preset-6 text-neutral-950">{noteTag.tags.name}</span>
					</li>
				))}
			</ul>
			<span className="text-preset-6 text-neutral-700">{formatDate(note.updated_at)}</span>
		</div>
	);
};

export default NoteListItem;
