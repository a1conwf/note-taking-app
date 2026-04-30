import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuthStore } from "../store/useAuthStore";

import { Button } from "@/components/ui";
import { FormInput, AuthSocialLogin, AuthSwitchLink } from "../components";

import { ROUTES } from "@/constants/routes";
import { loginSchema } from "../schemas";

const LoginForm: React.FC = () => {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);

	const login = useAuthStore((state) => state.login);
	const isLoading = useAuthStore((state) => state.isLoading);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof loginSchema>) => {
		try {
			await login(data.email, data.password);
			reset();
			navigate(ROUTES.ALL_NOTES);
			toast.success("Welcome to Notes!");
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

				<FormInput
					label="Password"
					type="password"
					{...register("password")}
					onShowPassword={() => setShowPassword(!showPassword)}
					showPassword={showPassword}
					trailingLabel={
						<Link
							to={ROUTES.FORGOT_PASSWORD}
							className="text-xs text-neutral-600 leading-[1.4] underline hover:text-blue-500 transition-all duration-300"
						>
							Forgot
						</Link>
					}
					error={errors.password?.message}
				/>

				<Button
					variant="primary"
					type="submit"
					label={isLoading ? "Logging in..." : "Login"}
					isLoading={isLoading}
					disabled={isLoading}
				/>
			</div>

			<AuthSocialLogin />
			<AuthSwitchLink text="No account yet?" link={ROUTES.SIGNUP} linkText="Sign up" />
		</form>
	);
};

export default LoginForm;
