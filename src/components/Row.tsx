import React from "react";
import { clsx } from "clsx";

export type AlignType = "between" | "center" | "start" | "end";

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
	align?: AlignType;
	children: React.ReactNode;
}

export const Row = React.forwardRef<HTMLDivElement, RowProps>(
	({ align, className, children, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={clsx(className)}
				{...(align && { "align-": align })}
				{...props}
				style={{
					display: "flex",
					flexDirection: "row",
					gap: "1ch",
					...props.style,
				}}
			>
				{children}
			</div>
		);
	},
);

Row.displayName = "Row";
