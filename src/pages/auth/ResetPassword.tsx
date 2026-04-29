import React from "react";

import AuthFormCard from "@/features/auth/components/AuthFormCard";
import ResetPasswordForm from "@/features/auth/forms/ResetPasswordForm";

const ResetPassword: React.FC = () => {
	return (
		<div className="wrapper">
			<AuthFormCard
				title="Reset Your Password"
				description="Choose a new password to secure your account."
			>
				<ResetPasswordForm />
			</AuthFormCard>
		</div>
	);
};

export default ResetPassword;
