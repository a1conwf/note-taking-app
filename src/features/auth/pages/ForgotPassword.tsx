import React from "react";

import { Wrapper } from "@/shared/components/ui";

import { AuthFormCard } from "@/features/auth/components";
import { ForgotPasswordForm } from "@/features/auth/forms";

const ForgotPassword: React.FC = () => {
	return (
		<Wrapper>
			<AuthFormCard
				title="Forgotten your password?"
				description="Enter your email below, and we'll send you a link to reset it."
			>
				<ForgotPasswordForm />
			</AuthFormCard>
		</Wrapper>
	);
};

export default ForgotPassword;
