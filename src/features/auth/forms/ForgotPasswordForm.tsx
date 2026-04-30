import React from "react";
import toast from "react-hot-toast";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormInput } from "../components";
import { Button } from "@/components/ui";

import { forgotPasswordSchema } from "../schemas";
import { useAuthStore } from "../store/useAuthStore";

const ForgotPasswordForm: React.FC = () => {
	const forgotPassword = useAuthStore((state) => state.forgotPassword);
	const isLoading = useAuthStore((state) => state.isLoading);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<z.infer<typeof forgotPasswordSchema>>({
		resolver: zodResolver(forgotPasswordSchema),
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof forgotPasswordSchema>) => {
		try {
			await forgotPassword(data.email);
			reset();
			toast.success("If an account exists with this email, a password reset link will be sent.");
		} catch (error) {
			toast.error(
				error instanceof Error
					? error.message
					: "Could not send reset link. Please try again later.",
			);
		}
	};

	return (
		<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
			<div className="flex flex-col gap-4">
				<FormInput
					label="Email Address"
					type="email"
					{...register("email")}
					placeholder="email@example.com"
					error={errors.email?.message}
				/>

				<Button
					variant="primary"
					type="submit"
					label={isLoading ? "Sending..." : "Send Reset Link"}
					disabled={isLoading}
				/>
			</div>
		</form>
	);
};

export default ForgotPasswordForm;
