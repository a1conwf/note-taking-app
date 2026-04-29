import React from "react";
import { toast } from "react-hot-toast";

import { useAuthStore } from "../store/useAuthStore";

import Button from "@/components/ui/Button";

import iconGoogle from "@/assets/icon-google.svg";

const AuthSocialLogin: React.FC = () => {
	const loginWithGoogle = useAuthStore((state) => state.loginWithGoogle);

	const handleLoginWithGoogle = async () => {
		try {
			await loginWithGoogle();
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "An unknown error occurred");
		}
	};
	return (
		<div className="border-t border-neutral-200 pt-6 flex flex-col items-center gap-4">
			<span className="text-sm text-neutral-600 leading-[1.3] tracking-[-0.2px]">
				Or log in with:
			</span>

			<Button
				variant="border"
				type="button"
				className="flex items-center justify-center gap-4"
				onClick={handleLoginWithGoogle}
			>
				<img src={iconGoogle} alt="google" />
				<span>Google</span>
			</Button>
		</div>
	);
};

export default AuthSocialLogin;
