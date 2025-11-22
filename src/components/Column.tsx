import React from "react";
import { clsx } from "clsx";

export type AlignType = "between" | "center" | "start" | "end";

export interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
	align?: AlignType;
	children: React.ReactNode;
}

export const Column = React.forwardRef<HTMLDivElement, ColumnProps>(
	({ align, className, children, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={clsx(className)}
				{...(align && { "align-": align })}
				{...props}
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "1lh",
					...props.style,
				}}
			>
				{children}
			</div>
		);
	},
);

Column.displayName = "Column";
