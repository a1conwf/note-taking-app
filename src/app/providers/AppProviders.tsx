import React, { useEffect } from "react";

import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuthStore } from "@/features/auth/store/useAuthStore";

type AppProvidersProps = {
	children: React.ReactNode;
};

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
	const init = useAuthStore((state) => state.init);

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: 1,
				staleTime: 1000 * 60 * 5,
				refetchOnWindowFocus: false,
			},
		},
	});

	useEffect(() => {
		void init();
	}, [init]);

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<Toaster position="top-center" />
		</QueryClientProvider>
	);
};

export default AppProviders;
