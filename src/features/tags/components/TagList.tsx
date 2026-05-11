import React from "react";

import { TagItem, TagItemSkeleton } from "./index";
import { useTags } from "../hooks/useTags";

const TagList: React.FC = () => {
	const { data: tags, isPending } = useTags();

	if (isPending) {
		return (
			<ul className="custom-scrollbar flex max-h-[calc(100vh-10rem)] flex-col overflow-y-auto pr-2">
				{Array.from({ length: 6 }, (_, index) => (
					<li key={index} className="pb-2 border-b border-neutral-200">
						<TagItemSkeleton />
					</li>
				))}
			</ul>
		);
	}

	if (tags?.length === 0) {
		return (
			<div className="p-2 bg-neutral-100 border border-neutral-200 rounded-lg">
				<p className="text-preset-5 text-neutral-950">
					You don't have any tags yet. Start a new note to add tags.
				</p>
			</div>
		);
	}

	return (
		<ul className="custom-scrollbar flex max-h-[calc(100vh-10rem)] flex-col overflow-y-auto pr-2">
			{tags?.map((tag) => (
				<li key={tag.id}>
					<TagItem {...tag} />
				</li>
			))}
		</ul>
	);
};

export default TagList;
