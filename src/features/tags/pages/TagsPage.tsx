import React from "react";

import { Navigate } from "react-router";

import { Header } from "@/shared/components/layout";
import { Wrapper } from "@/shared/components/ui";

import TagList from "../components/TagList";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

import { ROUTES } from "@/shared/data/routes";

const TagsPage: React.FC = () => {
	const isDesktop = useMediaQuery("(min-width: 1280px)");

	if (isDesktop) {
		return <Navigate to={ROUTES.ALL_NOTES} replace />;
	}

	return (
		<>
			<Header title="Tags" />
			<Wrapper className="mt-5 md:mt-6 xl:mt-0">
				<h1 className="my-4 text-preset-1 text-neutral-950 xl:hidden">Tags</h1>
				<TagList />
			</Wrapper>
		</>
	);
};

export default TagsPage;
