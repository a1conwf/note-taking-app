import React from "react";
import { Link } from "react-router";

import { Wrapper, Logo, SearchInput } from "../ui";
import { ROUTES } from "@/shared/data/routes";

import iconSettings from "@/assets/icon-settings.svg";

type HeaderProps = {
	title: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
	return (
		<header className="bg-neutral-100 xl:bg-white xl:border-b xl:border-neutral-200">
			<Wrapper className="py-3 md:py-5 xl:py-6">
				<Link to={ROUTES.ALL_NOTES} className="flex w-fit">
					<Logo className="xl:hidden" />
				</Link>

				<div className="hidden items-center justify-between xl:flex">
					<h1 className="text-preset-1 text-neutral-950">{title}</h1>

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
