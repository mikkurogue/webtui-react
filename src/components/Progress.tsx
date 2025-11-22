import React from "react";
import { clsx } from "clsx";

export interface ProgressProps
	extends React.ProgressHTMLAttributes<HTMLProgressElement> {}

export const Progress = React.forwardRef<HTMLProgressElement, ProgressProps>(
	({ className, ...props }, ref) => {
		return <progress ref={ref} className={clsx(className)} {...props} />;
	},
);

Progress.displayName = "Progress";
