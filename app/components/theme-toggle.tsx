"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { Button } from "./ui/button"
import { useTheme } from "~/hooks/useTheme"

export function ModeToggle() {
	const { theme, setTheme } = useTheme()

	return (
		<Button
			variant="ghost"
			type="button"
			size="icon"
			className="px-2"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			<SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
			<MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
		</Button>
	)
}
