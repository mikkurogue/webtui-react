import React from "react";
import { clsx } from "clsx";

export interface DialogProps
	extends React.DialogHTMLAttributes<HTMLDialogElement> {
	children: React.ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
}

export const Dialog = React.forwardRef<HTMLDialogElement, DialogProps>(
	({ children, className, isOpen, onClose, ...props }, ref) => {
		const dialogRef = React.useRef<HTMLDialogElement>(null);

		React.useImperativeHandle(ref, () => dialogRef.current!);

		React.useEffect(() => {
			const dialog = dialogRef.current;
			if (!dialog) return;

			if (isOpen) {
				dialog.showModal();
			} else {
				dialog.close();
			}
		}, [isOpen]);

		React.useEffect(() => {
			const dialog = dialogRef.current;
			if (!dialog || !onClose) return;

			const handleClose = () => {
				onClose();
			};

			dialog.addEventListener("close", handleClose);
			return () => dialog.removeEventListener("close", handleClose);
		}, [onClose]);

		return (
			<dialog ref={dialogRef} className={clsx(className)} {...props}>
				{children}
			</dialog>
		);
	},
);

Dialog.displayName = "Dialog";
