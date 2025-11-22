import React from "react";
import { clsx } from "clsx";

export type ButtonVariant =
	| "foreground0"
	| "foreground1"
	| "foreground2"
	| "background0"
	| "background1"
	| "background2";
export type ButtonSize = "small" | "default" | "large";
export type BoxStyle = "square" | "round";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	box?: BoxStyle;
	children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ variant, size, box, className, children, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={clsx(className)}
				{...(variant && { "variant-": variant })}
				{...(size && { "size-": size })}
				{...(box && { "box-": box })}
				{...props}
			>
				{children}
			</button>
		);
	},
);

Button.displayName = "Button";
