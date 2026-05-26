import React from "react";
import { Link, useLocation } from "react-router";

import { NoteListItem, NoteListItemSkeleton } from "./index";

import { useNotes } from "../hooks/useNotes";
import type { NoteFilters } from "../types";

import { ROUTES } from "@/shared/data";

type NoteListProps = {
	filters?: NoteFilters;
};

const getEmptyNotesMessage = (pathname: string): React.ReactNode => {
	if (pathname === ROUTES.ARCHIVED_NOTES) {
		return (
			<>
				No notes have been archived yet. Move notes here for safekeeping, or{" "}
				<Link to={ROUTES.CREATE_NOTE} className="underline">
					create a new note.
				</Link>
			</>
		);
	}

	if (pathname === ROUTES.ALL_NOTES) {
		return <>You don't have any notes yet. Start a new note to capture your thoughts and ideas.</>;
	}

	return null;
};

const EmptyNotesState: React.FC<{ pathname: string }> = ({ pathname }) => {
	const message = getEmptyNotesMessage(pathname);

	if (!message) {
		return null;
	}

	return (
		<div className="p-2 bg-neutral-100 border border-neutral-200 rounded-lg">
			<p className="text-preset-5 text-neutral-950">{message}</p>
		</div>
	);
};

const NoteList: React.FC<NoteListProps> = ({ filters }) => {
	const { pathname } = useLocation();
	const { data: notes = [], isPending } = useNotes(filters);

	if (isPending) {
		return (
			<ul className="flex flex-col gap-2 pb-4 md:pb-8 lg:pb-0">
				{Array.from({ length: 6 }, (_, index) => (
					<li key={index} className="pb-2 border-b border-neutral-200 last:border-b-0">
						<NoteListItemSkeleton />
					</li>
				))}
			</ul>
		);
	}

	if (notes.length === 0) {
		return <EmptyNotesState pathname={pathname} />;
	}

	return (
		<ul className="flex flex-col gap-2 pb-4 md:pb-8 lg:pb-0">
			{notes.map((note) => (
				<li key={note.id} className="pb-2 border-b border-neutral-200 last:border-b-0">
					<NoteListItem note={note} />
				</li>
			))}
		</ul>
	);
};

export default NoteList;
