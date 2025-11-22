import React from "react";
import { clsx } from "clsx";

export interface CheckboxProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
	label?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
	({ className, label, id, ...props }, ref) => {
		const checkboxId =
			id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

		return (
			<div className={clsx("checkbox-wrapper", className)}>
				<input ref={ref} type="checkbox" id={checkboxId} {...props} />
				{label && <label htmlFor={checkboxId}>{label}</label>}
			</div>
		);
	},
);

Checkbox.displayName = "Checkbox";
