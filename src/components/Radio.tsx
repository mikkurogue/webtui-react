import React from "react";
import { clsx } from "clsx";

export interface RadioProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
	label?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
	({ className, label, id, ...props }, ref) => {
		const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

		return (
			<div className={clsx("radio-wrapper", className)}>
				<input ref={ref} type="radio" id={radioId} {...props} />
				{label && <label htmlFor={radioId}>{label}</label>}
			</div>
		);
	},
);

Radio.displayName = "Radio";
