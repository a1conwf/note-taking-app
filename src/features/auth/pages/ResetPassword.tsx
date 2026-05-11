import React from "react";

import { Wrapper } from "@/shared/components/ui";

import { AuthFormCard } from "@/features/auth/components";
import { ResetPasswordForm } from "@/features/auth/forms";

const ResetPassword: React.FC = () => {
	return (
		<Wrapper>
			<AuthFormCard
				title="Reset Your Password"
				description="Choose a new password to secure your account."
			>
				<ResetPasswordForm />
			</AuthFormCard>
		</Wrapper>
	);
};

export default ResetPassword;
