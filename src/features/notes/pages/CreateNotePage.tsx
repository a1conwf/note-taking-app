import React from "react";

import { Header } from "@/shared/components/layout";
import { Wrapper } from "@/shared/components/ui";
import { NoteSidebar } from "@/features/notes/components";

const CreateNotePage: React.FC = () => {
	return (
		<>
			<Header title="All Notes" />
			<Wrapper className="mt-5 md:mt-6 xl:mt-0">
				<NoteSidebar filters={{ archived: false }} className="hidden xl:block" />
			</Wrapper>
		</>
	);
};

export default CreateNotePage;
