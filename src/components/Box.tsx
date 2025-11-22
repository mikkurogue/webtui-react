import React from "react";
import { clsx } from "clsx";

export type BoxStyle = "square" | "round";
export type ContainerSize = "fill";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
	box?: BoxStyle;
	container?: ContainerSize;
	children: React.ReactNode;
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
	({ box, container, className, children, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={clsx(className)}
				{...(box && { "box-": box })}
				{...(container && { "container-": container })}
				{...props}
			>
				{children}
			</div>
		);
	},
);

Box.displayName = "Box";
