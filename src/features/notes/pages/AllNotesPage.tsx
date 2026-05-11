import React from "react";

import { Header } from "@/shared/components/layout";
import { Wrapper } from "@/shared/components/ui";
import { NoteSidebar } from "@/features/notes/components";

const AllNotesPage: React.FC = () => {
	return (
		<>
			<Header title="All Notes" />
			<Wrapper className="mt-5 md:mt-6 xl:mt-0">
				<h1 className="mb-4 text-preset-1 text-neutral-950 xl:hidden">All Notes</h1>
				<NoteSidebar filters={{ archived: false }} />
			</Wrapper>
		</>
	);
};

export default AllNotesPage;
