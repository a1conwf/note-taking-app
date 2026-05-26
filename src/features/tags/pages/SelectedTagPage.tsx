import React from "react";

import { Link, useParams } from "react-router";

import { Header } from "@/shared/components/layout";
import { Wrapper } from "@/shared/components/ui";
import { NoteSidebar } from "@/features/notes/components";

import { ROUTES } from "@/shared/data/routes";
import ArrowLeftIcon from "@/assets/icon-arrow-left.svg?react";

const SelectedTagPage: React.FC = () => {
	const { name } = useParams();

	const noteSidebarText = `All notes with the "${name}" tag are shown here.`;

	const headerTitle = (
		<>
			<span className="text-neutral-600">Notes Tagged: </span>
			<span className="text-neutral-950">{name}</span>
		</>
	);

	return (
		<>
			<Header title={headerTitle} />
			<Wrapper className="mt-5 md:mt-6 xl:mt-0">
				<Link
					to={ROUTES.TAGS}
					className="flex items-center gap-1 text-preset-5 text-neutral-600 xl:hidden"
				>
					<ArrowLeftIcon className="w-5 h-5" />
					Go Back
				</Link>

				<h1 className="my-4 text-preset-1 xl:hidden">{headerTitle}</h1>
				<NoteSidebar filters={{ tagName: name }} text={noteSidebarText} />
			</Wrapper>
		</>
	);
};

export default SelectedTagPage;
