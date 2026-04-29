import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormInput, PasswordHint } from "../components";
import Button from "@/components/ui/Button";

import { resetPasswordSchema } from "../schemas";
import { useAuthStore } from "../store/useAuthStore";
import { ROUTES } from "@/constants/routes";

const ResetPasswordForm: React.FC = () => {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const resetPassword = useAuthStore((state) => state.resetPassword);
	const isLoading = useAuthStore((state) => state.isLoading);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<z.infer<typeof resetPasswordSchema>>({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {
			newPassword: "",
			confirmNewPassword: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof resetPasswordSchema>) => {
		try {
			await resetPassword(data.newPassword);
			reset();
			navigate(ROUTES.LOGIN);
			toast.success("Your password has been updated.");
		} catch (error) {
			toast.error(
				error instanceof Error
					? error.message
					: "Could not reset password. Please try again later.",
			);
		}
	};

	return (
		<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-1">
					<FormInput
						label="New Password"
						type="password"
						{...register("newPassword")}
						onShowPassword={() => setShowPassword(!showPassword)}
						showPassword={showPassword}
						error={errors.newPassword?.message}
					/>
					<PasswordHint />
				</div>

				<FormInput
					label="Confirm New Password"
					type="password"
					{...register("confirmNewPassword")}
					onShowPassword={() => setShowConfirmPassword(!showConfirmPassword)}
					showPassword={showConfirmPassword}
					error={errors.confirmNewPassword?.message}
				/>

				<Button
					variant="primary"
					type="submit"
					label={isLoading ? "Resetting..." : "Reset Password"}
					disabled={isLoading}
				/>
			</div>
		</form>
	);
};

export default ResetPasswordForm;
