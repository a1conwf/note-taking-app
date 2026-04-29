import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

type ButtonProps = {
	variant: "primary" | "secondary" | "border";
	type: "submit" | "reset" | "button";
	label?: string;
	disabled?: boolean;
	isLoading?: boolean;
	className?: string;
	onClick?: () => void;
	children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
	variant,
	type,
	label,
	disabled,
	className,
	onClick,
	children,
	isLoading,
}) => {
	return (
		<button
			className={cn(
				"w-full flex items-center justify-center gap-2 border border-transparent px-4 py-3 rounded-lg text-sm font-medium outline-none leading-[1.2] tracking-[-0.2px] focus:shadow-double-ring transition-all duration-300",
				variant === "primary" && " bg-blue-500 text-white hover:bg-blue-700",
				variant === "secondary" &&
					"bg-neutral-100 text-neutral-600 hover:bg-white hover:text-neutral-950 hover:border-neutral-300 focus:border-neutral-950",
				variant === "border" &&
					"border-neutral-300 bg-white text-neutral-950 hover:bg-neutral-100 hover:text-neutral-600 hover:border-transparent focus:border-neutral-950",
				disabled && "bg-neutral-50 text-neutral-300 cursor-not-allowed hover:bg-neutral-50",
				className,
			)}
			type={type}
			disabled={disabled}
			onClick={onClick}
		>
			{isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
			{children || label}
		</button>
	);
};

export default Button;
