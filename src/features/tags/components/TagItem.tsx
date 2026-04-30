import React from "react";
import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";

import TagIcon from "@/assets/icon-tag.svg?react";

import arrowRight from "@/assets/icon-chevron-right.svg";

type TagItemProps = {
	label: string;
};

const TagItem: React.FC<TagItemProps> = ({ label }) => {
	const { pathname } = useLocation();
	const isActive = pathname === `/tag/${label}`;

	return (
		<Link
			to={`/tag/${label}`}
			className="group flex items-center gap-2 px-3 py-3 transition-all duration-300 hover:bg-neutral-100 hover:rounded-lg"
		>
			<TagIcon
				className={cn(
					"w-5 h-5 group-hover:text-blue-500 transition-all duration-300",
					isActive ? "text-blue-500" : "",
				)}
				aria-hidden="true"
			/>

			<span className={cn("text-preset-4", isActive ? "text-neutral-950" : "text-neutral-700")}>
				{label}
			</span>

			{isActive && <img src={arrowRight} alt="arrow-right-icon" className="w-6 h-6 ml-auto" />}
		</Link>
	);
};

export default TagItem;
