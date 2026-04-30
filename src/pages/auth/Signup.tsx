import React from "react";
import { Wrapper } from "@/components/ui";

import AuthFormCard from "@/features/auth/components/AuthFormCard";
import SignupForm from "@/features/auth/forms/SignupForm";

const Signup: React.FC = () => {
	return (
		<Wrapper>
			<AuthFormCard
				title="Create Your Account"
				description="Sign up to start organizing your notes and boost your productivity."
			>
				<SignupForm />
			</AuthFormCard>
		</Wrapper>
	);
};

export default Signup;
