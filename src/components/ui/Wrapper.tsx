import React from "react";
import { cn } from "@/lib/utils";

type WrapperProps = {
	children: React.ReactNode;
	className?: string;
};

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
	return <div className={cn("w-full px-4 md:px-8", className)}>{children}</div>;
};

export default Wrapper;
