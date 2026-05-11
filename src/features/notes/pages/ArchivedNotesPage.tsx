import React from "react";

import { Header } from "@/shared/components/layout";
import { Wrapper } from "@/shared/components/ui";
import { NoteSidebar } from "@/features/notes/components";

const ArchivedNotesPage: React.FC = () => {
	return (
		<>
			<Header title="Archived Notes" />
			<Wrapper className="mt-5 md:mt-6 xl:mt-0">
				<h1 className="mb-2 text-preset-1 text-neutral-950 md:mb-4 xl:hidden">Archived Notes</h1>

				<NoteSidebar
					filters={{ archived: true }}
					text="All your archived notes are stored here. You can restore or delete them anytime."
				/>
			</Wrapper>
		</>
	);
};

export default ArchivedNotesPage;
