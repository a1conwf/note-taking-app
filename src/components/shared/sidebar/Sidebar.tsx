import React from "react";
import { Link } from "react-router";

import Logo from "@/components/ui/Logo";
import SidebarLink from "@/components/shared/sidebar/SidebarLink";
import TagList from "@/features/tags/components/TagList";

import { SIDEBAR_LINKS } from "@/constants/links";
import { ROUTES } from "@/constants/routes";

const Sidebar: React.FC = () => {
	return (
		<aside className="hidden min-h-screen w-[272px] px-4 py-8 border-r border-neutral-200 lg:block">
			<Link to={ROUTES.ALL_NOTES} className="flex w-fit">
				<Logo className="mb-8" />
			</Link>

			<nav className="pb-2">
				<ul className="flex flex-col gap-1">
					{SIDEBAR_LINKS.map((link) => (
						<SidebarLink key={link.href} label={link.label} href={link.href} Icon={link.Icon} />
					))}
				</ul>
			</nav>

			<div className="border-t border-neutral-200 pt-3">
				<p className="text-preset-4 text-neutral-500 mb-2 pl-2">Tags</p>
				<TagList />
			</div>
		</aside>
	);
};

export default Sidebar;
