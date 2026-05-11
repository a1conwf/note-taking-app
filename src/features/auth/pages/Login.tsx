import React from "react";

import { Wrapper } from "@/shared/components/ui";

import { AuthFormCard } from "@/features/auth/components";
import { LoginForm } from "@/features/auth/forms";

const Login: React.FC = () => {
	return (
		<Wrapper>
			<AuthFormCard title="Welcome to Note" description="Please log in to continue">
				<LoginForm />
			</AuthFormCard>
		</Wrapper>
	);
};

export default Login;
