import logoImage from "@/assets/logo.svg";
import { cn } from "@/lib/utils";

type LogoProps = {
	className?: string;
};

const Logo: React.FC<LogoProps> = ({ className }) => {
	return (
		<img
			src={logoImage}
			alt="notes-taking-app-logo"
			className={cn("w-[95px] h-[28px] object-contain", className)}
		/>
	);
};

export default Logo;
