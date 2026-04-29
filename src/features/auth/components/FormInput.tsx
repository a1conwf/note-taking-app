import React from "react";
import { cn } from "@/lib/utils";

import iconShowPassword from "@/assets/icon-show-password.svg";
import iconHidePassword from "@/assets/icon-hide-password.svg";
import iconInfo from "@/assets/icon-info-red.svg";

type FormInputProps = {
	label: string;
	type: "text" | "email" | "password";
	name: string;
	trailingLabel?: React.ReactNode;
	error?: string;
	showPassword?: boolean;
	onShowPassword?: () => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">;

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
	(
		{
			label,
			type,
			name,
			required,
			trailingLabel,
			className,
			disabled,
			error,
			showPassword,
			onShowPassword,
			...inputProps
		},
		ref,
	) => {
		const inputType = type === "password" && showPassword ? "text" : type;

		return (
			<div className="flex flex-col gap-2">
				<div className="flex items-center">
					<label
						htmlFor={name}
						className="text-sm font-medium text-neutral-950 leading-[1.3] tracking[-0.2px]"
					>
						{label} {required && <span className="text-red-500">*</span>}
					</label>
					{trailingLabel && <div className="ml-auto">{trailingLabel}</div>}
				</div>

				<div className="relative">
					<input
						{...inputProps}
						ref={ref}
						type={inputType}
						name={name}
						id={name}
						required={required}
						disabled={disabled}
						className={cn(
							"w-full py-3 pl-4 outline-none border border-neutral-300 rounded-lg text-sm text-neutral-950 leading-[1.3] tracking[-0.2px] transition-all duration-300 placeholder:text-neutral-500 hover:bg-neutral-50 focus:shadow-double-ring focus:border-neutral-950 ",
							type === "password" && "pr-10",
							disabled && "bg-neutral-50 text-neutral-300 cursor-not-allowed",
							error && "border-red-500 focus:border-red-500 focus:shadow-none",
							className,
						)}
					/>

					{type === "password" && (
						<button
							type="button"
							aria-label={showPassword ? "Hide password" : "Show password"}
							aria-pressed={showPassword}
							className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
							onClick={onShowPassword}
						>
							<img
								src={showPassword ? iconHidePassword : iconShowPassword}
								alt="eye-icon"
								aria-hidden="true"
							/>
						</button>
					)}
				</div>

				{error && (
					<div className="flex items-center gap-1">
						<img src={iconInfo} alt="info-icon" className="w-4 h-4" />
						<p className="text-xs text-red-500">{error}</p>
					</div>
				)}
			</div>
		);
	},
);

export default FormInput;
