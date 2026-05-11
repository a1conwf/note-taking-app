import React from "react";
import { Link, useLocation } from "react-router";
import { cn } from "@/shared/lib/utils";

import type { Tag } from "../types";

import TagIcon from "@/assets/icon-tag.svg?react";
import arrowRight from "@/assets/icon-chevron-right.svg";

const TagItem: React.FC<Tag> = ({ name }) => {
	const { pathname } = useLocation();
	const isActive = pathname === `/tag/${name}`;

	return (
		<Link
			to={`/tags/${name}`}
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
				{name}
			</span>

			{isActive && <img src={arrowRight} alt="arrow-right-icon" className="w-6 h-6 ml-auto" />}
		</Link>
	);
};

export default TagItem;
