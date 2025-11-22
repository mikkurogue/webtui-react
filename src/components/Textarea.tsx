import React from "react";
import { clsx } from "clsx";

export interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => {
		return <textarea ref={ref} className={clsx(className)} {...props} />;
	},
);

Textarea.displayName = "Textarea";
