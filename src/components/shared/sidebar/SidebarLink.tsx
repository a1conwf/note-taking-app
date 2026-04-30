import React from "react";
import { NavLink, useLocation } from "react-router";
import { cn } from "@/lib/utils";

import arrowRight from "@/assets/icon-chevron-right.svg";

type SidebarLinkProps = {
	label: string;
	href: string;
	Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const SidebarLink: React.FC<SidebarLinkProps> = ({ label, href, Icon }) => {
	const { pathname } = useLocation();
	const isActive = pathname === href;

	return (
		<li>
			<NavLink
				to={href}
				className={cn(
					"group flex items-center gap-2 px-3 py-3 transition-all duration-300 hover:bg-neutral-100 hover:rounded-lg",
					isActive ? "bg-neutral-100 rounded-lg" : "",
				)}
			>
				<Icon
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
			</NavLink>
		</li>
	);
};

export default SidebarLink;
