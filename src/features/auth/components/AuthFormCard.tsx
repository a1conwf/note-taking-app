import React from "react";

import Logo from "@/components/ui/Logo";

type AuthFormCardProps = {
	title: string;
	description: string;
	children: React.ReactNode;
};

const AuthFormCard: React.FC<AuthFormCardProps> = ({ title, description, children }) => {
	return (
		<div className="w-full min-w-[300px] p-4 bg-white border border-neutral-200 rounded-xl shadow-lg sm:min-w-[343px] md:p-8 md:min-w-[522px] lg:min-w-[540px] lg:p-12">
			<div className="flex flex-col items-center gap-4">
				<Logo />

				<div className="mb-10 text-center">
					<h1 className="mb-2 text-neutral-950 text-preset-1">{title}</h1>
					<p className="text-neutral-600 text-preset-5">{description}</p>
				</div>
			</div>

			{children}
		</div>
	);
};

export default AuthFormCard;
