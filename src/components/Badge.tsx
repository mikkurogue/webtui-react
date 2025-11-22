import React from "react";
import { clsx } from "clsx";

export type BadgeVariant = "foreground0" | "background0";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	variant?: BadgeVariant;
	children: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
	({ variant, className, children, ...props }, ref) => {
		return (
			<span
				ref={ref}
				is-="badge"
				className={clsx(className)}
				{...(variant && { "variant-": variant })}
				{...props}
			>
				{children}
			</span>
		);
	},
);

Badge.displayName = "Badge";
