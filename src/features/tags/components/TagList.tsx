import React from "react";

import TagItem from "./TagItem";
import TagItemSkeleton from "./TagItemSkeleton";

import { useTags } from "../hooks/useTags";

const TagList: React.FC = () => {
	const { data: tags, isPending } = useTags();

	const skeletonCount = tags?.length || 6;

	return (
		<ul>
			{isPending
				? Array.from({ length: skeletonCount }).map((_, index) => (
						<li key={index}>
							<TagItemSkeleton />
						</li>
					))
				: tags?.map((tag) => (
						<li key={tag.id}>
							<TagItem label={tag.name} />
						</li>
					))}
		</ul>
	);
};

export default TagList;
