import React from "react";

import iconInfo from "@/assets/icon-info.svg";

const PasswordHint: React.FC = () => {
	return (
		<div className="flex items-center gap-2">
			<img src={iconInfo} alt="info-icon" className="w-4 h-4" />
			<span className="text-xs text-neutral-600 leading-[1.4]">At least 8 characters</span>
		</div>
	);
};

export default PasswordHint;
