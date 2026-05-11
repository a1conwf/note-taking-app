import React from "react";
import { Link } from "react-router";

import { cn } from "@/shared/lib/utils";

import NoteList from "./NoteList";
import { Button } from "@/shared/components/ui";

import { ROUTES } from "@/shared/data";
import type { NoteFilters } from "../types";

import iconPlus from "@/assets/icon-plus.svg";

type NoteSidebarProps = {
	filters?: NoteFilters;
	text?: string;
	className?: string;
};

const NoteSidebar: React.FC<NoteSidebarProps> = ({ filters, text, className }) => {
	return (
		<div
			className={cn(
				"w-full custom-scrollbar max-h-[calc(100vh-12rem)] overflow-y-auto pr-2 lg:max-h-[calc(100vh-14rem)] xl:flex xl:flex-col xl:gap-4 xl:pt-5 xl:pb-9 xl:pr-4 xl:max-w-[300px] xl:max-h-screen xl:border-r xl:border-neutral-200",
				className,
			)}
		>
			<Link to={ROUTES.CREATE_NOTE}>
				<Button variant="primary" type="button" className="hidden xl:flex">
					<img src={iconPlus} alt="plus-icon" className="invert w-6 h-6" />
					Create New Note
				</Button>
			</Link>

			{text && <p className="text-preset-5 text-neutral-700 mb-4 xl:mb-0">{text}</p>}

			<NoteList filters={filters} />
		</div>
	);
};

export default NoteSidebar;
