import { ButtonProps as HTMLButtonProps } from "@/types/button.props";
import { MotionProps } from "framer-motion";
import React from "react";
import { MotionB } from "@/lib/framer";

type ButtonProps = HTMLButtonProps & MotionProps;

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "default",
      size = "md",
      fullWidth = false,
      className = "",
      icon,
      iconPosition = "left",
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "rounded-lg transition-all duration-200 font-medium cursor-pointer inline-flex items-center justify-center gap-2 flex justify-center align-center";

    const variantClasses = {
      default:
        "bg-white border border-gray-300 hover:border-gray-400 text-gray-800",
      outline: "border-2 border-gray-800 hover:bg-gray-50 text-gray-800",
      ghost: "border-none hover:bg-gray-100 text-gray-800",
    };

    const sizeClasses = {
      sm: "py-2 px-4 text-sm",
      md: "py-3 px-6 text-base",
      lg: "py-4 px-8 text-lg",
    };

    return (
      <MotionB
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${
          sizeClasses[size]
        } ${fullWidth ? "w-full" : ""} ${className}`}
        whileHover={{
          scale: 1.02,
          backgroundColor: variant === "default" ? "#f9fafb" : undefined,
        }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {iconPosition === "left" && icon}
        {children}
        {iconPosition === "right" && icon}
      </MotionB>
    );
  }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
