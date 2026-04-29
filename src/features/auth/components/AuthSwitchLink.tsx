import React from "react";
import { Link } from "react-router";

type AuthSwitchLinkProps = {
	text: string;
	link: string;
	linkText: string;
};

const AuthSwitchLink: React.FC<AuthSwitchLinkProps> = ({ text, link, linkText }) => {
	return (
		<div className="pt-4 flex gap-1 items-center justify-center border-t border-neutral-200">
			<span className="text-sm text-neutral-600 leading-[1.3] tracking-[-0.2px]">{text}</span>
			<Link
				to={link}
				className="text-sm text-neutral-950 leading-[1.3] tracking-[-0.2px] hover:text-blue-500 transition-all duration-300"
			>
				{linkText}
			</Link>
		</div>
	);
};

export default AuthSwitchLink;
