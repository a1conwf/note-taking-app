import { createBrowserRouter, Outlet } from "react-router";
import { AuthLayout, MainLayout } from "@/app/layouts";
import { ROUTES } from "@/constants/routes";

import { Login, ForgotPassword, Signup, ResetPassword } from "@/pages/auth";
import HomePage from "@/pages/HomePage";

export const router = createBrowserRouter([
	{
		element: (
			<AuthLayout>
				<Outlet />
			</AuthLayout>
		),
		children: [
			{
				path: ROUTES.LOGIN,
				element: <Login />,
			},
			{
				path: ROUTES.SIGNUP,
				element: <Signup />,
			},
			{
				path: ROUTES.FORGOT_PASSWORD,
				element: <ForgotPassword />,
			},
			{
				path: ROUTES.RESET_PASSWORD,
				element: <ResetPassword />,
			},
		],
	},
	{
		element: (
			<MainLayout>
				<Outlet />
			</MainLayout>
		),
		children: [
			{
				path: ROUTES.HOME,
				element: <HomePage />,
			},
		],
	},
]);
