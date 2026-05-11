import React from "react";

const NoteListItemSkeleton: React.FC = () => {
	return (
		<div className="flex flex-col gap-3 p-2 animate-pulse">
			<div className="w-1/2 h-6 bg-neutral-200 rounded-lg" />
			<div className="w-1/5 h-5 bg-neutral-200 rounded-lg" />
			<div className="w-1/10 h-5 bg-neutral-200 rounded-lg" />
		</div>
	);
};

export default NoteListItemSkeleton;
