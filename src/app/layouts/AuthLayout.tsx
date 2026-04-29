import { Navigate } from "react-router";

import { useAuthStore } from "@/features/auth/store/useAuthStore";
import { ROUTES } from "@/constants/routes";

type AuthLayoutProps = {
	children: React.ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
	const user = useAuthStore((state) => state.user);
	const isInitialized = useAuthStore((state) => state.isInitialized);

	if (!isInitialized) {
		return null;
	}

	if (user) {
		return <Navigate to={ROUTES.HOME} replace />;
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-neutral-100">
			<main>{children}</main>
		</div>
	);
};

export default AuthLayout;
