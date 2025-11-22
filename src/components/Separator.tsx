import React from "react";
import { clsx } from "clsx";

export interface SeparatorProps extends React.HTMLAttributes<HTMLHRElement> {}

export const Separator = React.forwardRef<HTMLHRElement, SeparatorProps>(
	({ className, ...props }, ref) => {
		return <hr ref={ref} className={clsx(className)} {...props} />;
	},
);

Separator.displayName = "Separator";
