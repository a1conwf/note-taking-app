import { createBrowserRouter, Outlet } from "react-router";
import { AuthLayout, MainLayout } from "@/app/layouts";
import { ROUTES } from "@/shared/data/routes";

import { Login, ForgotPassword, Signup, ResetPassword } from "@/features/auth/pages";
import { AllNotesPage, ArchivedNotesPage, CreateNotePage } from "@/features/notes/pages";
import { SelectedTagPage, TagsPage } from "@/features/tags/pages";

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
				path: ROUTES.ALL_NOTES,
				element: <AllNotesPage />,
			},
			{
				path: ROUTES.ARCHIVED_NOTES,
				element: <ArchivedNotesPage />,
			},
			{
				path: ROUTES.SELECTED_TAG,
				element: <SelectedTagPage />,
			},
			{
				path: ROUTES.TAGS,
				element: <TagsPage />,
			},
			{
				path: ROUTES.CREATE_NOTE,
				element: <CreateNotePage />,
			},
		],
	},
]);
