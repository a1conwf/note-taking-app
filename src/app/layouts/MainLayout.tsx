import React from "react";
import { Navigate } from "react-router";

import { useAuthStore } from "@/features/auth/store/useAuthStore";
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

	return <>{children}</>;
};

export default MainLayout;
