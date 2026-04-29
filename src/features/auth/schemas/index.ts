import { z } from "zod";

export const loginSchema = z.object({
	email: z
		.string()
		.min(1, { message: "Email is required" })
		.email({ message: "Please enter a valid email address" }),
	password: z.string().min(1, { message: "Password is required" }),
});

export const forgotPasswordSchema = z.object({
	email: z
		.string()
		.min(1, { message: "Email is required" })
		.email({ message: "Please enter a valid email address" }),
});

export const resetPasswordSchema = z
	.object({
		newPassword: z
			.string()
			.min(1, { message: "Password is required" })
			.min(8, { message: "Password must be at least 8 characters long" }),
		confirmNewPassword: z.string().min(1, { message: "Password is required" }),
	})
	.refine((data) => data.newPassword === data.confirmNewPassword, {
		message: "Passwords do not match",
		path: ["confirmNewPassword"],
	});

export const signupSchema = z.object({
	email: z
		.string()
		.min(1, { message: "Email is required" })
		.email({ message: "Please enter a valid email address" }),
	password: z
		.string({ message: "Password is required" })
		.min(8, { message: "Password must be at least 8 characters long" }),
});
