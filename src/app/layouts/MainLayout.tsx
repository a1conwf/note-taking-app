import React from "react";
import { Navigate, Link } from "react-router";

import { useAuthStore } from "@/features/auth/store/useAuthStore";

import { Sidebar, MenuBar } from "@/shared/components/layout";
import { Button } from "@/shared/components/ui";

import { ROUTES } from "@/shared/data/routes";
import iconPlus from "@/assets/icon-plus.svg";

type MainLayoutProps = {
	children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	const user = useAuthStore((state) => state.user);
	const isInitialized = useAuthStore((state) => state.isInitialized);

	if (!isInitialized) {
		return null;
	}

	if (!user) {
		return <Navigate to={ROUTES.LOGIN} replace />;
	}

	return (
		<div className="flex">
			<Sidebar />
			<main className="flex-1">
				{children}
				<MenuBar />
				<Link to={ROUTES.CREATE_NOTE} className="xl:hidden">
					<Button
						variant="primary"
						type="button"
						className="fixed right-4 bottom-18 w-12 h-12 p-0 rounded-full sm:bottom-26 sm:right-6 md:w-16 md:h-16"
					>
						<img src={iconPlus} alt="plus-icon" className="invert w-6 h-6 md:w-8 md:h-8" />
					</Button>
				</Link>
			</main>
		</div>
	);
};

export default MainLayout;
