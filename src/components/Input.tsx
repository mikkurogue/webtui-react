import React from "react";
import { clsx } from "clsx";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type = "text", ...props }, ref) => {
		return (
			<input ref={ref} type={type} className={clsx(className)} {...props} />
		);
	},
);

Input.displayName = "Input";
