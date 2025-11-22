import React from "react";
import { clsx } from "clsx";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
	({ className, ...props }, ref) => {
		return (
			<div ref={ref} is-="spinner" className={clsx(className)} {...props} />
		);
	},
);

Spinner.displayName = "Spinner";
