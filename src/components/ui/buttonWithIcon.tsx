import { FC, ReactNode } from "react";

type ButtonWithIconProps = {
  href: string;
  text: string;
  icon: ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
};

const sizeClasses = {
  small: "px-2.5 py-1.5 text-sm",
  medium: "px-3 py-2 text-sm",
  large: "px-3.5 py-2.5 text-sm"
};

const iconSizeClasses = {
  small: "h-4 w-4",
  medium: "h-5 w-5",
  large: "h-6 w-6"
};

const ButtonWithIcon: FC<ButtonWithIconProps> = ({ href, text, icon, className, size = "medium" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-x-2 rounded-md bg-indigo-600 ${sizeClasses[size]} font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
    >
      <span className={iconSizeClasses[size]}>
        {icon}
      </span>
      {text}
    </a>
  );
};

export default ButtonWithIcon;
