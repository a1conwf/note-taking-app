import React from "react";
import { Link } from "react-router";

import { Wrapper, Logo, SearchInput } from "../ui";
import { ROUTES } from "@/constants/routes";

import iconSettings from "@/assets/icon-settings.svg";

type HeaderProps = {
	headerTitle: string;
};

const Header: React.FC<HeaderProps> = ({ headerTitle }) => {
	return (
		<header className="bg-neutral-100 lg:bg-white lg:border-b lg:border-neutral-200">
			<Wrapper className="py-3 md:py-5 lg:py-6">
				<Link to={ROUTES.ALL_NOTES} className="flex w-fit">
					<Logo className="lg:hidden" />
				</Link>

				<div className="hidden items-center justify-between lg:flex">
					<h1 className="text-preset-1 text-neutral-950">{headerTitle}</h1>

					<div className="flex items-center gap-4">
						<SearchInput />

						<button type="button" aria-label="Settings button">
							<img src={iconSettings} alt="settings-icon" className="w-6 h-6" />
						</button>
					</div>
				</div>
			</Wrapper>
		</header>
	);
};

export default Header;
