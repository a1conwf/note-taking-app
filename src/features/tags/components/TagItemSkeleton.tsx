import React from "react";

const TagItemSkeleton: React.FC = () => {
	return (
		<div className="flex items-center gap-2 px-3 py-3 animate-pulse">
			<div className="w-6 h-6 bg-neutral-200 rounded-lg" />
			<div className="w-full h-6 bg-neutral-200 rounded-lg" />
		</div>
	);
};

export default TagItemSkeleton;
