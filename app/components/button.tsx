import type { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "~/utils/cn"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

export function Button({ children, className, ...props }: ButtonProps) {
	return (
		<button
			className={cn(
				className,
				"font-bold text-white text-bold px-2 py-4",
				className && !className.includes("bg") && "bg-primary",
			)}
			{...props}
		>
			{children}
		</button>
	)
}
