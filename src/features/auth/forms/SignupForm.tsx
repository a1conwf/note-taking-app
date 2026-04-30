import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { AuthSocialLogin, FormInput, AuthSwitchLink, PasswordHint } from "../components";
import { Button } from "@/components/ui";

import { useAuthStore } from "../store/useAuthStore";

import { signupSchema } from "../schemas";
import { ROUTES } from "@/constants/routes";

const SignupForm: React.FC = () => {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);

	const signup = useAuthStore((state) => state.signup);
	const isLoading = useAuthStore((state) => state.isLoading);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<z.infer<typeof signupSchema>>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof signupSchema>) => {
		try {
			await signup(data.email, data.password);
			reset();
			navigate(ROUTES.ALL_NOTES);
			toast.success("Please check your email to confirm your account.");
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "An unknown error occurred");
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

				<div className="flex flex-col gap-1">
					<FormInput
						label="Password"
						type="password"
						{...register("password")}
						onShowPassword={() => setShowPassword(!showPassword)}
						showPassword={showPassword}
						error={errors.password?.message}
					/>
					<PasswordHint />
				</div>

				<Button
					variant="primary"
					type="submit"
					label={isLoading ? "Signing up..." : "Sign up"}
					isLoading={isLoading}
					disabled={isLoading}
				/>
			</div>

			<AuthSocialLogin />
			<AuthSwitchLink text="Already have an account?" link={ROUTES.LOGIN} linkText="Login" />
		</form>
	);
};

export default SignupForm;
