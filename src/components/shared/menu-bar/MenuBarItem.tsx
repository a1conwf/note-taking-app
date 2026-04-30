import React from "react";
import { NavLink, useLocation } from "react-router";
import { cn } from "@/lib/utils";

type MenuBarItemProps = {
	label?: string;
	href: string;
	Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const MenuBarItem: React.FC<MenuBarItemProps> = ({ label, href, Icon }) => {
	const { pathname } = useLocation();
	const isActive = pathname === href;

	return (
		<li>
			<NavLink
				to={href}
				className={cn(
					"group flex items-center py-1 px-5 rounded-sm transition-all duration-300 hover:bg-neutral-50 hover:rounded-md sm:flex-col sm:gap-1",
					isActive ? "bg-blue-50" : "",
				)}
			>
				<Icon
					className={cn(
						"w-6 h-6 text-neutral-600 group-hover:text-blue-500 transition-all duration-300",
						isActive ? "text-blue-500" : "",
					)}
					aria-hidden="true"
				/>
				<span
					className={cn(
						"hidden text-xs text-neutral-600 font-normal leading-[1.2] tracking-[-0.2px] sm:block",
						isActive ? "text-blue-500" : "",
					)}
				>
					{label}
				</span>
			</NavLink>
		</li>
	);
};

export default MenuBarItem;
