import React from "react";

import AuthFormCard from "@/features/auth/components/AuthFormCard";
import LoginForm from "@/features/auth/forms/LoginForm";

const Login: React.FC = () => {
	return (
		<div className="wrapper">
			<AuthFormCard title="Welcome to Note" description="Please log in to continue">
				<LoginForm />
			</AuthFormCard>
		</div>
	);
};

export default Login;
