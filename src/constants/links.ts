import { ROUTES } from "./routes";

import ArchiveIcon from "@/assets/icon-archive.svg?react";
import HomeIcon from "@/assets/icon-home.svg?react";
import SearchIcon from "@/assets/icon-search.svg?react";
import TagIcon from "@/assets/icon-tag.svg?react";
import SettingsIcon from "@/assets/icon-settings.svg?react";

export const SIDEBAR_LINKS = [
	{
		label: "All Notes",
		href: ROUTES.ALL_NOTES,
		Icon: HomeIcon,
	},
	{
		label: "Archived Notes",
		href: ROUTES.ARCHIVED_NOTES,
		Icon: ArchiveIcon,
	},
];

export const MOBILE_NAV_LINKS = [
	{
		label: "Home",
		href: ROUTES.ALL_NOTES,
		Icon: HomeIcon,
	},
	{
		label: "Search",
		href: ROUTES.SEARCH,
		Icon: SearchIcon,
	},
	{
		label: "Archived",
		href: ROUTES.ARCHIVED_NOTES,
		Icon: ArchiveIcon,
	},
	{
		label: "Tags",
		href: ROUTES.TAGS,
		Icon: TagIcon,
	},
	{
		label: "Settings",
		href: ROUTES.SETTINGS,
		Icon: SettingsIcon,
	},
];
