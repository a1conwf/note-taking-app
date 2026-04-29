import React, { useEffect } from "react";

import { Toaster } from "react-hot-toast";
import { useAuthStore } from "@/features/auth/store/useAuthStore";

type AppProvidersProps = {
	children: React.ReactNode;
};

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
	const init = useAuthStore((state) => state.init);

	useEffect(() => {
		void init();
	}, [init]);

	return (
		<>
			{children}
			<Toaster position="top-center" />
		</>
	);
};

export default AppProviders;
