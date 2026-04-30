import React from "react";

import { Wrapper } from "@/components/ui";

import AuthFormCard from "@/features/auth/components/AuthFormCard";
import LoginForm from "@/features/auth/forms/LoginForm";

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
