import React from "react";
import { Navigate } from "react-router";

import { useAuthStore } from "@/features/auth/store/useAuthStore";

import Sidebar from "@/components/shared/sidebar/Sidebar";
import MenuBar from "@/components/shared/menu-bar/MenuBar";

import { ROUTES } from "@/constants/routes";

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
			</main>
		</div>
	);
};

export default MainLayout;
