import React from "react";

import MenuBarItem from "@/components/shared/menu-bar/MenuBarItem";
import { MOBILE_NAV_LINKS } from "@/constants/links";

const MenuBar: React.FC = () => {
	return (
		<footer className="fixed bottom-0 left-0 right-0 py-3 px-4 bg-white shadow-menu-bar lg:hidden">
			<ul className="flex items-center justify-between gap-2">
				{MOBILE_NAV_LINKS.map((link) => (
					<MenuBarItem key={link.href} label={link.label} href={link.href} Icon={link.Icon} />
				))}
			</ul>
		</footer>
	);
};

export default MenuBar;
